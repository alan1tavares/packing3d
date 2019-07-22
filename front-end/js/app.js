// TODO Definir a atura e lagura do visualizador 3D e passar essas dimensões
// para o render.'
var renderer;
function cuboRodando() {
      const canvas = document.querySelector('#visualizador3d');
      renderer = new THREE.WebGLRenderer({ canvas });


      const fieldOfView = 75;
      const aspect = 2;
      const near = 0.1;
      const far = 5;
      const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
      camera.position.z = 2;

      const scene = new THREE.Scene();

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // renderer.render(scene, camera);
      // renderer.setSize(width, height);

      var animate = function () {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            
            // renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            renderer.render(scene, camera);

            requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
}

// cuboRodando();