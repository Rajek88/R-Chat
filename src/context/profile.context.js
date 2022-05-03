import { off, onValue, ref } from 'firebase/database';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const authUnsubscribe = auth.onAuthStateChanged(authObj => {
      let profileRef;
      // console.log('authObj', authObj);
      if (authObj) {
        profileRef = ref(database, `/profiles/${authObj.uid}`);
        // adding listener on value
        onValue(profileRef, snapshot => {
          const { name, createdAt, responses } = snapshot.val();
          // console.log('profile snapshot data : ', name);
          //   get the user data and put it in profile object via state
          const newProfile = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
            photoURL: authObj.photoURL,
            responses,
          };

          setProfile(newProfile);
          setLoading(false);
        });
      } else {
        //   to remove the listener
        if (profileRef) {
          off(profileRef);
        }
        setProfile(null);
        setLoading(false);
      }
    });

    // to unsubscribe from on authStateChange subscription
    return () => {
      authUnsubscribe();
    };
  }, []);

  //   Toprevents non-stable values (i.e. object identities) from being used as a value for Context.Provider.
  const isLoading = useMemo(() => ({ isLoading: loading }), [loading]);
  const userProfile = useMemo(() => ({ userProfile: profile }), [profile]);
  return (
    <ProfileContext.Provider value={(isLoading, userProfile)}>
      {children}
    </ProfileContext.Provider>
  );
};

// create a hook to use this ProfileContext
export const useProfile = () => useContext(ProfileContext);
