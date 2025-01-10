import { useState, useEffect } from "react"
import Submit from "../../assets/Submit";
import { useContext } from "react";
import { ToggleContext } from '../ToggleContext'

export default function Subscribe() {
    const { isToggled } = useContext(ToggleContext);
    const [email, setEmail] = useState('')
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const dark = {
        // backgroundColor: '#0c0c3f',
        backgroundColor: 'black',
        color: 'white',
    }

    const mail = {
        backgroundColor: 'black',
        color: 'white',
        border: 'white solid 1px'
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const text = {
        color: 'white',
        background: 'linear-gradient(-45deg, #FEFEFE, #02AFF3, #02AFF3, #FEFEFE, #FEFEFE)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    return (
        <div className="subscribe" id="subscribe" style={!isToggled ? dark : {}}>
            <p className="subscribeHead">
                Ready To Get <span style={!isToggled ? text : {}} className="textOne">Funded</span>?
            </p>
            {isMobile ? (
                <p className="subscribeText">Enter your email for early access. Our team will get in touch for personal branding.</p>
            ) : (
                <p className="subscribeText">Enter your email for early access. Our team <br /> will get in touch for personal branding.</p>
            )}
            <form action="" method="" className="form">
                <div className="inputContainer">
                    <input type="email" className={`emailInput ${!isToggled ? 'dark-placeholder' : ''}`} id="emailInput" placeholder="Enter email" style={!isToggled ? mail : {}}
                        value={email} onChange={(e) => setEmail(e.target.value)} onClick={handleSubmit} />
                    <Submit button="Subscribe" />
                </div>
            </form>
        </div>
    )
};