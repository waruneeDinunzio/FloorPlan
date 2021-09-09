import React, { useState } from 'react';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

const FloorPlan = () => {
    //const [size, setBath] = useState('half')
    const size = 'Half'
    //const [bedNum, setBedNum] = useState(1)
    const bedNum = 1

    return (
        <div>
        <Kitchen />
        <LivingRoom />
        <Bedroom bedNum={bedNum}/>
        <Bath size={size}/>
           
        </div>
    );
};

export default FloorPlan;