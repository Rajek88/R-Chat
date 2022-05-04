import React from 'react';
import { Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ref, serverTimestamp, set } from 'firebase/database';
import { auth, database } from '../misc/firebase';
import { Notify } from '../utils/Notify';

const Signin = () => {
  const onGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
        .then(res => {
          // console.log('GAuth result :: ', res);
          const { user } = res;
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
          Notify({
            title: `Welcome ${user.displayName} !`,
            message: 'Logged in successfully',
            type: 'success',
          });
          return res;
        })
        .catch(error => {
          throw error;
        });
    } catch (error) {
      Notify({
        title: 'Oops !',
        message: `Error logging in : ${error}`,
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
                  <Icon icon="google" /> Continue with Google
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
