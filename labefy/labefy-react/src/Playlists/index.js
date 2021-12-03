import React from "react";
import styled from "styled-components";
import PlaylistCard from "../PlaylistCard";



const PlaylistsContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
color: white;
`
 

class Playlists extends React.Component {
    state= {
     playlists: [
        {
            "id": "I love",
            "name": "Rock"
        },
        {
            "id": "coração",
            "name": "Sertanejo"   
        }
    ]
}

    

    render() {

     const playlists = this.state.playlists.map(playlist => {
         return <PlaylistCard
         key={playlist.id}
         changePage={this.props.changePage}
         name={playlist.name}
         />
     })



        return (
            <PlaylistsContainer>
                {playlists}
            </PlaylistsContainer>
        )
    }
}

export default Playlists