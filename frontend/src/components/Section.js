import './Section.css';
import { useState, useEffect } from 'react';

const Section = (props) => {
    const [count, setCount] = useState({});

    useEffect(() => {
        if (props.imgCount) {
            setCount(props.imgCount);
        }
    }, []);

    const mapRadioButtons = () => {
        let i = 0;
        let radios = [];
        while (i < count) {
            radios.push(<input id={i} key={i} onChange={(e) => props.handleBannerRadioClick(e)} type="radio" />);
            i++;
        }
        return (radios);
    }
    return ( 
      <div id={ props.id } style={{ backgroundImage: `url(${props.img})` }} className={ props.className }> 
        {mapRadioButtons()}  
      </div>
    );
}

export default Section;