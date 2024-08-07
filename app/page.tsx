import MainCanvas from "./_components/mainCanvas"
import NavBar from "../components/navbar"


const Home = () => {
  return (
    <main className="w-full flex bg-black justify-center ">
      <div className="max-w-[1150px] ">
        <div className="" >
          <NavBar />
          <MainCanvas />
        </div>
      </div>

    </main>

  )
}


export default Home