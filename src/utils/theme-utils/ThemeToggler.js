import React from 'react'
import "./themeToggler.scss";
import { THEME } from "../../constants/appConstants";

/**
 * 
 * @param {*} theme  the default user prefered theme.This value is stored in local storage
 */
const ThemeToggler = ({theme,  toggleTheme }) => {
    const isChecked = theme === THEME.DARK;
    return (
            <div className="toggle checkcross">            
                <span>Prefer LightTheme?</span>
            
            <input id="checkcross" type="checkbox" aria-label={`Current theme ${theme}`} onClick={toggleTheme} defaultChecked={isChecked}/>
                <label className="toggle-item" htmlFor="checkcross">
                    <div className="check"></div>
                </label>
            </div>
    )
}

export default ThemeToggler
