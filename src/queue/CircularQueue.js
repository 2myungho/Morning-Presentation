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
exports.QueueFullError = exports.QueueEmptyError = exports.CircularQueue = void 0;
var CircularQueue = /** @class */ (function () {
    function CircularQueue(maxQueueSize) {
        this.maxQueueSize = maxQueueSize;
        this.queue = new Array(this.maxQueueSize);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }
    CircularQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    CircularQueue.prototype.isFull = function () {
        return this.size === this.maxQueueSize;
    };
    CircularQueue.prototype.enqueue = function (data) {
        if (this.isFull()) {
            throw new QueueFullError();
        }
        this.size = this.size + 1;
        this.rear = (this.rear + 1) % this.maxQueueSize;
        return (this.queue[this.rear] = data);
    };
    CircularQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new QueueEmptyError();
        }
        this.size = this.size - 1;
        this.front = (this.front + 1) % this.maxQueueSize;
        return this.queue[this.front];
    };
    return CircularQueue;
}());
exports.CircularQueue = CircularQueue;
var queue = new CircularQueue(4);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
var QueueEmptyError = /** @class */ (function (_super) {
    __extends(QueueEmptyError, _super);
    function QueueEmptyError(message) {
        if (message === void 0) { message = "?????? ?????? ????????????."; }
        return _super.call(this, message) || this;
    }
    return QueueEmptyError;
}(Error));
exports.QueueEmptyError = QueueEmptyError;
var QueueFullError = /** @class */ (function (_super) {
    __extends(QueueFullError, _super);
    function QueueFullError(message) {
        if (message === void 0) { message = "?????? ?????? ????????????."; }
        return _super.call(this, message) || this;
    }
    return QueueFullError;
}(Error));
exports.QueueFullError = QueueFullError;
