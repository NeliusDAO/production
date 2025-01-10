import { React } from "react"
import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";
import Download from "../assets/img/logo/Download Document.png"

export default function Whitepaper() {
    const { isToggled } = useContext(ToggleContext);
    const dark = {
        backgroundColor: "black",
        color: "white",
    }

    const text = {
        color: 'white',
        background: 'linear-gradient(-45deg, #FEFEFE, #02AFF3, #02AFF3, #FEFEFE, #FEFEFE)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    return (
        <div className="whitepaper" id="whitepaper" style={!isToggled ? dark : {}}>
            <p className="whitepaperText" id="whitepaperText">Read <span style={!isToggled ? text : {}} className="textOne">the Nelius White Pap</span>er<br /><span style={!isToggled ? text : {}} className="textOne">for more informati</span>on</p>
            <button className="whitepaperDownload" id="whitepaperDownload"><img src={Download} className="whiteimg" id="whiteimg" alt="download whitepaper" /> Download Document</button>
        </div>
    )
};
