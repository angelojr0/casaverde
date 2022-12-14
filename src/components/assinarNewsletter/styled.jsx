import styled from "styled-components";

export const DivNewsletter = styled.div `
    margin: 210px auto 0px 20vw;
    display: inline-block;
    
    line-height: 2em;
    color: #202020;

    > h1 {
        font: normal normal 900 5em 'Elsie Swash Caps', cursive; 
        max-width: 330px;
    }

    > h2, p {
        font: normal normal 400 22px/27px 'Montserrat', sans-serif;
        opacity: 0.5;
        max-width: 360px;
    }
    > p {font-size: 16px;}

    @media screen and (max-width: 900px) { 
        background-color: #ffe29a;
        width: 100vw;
        height: 620px;
        margin-left: auto;

        > h1, h2, p {
            margin: auto;
        }

    @media screen and (max-width: 500px) {
        > h1 {
            font-size: 4em;
        }
        > h2 {
            font-size: 1.5em;
        }
        > p {
            font-size: 1em;
        }
    }
    }
`

export const EmailDiv = styled.div `
    align-items: center;
    text-align: center;
    display: flex;
    @media screen and (max-width: 900px){
        flex-direction: column;
        padding-top: 30px;
        margin-bottom: 50px;
    }
`

export const EmailInput = styled.input `
    font: normal normal 400 16px/20px 'Montserrat', sans-serif;
    text-indent: 50px;
    width: 390px;
    height: 75px;
    border: 0;
    outline-style: none;
    box-shadow: -2px 2px 6px 1px rgba(0, 0, 0, 0.205);
    margin-top: 40px;
    background: white url('${(props) => props.mailIcon}') no-repeat 10px;

    ::placeholder {
        color: #202020;
        opacity: 0.3;
        padding-left: 40px;
    } 
    :focus::placeholder {color: transparent;}

    @media screen and (max-width: 900px) { 
        display: block;
        margin: auto;
        box-shadow: none;
    }
    @media screen and (max-width: 500px) {
        width: 350px;
    }

`

export const EmailButton = styled.button `
    width: 194px;
    height: 75px;
    border-style: none;
    background-color: #FFCB47;
    color: white;
    font: normal normal 400 16px/20px 'Montserrat', sans-serif;
    box-shadow: 4px 4px 7px 1px #cca032;
    margin-top: 37px;

    :hover {
        background-color: #fabc20;
        transition-duration: 0.4s;
        box-shadow: 4px 4px 7px 1px #ffd467;
    }

    @media screen and (max-width: 900px) { 
        display: block;
        margin: auto;
        box-shadow: none;
        width: 390px;
    }
    @media screen and (max-width: 500px) {
        width: 350px;
    }
`

export const ImageHero = styled.img `
    display: flex;
    position: absolute;
    z-index: -1;
    left: 50vw;

    @media screen and (max-width: 900px) {display: none;}
`

export const ErrorMessage = styled.div `
    color: #8b0909;
    font-size: 18px;
    position: absolute;
    top: 69vh;
    left: 28vw;

    @media screen and (max-width: 900px){
       position: relative; 
       margin: auto;
       top: 0;
       left: 0;
    }
`