import * as React from "react";
import styled from "styled-components";

const PageDefault = styled.div`
  max-width: 768px;
  margin: 40px auto;
`;

const PageWrapperHOC = (PageComponent: React.FC<any>) => {
  return (props: {}) => {
    return (
      <PageDefault>
        <PageComponent {...props} />
      </PageDefault>
    );
  };
};

export default PageWrapperHOC;
