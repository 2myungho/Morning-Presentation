"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(arrSize) {
        this.arr = new Array(arrSize);
        this.arrSize = arrSize - 1;
        this.front = -1;
        this.rear = -1;
    }
    Queue.prototype.isEmpty = function () {
        return this.front == this.rear;
    };
    Queue.prototype.isFull = function () {
        return this.rear === this.arrSize;
    };
    Queue.prototype.enqueue = function (data) {
        if (this.isFull()) {
            throw new Error("큐가 가득 찼습니다.");
        }
        return (this.arr[++this.rear] = data);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new Error("큐가 비어 있습니다.");
        }
        return this.arr[++this.front];
    };
    return Queue;
}());
exports.Queue = Queue;
var queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
