import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        color: hotpink;
        background-color: #331849;
        margin: 0 auto;
        padding: 0 12px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GetNewNumberButton = styled.button`
  padding: 16px;
  border: none;
  border-radius: 8px;
  color: #331849;
  background-color: hotpink;
  font-weight: bold;
  font-size: 2em;
  margin: 12px auto;
`;

export const WinnerCard = styled.h2`
  margin: 0 auto;
  font-size: 3em;
  font-weight: bold;
`;

export const WinnerWrapper = styled.div`
  flex: 1;
  height: 80vh;
  overflow-y: auto;
`;

export const NumbersOut = styled.p`
  min-height: 40px;
`;

export const LatestNumber = styled.p`
  font-size: 2.5em;
  margin: 0;
`;
