"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "@/redux/todoSlice";
import toast from "react-hot-toast";
interface Item {
  item: {
    todo: string;
    _id: string;
  };
}
export default function TodoItem({ item }: Item) {
  const dispatch = useDispatch();
  return (
    <motion.li 
     initial={{y:10 , opacity:0}}
     animate={{y:0, opacity:1}}
     transition={{y:{type:'spring', stiffness:120}}}
     className="border-l-green-500 border-green-900 w-full font-medium border-[1px] broder-l-[6px] px-2 py-1 cursor-pointer flex items-center justify-between ">
      {item?.todo}
      <MdDelete
        onClick={() => {
          dispatch(
            deleteTodo(item?._id),
            toast.success("Todo delete successfully")
          );
        }}
        className="text-xl hover:text-red-500 duration-200 "
      />
    </motion.li>
  );
}
