/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        // PRIVATE INSTANCE VARIABLES
        private _planeWidth: number;
        private _planeHeight: number;
        
        // PUBLIC INSTANCE VARIABLES
        public rotationSpeedX: number;
        public rotationSpeedY: number;
        public rotationSpeedZ: number;
        public numberOfObjects: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeedX: number, rotationSpeedY: number, rotationSpeedZ: number, planeWidth: number, planeHeight: number) {
            this.rotationSpeedX = rotationSpeedX;
            this.rotationSpeedY = rotationSpeedY;
            this.rotationSpeedZ = rotationSpeedZ;
            this.numberOfObjects = scene.children.length;
            this._planeWidth = planeWidth;
            this._planeHeight = planeHeight;
        }
        
         public zoomIn(): void {
             camera.position.set(planet2.position.x - 25, planet2.position.y + 25, planet2.position.z + 25);
             camera.lookAt(planet2.position);
             zoom = true;
         }
        
         public zoomOut(): void {
             camera.position.set(-100, 100, 100);
             camera.lookAt(scene.position);
             zoom = false;
         }
    }
}