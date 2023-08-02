// let a:[]=[1,2];
let a: number[] = [1, 2];
let b: Array<number> = [1, 2];
for (let i of a) {
    // console.log(`${i}`);
}
let c: [number, string] = [1, 'hi'];
let d: (string | number)[] = [1, 1, 'a'];
// let e: [[number, string]] = [[1, 'b'],[1,'b']];
let f: [number, string][] = [[1, 'a'], [2, 'b']];

enum g {
    a = 1, b, e
}

interface NumList {
    [index: number]: number
}

let h: NumList = {1: 1, 2: 2};

//--- 一級功名
let f1 = (x: any) => {
    console.log(`x=${x}`);
}
let f2 = () => {
    return () => {
        console.log(`i am f2`);
    }
}
// f1(1);
// f2()();
const aa: { n: string }[] = [{n: 'hi'}, {n: 'world'}];

// @ts-ignore
let bb = aa.reduce((previousValue, currentValue, currentIndex, array) => {
    return currentValue.n + previousValue.n;
})
// console.log(`line:39,bb=\n${JSON.stringify(bb, null, 2)}\n`)

let dd = [1, 2];
let ee = [...aa, 3, 4]

// console.log(`line:43,ee=\n${JSON.stringify(ee, null, 2)}\n`)

interface d1 {
    [anyname: number]: string;
}

interface d2 {
    [okn: string]: {
        name: string;
        [anyname: string]: string;
    }
}

let d3: d2 = {
    oo: {
        name: 'hi',
        anyan: 'hi2'
    }
}
// console.log(`line:62,d3=\n${JSON.stringify(d3, null, 2)}\n`)

let compose = (f, g) => {
    return (x) => {
        return f(g(x))
    };

}
var composex = function (f, g) {
    return function (x) {
        return f(g(x));
    };
};
let add = (x) => {
    return x + 1
}
let multi = (y) => {
    return y * 2
}
let compo = (add, multi) => {
    return (x) => {
      return   multi(add(x))
    }
}

const myneed = compose(add, multi);
// let an=myneed(3);
console.log(`myneed(2)=${myneed(2)}`);
// console.log(`an=${an}`);
let per = {name: 'hi', nick: 'hi2'}
const {nick} = per;
// console.log(`nick=${nick}`);
interface cus{
    (name:string):string
}
