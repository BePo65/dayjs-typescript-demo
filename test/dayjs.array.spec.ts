import { expect } from 'chai';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import arraySupport from 'dayjs/plugin/arraySupport';

dayjs.extend(utc);
dayjs.extend(arraySupport);

describe('dayjs with arraySupport', () => {
  it('should create new Dayjs object', () => {
    const testDate = dayjs([2010, 1, 14, 15, 25, 50, 125]);

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.isUTC()).to.equal(false);
    expect(testDate.format('YYYY-MM-DD')).to.equal('2010-02-14');
  });

  it('should create new Dayjs object with utc', () => {
    const testDate = dayjs.utc([2010, 1, 14, 15, 25, 50, 125]);

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.isUTC()).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal('2010-02-14');
    expect(testDate.format().substr(10, 1)).to.equal('T');
    expect(testDate.format().substr(19)).to.match(/(\+00:00|Z)/);
  });
});
