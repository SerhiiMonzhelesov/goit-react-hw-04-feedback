import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from '../helpers/getCount';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export default function App() {
  const [states, setStates] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = e => {
    const feedbackName = e.target.name;
    setStates(prevState => {
      return { ...prevState, [feedbackName]: prevState[feedbackName] + 1 };
    });
  };

  const arrNamesOptions = Object.keys(states);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={arrNamesOptions} handleClick={handleClick} />
      {countTotalFeedback(states) ? (
        <Statistics
          stats={states}
          total={countTotalFeedback(states)}
          percentage={countPositiveFeedbackPercentage(states)}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
