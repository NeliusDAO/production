import One from "../assets/img/logo/one.svg"
import Two from "../assets/img/logo/two.svg"
import Three from "../assets/img/logo/three.svg"
import Four from "../assets/img/logo/four.svg"
import Five from "../assets/img/logo/five.svg"
import React, { useContext } from 'react';
import { ToggleContext } from './ToggleContext';

export default function Blueprint() {
    const { isToggled } = useContext(ToggleContext);
    const colorSwitch = {
        backgroundColor: '#010101',
        color: 'white',
    };

    const text = {
        color: 'white',
        background: 'linear-gradient(-45deg, #FEFEFE, #02AFF3, #02AFF3, #FEFEFE, #FEFEFE)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const blueprints = {
        zero: "",
        one: "Original holders of Nelius nominates a group of events to be donated to.",
        two: "Token holders decides which sets of events to donate to at a given time.",
        three: "For every transaction made with Nelius, 1/10th of the transferred token is staked for contribution.",
        four: "All staked tokens would be donated to the address of selected addresses.",
        five: "Token holders can still donate to events of their choosing at any time provided event addresses.",
    }

    return (
        <div className="blueprint" id="blueprint" style={!isToggled ? colorSwitch : {}}>
            <p className="blueprintText">
                The <span style={!isToggled ? text : {}} className="textOne">Nelius</span> Blueprint
            </p>
            <div className="blueprintStage" id="blueprintStage">
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText" id="cardText">{blueprints.one}</p>
                    <img src={One} alt="One" className="blueprintImage" id="blueprintImage" />
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText" id="cardText">{blueprints.two}</p>
                    <img src={Two} alt="Two" className="blueprintImage" id="blueprintImage" />
                </div>
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText" id="cardText">{blueprints.three}</p>
                    <img src={Three} alt="Three" className="blueprintImage" id="blueprintImage" />
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText" id="cardText">{blueprints.four}</p>
                    <img src={Four} alt="Four" className="blueprintImage" id="blueprintImage" />
                </div>
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText" id="cardText">{blueprints.five}</p>
                    <img src={Five} alt="Five" className="blueprintImage" id="blueprintImage"  />
                </div>
            </div>
        </div>

    )
};
