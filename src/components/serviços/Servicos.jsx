import CardService from "./cardServiços/CardService";
import Footer from '../footer/Footer'
import styles from './Servicos.module.css'
import corteTesoura from './img/corteTesoura.png'
import barba from './img/barba.png'
import degradeNavalhado from './img/degrade.jfif'
import social from './img/corteSocial.png'
import tesoura from "./img/tesoura.jpg"
import sombrancelha from "./img/sombran.jpg"
const Servicos = () => {
  return (
    <div className={styles.paginaService} >

      <CardService
        titulo="Corte na tesoura"
        imagem={tesoura}
        preco={`$${(25).toFixed(2)}`}
        texto="O corte na tesoura tem uma melhor remodelação, proporcionando um acabamento natural e detalhado."
      />

      <CardService
        titulo="Degrade  maquina"
        imagem={degradeNavalhado}
        preco={`$${(28).toFixed(2)}`}
        texto="Estilo moderno com laterais raspadas em degradê mais evidente, garatiindo um sivual mais estiloso."
      />

      <CardService
        titulo="Degrade navalhado"
        imagem={degradeNavalhado}
        preco={`$${(33).toFixed(2)}`}
        texto="Estilo moderno com laterais raspadas em degradê mais evidente, garatiindo um sivual mais estiloso."
      />


      <CardService
        titulo="Corte mullet"
        imagem={social}
        preco={`$${(25).toFixed(2)}`}
        texto='O corte mullet tem frente e laterais curtas, com a parte de trás longa, combinando estilo retrô e moderno.'
      />


      <CardService
        titulo="Corte americano"
        imagem={social}
        preco={`$${(25).toFixed(2)}`}
        texto=' O corte americano tem laterais curtas e topo mais longo, oferecendo um visual clássico e versátil.'
      />


      <CardService
        titulo="degrade moicano"
        imagem={degradeNavalhado}
        preco={`$${(28).toFixed(2)}`}
        texto="O moicano tem laterais raspadas e topo longo, destacando atitude e estilo."
      />

      <CardService
        titulo="barba"
        imagem={barba}
        preco={`$${(15).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />
      <CardService
        titulo="barba desenhada"
        imagem={barba}
        preco={`$${(18).toFixed(2)}`}
        texto='A barba desenhada tem contornos definidos, realçando o rosto com estilo.'
      />
      <CardService
        titulo="barba degradê"
        imagem={barba}
        preco={`$${(23).toFixed(2)}`}
        texto=' É um Estilo classico com laterais baixas e topo alinhado, ideal para um visual elegante'
      />
      <CardService
        titulo="Pig corte"
        imagem={barba}
        preco={`$${(15).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />
      <CardService
        titulo="Pig barba"
        imagem={barba}
        preco={`$${(15).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />
      <CardService
        titulo="Sobrancelha"
        imagem={sombrancelha}
        preco={`$${(7).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />
      <CardService
        titulo="Pezinho"
        imagem={barba}
        preco={`$${(7).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />
      <CardService
        titulo="Luzes"
        imagem={barba}
        preco={`$${(50).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />
      <CardService
        titulo="Platinado"
        imagem={barba}
        preco={`$${(110).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />

      <CardService
        titulo="Reflexo alinhado"
        imagem={barba}
        preco={`$${(65).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />

      <CardService
        titulo="Bigode"
        imagem={barba}
        preco={`$${(4).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />

      <CardService
        titulo="Aparar barba"
        imagem={barba}
        preco={`$${(5).toFixed(2)}`}
        texto=' Aparo, remodelação e remoção completa da barba com navalha, proporcionando melhor acabamento.'
      />

      <Footer />

    </div>
  )
}

export default Servicos;