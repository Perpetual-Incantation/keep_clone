import React from 'react'
import Header from './components/Header'
import './styles.css'
//import './stew.css'
import Notes from './components/Notes'
import CreateArea from './components/CreateArea'
const App = () => {
  return (
    <div>
    <Header></Header>
    <CreateArea></CreateArea>
    <Notes></Notes>
    </div>
  )
}

export default App
