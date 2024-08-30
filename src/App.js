import "./index.css";
import {
  OrbitControls,
  Environment,
  Text,
  PresentationControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import fontOne from "./assets/fonts/Inter-Bold.ttf";
import fontTwo from "./assets/fonts/Inter-Thin.ttf";
import { useState } from "react";

function App() {
  const object = useRef();
  const object2 = useRef();

  const [status, setStatus] = useState(0.02);

  useFrame(() => {
    object.current.rotation.x += status;
    object.current.rotation.y += 0.02;
    // object2.current.rotation.x += -0.02;
  });

  let update = () => {
    setStatus(status + 0.01);
  };

  console.log(object);
  return (
    <>
      {/* <OrbitControls /> */}
      <Environment preset="city" />

      {/* <mesh ref={object}>
        <torusGeometry />
        <meshNormalMaterial />
      </mesh>

      <mesh ref={object2}>
        <torusGeometry />
        <meshNormalMaterial />
      </mesh> */}

      <Text position={[-1, 1.8, 2]} color="black" fontSize="0.3" font={fontOne}>
        point
      </Text>

      <Text
        position={[1.5, 2.35, 1]}
        fontSize={0.1}
        font={fontTwo}
        color="black"
      >
        exhibition / contact / works
      </Text>

      <PresentationControls
        snap={true}
        speed={2}
        config={{ mass: 5, tension: 100, friction: 10 }}
      >
        <mesh scale={0.5} ref={object} onClick={update}>
          <torusGeometry args={[2, 2, 6]} />
          <meshNormalMaterial />
        </mesh>
      </PresentationControls>
    </>
  );
}

export default App;
