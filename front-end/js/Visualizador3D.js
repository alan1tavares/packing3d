class Visualizador3D {
   
   constructor(canvas){
      if (canvas === undefined)
         throw 'Necessãrio passar o canvas para o construtor';
      
      this._configurarRender(canvas);
      this._configurarCamera();
      this._configurarCena();
      
   }

   _configurarRender(canvas){
      this._renderer = new THREE.WebGLRenderer({ canvas });
      this._renderer.setClearColor(0xffffff);
      this._renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
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

   definirAlturaLarguraCamera(largura, altura){
      this._renderer.setSize(largura, altura, false);
      this._camera.aspect = largura / altura;
      this._camera.updateProjectionMatrix();
   }

   adicionar(objeto3D){
      this._scene.add(objeto3D);
      this.renderizar();
   }

   renderizar(){
      this._renderer.render(this._scene, this._camera);
   }

   get canvas(){
      return this._renderer.domElement;
   }

   get camera(){
      return this._camera;
   }
}