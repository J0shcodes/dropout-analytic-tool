import { Link } from "react-router-dom";
import classes from './AuthHeader.module.css'

const AuthHeader = () => {
    return (
        <header className={classes.navbar}>
            <Link to="/teacher_login" className={classes.login}>Teacher Log in</Link>
            <Link to="/student_login" className={classes.login}>Student Log in</Link>
            <Link to="/" className={classes.signup}>Sign up</Link>
        </header>
    )
}

export default AuthHeader;