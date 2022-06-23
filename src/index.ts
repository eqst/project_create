import {useContext, useEffect, useReducer, useState} from 'react'
import set_count from './pages/test/count.jsx'
import './pages/css/index.css'
import './pages/css/test.scss'
set_count()

function set_num (x:number,y:number) : number  {
    return x + y;
}

console.log(set_num(3,5))