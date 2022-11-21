import logo from '../../images/logo.svg'

import {NavAnchor, NavBar, NavList, NavUl} from './styled.jsx'

export function Menu() {
    return (
      <header>

        <NavBar>
            
            <img src={logo} alt="Logo" style={{display:'flex', margin:'auto'}} />

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

      </header>
    );
  }
    