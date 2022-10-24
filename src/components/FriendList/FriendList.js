import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        id={id}
      />
    ))}
  </ul>
);

FriendList.protoType = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
