import React from "react";
import styled from "styled-components";



const PlaylistDetailContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`

const TrackCreationForm = styled.form `
display: flex;
height: 100px;
width: 100vw;
align-items: center;
justify-content: space-around;

div{
    display: flex;
    flex-direction: column;
}
`





class PlaylistDetail extends React.Component {
    state= {
        tracks: [
            {
                "id": "31bb6ced-1f97-4c53-a8ae-c92189ffd877",
                "name":"Is This love",
                "artist": "Bob Marley",
                "url": "url"
            },
            {
                "id": "ea1c43f3-efde-446f-b88e-62dca89dfb9a",
                "name":"Three litlle Birds",
                "artist": "Bob Marley",
                "url": "url"
            }
        ]

    }

    render() {

      const tracks= this.state.tracks.map(track => {
          return <p>{track.name}</p>
      })



        return (
            <PlaylistDetailContainer>
                <TrackCreationForm>
                <div>
                    <label>Nome da música</label>
                    <input/>
                </div>

                <div>
                    <label>Artista</label>
                    <input/>
                </div>

                <div>
                    <label>url da música</label>
                    <input/>
                </div>
                <button type="submit">Adicionar música</button>
                </TrackCreationForm>
                {tracks}
                <button onClick={() => this.props.changePage("playlists")}>Voltar para playlists</button>
            </PlaylistDetailContainer>
        )
    }
}

export default PlaylistDetail