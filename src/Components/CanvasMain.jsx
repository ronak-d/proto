import React from "react";
import CircleBubble from "./CircleBubble";
import { Canvas } from "@react-three/fiber";
import { BasicDepthPacking } from "three";

const CanvasMain = () => {
  return (
    <>
      <Canvas
        // style={{ border: "2px solid red" }}
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
        className="canvas"
      >
        <CircleBubble />
      </Canvas>
      <h4>Digital Temple</h4>

      <div className="subBubbleHorizontal">
        <Canvas className="canvasRow">
          <CircleBubble />
        </Canvas>
        {/* <h4>Digital Gandhara</h4> */}

        <h6
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //   border: "2px solid red",
          }}
        >
          Cognitive Mapping
        </h6>

        <Canvas className="canvasRow">
          <CircleBubble />
        </Canvas>
        {/* <h4>China Builders</h4> */}
      </div>

      <Canvas className="canvas">
        <CircleBubble />
      </Canvas>
      <h4>Digital Luoyang</h4>
    </>
  );
};

export default CanvasMain;

// single mesh from  circle bubble.jsx
// {
/* <mesh
        style={{ border: "2px solid red" }}
        onClick={(e) => console.log("clicked")}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[-20, 50, 20]} intensity={1} />
        <circleGeometry
          style={{ border: "2px solid red" }}
          attach="geometry"
          args={[3]}
        />
        <meshLambertMaterial attach="material" color="grey" />
      </mesh> */
// }
