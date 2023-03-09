import React, {useState} from "react";

const Hover = ({handleMouseOver, handleMouseOut}, props) => {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <span>more info</span>
      </div>
    );
};

const HoverContainer = (props) => {
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseOver = () => {setIsHovering(true)}
    const handleMouseOut = () => {setIsHovering(false)}
    return (
        <div>
            <Hover handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut}>kill</Hover>
            {isHovering && props.display}
        </div>
    )
}

export {HoverContainer}
