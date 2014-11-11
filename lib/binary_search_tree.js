function binarySearchTree() {
  size = 0;
  max_depth = 0;
  current_size = 0;
}

function linkedList() {
  head = null;
  tail = null;
}

linkedList.prototype = {
  create: function(val) {
    var node = {
      val: val,
      next_node: null
    };
    return node;
  },

  add: function(val) {
    if (tail === null) {
      console.log('should not get here');
      tail = this.create(val);
      head = tail;
    }
    else {
      tail.next_node = this.create(val);
      tail = tail.next_node;
    }
  }
};

binarySearchTree.prototype = {
  create: function(val) {
    var node = {
      val: val,
      left: null,
      right: null
    };
    size ++;
    return node;
  },

  insert: function(val) {
    b = root;
    while (b) {
      if (b.val === val)
        return;
      else if (val < b.val) {
        if (b.left === null) {
          b.left = this.create(val);
          return;
        }
        else b = b.left;
      }
      else {
        if (b.right === null) {
          b.right = this.create(val);
          return;
        }
        else b = b.right;
      }
    }
  },

  contains: function(val) {
    b = root;
    if (b === null) return false;
    while (b) {
      if (b.val === val)
        return true;
      else if (val < b.val) {
        if (b.left === null) {
          return false;
        }
        else b = b.left;
      }
      else {
        if (b.right === null) {
          return false;
        }
        else b = b.right;
      }
    }

  },

  findDepth: function(node, current_depth) {
    if (node === null) {
      if (current_depth > max_depth)
        max_depth = current_depth;
      return;
    }
    tree.findDepth(node.left, current_depth + 1);
    tree.findDepth(node.right, current_depth + 1);
  },

  depth: function() {
    max_depth = 0;
    tree.findDepth(root, 0);
    return max_depth;
  },

  findSize: function(node) {
    if (node === null) {
      return;
    }
    current_size ++;
    tree.findSize(node.left);
    tree.findSize(node.right);
  },

  balance: function() {
    current_size = 0;
    tree.findSize(root.left);
    current_size_left = current_size;
    current_size = 0;
    tree.findSize(root.right);
    return current_size_left - current_size;
  },

  inOrder: function(node) {
    if (node === null) {
      return;
    }
    tree.inOrder(node.left);
    console.log(node.val);
    tree.inOrder(node.right);
  },

  preOrder: function(node) {
    if (node === null) {
      return;
    }
    console.log(node.val);
    tree.inOrder(node.left);
    tree.inOrder(node.right);

  },

  postOrder: function(node) {
    if (node === null) {
      return;
    }
    tree.inOrder(node.left);
    tree.inOrder(node.right);
    console.log(node.val);
  },

  queueing: function(node) {
    while (node !== null) {
      if (node.val.left !== null) list.add(node.val.left);
      if (node.val.right !== null) list.add(node.val.right);
      console.log(node.val.val);
      node = node.next_node;
    }
  },

  breadthFirst: function(node) {
    list = new linkedList();
    head = list.create(node);
    tail = head;
    this.queueing(head);
  }

};

tree = new binarySearchTree();
var root = tree.create(20);
tree.insert(25);
tree.insert(10);
tree.insert(25);
tree.insert(8);
tree.insert(27);
tree.insert(3);

console.log('root');
console.log(root);
console.log('size');
console.log(size);
console.log('depth');
console.log(tree.depth());
console.log('contains');
console.log(tree.contains(10));
console.log(tree.contains(6));
console.log('balance');
console.log(tree.balance());
console.log('in order');
tree.inOrder(root);
console.log('pre order');
tree.preOrder(root);
console.log('post order');
tree.postOrder(root);
console.log('breadth first');
tree.breadthFirst(root);

