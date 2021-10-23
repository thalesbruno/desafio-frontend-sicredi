import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      {"Copyright © "}
      Desafio Front-End Sicredi {new Date().getFullYear()}.
    </FooterWrapper>
  );
}

export default Footer;
