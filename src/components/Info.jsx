import { useState, useEffect, useContext } from "react";
import { ToggleContext } from './ToggleContext';

// import Button from "../assets/Button";

import Dove from "../assets/img/logo/dove.svg"
import DoveDark from "../assets/img/logo/doveDark.svg"
import Plant from "../assets/img/logo/plant.svg"
import PlantDark from "../assets/img/logo/plantDark.svg"
import Interest from "../assets/img/logo/interest.svg"
import InterestDark from "../assets/img/logo/interestDark.svg"
import Wallet from "../assets/img/logo/wallet.svg"
import WalletDark from "../assets/img/logo/walletDark.svg"
import Spread from "../assets/img/logo/spread.svg"
import SpreadDark from "../assets/img/logo/spreadDark.svg"

export default function Info() {
    const { isToggled } = useContext(ToggleContext);
    const styles = {
        color: 'white',
        // backgroundColor: '#0c0c3f'
        backgroundColor: 'black'
    }

    return (
        <div className="info" id="info" style={!isToggled ? styles : {}}>
            {/* <div className="infoOne">
                <p className="infoText">Gettin<span className="textOne">g Your Events</span> Noticed</p>
            </div>
            <div className="infoTwo">
                <div className="infoFlexOne">
                    <p className="infoText">Crite<span className="textOne">ria For Events Nomin</span>ation</p>
                </div>
                <div className="infoFlexTwo">
                    <Button button="Get Started" />
                </div>
            </div> */}
            <InfoImg />
        </div>
    )
};

const styles = {
    imageGrid: {
        display: 'grid',
        alignItems: 'center',
        gap: '20px',
        gridTemplateColumns: '1fr 1fr',
        marginTop: '20px',
        marginBottom: '20px',
    },
    imageGrid1: {
        display: 'grid',
        alignItems: 'center',
        gap: '20px',
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    noGrid: {
        display: 'block',
        alignItems: 'center',
        gap: '20px',
    },
    image: {
        width: '100%',
        height: '100%',
    },
};

const InfoImg = () => {
    const { isToggled } = useContext(ToggleContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const text = {
        color: 'white',
        background: 'linear-gradient(-45deg, #FEFEFE, #02AFF3, #02AFF3, #02AFF3, #FEFEFE)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    return (
        <div className="imageGrids">
            <div id="info_back">
                <p id="infoText" className="infoText textOne" style={!isToggled ? text : {}}>Criteria For Events Nomination</p>
                {isMobile ? (
                    <p id="info_backP">All you need to<br></br>nominate your event</p>
                ) : (
                    <p id="info_backP">All you need to nominate your event</p>
                )}
            </div>
            <div style={!isMobile ? styles.imageGrid : styles.noGrid} className="imageGrid">
                <img src={!isToggled ? DoveDark : Dove} alt="Large images" style={styles.image} />
                <img src={!isToggled ? PlantDark : Plant} alt="Large images" style={styles.image} />
            </div>
            <div id="info_back">
                <p id="infoText" className="infoText textTwo">Getting Your Events Noticed</p>
                {isMobile ? (
                    <p id="info_backP">Simple actions for event<br></br>owners / facilitators</p>) : (
                    <p id="info_backP">Simple actions for event owners / facilitators</p>
                )}
            </div>
            <div style={!isMobile ? styles.imageGrid1 : styles.noGrid} className="imageGridOne">
                <img src={!isToggled ? InterestDark : Interest} alt="Large images" style={styles.image} />
                <img src={!isToggled ? WalletDark : Wallet} alt="Large images" style={styles.image} />
                <img src={!isToggled ? SpreadDark : Spread} alt="Large images" style={styles.image} />
            </div>
        </div>
    )
}