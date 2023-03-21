import PropTypes from 'prop-types';
// import {
//   StatisticsCard,
//   StatisticsTitle,
//   StatisticsBlock,
//   StatisticsBlockItem,
// } from './Statistics.styled';

export const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
