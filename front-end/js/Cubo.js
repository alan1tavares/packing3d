class Cubo {
   constructor(dimensao, posicao) {
      const geometry = new THREE.BoxGeometry(dimensao.largura,
         dimensao.altura, dimensao.profundidade);
      const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
      const cubo = new THREE.Mesh(geometry, material);

      cubo.position.x = posicao === undefined ? 0 : posicao.x;
      cubo.position.y = posicao === undefined ? 0 : posicao.y;
      cubo.position.z = posicao === undefined ? 0 : posicao.z;

       return cubo;
   }
}