import PropTypes from 'prop-types';
// import {
//   StatisticsCard,
//   StatisticsTitle,
//   StatisticsBlock,
//   StatisticsBlockItem,
// } from './Statistics.styled';

export const Section = ({ title, children }) => (
  <>
    {title && <h1>{title}</h1>}
    {children}
  </>
);

Section.propTypes = {
  good: PropTypes.string,
  children: PropTypes.node,
};
