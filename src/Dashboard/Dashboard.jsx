const Dashboard = () => {
  return (
    <>
      <button className="p-2 bg-rose-400 rounded-md text-xl font-bold text-white">
        Add Todos
      </button>
      <div></div>
      <div className="rounded-md border-2 ">
        <table className=" max-w-6xl min-w-full">
          <thead className="bg-gray-50 ">
            <tr className="text-xl">
              <th className="p-3"> Todo</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b ">
              <td className="p-2">Wake up</td>
              <td className="text-green-700 font-bold">Completed</td>
              <td>Sunday</td>
            </tr>
            <tr className="border-b">
              <td>Exercise</td>
              <td className="text-red-700 font-bold">unCompleted</td>
              <td>Sunday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
