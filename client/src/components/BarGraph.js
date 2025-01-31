import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts'

const BarGraph = ({ timeOption }) => {
  let data = null
  let xAxisName = null
  if (timeOption === 'D') {
    data = [
      { name: 'Monday', value: 10, pay: 10 },
      { name: 'Tuesday', value: 20, pay: 10 },
      { name: 'Wednesday', value: 15, pay: 10 },
      { name: 'Thursday', value: 25, pay: 10 },
      { name: 'Friday', value: 30, pay: 10 }
    ]
    xAxisName = 'Day'
  } else if (timeOption === 'M') {
    data = [{ name: 'Jan', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Feb', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Mar', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Apr', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'May', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Jun', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Jul', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Aug', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Sep', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Oct', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Nov', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) },
      { name: 'Dec', value: (170 * Math.random()).toFixed(2), pay: ((170 * Math.random()) * 22.5).toFixed(2) }
    ]
    xAxisName = 'Month'
  } else if (timeOption === 'Y') {
    data = [
      { name: '2020', value: (2000 * Math.random()).toFixed(2), pay: ((2000 * Math.random()) * 22.5).toFixed(2) },
      { name: '2021', value: (2000 * Math.random()).toFixed(2), pay: ((2000 * Math.random()) * 22.5).toFixed(2) },
      { name: '2022', value: (2000 * Math.random()).toFixed(2), pay: ((2000 * Math.random()) * 22.5).toFixed(2) },
      { name: '2023', value: (2000 * Math.random()).toFixed(2), pay: ((2000 * Math.random()) * 22.5).toFixed(2) }
    ]
    xAxisName = 'Year'
  }

  function CustomTooltip ({ active, payload, label }) {
    if (active && payload && payload.length) {
      const tooltipData = payload[0].payload
      return (
        <div className='custom-tooltip'>
          <p className='label'>{`${label} : $${tooltipData.pay}`}</p>
        </div>
      )
    }

    return null
  }

  return <BarChart
              width={1200}
              height={300}
              data={data}
              margin={{ top: 15, right: 30, left: 30, bottom: 20 }}
              >
            <XAxis dataKey='name' label={{ value: xAxisName, position: 'insideBottom', dy: 10 }} />
            <YAxis label={{ value: 'Hours Worked', angle: -90, position: 'insideLeft', dy: 50 }}/>
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip content={<CustomTooltip />}/>
            <Bar dataKey='value' fill='#808080' />
            <ReferenceLine fill='#808080' />
      </BarChart>
}

export default BarGraph
