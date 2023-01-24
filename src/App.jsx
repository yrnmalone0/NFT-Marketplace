import { useEffect } from "react"
import { getAllNFTs, isWallectConnected } from "./Blockchain.services"
import Alert from "./components/Alert"
import Artworks from "./components/Artworks"
import CreateNFT from "./components/CreateNFT"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Loading from "./components/Loading"
import Navbar from "./components/Navbar"
import ShowNFT from "./components/ShowNFT"
import Transactions from "./components/Transactions"
import UpdateNFT from "./components/UpdateNFT"

const App = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Navbar />
        <Hero />
      </div>
      <Artworks />
      <Transactions />
      <Footer />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Loading />
      <Alert />
    </div>
  )
}

export default App
