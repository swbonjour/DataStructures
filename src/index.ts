import { SinglyLinkedListOperations } from "./LinkedList/SinglyLinkedList";

const breakLine = () => console.log("---------");

const SLLOp = new SinglyLinkedListOperations();

const SLLnHead = SLLOp.createNode(5);
const SLLnSecond = SLLOp.createNode("adad");

SLLOp.setLink(SLLnHead, SLLnSecond);

SLLOp.traverse(SLLnHead);

breakLine();

// console.log(SLLOp.search(SLLnHead, 5));

// console.log(SLLOp.length(SLLnHead));

SLLOp.insertMiddle(SLLnHead, 6, 1);

SLLOp.traverse(SLLnHead);

breakLine();

SLLOp.insertEnd(SLLnHead, 8);

SLLOp.traverse(SLLnHead);

breakLine();

const newHead = SLLOp.insertStart(SLLnHead, 2);

SLLOp.traverse(newHead);

breakLine();

SLLOp.deleteMiddle(newHead, 3);

SLLOp.traverse(newHead);

breakLine();

SLLOp.deleteEnd(newHead);

SLLOp.traverse(newHead);

breakLine();

const newNewHead = SLLOp.deleteStart(newHead);

if (newNewHead) {
  SLLOp.traverse(newNewHead);
}
