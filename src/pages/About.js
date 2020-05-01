import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About</h1>
      <p>
        This is a project using React and the CocktailsDB API. 
      </p>
      <a href='https://github.com/Cruzm430/cocktailsDB'>
        <button className='btn btn-primary'>See Source Code</button>
      </a>
    </section>
  );
}

export default About;