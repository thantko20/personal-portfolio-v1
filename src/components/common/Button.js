import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary['400']};
  color: ${({ theme }) => theme.colors.primary['900']};
  font-weight: 600;
  font-size: 1rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary['300']};
  }
`;
