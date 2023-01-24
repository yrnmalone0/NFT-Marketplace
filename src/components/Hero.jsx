import Identicon from 'react-identicons'
import { setGlobalState, truncate, useGlobalState } from "../store"


const imgHero = "https://imgs.search.brave.com/cRrKDfXOIMswVo6CRMAm_1TFKOr5lsMUEjkZyRCWVyM/rs:fit:1132:670:1/g:ce/aHR0cHM6Ly93d3cu/ZnV0dXJ5cHRvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMS9uZnQucG5n"

const Hero = () => {
    const [connectedAccount] = useGlobalState("connectedAccount")

  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10">
        <div className="md:w-3/6 w-full">
            <div>
                <h1 className="text-white text-5xl font-bold">
                    Buy and Sell <br /> Digital Arts, <br />
                    <span className="text-gradient">NFTs</span> Collections
                </h1>
                <p className="text-gray-500 font-semibold text-sm mt-3">Mint and collect the hottest NTFs around.</p>

                <div className="flex mt-5">
                    <button 
                        className="shadow-xl shadow-black text-white 
                        bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2" 
                        onClick={() =>  setGlobalState('modal', 'scale-100')}
                    >
                        Create NFT
                    </button>
                </div>

                <div className="w-3/4 flex justify-between items-center mt-5">
                    <div className="text-white">
                        <p className="font-bold">120K</p>
                        <small className="text-gray-300">Users</small>
                    </div>
                    <div className="text-white">
                        <p className="font-bold">148K</p>
                        <small className="text-gray-300">Artworks</small>
                    </div>
                    <div className="text-white">
                        <p className="font-bold">60K</p>
                        <small className="text-gray-300">Artists</small>
                    </div>
                </div>
            </div>
        </div>

        <div className="shadow-xl shadow-black md:w-2/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800">
            <img className="h-60 w-full object-cover" src={imgHero} alt="Hero" />

            <div className='flex justify-start items-center p-3'>
                <Identicon className="h-10 w-10 object-contain rounded-full mr-3" string={connectedAccount} size={50} />
                <div>
                    <p className='text-white font-semibold'>{truncate(connectedAccount, 4, 4, 11)}</p>
                    <small className='text-pink-800 font-bold'>@you</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero