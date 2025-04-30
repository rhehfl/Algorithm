const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.nodes = new Map(); // 기존 Tree 클래스에 노드 저장소 추가
  }

  insert(value, left = null, right = null) {
    //A null null
    // B null null
    const node = this.getOrCreate(value);
    //left : B null null
    node.left = this.getOrCreate(left);
    node.right = this.getOrCreate(right);
    return node;
  }

  getOrCreate(value) {
    //A
    if (value === '.' || value == null) return null;
    if (!this.nodes.has(value)) {
      //A null null 추가
      this.nodes.set(value, new Node(value));
    }
    return this.nodes.get(value);
  }

  getRoot() {
    return this.nodes.get('A'); // 루트는 항상 'A'라고 가정
  }
  inorder(node) {
    if (!node) return '';
    return this.inorder(node.left) + node.value + this.inorder(node.right);
  }
  preorder(node) {
    if (!node) return '';
    return node.value + this.preorder(node.left) + this.preorder(node.right);
  }

  postOrder(node) {
    if (!node) return '';
    return this.postOrder(node.left) + this.postOrder(node.right) + node.value;
  }
}
const t = new Tree();
const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  const [p, l, r] = input[i].trim().split(' ');
  t.insert(p, l, r);
}
console.log(t.preorder(t.getRoot()));
console.log(t.inorder(t.getRoot()));
console.log(t.postOrder(t.getRoot()));
