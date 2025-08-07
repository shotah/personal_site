// src/lib/logger.ts

type LogLevel = 'info' | 'warn' | 'error';

const log = (level: LogLevel, ...args: object[] | string[]): null => {
  // Always log in development, and log warnings/errors in production for debugging
  const shouldLog = process.env.NODE_ENV !== 'production' || level === 'warn' || level === 'error';
  
  if (shouldLog) {
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
