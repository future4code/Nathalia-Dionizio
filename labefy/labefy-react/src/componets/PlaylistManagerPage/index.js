import React from "react";
import styled from "styled-components";
import Playlists from "../../Playlists";
import PlaylistDetail from "../PlaylistDetail";




const PlaylistManagerPageContainer = styled.div `
 
`
 

class PlaylistManagerPage extends React.Component {
    state= {
       currentPage: "playlists"
    }

    changePage = (currentPage) => {
        this.setState ({currentPage: currentPage})
      }



    render() {
          const renderCurrentPage = () => {
               if (this.state.currentPage === "playlists")
               return <Playlists
                 changePage={this.changePage}
               />
               else if (this.state.currentPage === "playlistDetail")
               return <PlaylistDetail
               changePage={this.changePage}
               />
           }
        

        return (
            <PlaylistManagerPageContainer>
               {renderCurrentPage()}
            </PlaylistManagerPageContainer>
        )
    }
}

export default PlaylistManagerPage