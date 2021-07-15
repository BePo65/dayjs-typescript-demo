import { expect } from 'chai';
import dayjs from 'dayjs';
// import 'dayjs/locale/de';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

// Set global locale
dayjs.locale('de');

describe('locale', () => {
  it('should use "en" locale to format date', () => {
    const result = dayjs('2018-10-07').locale('en').format('L');

    expect(result).to.equal('10/07/2018');
  });
});
