import { useState } from 'react';
import CartIcon from '@assets/images/shopping-cart.svg?react';
import CrossIcon from '@assets/images/x.svg?react';
import {
  Bar,
  Logo,
  Links,
  StyledLink,
  Icons,
  Menu,
  MenuIcon,
  Cross,
} from './NavBar.styled';
import { useLocation } from 'react-router-dom';

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const pathes = {
    home: '/',
    favorites: '/favorites',
  };

  const location = useLocation();

  const onMenuClick = () => {
    setShowMenu(true);
  };

  const onCrossClick = () => {
    setShowMenu(false);
  };

  return (
    <Bar>
      <Links>
        <StyledLink to="/" active={location.pathname === pathes.home}>
          Home
        </StyledLink>
        <StyledLink
          to="/favorites"
          active={location.pathname === pathes.favorites}>
          Favorites
        </StyledLink>
      </Links>

      <Logo to="/">
        <p>
          <span>tasty</span>treats.
        </p>
      </Logo>

      <Icons>
        <CartIcon />
        <MenuIcon onClick={onMenuClick} />
      </Icons>

      {showMenu && (
        <Menu>
          <Cross>
            <CrossIcon onClick={onCrossClick} />
          </Cross>

          <Links>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </Links>
        </Menu>
      )}
    </Bar>
  );
};
