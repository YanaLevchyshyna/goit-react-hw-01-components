import PropTypes from 'prop-types';
import { VscCircleFilled } from 'react-icons/vsc';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li>
      <span>
        <VscCircleFilled />
        {status}
      </span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
