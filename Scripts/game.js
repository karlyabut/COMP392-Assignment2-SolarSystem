/// <reference path="reference.ts"/>
// MAIN GAME FILE
// Re-used code (COMP392-Assignment1- CubeMan) Last modified source: 24 days ago
// Author: Karl Eisen Yabut 
//Last modified by: Karl Eisen Yabut
//COMP392 - Advanced Graphics (Assignment 2 Solar System)
//Commits: February 19, 2016 (started project, added sun and planets and added zoom in and out control)
//         February 22, 2016 (added plane for background)
//         February 24, 2016 (added texture and have the zoom follow the planet with moon)
//****Note there will be a lot of commented out objects, tried something fun with it****
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Mesh = THREE.Mesh;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
//Custom Game Objects
var gameObject = objects.gameObject;
var planet = objects.planet;
//variables
var scene;
var renderer;
var camera;
var axes;
var cube;
var plane;
var sphere;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
var sun;
var planet1;
var planet2;
var planet3;
var planet4;
var planet5;
var moon1;
var moon2;
var zoom;
//--------------------
var plane;
var sphere;
var spotLight;
var pointLight;
var control;
var gui;
var stats;
var step = 0;
var planeGeometry;
var planeMaterial;
var spehereMaterial;
var cubeGeometry;
var cubeMaterial;
var texture;
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    // add an axis helper to the scene
    axes = new AxisHelper(20);
    scene.add(axes);
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x0c0c0c);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-15, 10, 15);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added Spot Light to Scene");
    // add controls
    gui = new GUI();
    control = new Control(0.01, 0.01, 0.01, 60, 40);
    addControl(control);
    // Add framerate stats
    addStatsObject();
    planeGeometry = new PlaneGeometry(1500, 700, 1500);
    planeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture('images/space.png') });
    plane = new Mesh(planeGeometry, planeMaterial);
    //plane.receiveShadow = true;
    plane.rotation.x = -0.001953125;
    plane.position.x = 200;
    plane.rotation.y = -0.77;
    plane.position.y = -250;
    //plane.rotation.z = -0.5;
    plane.position.z = -200;
    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    //****SKYBOX ATTEMPT
    // cubeGeometry = new CubeGeometry(5000, 5000, 5000);
    // //cubeMaterial = new LambertMaterial({color:0x000FF});
    // //added texture
    // cubeMaterial = new THREE.MeshPhongMaterial(
    //     {map: THREE.ImageUtils.loadTexture('images/lol.png')}); 
    // skybox = new Mesh(cubeGeometry, cubeMaterial);
    // skybox.castShadow = true;
    // scene.add(skybox);
    // console.log("added skybox")
    sun = new gameObject(new THREE.SphereGeometry(8, 32, 32), new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/sun.png') }), 0, 0, 0);
    scene.add(sun);
    console.log("added sun");
    var sunLight = new THREE.PointLight(0xffffff, 2, 100);
    sun.add(sunLight);
    // Planets
    planet1 = new planet(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/earth.png') }), 10, 10, 10, -0.05, 25, sun.position);
    scene.add(planet1);
    console.log("added planet");
    // Planets
    planet2 = new planet(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/mercury.png') }), 15, 15, 15, -0.015, 35, sun.position);
    scene.add(planet2);
    console.log("added planet");
    // Planets
    planet3 = new planet(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/venus.png') }), 20, 20, 20, -0.005, 45, sun.position);
    scene.add(planet3);
    console.log("added planet");
    // Planets
    planet4 = new planet(new THREE.SphereGeometry(4, 32, 32), new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/jupiter.png') }), 25, 25, 25, -0.010, 55, sun.position);
    scene.add(planet4);
    console.log("added planet");
    // Planets
    planet5 = new planet(new THREE.SphereGeometry(3, 32, 32), new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/mars.png') }), 30, 30, 30, -0.020, 65, sun.position);
    scene.add(planet5);
    console.log("added planet");
    moon1 = new planet(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/moon.png') }), 30, 30, 30, -0.020, 5, planet4.position);
    scene.add(moon1);
    console.log("added planet");
    moon2 = new planet(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/moon.png') }), 30, 30, 30, 0.020, 5, planet2.position);
    scene.add(moon2);
    console.log("added planet");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function addControl(controlObject) {
    gui.add(controlObject, "zoomIn");
    gui.add(controlObject, "zoomOut");
}
function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
// Setup main game loop
function gameLoop() {
    stats.update();
    sun.rotation.x += 0.01;
    sun.rotation.y += 0.01;
    planet1.update();
    planet2.update();
    planet3.update();
    planet4.update();
    planet5.update();
    moon1.update();
    moon2.update();
    if (zoom) {
        control.zoomIn();
    }
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -100;
    camera.position.y = 100;
    camera.position.z = 100;
    camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map