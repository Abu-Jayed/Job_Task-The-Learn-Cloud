import "easymde/dist/easymde.min.css";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
// });


const AddTodo = () => {
  const {register,control,handleSubmit} = useForm();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white">
        {/* {error && (
          <Callout.Root color="red" className=" mb-5">
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )} */}
      </div>
      <form className="space-y-3 mt-5" onSubmit={onSubmit}>
          <input
          className="w-full border py-1 hover:border-cyan-500 focus:border-cyan-600 px-2 rounded"
            placeholder="Title"
            {...register("title")}
          />
        {/* <ErrorMessage>{errors.title?.message}</ErrorMessage> */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field}></SimpleMDE>
          )}
        ></Controller>
        {/* <ErrorMessage>{errors.description?.message}</ErrorMessage> */}
        <button className="bg-cyan-700 p-2 text-white rounded-md" disabled={isSubmitting}>
          Add New Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
