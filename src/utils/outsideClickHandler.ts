export const outsideClickHandler = (ref: any, event: MouseEvent, callback: () => void): void => {
  if (ref.current.contains(event.target)) return;

  callback();
}