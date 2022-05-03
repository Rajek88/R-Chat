import { Icon } from '@rsuite/icons';
import React from 'react';
import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';
import { BsGoogle } from 'react-icons/bs';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ref, serverTimestamp, set } from 'firebase/database';
import { auth, database } from '../misc/firebase';
import { Notify } from '../utils/Notify';

const Signin = () => {
  const onGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Start a sign in process for an unauthenticated user.
      const result = await signInWithPopup(auth, provider);
      // This will trigger a full page popup on your app
      // The signed-in user info.
      const { user } = result;
      // console.log('User : ', user);
      const isNewUser =
        user.metadata.creationTime === user.metadata.lastSignInTime;
      // if the user is new
      if (isNewUser) {
        set(ref(database, `/profiles/${user.uid}`), {
          name: user.displayName,
          createdAt: serverTimestamp(),
          photoURL: user.photoURL,
        });
      }
      return Notify({
        title: `Welcome ${user.displayName}!`,
        message: 'Logged in successfully',
        type: 'success',
      });
    } catch (error) {
      return Notify({
        title: 'Error !',
        message: `Error Logging in : ${error}`,
        type: 'danger',
      });
    }
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to R-Chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>

              <div className="mt-3">
                <Button
                  block
                  color="blue"
                  appearance="primary"
                  onClick={onGoogleSignIn}
                >
                  <Icon as={BsGoogle} />
                  &nbsp; Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Signin;
