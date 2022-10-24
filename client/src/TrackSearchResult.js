import styled from "styled-components";

const TrackSearchResult = ({ track }) => {
  const { title, artist, album, albumUrl, releaseDate } = track;

  return (
    <Track>
      <TrackImage src={albumUrl} alt="track cover" />
      <Info>
        <h3>{title}</h3>
        <h4>Artist: {artist}</h4>
        <h4>Album: {album}</h4>
        <h4>Release Date: {releaseDate}</h4>
      </Info>
    </Track>
  );
};

const Track = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

const TrackImage = styled.img`
  height: 200px;
  width: 200px;
`;

const Info = styled.div`
  padding: 5px 0 0 10px;
`;

export default TrackSearchResult;
