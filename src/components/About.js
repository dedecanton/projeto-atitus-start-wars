import { Avatar } from '@mui/material';
import React from 'react';
import ProfileImage from '../assets/images/profile.jpg';
import { LinkedIn, GitHub } from '@mui/icons-material'

const About = () => {
  return (
    <div className="about">
      <Avatar sx={{width: 150, height: 150, objectPosition: 'top'}} style={{objectPosition: 'top'}} alt="Remy Sharp" src={ProfileImage} />
      <h1>André Luís Lorini Canton</h1>
      <div className='link-group'>
        <a href='https://linkedin.com/in/andre-canton/' target='_blank'><LinkedIn/></a>
        <a href='https://github.com/dedecanton' target='_blank'><GitHub/></a>
      </div>
    </div>
  );
};

export default About;
