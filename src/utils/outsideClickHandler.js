export const outsideClickHandler = (ref, event, callback) => {
  if (ref.current.contains(event.target)) return;

  callback();
}