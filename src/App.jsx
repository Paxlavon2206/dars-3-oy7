import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/reducer/todo-reducer";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { Card2 } from "./components/card/card2";
import { Card1 } from "./components/card/card1";

function App() {
  const dispatch = useDispatch();
  const { handleSubmit, register, reset } = useForm();
  const submit = (data) => {
    dispatch(addTodo({...data, id: nanoid()}));
    reset();
  }
  const {todoList} = useSelector((state) => state.todo)
  return (
    <div className=" container pt-5">
      <form onSubmit={handleSubmit(submit)}>
       <div className=" mb-4">
       <div className=" mb-2">
          <input className="bg-blue-100 border-solid border-2 border-blue-400 outline-0" {...register("First name", )} type="text" />
          </div>
        <div>
          <input className=" bg-blue-100 border-solid border-2 border-blue-400 outline-0" {...register("Last name", )} type="text" />
        </div>
       </div>
        <button className=" p-3 bg-red-200">Add</button>
      </form>
      {todoList?.map((item) => (
        <Card2 key={item.id} firstname={item.firstname} lastname={item.lastname}/>
      ))}
    </div>
  );
}

export default App;
