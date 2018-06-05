export const isNative = global && global.navigator.product === "ReactNative";
export const isWeb = !isNative;
