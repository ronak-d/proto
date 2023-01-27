import React from "react";

const CircleBubble = () => {
  return (
    <>
      <mesh>
        <ambientLight intensity={0.5} />
        {/* <directionalLight position={[-20, 50, 20]} intensity={1} /> */}
        <circleGeometry attach="geometry" args={[3]} />
        <meshLambertMaterial attach="material" color="grey" />
      </mesh>
    </>
  );
};
export default CircleBubble;
