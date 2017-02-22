var React = require("react");
var Caroussel = require("./caroussel.jsx");

class GaugesContainer extends React.Component{
    constructor (props){
        super(props);
    }

    render(){
        return (
            <div className="">
                <h1>Some content</h1>
                <Caroussel/>
                <button className="pt-button" onClick={function()
                {
                    fetch("./api/secure",{credentials: 'include'})
                        .then(function(response){
                                if (response.status >= 200 && response.status < 300){
                                    return response.json();
                                }
                                else{
                                    alert("failure")
                                }
                            })
                        .then(function(json){
                            alert(json.message);
                        })
                }}>Test</button>
            </div>
        )
    }
}

module.exports = GaugesContainer;