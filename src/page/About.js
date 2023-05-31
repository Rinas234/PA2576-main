//C:\Users\rinas\Desktop\PA2576-main\src\page\About.js
import React from 'react';

const AboutUs = () => {
    return (
        <div style={{ margin: '0 auto', width: '80%', textAlign: 'left', fontFamily: 'Times New Roman, serif' }}>
            <h1 style={{ fontSize: '3em', color: '#000', fontWeight: 'bold', marginBottom: '20px' }}>About Us!</h1>
            <p style={{ fontSize: '1.2em', color: '#000', lineHeight: '1.6', fontWeight: 'bold' }}>We are a group of ambitious students from the "Civilingenjör inom industriell ekonomi" program. This project was crafted with dedication and hard work as a part of the PA576 course. Together, we have striven to create a platform that not only meets the course requirements, but also provides a user-friendly experience. We have each brought our unique skills and perspectives to the table, resulting in a project that we are all proud to put our names to.</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', marginTop: '50px' }}>
                <div style={{ maxWidth: '200px', margin: '10px', backgroundColor: '#EAEAEA', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
                    <h2 style={{ color: '#000', fontSize: '1.2em', fontWeight: 'bold' }}>Abdul</h2>
                    <p style={{ color: '#000', fontSize: '1em' }}>Abdul is a focused individual who enjoys problem-solving. His passion for computer science shines in his work on backend development, and his relentless pursuit of excellence ensures that no detail is left unattended. Abdul aspires to leverage technology to create efficient and effective solutions.</p>
                </div>
                <div style={{ maxWidth: '200px', margin: '10px', backgroundColor: '#EAEAEA', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
                    <h2 style={{ color: '#000', fontSize: '1.2em', fontWeight: 'bold' }}>Ahmad</h2>
                    <p style={{ color: '#000', fontSize: '1em' }}>Ahmad has a knack for design and user experience. His ability to empathize with users and understand their needs is reflected in the intuitive interface of our project. He believes that design is not just about how things look, but also how they work. Ahmad dreams of creating designs that are both functional and beautiful.</p>
                </div>
                <div style={{ maxWidth: '200px', margin: '10px', backgroundColor: '#EAEAEA', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
                    <h2 style={{ color: '#000', fontSize: '1.2em', fontWeight: 'bold' }}>Jakob</h2>
                    <p style={{ color: '#000', fontSize: '1em' }}>Jakob is a master of organization. His project management skills kept us on track and ensured a smooth development process. Jakob's passion lies in the intersection of technology and business, and he thrives in turning ideas into reality. He aspires to lead teams that create impactful technological solutions.</p>
                </div>
                <div style={{ maxWidth: '200px', margin: '10px', backgroundColor: '#EAEAEA', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
                    <h2 style={{ color: '#000', fontSize: '1.2em', fontWeight: 'bold' }}>Omar</h2>
                    <p style={{ color: '#000', fontSize: '1em' }}>Omar is our front-end whiz. His coding skills brought our vision to life in the user interface. He constantly pushes the boundaries of what's possible in software development and dreams of creating applications that inspire and amaze.</p>
                </div>
                <div style={{ maxWidth: '200px', margin: '10px', backgroundColor: '#EAEAEA', padding: '20px', borderRadius: '10px', textAlign: 'left' }}>
                    <h2 style={{ color: '#000', fontSize: '1.2em', fontWeight: 'bold' }}>Rinas</h2>
                    <p style={{ color: '#000', fontSize: '1em' }}>Rinas is known for his attention to detail. His ability to find and fix bugs was crucial to the functionality of our project. Rinas believes in the power of technology to make life simpler and is dedicated to creating software that is easy to use. He envisions a future where technology is accessible and beneficial to all.</p>
                </div>
            </div>

            <p style={{ fontSize: '1.2em', color: '#000', lineHeight: '1.6', marginTop: '50px', fontWeight: 'bold' }}>Creating this project has been a journey of discovery and learning. We dived into the depths of coding and teamwork, and emerged with a stronger understanding of not only the technical aspects but also the human elements that bring a project to life. This experience has left us with a deep appreciation for the blend of creativity, logic, and collaboration required in software development. We hope you enjoy using our project as much as we enjoyed creating it!</p>
        </div>
    );
};

export default AboutUs;
