/**
 * Recursive building of DOM tree
 */
const dom = function(tag, attrs /*, children */) {
  // Allow function as tag
  if (typeof(tag) == 'function') {
    attrs = attrs || {};
    attrs.children = children;
    return tag(attrs);
  } else {
    var children = [].concat.apply(
      [], Array.prototype.slice.call(arguments).slice(2)
    );

    if (children.length > 1) {
      for (var i in children) {
        var child = children[i];
        if (child !== undefined && typeof(child) != 'object') {
          children[i] = dom('span', null, child.toString());
        }
      }
    }

    return { tag, attrs, children };
  }
}

export default dom;
