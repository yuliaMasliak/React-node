import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine
            name={'good'}
            result={good}
          />
          <StatisticLine
            name={'neutral'}
            result={neutral}
          />
          <StatisticLine
            name={'bad'}
            result={bad}
          />
          <StatisticLine
            name={'all'}
            result={all}
          />
          <StatisticLine
            name={'average'}
            result={average}
          />
          <StatisticLine
            name={'positive'}
            result={positive}
          />
        </tbody>
      </table>
    );
  } else {
    return <div>No feedbacks yet</div>;
  }
};

export default Statistics;
