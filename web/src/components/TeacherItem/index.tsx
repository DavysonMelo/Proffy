import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/37600134?s=460&u=3dc28ef99de0d7ec9742c12a3b804e5aa1aebfff&v=4" alt="Dave"/>
            <div>
              <strong>Davyson Melo</strong>
              <span>Português</span>
            </div>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> <br />
            Nemo similique atque officiis iure modi fugit ipsa dolores vero delectus reiciendis.
          </p>

          <footer>
            <p>Preço/hora
              <strong>R$ 50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;