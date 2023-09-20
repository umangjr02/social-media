import React from 'react';
import Link from 'next/link';

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
