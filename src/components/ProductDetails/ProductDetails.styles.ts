import styled from "styled-components";

export const RowData = styled.td<{ alignment?: "left" | "right" }>`
  text-align: ${({ alignment }) => alignment || "left"};
  min-width: 120px;
  padding: 0.5rem 0.75rem;
  text-transform: lowercase;
  ul {
    display: flex;
    list-style-type: none;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0;
    justify-content: flex-start;
  }
`;
export const Row = styled.tr`
  border-bottom: 1px solid #ddd;

  &:first-child {
    background-color: rgba(249, 250, 251, 1);

    td {
      text-transform: uppercase;
      color: rgba(156, 163, 175, 1);
      font-weight: 600;
    }
  }
`;

export const RowDataAttribute = styled.p`
  font-size: 0.75rem;
  color: rgba(156, 163, 175, 1);
  margin: 0.25rem 0;
`;

export const RowDataColor = styled.li<{ color: string }>`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ color }) => color};
`;
export const RowDataStock = styled.span`
  border-radius: 1rem;
  padding: 0.25rem 0.75rem;
  text-align: center;
  margin: 0 auto;

  &.instock {
    background-color: rgba(209, 250, 229, 1);
    color: rgba(6, 95, 70, 1);
  }
  &.outofstock {
    background-color: rgba(254, 226, 226, 1);
    color: rgba(153, 27, 27, 1);
  }
  &.lessthan10 {
    background-color: rgba(254, 243, 199, 1);
    color: rgba(146, 64, 14, 1);
  }
`;
