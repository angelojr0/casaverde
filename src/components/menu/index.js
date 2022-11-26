import logo from '../../images/logo.svg'

import {ImageDiv, MenuWrapper, NavAnchor, NavBar, NavList, NavUl} from './styled.jsx'

export function Menu() {
    return (
      <MenuWrapper>

        <NavBar>

            <ImageDiv>
                <img src={logo} alt="Logo" style={{display:'flex', margin:'auto'}} />
            </ImageDiv>
            <NavUl>
                <NavList>
                    <NavAnchor href='#'> Como fazer</NavAnchor>
                    /
                </NavList>
                <NavList>
                    <NavAnchor href='#'> Ofertas</NavAnchor>
                    /
                </NavList>
                <NavList>
                    <NavAnchor href='#'> Depoimentos</NavAnchor>
                    /
                </NavList>
                <NavList>
                    <NavAnchor href='#'> Videos</NavAnchor>
                    /
                </NavList>
                <NavList>
                    <NavAnchor href='#'> Meu carrinho</NavAnchor>
                    
                </NavList>
            </NavUl> 
            
        </NavBar>

      </MenuWrapper>
    );
  }
    