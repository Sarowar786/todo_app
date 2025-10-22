"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "@/redux/todoSlice";
import toast from "react-hot-toast";

interface Item {
  item: {
    todo: string;
    _id: string;
  };
  onEdit: (id: string, text: string) => void;
}

export default function TodoItem({ item, onEdit }: Item) {
  const dispatch = useDispatch();

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
      {item.todo}

      <div className="flex items-center gap-3">
        <MdEdit
          onClick={() => onEdit(item._id, item.todo)}
          className="text-xl hover:text-blue-500 duration-200 cursor-pointer"
        />
        <MdDelete
          onClick={handleDelete}
          className="text-xl hover:text-red-500 duration-200 cursor-pointer"
        />
      </div>
    </motion.li>
  );
}
