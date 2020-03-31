import React from 'react';

function Chart() {
    
    return (
        <img className="Chart" src='https://quickchart.io/chart?width=290&height=290&c=
                {type:"bar",
                data: {
                labels:["DO","BS","JM","PR"],
                datasets: [{
                    label:"No. of Endangered Species",
                    backgroundColor: "%2379a67c",
                    data:[2244,2229,2405,2261]
                    }]
                },
                
                options: {
                    legend: {
                        position: "bottom"
                    }, 
                    plugins: {
                        datalabels: {
                            display: true,
                            color: "white",
                        }
                    }
                }
                
            }'/>
    )
}


export default Chart;