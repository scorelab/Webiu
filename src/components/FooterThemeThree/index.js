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
import { Container } from "react-bootstrap"

export const FooterThemeThree = ({
  mainHeading,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  firstListData,
  secondListData,
  thirdListData,
  fourthListData,
  socialLinks,
}) => {
  const { facebook, gitter, twitter, github, linkedin, medium } = socialLinks

  return (
    <footer class="FooterThree-section">
      <div class="container">
        <div class="FooterThree-content pt-5 pb-5">
          <div className="FooterThree-toparea">
            <hr className="dividerFooter" />
            <h3 className="FooterThree-toparea-heading">
              {mainHeading}
            </h3>
          </div>
          <Container>
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div class="FooterThree-widget">
                  <div class="FooterThree-widget">
                    <div class="FooterThree-widget-heading">
                      <h3>{titleOne}</h3>
                    </div>
                    <ul>
                      {firstListData &&
                        firstListData.map((firstListData, index) => {
                          return (
                            <li key={index}>
                              <a href={firstListData.linkUrl}>
                                {firstListData.linkName}
                              </a>
                            </li>
                          )
                        })}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div class="FooterThree-widget">
                  <div class="FooterThree-widget-heading">
                    <h3>{titleTwo}</h3>
                  </div>
                  <ul>
                    {secondListData &&
                      secondListData.map((secondListData, index) => {
                        return (
                          <li key={index}>
                            <a href={secondListData.linkUrl}>
                              {secondListData.linkName}
                            </a>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div class="FooterThree-widget">
                  <div class="FooterThree-widget-heading">
                    <h3>{titleThree}</h3>
                  </div>
                  <ul>
                    {thirdListData &&
                      thirdListData.map((thirdListData, index) => {
                        return (
                          <li key={index}>
                            <a href={thirdListData.linkUrl}>
                              {thirdListData.linkName}
                            </a>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div class="FooterThree-widget">
                  <div class="FooterThree-widget-heading">
                    <h3>{titleFour}</h3>
                  </div>
                  <ul>
                    {fourthListData &&
                      fourthListData.map((fourthListData, index) => {
                        return (
                          <li key={index}>
                            <a href={fourthListData.linkUrl}>
                              {fourthListData.linkName}
                            </a>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div class="FooterThree-copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="FooterThree-copyright-text">
                <p>Copyright ©2022 All rights reserved by SCoRe Lab</p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="FooterThree-menu">
                <div className="social-icons-container">
                  <a href={facebook}>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="FooterThree-social-icon "
                    />
                  </a>

                  <a href={gitter}>
                    <FontAwesomeIcon
                      icon={faGitter}
                      className="FooterThree-social-icon "
                    />
                  </a>

                  <a href={medium}>
                    <FontAwesomeIcon
                      icon={faMedium}
                      className="FooterThree-social-icon "
                    />
                  </a>

                  <a href={twitter}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="FooterThree-social-icon "
                    />
                  </a>

                  <a href={github}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="FooterThree-social-icon "
                    />
                  </a>

                  <a href={linkedin}>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="FooterThree-social-icon "
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

FooterThemeThree.propTypes = {
  mainHeading: PropTypes.string,
  titleOne: PropTypes.string,
  titleTwo: PropTypes.string,
  titleThree: PropTypes.string,
  titleFour: PropTypes.string,
  aboutText: PropTypes.string,
  socialLinks: PropTypes.object,
  firstListData: PropTypes.object,
  secondListData: PropTypes.object,
  thirdListData: PropTypes.object,
  fourthListData: PropTypes.object,
}
