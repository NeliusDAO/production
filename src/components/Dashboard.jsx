import { useContext,} from "react";
import { ToggleContext } from "./ToggleContext";
import Image from "../assets/img/logo/PublicImg.png";
import CopyToClipboard from "react-copy-to-clipboard";
import Dropdown from "./Dropdown";

export default function Dashboard() {
    const { isToggled } = useContext(ToggleContext);
    const totalScore = 450
    const options = [
        { src: Image, text: "Onward Christian Soldier", keywords: "RCCG 2E3RFJHJ67", score: 5000 },
        { src: Image, text: "Hallelujah", keywords: "RCCG 2E3RFJHJ68", score: 4500 },
        { src: Image, text: "Marching On", keywords: "RCCG 2E3RFJHJ69", score: 2000 },
        { src: Image, text: "On Eagles Wings", keywords: "RCCG 2E3RFJHJ70", score: 3000 },
    ]
    const eventKeyword = `${options[0].text} ${options[0].keywords}`
    const dark = {
        backgroundColor: "#010101",
        color: "white",
    }

    const socialOptions = [
        { social: "Facebook" },
        { social: "Twitter" },
        { social: "Instagram" },
        { social: "Youtube" },
        { social: "TikTok" },
    ];

    return (
        <div className="advert" id="advert" style={!isToggled ? dark : {}}>
            <div className="circleBackground"></div>
            <div className="balanceHead" id="balanceHead">
                <div>
                    <p>Nelius Balance</p>
                    <div className="smallScore">{totalScore}</div>
                </div>
            </div>
            <div className="events" id="events">
                <div className="eventList" id="eventList" style={!isToggled ? dark : {}}>
                    <p>Event publicity score</p>
                    {options.map((option) => (
                        <div>
                            <div className="list" id="list">
                                <div className="listAlign" id="listAlign">
                                    <span><img src={option.src} className="eventImg" id="eventImg" alt={option.text} /></span>
                                    <span className="listAlignText" id="listAlignText">{option.text}</span>
                                </div>
                                <span>{option.score}</span>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            <div className="eventKeywordHead" id="eventKeywordHead">
                <p className="pOne" id="pOne">Nel<span className="textOne">ius Keyw</span>ords</p>
                <p className="pTwo" id="pTwo">Use the keywords below in your social media post as<br />this is what our algorithm will read for.</p>
                <div className="div1" id="div1">
                    <p className="eventKeyword" style={!isToggled ? { color: "black" } : {}}>{options[0].text} {options[0].keywords}</p>
                </div>
                <div className="div2">
                    <CopyToClipboard text={eventKeyword}>
                        <button className="button" id="button">Copy to Clipboard</button>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="advertSelectHead" id="advertSelectHead">
                <p className="advertSelect textOne" id="advertSelect">Become a Nelius Advertiser</p>
                <p>Input your Social media username</p>
                <form>
                    <Dropdown socialOptions={socialOptions} />
                    <button disabled>Connect</button>
                </form>
            </div>
        </div>
    );
}