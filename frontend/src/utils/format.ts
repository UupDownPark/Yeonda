import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export const formatNumber = (number: number): string => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K';
  } else {
    return number.toString();
  }
};

export const formatDate = (date: string, format?: string): string => {
  return dayjs(date).format(format ? format : 'YYYY년 MM월 DD일 ddd요일');
};

export const formatToKoreaTime = (date: string) => {
  return dayjs(date).format('A h:mm');
};

export const formatToKoreaDate = (date: string) => {
  return dayjs(date).format('YYYY년 M월 D일 ddd요일');
};

export const formatTimer = (timer: number): string => {
  const minutes: string = Math.floor(timer / 60)
    .toString()
    .padStart(2, '0');
  const seconds: string = (timer % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export const formatBirth = (year: number, month: number, day: number): string => {
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${year}-${formattedMonth}-${formattedDay}`;
};
