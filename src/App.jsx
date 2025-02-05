import {Button} from "@material-tailwind/react"

const App = () => {
  return (
    <div className="bg-blue-500 h-screen flex flex-col text-white justify-center items-center">
       <h1 className="text-3xl font-bold underline text-white">Hello world!</h1>
      <p>Thanks for development mode !!!</p>
      <Button>Click ME</Button>
    </div>
  );
};
export default App;
