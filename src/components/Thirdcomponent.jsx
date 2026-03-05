const Thirdcomponent = () =>{
    // Variables enables us to create dynamic websites. (It means the contents of the website will be changing over time.)
    // Below we declare some varibles. Note: variables are usually declared just before the return statement in Reactjs.
    let name =  "Cedric"
    let age = 17;
    let message = "I am an ethical hacker. "

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            {/* Below we bind our variables. We use the variable names that we declared above. */}
            <h5>My name is {name}</h5>
            <h5>My age is {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}

export default Thirdcomponent;