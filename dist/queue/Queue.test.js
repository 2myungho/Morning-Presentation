"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
test("Should storage must be empty When object is created.", function () {
    //given
    //when
    var q = new Queue_1.Queue(3);
    var isEmpty = q.isEmpty();
    //then
    expect(isEmpty).toBeTruthy();
});
test("Should be a non-empty repository, When you put the data in", function () {
    //given
    var q = new Queue_1.Queue(3);
    q.enqueue(1);
    //when
    var isEmpty = q.isEmpty();
    //then
    expect(isEmpty).toBeFalsy();
});
test("Should detect that repository is full, When the repository is full.", function () {
    //given
    var q = new Queue_1.Queue(3);
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    //when
    var data = q.dequeue();
    var rear = q.rear;
    //then
    expect(data).toBeTruthy();
    expect(rear).toBe(2);
});
test("Should return the data you put in, When push the data", function () {
    //given
    //when
    var q = new Queue_1.Queue(3);
    var data = q.enqueue(1);
    //then
    expect(data).toBe(1);
});
test("Should occur error When number of data exceeds storage size.", function () {
    //given
    //when
    var q = new Queue_1.Queue(3);
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    //then
    expect(function () {
        q.enqueue(4);
    }).toThrow(Error);
});
test("Should be returned data at the top, When data is ejected", function () {
    //given
    var q = new Queue_1.Queue(3);
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    //when
    var data = q.dequeue();
    //then
    expect(data).toBe(1);
});
test("Should error occur When data is pulled from an empty store.", function () {
    //given
    var q = new Queue_1.Queue(3);
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    //when
    q.dequeue();
    q.dequeue();
    q.dequeue();
    //then
    expect(function () {
        q.dequeue();
    }).toThrow(Error);
});
//# sourceMappingURL=Queue.test.js.map