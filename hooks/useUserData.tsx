import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "@prisma/client";

const useUserData = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/users/me");
        setUser(res.data.data.user);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (!user) fetchUser();
  }, [user]);

  return { user, loading };
};

export default useUserData;
