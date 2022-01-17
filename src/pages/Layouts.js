import React from 'react';
import Navbar from '../components/Navbar';

const LayoutNormal = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

const LayoutAdmin = ({ children }) => (
  <>
    <h1>ADMIN PAGE</h1>
    {children}
  </>
);

export { LayoutNormal, LayoutAdmin };
