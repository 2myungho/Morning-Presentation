"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
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
            throw new Error("스택이 가득 찼습니다.");
        }
        else {
            return (this.arr[++this.top] = data);
        }
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("스택이 비어 있습니다.");
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
//# sourceMappingURL=Stack.js.map