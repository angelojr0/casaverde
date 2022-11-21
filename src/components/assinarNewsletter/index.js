import HeroImg from "../../images/hero-image.png"
import mailIcon from "../../images/mail.svg"

import {DivNewsletter, EmailButton, EmailDiv, EmailInput, ImageHero} from './styled'

export function AssinarNewsletter () {
    return (
        <div>
            <div>
                <ImageHero src={HeroImg} alt='Imagem de uma planta' />
            </div>
            <DivNewsletter>
                <h2>Sua casa com as </h2>
                <h1>melhores plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
                    Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

                <EmailDiv>
                    <EmailInput type="email" placeholder="Insira seu e-mail" autoComplete="off" mailIcon={mailIcon}/>
                    <EmailButton type="submit">Assinar newsletter</EmailButton>
                </EmailDiv>
            </DivNewsletter>
            
        </div>
    )
}