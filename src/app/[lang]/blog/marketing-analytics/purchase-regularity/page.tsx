
import random from 'random'
import { GammaChart } from "./GammaChart";

function drawGamma(shape: number, scale: number): number {
    if (shape < 1) {
        // Use a boost to handle shape < 1
        return drawGamma(shape + 1, scale) * Math.pow(Math.random(), 1 / shape);
    }

    // Marsaglia and Tsang's method
    const d = shape - 1 / 3;
    const c = 1 / Math.sqrt(9 * d);

    let x: number;
    let v: number;

    while (true) {
        do {
            x = normalSample();
            v = 1 + c * x;
        } while (v <= 0);

        v = v * v * v;
        const u = Math.random();

        if (u < 1 - 0.0331 * Math.pow(x, 4)) {
            return scale * d * v;
        }

        if (Math.log(u) < 0.5 * Math.pow(x, 2) + d * (1 - v + Math.log(v))) {
            return scale * d * v;
        }
    }
}

function normalSample(): number {
    // Box-Muller transform to sample from a standard normal distribution
    const u = Math.random();
    const v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function binData(data: number[], numBins: number): [number[], number[]] {

    // const min = Math.min(...data);
    const min = 0;
    const max = Math.max(...data);
    const binWidth = (max - min) / numBins;
    const bins: number[] = Array(numBins).fill(0);
    const binUpperBounds = Array(numBins).fill(0);

    for (let i = 0; i < numBins; i++) {
      binUpperBounds[i] = min + (i + 1) * binWidth;
    }

    for (const value of data) {
      const bin = Math.floor((value - min) / binWidth);
      bins[bin] += 1;
    }

    return [bins, binUpperBounds];

}

function drawGammaSamples(shape: number, scale: number, numSamples: number): number[] {
    const samples: number[] = [];
    for (let i = 0; i < numSamples; i++) {
      samples.push(drawGamma(shape, scale));
    }
    return samples;
}


function sampleCustomerTransactions(shape: number, scale: number, numSamples: number): number[] {
    const itt = drawGammaSamples(shape, scale, numSamples);

    const transactions: number[] = [];
    let total = 0;
    for (const value of itt) {
        total += value;
        transactions.push(total);
    }

    return transactions;
}

export default function Page() {
  
    const shape = 1;
    const scale = 1;
    const numSamples = 1000;
    const samples = drawGammaSamples(shape, scale, numSamples);
    const [bins, binUpperBounds] = binData(samples, 50);

    const chartData = bins.slice(0, bins.length-1).map((value, index) => {
        return {
            value: Math.round(binUpperBounds[index]*100)/100,
            count: value
        }
    })

    const transactions = sampleCustomerTransactions(shape, scale, numSamples);

    return (
    <article className="blog-container">
      <div className="blog">
        <h1>Purchase Regularity</h1>
        <p>
          This blog post looks at ways in which we can define different pattersn
          of purchase regularity. Purchase regularity is the frequency at which
          a customer makes a purchase. It is an important metric for businesses
          as it can help them understand how often their customers are buying
          their products or services. By understanding purchase regularity,
          businesses can better target their marketing efforts, improve customer
          retention, and increase sales. There are several different ways in
          which purchase regularity can be defined. In this blog post, we will
          look at some of the most common methods used to measure purchase
          regularity and discuss how businesses can use this information to
          improve their marketing strategies.
        </p>
        <GammaChart chartData={chartData} />
      </div>
    </article>
  );
}
