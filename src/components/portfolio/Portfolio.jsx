import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  customerAnalyticsPortfolio,
  marketingPortfolio,
  reinforcementLearningPortfolio,
  operationsPortfolio
} from "../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "marketing",
      title: "Marketing Analytics"
    },
    {
      id: "ca",
      title: "Customer Analytics",
    },
    {
      id: "rf",
      title: "Reinforcement Learning",
    },
    {
      id: "operations",
      title: "Operations",
    },
    // {
    //   id: "db",
    //   title: "Dashboards",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "marketing":
        setData(marketingPortfolio);
        break;
      case "ca":
        setData(customerAnalyticsPortfolio);
        break;
      case "rf":
        setData(reinforcementLearningPortfolio)
        break;
      case "operations":
        setData(operationsPortfolio)
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Business Problems</h1>
      <p>
        You have data but don't know what could be done with it?
        Get inspired by the following scenarios and see how they fit your specific business context
      </p>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            
            <h3>{d.title}</h3>
            <p>{d.desc}</p>

            
          </div>
        ))}
      </div>
      <div>
        <p>Like This website? <a href="#contact">Get One. </a></p>
        
      </div>
    </div>
  );
}