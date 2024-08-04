import Form from '../../components/Form'
import Bannerpath from '../../components/banner-path/Bannerpath'

const Checkout = () => {
  return (
    <div>
      <Bannerpath />
      <div className='flex pt-16 gap-20'>
      <Form />
      </div>
    </div>
  )
}

export default Checkout