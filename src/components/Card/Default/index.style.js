import styled from 'styled-components';

export const CardWrapper = styled.section`
  position: relative;
`;

export const CardContent = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  color: #fff;
`;

export const CardTitle = styled.h3``;

export const CardMask = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 45%,
    rgba(0, 0, 0, 0.4) 60%,
    rgb(0, 0, 0) 100%
  );
  border-radius: var(--border-radius);
`;
