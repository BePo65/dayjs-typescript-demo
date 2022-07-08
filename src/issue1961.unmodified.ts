import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const demotime1 = dayjs().subtract(40, 'm');
const testRelativeTime1 = demotime1.fromNow();
console.log(`Test with 40 minutes: ${testRelativeTime1}`);
// gives "Test with 40 minutes: 40 minutes ago"

const demotime2 = dayjs().subtract(59, 'm');
const testRelativeTime2 = demotime2.fromNow();
console.log(`Test with 59 minutes: ${testRelativeTime2}`);
// gives "Test with 59 minutes: an hour ago"

const demotime3 = dayjs().subtract(61, 'm');
const testRelativeTime3 = demotime3.fromNow();
console.log(`Test with 61 minutes: ${testRelativeTime3}`);
// gives "Test with 59 minutes: an hour ago"
