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
        //  public zoomPlanet1(): void {
        //     for (var i = 0; i < zoom.length; i++) {
        //         zoom[i] = false;
        //     }
        //     this.zoomIn(0);
        //     zoom[0] = true;
        // }
        // public zoomPlanet2(): void {
        //     for (var i = 0; i < zoom.length; i++) {
        //         zoom[i] = false;
        //     }
        //     this.zoomIn(1);
        //     zoom[1] = true;
        // }
        // public zoomPlanet3(): void {
        //     for (var i = 0; i < zoom.length; i++) {
        //         zoom[i] = false;
        //     }
        //     this.zoomIn(2);
        //     zoom[2] = true;
        // }
        // public zoomPlanet4(): void {
        //     for (var i = 0; i < zoom.length; i++) {
        //         zoom[i] = false;
        //     }
        //     this.zoomIn(3);
        //     zoom[3] = true;
        // }
        // public zoomPlanet5(): void {
        //     for (var i = 0; i < zoom.length; i++) {
        //         zoom[i] = false;
        //     }
        //     this.zoomIn(4);
        //     zoom[4] = true;
        // }
        // public zoomIn(num: number): void {
        //     camera.position.set(planets[num].position.x - 25, planets[num].position.y + 25, planets[num].position.z + 25);
        //     camera.lookAt(planets[num].position);
        // }
        // public zoomOut(): void {
        //     camera.position.set(-110, 110, 110);
        //     camera.lookAt(scene.position);
        //     for (var i = 0; i < zoom.length; i++) {
        //         zoom[i] = false;   
        //     } 
        // }
        // show scene objects
        Control.prototype.outputObjects = function () {
            console.log(scene.children);
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map