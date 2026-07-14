import BgColorBtn from "./components/BgColorBtn"

function App() {

  return (
    <>
    <div className="m-1 bg-amber-50 flex rounded-full p-2 absolute left-[50%] bottom-10 transform translate-x-[-50%]">

      <BgColorBtn bGcolor="bg-yellow-500" text="yellow"/>
      <BgColorBtn bGcolor="bg-blue-500" text="blue"/>
      <BgColorBtn bGcolor="bg-green-500" text="green"/>
      <BgColorBtn bGcolor="bg-pink-500" text="pink"/>

    </div>
    </>
  )
}

export default App
