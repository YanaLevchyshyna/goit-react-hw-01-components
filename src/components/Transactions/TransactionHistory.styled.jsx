import styled from '@emotion/styled';

export const Table = styled.table`
  text-align: left;
  border-collapse: separate;
  border-spacing: 5px;
  color: #656665;
  border-radius: 20px;
  border: 4px solid ${props => props.theme.colors.tableBorderColor};
  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08);
  background-color: ${props => props.theme.colors.TableBcgColor};
  margin: 0 auto;

  max-width: 100%;
  width: 500px;
`;

export const THead = styled.thead``;

export const THeadRow = styled.tr`
  vertical-align: middle;
  text-align: center;
`;

export const TTitle = styled.th`
  color: ${props => props.theme.colors.mainTextColor};
  font-size: 18px;
  padding: 10px;
`;

export const TBody = styled.tbody``;

export const TBodyRow = styled.tr`
  vertical-align: middle;
  text-align: center;
  height: 40px;

  &:hover {
    font-weight: bold;
  }
`;

export const TBodyData = styled.td`
  background-color: ${props => props.theme.colors.accentColor};
`;
