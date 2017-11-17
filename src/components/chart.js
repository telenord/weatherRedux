import React  from 'react';
import {Sparklines , SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average( arr) {
    console.log(arr);
    return Math.round(arr.reduce((a,b)=>a+b)/arr.length);
}

export default(props)=>{
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}