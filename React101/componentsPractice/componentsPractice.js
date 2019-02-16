var data = [
    {
        author: {
            avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
            name: "neo"
        },
        commentHeading: "I am the One.",
        text: "Humanity, relax. I will save you.",
        date: "Today",
        userBadge: [
            'Superman',
            'Herald',
            'Engineer'
        ]
    },
    {
        author: {
            avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
            name: "Morpheus"
        },
        commentHeading: "There is no spoon.",
        text: "Don't htink you are. KNow you are.",
        date: "Two days ago",
        userBadge: [
            'The man',
            'Bard',
            'Samurai swordsman'
        ]
    }
]

//User info
class UserInfo extends React.Component{
    constructor(props) {
        super(props)

    }
    render(){
        return (
            <div className="UserInfo">
                <Avatar author={data[0]}/>
                <div className="UserInfo-name">
                    {this.props.author.name}
                </div>
            </div>
        )

    }
}


//Avatar
class Avatar extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        <img className="Avatar"
            src={this.props.avatarUrl}
            alt={this.props.author.name}
        />
    }
}


//Comment Body
class CommentBody extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        <div className="Comment-body">
            <h1>{this.props.commentHeading}</h1>
            <div className="Comment-text">{this.props.text}</div>
            <div className="Comment-date">
                {formatDate(this.props.date)}
            </div>
        </div>

    }
}

//Badges
class Badge extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
            <div className="badge">{this.props.userBadge[0]}</div>

    }
}


function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo />
            <Comment />
            <Badge />
        </div>
    );
}