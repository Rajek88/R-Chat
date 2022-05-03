import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
// import 'animate.css/animate.min.css';
// edit here

export const Notify = ({ title, message, type }) =>
  Store.addNotification({
    // short hand for 'title : title' is 'title'
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
