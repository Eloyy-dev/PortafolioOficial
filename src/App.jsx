import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faCircleUser, faComputer, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './style/main.css'
import computer from './img/computer.png'
import html from './img/html-5.png'
import css from './img/css-3.png'
import js from './img/js.png'
import react from './img/physics.png'
import bt from './img/bootstrap.png'
import commers from './img/ecommers.png'
import pokedex from './img/pokedex.png'
import router from './img/router.png'
import redux from './img/redux.png'
import rick from './img/rick.png'


function App() {

  return (
    <div className='container' id='inicio'>
      <div className="navbar">


        <a href="#inicio" className='containerlink'><FontAwesomeIcon icon={faHouse} className="icono" />Inicio</a>
        <a href="#aboutme" className='containerlink'><FontAwesomeIcon icon={faCircleUser} className="icono" />Sobre Mi</a>
        <a href="#tecnologias" className='containerlink'><FontAwesomeIcon icon={faBrain} className="icono" />Tecnologias</a>
        <a href="#portafolio" className='containerlink'><FontAwesomeIcon icon={faComputer} className="icono" />Portafolio</a>
        <a href="#contacto" className='containerlink'><FontAwesomeIcon icon={faPhone} className="icono" />Contacto</a>

      </div>
      {/* ====================== */}
      <div className='containerInfo'>
        <div className="inicio" id='aboutme'>
          <h1>Hola,soy Eloy Caballero</h1>
          <p className='Text'>
            Soy developer full stack que le gusta los retos, proyectos, y nuevas oportunidades.Soy una persona organizada y con mucha predisposicion al trabajo siempre buscando mejorar
            poco a poco y ampliar mis conocimientos
          </p>
          <div className='containerImg'>
            <img src={computer} alt="" />
          </div>
        </div>
      </div>
      {/* ====================== */}
      <div className="tecnologias" id='tecnologias'>
        <h1>TECNOLOGIAS</h1>
        <div className='gridcontainer'>
          <div className='cardGrid'>
            <img src={html} alt="" className='img-tec' />
            <p>HTML</p>
          </div>
          <div className='cardGrid'>
            <img src={css} alt="" className='img-tec' />
            <p>CSS</p>
          </div >
          <div className='cardGrid'>
            <img src={js} alt="" className='img-tec' />
            <p>JavaScript</p>
          </div>
          <div className='cardGrid'>
            <img src={react} alt="" className='img-tec' />
            <p>ReactJS</p>
          </div>
          <div className='cardGrid'>
            <img src={bt} alt="" className='img-tec' />
            <p>BootStrap</p>
          </div>

        </div>
      </div>
      {/* ====================== */}
      <div className='proyectos' id='portafolio'>
        <h1>PROYECTOS</h1>

        <div className="container-proyect">
          <div className="cardproyect">
            <img src={commers} alt="" className='imgProject' />
            <div className='hover'>
              <div className='filtro'></div>
              <div className='infoproyect'>
                <h2>E-commers react</h2>
                <p>Modelo de tienda de productos</p>
                <div className='listTec'>
                  <img src={html} alt="" className='imgTecProject' />
                  <img src={css} alt="" className='imgTecProject' />
                  <img src={react} alt="" className='imgTecProject' />
                  <img src={redux} alt="" className='imgTecProject' />
                  <img src={router} alt="" className='imgTecProject' />
                </div>
                <a href="https://shimmering-snickerdoodle-0e5fce.netlify.app" target="_blank">Ver pagina</a>
              </div>
            </div>
          </div>
          <div className="cardproyect">
            <img src={pokedex} alt="" className='imgProject' />
            <div className='hover'>
              <div className='filtro'></div>
              <div className='infoproyect'>
                <h2>Pokedex</h2>
                <p>Busca tu pokemon favorito</p>
                <div className='listTec'>
                  <img src={html} alt="" className='imgTecProject' />
                  <img src={css} alt="" className='imgTecProject' />
                  <img src={react} alt="" className='imgTecProject' />
                  <img src={redux} alt="" className='imgTecProject' />
                  <img src={router} alt="" className='imgTecProject' />
                </div>
                <a href="https://pokedex-eloy.netlify.app" target="_blank">Ver pagina</a>
              </div>
            </div>
          </div>
          <div className="cardproyect">

            <img src={rick} alt="" className='imgProject' />
            <div className="hover">
              <div className='filtro'></div>
              <div className='infoproyect'>
                <h2>Wiki Rick and Morty</h2>
                <p>Dimensiones de la serie</p>
                <div className='listTec'>
                  <img src={html} alt="" className='imgTecProject' />
                  <img src={css} alt="" className='imgTecProject' />
                  <img src={react} alt="" className='imgTecProject' />
                </div>
                <a href="https://mmortyandrrick.netlify.app" target="_blank">Ver pagina</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* ====================== */}
      <div className='contacto' id='contacto'>
        <h1>CONTACTO</h1>
        <div className='containerInputs'>
          <div className='input'>
            <h3>NOMBRE</h3>
            <input type="text" placeholder='Su nombre' />
          </div>
          <div className='input'>
            <h3>EMAIL</h3>
            <input type="email" placeholder='Su email' />
          </div>
          <div className='input'>
            <h3>ASUNTO</h3>
            <textarea cols="30" rows="10"></textarea>
          </div>
          <button className='btnEnviar'>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default App
