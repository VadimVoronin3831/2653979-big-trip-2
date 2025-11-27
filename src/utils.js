import dayjs from 'dayjs';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatDuration(startDate, endDate) {
  if (!startDate || !endDate) {
    return '';
  }

  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const days = end.diff(start, 'day');
  const hours = end.diff(start, 'hour') % 24;
  const minutes = end.diff(start, 'minute') % 60;

  if (days > 0) {
    return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }
  if (hours > 0) {
    return minutes === 0
      ? `${hours.toString().padStart(2, '0')}H 00M`
      : `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }
  return `${minutes}M`;
}

function convertDate(startDate, endDate) {
  if (!startDate || !endDate) {
    return '';
  }

  const startTime = dayjs(startDate).format('HH:mm');
  const endTime = dayjs(endDate).format('HH:mm');

  const duration = formatDuration(startDate, endDate);

  return `${startTime} — ${endTime} (${duration})`;
}

export { getRandomArrayElement, getRandomNumber, convertDate };
