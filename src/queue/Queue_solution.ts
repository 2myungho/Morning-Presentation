export class Queue {
    private arr: number[];
    private front: number;
    private rear: number;
    private currentSize: number;
  
    constructor(private maxQueueSize: number) {
      this.arr = new Array(maxQueueSize);
      this.front = 0;
      this.rear = -1;
      this.currentSize = 0;
    }
  
    isEmpty(): boolean {
      return this.currentSize == 0;
    }
  
    isFull(): boolean {
      return this.currentSize === this.maxQueueSize;
    }
  
    enqueue(data: number): number {
      if (this.isFull()) {
        throw new QueueFullError("큐가 가득 찼습니다.");
      }
      this.currentSize = this.currentSize + 1;
      return (this.arr[++this.rear] = data);
    }
    dequeue(): number {
      if (this.isEmpty()) {
        throw new QueueEmptyError("큐가 비어 있습니다.");
      }
      let result = this.arr[this.front]
      for(let i: number = 0; i <= this.currentSize; i = i + 1){
        if(this.maxQueueSize - 1 > i ){
          this.arr[i] = this.arr[i+1]
        }
      }
      this.rear = this.rear - 1;
      this.currentSize = this.currentSize - 1;
      return result;
    }
  }
  
  const queue = new Queue(3);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue());
  queue.enqueue(4)
  // console.log(queue.dequeue());
  // console.log(queue.dequeue());

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
  
  //Dequeue를 할때 front를 고정 시킨 채 뒤에 남아있는 데이터를 앞으로 한 칸씩 당기는 수밖에 없습니다.
//문제점 : 앞에 있는 큐를 제거하고 데이터 전부를 앞으로 당긴다면 어떤 데이터를 빼내도 front의 값은 0이므로 굳이 큐라는 데이터를 구조를 사용할 이유가 없다. 또한 1억개의 데이터를 가지고 있고, 1개의 큐를 제거한다면 99,999,999개를 메모리에서 이동시켜야한다. 매우 비효율 적이다.