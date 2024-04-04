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
      <motion.div
        ref={ref}
        className="container lg:w-[65ch] w-full mx-auto my-20"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.8
          }
        }}
      >
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
          most developers could not build pixel perfect applications and I made
          it my mission to fill that gap and illuminate every team I join with
          my expertise.
        </p>
        Few projects i am absolutly proud of building
        <div>
          <li className="my-2">
            <a
              className="text-blue-500 underline"
              href="https://coollors.idoevergreen.me/"
            >
              Coollors
            </a>
            : The super fast color palettes generator!
          </li>

          <li className="my-2">
            <a
              className="text-blue-500 underline"
              href="https://snipxe.idoevergreen.me/create"
            >
              Snipxe
            </a>
            :A platform designed to seamlessly transform code snippets and text
            into visually captivating and shareable screenshots.
          </li>
        </div>
        I love sharing my knowledge and insights with others. Here are a few
        examples:
        <div>
          <li className="my-2">
            Started a series of playlist on youtube about working with{' '}
            <a
              className="text-blue-500 underline"
              href="https://www.youtube.com/playlist?list=PLtHuuoewcjnQqA-rG8x3PmuGNodX5NTQu"
            >
              GSAP
            </a>{' '}
            and{' '}
            <a
              className="text-blue-500 underline"
              href="https://www.youtube.com/playlist?list=PLtHuuoewcjnTcXKr-f1rZBr8hIDKUVJk9"
            >
              Framer Motion
            </a>
          </li>

          <li className="my-2">
            Gave a talk about typescript in google developer festival conference
            :{' '}
            <a
              className="text-blue-500 underline"
              href="https://docs.google.com/presentation/d/184Y_9UOLzyAb1ravWB9-rDmKZFUOJQRB0PxZXQYxjyM/edit?usp=sharing"
            >
              Link to slide
            </a>
          </li>
        </div>
        <div className="">
          I'm particularly excited about the opportunity to contribute to
          Tailwind Labs' mission of pushing the boundaries of UI design and
          engineering. I look forward to:
          <li className="my-2">
            Designing and building new components and templates for Tailwind UI,
            elevating the platform's capabilities.
          </li>
          <li className="my-2">
            Exploring upcoming platform features to prototype innovative
            solutions and enhance user experiences.
          </li>
          <li>
            Collaborating with the team to create internal design tools that
            streamline our workflow and boost productivity.
          </li>
        </div>
        <div className="my-10">
          <p>
            Curious about what my teammates have to say about working with me?
            Check out recommendations from across the globe:
            <a
              className="text-blue-500 underline"
              target="_blank"
              href="https://www.linkedin.com/in/ido-dickson-evergreen/details/recommendations/?detailScreenTabIndex=0"
            >
              Link
            </a>
          </p>
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
      </motion.div>
    </Layout>
  )
}
