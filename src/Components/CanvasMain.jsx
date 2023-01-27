import React from "react";
import CircleBubble from "./CircleBubble";
import { Canvas } from "@react-three/fiber";
import { BasicDepthPacking } from "three";

const CanvasMain = () => {
  return (
    <>
      <Canvas className="canvas">
        <CircleBubble />
      </Canvas>
      <h4>Digital Temple</h4>

      <div className="subBubbleHorizontal">
        {/* <div> */}
        <Canvas className="canvasRow">
          <CircleBubble />
        </Canvas>
        {/* <h4>Digital Gandhara</h4> */}
        {/* </div> */}

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

        {/* <div> */}
        <Canvas className="canvasRow">
          <CircleBubble />
        </Canvas>
        {/* <h4>China Builders</h4> */}
        {/* </div> */}
      </div>

      <Canvas className="canvas">
        <CircleBubble />
      </Canvas>
      <h4>Digital Luoyang</h4>
    </>
  );
};

export default CanvasMain;
