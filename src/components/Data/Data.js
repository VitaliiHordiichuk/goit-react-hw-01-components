import css from "./Data.module.css";
import PropTypes from "prop-types";

const Data = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statlist}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          key={id}
          style={{
            backgroundColor:
              "#" +
              (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
          }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

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
