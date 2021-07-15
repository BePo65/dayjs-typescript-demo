import { expect } from 'chai';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(utc);

describe('dayjs with utc', () => {
  it('should create new Dayjs object as utc', () => {
    const testDate = dayjs.utc();
    const testDateAsString = testDate.format();
    const currentDate = new Date();
    const currentDateAsString = `${currentDate.toISOString().substr(0,10)}`;

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.isUTC()).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal(currentDateAsString);
    expect(testDateAsString.substr(10, 1)).to.equal('T');
    expect(testDate.format().substr(19)).to.match(/(\+00:00|Z)/);
  });

  it('should parse string to utc', () => {
    const testDate = dayjs.utc('08.10.2018', "DD.MM.YYYY");

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal('2018-10-08');
  });

  it('should convert locale date to utc', () => {
    const testDate = dayjs().utc();
    const testDateString = testDate.format();

    expect(testDate.isUTC()).to.equal(true);
    expect(testDateString.substr(10, 1)).to.equal('T');
    expect(testDate.format().substr(19)).to.match(/(\+00:00|Z)/);
  });
});
