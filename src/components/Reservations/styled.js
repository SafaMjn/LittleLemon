import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  max-width: 200px;
  gap: 20px;
  margin: 30px 20px 0 20px;
  padding-bottom: 0;
  width: fit-content;
  input[type='date'],
  input[type='number'],
  select {
    height: 40px;
  }
  p {
    font-weight: 600;
    justify-self: center;
    width: fit-content;
  }
`;

export const BookingContainer = styled.div`
  align-items: center;
  border-radius: 16px;
  padding: 26px;
  width: 40vw;
  min-width: fit-content;
  background-color: ${(p) => p.theme.highlight};
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
  h1 {
    font-size: 18pt;
  }
`;
export const ErrorMessage = styled.p`
  color: ${(p) => p.theme.secondary_orange};
  width: 100% !important;
`;
