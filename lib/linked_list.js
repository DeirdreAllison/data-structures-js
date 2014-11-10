function linkedList(head) {
  this.head = head;
}

linkedList.prototype = {
  create: function(val) {
    var node = {
      val: val,
      prev: null,
      next: null
    };
    return node;
  },

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
    t = this.head;
    while (t) {
      if (t == n) {
        n.prev.nn = n.nn;
        n.nn.prev = n.prev;
        return n.val;
      }
      n = n.nn;
    }
    return null;
  }
};

l = new linkedList(n1);
var n1 = l.create(1);
var n2 = l.create(2);
n1.next = n2;
n2.prev = n1;
var n3 = l.create(3);
n2.next = n3;
n3.prev = n2;

console.log(n3);
console.log(n2);
