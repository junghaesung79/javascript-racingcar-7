import { ERROR_MESSAGES } from '../constants/index.js';

export const throwError = (message) => {
  throw new Error(`${ERROR_MESSAGES.errorPrefix} ${message}`);
};
