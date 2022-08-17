// x = 1;
// var a = 5;
// var b = 10;
// var c = function(a, b, c) {
//   var x = 10;
//   console.log(x);//10
//   console.log(a);//8
//   var f = function(a, b, c) {
//     b = a;// B=8=A
//     console.log(b);// 8
//     b = c;//10
//     var x = 5;
//   }
//   f(a,b,c);
//   console.log(b);//9
// }
// c(8,9,10);
// console.log(b);//10
// console.log(x);//1



// console.log(bar);//undefine
// console.log(baz);//--- no undefine
// foo();
// function foo() { console.log('Hola!'); }
// var bar = 1;
// baz = 2;//error 


// var instructor = "Tony";
// if(true) {
//     var instructor = "Franco";
// }
// console.log(instructor);// no porque el if no es otro scoope resultado = franco


// var instructor = "Tony"; 
// console.log(instructor);// tony
// (function() {
//    if(true) {
//       var instructor = "Franco";
//       console.log(instructor);// franco
//    }
// })();
// console.log(instructor);// tony


// var instructor = "Tony";
// let pm = "Franco";
// if (true) {
//     var instructor = "The Flash";
//     let pm = "Reverse Flash";
//     console.log(instructor);// the flash
//     console.log(pm);//reverse flash
// }
// console.log(instructor);// the flash
// console.log(pm);//let limita el scope es franco

6 / "3" // 2
"2" * "3" //6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // Nan 
7 / 0  //infinity
{}[0] // undefine
parseInt("09")// 9 numero
5 && 2 //2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10]// [3]+[3]="33"  "33"-10 = 23
3>2>1// 3>2 = true  true te lo pasa a numero como 1 y 1 no es mayor que 1  por eso false
([] == ![])// True



// function test() {
//     console.log(a); //undefine la variable se define despues en la funcion
//     console.log(foo()); //1  //la funcion hace hoisting  devuelve un 2
 
//     var a = 1;
//     function foo() {
//        return 2;
//     }
//  }
 
//  test();


// var snack = 'Meow Mix';

// function getFood(food) {
//     if (food) {
//         var snack = 'Friskies';
//         return snack;
//     }
//     return snack;
// }

// getFood(true); // undefine porque el return te devuelve la copia del valor snack de la funcion que en este caso es undefine