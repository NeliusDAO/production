import { ToggleContext } from './ToggleContext';
import { useContext } from 'react';

export default function About() {
    const { isToggled } = useContext(ToggleContext);

    const dark = {
        // backgroundColor: '#0c0c3f',
        backgroundColor: '#010101',
        color: 'white'
    }

        return (
            <main style={!isToggled ? dark : {}} className="about" id="about">
                <h3 className="aboutHead">About <span className="textOne">Nelius</span></h3>
                <p id='p'>Hosting events often requires financing and publicity. Nelius is a DAO aiming to facilitate funding and efficient publicity of programs and events.</p>
            </main>
        )
    };
