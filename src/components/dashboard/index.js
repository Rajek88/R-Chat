// import { Exit } from '@rsuite/icons';
import React from 'react';
import { Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import EditableInputs from './EditableInputs';

const DashboardContainer = ({ onSignOut }) => {
  const { profile } = useProfile();
  const onSave = newData => {
    // eslint-disable-next-line no-console
    console.log(newData);
  };
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>R-Chat</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h4>Hey ! {profile.name}</h4>
        <Divider />
        <EditableInputs
          name="nickname"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" appearance="primary" onClick={onSignOut}>
          Logout
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default DashboardContainer;
