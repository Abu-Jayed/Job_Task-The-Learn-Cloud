import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactDragListView from "react-drag-listview/lib/index.js";

const Dashboard = () => {
  const [todos, setTodo] = useState([]);

  const handleCheck = async (e) => {
    const status = e.status;
    const id = e._id;

    const updatedData = todos.map((item) =>
      item._id === e._id
        ? {
            ...item,
            status: e.status === "completed" ? "uncompleted" : "completed",
          }
        : item
    );
    setTodo(updatedData);

    try {
      // Update the order on the server using PUT
      await fetch(`http://localhost:3000/updateStatus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
          id,
        }),
      });
    } catch (error) {
      console.error("Error updating order on the server:", error);
    }
  };

  const handleLine = async (e) => {
    console.log("clicking");
    const isLine = e.line;
    const id = e._id;

    const updatedData = todos.map((item) =>
      item._id === e._id
        ? {
            ...item,
            line: e.line === "true" ? "false" : "true",
          }
        : item
    );
    setTodo(updatedData);

    try {
      // Update the order on the server using PUT
      await fetch(`http://localhost:3000/isLine`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isLine,
          id,
        }),
      });
    } catch (error) {
      console.error("Error updating order on the server:", error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/`)
      .then((res) => res.json())
      .then((data) => {
        // Order the data based on the "order" field
        const orderedData = data.sort((a, b) => a.order - b.order);
        setTodo(orderedData);
      });
  }, []);

  const handleDragEnd = async (fromIndex, toIndex) => {
    const updatedData = [...todos];
    const item = updatedData.splice(fromIndex, 1)[0];
    updatedData.splice(toIndex, 0, item);
    setTodo(updatedData);

    try {
      // Update the order on the server using PUT
      await fetch(`http://localhost:3000/updateOrder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newOrder: updatedData.map((item) => item._id),
        }),
      });
    } catch (error) {
      console.error("Error updating order on the server:", error);
    }
  };

  return (
    <>
      <button className="m-2 p-2 bg-rose-400 rounded-md text-xl font-bold text-white">
        <Link to={"/dashboard/add"}>Add Todos</Link>
      </button>
      <div></div>
      <div className="rounded-md border-2">
        <ReactDragListView onDragEnd={handleDragEnd} nodeSelector="tr">
          <table className="max-w-6xl min-w-full">
            <thead className="bg-gray-50">
              <tr className="text-xl">
                <th className="p-3"></th>
                <th className="p-3">Todo</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, i) => (
                <tr className="border-b" key={i}>
                  <td className="hover:cursor-pointer">Drag</td>
                  <td
                  onClick={() => handleLine(todo)}
                    className={`${
                      todo.line === "true" ? "line-through" : ""
                    } p-2 hover:cursor-text`}
                  >
                    {todo.title}
                  </td>
                  <td className="w-20 font-bold">
                    <div className="flex gap-2 justify-between w-[120px]">
                      <p
                        className={`${
                          todo.status === "completed"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {todo.status}
                      </p>
                      <input
                        onClick={() => handleCheck(todo)}
                        type="checkbox"
                        name="checkbox"
                        id=""
                      />
                    </div>
                  </td>
                  <td>{todo.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ReactDragListView>
      </div>
    </>
  );
};

export default Dashboard;
