import { useState } from "react";
import useUsers from "./hooks/useUsers";
import { Toaster } from "react-hot-toast";
import Shimmer from "./components/Shimmer";


export default function App() {

  const { users, isLoading } = useUsers();

  return (  
    <div style={{ padding: 40 }}>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Axios Instance Demo</h1>
      <h3>User List :</h3>

      {
        isLoading ? (
          <Shimmer />
        )

          : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )
      }

    </div>

  )
}