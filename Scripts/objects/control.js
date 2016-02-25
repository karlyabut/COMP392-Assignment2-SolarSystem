/// <reference path="../../typings/tsd.d.ts"/>
// Re-used code (COMP392-Assignment1- CubeMan) Last modified source: 24 days ago
// Author: Karl Eisen Yabut 
//Last modified by: Karl Eisen Yabut
//COMP392 - Advanced Graphics (Assignment 2 Solar System)
//Commits: February 19, 2016 (started project, added sun and planets and added zoom in and out control)
//         February 22, 2016 (added plane for background)
//         February 24, 2016 (added texture and have the zoom follow the planet with moon)
//****Note there will be a lot of commented out objects, tried something fun with it****
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeedX, rotationSpeedY, rotationSpeedZ, planeWidth, planeHeight) {
            this.rotationSpeedX = rotationSpeedX;
            this.rotationSpeedY = rotationSpeedY;
            this.rotationSpeedZ = rotationSpeedZ;
            this.numberOfObjects = scene.children.length;
            this._planeWidth = planeWidth;
            this._planeHeight = planeHeight;
        }
        Control.prototype.zoomIn = function () {
            camera.position.set(planet2.position.x - 25, planet2.position.y + 25, planet2.position.z + 25);
            camera.lookAt(planet2.position);
            zoom = true;
        };
        Control.prototype.zoomOut = function () {
            camera.position.set(-100, 100, 100);
            camera.lookAt(scene.position);
            zoom = false;
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map