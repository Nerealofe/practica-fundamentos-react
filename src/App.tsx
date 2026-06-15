import { Router } from "./core/router/router.tsx";
import { Header } from "./core/components/header.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Router />
      </main>
    </>
  );
}

export default App;
