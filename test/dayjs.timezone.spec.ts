import { expect } from 'chai';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('dayjs with timezone', () => {
  it('should create dayjs object with time zone', () => {
    const testDate = dayjs.tz('2014-06-01 12:00', 'America/New_York');

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal('2014-06-01');
    expect(testDate.format('ZZ')).to.equal('-0400');
  });

  it('should change time zone of dayjs object', () => {
    const baseDate = dayjs('2014-06-01 12:00');
    const testDate = baseDate.tz('America/New_York');

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal('2014-06-01');
    expect(testDate.format('ZZ')).to.equal('-0400');
  });

  it('should guess current time zone', () => {
    const currentTimezone = dayjs.tz.guess();

    expect(currentTimezone).to.equal('Europe/Berlin');
  });
});
