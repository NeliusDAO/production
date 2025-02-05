import { useContext } from "react"
import { ToggleContext } from "./ToggleContext";
import { Link } from "react-router-dom";
import One from "../assets/img/logo/one.svg"
import Two from "../assets/img/logo/two.svg"
import Three from "../assets/img/logo/three.svg"
import Four from "../assets/img/logo/four.svg"
import Five from "../assets/img/logo/five.svg"


export default function HowToGet() {
    const { isToggled } = useContext(ToggleContext);

    const dark = {
        color: "white",
        backgroundColor: "#010101",
    }

    const getting = [
        {
            words: "Original holders of Nelius nominates a group of events to be donated to.", dot: {
                backgroundColor: "red",
                boxShadow: "0 4px 8px rgba(231, 94, 94, 0.1)",
                width: "15px",
                height: "15px",
                borderRadius: "50%"
            },
            num: One
        },
        {
            words: "Token holders decides which sets of events to donate to at a given time.", dot: {
                backgroundColor: "blue",
                width: "15px",
                height: "15px",
                borderRadius: "50%"
            },
            num: Two
        },
        {
            words: "For every transaction made with Nelius, 1/10th of the transferred token is staked for contribution.", dot: {
                backgroundColor: "yellow",
                width: "15px",
                height: "15px",
                borderRadius: "50%"
            },
            num: Three
        },
        {
            words: "All staked tokens would be donated to the address of selected addresses.", dot: {
                backgroundColor: "green",
                width: "15px",
                height: "15px",
                borderRadius: "50%"
            },
            num: Four
        },
        {
            words: "Token holders can still donate to events of their choosing at any time provided event addresses.", dot: {
                backgroundColor: "pink",
                width: "15px",
                height: "15px",
                borderRadius: "50%"
            },
            num: Five
        },
    ]

    return (
        <div className="print" id="print" style={!isToggled ? dark : {}}>
            <div className="printFrame">
                {getting.map((texts, index) => {
                    return (
                        <div className="card">
                            <div className="dotFrame">
                                <div className="dot" style={texts.dot}></div>
                            </div>
                            <div className="howTo">
                                <img src={texts.num} alt={index + 1} className="num" />
                                <p key={index + 1} className="texts" id="texts">{texts.words}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="acct" id="acct">
                <Link to="/signup">
                    <button className='account-btn' style={{color : 'white'}}>Create Account</button>
                </Link>
            </div>
        </div>
    )
};
