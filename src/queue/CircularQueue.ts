export class CircularQueue{
    queue: number[];
    maxQueueSize: number;
    front: number;
    rear: number;
  
    constructor(arrSize: number) {
      this.queue = new Array(arrSize);
      this.maxQueueSize = arrSize;
      this.front = 0;
      this.rear = 0;
    }
  
    isEmpty(): boolean {
      return this.front == this.rear;
    }
  
    isFull(): boolean {
      return (this.rear + 1) % this.queue.length === this.front;
    }
  
    enqueue(data: number): number {
        console.log("--------")
        console.log(this.rear)
        console.log(this.front)
        console.log("--------")
      if (this.isFull()) {
        throw new QueueEmpty("큐가 가득 찼습니다.");
      }
      this.rear = (this.rear+1) % this.queue.length;
      return (this.queue[this.rear] = data);
    }
    dequeue(): number {
        console.log("--------")
        console.log(this.rear)
        console.log(this.front)
        console.log("--------")
      if (this.isEmpty()) {
        throw new QueueFull("큐가 비어 있습니다.");
      }
      this.front = (this.front+1) % this.queue.length;
      return this.queue[this.front];
    }
  }
  
  const queue = new CircularQueue(4);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  queue.enqueue(6)
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  
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