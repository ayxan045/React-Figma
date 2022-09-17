import React from "react";
import "./home.scss";
import "../../components/header/header.scss";
import "../../components/resources/resources.scss"
import Header from "../../components/header/Header";
import { FaArrowRight } from "react-icons/fa";
import imgGirl from "../../img/domainGirl.png";
import Resources from "../../components/resources/Resources";

const Home = () => {
  return (
    <section className="home">
      <Header />
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="homeText">
            <h2>Use Domain to find unique domains!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              eligendi itaque quia quas odit, placeat doloribus recusandae.
              Facere, necessitatibus mollitia?
            </p>
          </div>
        </div>
       <Resources />
        <div className="homeSearchTxt d-flex flex-wrap justify-content-center">
          <h6 className="mt-1">Top searches:</h6>
          <h6 className="topSearches">development</h6>
          <h6 className="topSearches">agile</h6>
          <h6 className="topSearches">design</h6>
          <h6 className="topSearches">finance</h6>
          <h6 className="topSearches">startup</h6>
          <h6 className="topSearches">delivery</h6>
        </div>
        <div className="homeImg mt-5 pt-5">
          <div className="container mt-5 pt-5">
            <div className="row">
              <div className="col-lg-8">
                <div>
                  <h1>
                    Use Domain Finder to find <br /> unique domains!
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis quos ex alias quasi architecto maxime sit,
                    <br /> libero esse quaerat aperiam, dolorum quibusdam iure
                    soluta! Nisi, ipsa repellat. Reiciendis? Domains!
                  </p>
                </div>
                <div>
                  <h4 className="numberTxt mt-5">
                    <span className="number number1">1</span>
                    <span>Type to search</span>
                    <FaArrowRight className="faArrowRight" />
                    <span className="number">2</span>
                    <span>Find domains</span>
                    <FaArrowRight className="faArrowRight" />
                    <span className="number">3</span>
                    <span>Filter them</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img">
                  <img className="img-fluid" src={imgGirl} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
