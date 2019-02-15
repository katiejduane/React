import React from 'react';
import Card from './Card';

function PokerHand(props) {
    // a poker hand is made up of... cards!
    let hand = props.cards.map((card, i) => {
        return <Card card={card} key={i}/>
    })
    return(
        <div className="col-sm-12">
            {hand}
        </div>
    )
}

export default PokerHand;