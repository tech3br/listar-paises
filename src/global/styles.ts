import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`

  /* removendo a formatacao padrao*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  /* inserindo o font-size da tag HTML para ajuste em responsividade */
  html{
    font-size: 62.5%;
  }

  html, body{
    height: 500%;
  }

  /* inserindo no corpo fontes padroes de cada sistema para melhorar o aspecto visual*/
  body{
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
 
`

export default globalStyles