export function countTotalFeedback({ good, neutral, bad }) {
  const total = good + neutral + bad;

  return total;
}

export function countPositiveFeedbackPercentage(states) {
  return Math.round((states.good / countTotalFeedback(states)) * 100) || 0;
}
