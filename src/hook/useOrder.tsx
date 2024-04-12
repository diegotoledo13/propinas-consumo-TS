import {useState} from 'react'
import type { MenuItem, OrderItem } from '../types'

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const addItem = (item:MenuItem) => {
        const itemExist = order.find((orderItem) => orderItem.id === item.id)
        if(itemExist){
            const upDateOrder = order.map((orderItem) => (orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem))
            setOrder(upDateOrder)
        } else{            
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
     }
    return {
        addItem,
        order
    }
}
