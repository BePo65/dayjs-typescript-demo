import { expect } from 'chai';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(advancedFormat);
dayjs.extend(utc);

describe('dayjs', () => {
  it('should format date', () => {
    const result = dayjs('2018-10-21', 'YYYY-MM-DD').format('DD/MM/YYYY');

    expect(result, 'result should be "21/10/2018"').to.equal('21/10/2018');
  });
});

describe('dayjs with advancedFormat', () => {
	it('should format date as advancedFormat', () => {
    const result = dayjs('2018-10-21', 'YYYY-MM-DD').format('Q Do X');

    expect(result, 'result should be "4 21st 1540072800"').to.equal('4 21st 1540072800');
	});
});

describe('dayjs with utc', () => {
	it('should format date as utc', () => {
    const result = dayjs.utc('2018-10-21', 'YYYY-MM-DD').format();

    expect(result, 'result should be "2018-10-21T00:00:00+00:00"').to.equal('2018-10-21T00:00:00+00:00');
	});
});
