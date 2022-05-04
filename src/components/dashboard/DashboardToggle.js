import { Dashboard } from '@rsuite/icons';
import React from 'react';
import { Button, Drawer } from 'rsuite';
import DashboardContainer from '.';
import { useModalState } from '../../misc/custom-hooks';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalState();
  return (
    <>
      <Button block color="blue" appearance="primary" onClick={open}>
        <Dashboard /> Dashboard
      </Button>
      <Drawer open={isOpen} onClose={close} placement="left">
        <DashboardContainer />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
