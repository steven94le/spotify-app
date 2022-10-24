import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import styled from "styled-components";
import TrackSearchResult from "./TrackSearchResult";

const spotifyApi = new SpotifyWebApi({
  clientId: "cc11ef95fff14646885a708825f8b6c2",
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;

    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;

      setSearchResults(
        res.body.tracks.items.map((track) => {
          console.log("track:", track);
          return {
            artist: track.artists[0].name,
            album: track.album.name,
            title: track.name,
            uri: track.uri,
            releaseDate: track.album.release_date,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <Container>
      <StyledInput
        type="search"
        placeholder="Search songs/artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ResultContainer>
        {searchResults.map((track) => (
          <TrackSearchResult track={track} key={track.uri} />
        ))}
      </ResultContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  height: 5vh;
  font-size: 18px;
  padding: 10px;
  text-align: center;
`;

const ResultContainer = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export default Dashboard;
