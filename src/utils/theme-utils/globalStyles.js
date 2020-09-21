import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Maven Pro', sans-serif;    
        transition: all 0.50s linear;
  }
 
 a{
color: ${({ theme }) => theme.linkColor};
 }
a:hover{
color: ${({ theme }) => theme.linkHoverColor};
 }
 
  .toggle.checkcross{
    color: ${({ theme }) => theme.wheatColor};
  }

  .repoResults table{
      color:  ${({ theme }) => theme.tableColor};
  }
  .repoResults table tr:hover{
      color:  ${({ theme }) => theme.tableColor};
      background: ${({ theme }) => theme.tableHover};
  }
  `