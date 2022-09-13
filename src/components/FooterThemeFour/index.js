import React from "react"
import PropTypes from "prop-types"
import "./style.sass"
import CompanyLogo from "../../../static/images/main-logo-white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faGitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import { propTypes } from "react-bootstrap/esm/Image"

export const FooterThemeFour = ({
  aboutText,
  titleOne,
  titleTwo,
  useFullListData,
  subscribeText,
  socialLinks,
  copywriteText,
}) => {
  const { facebook, gitter, twitter, github, linkedin, medium } = socialLinks

  return (
    <footer class="FooterFour-section">
      <div class="container">
        <div class="FooterFour-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="FooterFourFour-widget">
                <div class="FooterFour-logo">
                  <a href="index.html">
                    <img src={CompanyLogo} class="img-fluid" alt="logo" />
                  </a>
                </div>
                <div class="FooterFour-text">
                  <p>{aboutText}</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="FooterFour-widget">
                <div class="FooterFour-widget-heading">
                  <h3>{titleOne}</h3>
                </div>
                <ul>
                  {useFullListData &&
                    useFullListData.map((useFullListData, index) => {
                      return (
                        <li key={index}>
                          <a href={useFullListData.linkUrl}>
                            {useFullListData.linkName}
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="FooterFour-widget">
                <div class="FooterFour-widget-heading">
                  <h3>{titleTwo}</h3>
                </div>
                <div class="FooterFour-subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Your E-mail" />
                    <button>subscribe</button>
                  </form>
                  <div class="FooterFour-subscribe-text mb-25">
                    <p>{subscribeText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="FooterFour-copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="FooterFour-copyright-text">
                <p>{copywriteText}</p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="FooterFour-menu">
                <div className="social-icons-container">
                  <a href={facebook}>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="FooterFour-social-icon"
                    />
                  </a>

                  <a href={gitter}>
                    <FontAwesomeIcon
                      icon={faGitter}
                      className="FooterFour-social-icon "
                    />
                  </a>

                  <a href={medium}>
                    <FontAwesomeIcon
                      icon={faMedium}
                      className="FooterFour-social-icon "
                    />
                  </a>

                  <a href={twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="FooterFour-social-icon "
                    />
                  </a>

                  <a href={github}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="FooterFour-social-icon "
                    />
                  </a>

                  <a href={linkedin}>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="FooterFour-social-icon "
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

FooterThemeFour.propTypes = {
  aboutText: PropTypes.string,
  titleOne: PropTypes.string,
  titleTwo: PropTypes.string,
  useFullListData: propTypes.object,
  socialLinks: PropTypes.object,
  firstListData: PropTypes.object,
  copywriteText: PropTypes.string,
}
