import React, { useState } from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const ComingSoon = ({ logoText, bottomText, deployDate }) => {

    const [calculated, setCalculated] = useState();

    if (deployDate) {
        var countDownDate = new Date(deployDate).getTime();
    } else {
        var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();
    }

    var countdownfunction = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCalculated(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (distance < 0) {
            clearInterval(countdownfunction);
            setCalculated("EXPIRED");
        }
    }, 1000);

    return (
        <div>
            <div className="bgimg">
                <div className="topleft">
                    {logoText ? <p>{logoText}</p> : null}
                </div>
                <div className="middle">
                    <h12>COMING SOON</h12>
                    <br />
                    <p class="demo">{calculated}</p>
                </div>
                <div className="bottomleft">
                    {bottomText ? <p>{bottomText}</p> : null}
                </div>
            </div>
        </div>
    )
}

ComingSoon.propTypes = {
    logoText: PropTypes.string,
    bottomText: PropTypes.string,
    deployDate: PropTypes.string
}