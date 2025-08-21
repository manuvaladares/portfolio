import React from "react";
import MainLayout from '../../components/MainLayout/MainLayout';
import Navigation from '../../components/navigation/navigation';

const SkillsPage = () => {
    return (
      <MainLayout
        leftContent={
          <>
            <h1>My Skills</h1>
            <p>Welcome to the skills page!</p>
          </>
        }
        rightContent={<Navigation />}
      />
    );
};

export default SkillsPage;