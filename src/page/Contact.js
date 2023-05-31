//\src\page\Contact.js

import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ margin: '0 auto', width: '50%', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '3em', color: '#000', fontWeight: 'bold', marginBottom: '20px' }}>Contact Us</h1>
      <p style={{ fontSize: '1.2em', color: '#000', lineHeight: '1.6', marginBottom: '50px', textAlign: 'left' }}>
        We'd love to hear from you! If you have any questions, suggestions, or just want to chat about our project, feel free to get in touch. To make the process easier for you, we've set up direct email links for all our team members. Just click on any of our names below, and your device's default email application will open with a new message addressed directly to that person. This way, you can reach out directly from your device without having to copy and paste email addresses. We look forward to hearing from you!
      </p>
      <ul style={{ listStyle: 'none', padding: '0', lineHeight: '1.6', marginBottom: '50px', textAlign: 'center' }}>
        <li style={{ fontSize: '1.5em', background: '#EEEEEE', borderRadius: '8px', display: 'inline-block', padding: '5px 10px', margin: '10px' }}>
          <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', display: 'inline' }}>Abdul</h3> - <a style={{ fontSize: '1.3em' }} href="mailto:abdul19@student.bth.se">abdul19@student.bth.se</a>
        </li>
        <li style={{ fontSize: '1.5em', background: '#EEEEEE', borderRadius: '8px', display: 'inline-block', padding: '5px 10px', margin: '10px' }}>
          <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', display: 'inline' }}>Ahmad</h3> - <a style={{ fontSize: '1.3em' }} href="mailto:ahmad19@student.bth.se">ahmad19@student.bth.se</a>
        </li>
        <li style={{ fontSize: '1.5em', background: '#EEEEEE', borderRadius: '8px', display: 'inline-block', padding: '5px 10px', margin: '10px' }}>
          <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', display: 'inline' }}>Jakob</h3> - <a style={{ fontSize: '1.3em' }} href="mailto:jakob20@student.bth.se">jakob20@student.bth.se</a>
        </li>
        <li style={{ fontSize: '1.5em', background: '#EEEEEE', borderRadius: '8px', display: 'inline-block', padding: '5px 10px', margin: '10px' }}>
          <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', display: 'inline' }}>Omar</h3> - <a style={{ fontSize: '1.3em' }} href="mailto:omar20@student.bth.se">omar20@student.bth.se</a>
        </li>
        <li style={{ fontSize: '1.5em', background: '#EEEEEE', borderRadius: '8px', display: 'inline-block', padding: '5px 10px', margin: '10px' }}>
          <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', display: 'inline' }}>Rinas</h3> - <a style={{ fontSize: '1.3em' }} href="mailto:rinas19@student.bth.se">rinas19@student.bth.se</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;