import { createGlobalStyle } from 'styled-components';
import globalFont  from '../fonts/Muli-Regular.ttf';
import MuliBold  from '../fonts/muli-bold.ttf';
import MuliSemiBold  from '../fonts/muli-semi-bold.ttf';
import Avenir  from '../fonts/AEH.ttf';
 
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Muli';
    src: url(${globalFont});
  }

  @font-face {
    font-family: 'Muli-semibold';
    src: url(${MuliSemiBold});
  }

  @font-face {
    font-family: 'Muli-bold';
    src: url(${MuliBold});
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${Avenir});
  }

  body, html {
    height: 100%;
    padding: 0;
    background: white;
    font-family: Muli;
  }

`;
 
export default GlobalStyle;