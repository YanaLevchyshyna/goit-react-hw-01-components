import PropTypes from 'prop-types';
import {
  StatSection,
  StatList,
  StatItem,
  StatTitle,
  StatLabel,
  StatPercentage,
} from '../Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title.length > 0 && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map((stat, idx) => (
          <StatItem key={stat.id} id={stat.id} index={idx}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
