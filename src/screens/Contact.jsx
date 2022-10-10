import React from 'react';
import Contacts from '../components/Home/Contacts';

const Contact = () => {
  return (
    <main className="contact_page_container">
      <Contacts heading={false} head={true} />
    </main>
  );
};

export default Contact;
