// eslint-disable-next-line import/extensions
import LinkListNode from './linkListNode.js';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    if (this.head === null) this.head = node;
    else {
      const current = this.head;
      this.head = node;
      this.head.next = current;
    }
  }

  append(value) {
    const node = new LinkListNode(value);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  delete(value) {
    let current = this.head;
    let prev = null;
    while (current != null) {
      if (current.value === value) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
      }
      prev = current;
      current = current.next;
    }
  }

  traverse() {
    const arr = [];
    let { head } = this;
    while (head != null) {
      arr.push(head.value);
      head = head.next;
    }
    return arr;
  }

  contains(value) {
    return this.traverse().indexOf(value) !== -1;
  }

  length() {
    return this.traverse().length;
  }
}
