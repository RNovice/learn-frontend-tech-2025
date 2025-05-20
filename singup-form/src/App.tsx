import SignupForm from "./components/SignupForm"
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css"

function App() {

  return (
    <>
      <div className="container">
        <h1 className="text-center my-4">Sign up</h1>
        <SignupForm />
      </div>
    </>
  )
}

export default App
