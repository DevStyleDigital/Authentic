import { iTheme } from 'types/iTheme';

export interface iLayoutContext {
  hamburguer: boolean;
  setHamburguer: React.Dispatch<React.SetStateAction<boolean>>;
  whatsapp: boolean;
  setWhatsapp: React.Dispatch<React.SetStateAction<boolean>>;
}
