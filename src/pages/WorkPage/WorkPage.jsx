import React from "react";
import MainLayout from '../../components/MainLayout/MainLayout';
import Navigation from '../../components/navigation/navigation';

const WorkPage = () => {
    return (
      <MainLayout
        leftContent={
          <>
            <h1>My Works</h1>
            <p>Welcome to the works page!</p>
          </>
        }
        rightContent={<Navigation />}
      />
    );
};

export default WorkPage;