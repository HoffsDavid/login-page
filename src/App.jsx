import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { List } from "./components/List";

function App() {
  const [users, setUsers] = useState([]);
  const handleUser = (newUser) => {
    
    setUsers((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        name: newUser.name,
        email: newUser.email,
        age: newUser.age
      },
    ]);
  };

  const handleRemove = (id) => {
    const newList = users.filter((user) => id !== user.id)
    console.log(newList)
    setUsers(newList);
  }

  return (
    <div className="bg-sky-700 w-[100dvw] h-[100dvh] main-container pt-15">
      <Form newUserInfo={handleUser} />
      <List users={users} removeUser={handleRemove}/>
     
    </div>
  );
}

export default App;
