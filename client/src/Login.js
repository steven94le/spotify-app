import styled from "styled-components";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=cc11ef95fff14646885a708825f8b6c2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
  return (
    <Container>
      <StyledLink href={AUTH_URL}>Login With Spotify</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const StyledLink = styled.a`
  width: 200px;
  height: 30px;
  color: white;
  background: green;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  border-radius: 20px;
  padding: 10px;
`;

export default Login;
