export class Queue {
  arr: number[];
  arrSize: number;
  front: number;
  rear: number;

  constructor(arrSize: number) {
    this.arr = new Array(arrSize);
    this.arrSize = arrSize - 1;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty(): boolean {
    return this.front == this.rear;
  }

  isFull(): boolean {
    return this.rear === this.arrSize;
  }

  enqueue(data: number): number {
    if (this.isFull()) {
      throw new Error("큐가 가득 찼습니다.");
    } else {
      return (this.arr[++this.rear] = data);
    }
  }
  dequeue(): number {
    if (this.isEmpty()) {
      throw new Error("큐가 비어 있습니다.");
    } else {
      return this.arr[++this.front];
    }
  }
}

const queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
