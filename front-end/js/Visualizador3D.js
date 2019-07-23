// TODO Arrumar a animação

class Visualizador3D {
   
   constructor(canvas){
      if (canvas === undefined)
         throw 'Necessãrio passar o canvas para o construtor';
      
      this._renderer = new THREE.WebGLRenderer({ canvas });
      this._configurarCamera();
      this._scene = new THREE.Scene();
   }

   _configurarCamera(){
      const fieldOfView = 75;
      const aspect = this.canvas.clientWidth / this.canvas.clientHeight;
      const near = 0.1;
      const far = 5;
      this._camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
      this._camera.position.z = 2;
   }

   adicionar(objeto3D){
      this._scene.add(objeto3D);
      this._renderizar();
   }

   _renderizar(){
      this._renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight, false);
      this._renderer.render(this._scene, this._camera);
   }

   get canvas(){
      return this._renderer.domElement;
   }

   // _atualizarCamera(){
   //    this._camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
   //    this._camera.updateProjectionMatrix();
   // }
}