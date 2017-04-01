var React = require("react");
var Caroussel = require("./caroussel.jsx");
import {BarChart, Bar, Legend, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from "recharts";

class GaugesContainer extends React.Component{
    constructor (props){
        super(props);
    }

    render(){
        var data = [
            {name: "ether", value: 5}
        ];

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

                <ResponsiveContainer height={400} width="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#112233"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

module.exports = GaugesContainer;