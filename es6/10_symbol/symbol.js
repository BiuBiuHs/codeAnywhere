// 起因，ES5中数姓名都是字符串类型，很容易造成变量名冲突，所以引入了Symbol数据类型，为了是保证每个变量都独一无二
// ECMAScript从此又添了一名成员
// Null,Undefined,Number,String,Boolean,Symbol,Object
// Symbol不是对象，没有包装类


// 1.定义Symbol类型的变量，现在的对象属性可以是字符串或者是Symbol类型了。
// Symbol类型不能使用new运算符创建
{
    let syb =  Symbol('str');
    console.log(typeof syb);

    console.log(syb);
    console.log(syb.toString());

}


// 2.参数只是对Symbol类型的描述，相同的参数，symbol变量的值还是不同
{
    let a = Symbol('allen');
    let b = Symbol('allen');
    console.log( a === b );  // false
}


// 3.Symbol类型不能隐式转换
{
    let a = Symbol('a');
    // let str = a + 'abc';   // ERROR
    // console.log(str); 
}


// 4.Symbol类型作为属性名称的时候，不能使用点运算符
// 使用Symbol类型作为属性名，不能被for..in,for..of,也不能用Object.getOwnPropertyNames()和Object.keys()取得
{
    let person = {};
    let name = Symbol('allen');
    person[name] = "allen";
    console.log(person[name]);
    console.log(Object.getOwnPropertySymbols(person));



    let person2 = {
        [name]: "ALLEN"
    };
    console.log(person2);
}


// 5.Symbol.for(),Symbol.keyFor()
// 如果想使用同一个Symbol变量，就使用Symbol.for(),参数必须相同
// Symbol.keyFor方法返回一个已登记的Symbol类型值的key
{
    let person = {};
    let name = Symbol.for('name');
    let age = Symbol.for('name');
    person[name] = "allen";
    person[age] = "age";

    console.log(Object.getOwnPropertySymbols(person));
    console.log(name == age);   // true

    console.log(Symbol.keyFor(age)); //name
}


// 6.内置的Symbol值

// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.species
// Symbol.match
// Symbol.replace
// Symbol.search
// Symbol.split
// Symbol.iterator
// Symbol.toPrimitive
// Symbol.toStringTag
// Symbol.unscopables 





