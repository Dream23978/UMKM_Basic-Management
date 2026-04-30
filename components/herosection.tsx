'use client'
import { motion } from "motion/react"
const Herosection = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3,repeatType:'reverse'}}>
        <div className='flex justify-center gap-4 ' id="Tentang">
            <h1 className='text-orange-400 text-4xl'> Mie Arok </h1>
                <h1  className='text-gray-400 text-2xl mt-2'> Bang Hen </h1>
                        </div>
                            </motion.div>
  )
}


const Deskripsi = () => {
    return (
      null
    )
}
export default Herosection;
export {Deskripsi};