import { useState, useEffect, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const input = useInput()

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await responce.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effect</h3>

      <Button onClick={() => setModal(true)} style={{ marginBottom: "1rem" }}>
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ad
          ipsum suscipit debitis expedita laudantium amet excepturi facere
          velit, veniam iste veritatis possimus illum repellendus doloribus
          earum. Repellat, ullam error.
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <h6>{input.value}</h6>
          <ul>
            {users.filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase())
            )
            .map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
