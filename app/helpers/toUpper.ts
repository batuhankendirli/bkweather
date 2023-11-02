export const toUpper = (str: string) => {
  return str
    .split(' ')
    .map((text) => `${text[0].toUpperCase()}${text.slice(1)}`)
    .join(' ');
};
