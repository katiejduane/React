// EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT (can have multiple inside it tho)
function Card(props) {
    const name = "Bart Simpson"
    const course = props.data.course;
    const instructor = props.data.instructor;
    const image = props.data.image;
    const saleOn = false;
    return (
            <div className="col s3">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src={image} />
                    </div>
                    <div className="card-content">
                        <p>{course}</p>
                        <p>{instructor}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">${saleOn ? 9.99 : 1099.99}</a>
                    </div>
                </div>
            </div>
    )
}

