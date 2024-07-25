import Bannerpath from '../../components/banner-path/Bannerpath'
import Carrossel from '../../components/Carrossel'
import Filter from '../../components/filter/Filter'
import List from '../../components/listProducts/List'
import OurProducts from '../home/OurProducts'

const Shop = () => {
  return (
    <div>
      {/* <Carrossel/> */}
      <Bannerpath/>
      <Filter/>
      <List/>
      
    </div>
  )
}

export default Shop