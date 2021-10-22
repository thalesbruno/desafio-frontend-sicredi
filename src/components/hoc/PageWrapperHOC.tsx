import * as React from "react";
import styled from "styled-components";

interface Props {}

const PageDefault = styled.div`
  max-width: 768;
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
