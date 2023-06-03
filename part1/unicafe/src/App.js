import './App.css';
import Button from './components/Button';
import Statistics from './components/Statistics';
import { useState } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const goodHandler = () => {
    const actual = good + 1;
    const allFedbacks = actual + bad + neutral;
    setPositive((actual / allFedbacks) * 100);
    setGood(good + 1);
    setAll(allFedbacks);
    setAverage((actual * 1 + bad * -1 + neutral * 0) / allFedbacks);
  };
  const neutralHandler = () => {
    const actual = neutral + 1;
    const allFedbacks = actual + bad + good;
    setPositive((good / allFedbacks) * 100);
    setNeutral(neutral + 1);
    setAll(good + bad + actual);
    setAverage((actual * 1 + bad * -1 + neutral * 0) / allFedbacks);
  };
  const badHandler = () => {
    const actual = bad + 1;
    const allFedbacks = actual + neutral + good;
    setPositive((good / allFedbacks) * 100);
    setBad(bad + 1);
    setAll(good + actual + neutral);
    setAverage((actual * 1 + bad * -1 + neutral * 0) / allFedbacks);
  };

  const anecdoteHandler = () => {
    const random = Math.floor(Math.random() * 8);
    setSelected(random);
  };

  const voteHandler = () => {
    const array = [...votes];
    array[selected] += 1;
    setVotes(array);
  };

  return (
    <div className="App">
      <h2>Anecdote of the Day</h2>
      <div id="anecdote">{anecdotes[selected]}</div>
      <Button
        text="vote"
        handler={voteHandler}
      />
      <Button
        text="next anecdote"
        handler={anecdoteHandler}
      />
      <h2>Anecdote with most votes</h2>
      <div id="best-anecdote">
        {anecdotes[votes.indexOf(Math.max(...votes))]}
      </div>
      <h2>Give feedback</h2>
      <Button
        text="good"
        handler={goodHandler}
      />
      <Button
        text="neutral"
        handler={neutralHandler}
      />
      <Button
        text="bad"
        handler={badHandler}
      />
      <h2>Statistics</h2>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
}

export default App;
