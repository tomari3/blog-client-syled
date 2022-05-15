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
    font-family: 'Raleway', sans-serif;
    
  }
  :root {

    --head-font: 'Hamlet', serif;
    
    --primary-bg: ${({ theme }) => theme.primaryBG};
    --secondary-bg: ${({ theme }) => theme.secondaryBG};
    --primary-text: ${({ theme }) => theme.primaryText};
    --primary-accent: ${({ theme }) => theme.primaryAccent};

    --primary-input: ${({ theme }) => theme.primaryInput};
    --primary-active: ${({ theme }) => theme.primaryActive};
    --muted-text: ${({ theme }) => theme.mutedText};
    --primary-radius: ${({ theme }) => theme.primaryRadius};

    --primary-err: ${({ theme }) => theme.primaryErr};
    
    --drop-shadow: ${({ theme }) => theme.dropShadow};
    --drop-shadow-strong: ${({ theme }) => theme.dropShadowS};
    --bg-overlay: ${({ theme }) => theme.bgOverlay};
    
    --default-transition: color 2s ease;
    
    --bg-opacity: ${({ theme }) => theme.bgOpacity};;    


   
    }
`;
