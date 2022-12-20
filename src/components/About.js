import { Avatar } from '@mui/material';
import React from 'react';
import ProfileImage from '../assets/images/profile.jpg';
import FabricioImage from '../assets/images/fabricio.jpeg';
import { LinkedIn, GitHub } from '@mui/icons-material';

const About = () => {
  return (
    <div>
      <div className="about">
        <Avatar
          sx={{ width: 150, height: 150, objectPosition: 'top' }}
          style={{ objectPosition: 'top' }}
          alt="Remy Sharp"
          src={ProfileImage}
        />
        <h1>André Luís Lorini Canton</h1>
        <div className="link-group">
          <a
            href="https://linkedin.com/in/andre-canton/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/dedecanton"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </div>
      <div className="about">
        <Avatar
          sx={{ width: 150, height: 150, objectPosition: 'top' }}
          style={{ objectPosition: 'top' }}
          alt="Remy Sharp"
          src={FabricioImage}
        />
        <h1>Fabricio Mesomo</h1>
        <div className="link-group">
          <a
            href="https://www.linkedin.com/in/fabricio-mesomo/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/mesomo-fabricio"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
