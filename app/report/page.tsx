import NavBar from "@/components/navbar"
import ReportPageComponent from "./_component"
import Footer from "@/components/footer"

const reportPage=()=>{
    return <main className="bg-black flex flex-col justify-center p-4">
        <NavBar/>
        <ReportPageComponent/>
        <Footer/>


    </main>
}

export default reportPage