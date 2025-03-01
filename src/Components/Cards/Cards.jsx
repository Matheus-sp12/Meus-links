import style from "./Cards.module.scss";
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
// importando images
import paginaVendas from "../../assets/PaginaVendas.png";
import meuPortifolio from "../../assets/port.png";
import linkedlin from "../../assets/linkdin.png"
import insta from "../../assets/insta.png"
import githubBlack from "../../assets/git.png";
import WhatsApp from "../../assets/whatsApp.png";
// importando icons
import { MdArrowOutward } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaInstagram  } from "react-icons/fa";
import { FaLinkedin, FaWhatsapp  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const CardList = [
    {
        id: 1,
        image: paginaVendas,
        icon: <MdArrowOutward />,
        title: "Site de vendas",
        description: "Saiba como um site pode ajudar no crescimento da sua empresa",
        link: "https://pagina-de-vendas-phi.vercel.app/",
    },
    {
        id: 2,
        image: meuPortifolio,
        icon: <CgWebsite />,
        title: "Portifólio Profissional",
        description: "Analise meu portfólio para conhecer meus projetos acadêmicos e as tecnologias com as quais tenho experiência.",
        link: "https://portifolio2-0-virid.vercel.app/",
    },
    {
        id: 4,
        image: insta,
        icon: <FaInstagram />,
        title: "Perfil no Instagram",
        description: "Vídeos e conteúdos sobre tecnologia gratuitos.",
        link: "https://www.instagram.com/omatheus.dev//",
    },
    {
        id: 5,
        image: WhatsApp,
        icon: <FaWhatsapp />,
        title: "Realizar orçamento",
        description: "Entre em contato comigo para tirar dúvidas ou solicitar um orçamento.",
        link: "https://wa.me/5511986427140",
        
    },
    {
        id: 6,
        image: linkedlin,
        icon: <FaLinkedin />,
        title: "Perfil no Linkedin",
        description: "Conteúdos profissional e acadêmicos.",
        link: "https://www.linkedin.com/in/vin%C3%ADcius-silva-450b771a0/",
    },
    {
        id: 7,
        image: githubBlack,
        icon: <FaGithub />,
        title: "Perfil no Github",
        description: "Onde eu publico meu projeto pessoais e acadêmicos.",
        link: "https://github.com/Matheus-sp12", 
    }
]

const CardLinks = () => {

    useEffect(() => {
        AOS.init({
          duration: 600,
          offset: 50,
        });
    }, []);

    return (
      <section className={style.container}>
        {CardList.map((data, i) => (
            <a key={data.id} className={style.content} data-aos="fade-up" data-aos-delay={i * 200}
                href={data.link} target="_blank" rel="noopener noreferrer"
            >
                <div className={style.background} 
                    style={{ backgroundImage: `url(${data.image})` }} 
                />
                <div className={style.overlay}>
                    <div>{data.icon}</div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            </a>
        ))}
      </section>
    );
  }
  
  export default CardLinks;
