import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`

  ${normalize}
  
  * {
    box-sizing: border-box;
  }
  body{
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a{
    color: inherit;
    text-decoration:none;
  }
  
  input,
  button{
    &:focus,
    &:active{
      outline:none;
    }
  }
  h1,h2,h3,h4,h5,h6{
      font-family:'Maven Pro', sans-serif;
  }
`;

export const theme = {
  blueColor: '#3498db',
  greenColor: '#1abc9c',
  greyColor: '#7f8c8d',
  yellowColor: '#f1c40f',
};
