import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/private">
        <a>Private</a>
      </Link>
      <h1>Header Components</h1>
    </>
  );
};

export default Header;
