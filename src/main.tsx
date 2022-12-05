import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskList from './pages/TaskList'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskList />
  </React.StrictMode>
)
