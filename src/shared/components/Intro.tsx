// test
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'

export default function Intro() {
  return (
    <div className="absolute top-0 left-0 flex items-center w-full h-[100vh] pl-[80px]">
      <ul className="flex flex-col gap-[10px] w-[90%]">
        {indexs.map(({ subTitle, title }) => (
          <li key={title} className="flex flex-col gap-[10px]">
            <span>{subTitle}</span>
            <a
              href="#self"
              className="flex w-full border-t-[2px] text-[100px] hover:font-diphylleia hover-text-shadow hover:text-white"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const indexs = [
  { subTitle: 'intro', title: 'first anniversary' },
  { subTitle: 'introduction', title: 'steadio!' },
  {
    subTitle: 'vote',
    title: 'the future of steadio',
  },
  { subTitle: 'guest\nbook', title: 'congratulate me.' },
]

function ThreeBG() {
  //===================================================== canvas
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true })
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
  camera.position.z = 1
  camera.position.y = 0.5

  //===================================================== lights
  const light = new THREE.DirectionalLight(0xefefff, 3)
  light.position.set(1, 1, 1).normalize()
  scene.add(light)

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

  let mixer
  let model
  loader.load('/candy.glb', function (gltf) {
    // gltf.scene.traverse( function( node ) {
    //    if ( node instanceof THREE.Mesh ) {
    //      node.castShadow = true;
    //      node.material.side = THREE.DoubleSide;
    //    }
    //  });

    model = gltf.scene

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
