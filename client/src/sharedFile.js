import { mediaQuery } from 'styled-media-queries';


 
// Totally optional: define some re-usable breakpoint numbers.
export const breakpoint = {
  medium:    666,
  large:     888,
  wide:      999,
  extraWide: 1111,
};
 
export const media = {
  smallOnly: mediaQuery`(max-width: ${(breakpoint.medium - 1) / 16}em)`,
  medium:    mediaQuery`(min-width: ${breakpoint.medium / 16}em)`,
  large:     mediaQuery`(min-width: ${breakpoint.large / 16}em)`,
  wide:      mediaQuery`(min-width: ${breakpoint.wide / 16}em)`,
  extraWide: mediaQuery`(min-width: ${breakpoint.extraWide / 16}em)`,
  print:     mediaQuery`print`,
};