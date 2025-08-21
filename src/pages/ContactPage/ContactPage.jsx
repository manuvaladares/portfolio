import React from "react";
import MainLayout from '../../components/MainLayout/MainLayout';
import Navigation from '../../components/navigation/navigation';

const ContactPage = () => {
    return (
      <MainLayout
        leftContent={
          <>
            <h1>Contact Me</h1>
            <p>Welcome to the contact page!</p>
          </>
        }
        rightContent={<Navigation />}
      />
    );
};

export default ContactPage;