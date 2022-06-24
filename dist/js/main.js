/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/pages/test/count.jsx
function set_count() {
  console.log('测试');
}
;// CONCATENATED MODULE: ./src/index.ts
// import {useContext, useEffect, useReducer, useState} from 'react'
// import { ReactDOM } from 'react'



set_count();
// var archer = 1
var set_num = function (x, y) {
    switch (x) {
        case 3:
            console.log(x);
            break;
        default:
            console.log(2);
            break;
    }
    var arr = [1, 2, 3, 4];
    var saber = arr.map(function (item) {
        console.log(item);
        return item;
    });
    console.log(saber);
    return x + y;
};
console.log(set_num(3, 5));

/******/ })()
;