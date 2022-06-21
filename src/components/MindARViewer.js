import React, { useRef, useEffect } from "react";
import Glasses from "mind-ar/examples/face-tracking/assets/glasses/scene.gltf";

const MindARViewer = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-face-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
      console.log("start");
    });
    return () => {
      arSystem.stop();
      console.log("stop");
    };
  }, []);

  return (
    <a-scene
      ref={sceneRef}
      mindar-face
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <a-asset-item id="glassesModel" src={Glasses}></a-asset-item>
        <a-asset-item
          id="headModel"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/face-tracking/assets/sparkar/headOccluder.glb"
        ></a-asset-item>
      </a-assets>

      <a-camera active="false" position="0 0 0"></a-camera>
      <a-entity mindar-face-target="anchorIndex: 168">
        <a-gltf-model
          mindar-face-occluder
          position="0 0 -0.2"
          rotation="0 0 0"
          scale="0.08 0.05 0.05"
          src="#headModel"
        ></a-gltf-model>
      </a-entity>
      <a-entity mindar-face-target="anchorIndex: 168">
        <a-gltf-model
          rotation="0 0 0"
          position="-0.01 0 -0.5"
          scale="0.6 0.6 0.6"
          src="#glassesModel"
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default MindARViewer;
