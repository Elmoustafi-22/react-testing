import ApiCallTest from "./components/api-testing"
import Counter from "./components/counter"
import HelloWorld from "./components/helloWorld"

function App() {
  
  return (
    <>
      <h1 className="text-5xl block mt-10 text-center font-semibold">React Unit test</h1>
        <HelloWorld />
        <Counter />
        <ApiCallTest />
    </>
  )
}

export default App
