"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.QueueFullError = exports.QueueEmptyError = exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(maxQueueSize) {
        this.maxQueueSize = maxQueueSize;
        this.arr = new Array(maxQueueSize);
        this.front = 0;
        this.rear = -1;
        this.currentSize = 0;
    }
    Queue.prototype.isEmpty = function () {
        return this.currentSize == 0;
    };
    Queue.prototype.isFull = function () {
        return this.currentSize === this.maxQueueSize;
    };
    Queue.prototype.enqueue = function (data) {
        if (this.isFull()) {
            throw new QueueFullError("큐가 가득 찼습니다.");
        }
        this.currentSize = this.currentSize + 1;
        return (this.arr[++this.rear] = data);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new QueueEmptyError("큐가 비어 있습니다.");
        }
        var result = this.arr[this.front];
        for (var i = 0; i <= this.currentSize; i = i + 1) {
            if (this.maxQueueSize - 1 > i) {
                this.arr[i] = this.arr[i + 1];
            }
        }
        this.rear = this.rear - 1;
        this.currentSize = this.currentSize - 1;
        return result;
    };
    return Queue;
}());
exports.Queue = Queue;
var queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
var QueueEmptyError = /** @class */ (function (_super) {
    __extends(QueueEmptyError, _super);
    function QueueEmptyError(message) {
        if (message === void 0) { message = "큐가 비어 있습니다."; }
        return _super.call(this, message) || this;
    }
    return QueueEmptyError;
}(Error));
exports.QueueEmptyError = QueueEmptyError;
var QueueFullError = /** @class */ (function (_super) {
    __extends(QueueFullError, _super);
    function QueueFullError(message) {
        if (message === void 0) { message = "큐가 가득 찼습니다."; }
        return _super.call(this, message) || this;
    }
    return QueueFullError;
}(Error));
exports.QueueFullError = QueueFullError;
//Dequeue를 할때 front를 고정 시킨 채 뒤에 남아있는 데이터를 앞으로 한 칸씩 당기는 수밖에 없습니다.
//문제점 : 앞에 있는 큐를 제거하고 데이터 전부를 앞으로 당긴다면 어떤 데이터를 빼내도 front의 값은 0이므로 굳이 큐라는 데이터를 구조를 사용할 이유가 없다. 또한 1억개의 데이터를 가지고 있고, 1개의 큐를 제거한다면 99,999,999개를 메모리에서 이동시켜야한다. 매우 비효율 적이다.
