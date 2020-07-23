import React, { useEffect, useState } from 'react';
import './Greeting.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import { greeting } from '../../portfolio';
import { Fade } from 'react-reveal';
import emoji from 'react-easy-emoji';
import { contactInfo } from '../../portfolio';

export default function Greeting() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  });
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div
            className="greeting-image-div"
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: width > 771 ? '4%' : '',
            }}
          >
            <img
              alt="hasnat sitting on table"
              style={{
                height: width < 764 ? `${width * 0.7}px` : `${width * 0.33}px`,
                width: width < 764 ? `${width * 0.7}px` : `${width * 0.33}px`,
                borderRadius: '50%',
              }}
              src={require('../../assets/images/profile.jpg')}
            ></img>
          </div>
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {' '}
                {greeting.title}{' '}
                <span className="wave-emoji">{emoji('👋')}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
