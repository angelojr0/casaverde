import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle `
    
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .bgQuery {
        @media screen and (max-width: 900px) {}
    }
`

export const Background = styled.div `

    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -999;

    background-repeat: ${(props) => props.repeat} ;
    background-position: ${(props) => props.position};
    background-image: url('${(props) => props.url}');

    @media screen and (max-width: 900px) {
        visibility: ${(props) => props.visibility};
        }

`