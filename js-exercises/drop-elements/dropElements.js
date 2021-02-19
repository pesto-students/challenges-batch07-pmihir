function dropElements(elements, predicate) {
  return elements.filter((n) => predicate(n));
}

export { dropElements };
