import { useNavigate } from "react-router-dom"

const BuyNow = () => {
  const navigate = useNavigate()

  return (
    <div>
        <button onClick={() => navigate('/shop')} className='text-white font-bold text-base bg-#B88E2F px-8 py-4 md:px-20 md:py-7 self-start md:self-auto'>
            BUY NOW
        </button>
    </div>
  )
}

export default BuyNow