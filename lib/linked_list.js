function Node(val, prev, next) {
  this.val = val;
  this.prev = prev;
  this.next = next;

}

function linkedList(head) {
  this.head = head;
}

linkedList.prototype = {
  add: function(n) {
    n.nn = this.head;
    n.prev = null;
    this.head.prev = n;
    this.head = n;
  },

  size: function() {
    var i = 0;
    n = this.head;
    while (n) {
      i++;
      n = n.nn;
    }
    return i;
  },

  search: function(input) {
    n = this.head;
    while (n) {
      if (n.val == input) { return n; }
      n = n.nn;
    }
    return null;
    },

  to_s: function() {
    var node_to_string = [];
    n = this.head;
    while (n) {
      node_to_string.push(n.val);
      n = n.n;
    }
    return node_to_string.join(', ');
  },

  remove: function() {
    n = this.head;
    while (n) {
      if (n == node) {
        n.prev.nn = n.nn;
        n.nn.prev = n.prev;
        return n.val;
      }
      n = n.nn;
    }
    return null;
  }
};

l = linkedList.new(n1);
var n1 = new Node(1, null, null);
var n2 = new Node(2, n1, null);
n1.next = n2;
var n3 = new Node(3, n2, null);
n2.next = n3;
var n4 = new Node(4, n3, null);
n3.next = n4;

console.log(n3);
console.log(n4);
