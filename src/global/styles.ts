import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`

  /* removendo a formatacao padrao do main*/
  * {
    margin: 0;
    padding: 0;    
  }

  /* inserindo o font-size da tag HTML para ajuste em responsividade*/
  html{
    font-size: 62.5%;
  }
  
  /* inserindo o font-size da tag HTML para ajuste em responsividade*/
  body{
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
 
`

export default globalStyles