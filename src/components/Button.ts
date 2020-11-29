import styled from "styled-components";

const Btn = styled.div`
  display: inline-flex;
  cursor: pointer;
  padding: 0.25rem 1.25rem;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
`;

export const PrimaryButton = styled(Btn)`
  color: white;
  border-radius: 4px;
  --primary-color: 96, 165, 250;
  background-color: rgba(var(--primary-color), 1);

  &:hover {
    background-color: rgba(var(--primary-color), 0.8);
  }
`;
export const SecondaryButton = styled(Btn)`
  border-radius: 4px;
  --primary-color: 96, 165, 250;
  border: 1px solid rgba(var(--primary-color), 1);

  &:hover {
    background-color: rgba(var(--primary-color), 0.1);
  }
`;
