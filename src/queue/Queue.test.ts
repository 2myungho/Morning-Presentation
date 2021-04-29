import { Queue } from "./Queue";

test("Should storage must be empty When object is created.", () => {
  //given

  //when
  const q = new Queue(3);
  const isEmpty = q.isEmpty();

  //then
  expect(isEmpty).toBeTruthy();
});

test("Should be a non-empty repository, When you put the data in", () => {
  //given
  const q = new Queue(3);
  q.enqueue(1);

  //when
  const isEmpty = q.isEmpty();
  //then
  expect(isEmpty).toBeFalsy();
});

test("Should detect that repository is full, When the repository is full.", () => {
  //given
  const q = new Queue(3);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);

  //when
  const data = q.dequeue();
  const rear = q.rear;

  //then
  expect(data).toBeTruthy();
  expect(rear).toBe(2);
});

test("Should return the data you put in, When push the data", () => {
  //given

  //when
  const q = new Queue(3);
  const data = q.enqueue(1);

  //then
  expect(data).toBe(1);
});

test("Should occur error When number of data exceeds storage size.", () => {
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

test("Should be returned data at the top, When data is ejected", () => {
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

test("Should error occur When data is pulled from an empty store.", () => {
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
