import { FaTrash } from "react-icons/fa";
// mt-5
export const List = ({ users, removeUser }) => {
  return (
    <div
      className={
        users.length > 5
          ? " mt-5 gap-4 w-[70dvw] mx-auto grid grid-cols-2"
          : "mt-5 gap-4 flex flex-col"
      }
    >
      {users.map((item) => (
        <div
          key={item.id}
          className="w-90 mx-auto flex bg-[#292949] rounded-xl text-white pl-2 font-bold py-2"
        >
          <div className="flex flex-col">
            <p>Nome: {item.name}</p>
            <p>E-mail: {item.email}</p>
            <p>Idade: {item.age}</p>
          </div>
          <div className="ml-auto content-center pr-5 text-red-700">
            <FaTrash
              className="cursor-pointer"
              onClick={() => removeUser(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
