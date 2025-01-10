import HowToGet from "../components/HowToGet";
import { useContext } from "react"
import { ToggleContext } from "../components/ToggleContext";
// import Soon from "../components/Soon";

export default function TokenHolders() {
    const { isToggled } = useContext(ToggleContext);

    const dark = {
        backgroundColor : 'black',
        color : 'white'
    }

    return (
        <div className="getting" id="getting" style={!isToggled ? dark : {}}>
            <HowToGet />
            {/* <Soon /> */}
        </div>
    )
};
