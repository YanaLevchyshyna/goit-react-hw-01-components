import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  gap: 12px;
  padding: 10px;

  align-items: center;
  justify-content: center

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
  border-radius: 50%;
  border: 1px solid;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  transition: transform 0.25s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FriendName = styled.p`
  color: ${props => props.theme.colors.mainTextColor};
  font-size: 18px;
  font-weight: 500;
`;
