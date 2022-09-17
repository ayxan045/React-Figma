import React from "react";
import AdobeChildRight from "../../components/adobe/adobeChild/adobeChildRight/AdobeChildRight";
import Header from "../../components/header/Header";
import Resources from "../../components/resources/Resources";
import "./developer.scss";

const Developer = () => {
  return (
    <section className="developer">
      <Header />
      <div className="container">
        <Resources />
        <div className="developerBoxes">
          <div className="row">
            <div className="col-lg-8">
              <AdobeChildRight />
              <div className="godaddy">
                <h4>Domain Registrar</h4>
                <p>
                  <u>Godaddy</u>
                </p>
              </div>
              <div className="whoIsBox">
                <div className="container">
                  <h4>Who is</h4>
                  <br />
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                      <h6 className="domainh6">Domain Information</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-0 m-0">
                      <h6 className="after">Registrant Contact</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-0 m-0">
                      <h6 className="after">Administirative Contact</h6>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-0 m-0">
                      <h6 className="after">Administirative Contact</h6>
                    </div>
                    <br />
                    <br />
                    <div className="col-lg-3 col-4">
                      <div className="divH6">
                        <h6>Domain:</h6>
                        <h6>Registrar:</h6>
                        <h6>Registered On:</h6>
                        <h6>Expires On:</h6>
                        <h6>Updated On:</h6>
                        <h6>Status:</h6>
                        <br />
                        <br />
                        <br />
                        <h6 className="serverH6">Name Servers:</h6>
                      </div>
                    </div>
                    <div className="col-lg-5 col-8">
                      <div className="divh6">
                        <h6>adobe.com</h6>
                        <h6>Nom-iq Ltd. dba COM LAUDE</h6>
                        <h6>1986-11-17</h6>
                        <h6>2022-05-17</h6>
                        <h6>201-04-17</h6>
                        <span>
                          <span>clientUpdateProhibited</span>
                          <br />
                          <span>serverDeleteProhibited</span>
                          <br />
                          <span>serverTransferProhibited</span>
                          <br />
                          <span>serverUpdateProhibited</span>
                          <br />
                        </span>
                        <br />
                        <span>
                          <span>a1-217.akam.net</span>
                          <br />
                          <span>a10-64.akam.net</span>
                          <br />
                          <span>a13-65.akam.net</span>
                          <br />
                          <span>a26-66.akam.net</span>
                          <br />
                          <span>a26-66.akam.net</span>
                          <br />
                          <span>a7-64.akam.net</span>
                          <br />
                          <span>adobe-dns-01.adobe.com</span>
                          <br />
                          <span>adobe-dns-02.adobe.com</span>
                          <br />
                          <span>adobe-dns-03.adobe.com</span>
                          <br />
                          <span>adobe-dns-04.adobe.com</span>
                          <br />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="developerRightBox">
                <h4>Tags</h4>
                <div className="buttonBox">
                  <button>adobe</button>
                  <button>design</button>
                  <button>creative</button>
                  <button>designer</button>
                  <button>photoshop</button>
                  <button>illustrator</button>
                </div>
              </div>
              <div className="developerRightBox">
                <h4>Company sectors</h4>
                <div className="buttonBox">
                  <button>Art</button>
                  <button>Design</button>
                  <button>Photography</button>
                  <button>Development</button>
                  <button>Artist</button>
                </div>
              </div>
              <div className="developerRightBox">
                <h4>Colors</h4>
                <div className="buttonBox">
                  <button>Red</button>
                  <button>Black</button>
                  <button>White</button>
                  <button>Gray</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="developerBottom">
          <h4>Similar content</h4>

          <div className="row">
            <div className="col-lg-4">
              <AdobeChildRight />
            </div>
            <div className="col-lg-4">
              <AdobeChildRight />
            </div>
            <div className="col-lg-4">
              <AdobeChildRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
