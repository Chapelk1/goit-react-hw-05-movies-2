import { Link } from "react-router-dom";
import styled from "@emotion/styled";


export const LinkItm = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: #34424f;

  &:hover {
    color: white;
    background-color: teal;
    border-color: teal;
  }
`;

export const Wraper = styled.div`
 display: flex;
 gap: 40px;
 padding-top: 20px;
 padding-bottom: 20px;
`

export const Thumb = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const WraperImg = styled.div`
  max-width: 100%;
  margin-bottom: 20px;
`;
export const WraperBtn = styled.div`
  > a:not(:last-child){
    margin-right: 20px;
  }
`;
export const WraperDesc = styled.div`
  
`;

export const Paragraf = styled.p`
  font-size: 20px;
  color: white;
`;
export const Title = styled.h1`
  margin-bottom: 12px;
  color: white;
`;
export const SecondTitle = styled.h2`
  margin-top: 20px;
  color: white;
`;

