import CardProduto from './Card';
import '../css/styles.css';
import SlideShow from './slideshow';

function Casa () {
  return(
    <div className="secao">
                        <SlideShow/>
                       <h1 style={{ color: 'aliceblue' }}>MAIS VENDIDOS</h1>  
                         <div className="secaoCard">
                         <CardProduto 
                         imageURL="https://imgs.casasbahia.com.br/55065290/1g.jpg"
                         altText="Console PS5"
                         title="PS5"
                        />
                        <CardProduto 
                        imageURL="https://m.media-amazon.com/images/I/51rsXDAfI-L._AC_UF1000,1000_QL80_.jpg"
                        altText="Console XBOX X"
                        title="XBOX X"
                        />
                        <CardProduto 
                        imageURL="https://cdn.awsli.com.br/2500x2500/241/241991/produto/244718100/gta6-ppoc3jmjfh.png"
                        altText="Gta6"
                        title="GTA VI"
                        />
                        <CardProduto 
                        imageURL="https://external-preview.redd.it/gta-tropa-de-elite-com-mod-menu-e-outros-gtas-q-vc-presisa-v0-8bRN0zfkqQAT4ffR-Z7j9gTsESS8F1dpO7KluOYVb4s.jpg?auto=webp&s=2846dc6fc0c46a5f6670b08280fb81d781fed667"
                        altText="Gtatp"
                        title="GTA TP"
                        />      
                        </div>
                        <h1 style={{ color: 'aliceblue' }}>LANÇAMENTOS</h1>    
                        <div className="secaoCard">
                         <CardProduto 
                         imageURL="https://recreio.uol.com.br/images/original/2020/12/08/colecao-geek-25-bonecos-colecionaveis-que-vao-te-conquistar-1225851.jpg"
                         altText="Hp"
                         title="Harry Potter"
                        />
                        <CardProduto 
                        imageURL="https://recreio.uol.com.br/images/original/2020/12/08/colecao-geek-25-bonecos-colecionaveis-que-vao-te-conquistar-1225848.jpg"
                        altText="Baby"
                        title="Baby Yoda"
                        />
                        <CardProduto 
                        imageURL="https://images.tcdn.com.br/img/img_prod/1087887/boneco_geek_balanca_a_cabeca_sheking_head_11cm_star_wars_darth_vader_2854_1_0560ab2d3639772fe57ad8ca9416512a.jpg"
                        altText="Darth"
                        title="Darth Vader"
                        />
                        <CardProduto 
                        imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZOwWesDssG7_mQSijjHReLabTvlLfNOTow&usqp=CAU"
                        altText="Batman"
                        title="BATMAN"
                        />     
                        </div> 
                        </div>
)}

export default Casa;


    
