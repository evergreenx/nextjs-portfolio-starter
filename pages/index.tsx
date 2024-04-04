import { useEffect, useRef, useState } from 'react'
import { inView, motion, useInView } from 'framer-motion'
import { columsExpandVariant } from '../variant'
import Layout from '../components/layout'

export default function Page() {
  const [count, setCount] = useState(0)

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])

  return (
    <Layout>
      <div ref={ref} className="container lg:w-[65ch] w-full mx-auto my-20">
        <div className="header flex items-center justify-between">
          <h1 className="text-2xl">Ido Evergreen</h1>

          <div className="socials flex items-center space-x-5">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ido-dickson-evergreen/"
            >
              Li
            </a>

            <a target="_blank" href="https://github.com/evergreenx">
              Gh
            </a>

            <a target="_blank" href="https://twitter.com/IdoEvergreen">
              X
            </a>
          </div>
        </div>
        <p className="text-black font-medium my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          assumenda aliquid nemo nobis aliquam quasi, sunt minima dolor
          explicabo ullam? Natus quos harum deleniti rerum corrupti quaerat
          officia sit sunt.
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        pariatur amet ullam? Suscipit, cumque eius ea tenetur illo reprehenderit
        ullam, quisquam iste sed aut recusandae fugiat nesciunt impedit neque
        in? Et molestias exercitationem repellat, neque maiores dolores
        voluptates quis? Ipsam ad iste possimus error assumenda, optio voluptate
        adipisci illo dignissimos harum debitis nobis tempore quam saepe maiores
        <p className="my-20">
          if u might be intrested in the page transition that was used in the
          page , you could check it out on youtube 😀 :{' '}
          <a
            href="https://youtu.be/kWfiIvoHIsI?si=A1zO95-hbIXdiOL_"
            target="_blank"
          >
            YT
          </a>
        </p>
      </div>
    </Layout>
  )
}
