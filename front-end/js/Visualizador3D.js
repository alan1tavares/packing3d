// TODO Arrumar a animação

class Visualizador3D {
   
   constructor(canvas){
      if (canvas === undefined)
         throw 'Necessãrio passar o canvas para o construtor';
      
      this._configurarRender();
      this._configurarCamera();
      this._configurarCena();
      
   }

   _configurarRender(){
      this._renderer = new THREE.WebGLRenderer({ canvas });
      this._renderer.setClearColor(0xffffff);
      this._renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight, false);
   }

   _configurarCamera(){
      const fieldOfView = 75;
      const aspect = this.canvas.clientWidth / this.canvas.clientHeight;
      const near = 0.1;
      const far = 5;
      this._camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
      this._camera.position.z = 2;
   }

   _configurarCena(){
      this._scene = new THREE.Scene();
      const light = new THREE.DirectionalLight();
      this._scene.add(light);
   }

   adicionar(objeto3D){
      this._scene.add(objeto3D);
      this._renderizar();
   }

   _renderizar(){
      this._renderer.render(this._scene, this._camera);
   }

   get canvas(){
      return this._renderer.domElement;
   }
}