import FindError from "./component";
import ErrorBoundary from "./ErrorBoundary";
import Another from "./another";
import Other from "./other";

function App() {
  return (
    <>
      <ErrorBoundary>
        <FindError />
      </ErrorBoundary>
      <ErrorBoundary>
        <Another />
      </ErrorBoundary>
      <ErrorBoundary>
        <Other />
      </ErrorBoundary>
    </>
  )
}

export default App
