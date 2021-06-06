import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };
  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.friends.map((friend) => {
          return <Friend friend={friend} key={friend.id} />;
        })}
      </div>
    );
  }
}
export default FriendsList;
