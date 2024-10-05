import ErrorBoundary from "./ErrorBoundary";
import { ErrorExample } from "./errorCOmpEgzample";
import Counter from "./counter";
import StartTimer from "./timerConponent";
import Loading from "./loading";
import Input from "./input";
import GetApi from "./api";

function App() {
  return (
    <>
      <ErrorBoundary>
        <ErrorExample />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <StartTimer />
      </ErrorBoundary>
      <ErrorBoundary>
        <Loading />
      </ErrorBoundary>
      <ErrorBoundary>
        <Input />
      </ErrorBoundary>
      <ErrorBoundary>
        <GetApi />
      </ErrorBoundary>
    </>
  )
}

export default App
