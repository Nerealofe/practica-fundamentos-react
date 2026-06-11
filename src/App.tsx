import { Router } from "./core/router/router.tsx";
import { Header } from "./core/components/header.tsx";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
