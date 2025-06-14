import { useState, useEffect } from "react";
import Submit from "../../assets/Submit";
import { useContext } from "react";
import { ToggleContext } from '../ToggleContext';

export default function Subscribe() {
    const { isToggled } = useContext(ToggleContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const dark = {
        backgroundColor: '#010101',
        color: 'white',
    };

    const mail = {
        backgroundColor: '#010101',
        color: 'white',
        border: 'white solid 1px'
    };

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
        background: 'linear-gradient(-45deg, #FEFEFE, #02AFF3, #02AFF3, #FEFEFE, #FEFEFE)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const saveToGoogleSheet = async (email) => {
        const endpoint = process.env.REACT_APP_SUBSCRIBE_ENDPOINT;
        const apiKey = process.env.REACT_APP_SUBSCRIBE_API_KEY;

        const formData = new FormData();
        // // formData.append("entry.1297518056", email);
        formData.append("email", email)
        formData.append("apiKey", apiKey);

        try {
            const response = await fetch(endpoint, {
            method: "POST",
            body: formData,
            });

        const result = await response.json();
        console.log(result);
        return result;

        } catch (err) {
            console.error("Error:", err);
            setMessage("Subscription failed. Check your connection.");
        }
        };

        // const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKeBPw519fk6uUvLIzB7yODFwz0TXXv3r5bE9hLI6kuIH71g/formResponse";
        // const formData = new FormData();
        // formData.append("entry.1297518056", email);
        // formData.append("apiKey", apiKey);

    //     try {
    //         await fetch(formUrl, {
    //             method: "POST",
    //             mode: "no-cors",
    //             body: formData,
    //         });
    //         console.log("Email saved to Google Sheets");
    //     } catch (err) {
    //         console.error("Google Sheets Error:", err);
    //         throw new Error("Saving to sheet failed");
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        try {
            console.log(email);
            const res = await saveToGoogleSheet(email);

            if (res.status === "duplicate") {
            setMessage("You've already subscribed with this email.");
            } else if (res.status === "success") {
            setMessage("Subscription successful!");
            setEmail(""); // clear input
            } else {
            setMessage("Something went wrong. Try again.");
            }

            async function delaySubscribeMessage() {
                await sleep(1500);
                setMessage("");   
            }

            function sleep(milliseconds) {
                return new Promise(resolve => setTimeout(resolve, milliseconds));
            }

            delaySubscribeMessage();
        } catch (error) {
            setMessage("There was a problem with your subscription. Try again.");
        }
    };

    return (
        <div className="subscribe" id="subscribe" style={!isToggled ? dark : {}}>
            <p className="subscribeHead">
                Ready To Get <span style={!isToggled ? text : {}} className="textOne">Funded</span>?
            </p>
            <p className="subscribeText">
                Enter your email for early access. Our team {isMobile ? '' : <br />} will get in touch for personal branding.
            </p>

            <form className="form">
                <div className="inputContainer">
                    <input
                        type="email"
                        className={`emailInput ${!isToggled ? 'dark-placeholder' : ''}`}
                        id="emailInput"
                        placeholder="Enter email"
                        style={!isToggled ? mail : {}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Submit button="Subscribe" handleSubmit={handleSubmit} />
                    {message && <p className="mt-2 text-sm">{message}</p>}
                </div>
            </form>
        </div>
    );
}
