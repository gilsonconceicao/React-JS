const Challange = () => {
    const a = 10; 
    const b = 30; 
    const hundleSumNumbers = () => {
        console.log(a + b)
    }
    return (
        <div>
            <h1>Chellange</h1>
            <p>NumberOne: {a}</p>
            <p>NumberTwo: {b}</p>
            <button onClick={hundleSumNumbers}>Somar valores</button>
        </div>
    )
}

export default Challange; 