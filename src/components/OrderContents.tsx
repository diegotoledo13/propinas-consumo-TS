import { formatCurrency } from '../helpers'
import type { OrderItem } from '../types'

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
        <h1 className=" font-black text-4xl">Consumo</h1>
        <div className=' space-y-3 mt-5'>
            {order.length === 0 ?
             <p className=" font-bold text-center">No hay elementos en la orden</p>
             :
              order.map(item => (
              <div key={item.id}>
                <p className=' text-l font-medium '>{item.name} - {formatCurrency(item.price)}</p>
                <p className=' text-l font-medium'>Cantidad - {item.quantity}</p>
                <p className=' font-black '>{formatCurrency(item.price * item.quantity)}</p>
                <button>X</button>
              </div>
              )
            )}
        </div>
    </div>
  )
}