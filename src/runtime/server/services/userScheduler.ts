import cron from 'node-cron';

export interface Scheduler {
  everySecond: () => void;
  everySeconds: (seconds: number) => void;
  everyMinute: () => void;
  everyMinutes: (minutes: number) => void;
  everyTwoMinutes: () => void;
  everyThreeMinutes: () => void;
  everyFourMinutes: () => void;
  everyFiveMinutes: () => void;
  everyTenMinutes: () => void;
  everyFifteenMinutes: () => void;
  everyThirtyMinutes: () => void;
  hourly: () => void;
  hourlyAt: (minute: number) => void;
  everyOddHour: () => void;
  everyHours: (hours: number) => void;
  everyTwoHours: () => void;
  everyThreeHours: () => void;
  everyFourHours: () => void;
  everySixHours: () => void;
  daily: () => void;
  dailyAt: (hour: number, minute: number, timezone?: string) => void;
  everyDays: (days: number) => void;
  weekly: () => void;
  quarterly: () => void;
  yearly: () => void;
  cron: (interval: string, timezone?: string) => void;
}

function run(callback: Function): Scheduler {
  return {
    everySecond: () => {
      cron.schedule('* * * * * *', callback);
    },
    everySeconds: (seconds: number = 1) => {
      cron.schedule(`*/${seconds} * * * * *`, callback);
    },
    everyMinute: () => {
      cron.schedule('* * * * *', callback);
    },
    everyTwoMinutes: () => {
      cron.schedule('*/2 * * * *', callback);
    },
    everyThreeMinutes: () => {
      cron.schedule('*/3 * * * *', callback);
    },
    everyFourMinutes: () => {
      cron.schedule('*/4 * * * *', callback);
    },
    everyFiveMinutes: () => {
      cron.schedule('*/5 * * * *', callback);
    },
    everyTenMinutes: () => {
      cron.schedule('*/10 * * * *', callback);
    },
    everyFifteenMinutes: () => {
      cron.schedule('*/15 * * * *', callback);
    },
    everyThirtyMinutes: () => {
      cron.schedule('*/30 * * * *', callback);
    },
    everyMinutes: (minutes: number) => {
      cron.schedule(`*/${minutes} * * * *`, callback);
    },
    hourly: () => {
      cron.schedule('0 * * * *', callback);
    },
    everyHours: (hours: number) => {
      cron.schedule(`0 */${hours} * * *`, callback);
    },
    hourlyAt: (minute: number, timezone?: string) => {
      cron.schedule(`${minute} * * * *`, callback, timezone && {  timezone  });
    },
    everyOddHour: () => {
      cron.schedule('0 */2 * * *', callback);
    },
    everyTwoHours: () => {
      cron.schedule('0 */2 * * *', callback);
    },
    everyThreeHours: () => {
      cron.schedule('0 */3 * * *', callback);
    },
    everyFourHours: () => {
      cron.schedule('0 */4 * * *', callback);
    },
    everySixHours: () => {
      cron.schedule('0 */6 * * *', callback);
    },
    dailyAt: (hour: number, minute: number, timezone?: string) => {
      cron.schedule(`${minute} ${hour} * * *`, callback, timezone && { timezone })
    },
    daily: () => {
      cron.schedule('0 0 * * *', callback);
    },
    everyDays: (days: number) => {
      cron.schedule(`0 0 */${days} * *`, callback);
    },
    weekly: () => {
      cron.schedule('0 0 * * 0', callback);
    },
    quarterly: () => {
      cron.schedule('0 0 1 */3 *', callback);
    },
    yearly: () => {
      cron.schedule('0 0 1 1 *', callback);
    },
    cron: (interval: string, timezone?: string) => {
      cron.schedule(interval, callback, timezone && { timezone });
    }
  };
}

export function useScheduler() {
  return {
    run
  };
}
