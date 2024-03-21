import React, { useEffect,useState } from 'react'
import '../css/slide.css'



function SlideShow() {
    const imagens = ['new_game.png','setup.png','cosplay.png','geek.png'];
    const [indiceAtual, setindiceAtual] = useState(0);

    const proxSlide = () => {
        setindiceAtual ((previndice) => (previndice + 1) % imagens.length);
    };
    
    const prevSlide = () => {
        setindiceAtual ((previndice) => (previndice - 1  + imagens.length) % imagens.length);
    };

        useEffect(() => {
            const intervalID = setInterval(proxSlide,5000);
    
            return () => clearInterval(intervalID);
        }, []);

    
    return (
        <div className='campo'>
        <div className='slide'>
        <img src={imagens[indiceAtual]} alt={`Imagem${indiceAtual + 1}`} className='imgs' />
        <div className='button-container'>
          <button onClick={prevSlide} className='button'>&lt;</button>
          <button onClick={proxSlide} className='button'>&gt;</button>
        </div>
      </div>
      </div>
    )

}

export default SlideShow;