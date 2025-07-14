// src/lib/logger.ts

type LogLevel = 'info' | 'warn' | 'error';

const log = (level: LogLevel, ...args: object[] | string[]): null => {
  if (process.env.NODE_ENV !== 'production') {
    switch (level) {
      case 'info':
        console.log(...args);
        break;
      case 'warn':
        console.warn(...args);
        break;
      case 'error':
        console.error(...args);
        break;
      default:
        console.log(...args);
    }
  }
  return null;
};

export default log;
