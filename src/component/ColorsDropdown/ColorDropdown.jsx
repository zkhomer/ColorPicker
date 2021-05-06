import React from "react"
import "./ColorDropdown.scss"
import PropTypes from "prop-types";

export const ColorDropdown = ({colors, dropToggle, colorHandler,dropToggleHandler}) => {
    return (
        <>
            <div className="colorDropdownList" style={dropToggle ? {display: "flex"} : {display: "none"}}>
                {
                    colors.map((color, index) => (
                        <div key={color + index} className="list_item" onClick={() => {
                            colorHandler(color.value)
                            dropToggleHandler()
                        }}>
                            <span className="list_item__text">{color.name}</span>
                            <div className="list_item__square" style={{backgroundColor: color.value}}/>
                        </div>
                    ))
                }
            </div>
        </>

    )
}

ColorDropdown.propTypes = {
    colorHandler: PropTypes.func.isRequired,
    dropToggle: PropTypes.bool.isRequired,
    colors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })).isRequired
};