function Card(props)
{
    return (
        <>
            <div className="chuha-container">
                <div className="image">
                    <img src={props.link} alt="chuha"/>
                </div>
                <div>
                    <h2 className="App">{props.name}</h2>
                    <h3 className="App">{props.description}</h3>
                </div>
            </div>
        </>
    );
}

export default Card;