import React, {FC, useEffect, useState} from "react";
import axios from 'axios';
import { UserCard } from "../../components/UserCard";
import { UserDetails } from "../../components/UserCard/props";

export const AboutUs: FC = () => {
  const [users, setUsers] = useState<ReadonlyArray<UserDetails>>([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
  }, [])
  return (
    <div className="row mt-5">
      {users.map(user => <UserCard user={user} />)}
    </div>
    )
}