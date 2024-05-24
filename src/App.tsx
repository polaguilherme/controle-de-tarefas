import { Header } from "./components/Header";

import { Tasks } from "./components/Tasks";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 w-full">
        <div className="w-full max-w-2xl">
          <Tasks tasks={[]} />
        </div>
      </div>
    </>
  );
}

export default App;
