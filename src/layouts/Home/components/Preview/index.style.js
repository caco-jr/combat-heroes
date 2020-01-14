import styled from 'styled-components';

export const PreviewBackground = styled.section`
  background: linear-gradient(
    90deg,
    var(--secondary-color) 50%,
    var(--primary-color) 50%
  );
`;

export const PreviewWrapper = styled.section`
  position: relative;
  display: flex;

  section {
    flex: 1;
    min-height: 400px;
    padding: 30px;
  }
`;
