import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    
    <div>
        <Outlet />
        <div class="container-footer">
   
      <div class="col-md-4">
        <h4>Enlaces importantes</h4>
        <ul>
          <li><a href="/">Términos y condiciones</a></li>
          <li><a href="/">Política de privacidad</a></li>
          <li><a href="/">Preguntas frecuentes</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4>Redes sociales</h4>
        <ul>
          <li><a href="https://www.linkedin.com/in/kerly-katiuska-santos-prieto-/"><LinkedInIcon/>Likedin</a></li>
          <li><a href="https://twitter.com/home?lang=es"><TwitterIcon/>Twitter</a></li>
          <li><a href="https://www.instagram.com/"><InstagramIcon/>Instagram </a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4>Información de contacto</h4>
        <p>Buenos Aires, Argentina </p>
        <p>Teléfono: (+54) 1173681616</p>
        <p>Correo electrónico: ClinicaOdontologicaKerly@miempresa.com</p>
    </div>
  </div>
    </div>
  )
}

export default Footer