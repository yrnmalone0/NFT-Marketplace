import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { updateNFT } from "../Blockchain.services"
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState } from "../store"

const imgHero = "https://whatsnewinpublishing.com/wp-content/uploads/2021/08/NFT-1170x780.jpg"

const UpdateNFT = () => {
    const [modal] = useGlobalState('updateModal')
    const [nft] = useGlobalState('nft')
    const [price, setPrice] = useState(nft?.cost)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!price || price <= 0) return
        setGlobalState("modal", "scale-0")
        setLoadingMsg("Initializing price update...")

        try {
            setLoadingMsg("Price updating...")
            setGlobalState("updateModal", "scale-0")

            await updateNFT({id: nft.id, cost: price})
            setAlert("Price updated successfully...")
            window.location.reload()
        } catch (error) {
            console.log("Error updating price: ", error);
            setAlert("Price update failed...", "red")
        }
    }

    const closeModal = () => {
        setGlobalState('updateModal', 'scale-0')
        resetForm()
    }

    const resetForm = () => {
        setPrice('')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}>
        <div className="bg-[#151c25] shadow-md shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex justify-between items-center text-gray-400">
                    <p className="font-semibold">Leoman NFT</p>
                    <button type="button" onClick={closeModal} className="border-0 bg-transparent focus:outline-none">
                        <FaTimes />
                    </button>
                </div>

                <div className="flex justify-center items-center rounded-xl mt-5">
                    <div className="shrink-0 rounded-xl overflow-hidden w-20 h-20">
                        <img className="w-full h-full object-cover cursor-pointer" src={imgHero} alt="NFT PP" />
                    </div>
                </div>

                <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
                    <input type="number" 
                        className="block w-full text-sm text-slate-500 focus:outline-none 
                        cursor-pointer focus:ring-0 bg-transparent border-0" 
                        placeholder="Price (ETH)"
                        min={0.01}
                        step={0.01}
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        required
                    />
                </div>

                <button className="flex justify-center items-center p-2 mt-5 shadow-lg shadow-black text-sm text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full">
                    Update Now
                </button>
            </form>
        </div>
    </div>
  )
}

export default UpdateNFT 