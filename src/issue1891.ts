import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

const now = dayjs();

console.log(`Format current date with 'D0' => ${now.format('Do')}`);