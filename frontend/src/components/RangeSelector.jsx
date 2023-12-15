import React, {useEffect, useState} from "react";
import {Slider} from "@mui/material";


const RangeSelector = ({min, max, onRangeChange}) => {

    const [minPrice, setMinPrice] = useState(min);
    const [maxPrice, setMaxPrice] = useState(max);


    useEffect(() => {
        const values = [minPrice, maxPrice];
        onRangeChange(values);

    }, [minPrice, maxPrice]);


    return (
        <React.Fragment>
            <Slider
                value={[minPrice, maxPrice]}
                min={min}
                max={max}
                onChange={(e) => {
                    setMinPrice(e.target.value[0]);
                    setMaxPrice(e.target.value[1]);
                }}
            />
        </React.Fragment>
    );
};

RangeSelector.defaultProps = {
    min: 0,
    max: 100,
};

export default RangeSelector;