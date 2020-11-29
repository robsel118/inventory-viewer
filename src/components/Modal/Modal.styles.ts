import styled from "styled-components";

export const Wrapper = styled.div<{ color: string }>`
  max-width: 500px;
  border: 1px solid #ddd;
  border-top: 2px solid ${({ color }) => color};
  display: flex;
  flex-direction: column;
`;
export const Padding = styled.div`
  padding: 0.5rem 1rem;
`;

export const Warning = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  line-height: 166%;
  color: rgba(107, 114, 128, 1);
`;

export const Actions = styled(Padding)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
  background-color: rgba(243, 244, 246, 1);
`;
