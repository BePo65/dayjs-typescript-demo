import { expect } from 'chai';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import isBetween from 'dayjs/plugin/isBetween';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isMoment from 'dayjs/plugin/isMoment';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isYesterday from 'dayjs/plugin/isYesterday';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import minMax from 'dayjs/plugin/minMax';
import pluralGetSet from 'dayjs/plugin/pluralGetSet';
import toArray from 'dayjs/plugin/toArray';
import toObject from 'dayjs/plugin/toObject';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekday from 'dayjs/plugin/weekday';
import weekYear from 'dayjs/plugin/weekYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(dayOfYear);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);
dayjs.extend(isMoment);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isYesterday);
dayjs.extend(localizedFormat);
dayjs.extend(minMax);
dayjs.extend(pluralGetSet);
dayjs.extend(toArray);
dayjs.extend(toObject);
dayjs.extend(updateLocale);
dayjs.extend(weekday);
dayjs.extend(weekYear);
dayjs.extend(weekOfYear);

describe('dayjs', () => {
  it('should create new Dayjs object', () => {
    const testDate = dayjs();
    const currentDate = new Date();
    const currentDateAsString = `${currentDate.toISOString().substr(0,10)}`;

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal(currentDateAsString);
  });

  it('should parse string', () => {
    const testDate = dayjs('2018-08-02');

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal('2018-08-02');
  });

  it('should convert unix ticks', () => {
    const testDate = dayjs(1318781876406);

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal('2011-10-16');
  });

  it('should display the current locale', () => {
    const testDate = dayjs.locale();

    expect(testDate).to.equal('en');
  });
});

describe('dayjs with customParseFormat', () => {
  it('should parse string with custom format', () => {
    const testDate = dayjs('08.10.2018', "DD.MM.YYYY");

    expect(testDate.isValid()).to.equal(true);
    expect(testDate.format('YYYY-MM-DD')).to.equal('2018-10-08');
  });
});

describe('dayjs with advancedFormat', () => {
  it('should display dayjs with custom format', () => {
    const testDate = dayjs('08.10.2018', "DD.MM.YYYY");
    const result = testDate.format('Q Do k kk X x');

    expect(testDate.isValid()).to.equal(true);
    expect(result).to.equal('4 8th 24 24 1538949600 1538949600000');
  });
});

describe('dayjs with dayOfYear', () => {
  it('should get dayOfYear', () => {
    const testDate = dayjs('2010-02-15');
    const result = testDate.dayOfYear();

    expect(result).to.equal(46);
  });

  it('should set dayOfYear', () => {
    const testDate = dayjs('2010-01-15');
    const futureDate = testDate.dayOfYear(31);

    expect(futureDate.format('YYYY-MM-DD')).to.equal('2010-01-31');
  });
});

describe('dayjs with isBetween', () => {
  it('should display that date is between 2 dates', () => {
    const testDate = dayjs('2018-10-08');
    const lowerDate = dayjs('2018-08-01');
    const upperDate = dayjs('2018-10-31');
    const result = testDate.isBetween(lowerDate, upperDate, 'days');

    expect(result).to.equal(true);
  });

  it('should display that date is not between 2 dates', () => {
    const testDate = dayjs('2018-03-08');
    const lowerDate = dayjs('2018-08-01');
    const upperDate = dayjs('2018-10-31');
    const result = testDate.isBetween(lowerDate, upperDate, 'days');

    expect(result).to.equal(false);
  });

  it('should respect exclusive limit', () => {
    const testDate = dayjs('2018-10-31');
    const lowerDate = dayjs('2018-08-01');
    const upperDate = dayjs('2018-10-31');
    const result = testDate.isBetween(lowerDate, upperDate, 'days', '[)');

    expect(result).to.equal(false);
  });
});

describe('dayjs with isLeapYear', () => {
  it('should verify that year is leap year', () => {
    const testDate = dayjs('2012-10-08');
    const result = testDate.isLeapYear();

    expect(result).to.equal(true);
  });

  it('should verify that year is not leap year', () => {
    const testDate = dayjs('2013-10-08');
    const result = testDate.isLeapYear();

    expect(result).to.equal(false);
  });
});

describe('dayjs with isMoment', () => {
  it('should verify that Dayjs object is Moment', () => {
    const testDate = dayjs();
    const result = dayjs.isMoment(testDate);

    expect(result).to.equal(true);
  });

  it('should verify that date object is not Moment', () => {
    const testDate = Date();
    const result = dayjs.isMoment(testDate);

    expect(result).to.equal(false);
  });
});

describe('dayjs with isoWeeksInYear', () => {
  it('should get the number of weeks in year', () => {
    const testDate = dayjs('2004-01-01');
    const result = testDate.isoWeeksInYear();

    expect(result).to.equal(53);
  });
});

describe('dayjs with isSameOrAfter', () => {
  it('should display that date is same year as reference', () => {
    const testDate = dayjs('2018-10-08');
    const referenceDate = dayjs('2018-08-01');
    const result = testDate.isSameOrAfter(referenceDate, 'year');

    expect(result).to.equal(true);
  });

  it('should display that date is not same month as reference', () => {
    const testDate = dayjs('2018-08-08');
    const referenceDate = dayjs('2018-09-01');
    const result = testDate.isSameOrAfter(referenceDate, 'month');

    expect(result).to.equal(false);
  });
});

describe('dayjs with isSameOrBefore', () => {
  it('should display that date is same year as reference', () => {
    const testDate = dayjs('2018-10-08');
    const referenceDate = dayjs('2018-08-01');
    const result = testDate.isSameOrBefore(referenceDate, 'year');

    expect(result).to.equal(true);
  });

  it('should display that date is not before month of reference', () => {
    const testDate = dayjs('2018-08-08');
    const referenceDate = dayjs('2018-03-01');
    const result = testDate.isSameOrBefore(referenceDate, 'month');

    expect(result).to.equal(false);
  });
});

describe('dayjs with isToday', () => {
  it('should display that date is today', () => {
    const testDate = dayjs();
    const result = testDate.isToday();

    expect(result).to.equal(true);
  });

  it('should display that date is not today', () => {
    const testDate = dayjs('2018-08-08');
    const result = testDate.isToday();

    expect(result).to.equal(false);
  });
});

describe('dayjs with isTomorrow', () => {
  it('should display that date is tomorrow', () => {
    const testDate = dayjs().add(1, 'day');
    const result = testDate.isTomorrow();

    expect(result).to.equal(true);
  });

  it('should display that date is not tomorrow', () => {
    const testDate = dayjs('2018-08-08');
    const result = testDate.isTomorrow();

    expect(result).to.equal(false);
  });
});

describe('dayjs with isYesterday', () => {
  it('should display that date is yesterday', () => {
    const testDate = dayjs().add(-1, 'day');
    const result = testDate.isYesterday();

    expect(result).to.equal(true);
  });

  it('should display that date is not yesterday', () => {
    const testDate = dayjs('2018-08-08');
    const result = testDate.isYesterday();

    expect(result).to.equal(false);
  });
});

describe('dayjs with localizedFormat', () => {
  it('should display that date in localized format', () => {
    const testDate = dayjs('2018-10-08');
    const result = testDate.format('L LT');

    expect(result).to.equal('10/08/2018 12:00 AM');
  });
});

describe('dayjs with minmax', () => {
  it('should display maximum of 3 dates', () => {
    const testDate = dayjs.max(dayjs('2020-05-12'), dayjs('2018-10-01'), dayjs('2019-07-06'));
    const result = testDate.format('YYYY-MM-DD');

    expect(result).to.equal('2020-05-12');
  });

  it('should display minimum of 3 dates', () => {
    const testDate = dayjs.min(dayjs('2020-05-12'), dayjs('2018-01-10'), dayjs('2019-07-06'));
    const result = testDate.format('YYYY-MM-DD');

    expect(result).to.equal('2018-01-10');
  });
});

describe('dayjs with pluralGetSet', () => {
  it('should set day of dayjs object', () => {
    const testDate = dayjs('2018-10-08');
    const result = testDate.dates(12).format('YYYY-MM-DD');

    expect(result).to.equal('2018-10-12');
  });
});

describe('dayjs with toArray', () => {
  it('should convert dayjs object to array', () => {
    const testDate = dayjs('2018-10-08');
    const result = testDate.toArray();

    expect(result).to.eql([2018, 9, 8, 0, 0, 0, 0]);
  });
});

describe('dayjs with toObject', () => {
  it('should convert dayjs object to object', () => {
    const testDate = dayjs('2018-10-08');
    const result = testDate.toObject();

    expect(result).to.eql({
      years: 2018,
      months: 9,
      date: 8,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
  });
});

describe('dayjs with updateLocale', () => {
  it('should update month names for locale en', () => {
    dayjs.updateLocale('en', {
      months : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Octo', 'Nov', 'Dec']
    });
    const testDate = dayjs('2018-10-08');
    const result = testDate.format('MMMM');

    expect(result).to.equal('Octo');
  });
});

describe('dayjs with weekday', () => {
  it('should display weekday', () => {
    const testDate = dayjs('2018-10-23');
    // get weekday number
    const result = testDate.weekday();

    expect(result).to.equal(2);
  });

  it('should display weekday with offset', () => {
    const testDate = dayjs('2018-10-23');
    // set weekday to wednesday
    const result = testDate.weekday(3);

    expect(result.format('YYYY-MM-DD')).to.equal('2018-10-24');
  });
});

describe('dayjs with weekOfYear', () => {
  it('should display weekOfYear', () => {
    const testDate = dayjs('2018-06-27');
    const result = testDate.week();

    expect(result).to.equal(26);
  });
});

describe('dayjs with weekYear', () => {
  it('should display weekday', () => {
    const testDate = dayjs('2018-10-23');
    const result = testDate.weekYear();

    expect(result).to.equal(2018);
  });
});
