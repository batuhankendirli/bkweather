export const findDay = (day: number): string => {
  let today: string;
  switch (day) {
    case 0:
      today = 'Pazar';
      break;
    case 1:
      today = 'Pazartesi';
      break;
    case 2:
      today = 'Salı';
      break;
    case 3:
      today = 'Çarşamba';
      break;
    case 4:
      today = 'Perşembe';
      break;
    case 5:
      today = 'Cuma';
      break;
    case 6:
      today = 'Cumartesi';
      break;

    default:
      today = '';
      break;
  }
  return today;
};
