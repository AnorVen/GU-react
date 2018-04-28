// HW1.1
function loop(times = 0, callback = null) {
  if (callback) {
    console.log('if')
    for (let i = 0; i < times; i++) {
      callback();
    }
  }


}

function a() {
  console.log(1)
}

loop(1,);
loop(5, a);

//HW1.2

let calculateArea = (figure, ...arg) => {
  switch (figure) {
    case 'square':
      let [a, ...othersArgs] = [...arg];
      let area = a * a;
      let [...allArgsSquare] = [...arg];
      let resultSquare = {area, figure, input: allArgsSquare};
      console.log(resultSquare);
      break;
    case 'circle':
      const [r, ...othersArg] = [...arg];
      const areaCircle = r * Math.PI * Math.PI;
      let [...inputCircle] = [...arg];
      const resultCircle = {area: areaCircle, figure, input: inputCircle};
      console.log(resultCircle);
      break;

    case 'rect':
      let [c, d, ...args] = [...arg];
      let areaRect = c * d;
      let [...input] = [...arg];
      const resultRect = {area: areaRect, figure, input: input};
      console.log(resultRect);
      break;
    default:
      let argsDef = [...arg];
      let figureDef = figure;
      console.log(`Функция принимает только фигуры: rect, circle, square. переданные параметры ${figureDef} и ${argsDef} где-то неверны `)


  }
};

calculateArea('rect', 2, 3, 8);
calculateArea('square', 2, 3, 8);
calculateArea(4, 3, 8);


//HW1.3


class Human {
  constructor(name, age, dateOfBirth) {
    this.humanName = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo(){
    return `this.humanName = ${this.humanName}, this.age = ${this.age}, this.dateOfBirth = ${this.dateOfBirth}`;
  }



}

class Employee extends Human {
  constructor(salary, department, ...args) {
    super(...args);
    this.department = department;
    this.salary = salary;
  }

  displayInfo(){
    return `${super.displayInfo()}, and salary = ${this.salary}, department = ${this.department}`;
  };
}

class Manager extends Employee {
  constructor(subs = [], ...args) {
    super(...args);
    this._subs = subs;
  }

  get subs() {
    return this._subs
  }

  set subs(subs) {
    if (subs instanceof Developer) {
      this._subs.push(subs)
    }
  }

  removeSub(i) {
    this._subs.splice(i, 1)
  }

  displayInfo = () => (`super.displayInfo() + , and subs = ${this.subs}`)


}

class Developer extends Employee {
  constructor(chief, ...args) {
    super(...args);
    this._chief = chief;
  }

  get chief() {
    return this._chief
  }

/////////  вот с сеттерами непонятно... вроде должно переписывать, но не хочет
  /*set setChief(chief) {
    if( chief instanceof Manager){
      this._chief = chief;
    }
  }*/
  setChief(newChief) {
    if( newChief instanceof Manager){
      this._chief = newChief;
    }
  }

//////// вот тут - попробовал использовать стрелочную функцию, но не получилось..
  displayInfo() {
    console.log(`${super.displayInfo()} and this.chief = ${this.chief.humanName}`);
  }
}

let Petia = new Manager(vania, 25,  25, 'Petia', 550, 15);
let Katia = new Manager([] , 550, 15,'Katia', 25, 25);
let vania = new Developer(Petia, 500, 1,  'vania', 20, 24);
vania.displayInfo();
vania.setChief(Katia);
console.log(Katia.humanName);
console.log(vania.chief);
vania.displayInfo();



//HW1.4



let value =  document.querySelector('#text').value;
function* quest(){
  let a =  value;
  value = null;

  yield 1;

 let b =document.querySelector('#text').value;
 value = null;
  yield 2;
 let c = document.querySelector('#text').value;
 value = null;
  yield 3;

  return {a, b, c}
}


//////  тут почему-то браузер выдает ошибку
//   Uncaught ReferenceError: regeneratorRuntime is not defined
// хотя все через бабель...

let generator = quest();

function clickk() {
  console.log(1);
  generator.next();
}
let btn = document.querySelector('#btn');
window.onload=function () {
  btn.addEventListener('click', clickk);
};


// HW 1.5


function httpGet(url) {

  return new Promise(function(resolve, reject) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}


let promiceArr = [];
for( let i = 1; i < 11; i++){
  let promice = httpGet(`https://jsonplaceholder.typicode.com/users/${i}`);

  promiceArr.push(promice)

}


Promise.all(promiceArr)
  .then(function(response) {
  console.log(response);
});


