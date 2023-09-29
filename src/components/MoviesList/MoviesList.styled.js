import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MovieList = styled.ul`
    list-style: none;
`;

export const MovieItem = styled.li`
margin-bottom: 8px;
` 

export const LinkItm = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 18px;
    color: white;
    &:hover{
        color: teal;
    }
`