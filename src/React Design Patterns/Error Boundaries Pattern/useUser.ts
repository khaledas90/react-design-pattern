import { useEffect, useState } from "react";
type User = {
  id: string;
  name: string;
  username: string;
  website: string;
  phone: string;
  company?: null;
  address?: null;
};

const intialUsers: User[] = [
  {
    id: "1",
    name: "Khaled",
    username: "mostafamohamed",
    website: "info@email.com",
    phone: "487487487",
    company: null,
    address: null,
  },
];
export function useUser() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>(intialUsers);
  useEffect(() => {
    // simulate fetch user from api
    const fetchUser = (id: string) => {
      setLoading(true);
      const getUser = users.filter((user) => user.id === id);
      setLoading(false);
      setUsers([...getUser]);
    };

    fetchUser("1");
  }, []);

  return { users, loading };
}
