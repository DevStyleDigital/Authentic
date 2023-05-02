import { createGlobalStyle } from 'styled-components';

interface Props {
  overflow: boolean;
}

const ColorsCSS = createGlobalStyle`
  :root {
    --swiper-carrossel-navigation-sides-offset: -250px;
    --swiper-navigation-color: black;
    @media (max-width: 768px) {
      --swiper-carrossel-navigation-sides-offset: -35px !important;
    }
    @media (max-width: 1024px) {
      --swiper-carrossel-navigation-sides-offset: -70px;
    }
    @media (max-width: 1440px) {
      --swiper-carrossel-navigation-sides-offset: -150px;
    }

    --swiper-plantas-navigation-sides-offset: 120px;
    @media (max-width: 600px) {
      --swiper-plantas-navigation-sides-offset: 0px !important;
    }
    @media (max-width: 1440px) {
      --swiper-plantas-navigation-sides-offset:40px;
    }
  }
`;
const FontsCSS = createGlobalStyle`
  :root {
    --font-primary: ${({ theme }) => theme.fonts.primary};
    --font-secondary: ${({ theme }) => theme.fonts.secondary};
  }
`;
const BorderRadiusCSS = createGlobalStyle`
  :root {
    --border-radius-sm: ${({ theme }) => theme.borderRadius.sm};
    --border-radius-xl: ${({ theme }) => theme.borderRadius.xl};
  }
`;
const RootCSS = createGlobalStyle<Props>`
  :root {
    --max-width: ${({ theme }) => theme.maxWidth};
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
    ${(props) => {
      return `overflow-y: ${props.overflow ? 'hidden' : 'auto'};`;
    }}
  }
  body {
    overflow-x: hidden;
    padding: 0 !important;
    color: var(--color-text);
    font-family: var(--font-primary);
    background-color: var(--color-background);
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-secondary);
  }

  .mob-visible {
    display: none;
    @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
      display: block;
    }
  }
  .tab-visible {
    display: none;
    @media (min-width: ${({ theme }) => theme.mediaQueries.minMobile}) {
      display: block;
    }
  }
  .mx-w {
    @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
      max-width: var(--max-width);
      margin: 0 auto;
    }
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
    html {
      margin: 0 auto;
    }
  }
`;

export const GlobalStyles = {
  ColorsCSS,
  FontsCSS,
  BorderRadiusCSS,
  RootCSS,
};
