import dayjs from 'dayjs';

const DEFAULT_FORMAT = 'YYYY-MM-DD';

export const formatDate = (date, format = DEFAULT_FORMAT) =>
  dayjs(date).format(format);
