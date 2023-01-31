import styled from 'styled-components'

export const Button = styled.button`
  width: 14rem;
  height: 4.8rem;
  border: none;
  transition: .2s;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.white};
  font-size: ${({ theme }) => theme.font.sizes.midle};

  span{
    margin:0 0.3rem;
  }

  :hover {
    cursor: pointer;
    filter: brightness(0.7);
    transition: 2s;
  }
`