import PropTypes from 'prop-types';
import {
  Table,
  THead,
  THeadRow,
  TTitle,
  TBody,
  TBodyRow,
  TBodyData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <THead>
        <THeadRow>
          <TTitle>Type</TTitle>
          <TTitle>Amount</TTitle>
          <TTitle>Currency</TTitle>
        </THeadRow>
      </THead>

      <TBody>
        {items.map(({ id, type, amount, currency }) => (
          <TBodyRow key={id}>
            <TBodyData>{type}</TBodyData>
            <TBodyData>{amount}</TBodyData>
            <TBodyData>{currency}</TBodyData>
          </TBodyRow>
        ))}
      </TBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
