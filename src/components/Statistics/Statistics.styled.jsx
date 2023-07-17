import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const StatSection = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 50px;
  text-align: center;

  max-width: 100%;
  width: 360px;

  background-color: ${props => props.theme.colors.accentColor};
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 8px;
`;

export const StatTitle = styled.h2`
  padding: 18px;

  color: ${props => props.theme.colors.mainTextColor};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StatItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.32px;

  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100px;

  &:first-of-type {
    border-bottom-left-radius: 0.5rem;
  }

  &:last-child {
    border-bottom-right-radius: 0.5rem;
  }

  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);

  background-color: ${props => {
    return getRandomHexColor(props.index);
  }};
`;

export const StatLabel = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  font-weight: 700;
`;

export const StatPercentage = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  font-weight: 600;
`;
