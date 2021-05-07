export class CircularQueue {
  private queue: number[];
  private front: number;
  private rear: number;
  private size: number;

  constructor(private maxQueueSize: number) {
    this.queue = new Array(this.maxQueueSize);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.maxQueueSize;
  }

  enqueue(data: number): number {
    if (this.isFull()) {
      throw new QueueFullError();
    }
    this.size = this.size + 1;
    this.rear = (this.rear + 1) % this.maxQueueSize;
    return (this.queue[this.rear] = data);
  }
  dequeue(): number {
    if (this.isEmpty()) {
      throw new QueueEmptyError();
    }
    this.size = this.size - 1;
    this.front = (this.front + 1) % this.maxQueueSize;
    return this.queue[this.front];
  }
}

const queue = new CircularQueue(4);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());

export class QueueEmptyError extends Error {
  constructor(message = "큐가 비어 있습니다.") {
    super(message);
  }
}

export class QueueFullError extends Error {
  constructor(message = "큐가 가득 찼습니다.") {
    super(message);
  }
}
