import React, {useEffect, useState} from "react"
import "./rangeColorsDropdown.scss"
import PropTypes from "prop-types";

export const RangeColorsDropdown = ({rangeDropToggle,colorHandler,cancelHandler,rangeDropToggleHandler})=>{

const [rgb,setrgb]=useState({
    r:0,
    g:0,
    b:0
})
    useEffect(()=>{
        colorHandler("#"+rgbToHex(rgb.r,rgb.g,rgb.b))
    }, [rgb])

    const rgbToHex = (r, g, b)=> {
        function hex(collor) {
            if (collor > 255) return "FF";
            else if (collor < 0) return "00";
            else
                return collor.toString(16).padStart(2, "0").toUpperCase();
        }
        return hex(r) + hex(g) + hex(b);
    }

    return(
        <>
            <div className="rangeColorDrop__list" style={ rangeDropToggle? {display:"flex"}:{display: "none"}} >
                <div>
                    <span className="rangeColorDrop__list-itemText ">R</span>
                    <input
                        className="rangeColorDrop__list-itemInput input-red"
                        type="range"
                        min={0}
                        max={255}
                        onChange={event => setrgb({...rgb,r:Number(event.target.value)})}
                    />

                </div>
                <div>
                    <span className="rangeColorDrop__list-itemText ">G</span>
                    <input
                        className="rangeColorDrop__list-itemInput input-green"
                        type="range"
                        min={0}
                        max={255}
                        onChange={event => setrgb({...rgb,g:Number(event.target.value)})}
                    />

                </div>
                <div>
                    <span className="rangeColorDrop__list-itemText ">B</span>
                    <input
                        className="rangeColorDrop__list-itemInput input-blue"
                        type="range"
                        min={0}
                        max={255}
                        onChange={event => setrgb({...rgb,b:Number(event.target.value)})}
                    />

                </div>
                <div>
                    <button className="btn__cancel" onClick={cancelHandler}>Cancel</button>
                    <button className="btn__ok" onClick={rangeDropToggleHandler}>OK</button>
                </div>
            </div>
        </>
    )
}

RangeColorsDropdown.propTypes = {
    rangeDropToggle: PropTypes.bool.isRequired,
    colorHandler: PropTypes.func.isRequired,
    cancelHandler: PropTypes.func.isRequired,
    rangeDropToggleHandler: PropTypes.func.isRequired
};