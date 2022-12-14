export const clickHandler = (callback: any, brake? : boolean, callbackArguments?: any) : void => {
  if (brake) return;

  callback(callbackArguments);
};
