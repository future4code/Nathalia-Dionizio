import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQELl5bYEC_GUw/profile-displayphoto-shrink_100_100/0/1622152779482?e=1643846400&v=beta&t=_38PG8f8kEbWBdmfATvDnipzRAXN0SfiiaX0awlRQRA" 
          nome="Nathalia" 
          descricao="Oi, eu sou a Nathalia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


      <div className="page-informações-container">
        <CardPequeno
          imagem="https://s.manualdousuario.net/wp-content/uploads/2018/02/Logo-do-Gmail-960x540.png"
          descricao="nathalia.dionizio1996@gmail.com" 
        />
        
        <CardPequeno 
          imagem="https://hzcoworkingspace.com.br/wp-content/uploads/2017/03/endereco-fiscal-dtq.jpg"
          descricao="Rua josé guimarães 17 Belo Horizonte"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de programação front end!" 
        />
        
        <CardGrande 
          imagem="https://docmanagement.com.br/wp-content/uploads/2018/06/tecnologia.png" 
          nome="Tech terra" 
          descricao="Voluntária em programação" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 

      

        />        
      </div>
    </div>
  );
}

export default App;
