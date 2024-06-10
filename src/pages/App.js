import React from 'react';
import WheelComponent from '../components/wheel';
import '../index.css';
import LogoVarejo from '../assets/Logo_Varejo.png';
import LogoFocus from '../assets/Logo_Focus.png';
import ClickIcon from '../assets/Click_Icon.jpeg';
import MarcaSebrae from '../assets/marca-sebrae.png';
import LogoToner from '../assets/LogoToner.png';

import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const segments = ['nutrição', 'produção', 'consumo'];
  const segColors = ['#faa230', '#055cba', '#bb1625'];
  const onFinished = (winner) => {
    //console.log(winner);
    setTimeout(() => {
      navigate(`/${winner}`);
    }, 600);
  };

  let rotacao = Math.floor(Math.random() * 500);

  if (rotacao < 150) {
    rotacao = 150;
  }

  console.log(rotacao);

  const responsive = false;

  return (
    <>
      <div className="main_text">
        <p>Agronegócio</p>
      </div>
      {responsive ? (
        ''
      ) : (
        <img className="icone-click" src={ClickIcon} alt="Ícone de Clique" />
      )}

      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="#FCF4F7"
        contrastColor="white"
        buttonText=""
        isOnlyOnce={false}
        size={responsive ? 100 : 290}
        upDuration={rotacao}
        downDuration={1200}
        fontFamily="Arial"
      />
      <div className="left_img">
        <img src={LogoVarejo} alt="Logo Varejo" />
      </div>
      <div className="right_img">
        <img src={LogoFocus} alt="Logo Sebrae" />
      </div>
    </>
  );
};

export default App;
