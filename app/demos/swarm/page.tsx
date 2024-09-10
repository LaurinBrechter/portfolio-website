"use client"

import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });



function himmelblau(y: number, x: number) {
    return (x ** 2.0 + y - 11) ** 2 + (x + y ** 2 - 7) ** 2
}


function x_y_grid() {
    let x = []
    let y = []
    for (let i = -5; i < 5; i += 0.1) {
        x.push(i)
        y.push(i)
    }
    return [x, y]
}



export default function SWARM() {

    let [x, y] = x_y_grid()

    let z = []
    for (let i = 0; i < x.length; i++) {
        let row = []
        for (let j = 0; j < y.length; j++) {
            row.push(himmelblau(x[i], y[j]))
        }
        z.push(row)
    }


    let x_start = Math.random()
    let y_start = Math.random()
    let z_start = himmelblau(y_start * 10 - 5, x_start * 10 - 5)


    return (
        <div className='flex justify-center'>
            <Plot
                data={[
                    {
                        z: z,
                        type: 'surface',
                        // mode: 'lines+markers',
                        // marker: { color: 'red' },
                    },
                    {
                        x: [x_start * 100],
                        y: [y_start * 100],
                        z: [z_start],
                        type: 'scatter3d',
                        mode: 'markers',
                        marker: { color: 'red' },
                    }

                    // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                ]
                }
                layout={{ width: 700, height: 700, "yaxis.title": "Y", "xaxis.title": "X" }}
            />
        </div>
    )

}