import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #495e57;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  padding: 0px 4%;
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
  justify-content: center;
  gap: 140px;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 4%;
  gap: 30px;
  height: 50vh;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #e1e1e1;
  border-radius: 16px;
  gap: 20px;
  div {
    display: flex;
    justify-content: space-between;
  }
  img {
    border-radius: 16px;
    width: 200px;
  }
  h6 {
    color: orange;
    font-size: medium;
  }
  h4 {
    font-size: medium;
  }
`;

export const Specials = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
