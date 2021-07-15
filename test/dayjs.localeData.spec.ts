import { expect } from 'chai';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

describe('dayjs with localeData', () => {
  it('should get week day names', () => {
    const result = dayjs.weekdays();

    expect(result.length).to.equal(7);
  });

  it('should get locale name of month of dayjs object', () => {
    const baseDate = dayjs();
    const testDate = dayjs('2021-06-14');
    const result = baseDate.localeData().months(testDate);

    expect(result).to.equal('June');
  });

  it('should get locale name of months for dayjs instance', () => {
    const testDate = dayjs('2021-06-14');
    const result = testDate.localeData().months();

    expect(result.length).to.equal(12);
  });
});
