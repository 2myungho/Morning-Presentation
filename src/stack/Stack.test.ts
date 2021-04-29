import { Stack } from "./Stack";

test("Should storage must be empty When stack object is created.", () => {
  //given

  //when
  const st = new Stack(3);
  const isEmpty = st.isEmpty();
  const top = st.top;

  //then
  expect(top).toBe(-1);
  expect(isEmpty).toBeTruthy();
});

test("Should be a non-empty storage, When put data in stack storage", () => {
  //given
  const st = new Stack(3);
  st.push(1);

  //when
  const isEmpty = st.isEmpty();
  const top = st.top;

  //then
  expect(top).toBe(0);
  expect(isEmpty).toBeFalsy();
});

test("Should detect that storage is full, When stack storage is full.", () => {
  //given
  const st = new Stack(3);
  st.push(1);
  st.push(2);
  st.push(3);

  //when
  const isFull = st.isFull();
  const top = st.top;
  const stackSize = st.arrSize

  //then;
  expect(top).toBe(stackSize);
  expect(isFull).toBeTruthy();
});

test("Should return the data you put in, When push data to the stack storage.", () => {
  //given

  //when
  const st = new Stack(3);
  const data = st.push(1);

  //then
  expect(data).toBe(1);
});

test("Should occur error When number of data exceeds stack storage size.", () => {
  //given

  //when
  const st = new Stack(3);
  st.push(1);
  st.push(2);
  st.push(3);

  //then
  expect(() => {
    st.push(4);
  }).toThrow(Error);
});

test("Should be returned data at the top, When data is ejected from stack store", () => {
  //given
  const st = new Stack(3);
  st.push(1);
  st.push(2);
  st.push(3);

  //when
  const data = st.pop();

  //then
  expect(data).toBe(3);
});

test("Should error occur When data is pulled from an empty stack storage.", () => {
  //given
  const st = new Stack(3);
  st.push(1);
  st.push(2);
  st.push(3);

  //when
  st.pop();
  st.pop();
  st.pop();

  //then
  expect(() => {
    st.pop();
  }).toThrow(Error);
});
