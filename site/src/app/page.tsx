import CategoryCard from './components/CategoryCard/CategoryCard.component'
import CustomerStep from './components/CustomerStep/CustomerStep.component'
import Icon from './components/Icon/Icon.component'
import DiscountContainer from './components/DiscountContainer/DiscountContainer.component'
import { products } from '@/mocks/products.mock'
import { Product } from './types/Product.type'

function getDiscountedProducts() {
  const res = new Promise<Product[]>(resolve => {
    setTimeout(() => {
      const fakeData = products
      resolve(fakeData)
    }, 2000)
  })

  return res
}

export default async function Home() {
  const mockedProducts = await getDiscountedProducts()

  return (
    <div className='flex flex-col gap-20'>
      <div className='h-[560px] w-full bg-gray200'></div>
      <div className='-mt-48 w-full'>
        <section className='mx-auto flex max-w-[1000px] gap-6'>
          <CategoryCard name={'Frutas'} alt='Frutas' src='' width={480} height={480} />
          <CategoryCard name={'Verduras'} alt='Frutas' src='' width={480} height={480} />
          <CategoryCard name={'Lácteos'} alt='Frutas' src='' width={480} height={480} />
          <CategoryCard name={'Carnes'} alt='Frutas' src='' width={480} height={480} />
        </section>
      </div>
      <div className='w-full'>
        <section className='mx-auto flex max-w-[1000px] flex-col gap-y-10'>
          <h2 className='text-4xl font-bold'>Descuentos</h2>
          <DiscountContainer products={mockedProducts} />
          {/* <div className="flex justify-between"> */}
          {/*   <Card title={'Producto 1'} category={"Categoria 1"} price={1000} promotion={0.3}/> */}
          {/*   <Card title={'Producto 1'} category={"Categoria 1"} price={1000} /> */}
          {/*   <Card title={'Producto 1'} category={"Categoria 1"} price={1000} /> */}
          {/*   <Card title={'Producto 1'} category={"Categoria 1"} price={1000} /> */}
          {/* </div> */}
        </section>
      </div>
      <div className='w-full'>
        <section className='mx-auto flex max-w-[1000px] gap-14'>
          <div className='flex flex-col gap-10'>
            <CustomerStep
              icon={<Icon iconType='cartLarge' />}
              title={'Elijes lo que necesitas'}
              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
            <CustomerStep
              icon={<Icon iconType='whatsapp' />}
              title={'Nos confirmas por whatsapp'}
              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
          </div>
          <div className='flex flex-col justify-center'>
            <CustomerStep
              icon={<Icon iconType='boxTickLarge' />}
              title={'Preparamos tu pedido'}
              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
          </div>
          <div className='flex flex-col justify-between gap-10'>
            <CustomerStep
              icon={<Icon iconType='delivery' />}
              title={'Te lo llevamos a casa'}
              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
            <CustomerStep
              icon={<Icon iconType='shop' />}
              title={'Lo recojes en tienda'}
              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
