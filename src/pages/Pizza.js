import React from 'react'
import {PizzaList} from '../PizzaList'
import {motion} from 'framer-motion'
import PizzaItem from '../components/PizzaItem'
import '../styles/Pizza.css'

const Pizza = () => {
  return (
    <div>
        <motion.div
            className='pizza'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >

            <h1>Pizzáink</h1>
            <div className="pizzaList">
                {
                    PizzaList.map(pizza => {
                        return <PizzaItem name={pizza.name} image={pizza.image} price={pizza.price} />
                    })
                }
            </div>

        </motion.div>
    </div>
  )
}

export default Pizza