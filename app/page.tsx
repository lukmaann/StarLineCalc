import MainCanvas from "./_components/mainCanvas"
import NavBar from "../components/navbar"
import Footer from "@/components/footer"


const Home = () => {
  return (

    <main className="w-full flex bg-black justify-center ">
      <div className="max-w-[1150px] max-sm:hidden ">
        <div className="" >
          <NavBar />
          <MainCanvas />
          <Footer/>
        </div>
      </div>
      <div className="bg-black flex md:hidden justify-center h-[100vh] text-white items-center">
        <h1>Rotate the phone </h1>


      </div>

    </main>

  )
}


export default Home