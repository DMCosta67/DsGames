import React from 'react';
import '../css/Produto.css';

const CardProduto = ({ imageURL, altText, title }) => {
    return (
        <div className="card">
            <img src={imageURL} alt={altText} className='imagemProdutos' />
            <div className="tituloProduto">{title}</div>
        </div>
    );
}

export default CardProduto;

