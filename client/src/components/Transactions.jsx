// import hooks
import { useContext } from "react"
import useFetch from '../hooks/useFetch'

// context api
import { TransactionContext } from '../context/TransactionContext';

// utils and data
import { shortenAddress } from '../utils/shortenAddress';
import dummyData from '../utils/dummyData';


const TransactionCard = (props) => {
    const{addressTo, addressFrom, timestamp, message, keyword, amount, url} = props || {} 
    const gifUrl = useFetch({ keyword });


    return (
        <div className="flex flex-1 bg-[#181918] m-4 min-w-full flex-col p-3 rounded-md hover:shadow-2xl sm:min-w-[270px] sm:max-w-[300px] 2xl:min-w-[450px] 2xl:max-w-[500px]">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="flex flex-col justify-start w-full mb-6 p-2">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target='_target' rel='noreferrer'>
                        <p className="text-white text-base flex justify-between items-center"><span>From:</span> <span>{shortenAddress(addressFrom)}</span></p>    
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target='_target' rel='noreferrer'>
                        <p className="text-white text-base flex justify-between items-center"><span>To:</span><span>{shortenAddress(addressTo)}</span></p>    
                    </a>
                    <p className="text-white text-base flex justify-between items-center"><span>Amount:</span> <span>{amount} ETH</span></p>
                    {message && 
                        <>
                            <br />
                            <p className="text-white text-base flex justify-between items-center"><span>Message: </span><span>{message}</span></p>    
                        </>}    
                </div>

                {/* <img src={gifUrl || url} alt='nature' className='w-full h-64 rounded-md shadow-lg object-cover 2xl:h-96' /> */}

                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-[#37c7da]">{timestamp}</p>
                </div>        
            </div>
        </div>
    )
}

const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center gradient-bg-transactions 2xl:px-20">
            <div className="flex flex-col py-12 px-4 md:p-12">
                <h3 className="text-white text-3xl text-center my-2">
                    {currentAccount ?  "Latest Transactions" : "Connect your account to see the latest transactions"}
                </h3>
                <div className="flex flex-wrap justify-center items-center mt-10">
                    {[...transactions].reverse().map((transaction, index) => <TransactionCard key={index} {...transaction} />)}    
                </div>    
            </div>
        </div>
    )
}


export default Transactions