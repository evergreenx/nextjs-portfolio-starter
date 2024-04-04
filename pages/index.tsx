import { useEffect, useRef, useState } from 'react'
import { inView, motion, useInView } from 'framer-motion'
import { columsExpandVariant } from '../variant'
import Layout from '../components/layout'

export default function Page() {
  const [count, setCount] = useState(0)

  const ref = useRef(null)
  const isInView = useInView(ref)

  //   useEffect(() => {
  //     console.log('Element is in view: ', isInView)
  //   }, [isInView])

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
          Hi , i am Evergreen. i have a thing for design and code starting from
          way back in 2018 when i started my journey as an engineer . I realize
          most developers could not build pixel perfect applications and i took
          it upon myself to become that beckon of light in every team i find
          myself.
        </p>
        Few projects i am absolutly proud of building
        <ul>
          <li className='my-2'>
            <a className="text-blue-500 underline" href="https://coollors.idoevergreen.me/">
              Coollors
            </a>
            : The super fast color palettes generator!
          </li>

          <li className='my-2'>
            <a className="text-blue-500 underline" href="https://snipxe.idoevergreen.me/create">
              Snipxe
            </a>
            :A platform designed to seamlessly transform code snippets and text into visually captivating and shareable screenshots.
          </li>
        </ul>
        <div className="my-10">
          <p>
            I just thought of adding a link to recommdations from my previous
            team mate across the globe:{' '}
            <a
              className="text-blue-500 underline"
              target="_blank"
              href="https://www.linkedin.com/in/ido-dickson-evergreen/details/recommendations/?detailScreenTabIndex=0"
            >
              Link
            </a>
          </p>
          pu
        </div>
        <p className="my-20">
          You might wanna know how to do the page transition that was used in
          this page, you could check it out on my youtube 😀 :{' '}
          <a
            href="https://youtu.be/kWfiIvoHIsI?si=A1zO95-hbIXdiOL_"
            target="_blank"
            className="text-blue-500 underline"
          >
            YT
          </a>
        </p>
      </div>
    </Layout>
  )
}
