import { Suspense } from "react";
// import Loader from "./components/Loader";
import User from "./components/User";

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((res) => res.json())

const App = () => {
  return (
    <div>
      <h1 className="text-center text-6xl">photo gallery</h1>
      <Suspense fallback={<div className="flex justify-center items-center h-screen text-3xl font-bold">
            Loader...
          </div>}>
        <User fetchPromise={fetchPromise}/>
      </Suspense>
    </div>
  );
};

export default App;
