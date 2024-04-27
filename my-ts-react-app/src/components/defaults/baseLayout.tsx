import React, { ReactNode } from 'react';
import Footer from './footer';
import children from "../../types/baseLayout.interface"
import NavBar from './navBar';
const BaseLayout: React.FC<children> = ({children }) => {
    return (
      <div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default BaseLayout;