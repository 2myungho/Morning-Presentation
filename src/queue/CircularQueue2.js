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
exports.QueueFull = exports.QueueEmpty = exports.CircularQueue = void 0;
var CircularQueue = /** @class */ (function () {
    function CircularQueue(maxQueueSize) {
        this.maxQueueSize = maxQueueSize;
        this.queue = new Array(this.maxQueueSize);
        this.front = 0;
        this.rear = 0;
    }
    CircularQueue.prototype.isEmpty = function () {
        return this.front == this.rear;
    };
    CircularQueue.prototype.isFull = function () {
        return (this.rear + 1) % this.maxQueueSize === this.front;
    };
    CircularQueue.prototype.enqueue = function (data) {
        if (this.isFull()) {
            throw new QueueFull("큐가 가득 찼습니다.");
        }
        this.rear = (this.rear + 1) % this.maxQueueSize;
        return (this.queue[this.rear] = data);
    };
    CircularQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new QueueEmpty("큐가 비어 있습니다.");
        }
        this.front = (this.front + 1) % this.maxQueueSize;
        return this.queue[this.front];
    };
    CircularQueue.prototype.getRear = function () {
        return this.rear;
    };
    CircularQueue.prototype.getFront = function () {
        return this.front;
    };
    return CircularQueue;
}());
exports.CircularQueue = CircularQueue;
var queue = new CircularQueue(4);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
var QueueEmpty = /** @class */ (function (_super) {
    __extends(QueueEmpty, _super);
    function QueueEmpty(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "QueueEmpty";
        return _this;
    }
    return QueueEmpty;
}(Error));
exports.QueueEmpty = QueueEmpty;
var QueueFull = /** @class */ (function (_super) {
    __extends(QueueFull, _super);
    function QueueFull(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "QueueFull";
        return _this;
    }
    return QueueFull;
}(Error));
exports.QueueFull = QueueFull;
//나머지는 자연수로만 계산했을 때를 말한다.
//front가 위치한 곳은 항상 데이터가 들어올 수 없다
// 큐가 가득 찼다는 걸 알기 위해서 front == (rear+1) % queueSize를 이용하기 때문에.
//(사이즈가 4이지만 프론트가 있는 부분은 데이터가 빠져 있기 때문에 총 3개의 데이터를 저장할 수 있다.)
//여기서 중요한 사실은 큐에서 1개는 쓸 수 없다는 사실입니다. rear+1자리에 front가 있는 지 알아보기 위해서지요.
