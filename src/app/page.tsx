import React from 'react'
import InputForm from './components/InputForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | Todo Application",
  description: "Todo app for learning purposes",
};
export default function Homepage() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-slate-100 via-slate-400 to-slate-300 flex items-center flex-col pt-5'>
      <div className='max-w-screen-md w-full bg-bodyColor text-white p-4 md:p-10 lg:p-20 rounded-md '>
        <InputForm/>
      </div>
    </div>
  )
}
