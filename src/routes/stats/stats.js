import styles from './stats.module.scss';
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer, Label, CartesianGrid, Tooltip, BarChart, Bar, Legend } from 'recharts';

function Stats(props) {

    const linedata = props.data.map(item => ({ date: new Date(item.trainDate).getTime(), kilos: item.kilos}));

    const reducer = (groupedData, item) => {
        const index = groupedData.findIndex( arrayItem => arrayItem.type === item.type );
        if (index >= 0) {
            groupedData[index].kilos = groupedData[index].kilos + item.kilos;
        } else {
            groupedData.push({type: item.type, kilos: item.kilos});
        }
        return groupedData;
    }

    const bardata = props.data.reduce(reducer,[]);
        
    return (
        <div className={styles.stats}>
            <h2>Treenit aikajanalla</h2>
            
            <ResponsiveContainer width={"100%"} height={250}>
            <AreaChart data={linedata} margin={{ top:20, left: 20, right: 20, bottom: 10 }} >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis  type="number"
                        dataKey="date"
                        domain={["dataMin","dataMax"]} 
                        scale="time" 
                        tickFormatter={timeStr => new Date(timeStr).toLocaleDateString("fi-FI")}
                />
                <YAxis>
                    <Label value="Kilot"
                            position="left"
                            angle={-90}
                            style={{ textAnchor: "middle"}} />
                </YAxis>        
                <Area dataKey="kilos" name="kilot" unit="kg" fill="#FFFF33" stroke="#000000"/>
                <Tooltip labelFormatter={value => new Date(value).toLocaleDateString("fi-FI")}/>
            </AreaChart>
            </ResponsiveContainer>

            <h3>Painot liikkeittäin</h3> 
                
             <ResponsiveContainer width={"100%"} height={250}>
                <BarChart
                    width={300}
                    height={300}
                    data={bardata}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 10,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="type"/>
                    <YAxis 
                        type="number"
                        dataKey="kilos"
                        scale="linear"
                        />
                        <Tooltip />
                    <Legend />
                    <Bar dataKey="kilos" name="Liikkeet" fill="#98FB98" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default Stats;