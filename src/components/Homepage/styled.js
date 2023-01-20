import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #495e57;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  padding: 0px 1%;
  height: 30vh;
  * {
    width: 220px;
  }
  img {
    border-radius: 16px;
    transform: translateY(30px);
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #f4ce14;
`;
export const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  width: fit-content;
  margin: 10px 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-width: 630px;
  width: 33vw;
  height: 50vh;
  margin: auto;
  padding-top: 3%;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  border-radius: 16px;
  width: 30%;
  padding-bottom: 10px;
  div,
  p,
  a {
    margin: 10px 16px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    object-fit: cover;
    width: 100%;
    height: 152px;
  }
  h6 {
    color: orange;
    font-size: medium;
  }
  h4 {
    font-size: medium;
  }

  p {
    font-size: smaller;
  }
  a {
    text-decoration: none;
    font-weight: 600;
    color: black;
    margin-top: auto;
  }
`;

export const Specials = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
