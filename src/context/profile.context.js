/* eslint-disable arrow-body-style */
import { off, onValue, ref } from '@firebase/database';
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
  const [userProfile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  //   when the component mounts , use useEffect to get user data

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
  }, [userProfile, loading]);

  // Prevent react contexts from taking non-stable values (react/jsx-no-constructed-context-values)
  // This rule prevents non-stable values (i.e. object identities) from being used as a value for Context.Provider.

  const isLoading = useMemo(() => ({ isLoading: loading }), [loading]);
  const profile = useMemo(() => ({ profile: userProfile }), [userProfile]);
  return (
    <ProfileContext.Provider value={(isLoading, profile)}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
