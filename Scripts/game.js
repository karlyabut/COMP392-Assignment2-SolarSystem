// MAIN GAME FILE
// Re-used code (COMP392-Lesson01-Part1) Last modified source: 18 days ago
// Author: Tom Tsiliopoulos 
//Last modified by: Karl Eisen Yabut
//COMP392 - Advanced Graphics (Assignment 1 Cube Man)
//Last commit: January 28, 2016 (completed project) / January 31, 2016 (added internal document)
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
var planets;
var moons;
var ringMesh;
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
var texture;
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    //adds a fog
    scene.fog = new THREE.Fog(0xffffff, 0.015, 100);
    // add an axis helper to the scene
    axes = new AxisHelper(20);
    scene.add(axes);
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added Spot Light to Scene");
    sun = new gameObject(new THREE.SphereGeometry(6, 32, 32), new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/lol.png') }), 0, 0, 0);
    scene.add(sun);
    // add controls
    gui = new GUI();
    control = new Control(0.01, 0.01, 0.01, 60, 40);
    addControl(control);
    // Add framerate stats
    addStatsObject();
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
    gui.add(controlObject, "zoomPlanet1");
    gui.add(controlObject, "zoomPlanet2");
    gui.add(controlObject, "zoomPlanet3");
    gui.add(controlObject, "zoomPlanet4");
    gui.add(controlObject, "zoomPlanet5");
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
    // // Update all planet and moon positions
    // for (var i = 0; i < planets.length; i++) {
    //     planets[i].update();
    // }
    // for (var i = 0; i < moons.length; i++) {
    //     moons[i].update();
    // }
    // // Follow planet with moon when zoomed in
    // for (var i = 0; i < zoom.length; i++) {
    //      if (zoom[i]) {
    //         control.zoomIn(i);
    //     }
    // }
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
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map