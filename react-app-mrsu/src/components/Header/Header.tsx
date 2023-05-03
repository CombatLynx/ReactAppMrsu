import React, {FC} from "react";
import classes from "./Header.module.css";

const Header: FC = () => {
    return (
        <div className={classes.header}>
            <h1>Header</h1>
        </div>
    );
}

export default Header;