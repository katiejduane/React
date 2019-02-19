import React from 'react';

function BoilingVerdict(props){
    if(props.temperature >= 100){
        return (
            <h1>BOILING!</h1>
        )
    } else{
        return(
            <h1>tepid...</h1>
        )
    }

}

export default BoilingVerdict;