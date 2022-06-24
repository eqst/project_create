// import {useContext, useEffect, useReducer, useState} from 'react'
// import { ReactDOM } from 'react'
import set_count from './pages/test/count.jsx'
import './pages/css/index.css'
import './pages/css/test.scss'
set_count()

// var archer = 1
const set_num = ( x : number, y : number ) : number =>  {
    switch (x) {
        case 3:
            console.log(x)
            break;
        default:
            console.log(2)
            break;
    }
    let arr = [1,2,3,4]
    let saber = arr.map(item=>{
        console.log(item)
        return item
    })
    console.log(saber)
    return x + y;
}

console.log(set_num(3,5))
