import React from "react";
import MainLayout from '../../components/MainLayout/MainLayout';

const WorkPage = () => {
    return (
      <MainLayout
        leftContent={
          <>
            <h1>My Works</h1>
            <p>Welcome to the works page!</p>
          </>
        }
      />
    );
};

export default WorkPage;