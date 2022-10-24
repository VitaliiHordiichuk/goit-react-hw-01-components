import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Data = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statlist}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          key={id}
          style={{
            backgroundColor: getRandomHexColor(),
          }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

function getRandomHexColor() {
  return `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`;
}

Data.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Data;
