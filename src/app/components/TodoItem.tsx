"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "@/redux/todoSlice";
import toast from "react-hot-toast";

interface Item {
  item: {
    todo: string;
    _id: string;
  };
}

export default function TodoItem({ item }: Item) {
  const dispatch = useDispatch();

  // 📝 Edit handler
  const handleEdit = () => {
    const updatedTodo = prompt("Edit your todo:", item.todo);
    if (updatedTodo && updatedTodo.trim() !== "") {
      dispatch(
        editTodo({
          ...item,
          todo: updatedTodo.trim(),
        })
      );
      toast.success("Todo updated successfully!");
    }
  };

  // 🗑️ Delete handler
  const handleDelete = () => {
    dispatch(deleteTodo(item._id));
    toast.success("Todo deleted successfully!");
  };

  return (
    <motion.li
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ y: { type: "spring", stiffness: 120 } }}
      className="border-l-green-500 border-green-900 w-full font-medium border-[1px] border-l-[6px] px-2 py-1 cursor-pointer flex items-center justify-between"
    >
      {item?.todo}

      <div className="flex items-center gap-3">
        {/* ✏️ Edit Button */}
        <MdEdit
          onClick={handleEdit}
          className="text-xl hover:text-blue-500 duration-200"
        />

        {/* 🗑️ Delete Button */}
        <MdDelete
          onClick={handleDelete}
          className="text-xl hover:text-red-500 duration-200"
        />
      </div>
    </motion.li>
  );
}
