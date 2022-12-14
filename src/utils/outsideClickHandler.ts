export const outsideClickHandler = (ref: any, event: any, callback: any) => {
  if (ref.current.contains(event.target)) return;

  callback();
}