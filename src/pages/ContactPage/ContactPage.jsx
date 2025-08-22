import React from "react";
import MainLayout from '../../components/MainLayout/MainLayout';

const ContactPage = () => {
    return (
      <MainLayout
        leftContent={
          <>
            <h1>Contact Me</h1>
            <p>Welcome to the contact page!</p>
          </>
        }
      />
    );
};

export default ContactPage;