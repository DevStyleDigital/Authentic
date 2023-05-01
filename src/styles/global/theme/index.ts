import type { iTheme } from 'types/iTheme';
import { sharedTheme } from './shared';

export const defaultTheme: iTheme = {
  name: 'default',

  ...sharedTheme,
};
