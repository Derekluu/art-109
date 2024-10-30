import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js';
let camera, scene, renderer, cube, capsule, controls;

function init() {
	scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set (1,1,5);
    scene.add(light);
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
    controls = new OrbitControls(camera, renderer.domElement);


	const geometry = new THREE.BoxGeometry(2, 2, 2);

	// Create material with color
	//const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

	const texture = new THREE.TextureLoader().load('textures/checker.jpg');
	const material = new THREE.MeshBasicMaterial({ map: texture });
	cube = new THREE.Mesh(geometry, material);


    const capsulegeometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
    const capsulematerial = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 

    capsule = new THREE.Mesh( capsulegeometry, capsulematerial );
	scene.add(cube);
    cube.position.x = -2.5;

    scene.add(capsule);
    capsule.position.x = 2.5;

    const loader = new GLTFLoader();
    loader.load(
        'assetsheart/Heart.gltf',
        function (gltf) {
            const heart = gltf.scene;
            scene.add(heart);
            heart.position.set(0, 0, 0);
        },
    );


	camera.position.z = 10;
}

// Draw the scene every time the screen is refreshed
function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	capsule.rotation.x += 0.02;
	capsule.rotation.y += 0.02;
	renderer.render(scene, camera);
}

function onWindowResize() {
	// Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;
	// After making changes to aspect
	camera.updateProjectionMatrix();
	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
