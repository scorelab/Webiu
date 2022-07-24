import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
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

export const FooterThemeTwo = ({
  titleOne,
  titleTwo,
  titleThree,
  aboutText,
  linksListData,
  servicesListData,
  contactListData,
  socialLinks,
}) => {
  const { facebook, gitter, twitter, github, linkedin, medium } = socialLinks

  return (
    <footer class="foot-section">
      <div class="container">
        <div class="foot-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="foot-widget">
                <div class="foot-text">
                  <div class="foot-widget-heading">
                    <div class="foot-logo">
                      <a href="#">
                        <img src={CompanyLogo} class="img-fluid" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <p>{aboutText}</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="foot-widget">
                <div class="foot-widget-heading">
                  <h3>{titleOne}</h3>
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
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="foot-widget">
                <div class="foot-widget-heading">
                  <h3>{titleTwo}</h3>
                </div>
                <ul>
                  {servicesListData &&
                    servicesListData.map((servicesListData, index) => {
                      return (
                        <li key={index}>
                          <a href={servicesListData.link}>
                            {servicesListData.serviceName}
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 mb-30">
              <div class="foot-widget">
                <div class="foot-widget-heading">
                  <h3>{titleThree}</h3>
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
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div class="foot-copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="foot-copyright-text">
                <p>Copyright ©2022 All rights reserved by SCoRe Lab</p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="foot-menu">
                <div className="social-icons-container">
                  <a href={facebook}>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="foot-social-icon "
                    />
                  </a>

                  <a href={gitter}>
                    <FontAwesomeIcon
                      icon={faGitter}
                      className="foot-social-icon "
                    />
                  </a>

                  <a href={medium}>
                    <FontAwesomeIcon
                      icon={faMedium}
                      className="foot-social-icon "
                    />
                  </a>

                  <a href={twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="foot-social-icon "
                    />
                  </a>

                  <a href={github}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="foot-social-icon "
                    />
                  </a>

                  <a href={linkedin}>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="foot-social-icon "
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

FooterThemeTwo.propTypes = {
  titleOne: PropTypes.string,
  titleTwo: PropTypes.string,
  titleThree: PropTypes.string,
  aboutText: PropTypes.string,
  socialLinks: PropTypes.object,
  linksListData: PropTypes.object,
  servicesListData: PropTypes.object,
  contactListData: PropTypes.object,
}
