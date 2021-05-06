export class CircularQueue {
  private queue: number[];
  private front: number;
  private rear: number;

  constructor(private maxQueueSize: number) {
    this.queue = new Array(this.maxQueueSize);
    this.front = 0;
    this.rear = 0;
  }

  isEmpty(): boolean {
    return this.front == this.rear;
  }

  isFull(): boolean {
    return (this.rear + 1) % this.maxQueueSize === this.front;
  }

  enqueue(data: number): number {
    if (this.isFull()) {
      throw new QueueFull("큐가 가득 찼습니다.");
    }
    this.rear = (this.rear + 1) % this.maxQueueSize;
    return (this.queue[this.rear] = data);
  }
  dequeue(): number {
    if (this.isEmpty()) {
      throw new QueueEmpty("큐가 비어 있습니다.");
    }
    this.front = (this.front + 1) % this.maxQueueSize;
    return this.queue[this.front];
  }

  getRear(): number {
    return this.rear;
  }
  getFront(): number {
    return this.front;
  }
}

const queue = new CircularQueue(4);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());

export class QueueEmpty extends Error {
  constructor(message: string) {
    super(message);
    this.name = "QueueEmpty";
  }
}

export class QueueFull extends Error {
  constructor(message: string) {
    super(message);
    this.name = "QueueFull";
  }
}

//나머지는 자연수로만 계산했을 때를 말한다.
//front가 위치한 곳은 항상 데이터가 들어올 수 없다
// 큐가 가득 찼다는 걸 알기 위해서 front == (rear+1) % queueSize를 이용하기 때문에.
//(사이즈가 4이지만 프론트가 있는 부분은 데이터가 빠져 있기 때문에 총 3개의 데이터를 저장할 수 있다.)
//여기서 중요한 사실은 큐에서 1개는 쓸 수 없다는 사실입니다. rear+1자리에 front가 있는 지 알아보기 위해서지요.
