import ErrorBoundary from "./ErrorBoundary";
import { ErrorExample } from "./errorCOmpEgzample";
import Counter from "./counter";

function App() {
  return (
    <>
      <ErrorBoundary>
        <ErrorExample />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </>
  )
}

export default App
