import PropTypes from 'prop-types';
import css from './Profile.module.css';
import {
  ProfileCard,
  ProfileCardDescription,
  List,
  ListItem,
  UserAvatar,
  UserName,
  Tag,
  Location,
  Label,
  Quantity,
} from '../Profile/Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <ProfileCardDescription>
        <UserAvatar src={avatar} alt="User avatar" className={css.avatar} />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileCardDescription>

      <List>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListItem>
      </List>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
