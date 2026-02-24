import { useEffect, useState } from "react";
import api from "../api/axios";
import { showError, showInfo, showSuccess } from "../utils/toast";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    async function fetchUsers() {
      setisLoading(true)
      try {
        showInfo("Fetching Users")
        const response = await api.get("/users");
        setUsers(response.data);
        showSuccess("Users loaded successfully")
      } catch (error) {
        showError("Failed to fetch users!!")
        console.log(error)
      }
      finally{
        setisLoading(false)
      }
    }
    fetchUsers();
  }, []);

  return {users, isLoading};
}
