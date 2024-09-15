import { SinglyLinkedListOperations } from "./LinkedList/SinglyLinkedList";

const SLLOp = new SinglyLinkedListOperations();

const SLLnHead = SLLOp.createNode(5);
const SLLnSecond = SLLOp.createNode("adad");

SLLOp.setLink(SLLnHead, SLLnSecond);

SLLOp.traverse(SLLnHead);

console.log(SLLOp.search(SLLnHead, 5));
