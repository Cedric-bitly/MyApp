// Create a Fourthcomponent.jsx, have two variables i.e weight and height and bind them on the user interface. Then render the component on App.js

const Fourthcomponent =() => {
    let weight = "70kgs"
    let height = "1.83m"
    return(
        <div className="Fourthcomponent">
            <h1>Welcome to my fourth component</h1>
            <h5>The weight is {weight}</h5>
            <h5>The height is {height}</h5>
        </div>
    )
}

export default Fourthcomponent;