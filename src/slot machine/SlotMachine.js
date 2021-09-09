import React from 'react'


const Matching = ({x,y,z})=>{
    return(
        <>
            <h1>{x} {y} {z}</h1>
            <h2>this is matching</h2>
            <hr/>
        </>
        )
}


const NotMatching = ({x,y,z})=>{
    return(
        <>
            <h1>{x} {y} {z}</h1>
            <h2>this is not matching </h2>
            <hr />
        </>
    )
}

const Items =(props)=>{
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    // let x = 1;
    // let y = 1;
    // let z = 1;
   
       
            // if((x===y )&& (y===z)){
            //     return(
            //         <>
            //             <h1>{x} {y} {z}</h1>
            //             <h2>this is matching</h2>
            //             <hr/>
            //         </>
            //     )
            // }else{
            //     return(
            //         <>
            //             <h1>{x} {y} {z}</h1>
            //             <h2>this is not matching </h2>
            //             <hr />
            //         </>
            //     )
            // }

       return ((props.x===props.y) && (props.y===props.z))? 
       <Matching x={props.x} y={props.y} z={props.z}/> : <NotMatching x={props.x} y={props.y} z={props.z} />       
}


const SlotMachine = ()=>{
    return(
        <> 
            <h1>SLOT MACHINE</h1>
            <Items x = '1' y = '1' z = '1' />
            <Items x = '1' y = '0' z = '1' />
        </>
    )
}

export default SlotMachine


