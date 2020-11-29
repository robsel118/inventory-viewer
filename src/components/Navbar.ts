import styled from 'styled-components';

 const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  list-style-type: none;

  & li a{
    text-decoration: none;

    &.active{
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
  }
`

export default NavList;