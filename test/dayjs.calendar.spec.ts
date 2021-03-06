import { expect } from 'chai';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

describe('dayjs with calendar', () => {
  it('should format date with reference date', () => {
    const baseDate = dayjs('2018-08-02 09:10:11');
    const referenceDate = dayjs('2018-08-01 06:07:08');
    const formattedDate = baseDate.calendar(referenceDate);

    expect(formattedDate).to.equal('Tomorrow at 9:10 AM');
  });

  it('should format date using custom format', () => {
    const customFormat = {
      lastDay: "[Yesterday at] hh:mm:ss",
      sameDay: "[Today at] hh:mm:ss",
      nextDay: "[Tomorrow at] hh:mm:ss",
      nextWeek: "dddd [at] hh:mm:ss",
      lastWeek: "[Last] dddd [at] hh:mm:ss",
      sameElse: 'DD-MM-YYYY'
    };
    const baseDate = dayjs('2018-08-02 09:10:11');
    const referenceDate = dayjs('2018-08-01 06:07:08');
    const formattedDate = baseDate.calendar(referenceDate, customFormat);

    expect(formattedDate).to.equal('Tomorrow at 09:10:11');
  });
});
