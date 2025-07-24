import { useState } from "react";
import "./Form.css"
const Form = ({ newUserInfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        newUserInfo({ name, email, age });
      }}
      className="gap-6 m-auto w-90 flex flex-col items-center bg-[#292949] rounded-xl pb-10"
    >
      <h1 className="text-3xl text-white my-7 font-bold">
        Cadastro de Usuários
      </h1>
      <div>
        <input
          className="rounded-2xl border p-1 w-70 bg-[#33324e] border-[#3f3d5c] text-[#9a9ba5] pl-3 checked:bg-amber-600"
          type="text"
          id="name"
          value={name}
          placeholder="Nome"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          className="rounded-2xl border p-1 w-70 bg-[#33324e] border-[#3f3d5c] text-[#9a9ba5] pl-3"
          type="email"
          id="email"
          value={email}
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className="rounded-2xl border p-1 w-70 bg-[#33324e] border-[#3f3d5c] text-[#9a9ba5] pl-3"
          type="number"
          value={age}
          placeholder="Idade"
          required
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <input
          className="rounded-2xl p-1 w-70 bg-[#8c8ceb] text-[#ffffff] cursor-pointer font-extrabold "
          type="submit"
          value="Cadastrar"
        />
      </div>
    </form>
  );
};

export default Form;
