// MAIN GAME FILE
// Re-used code (COMP392-Lesson01-Part1) Last modified source: 18 days ago
// Author: Tom Tsiliopoulos 

//Last modified by: Karl Eisen Yabut
//COMP392 - Advanced Graphics (Assignment 1 Cube Man)
//Last commit: January 28, 2016 (completed project) / January 31, 2016 (added internal document)
//****Note there will be a lot of commented out objects, tried something fun with it****

import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Mesh = THREE.Mesh;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
//Custom Game Objects
import gameObject = objects.gameObject;

//variables
var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var axes: AxisHelper;
var cube: Mesh;
var plane: Mesh;
var sphere: Mesh;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;

var sun: gameObject;
var planets: objects.planet[];
var moons: objects.planet[];
var ringMesh: Mesh;
var zoom: boolean[];


//--------------------
var plane: Mesh;
var sphere: Mesh;
var spotLight: SpotLight;
var pointLight: PointLight;
var control: Control;
var gui: GUI;
var stats:Stats;
var step:number = 0;

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
	spotLight.position.set (-40, 60, -10);
	spotLight.castShadow = true;
	scene.add(spotLight);
	console.log("Added Spot Light to Scene");
    
    sun = new gameObject(
        new THREE.SphereGeometry(6, 32, 32),
        new THREE.MeshLambertMaterial({map:  THREE.ImageUtils.loadTexture('images/lol.png')}),
        0, 0, 0
    );
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

function onResize():void {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function addControl(controlObject: Control):void {
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
function gameLoop():void {
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
function setupRenderer():void {
	renderer = new Renderer();
	renderer.setClearColor(0xEEEEEE, 1.0);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapEnabled = true;
	console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera():void {
	camera = new PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
	camera.position.x =-30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);
	console.log("Finished setting up Camera...");
}
