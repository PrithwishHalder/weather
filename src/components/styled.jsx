import styled from "styled-components";

import { device } from "./Device";

import BGimage from "../assets/weatherbg.jpeg";

export const Background = styled.div`
  background-image: url(${BGimage});
  width: 100%;
  height: 100vh;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 2rem;
`;

export const Input = styled.input`
  width: 300px;
  outline: none;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  border: none;
  margin: 5px;
  font-size: 1rem;
`;
export const Button = styled.button`
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  padding: 1rem;

  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  font-weight: 700;
  color: #fff;

  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ;
  flex-wrap: ${(props) => (props.justify ? "wrap" : "none")};
  align-items: center;
  text-align: center;

  @media ${device.mobile} {
    margin-bottom: 1rem;
    width: 95vw;
  }
  @media ${device.tablet} {
    margin-bottom: 1rem;
    width: fit-content;
    min-width: 30vw;
  }
`;

Card.defaultProps = {
  justify: "none",
};

export const Location = styled.div`
  font-size: 1.3rem;
  padding: 0.3rem 0;
`;
export const Condition = styled(Location)``;

export const Conditions = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

export const Info = styled.div`
  width: 33%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 0.3em;
`;
