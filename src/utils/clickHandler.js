export const clickHandler = (callback, brake) => {
  if (brake) return

  callback()
}