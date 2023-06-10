import React from "react";
import AboutBackground from "../../images/about-background.jpg";
import AboutBackgroundImage from "../../images/your-background-image.jpg";
import './about.css';


const About = () => {
    return (

        <div className="about-section-container">

            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">

                </p>
                <h2 className="primary-heading">
                    What are we ??
                </h2>
                <p className="primary-text">
                    Rainbow Foundation India is a PAN India non-profit organization registered under the Societies
                    Registration Act, collaborating with diverse partners in 10 cities across India. Rainbow Homes
                    Program provides comprehensive care to children who have faced extreme vulnerabilities. These
                    children were/are abandoned, have run away from violent and abusive situations, have grown up in
                    violence, are victims of sexual, physical and mental abuse, and are children of sex workers and
                    manual scavengers in rural and urban areas. Rainbow Homes rescue these children from a life of
                    uncertainty, helplessness, and impending criminalization through its Residential Care and
                    Community Based Care (CBC). Rainbow Homes Program aims to enable these children to live a
                    dignified  with the support of Rainbow
                    Future Program.
                </p>

                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">

                    </button>

                </div>
            </div>
        </div>
    );
};

export default About;







