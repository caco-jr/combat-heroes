import styled from 'styled-components';

export const PreviewWrapper = styled.section`
  position: relative;
  display: flex;

  section {
    flex: 1;
    min-height: 400px;
    padding: 30px;
    background-color: var(--secondary-color);

    &:nth-last-child(1) {
      background-color: var(--primary-color);
    }
  }
`;
