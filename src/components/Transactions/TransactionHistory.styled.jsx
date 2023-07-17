import styled from '@emotion/styled';

export const Table = styled.table`
  text-align: left;
  border-collapse: separate;
  border-spacing: 5px;
  color: #656665;
  border: 16px solid #ece9e0;
  border-radius: 20px;
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
  background-color: ${props => props.theme.colors.TBodyDataColor};
`;
