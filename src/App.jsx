import ApiCallTest from "./components/api-testing"
import Counter from "./components/counter"
import HelloWorld from "./components/helloWorld"
import ThemeToggleButton from "./context-test/button"
import ThemeContent from "./context-test/theme"

function App() {
  
  return (
    <>
      {/* <h1 className="text-5xl block mt-10 text-center font-semibold">React Unit test</h1>
        <HelloWorld />
        <Counter />
        <ApiCallTest /> */}
        <ThemeContent />
        <ThemeToggleButton />
    </>
  )
}

export default App
