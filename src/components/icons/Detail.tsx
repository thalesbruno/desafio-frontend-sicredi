import React from "react";
import styled from "styled-components";

const SVGIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.palette.primary.main};
  &:hover {
    /* fill: ${({ theme }) => theme.palette.secondary.main}; */
    opacity: 0.6;
  }
`;

export default function Detail() {
  return (
    <SVGIcon x="0px" y="0px" viewBox="0 0 45.008 45.009">
      <path
        d="M43.462,35.997l-11.401-11.37c1.197-2.352,1.845-4.962,1.845-7.676c0-4.528-1.765-8.785-4.966-11.986
		C25.739,1.763,21.481,0,16.953,0C12.426,0,8.167,1.763,4.966,4.965C1.765,8.167,0,12.424,0,16.952
		c0,4.528,1.764,8.785,4.966,11.986c3.201,3.202,7.459,4.965,11.986,4.965c2.714,0,5.325-0.646,7.675-1.842l11.371,11.402
		c1.029,1.029,2.382,1.546,3.732,1.546c1.35,0,2.701-0.517,3.731-1.546C45.524,41.4,45.524,38.059,43.462,35.997z M9.444,24.459
		c-2.005-2.006-3.109-4.671-3.109-7.507s1.104-5.502,3.11-7.508c2.005-2.005,4.671-3.11,7.507-3.11s5.502,1.104,7.508,3.11
		c2.005,2.005,3.11,4.671,3.11,7.507s-1.105,5.502-3.11,7.508c-2.006,2.005-4.673,3.109-7.508,3.109
		C14.117,27.568,11.451,26.465,9.444,24.459z"
      />
    </SVGIcon>
  );
}
