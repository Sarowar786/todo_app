"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../type";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";
import { removeTodo } from "@/redux/todoSlice";
import toast from "react-hot-toast";


interface TodoListProps {
  onEdit: (id: string, text: string) => void;
}

export default function TodoList({ onEdit }: TodoListProps) {
  const { todoList } = useSelector((state: State) => state?.todo);
  const dispatch = useDispatch();

  const [showRemove, setShowRemove] = useState(false);

  return (
    <div className="flex flex-col gap-4 mt-2 p-4 border border-gray-500 rounded-md  ">
      {todoList?.length > 0 && (
        <div>
          <ul className="mah-h-[300px] border border-slate-600 p-2 shadow-lg  flex flex-col gap-3 rounded-md ">
            {todoList?.map((item) => (
              <TodoItem key={item._id} item={item} onEdit={onEdit} />
            ))}
          </ul>
          <motion.button
            onClick={() => setShowRemove(true)}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ y: { type: "spring", stiffness: 120 } }}
            className="w-full mt-5 text-sm text-center border-[1px] border-gray-500 rounded-md hover:text-red-500 duration-200 tracking-wider hover:border-red-500 py-3"
          >
            Remove All Todo
          </motion.button>
        </div>
      )}
      {todoList?.length === 0 && (
        <p className="text-orange-400 text-center tracking-wide text-base ">
          Your todo list is empty
        </p>
      )}
      {showRemove && (
        <div className="w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-bodyColor px-8 py-4 rounded-md shadow-todoShadow">
            <p className="text-sm md:text-base text-red-500 font-semibold ">
              Are you sure to <span>remove</span> all todos{" "}
            </p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <button
                onClick={() => setShowRemove(false)}
                className="border-[1px]  px-6 py-1 rounded-md hover:bg-green-400 duration-200 hover:text-black "
              >
                No
              </button>
              <button
                onClick={() => {
                  dispatch(
                    removeTodo(),
                    toast.success("All todo remove successfully !"),
                    setShowRemove(false)
                  );
                }}
                className="border-[1px]  px-6 py-1 rounded-md hover:bg-red-500 duration-200 hover:text-black "
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
