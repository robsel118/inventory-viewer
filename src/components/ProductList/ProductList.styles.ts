import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-color: rgba(107, 114, 128, 1);
  --tw-divide-y-reverse: 0;
  border-top-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(0px * var(--tw-divide-y-reverse));
`;

export const Wrapper = styled.div`
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 800px;
`;
