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

    const res: any[] = [];

    while (node) {
      res.push(node.data);

      node = node.next;
    }

    console.log(res);
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

  public length(head: SinglyLinkedListNode<any>) {
    let node: SinglyLinkedListNode<any> | undefined = head;

    let length = 0;

    while (node) {
      length++;

      node = node.next;
    }

    return length;
  }

  public insertMiddle(
    head: SinglyLinkedListNode<any>,
    value: any,
    pos: number
  ) {
    let node: SinglyLinkedListNode<any> | undefined = head;

    let index = 0;
    while (node) {
      if (index === pos) {
        const newNode = new SinglyLinkedListNode(value);

        const rightNode = node.next;

        node.next = newNode;

        newNode.next = rightNode;

        return;
      }

      node = node.next;
      index++;
    }
  }

  public insertEnd(head: SinglyLinkedListNode<any>, value: any) {
    let node: SinglyLinkedListNode<any> = head;

    while (node) {
      if (!node.next) {
        break;
      }

      node = node.next;
    }

    const newNode = new SinglyLinkedListNode(value);

    node.next = newNode;
  }

  public insertStart(head: SinglyLinkedListNode<any>, value: any) {
    const newNode = new SinglyLinkedListNode(value);

    newNode.next = head;

    return newNode;
  }

  public deleteMiddle(head: SinglyLinkedListNode<any>, pos: number) {
    let node: SinglyLinkedListNode<any> | undefined = head;

    let index = 0;
    while (node) {
      if (index === pos - 1) {
        node.next = node.next?.next;
        return;
      }

      node = node.next;
      index++;
    }
  }

  public deleteEnd(head: SinglyLinkedListNode<any>) {
    let node: SinglyLinkedListNode<any> | undefined = head;

    while (node) {
      if (!node.next?.next) {
        node.next = undefined;
        return;
      }

      node = node.next;
    }
  }

  public deleteStart(head: SinglyLinkedListNode<any>) {
    return head.next;
  }
}
