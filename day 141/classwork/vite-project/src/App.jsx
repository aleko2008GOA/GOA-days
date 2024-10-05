import React from 'react'
import { Component } from './component.jsx'
import ErrorBoundary from './errorBoundary.jsx'

function App() {
  return (
    <>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </>
  )
}

export default App
