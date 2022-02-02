import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeBandeiraBranca from '../../img/bandeira.jpg'
import iconeBandeiraPreta from '../../img/unnamed.png'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'




class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvando: false,
    salvos: 0,
    compartilhar: false,
    compartilhado: 0
  }

  onClickCurtida = () => {
    let novoNumeroCurtidas

    if (this.state.curtido) {
      novoNumeroCurtidas = this.state.numeroCurtidas -1
    }else{
      novoNumeroCurtidas = this.state.numeroCurtidas +1
    }
  

  this.setState ({
   curtido: !this.state.curtido,
   numeroCurtidas: novoNumeroCurtidas
  })

} 

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    let iconeSalvo

    if (this.state.salvando) {
      iconeSalvo = this.state.salvos -1
    }else{
      iconeSalvo = this.state.salvos +1
    }
  

  this.setState ({
   salvando: !this.state.salvando,
   salvos: iconeSalvo
  })

}



  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }


    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    
    
    let iconeSalvo

    if(this.state.salvando) {
      iconeSalvo = iconeBandeiraPreta
    } else {
      iconeSalvo = iconeBandeiraBranca
    }

  
    return (
    <div className={'post-container'}>
    <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvar}
          valorContador={this.state.salvos}
        />

      </div>
      {componenteComentario}
      </div>
    )
  }
}

export default Post