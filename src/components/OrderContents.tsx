import { formatCurrency } from '../helpers'
import type { MenuItem, OrderItem } from '../types'

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id:MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
        <h1 className=" font-black text-4xl">Consumo</h1>
        <div className=' space-y-3 mt-10'>
            {order.length === 0 ?
             <p className=" font-bold text-center">No hay elementos en la orden</p>
             :
              order.map(item => (
              <div key={item.id} className=' flex justify-between border-t items-center border-gray-200 py-5 last-of-type:border-b'>
                <div className=''>
                  <p className=' text-l font-medium '>{item.name} - {formatCurrency(item.price)}</p>
                  <p className=' text-l font-medium'>Cantidad - {item.quantity}</p>
                  <p className=' font-black '>{formatCurrency(item.price * item.quantity)}</p>
                </div>
                <button 
                onClick={()=> removeItem(item.id)}
                  className=' bg-red-600 h-8 w-8 rounded-full text-white'>X</button>
              </div>
              )
            )}
        </div>
    </div>
  )
}
