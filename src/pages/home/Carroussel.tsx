import { useNavigate } from "react-router-dom"
// import Carrossel from "../../components/carrossel/Carrossel"

const Carroussel = () => {

  const navigate = useNavigate()
  return (
    <div className='flex flex-col md:flex-row items-center mb-12'>
        <div className='pl-24 mr-10'>
        <h1 className='font-bold text-[40px] text-#3A3A3A'>50+ Beatiful rooms inspiration</h1>
        <p className='font-medium text-base text-#616161 mb-8'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className='bg-#B88E2F px-9 py-3 text-white font-semibold' onClick={() => navigate('/shop')}>Explore More</button>
        </div>
        {/* <Carrossel /> */}
    </div>
  )
}

export default Carroussel