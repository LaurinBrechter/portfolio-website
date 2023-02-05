import "./portfolioList.scss";

export default function PortfolioList({ id, title, desc, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}