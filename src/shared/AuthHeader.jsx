import { Link } from "react-router-dom";
import classes from './AuthHeader.module.css'

const AuthHeader = () => {
    return (
        <header className={classes.navbar}>
            <Link to="/login" className={classes.login}>Log in</Link>
            <Link to="/welcome" className={classes.signup}>Sign up</Link>
        </header>
    )
}

export default AuthHeader;