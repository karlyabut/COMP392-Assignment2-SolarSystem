/// <reference path="../../typings/tsd.d.ts"/>

// Re-used code (COMP392-Assignment1- CubeMan) Last modified source: 24 days ago
// Author: Karl Eisen Yabut 

//Last modified by: Karl Eisen Yabut
//COMP392 - Advanced Graphics (Assignment 2 Solar System)
//Commits: February 19, 2016 (started project, added sun and planets and added zoom in and out control)
//         February 22, 2016 (added plane for background)
//         February 24, 2016 (added texture and have the zoom follow the planet with moon)
//****Note there will be a lot of commented out objects, tried something fun with it****

module objects {
    export class gameObject extends THREE.Mesh {
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        private _geometry: THREE.Geometry;
        private _material: THREE.Material;
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(geometry: THREE.Geometry, material: THREE.Material, x:number, y:number, z:number) {
            super(geometry, material);
            this._geometry = geometry;
            this._material = material;
            this.position.x = x;
            this.position.y = y;
            this.position.z = z;
            this.receiveShadow = true;
            this.castShadow = true;
        }
        
    }
}