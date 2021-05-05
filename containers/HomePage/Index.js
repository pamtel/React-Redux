import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { setUsers } from "./actions";
import UserList from "./UserList";


const actionDispatch = (dispatch) => ({
    setUser: (users) => dispatch(setUsers(users))
})

export function HomePage(props) {
  const { setUser } = actionDispatch(useDispatch())

  const fetchUsers = async () => {
    const response = await Axios.get("https://reqres.in/api/users").catch(
      (err) => {
        console.log("Err:", err);
      }
    );

    setUser(response.data.data);
  };

  useEffect(() => {
     fetchUsers();
  }, [])

  return (
    <div>
      <UserList />
    </div>
  );
}
