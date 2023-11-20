import { Link } from "react-router-dom";
import { data } from "./data";
import { useEffect, useState } from "react";

const Dashboard = () => {

  const [todos, setTodo] = useState([])
  
  useEffect(()=>{
    fetch(`http://localhost:3000/`)
    .then(res => res.json())
    .then(data => {
      setTodo(data)
    })
  },[])

  return (
    <>
      <button className="m-2 p-2 bg-rose-400 rounded-md text-xl font-bold text-white">
        <Link to={"/dashboard/add"}>Add Todos</Link>
      </button>
      <div></div>
      <div className="rounded-md border-2 ">
        <table className=" max-w-6xl min-w-full">
          <thead className="bg-gray-50 ">
            <tr className="text-xl">
              <th className="p-3"> Todo</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => {
                return (
                  <tr className="border-b" key={todo._id}>
              <td className="p-2">{todo.title}</td>

              <td className=" w-20 font-bold">
                <select className={`${todo.status==="completed"?"text-green-600": "text-red-700"} w-24`} name="" id="">
                  <option className="text-red-700 font-bold" value="Hello">{todo.status === "completed"? "completed": "uncompleted"}</option>
                  <option className="text-green-700 font-bold" value="Hi">{todo.status === "completed"? "uncompleted": "completed"}</option>
                </select>
              </td>
              <td>{todo.priority}</td>


                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
