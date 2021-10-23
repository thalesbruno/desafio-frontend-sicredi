import * as React from "react";
import styled from "styled-components";

interface Props {}

const PageDefault = styled.div`
  max-width: 768px;
  margin: 40px auto;
`;

export default function PageWrapperHOC(PageComponent: React.FC<Props>) {
  return (props: Props) => {
    return (
      <PageDefault>
        <PageComponent {...props} />
      </PageDefault>
    );
  };
}
