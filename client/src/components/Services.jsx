// import icons
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';


const ServiceCard = ({ color, title, icon, subtitle }) => {
    return (
        <div className="flex flex-row justify-start item-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
                {icon}
            </div>
            <div className="ml-5 flex flex-col flex-1">
                <h3 className="mt-2 text-white text-lg">{title}</h3>
                <p className="mt-1 text-white text-sm md:w-9/12">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}


const Services = () => {
    return(
        <div className="flex justify-center items-center w-full gradient-bg-services">
            <div className="flex flex-col justify-between items-center py-12 px-4 md:p-20 mf:flex-row">
                
                {/* Heading and Tagline */}
                <div className="flex flex-col justify-start items-start flex-1">
                    <h1 className="text-white text-3xl py-2 text-gradient sm:text-5xl">
                        Services that we <br /> continue to improve
                    </h1>
                    <p className="my-2 text-white font-light text-base w-11/12 md:9/12">
                        The best choice for buying and selling your crypto assets, with the various super friendly services we offer
                    </p>
                </div>

                {/* Services Cards */}
                <div className="flex flex-col justify-start items-center flex-1">
                    <ServiceCard 
                        color="bg-[#2952E3]"
                        title="Security gurantee"
                        icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                    <ServiceCard
                        color="bg-[#8945F8]"
                        title="Best exchange rates"
                        icon={<BiSearchAlt fontSize={21} className="text-white" />}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                    <ServiceCard
                        color="bg-[#F84550]"
                        title="Fastest transactions"
                        icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                </div>
            </div>
        </div>
    )
}



export default Services