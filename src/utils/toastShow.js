export default () => {
  const timerShowToast = 1500;
  const toastElement = document.querySelector('.snackbar');
  toastElement.classList.add('show');
  setTimeout(() => {
    toastElement.classList.remove('show');
  }, timerShowToast);
};
