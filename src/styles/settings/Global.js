import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
export const Global = createGlobalStyle`

@import url('//fonts.googleapis.com/css2?family=Hahmlet:wght@306&family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;1,100;1,200;1,400;1,600&display=swap');

  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--primary);
    color: var(text);
    position: relative;
    font-family: 'Raleway', sans-serif;
    
  }
  a, a:link, a:visited, a:focus, a:hover, a:active{
text-decoration:none; 
  }
  :root {

    --primaryLighter: ${({ theme }) => theme.primaryLighter};
    --primaryLight: ${({ theme }) => theme.primaryLight};
    --primary: ${({ theme }) => theme.primary};
    --primaryDark: ${({ theme }) => theme.primaryDark};
    --primaryDarker: ${({ theme }) => theme.primaryDarker};

    --accentSofter: ${({ theme }) => theme.accentSofter};
    --accentSoft: ${({ theme }) => theme.accentSoft};
    --accentLighter: ${({ theme }) => theme.accentLighter};
    --accentLight: ${({ theme }) => theme.accentLight};
    --accent: ${({ theme }) => theme.accent};
    --accentDark: ${({ theme }) => theme.accentDark};
    --accentDarker: ${({ theme }) => theme.accentDarker};

    --textLighter: ${({ theme }) => theme.textLighter};
    --textLight: ${({ theme }) => theme.textLight};
    --text: ${({ theme }) => theme.text};
    --textDark: ${({ theme }) => theme.textDark};
    --textDarker: ${({ theme }) => theme.textDarker};

    --successLighter: ${({ theme }) => theme.successLighter};
    --successLight: ${({ theme }) => theme.successLight};
    --success: ${({ theme }) => theme.success};
    --successDark: ${({ theme }) => theme.successDark};
    --successDarker: ${({ theme }) => theme.successDarker};

    --errorLighter: ${({ theme }) => theme.errorLighter};
    --errorLight: ${({ theme }) => theme.errorLight};
    --error: ${({ theme }) => theme.error};
    --errorDark: ${({ theme }) => theme.errorDark};
    --errorDarker: ${({ theme }) => theme.errorDarker};

    --shadowLighter: ${({ theme }) => theme.shadowLighter};
    --shadowLight: ${({ theme }) => theme.shadowLight};
    --shadow: ${({ theme }) => theme.shadow};
    --shadowDark: ${({ theme }) => theme.shadowDark};
    --shadowDarker: ${({ theme }) => theme.shadowDarker};

    --paddingSmaller: ${({ theme }) => theme.paddingSmaller};
    --paddingSmall: ${({ theme }) => theme.paddingSmall};
    --padding: ${({ theme }) => theme.padding};
    --paddingBig: ${({ theme }) => theme.paddingBig};
    --paddingBigger: ${({ theme }) => theme.paddingBigger};

    --radiusSmaller: ${({ theme }) => theme.radiusSmaller};
    --radiusSmall: ${({ theme }) => theme.radiusSmall};
    --radius: ${({ theme }) => theme.radius};
    --radiusBig: ${({ theme }) => theme.radiusBig};
    --radiusBigger: ${({ theme }) => theme.radiusBigger};
    --radiusHuge: ${({ theme }) => theme.radiusHuge};

    --default-transition: color 2s ease;


   
    }
`;
