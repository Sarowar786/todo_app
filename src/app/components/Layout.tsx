"use client"
import { persistor, store } from '@/redux/Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './Loading'

export default function Layout({children}: {children:React.ReactNode}) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading/>} persistor={persistor}>
      {children}
        
      </PersistGate>
    </Provider>
  )
}
