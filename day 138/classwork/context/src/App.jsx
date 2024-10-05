import { Component } from "react"
import ErrorBoundary from "./ErrorBoundary"

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
