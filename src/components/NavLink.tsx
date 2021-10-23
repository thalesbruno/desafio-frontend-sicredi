import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: 0.5;
  }
`;

export default NavLink;
