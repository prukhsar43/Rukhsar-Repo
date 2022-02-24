
var div = document.getElementById('mop')
console.log(div)
console.log(div.firstElementChild)




var a = document.getElementById('rukh')

a.value = '2'
console.log(a);
console.log(a.innerHTML)


console.log(a.value)

console.log(a.selectedIndex)
console.log(a.options)

console.log(a.options[1])
console.log(a.options[a.selectedIndex].text)

for (var i of a.options) {

    console.log(i)
}

var a = document.getElementById('rukh')
console.log(a.parentNode)



var ul = document.createElement('ul')

ul.id = 'cars'


var nodes = []

var li = document.createElement('li')
li.id = 'dezire'
li.className = 'dezire'
li.innerText = 'Dezire'


nodes.push(li)
ul.appendChild(li)


var li2 = document.createElement('li')
li2.id = 'creta'
li2.className = 'creta'
li2.innerText = 'Creata'
ul.appendChild(li2)



nodes.push(li2)

var li3 = document.createElement('li')
nodes.push(li3)




document.body.appendChild(ul)



var ul = document.createElement('ul')
ul.id = 'cars1'

var cars = ['dezire', 'swift', 'scooter']
var nodes = []

cars.forEach(creteUL)


function creteUL(value) {

    var li = document.createElement('li')

    li.innerText = value
    nodes.push(li)


}

ul.append(...nodes)
document.body.appendChild(ul)

// for(var i=0; i<3; i++){

//     var li=document.createElement('li')




// }


var num = [121, 144, 256, 196]

var aarRes = num.map(sqroot)

function sqroot(a) {
    var res = Math.sqrt(a)
    return res

}

console.log(aarRes)

a = 10
b = 8

if (a > b) {
    console.log(`${a} is bigger than ${b}`)
}

isAdmin = true
c = 50

if (isAdmin && c > 10) {
    console.log("welcome")
}



// var fruit='mango';

// switch (fruit) {

//     case 'mango':
//                   console.log("yellow")
//                   break;
//     case 'banana':
//                 console.log("green")
//                 break;

//      case 'orange':

//                 console.log("orange")
//                 break;
//        default:
//                console.log("not found")         



// } 


// switch(new Date().getDay())
// {
//   case 0 :
//          console.log("it is sunday")
//          break


//   case 3 :
//         console.log("it is wednesday")
//         break

//   default:
//       console.log("no day mention")
//       break



// }

// // for(var i=1; i<=10;i++){
// //     console.log(i)
// // }

// // for(var i=10; i>=1; i--){

// //     console.log(i)
// // }
console.clear()

var n = 'capitala'

var l = n.length


for (var i = 0; i < l; i++) {
    if (n[i] == 'a') {
        console.log(` a is present at ${i} position`)
        break

    }
}

for (var i = 10; i <= 20; i++) {
    if (i % 2 != 0) {
        continue

    }
    console.log(i * i)


}

console.clear()


var fullName = {
    firstName: 'Rukhsar',
    lastName: 'Pathan'
}

for (var x in fullName) {

    console.log(x)

    console.log(fullName[x])
}

var arr = ['mango', 'orage', 'banana']

for (var i in arr) {
    console.log(i)

    console.log(arr[i])
}


for (var i of arr) {
    console.log(i)
}

var n = 'Rkhsar'
for (i of n) {
    console.log(i)
}
console.clear()

function addition() {

    var result = 10 * 6

    return result


}

var c = addition()
console.log(c)



function addNumbers(num1, num2) {
    return (num1 + num2)

}

var c = addNumbers(10, 20)
console.log(c)

console.log(addNumbers(10, 20))


console.clear()

function multiplyNumbers(num1, num2) {
    return (num1 * num2)

}




var c = multiplyNumbers(15, 5)
console.log(c)



var fullName = {
    firstName: 'Rukhsar',
    lastName: 'Pathan'
}


function changeVal(per) {
    per.firstName = 'Aliya'
}

changeVal(fullName)
console.log(fullName)

var num = 10
function square(num) {
    num = 15
    var sq = num * num

    console.log(sq)

}
square(num)
console.log(num)

console.clear()

var abc = 'sweet'


function change() {

    var abc = 'rigi'
    console.log(abc)
}

change()
console.log(abc)




var din = function (num1, num2) {

    console.log(num1 + num2)

}

din(10, 20)

// var b=document.getElementById('told')
// console.log(b)



// console.log("hello Rukhsar")

// console.error('this is an error')
// // alert('no space')
// console.log([33, 2, 44, 6])
// console.warn("warning is there")

// var html;

// html="we are a famly of 6 people"+"we live together in home";

// html=html.concat('PArents and children');

// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase())
// console.log(html.toUpperCase())

// console.log(html[0]);

// console.log(html.indexOf('are'))

// let fruit1='orange';
// let fruit2='Apple';

// let myhtml=`HEllo Rukhsar
//            <h1>This is heading</h1>
//            <p>I like ${fruit1} and ${fruit2}</p>`;

//            document.body.innerHTML=myhtml;

//   console.log(html.charAt(3))  
//   console.log(html.slice(0,5))    

//   console.log(html.split(' '))

//   console.clear();

//  let marks=[20,30,40,50];
// //   console.log(marks);

//  let fruit=['orange','apple','banana'];

//  let mixed=marks.concat(fruit);
// //  console.log(mixed);

// marks.push(60)
// marks.unshift(100)
// // marks.pop()
// // marks.shift()

//  console.log(marks);
// //  marks.splice(2,4)
// //  console.log(marks)
//  console.log(marks.length)



// let myobj={
//     name:'rukhsar',

//     work:'infoys',

//     isActive:true,

//     marks:[2,3,4]
// }

// console.log(myobj)

// console.log(myobj.isActive)
// console.log(myobj['name'])




console.clear()


var arr = [50, 45, 60, 70]

function checkValue(value, array) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == value) {

            return i

        }

    }

    return -1

}

var a = checkValue(15, arr)
console.log(a)

console.clear()

var isPalindrome=true
function testVariable(str){

  var j=  reverseString(str)
  
    for(var i=0;i<str.length;i++){

       if (j==str[i]){

        return true
       }
    }

return false

}
 
testVariable('madam')

console.clear();



    var newString=""
     palindrome=true
 function reverseString(str){
    
    for(i=str.length-1;i>=0;i--)
{            newString += str[i];

    if(newString==str){
        return palindrome
    }

   
} 
return false
}
var a=reverseString('Madam')

console.log(a)