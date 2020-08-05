import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
            <img src="https://avatars2.githubusercontent.com/u/60354866?s=460&u=eb0eb235bd55ec5b3556549a26c709c509dda52b&v=4" alt="Victor Balbino"/>
            <div>
            <strong> Victor Balbino </strong>
            <span> Tecnologia da Informação </span>
            </div>
            </header>
            <p>
                Programador de Momentos inesquecíveis!
                <br></br>
                Sou desenhista, adoro desenhar as curvas dos corpos femininos.
                Programador de experiências inesquecíveis.
                Design gráfico para poder criar imagens perfeitas de como vejo as mulheres.
                <br></br>
                As duas últimas fotos são com os meus xodós
            </p>
            <footer>
            <p>
            Preço/hora
            <strong>R$ de graça bb rsrs</strong>
            </p>
            <button type="button">
            <img src={whatsappIcon} alt="WhatsApp"></img>
            Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem