// test
import { useState } from 'react'

import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import { NAVIGATION_LIST } from '@/home/constants/navigation'
import { useCursorItem } from '@/shared/hooks/useCursorItem'

interface Props {
  id: string
}

export default function Intro({ id }: Props) {
  const { ref, cursorVariant, mousePosition, setCursorVariant } =
    useCursorItem()
  const [hoverItem, setHoverItem] = useState<React.ReactNode>()
  const [isMoving, setIsMoving] = useState(false)

  const variants = {
    default: {
      opacity: 0,
      width: 300,
      height: 400,
      x: mousePosition.x,
      y: mousePosition.y,
    },
    linkItem: {
      opacity: 1,
      width: 'auto',
      height: 'auto',
      fontSize: '18px',
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      color: '#fff',
    },
  }

  function handleItemEnter(hoverItem: React.ReactNode) {
    setCursorVariant('linkItem')
    setHoverItem(hoverItem)
  }

  function handleItemLeave() {
    setCursorVariant('default')
    setHoverItem('')
  }

  function handleClickButton(targetId: string) {
    setIsMoving(true)
    handleItemLeave()
    window.location.href = `#${targetId}`
    setTimeout(() => {
      setIsMoving(false)
    }, 1000)
  }

  return (
    <Container
      ref={ref}
      id={id}
      className="absolute top-0 left-0 flex items-center w-full h-[100vh] pl-[80px]"
    >
      <motion.div
        variants={variants}
        className="dol-cursor max-w-[300px]"
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <span className="cursorText">{hoverItem}</span>
      </motion.div>
      <ul className="flex flex-col gap-[10px] w-[90%]">
        {NAVIGATION_LIST.map(({ subTitle, title, targetId, imgSrc }) => (
          <li key={title} className="flex flex-col gap-[10px]">
            <span>{subTitle}</span>
            <a
              href={`#${targetId}`}
              className="flex w-full border-t-[1px] border-black text-[100px] hover:font-diphylleia hover-text-shadow hover:text-white"
              onMouseEnter={() => {
                if (isMoving) return
                handleItemEnter(
                  <div className="shadow-2xl">
                    <img className="w-full" src={imgSrc} alt="" />
                  </div>,
                )
              }}
              onMouseLeave={handleItemLeave}
              onClick={() => handleClickButton(targetId)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  .dol-cursor {
    position: fixed;
    z-index: 100;
    display: flex;
    flex-flow: row;
    align-content: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 0px;
    width: 0px;
    border-radius: 200px;
    pointer-events: none;
  }
`

function ThreeBG() {
  //===================================================== canvas
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.prepend(renderer.domElement)

  //===================================================== scene
  const scene = new THREE.Scene()

  //===================================================== camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  )
  camera.position.z = 20
  camera.position.y = 5

  //===================================================== lights
  const light = new THREE.DirectionalLight(0xefefff, 1)
  const light2 = new THREE.DirectionalLight(0xefefff, 1)
  light.position.set(1, 1, 1).normalize()
  light.position.set(1, 1, 1).normalize()
  scene.add(light)
  scene.add(light2)

  //===================================================== resize
  window.addEventListener('resize', function () {
    const width = window.innerWidth
    const height = window.innerHeight
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  })

  //===================================================== model
  const loader = new GLTFLoader()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mixer: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let model: any
  loader.load('/cake.glb', function (gltf) {
    // gltf.scene.traverse( function( node ) {
    //    if ( node instanceof THREE.Mesh ) {
    //      node.castShadow = true;
    //      node.material.side = THREE.DoubleSide;
    //    }
    //  });

    model = gltf.scene
    model.rotation.x = 0.3

    scene.add(model)

    // console.log(gltf.animations); //shows all animations imported into the dopesheet in blender

    // mixer = new THREE.AnimationMixer(model);
  })

  //===================================================== animate
  const clock = new THREE.Clock()

  function render() {
    requestAnimationFrame(render)
    const delta = clock.getDelta()

    if (mixer != null) {
      mixer.update(delta)
    }

    if (model) {
      model.rotation.y += 0.0022
    }

    renderer.render(scene, camera)
  }

  render()
}

ThreeBG()
