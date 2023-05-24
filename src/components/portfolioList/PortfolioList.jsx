import "./portfolioList.scss";

export default function PortfolioList({ id, title, desc, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
      {/* <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/null/external-Monitoring-business-management-nawicon-detailed-outline-nawicon.png" height="40px"/> */}
    </li>
  );
}