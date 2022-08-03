import styled from 'styled-components';

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral['600']};
`;

export default Divider;
