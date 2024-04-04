import { useState } from 'react'
import { motion } from 'framer-motion'
import { columsExpandVariant } from '../variant'

export default function Layout({children}) {


  const numOfCols = 6

  return (
    <>
      <motion.div className="w-screen h-screen fixed flex flex-col top-0 left-0 pointer-events-none z-20">
        {[...Array(numOfCols)].map((i, index) => {
          return (
            <motion.div
              custom={index}
              variants={columsExpandVariant}
              className="bg-black relative w-full h-full"
              initial={'initial'}
              animate={'enter'}
              exit={'exit'}
            ></motion.div>
          )
        })}
      </motion.div>

      {children}
    </>
  )
}
