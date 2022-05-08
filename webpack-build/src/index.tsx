import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => <div id="root">Hello World</div> // develop new component

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(<App />)
