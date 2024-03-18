import { useState } from "react";
import '../css/styles.css';
import Casa from "./Casa";

function Topo() {
    const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao = () => {
        setSecaoAtual('home');
    };

    const mudarParaPerfil = () => {
        setSecaoAtual('perfil');
    };

    const mudarParaCarrinho = () => {
        setSecaoAtual('carrinho');
    };

    return (
        <header>
            <div className="top">
                <img src="casa.png" alt="casa" className="casa" onClick={cliqueSecao} />
                <img src="Logo.png" className="Logo" alt="Logo" />
                <input type="text" placeholder="Pesquisar..."/>
                <img src="perfil.png" className="perfil" alt="perfil" onClick={mudarParaPerfil} />
                <img src="carr.png" className="carr" alt="carr" onClick={mudarParaCarrinho} />
            </div>
            <div>
                 {secaoAtual === 'home' && (
                    <Casa/>
                        )}
                {secaoAtual === 'perfil' && (
                    <div className="secao">
                      <div className="per">
                        <h1>PERFIL</h1>
                        <img src="usuario.jpg" className="usu" alt="usu"/>
                        <h3>Entre ou cadastra-se</h3>
                      </div>

                    </div>
                )}

                {secaoAtual === 'carrinho' && (
                    <div className="secao">
                        <h1 style={{ color: 'aliceblue' }}>COMPRAS</h1>
                        <h1 style={{ color: 'aliceblue' }}>Não existem produtos no carrinho...</h1> 
                        <button className="botao" onClick={cliqueSecao}>Ir as compras</button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Topo;
