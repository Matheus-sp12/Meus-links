import { useEffect } from 'react';
import style from "./Main.module.scss";
import CardLinks from "../Components/Cards/Cards";
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';
import perfil from "../assets/eulink.jpg";
import { BiSolidDownArrow } from "react-icons/bi";
// import ParticlesBackground from '../Components/Particles/ParticlesBackground';
import ParticlesComponent from '../Components/Particles/ParticlesComponent';

const scrollToCards = () => {
  document.getElementById("cards")?.scrollIntoView({ behavior: "smooth" });
};

const Main = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <section className={style.container}>
        <nav className={style.navbar}>
          <ParticlesComponent />
          {/* <ParticlesBackground  /> */}
          <div className={style.content}>
            <div className={style.profile} data-aos="fade-up" data-aos-delay="200">
              <img src={perfil} alt="Minha foto de perfil" />
              <div className={style.titles}>
                <h1>Vinicius Silva</h1>
                <p>Criador de Sistemas | Desenvolvedor</p>
              </div>
            </div>
          </div>
          <div onClick={scrollToCards} className={style.scroll} data-aos="fade-up" data-aos-delay="200">
            <BiSolidDownArrow className='bx bxs-down-arrow' /> 
          </div>
        </nav>
        <div className={style.cardContainer} id='cards' >
            <CardLinks />
        </div>
    </section>
  )
}

export default Main;