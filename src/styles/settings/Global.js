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
    background-color: var(--primary-bg);
    position: relative;
    
  }
  :root {

    font-family: 'Raleway', sans-serif;
    --head-font: 'Hamlet', serif;
    
    --primary-bg: ${({ theme }) => theme.primaryBG};
    --secondary-bg: ${({ theme }) => theme.secondaryBG};
    --primary-text: ${({ theme }) => theme.primaryText};
    --primary-accent: ${({ theme }) => theme.primaryAccent};
    --primary-input: ${({ theme }) => theme.primaryInput};
    --primary-active: ${({ theme }) => theme.primaryActive};

    --drop-shadow: ${({ theme }) => theme.dropShadow};
    --bg-overlay: ${({ theme }) => theme.bgOverlay};
    
    --default-transition: color 2s ease;
    
    --bg-opacity: ${({ theme }) => theme.bgOpacity};;    


   
    }
`;
