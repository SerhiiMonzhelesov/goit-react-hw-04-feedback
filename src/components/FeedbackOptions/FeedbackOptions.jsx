import StyledFeedbackOptions from './StyledFeedbackOptions';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, handleClick }) {
  return (
    <StyledFeedbackOptions>
      {options.map(name => {
        return (
          <button type="button" onClick={handleClick} key={name} name={name}>
            {name}
          </button>
        );
      })}
    </StyledFeedbackOptions>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};
