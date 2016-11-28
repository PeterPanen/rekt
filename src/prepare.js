// Prepare node tree by adding depth to each node
const prepare = function(tree, depth) {
  depth = depth || [0];

  if (Array.isArray(tree)) {
    for (var i in tree) {
      tree[i] = prepare(tree[i] || ' ', depth.concat(i));
    }
  } else if (typeof(tree) == 'string') {

  } else {
    // Tree is a single element
    tree._depth = [].concat(depth);

    if (tree.children) {
      tree.children = prepare(tree.children, depth);
    }
  }

  return tree;
}

export default prepare;
