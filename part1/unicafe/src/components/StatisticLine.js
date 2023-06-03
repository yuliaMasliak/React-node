const StatisticLine = ({ name, result }) => {
  return (
    <tr>
      <td>{name}:</td>
      <td>{result}</td>
    </tr>
  );
};

export default StatisticLine;
