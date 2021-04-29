export class Stack {
  arr: number[];
  arrSize: number;
  top: number;

  constructor(arrSize: number) {
    this.arr = new Array(arrSize);
    this.arrSize = arrSize - 1;
    this.top = -1;
  }

  isEmpty(): boolean {
    return this.top === -1;
  }

  isFull(): boolean {
    return this.top === this.arrSize;
  }

  push(data: number): number {
    if (this.isFull()) {
      throw new Error("스택이 가득 찼습니다.");
    } else {
      return (this.arr[++this.top] = data);
    }
  }
  pop(): number {
    if (this.isEmpty()) {
      throw new Error("스택이 비어 있습니다.");
    } else {
      return this.arr[this.top--];
    }
  }
}
const stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
