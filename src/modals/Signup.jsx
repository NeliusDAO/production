import { useState, useEffect } from "react"
import Popup from "./Popup.jsx"
import "./Popup.css"
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
    const [signUp, setSignUp] = useState(true);
    const [generateId, setGenerateId] = useState(false);
    const [generateKeyword,] = useState(false);
    const [createPassword, setCreatePassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [alert, setAlert] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const socialId = 232544553
    const passPhrase = ["monkey", "dove", "rat", "axis", "dinosaur", "rhythm", "horse", "wood", "fatigue", "row", "multiple", "care"];
    const keywords = "#2TF44553TY"
    const balance = 450

    useEffect(() => {
        setIsDisabled(createPassword || generateKeyword);
    }, [createPassword, generateKeyword]);

    useEffect(() => {
        setIsDisabled(password !== confirmPassword);
    }, [password, confirmPassword]);

    const handleEnablerButtonClick = () => {
        setIsButtonEnabled(true);
    };

    const handleCopyClick = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 1500);
    };

    return (
        <div className="modal-content">
            <Popup trigger={signUp}>
                <div className="signUpTrigger">
                    <p>
                        Are You Ready To Dive Into The SocialFi World??<br /> Then Sign Up Below
                    </p>
                    <button onClick={() => {
                        return (
                            setGenerateId(true),
                            setSignUp(false)
                        )
                    }} disabled={isDisabled} className="buttonComponentModal">Sign Up</button>
                    <p>
                        <Link to="/" className="loginLink">Back to Homepage</Link>
                    </p>
                    <p>Have an Account? <Link to="/login" className="loginLink">Sign In</Link></p>
                </div>
            </Popup>
            <Popup trigger={generateId}>
                <div className="popupOne">
                    <h3>Seed Phrase</h3>
                    <h4>Make Sure To Copy Your PassPhrase As It Would Be Needed To Retrieve Your Account</h4>
                    <div className="keywords">
                        <div className="keyword">
                            {passPhrase.map((words, index) => {
                                return (
                                    <div>
                                        <CopyToClipboard key={index} text={words}>
                                            <p className="words">{words}</p>
                                        </CopyToClipboard>
                                    </div>
                                )
                            })}
                        </div>
                        <CopyToClipboard text={passPhrase}>
                            <h3 onClick={() => {
                                return (
                                    handleCopyClick(),
                                    handleEnablerButtonClick()
                                )
                            }} style={{ display: "flex", justifyContent: "center" }} className="copy">Click To Copy</h3>
                        </CopyToClipboard>
                    </div>
                    {alert && <div className="alert">Copied PassPhrase To Clipboard</div>}
                    <div className="modalButtons">
                        <p>You would be unable to Generate ID unless you copy passphrase</p>
                        <button onClick={() => {
                            return (
                                setGenerateId(false),
                                setCreatePassword(true)
                            )
                        }} disabled={!isButtonEnabled} className="buttonComponentModal">Generate ID</button>
                    </div>
                </div>
            </Popup>
            <Popup trigger={createPassword}>
                <h3>Create Password</h3>
                <CopyToClipboard text={socialId}>
                    <h4 onClick={handleCopyClick} className="socialId">{socialId} <FontAwesomeIcon icon={faCopy} /></h4>
                </CopyToClipboard>

                {/* Conditionally render the alert */}
                {alert && <div className="alert">Copied Social Id To Clipboard</div>}
                <form>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="inputPass" />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} className="inputPass" />
                    {(password?.length < 5 || confirmPassword?.length < 5) && (
                        <p className="passError" style={{ color: "red" }}>
                            ⓘ Must be at least 5 characters!
                        </p>
                    )}

                    {(password?.length >= 5 && confirmPassword?.length >= 5) && (
                        <p className="passError" style={{ color: "green" }}>
                            ✅ Passwords are long enough!
                        </p>
                    )}

                    {(password === confirmPassword && password.length > 0) ? (
                        <p className="passError green">
                            ✅ Passwords match!
                        </p>
                    ) : (!password && !confirmPassword) ? (
                        <p className="passError red">
                            ⓘ Please enter and confirm your password.
                        </p>
                    ) : (
                        <p className="passError red">
                            ❌ Passwords do not match!
                        </p>
                    )}
                    <br />
                    <button onClick={() => {
                        return (
                            // setGenerateKeyword(true),
                            setCreatePassword(false)
                        )
                    }} disabled={isDisabled} className="buttonComponentModal"><Link to='/advert' style={{color : 'white',}}>Register</Link></button>
                </form>
            </Popup>
            <Popup trigger={generateKeyword}>
                <h3>Generate Keywords</h3>
                <div className="score">
                    <p>Nelius Balance / Publicity Score</p>
                    <h4>{balance}</h4>
                </div>
                <p>Keywords</p>
                <p className="socialId">{keywords}</p>
                {alert && <div className="alert">Copied Keywords To Clipboard</div>}
                <CopyToClipboard text={keywords}>
                    <button onClick={handleCopyClick} style={{cursor : 'grab'}} className="buttonComponent extra">Copy To Clipboard</button>
                </CopyToClipboard>
            </Popup>
        </div>
    )
};