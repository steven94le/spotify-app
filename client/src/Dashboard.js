import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import styled from "styled-components";

const spotifyApi = new SpotifyWebApi({
  clientId: "cc11ef95fff14646885a708825f8b6c2",
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <Container>
      <StyledInput
        type="search"
        placeholder="Search songs/artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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

export default Dashboard;
