import { Queue } from "./Queue";

test("Should storage must be empty When queue object is created.", () => {
  //given

  //when
  const q = new Queue(3);
  const isEmpty = q.isEmpty();
  const rear = q.rear;
  const front = q.front;

  //then
  expect(rear).toBe(front);
  expect(isEmpty).toBeTruthy();
});

test("Should be a non-empty storage, When put data in queue storage", () => {
  //given
  const q = new Queue(3);
  q.enqueue(1);

  //when
  const isEmpty = q.isEmpty();
  const rear = q.rear;
  //then
  expect(rear).toBe(0);
  expect(isEmpty).toBeFalsy();
});

test("Should detect that storage is full, When queue storage is full.", () => {
  //given
  const q = new Queue(3);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);

  //when
  const data = q.dequeue();
  const rear = q.rear;
  const queueSize = q.arrSize;

  //then
  expect(rear).toBe(queueSize);
  expect(data).toBeTruthy();
});

test("Should return the data you put in, When push data to the queue storage.", () => {
  //given

  //when
  const q = new Queue(3);
  const data = q.enqueue(1);

  //then
  expect(data).toBe(1);
});

test("Should occur error When number of data exceeds queue storage size.", () => {
  //given

  //when
  const q = new Queue(3);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);

  //then
  expect(() => {
    q.enqueue(4);
  }).toThrow(Error);
});

test("Should be returned data at the top,When data is ejected from queue store", () => {
  //given
  const q = new Queue(3);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);

  //when
  const data = q.dequeue();

  //then
  expect(data).toBe(1);
});

test("Should error occur When data is pulled from an empty queue storage.", () => {
  //given
  const q = new Queue(3);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);

  //when
  q.dequeue();
  q.dequeue();
  q.dequeue();

  //then
  expect(() => {
    q.dequeue();
  }).toThrow(Error);
});
