import styled from "styled-components";



export const NavList = styled.li `
    list-style: none;
    :last-child {
        font-weight: bold;
    }
`

export const NavAnchor = styled.a `

    padding: 24px 10px 0px 10px;
    text-decoration: none;
    color: #202020;

    @media screen and (max-width: 440px ) {
        display: contents;
    }
`

export const NavUl = styled.ul `
    display: flex;
    margin: 18px auto auto auto ;
    padding: 0px;

    @media screen and (max-width: 900px) {
        padding-left: 0px;
    }
    @media screen and (max-width: 500px) {
        margin-top: 0px;
    }
`

export const NavBar = styled.nav `
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 900px) {
        background-color: white;
        margin-top: -20px;
    }
    @media screen and (max-width: 500px) {
        background-color: white;
        margin-top: -20px;
    }
`

export const MenuWrapper = styled.header `
    display: block;
    position: fixed;
    padding-top: 20px;
    width: 100vw;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1em;
    line-height: 1.25em;
    z-index: 99;

    @media screen and (max-width: 900px) {
        font-size: 12px;
    }
`

export const ImageDiv = styled.div `
    display:block; 
    margin:auto;
    @media screen and (max-width: 500px) {
        transform: scale(0.7);   
    }
`