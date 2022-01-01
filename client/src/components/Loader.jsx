
const Loader = ({classes}) => {
    return (
        <div className="flex justify-center items-center py-3">
            <div className={`animate-spin rounded-full border-b-2 border-red-700 ${classes}`}></div>
        </div>
    )
}


export default Loader