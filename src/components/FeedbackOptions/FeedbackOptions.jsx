import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.list}>
            {options.map(nameEl => {
                return (
                    <li key={nameEl} className={css.item}>
                        <button type="button" className={css.button} name={nameEl} onClick={onLeaveFeedback}>{nameEl}</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}