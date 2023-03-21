import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => (
      <li key={option}>
        <button type="button" value={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
