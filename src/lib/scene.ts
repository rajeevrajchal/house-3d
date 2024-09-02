import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { $FIX_ME } from "../types/fix_me";

let renderer: THREE.WebGLRenderer | null = null;
let controls: OrbitControls | null = null;

const h = window.innerHeight;
const w = window.innerWidth;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const light = new THREE.AmbientLight();
scene.add(light);

const directional = new THREE.DirectionalLight(0xffffff, 2);
directional.castShadow = true;
scene.add(directional);

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.set(12, 4, 0);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(30, 30);
scene.add(gridHelper);

const loader: $FIX_ME = new GLTFLoader();
loader.load(
  "src/assets/building/building.glb",
  (building: $FIX_ME) => {
    building.scene.scale.set(0.5, 0.5, 0.5);

    loader.load(
      "src/assets/building_assets/coffee_table_001.glb",
      (coffee_table: $FIX_ME) => {
        coffee_table.scene.scale.set(2, 2, 2);
        coffee_table.scene.position.set(5, 0, 5);
        building.scene.add(coffee_table.scene);
      }
    );

    loader.load(
      "src/assets/building_assets/scratching_post_001.glb",
      (post: $FIX_ME) => {
        post.scene.scale.set(2, 1.5, 2);
        post.scene.position.set(4, 0, -6);
        post.scene.rotation.y = -Math.PI / 2;
        building.scene.add(post.scene);
        loader.load(
          "src/assets/building_assets/lamp_001.glb",
          (lamp: $FIX_ME) => {
            lamp.scene.position.set(-0.1, 1.2, 0);
            post.scene.add(lamp.scene);
          },
          (xhr: $FIX_ME) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          }
        );
      },
      (xhr: $FIX_ME) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      }
    );

    scene.add(building.scene);
    animate();
  },
  (xhr: $FIX_ME) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  }
);

const animate = () => {
  requestAnimationFrame(animate);
  if (renderer) {
    renderer.render(scene, camera);
  }
  if (controls) {
    controls.update();
  }
};

const resize = () => {
  if (renderer && camera) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
};

export const createScene = (el: HTMLCanvasElement) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  controls = new OrbitControls(camera, renderer?.domElement);

  resize();
  animate();
};

window.addEventListener("resize", resize);
