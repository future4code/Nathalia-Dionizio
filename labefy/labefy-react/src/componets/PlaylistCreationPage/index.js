import React from "react";
import styled from "styled-components";



const PlaylistCreationFormContainer = styled.div `
 height: 500px;
 display: flex;
 flex-direction: column;
 align-items: center;
`
 
const PlaylistCreationForm = styled.form`
 height: 100px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
`


class PlaylistCreationPage extends React.Component {
       state = {

       }

       render() {

        return (
            <PlaylistCreationFormContainer>
                <h1>Cadastrar nova Playlist</h1>
                <PlaylistCreationForm>
                  <label>Nova playlist</label>
                  <input placeholder="Nome da playlist" />
                   <button type="submit">Cadastrar playlist</button>
                </PlaylistCreationForm>
            </PlaylistCreationFormContainer>
        )


       }
}

export default PlaylistCreationPage