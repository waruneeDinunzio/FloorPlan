import React, { useState } from 'react';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

const FloorPlan = () => {
    const size = (size) => {
        return size
    }
    //const [bedNum, setBedNum] = useState(1)
    const bedNum = (num) => {
        return num
    }

    return (
        <div>
        <LivingRoom />
        <Bedroom bedNum={bedNum(1)}/>
        <Bath size={size("Full")}/>
        <Kitchen />
        <Bedroom bedNum={bedNum(2)}/>
        <Bath size={size("Half")}/>
           
        </div>
    );
};

export default FloorPlan;