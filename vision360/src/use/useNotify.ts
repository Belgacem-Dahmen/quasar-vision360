import { Notify } from 'quasar';

export const successNotification = (message) => {
  Notify.create({
    message,
    color: 'positive',
    icon: 'fa-regular fa-square-check',
    position: 'bottom-right',
    closeBtn: 'X',
  });
};

export const errorNotification = (message) => {
  Notify.create({
    message,
    color: 'negative',
    icon: 'fa-regular fa-rectangle-xmark',
    position: 'bottom-right',

    closeBtn: 'X',
  });
};
