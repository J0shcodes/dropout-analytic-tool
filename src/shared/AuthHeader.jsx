import { Link } from "react-router-dom";
import classes from './AuthHeader.module.css'

const AuthHeader = () => {
    return (
        <header className={classes.navbar}>
            {/* <Link to="/login" className={classes.login}>Log in</Link> */}
            <Link to="/student_signup" className={classes.signup}>Student Sign up</Link>
            <Link to="/teacher_signup" className={classes.signup}>Teacher Sign up</Link>
        </header>
    )
}

export default AuthHeader;