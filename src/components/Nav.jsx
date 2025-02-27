import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home" />
          Home
        </li>
        <li>
          <a href="/about" />
          About
        </li>
        <li>
          <a href="/menu" />
          Menu
        </li>
        <li>
          <a href="/reservations" />
          Reservations
        </li>
        <li>
          <a href="/order-online" />
          Order Online
        </li>
        <li>
          <a href="/login" />
          Login
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
