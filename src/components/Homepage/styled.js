import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(p) => p.theme.primary_green};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  padding: 0px 1%;
  height: 30vh;

  img {
    border-radius: 16px;
    transform: translateY(30px);
    height: 100%;
    width: 240px;
  }
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.primary_yellow};
`;
export const Subtitle = styled.h4`
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 38vw;
  min-height: 50vh;
  margin: auto;
  padding-top: 40px;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.highlight};
  border-radius: 16px;
  width: 30%;
  padding-bottom: 20px;
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
    min-height: 152px !important;
  }
  h6 {
    color: ${(p) => p.theme.secondary_orange};
  }
  a {
    text-decoration: none;
    font-weight: 600;
    color: ${(p) => p.theme.dark};
    margin-top: auto;
  }
`;

export const Specials = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
