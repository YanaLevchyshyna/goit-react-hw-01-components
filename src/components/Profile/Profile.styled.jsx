import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.32px;

  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  border-right: 1px solid rgba(33, 33, 33, 0.2);
  border-top: 1px solid rgba(33, 33, 33, 0.2);

  &:last-child {
    border-right: none;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 20px;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1.5px;

  max-width: 100%;
  width: 360px;

  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);

  border-radius: 5px;

   &:hover {
    background-color: ${props => props.theme.colors.accentColor}; 
    color: ${props => props.theme.colors.profileHoverColor};
    transform: scale(1.1);
`;

export const ProfileCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const UserAvatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 155px;
  width: 155px;

  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

export const UserName = styled.p`
  color: ${props => props.theme.colors.nameColor};
  font-weight: 600;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: 1.12px;
`;

export const Tag = styled.p`
  font-size: 16px;
  letter-spacing: 1.32px;
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.locationColor};
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
