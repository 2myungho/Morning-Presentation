import { QueueEmptyError, QueueFullError } from './CircularQueue';
import {Queue} from './Queue_solution';

let q: Queue;
beforeEach(() => {
  q = new Queue(4);
});

test("큐 객체가 생성 됐을 때, 저장소는 비어 있어야 한다.", () => {
    //given

    //when

    //then
    expect(q.isEmpty).toBeTruthy();
})

test("먼저 삽입한 데이터가 먼저 꺼내져야 한다.", () => {
    //given
    const input1: number = 1;
    const input2: number = 2;
    q.enqueue(input1);
    q.enqueue(input2);
  
    //when
    const output = q.dequeue();
  
    //then
    expect(input1).toBe(output);
  });
  
  test("저장소가 가득 차면 에러가 발생한다.", () => {
    //given
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
  
    //when
  
    //then
    expect(() => {
      q.enqueue(5);
    }).toThrowError(new QueueFullError());
  });
  
  test("저장소가 비어 있을 때, 데이터를 꺼내면 에러가 발생한다.", () => {
    //given
  
    //when
  
    //then
    expect(() => {
      q.dequeue();
    }).toThrowError(new QueueEmptyError());
  });

  test("데이터가 큐의 최대 사이즈를 초과하여 삽입되어도, 저장소에 빈 공간이 있으면, 정상적으로 삽입 되어야 한다.", () => {
    //given
    q.enqueue(1);
    q.enqueue(2);
    q.dequeue();
    q.enqueue(3);
    q.dequeue();
    q.enqueue(4);
    q.enqueue(5);
  
    //when
  
    //then
    expect(() => q.enqueue(5)).not.toThrow(new QueueFullError());
  });