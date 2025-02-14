import { useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <>
      <div className="bg-primary text-white m-2 p-2 text-center">
        User's Data From <strong>resqin</strong>
      </div>
      <div className="container">
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4 mb-4" key={user.id}>
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={user.avatar}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-title">ID: {user.id}</p>
                  <p className="card-text">
                    Name: {user.first_name} {user.last_name}
                  </p>
                  <p>Email: {user.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
