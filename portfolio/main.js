import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Stats from 'three/examples/jsm/libs/stats.module'

//scene
const scene = new THREE.Scene()
// scene.add(new THREE.AxesHelper(5))

//light
const light = new THREE.SpotLight()
light.position.set(5, 5, 5)
scene.add(light)

//camera
const camera = new THREE.PerspectiveCamera(
  3,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 2

//render
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//controls
// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true
// controls.autoRotate = true;
// controls.autoRotateSpeed = 2;


//loading model
let myObj
const loader = new GLTFLoader()
loader.load('models/Potato.glb',  function (gltf) {
  scene.add(gltf.scene);
  myObj = gltf.scene
});
    

//reasizing window
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

// const stats = Stats()
// document.body.appendChild(stats.dom)

function animate() {
    requestAnimationFrame(animate)
    if(myObj)
      myObj.rotation.x += 0.01;
      myObj.rotation.y += 0.01;

    // controls.update()
    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()