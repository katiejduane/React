function Header(props) {
    return (
        <div className="header">
        <h1>{props.title}</h1>
        </div>
    )
}

function Counter(props) {
    return (
    <div className="counter">
        <button className="minus waves-effect waves-light btn">-</button>
        <div className="player-score">0</div>
        <button className="plus waves-effect waves-light btn">+</button>
    </div>
    )
}

function Player(props) {
    return (
        <div className="player">
            <div className="player-name">{props.name}</div>
            <Counter />
        </div>
    )
}


// Application is Proper case, which means it's a Component! 
// It needs to be Proper case, because that's what React looks for
// when looking for components. ALL COMPONENTS MUST RESTURN A 
// SINGLE DOM ELEMENT!
function Application(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s6 s3-offset board">
                <Header title={props.title}/>
                    <div className="players">
                        <Player name="Michael"/>
                        <Player name="Shiva"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(
    <Application title="Pong Bot Returns"/>,
    document.getElementById('root')
);

/*
  __      _
o'')}____//
 `_/      )
 (_(_/-(_/

    */