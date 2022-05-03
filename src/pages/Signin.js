import { Icon } from '@rsuite/icons';
import React from 'react';
import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';
import { BsGoogle } from 'react-icons/bs';

function onGoogleSignIn() {}
const Signin = () => {
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
