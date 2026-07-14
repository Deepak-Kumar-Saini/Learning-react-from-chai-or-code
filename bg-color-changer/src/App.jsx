import BgColorBtn from "./components/BgColorBtn"

function App() {

  return (
    <>
    <div className="m-1 bg-amber-50 flex rounded-full p-2 absolute left-[50%] bottom-10 transform translate-x-[-50%]">
      <BgColorBtn color="yellow" text="yellow"/>
    </div>
    </>
  )
}

export default App
