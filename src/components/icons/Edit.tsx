import React from "react";
import styled from "styled-components";

const SVGIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.palette.warning.main};
  &:hover {
    /* fill: ${({ theme }) => theme.palette.secondary.main}; */
    opacity: 0.6;
  }
`;

export default function Edit() {
  return (
    <SVGIcon x="0px" y="0px" viewBox="0 0 330 330">
      <path
        id="XMLID_22_"
        d="M265.606,4.394C262.794,1.581,258.978,0,255,0c-3.979,0-7.794,1.581-10.606,4.394l-164.999,165
		C76.58,172.207,75,176.022,75,180v60c0,8.284,6.717,15,15,15h60c3.979,0,7.794-1.581,10.607-4.394l164.999-165
		c5.858-5.858,5.858-15.355,0-21.213L265.606,4.394z"
      />
      <path
        id="XMLID_23_"
        d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30h135c8.284,0,15-6.716,15-15s-6.716-15-15-15H15
		C6.717,0,0,6.716,0,15v300c0,8.284,6.717,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z"
      />
    </SVGIcon>
  );
}
