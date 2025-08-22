import React from "react";
import MainLayout from '../../components/MainLayout/MainLayout';

const SkillsPage = () => {
    return (
      <MainLayout
        leftContent={
          <>
            <h1>My Skills</h1>
            <p>Welcome to the skills page!</p>
          </>
        }
      />
    );
};

export default SkillsPage;