import PropTypes from 'prop-types';
// import {
//   StatisticsCard,
//   StatisticsTitle,
//   StatisticsBlock,
//   StatisticsBlockItem,
// } from './Statistics.styled';

export const Section = ({ title, children }) => (
  <>
    <h1>{title}</h1>
    <div>{children}</div>
  </>
);

Section.propTypes = {
  good: PropTypes.string,
  children: PropTypes.string,
};
