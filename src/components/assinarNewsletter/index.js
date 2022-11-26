import HeroImg from "../../images/hero-image.png"
import mailIcon from "../../images/mail.svg"
import { useFormik } from "formik"

import {DivNewsletter, EmailButton, ErrorMessage, EmailDiv, EmailInput, ImageHero} from './styled'

export function AssinarNewsletter () {
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Por favor, digite um E-Mail';
          }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Endereço de E-Mail Inválido';
          }
          return errors;
        };

    const formik = useFormik({
        initialValues: {
          email: '',
        }, validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


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
                    <EmailInput 
                      type="email"
                      placeholder="Insira seu e-mail" 
                      autoComplete="off" 
                      mailIcon={mailIcon}
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      required
                    />
                    <EmailButton type="submit" href="submit" value={'/submit'}>Assinar newsletter</EmailButton>
                    {formik.errors.email ? <ErrorMessage>{formik.errors.email}</ErrorMessage> : null}
                </EmailDiv>  
            </DivNewsletter>
            
        </div>
    )
}