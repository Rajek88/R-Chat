// import { Exit } from '@rsuite/icons';
import React from 'react';
import { Button, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';

const DashboardContainer = ({ onSignOut }) => {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>R-Chat</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h4>Hey ! {profile.name}</h4>
        <Drawer.Actions>
          <Button block color="red" appearance="primary" onClick={onSignOut}>
            Logout
          </Button>
        </Drawer.Actions>
      </Drawer.Body>
    </>
  );
};

export default DashboardContainer;
