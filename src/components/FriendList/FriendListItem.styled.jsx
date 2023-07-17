import styled from '@emotion/styled';

export const FriendItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;

  max-width: 100%;
  width: 160px;

  overflow: hidden;

  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);

  &:hover {
    transform: scale(1.1);
  }
`;

export const FriendStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  margin-right: 12px;
  border-radius: 50%;
  border: 1px solid;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  margin-right: 12px;

  transition: transform 0.25s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FriendName = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  font-weight: 500;
`;
