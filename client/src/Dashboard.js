import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import styled from "styled-components";
import TrackSearchResult from "./TrackSearchResult";
import Player from "./Player";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [trackLyrics, setTrackLyrics] = useState();

  const chooseTrack = (track) => {
    setPlayingTrack(track);
    setSearch("");
    setTrackLyrics("");
  };

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

  useEffect(() => {
    if (!playingTrack) return;
    axios
      .get("http://localhost:8000/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then((res) => {
        setTrackLyrics(res.data.lyrics);
      });
  }, [playingTrack]);

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
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && <Lyrics>{trackLyrics}</Lyrics>}
      </ResultContainer>
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
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
  padding: 5px 3px;
`;

const Lyrics = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  font-size: 20px;
  white-space: pre;
  padding: 10px 0;
  text-align: center;
`;

export default Dashboard;
