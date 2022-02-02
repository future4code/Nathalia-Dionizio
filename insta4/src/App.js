import React from 'react';
import './App.css';
import Post from './components/Post/Post';



class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'http://files.sunoresearch.com.br/n/uploads/2020/10/3ad9dcb5-rebeca-ellas-monte-bravo-mulheres.jpeg'}
          fotoPost={'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'}
        />

        <Post
          nomeUsuario={'matheus'}
          fotoUsuario={'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2016/07/formacao_quais-sao-as-referencias-masculinas-que-temos-hoje-artigo..jpg'}
          fotoPost={'http://4.bp.blogspot.com/-3YwFT7wiDnE/VT5NLGC20qI/AAAAAAABC8Y/tQcMBoQkbEk/s1600/adffb142a07755f9fc4e1400e3491ae32.jpg'}
        />

        <Post
          nomeUsuario={'daniele'}
          fotoUsuario={'https://cdn.pixabay.com/photo/2017/10/26/01/04/woman-2889882_1280.jpg'}
          fotoPost={'https://s2.glbimg.com/Ou0lhrJzX9H7s5XRczyliKpQuPw=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/g/m/lxOaXpRbeA9xrLYRE4wA/celular-appfoto.png'}
        /> 

       </div>  
    );
  }
}

export default App;
