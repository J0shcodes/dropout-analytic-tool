import { Link } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = props => {
    return (
        <header className={classes.navbar}>
            <ul>
                {/* <li><Link to='status' className={classes.link}>Status History</Link></li> */}
                <li><Link to='' className={classes.link} onClick={props.onShow}>Who to talk to</Link></li>
                {/* <li><Link to='contact' className={classes.link}>Contact</Link></li> */}
            </ul>
        </header>
    )
}

export default MainHeader;