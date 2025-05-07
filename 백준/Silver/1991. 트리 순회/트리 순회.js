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
    this.nodes = new Map();
    this.root = null;
  }

  insert(parentValue, leftValue, rightValue) {
    // 부모 노드 가져오기 또는 생성
    if (!this.nodes.has(parentValue)) {
      this.nodes.set(parentValue, new Node(parentValue));
    }
    const parentNode = this.nodes.get(parentValue);

    // 루트 노드는 첫 삽입 노드로 설정
    if (!this.root) {
      this.root = parentNode;
    }

    // 왼쪽 자식 처리
    if (leftValue !== '.') {
      if (!this.nodes.has(leftValue)) {
        this.nodes.set(leftValue, new Node(leftValue));
      }
      parentNode.left = this.nodes.get(leftValue);
    }

    // 오른쪽 자식 처리
    if (rightValue !== '.') {
      if (!this.nodes.has(rightValue)) {
        this.nodes.set(rightValue, new Node(rightValue));
      }
      parentNode.right = this.nodes.get(rightValue);
    }
  }
  preorder(node = this.root, result = []) {
    if (!node) return;
    result.push(node.value);
    this.preorder(node.left, result);
    this.preorder(node.right, result);
    return result;
  }
  inorder(node = this.root, result = []) {
    if (!node) return;
    this.inorder(node.left, result);
    result.push(node.value);
    this.inorder(node.right, result);
    return result;
  }
  postorder(node = this.root, result = []) {
    if (!node) return;
    this.postorder(node.left, result);
    this.postorder(node.right, result);
    result.push(node.value);

    return result;
  }
}

const tree = new Tree();
for (let i = 1; i <= input[0]; i++) {
  const [A, B, C] = input[i].trim().split(' ');
  tree.insert(A, B, C);
}
console.log(tree.preorder().join(''));
console.log(tree.inorder().join(''));
console.log(tree.postorder().join(''));
