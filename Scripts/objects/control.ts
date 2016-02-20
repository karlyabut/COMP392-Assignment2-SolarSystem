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
        
         public zoomIn(): void {
             camera.position.set(planet2.position.x - 25, planet2.position.y + 25, planet2.position.z + 25);
             camera.lookAt(planet2.position);
         }
        
         public zoomOut(): void {
             camera.position.set(-110, 110, 110);
             camera.lookAt(scene.position);
             
         }
    }
}