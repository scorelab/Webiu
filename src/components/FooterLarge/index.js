import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import ArrowCircleRight from "../../../static/icons/Arrow_Circle_Right.svg"
import CompanyLogo from "../../../static/images/main-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faGitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"

export const FooterLarge = ({
  headingOne,
  headingTwo,
  headingThree,
  headingFour,
  aboutText,
  newsletterText,
  linksListData,
  contactListData,
  socialLinks,
  
}) => {
  const { facebook, gitter, twitter, github, linkedin, medium } = socialLinks

  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="footer-widget">
                <div class="footer-text">
                  <div class="footer-widget-heading">
                    <h3>{headingOne}</h3>
                  </div>
                  <p>{aboutText}</p>
                </div>
                <div class="footer-logo">
                  <a href="#">
                    <img src={CompanyLogo} class="img-fluid" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>{headingTwo}</h3>
                </div>
                <ul>
                  {contactListData &&
                    contactListData.map((contactListData, index) => {
                      return (
                        <li key={index}>
                          <a href={contactListData.link}>
                            {contactListData.detail}
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>{headingThree}</h3>
                </div>
                <ul>
                  {linksListData &&
                    linksListData.map((linksListData, index) => {
                      return (
                        <li key={index}>
                          <a href={linksListData.linkUrl}>
                            {linksListData.linkName}
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>{headingFour}</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>{newsletterText}</p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <img src={ArrowCircleRight} className="ButtonIcon" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>Copyright ©2022 All rights reserved by SCoRe Lab</p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <div className="social-icons-container">
                  <a href={facebook}>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="footer-social-icon "
                    />
                  </a>

                  <a href={gitter}>
                    <FontAwesomeIcon
                      icon={faGitter}
                      className="footer-social-icon "
                    />
                  </a>

                  <a href={medium}>
                    <FontAwesomeIcon
                      icon={faMedium}
                      className="footer-social-icon "
                    />
                  </a>

                  <a href={twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="footer-social-icon "
                    />
                  </a>

                  <a href={github}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="footer-social-icon "
                    />
                  </a>

                  <a href={linkedin}>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="footer-social-icon "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

FooterLarge.propTypes = {
  headingOne: PropTypes.string,
  headingTwo: PropTypes.string,
  headingThree: PropTypes.string,
  headingFour: PropTypes.string,
  aboutText: PropTypes.string,
  socialLinks: PropTypes.object,
  linksListData: PropTypes.object,
  contactListData: PropTypes.object,
}
