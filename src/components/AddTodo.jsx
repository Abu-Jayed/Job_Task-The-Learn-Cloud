import "easymde/dist/easymde.min.css";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

const AddTodo = () => {
  const { register, control, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    fetch("https://job-task-the-learn-cloud-server.vercel.app/addTodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    console.log(data);
  });
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white"></div>
      <form className="space-y-3 mt-5" onSubmit={onSubmit}>
        <input
          required
          className="w-full border py-1 hover:border-cyan-500 focus:border-cyan-600 px-2 rounded"
          placeholder="Title"
          {...register("title")}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field}></SimpleMDE>
          )}
        ></Controller>
        <select {...register("priority")}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <br />

        {/* <ErrorMessage>{errors.description?.message}</ErrorMessage> */}
        <button
          className="bg-cyan-700 p-2 text-white rounded-md"
          disabled={isSubmitting}
        >
          Add New Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
