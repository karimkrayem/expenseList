import Chartbar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return < div className="chart" >
        {props.dataPoints.map(dataPoints => <Chartbar key={dataPoints.id} value={dataPoints.value} maxValue={totalMaximum} label={dataPoints.label} />)}

    </div >
};

export default Chart