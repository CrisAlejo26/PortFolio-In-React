import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import Loader from "../Loader"

export const Ball = (props: any)  => {

  const [texture] = useTexture([props.imgUrl])
  const ref: any = useRef()

  useFrame(() => {
    if(ref.current) {
      // rotates the object
      ref.current.rotation.x += 0.01;
    }
  })

  return (
    <Float speed={1.75} rotationIntensity={1}
    floatIntensity={2} key={undefined} onUpdate={undefined} id={undefined} clear={undefined} add={undefined} copy={undefined} visible={undefined} name={undefined} type={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} attach={undefined} args={undefined} isGroup={undefined} uuid={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} translateOnAxis={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color = "#fff8eb"
          polygonOffset
          polygonOffsetFactor = {5}
          flatShading
        />
        <Decal 
          map = {texture}
          rotation = {[2 * Math.PI, 0, 6.25]}
          position = {[0, 0, 1]}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}: any) => {

  return (
    <Canvas
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback = {<Loader />}>
        <OrbitControls 
          enableZoom={false}
        />
        <Ball imgUrl = { icon } />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas