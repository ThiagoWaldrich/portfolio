import Avatar from '../img/eu.png';
import "../styles/components/sidebar.sass";

const Sidebar= () =>{
    return(<aside id="sidebar">
        <img src={Avatar} alt="Thiago Waldrich" srcset/>
        <p className="title">Desenvolvedor</p>
        <p>redes sociais</p>
        <p>informações de contato</p>
        <a href="" className="btn">
            Download do Currículo
        </a>
       </aside>
)}
export default Sidebar