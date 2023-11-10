import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  customerAnalyticsPortfolio,
  marketingPortfolio,
  reinforcementLearningPortfolio,
  operationsPortfolio,
  scientificPortfolio,
  documentIntelligencePortfolio
} from "../data";

// import AnalyticsIcon from '@mui/icons-material/Analytics';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [description, setDescription] = useState("Most interesting scenarios");
  const list = [
    {
      id: "featured",
      title: "Featured",
      description: "Most interesting scenarios"
    },
    {
      id: "marketing",
      title: "Marketing Analytics",
      description: "Marketing analytics helps you track and analyze data from marketing efforts to evaluate the effectiveness and success of marketing activities."
    },
    {
      id: "ca",
      title: "Customer Analytics",
      description: "Customer analytics is a process by which data from customer behavior is used to help make key business decisions via market segmentation and predictive analytics. This information is used by businesses for direct marketing, site selection, and customer relationship management."
    },
    {
      id: "rf",
      title: "Reinforcement Learning",
      description: "Most interesting scenarios2"
    },
    {
      id: "operations",
      title: "Operations",
      description: "Most interesting scenarios3"
    },
    {
      id: "scientific",
      title: "Scientific",
      description: "Most interesting scenarios3"
    },
    {
      id: "document",
      title: "Document Intelligence",
      description: "Most interesting scenarios4"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        setDescription(list[0].description)
        break;
      case "marketing":
        setData(marketingPortfolio);
        setDescription(list[1].description)
        break;
      case "ca":
        setData(customerAnalyticsPortfolio);
        setDescription(list[2].description)
        break;
      case "rf":
        setData(reinforcementLearningPortfolio)
        break;
      case "operations":
        setData(operationsPortfolio)
        break;
      case "scientific":
        setData(scientificPortfolio)
        break;
      case "document":
        setData(documentIntelligencePortfolio)
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Business Solutions</h1>
      <p>
        You have data but don't know what could be done with it?
        Get inspired by the following scenarios and see how they fit your specific business context.
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
      <div className="description">{description}</div>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <h3>{d.title} </h3>
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