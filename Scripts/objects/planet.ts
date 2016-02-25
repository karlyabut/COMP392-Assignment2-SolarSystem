/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="gameobject.ts"/>

// Re-used code (COMP392-Assignment1- CubeMan) Last modified source: 24 days ago
// Author: Karl Eisen Yabut 

//Last modified by: Karl Eisen Yabut
//COMP392 - Advanced Graphics (Assignment 2 Solar System)
//Commits: February 19, 2016 (started project, added sun and planets and added zoom in and out control)
//         February 22, 2016 (added plane for background)
//         February 24, 2016 (added texture and have the zoom follow the planet with moon)
//****Note there will be a lot of commented out objects, tried something fun with it****

module objects {
    export class planet extends objects.gameObject {
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        private _rotationSpeed: number;
        private _distance: number;
        private _rotation: number;
        
        private _position:Vector3;
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(geometry: THREE.Geometry, material: THREE.Material, x:number, y:number, z:number, rotationSpeed:number, distance:number, parentPosition:Vector3) {
            super(geometry, material, x, y, z);
            this._rotationSpeed = rotationSpeed;
            this._distance = distance;
            this._rotation = 0;
            this._position = parentPosition;
            
        }
        
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.rotation.x += 0.025;
            this.rotation.y += 0.025;
            // this.rotation.z += 0.025;
                        
            this._rotation += this._rotationSpeed;
            var xPos = Math.cos(this._rotation);
            var zPos = Math.sin(this._rotation);
            
            this.position.set((this._position.x + xPos * this._distance), 0, (this._position.z + zPos * this._distance));

        }
    }
}