import { useContext } from "react";
import { ToggleContext } from './ToggleContext';
import { Link } from "react-router-dom";

export default function Community() {
    const { isToggled } = useContext(ToggleContext);

    const dark = {
        backgroundColor: '#010101',
        color: 'white',
    };

    const light = {
        backgroundColor: '#ffffff',
        color: 'black',
    };

    return (
        <div className="community" id="community" style={isToggled ? light : dark}>
            <div className="communityHead">
                <h2 id="headText">join our <span className="textOne">community</span></h2>
            </div>
            <div className="communityText">
                <p id="bodyText">Get updated on new event, giveaways and get answers to all your questions regarding the Nelius token</p>
            </div>
            <div className="communityBtn">
                <Link
                    to="https://t.me/neliusdao"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="buttonComponent extra" id="communityBtn">
                        join on telegram
                        <img src="" alt="" />
                    </button>
                </Link>
            </div>
        </div>
    );
}