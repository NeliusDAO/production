import { HashLink as Link } from "react-router-hash-link";
import Button from "../../assets/Button";
import { useContext } from "react";
import { ToggleContext } from '../ToggleContext';
// import CarouselPage from "../Carousel";
import LargeImages from "../LargeImages";

export default function SectionOne() {
    const { isToggled } = useContext(ToggleContext);

    const background = {
        backgroundColor: '#010101',
        color: 'white'
    }

// #02AFF3
    const text = {
        color: 'white',
        background: 'linear-gradient(-45deg, #FEFEFE, #02AFF3, #02AFF3, #FEFEFE, #FEFEFE)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };


    return (
        <div style={!isToggled ? background : {}}>
            <div className="sectionOne" id="sectionOne">
                <div className="circleBackground"></div>
                <div className="sectionOneFrame">
                    <div className="sectionOneHeadText">
                        <p className="headText">More <span style={!isToggled ? text : {}} className="textOne">Publicity</span>, More <span style={!isToggled ? text : {}} className="textOne">Funding</span></p>
                        <p className="headText">With <span className="textOne">Nelius</span></p>
                    </div>
                    <div className="sectionOneParagraph">
                        <p className="headParagraph">With Nelius, events can get effective publicity and funding.</p>
                    </div>
                    <div className="sectionOneButton">
                        <Link to="#subscribe" smooth><Button button='Get Started' /></Link>
                    </div>
                </div>
            </div>
            {/* <CarouselPage /> */}
            <LargeImages />
        </div>

    )
};
