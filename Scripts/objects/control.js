/// <reference path="../../typings/tsd.d.ts"/>
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