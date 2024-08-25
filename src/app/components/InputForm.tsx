"use client";
import { addTodo } from "@/redux/todoSlice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

export default function InputForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo === "") {
      toast.error("Please write a todo");
    } else {
      dispatch(addTodo({_id: Math.random().toString() , todo: todo}))
      toast.success("Todo added successfully");
      setTodo("");
    }
    
  };

  return (
    <div>
      {/* todo form */}
      <form
        onSubmit={handleTodo}
        className="flex items-center gap-4 h-10 md:h-12 relative"
      >
        <input
          type="text"
          placeholder="Enter your todo.... "
          className="flex-1 h-full bg-transparent border-[1px] border-green-400/20 hover:border-green-400 rounded-md duration-200 pl-4 pr-6 placeholder:text-gray-500 placeholder:text-sm text-base outline-none focus-visible:border-green-400"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        {todo && (
          <MdClose
            onClick={() => setTodo("")}
            className="absolute right-32 top-3.5 text-lg hover:text-red-600 cursor-pointer duration-200"
          />
        )}
        <button
          type="submit"
          className="border-[1px] h-full px-2 rounded-md border-gray-600 text-sm md:text-base hover:text-orange-400 duration-200 uppercase"
        >
          add todo
        </button>
      </form>

      {/* todo list */}
      <TodoList/>

    </div>
  );
}
