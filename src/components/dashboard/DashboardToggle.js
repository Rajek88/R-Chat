import { Dashboard } from '@rsuite/icons';
import React from 'react';
import { Button, Drawer } from 'rsuite';
import DashboardContainer from '.';
import { useModalState, useMediaQuery } from '../../misc/custom-hooks';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery('max-width : 992px');
  return (
    <>
      <Button block color="blue" appearance="primary" onClick={open}>
        <Dashboard /> Dashboard
      </Button>
      <Drawer
        size={isMobile ? 'md' : 'full'}
        open={isOpen}
        onClose={close}
        placement="left"
      >
        <DashboardContainer />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
