// import images
import logo from '../../images/logo.png';


const Footer = () => {
    return (
        <div className='w-full flex justify-between items-center flex-col p-4 gradient-bg-footer md:justify-center'>
            <div className="w-full flex flex-col justify-between items-center my-4 sm:flex-row">
                <div className="flex justify-center items-center flex-[0.5]">
                    <img src={logo} alt='krypt-logo' className='w-32' />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap mt-5 w-full sm:mt-0">
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
                <p className="text-white text-sm text-center font-medium mt-2">info@kryptomastery.com</p>
            </div>

            <div className="w-full bg-gray-400 mt-5 h-[0.25px] sm:w-[90%]" />

            <div className="w-full flex justify-between items-center mt-3 sm:w-[90%]">
                <p className="text-white text-left text-xs">@kryptomastery2022</p>
                <p className="text-white text-left text-xs">All right reserved</p>
            </div>
        </div>
    )
}


export default Footer