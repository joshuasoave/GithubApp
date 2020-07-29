import React from 'react';

const About = () => {

  return(
    <div className="about">
      <h2>About Us</h2>
        <p>The Power of Babel is based on Tejas Shah's <a target="blank" href="https://www.mintbean.io/project/506f7411-bdb1-4d34-b925-260e0d90589b">original project</a> a mintbean.io hackathon.</p>
        <p>His project User's Favorite Language used the Github API to find a user's favorite languages to code in based on their. contributions to public Github repositories.</p>
        <img src="https://i.imgur.com/6YRcYC2.png" alt="a picture of the original project made by Tejas Shah"/>
        <p>The Power of Babel expands upon his original work with extra UX and UI additions to turn it into a single page application.</p>
    </div>
  )

}

export default About;
