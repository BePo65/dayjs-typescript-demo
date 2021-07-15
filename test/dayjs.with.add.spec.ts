import { expect } from 'chai';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import objectSupport from 'dayjs/plugin/objectSupport';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

dayjs.extend(quarterOfYear);
dayjs.extend(objectSupport);
dayjs.extend(duration);

describe('dayjs with objectSupport', () => {
  it('should set date from object', () => {
    const testDate = dayjs().set({ year: 2010, month: 1, date: 12 });
    const result = testDate.format('YYYY-MM-DD');

    expect(result).to.equal('2010-02-12');
  });

  it('should add month', () => {
    const baseDate = dayjs('2018-08-02');
    const testDate = baseDate.add({ M: 1 });

    expect(testDate.format('YYYY-MM-DD')).to.equal('2018-09-02');
  });

  it('should add month with other syntax', () => {
    const baseDate = dayjs('2018-08-02');
    const testDate = baseDate.add({ month: 1 });

    expect(testDate.format('YYYY-MM-DD')).to.equal('2018-09-02');
  });

  it('should substract day', () => {
    const baseDate = dayjs('2018-08-12');
    const testDate = baseDate.subtract({ D: 1 });

    expect(testDate.format('YYYY-MM-DD')).to.equal('2018-08-11');
  });
});

describe('dayjs with duration', () => {
  it('should create new Duration object', () => {
    const testDuration = dayjs.duration(100);

    expect(dayjs.isDuration(testDuration)).to.equal(true);
    expect(testDuration.asMilliseconds()).to.equal(100);
  });

  it('should create new Duration object with units', () => {
    const testDuration = dayjs.duration(10, 'days');

    expect(dayjs.isDuration(testDuration)).to.equal(true);
    expect(testDuration.asHours()).to.equal(240);
  });

  it('should create new Duration object with object', () => {
    const testDuration = dayjs.duration({days: 10});

    expect(dayjs.isDuration(testDuration)).to.equal(true);
    expect(testDuration.asHours()).to.equal(240);
  });

  it('should create new Duration object with iso string', () => {
    const testDuration = dayjs.duration('+P+0Y+0M+0W+10DT+0H+0M+0S');

    expect(dayjs.isDuration(testDuration)).to.equal(true);
    expect(testDuration.asHours()).to.equal(240);
  });

  it('should add duration to Dayjs object', () => {
    const baseDate = dayjs('2010-01-14');
    const testDuration = dayjs.duration(10, 'days');
    const testDate = baseDate.add(testDuration);

    expect(testDate.isValid()).to.equal(true);
    expect(dayjs.isDuration(testDuration)).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal('2010-01-24');
  });
});

describe('dayjs with quarterOfYear', () => {
  it('should get quarter of dayjs object', () => {
    const testDate = dayjs('2018-10-08');
    const result = testDate.quarter();

    expect(result).to.equal(4);
  });

  it('should add quarter of year', () => {
    const testDate = dayjs('2018-07-08');
    const result = testDate.add(1, 'quarter');

    expect(result.format('YYYY-MM-DD')).to.equal('2018-10-08');
  });

  it('should subtract quarter of year', () => {
    const testDate = dayjs('2018-10-08');
    const result = testDate.subtract(1, 'quarter');

    expect(result.format('YYYY-MM-DD')).to.equal('2018-07-08');
  });

  it('should get start of quarter of year', () => {
    const testDate = dayjs('2018-10-08');
    const result = testDate.startOf('quarter');

    expect(result.format('YYYY-MM-DD')).to.equal('2018-10-01');
  });

  it('should get end of quarter of year', () => {
    const testDate = dayjs('2018-10-08');
    const result = testDate.endOf('quarter');

    expect(result.format('YYYY-MM-DD')).to.equal('2018-12-31');
  });

  it('should display if dates are the same quarter', () => {
    const testDate = dayjs('2018-10-08');
    const referenceDate = dayjs('2018-11-18');
    const result = testDate.isSame(referenceDate, 'quarter');

    expect(result).to.equal(true);
  });

  it('should display if date is before quarter', () => {
    const testDate = dayjs('2018-06-08');
    const referenceDate = dayjs('2018-11-18');
    const result = testDate.isBefore(referenceDate, 'quarter');

    expect(result).to.equal(true);
  });

  it('should display if date is after quarter', () => {
    const testDate = dayjs('2018-10-08');
    const referenceDate = dayjs('2018-06-18');
    const result = testDate.isAfter(referenceDate, 'quarter');

    expect(result).to.equal(true);
  });
});
