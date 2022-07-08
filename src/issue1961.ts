import dayjs from 'dayjs';
import { customFromNow } from './issue1961.lib';

const demotime1 = dayjs().subtract(40, 'm');
const testRelativeTime1 = customFromNow(demotime1);
console.log(`Test with 40 minutes: ${testRelativeTime1}`);
// gives "Test with 40 minutes: 40 min"

const demotime2 = dayjs().subtract(59, 'm');
const testRelativeTime2 = customFromNow(demotime2);
console.log(`Test with 59 minutes: ${testRelativeTime2}`);
// gives "Test with 59 minutes: 59 min"

const demotime3 = dayjs().subtract(61, 'm');
const testRelativeTime3 = customFromNow(demotime3);
console.log(`Test with 61 minutes: ${testRelativeTime3}`);
// gives "Test with 61 minutes: 1 hr"
