import React from 'react'
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../..//Assets/home-banner-image.png";
import Navbar from "../Navbar/Navbar";
import { FiArrowRight } from "react-icons/fi";
import './Main.css'

const Main = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Rainbow Homes
                    </h1>
                    <p className="primary-text">
                        Rainbow Foundation India is an Indian organization in which the most marginalized and disadvantaged child is reached and cared
                        for by organizations of disadvantaged people, with strong contributions of the state as well as local civil society in every city creating
                        a movement for caring of the dispossessed for the dispossessed.
                    </p>
                    <div className="row">
                        <a href="/" className='col'>
                            <button className="secondary-button">
                                Get Started <FiArrowRight />{" "}
                            </button>
                        </a>
                        <br />
                        <a href="/" className='col'>
                            <button className="secondary-button ">
                                Login <FiArrowRight />{" "}
                            </button>
                        </a>
                    </div>

                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Main
