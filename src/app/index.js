import React from "react"
import AppRouter from './router';
import { themeClass } from '../lib/components/theme.css';

const App = () => {
  return <div className={themeClass}>
    <AppRouter />
  </div>
}

export default App;