export const clickHandler = (callback, brake = null, callbackArguments = null) => {
  if (brake) return;

  callback(callbackArguments);
};
