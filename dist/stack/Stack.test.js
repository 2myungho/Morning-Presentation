"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
test("Should storage must be empty When object is created.", function () {
    //given
    //when
    var st = new Stack_1.Stack(3);
    var isEmpty = st.isEmpty();
    var top = st.top;
    //then
    expect(isEmpty).toBeTruthy();
    expect(top).toBe(-1);
});
test("Should be a non-empty repository, When you put the data in", function () {
    //given
    var st = new Stack_1.Stack(3);
    st.push(1);
    //when
    var isEmpty = st.isEmpty();
    var top = st.top;
    //then
    expect(isEmpty).toBeFalsy();
    expect(top).toBe(0);
});
test("Should detect that repository is full, When the repository is full.", function () {
    //given
    var st = new Stack_1.Stack(3);
    st.push(1);
    st.push(2);
    st.push(3);
    //when
    var isFull = st.isFull();
    var top = st.top;
    //then;
    expect(isFull).toBeTruthy();
    expect(top).toBe(2);
});
test("Should return the data you put in, When push the data", function () {
    //given
    //when
    var st = new Stack_1.Stack(3);
    var data = st.push(1);
    //then
    expect(data).toBe(1);
});
test("Should occur error When number of data exceeds storage size.", function () {
    //given
    //when
    var st = new Stack_1.Stack(3);
    st.push(1);
    st.push(2);
    st.push(3);
    //then
    expect(function () {
        st.push(4);
    }).toThrow(Error);
});
test("Should be returned data at the top, When data is ejected", function () {
    //given
    var st = new Stack_1.Stack(3);
    st.push(1);
    st.push(2);
    st.push(3);
    //when
    var data = st.pop();
    //then
    expect(data).toBe(3);
});
test("Should error occur When data is pulled from an empty store.", function () {
    //given
    var st = new Stack_1.Stack(3);
    st.push(1);
    st.push(2);
    st.push(3);
    //when
    st.pop();
    st.pop();
    st.pop();
    //then
    expect(function () {
        st.pop();
    }).toThrow(Error);
});
//# sourceMappingURL=Stack.test.js.map