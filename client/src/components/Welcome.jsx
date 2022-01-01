// Import: icons
import { useContext } from "react"

// Import: icons
import { AiFillPlayCircle } from "react-icons/ai"
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"

// context api
import { TransactionContext } from '../context/TransactionContext'

// components
import { Loader } from "."


// utility
import { shortenAddress } from '../utils/shortenAddress'
const commonStyles = "min-h-[70px] px-2 flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white sm:px-0 sm:min-w-[120px]"

// helper components
const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        name={name}
        onChange={(e) => handleChange(e)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
)

// exported component
const Welcome = () => {

    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

    // helper functions
    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        // validate fields
        if (!addressTo || !amount || !keyword || !message) return;

        // call transaction
        sendTransaction();
    }

    const { addressTo, amount, keyword, message } = formData || {}

    console.log({ addressTo, amount, keyword, message })

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col items-start justify-between py-12 px-4 md:p-20 mf:flex-row">
                {/* Left column */}
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                    
                    {/* taglines and action button */}
                    <h1 className="text-3xl text-white text-gradient py-1 sm:text-5xl">
                        Send Crypto <br /> across the world
                    </h1>  
                    <p className="text-left text-white text-base font-light mt-5 w-11/12 md:w-9/12">
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.    
                    </p>  

                    {!currentAccount && 
                        <button type='button' className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hocer:bg-[#2546bd]" onClick={connectWallet}>
                            <AiFillPlayCircle className="text-white mr-2" />
                            <p className="text-white mr-2">Connect Wallet</p>    
                        </button> }  

                    {/* Grid    */}
                    <div className="grid w-full mt-10 grid-cols-2 sm:grid-cols-3">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliability
                        </div>
                        <div className={`${commonStyles}`}>
                            Security
                        </div>
                        <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
                            Ehtereum
                        </div>
                        <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
                            Web 3.0
                        </div>
                        <div className={`${commonStyles}`}>
                            Low Fees
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col flex-1 items-center justify-start w-full mt-10 mf:mt-0">

                    {/* Ethereum Card */}
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 w-full my-5 eth-card white-glassmorphism sm:w-72">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff" />   
                                </div> 
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>

                            <div className="">
                                <p className="text-white font-light text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-5 w-full flex flex-col justify-start items-center blue-glassmorphism sm:w-96">
                        <Input placeholder="Address To" value={addressTo} name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount (ETH)" value={amount} name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword (Gif)" value={keyword} name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Enter Message" value={message} name="message" type="text" handleChange={handleChange} />

                        <div className="h-[1px] w-full bg-gray-400 my-2"></div>

                        {isLoading ? <Loader classes='w-10 h-10' /> : <button type="button" className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer" onClick={handleSubmit}>Send now</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Welcome