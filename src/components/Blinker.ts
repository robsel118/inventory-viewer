import styled, { keyframes } from 'styled-components';


const blinking = keyframes`
  from{
    opacity: 0.3;
  }
  to{
    opacity: 1;
  }
`
const Blinker = styled.div`
  animation: ${blinking} 2s ease-in infinite alternate;
`
export default Blinker;