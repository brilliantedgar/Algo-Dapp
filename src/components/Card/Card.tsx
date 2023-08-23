import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo_trans.png'


const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  background: rgb(106,106,106);
  background: linear-gradient(90deg, #3a6b7e59 14%, #1e2f749e 100%);
  background-position: bottom right;
  border-radius: 15px;
  color: #FFFFFF;
  display: flex;
  flex: 1;
  flex-direction: column;
  box-shadow: 6px 6px 6px #0E1D2F;


  position: relative;
  color: #252B37;
  /*animation: textColor 10s ease infinite;*/
      
  @keyframes textColor {
    0% {
      color: #7e0fff;
    }
    50% {
      color: #0fffc1;
    }
    100% {
      color: #7e0fff;
    }
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.75);
    -webkit-filter: blur(5vw);
    -moz-filter: blur(5vw);
    -ms-filter: blur(5vw);
    filter: blur(5vw);
    background: linear-gradient(270deg, #0fffc159, #7e0fff59);
    background-size: 200% 200%;
    animation: animateGlow 10s ease infinite;
    
    @keyframes animateGlow {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }
  }
`;

export default Card;
