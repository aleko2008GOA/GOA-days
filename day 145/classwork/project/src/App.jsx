import StudentForm from "./components/StudentForm"
import ErrorBoundary from "./ErrorHandling/ErrorBoundary"

function App() {
  return (
    <>
      <ErrorBoundary>
        <StudentForm />
      </ErrorBoundary>
    </>
  )
}

export default App
