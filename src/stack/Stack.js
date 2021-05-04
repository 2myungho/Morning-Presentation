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
exports.StackFull = exports.StackEmpty = exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(arrSize) {
        this.arr = new Array(arrSize);
        this.arrSize = arrSize - 1;
        this.top = -1;
    }
    Stack.prototype.isEmpty = function () {
        return this.top === -1;
    };
    Stack.prototype.isFull = function () {
        return this.top === this.arrSize;
    };
    Stack.prototype.push = function (data) {
        if (this.isFull()) {
            throw new StackFull("스택이 가득 찼습니다.");
        }
        else {
            return (this.arr[++this.top] = data);
        }
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new StackEmpty("스택이 비어 있습니다.");
        }
        else {
            return this.arr[this.top--];
        }
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
var StackEmpty = /** @class */ (function (_super) {
    __extends(StackEmpty, _super);
    function StackEmpty(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "StackEmpty";
        return _this;
    }
    return StackEmpty;
}(Error));
exports.StackEmpty = StackEmpty;
var StackFull = /** @class */ (function (_super) {
    __extends(StackFull, _super);
    function StackFull(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "StackFull";
        return _this;
    }
    return StackFull;
}(Error));
exports.StackFull = StackFull;
