// import { useState } from "react";

import { Link } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {
    // const [show, setShow] = useState(false);
    return (
        <header className={classes.navbar}>
            <ul>
                <li><Link to='status' className={classes.link}>Status History</Link></li>
                <li><Link to='' className={classes.link}>Who to talk to</Link></li>
                <li><Link to='contact' className={classes.link}>Contact</Link></li>
            </ul>
        </header>
    )
}

export default MainHeader;