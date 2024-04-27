import React from "react";
import BaseLayout from "./defaults/baseLayout";
const HomePage: React.FC<{}>  = () => {
    return (
        <BaseLayout>
        <div>
          <h1>Home Page</h1>
          {/* Add your home page content here */}
        </div>
      </BaseLayout>)
};

export default HomePage;