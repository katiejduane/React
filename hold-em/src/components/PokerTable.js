import React, { Component } from 'react';
import Deck from '../utilityClasses/Deck';
import GameButtons from './GameButtons';
import PokerHand from './PokerHand';

class PokerTable extends React.Component{
    constructor(){
        super()
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        console.log(this.cards.deck)
        this.state = {
            playersHand: ['gray_back', 'gray_back'],
            dealersHand: ['gray_back', 'gray_back'],
            communityCards: ['gray_back', 'gray_back', 'gray_back', 'gray_back', 'gray_back'],
            wager: 0,
            bankroll: 10000
        }
        this.prepDeck = this.prepDeck.bind(this);
        this.playerBet = this.playerBet.bind(this);
    }

    // this is a custom method, it doesn't come from react.
    // we can't put this in our deck class because it's specific to the Hold 'Em game
    prepDeck(){
        this.cards.createDeck();
        this.cards.shuffleDeck();
        this.cards.deck.shift(); // burn card as required by hold 'em
        const card1 = this.cards.deck.shift();
        const card2 = this.cards.deck.shift();
        const card3 = this.cards.deck.shift();
        const card4 = this.cards.deck.shift();
        // deck is now 47 because we mutated it with shift
        this.setState({
                playersHand:[card1, card3],
                dealersHand: [card2, card4],
            })
    }

    // this method will be sent to GameBUttons and is used to update the playet bet.
    // After they bet, we will call draw.
    // because they will change, this needs to be stateful, as we'll need to re-render the dom
    playerBet(amount) {
        const newWager = this.state.wager + amount;
        const newBankRoll = this.state.bankroll - amount;
        this.setState({
            wager: newWager,
            bankroll: newBankRoll
        })
        this.draw();
    }

    draw(){
        // we have to use object.assign or (...) to make a separate copy of state
        let communityNewHand = Object.assign([], this.state.communityCards)
        // let communityNewHand = this.state.communityCards = BAD BAD BAD! You need to make a copy of state
        if(communityNewHand[0] == 'gray_back'){
            communityNewHand = [this.cards.deck.shift(), this.cards.deck.shift(), this.cards.deck.shift()]
        }else{
            communityNewHand.push(this.cards.deck.shift());
        }
        this.setState({
            communityCards: communityNewHand
        })
    }

    render(){
        return(
            <div className="col-sm-12 the-table">
            <div className="col-sm-12 text-center">
                Current wager: $ {this.state.wager }
                Current bankroll: $ {this.state.bankroll }
            </div>
                <PokerHand cards={this.state.dealersHand} />
                <PokerHand cards={this.state.communityCards} />
                <PokerHand cards={this.state.playersHand} />
                <GameButtons dealFunction={this.prepDeck} betFunction={this.playerBet} />
            </div>
        )// within GameButtons, we're passing a state-changing function (prepDeck) as a PROPerty
    }
}

export default PokerTable;