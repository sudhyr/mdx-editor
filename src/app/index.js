import React from "react"
import AppRouter from './router';
import { themeClassContainer } from '../lib/components/theme.css';

const App = () => {
  return <div className={themeClassContainer}>
    <AppRouter />
  </div>
}

export default App;
