// import About from "../components/About";
import Blueprint from "../components/Blueprint";
import Faq from "../components/Faq";
import Info from "../components/Info";
import SectionOne from "../components/sections/SectionOne";
import Subscribe from "../components/sections/Subscribe";
import Whitepaper from "../components/Whitepaper";
import Community from "../components/Community";

export default function EventOwners() {
    return (
        <div>
            <SectionOne />
            {/* <About /> */}
            <Blueprint />
            <Whitepaper />
            <Info />
            <Subscribe />
            <Community />
            <Faq />
        </div>
    )
};
