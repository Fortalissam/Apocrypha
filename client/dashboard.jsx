import React from "react"

class Dashboard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Apocrypha</h1>
                <p>
                    Welcome to Apocrypha! This is a work in progress.
                </p>
            </div>
        )
    }
}

module.exports = Dashboard;