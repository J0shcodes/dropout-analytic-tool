import { useState } from "react";
import MainHeader from "./MainHeader";
import AuthHeader from "./AuthHeader";
import classes from './Layout.module.css'


const Layout = props => {
    // const [loggedIn, setLoggedIn] = useState(false);

    return (      
        <div className={classes.layout}>
            {/* {loggedIn ? <MainHeader/> : <AuthHeader/>} */}
            <main>{props.children}</main>
        </div>   
    )
}

export default Layout;