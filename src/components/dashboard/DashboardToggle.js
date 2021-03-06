import { signOut } from 'firebase/auth';
import React, { useCallback } from 'react';
import { Button, Drawer, Icon } from 'rsuite';
import DashboardContainer from '.';
import { useModalState, useMediaQuery } from '../../misc/custom-hooks';
import { auth } from '../../misc/firebase';
import { Notify } from '../../utils/Notify';

const DashboardToggle = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery('(max-width : 992px)');

  const onSignOut = useCallback(() => {
    Notify({
      title: 'Signed out !',
      message: 'See you soon..',
      type: 'info',
    });
    signOut(auth);
    close();
  }, [close]);
  return (
    <>
      <Button block color="blue" appearance="primary" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <DashboardContainer onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
