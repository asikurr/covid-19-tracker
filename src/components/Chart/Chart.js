import React,{useState, useEffect} from 'react';
import './chart-style.css'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'


const Chart = () => {
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        const apiDailyData = async () => {
            const fetchDaily = await fetchDailyData();
            setDailyData(fetchDaily);
        }
        apiDailyData();

        // console.log(dailyData)

    }, [])

    const lineChart = (
        dailyData.length ? 
        (<Line
            data={{
                labels:dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    backgroundColor: 'rgba(0,0,55,.5)',
                    fill: true,
                },{
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }],
            }}

        />) : null
    );
    return (
        <div className="chart-container">
           {lineChart}
        </div>
    );
};

export default Chart;