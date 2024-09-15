export class SinglyLinkedListNode<T> {
  public data: T;
  public next?: SinglyLinkedListNode<any>;

  constructor(data: T) {
    this.data = data;
    this.next = undefined;
  }
}

export class SinglyLinkedListOperations {
  constructor() {}

  public createNode<T>(value: T) {
    return new SinglyLinkedListNode(value);
  }

  public setLink(
    node: SinglyLinkedListNode<any>,
    next: SinglyLinkedListNode<any>
  ) {
    node.next = next;
  }

  public traverse(head: SinglyLinkedListNode<any>) {
    let node: SinglyLinkedListNode<any> | undefined = head;

    while (node) {
      console.log(node.data);

      node = node.next;
    }
  }

  public search(head: SinglyLinkedListNode<any>, value: any) {
    let node: SinglyLinkedListNode<any> | undefined = head;

    while (node) {
      if (node.data === value) {
        return node.data;
      }

      node = node.next;
    }

    return null;
  }
}
