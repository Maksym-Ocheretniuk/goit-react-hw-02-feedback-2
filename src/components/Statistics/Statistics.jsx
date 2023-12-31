import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p className={css.total}>Total: {total} </p>
      <p className={css.positiveFeedback}>
        Positive feedback: {positivePercentage} %
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
