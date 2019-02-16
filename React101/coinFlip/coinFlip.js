class CoinFlip extends React.Component{
    // the first thing we do in ANY CLASS is run constructor
    constructor(props){
        // this is a child class. it's the child of React.Component
        // in order to get the cool stuff from React.Component, we need super...
        super(props)
        // React doesn't care about heads or tails, like, at all
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        // State is SPECIAL. React care about state. A LOT.
        this.state = {
            image: this.coin[0]
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin(){
        // WE NEVER NEVER EVER CHANGE/MUTATE STATE DIRECTLY. this is React's job.
        // React gave us a setter to do this
        let coinSide = Math.round(Math.random());
        this.setState({
            image: this.coin[coinSide]
        })
        // NEVER DO THIS (you'll get DQed from any React job):
        // this.state.image = this.coin[coinSide]
    }
    
    // local class method
    // EVERY, EVERY class component, MUST HAVE A RENDER. if not, app breaks.
    render(){
        // ANY TIME STATE CHANGES, render() method runs!
        // it is my job to return a single DOM element
        // whether you like it or not, render will run AFTER the constructor, period.
        // React events are camelCase and attached to the element
        // You don't invoke them, you just pass them
        return(
            <div className="coin-flip">
                <button onClick={this.flipCoin}>Flop</button>
                <img src={this.state.image} />
            </div>
        )
    }

}