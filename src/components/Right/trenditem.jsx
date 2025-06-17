export const TrendItem = ({ category, name, count }) => {
  return (
    <div className="trendblock">
      <p className="category">{category}</p>
      <p className="name">{name}</p>
      <p className="count">{count}</p>
    </div>
  );
};
