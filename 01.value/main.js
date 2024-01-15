// 실습 js study 코딩 앙마 기초 수업 

// name = "MIKE"
// age = 30;
// alert(name)
// console.log(name)

/* => 이렇게 변수에 let , var , const 를 사용하지 않고 변수를 사용하는 건 좋지 않은 방법 누군가 name 을 재사용 한다면 그 전에 내용이 덮어쓰기 됨*/

// ----------------------------------------------------------------


// let name = "MIKE"
// let name = "woojoung";
// Uncaught SyntaxError: Identifier 'name' has already been declared 오류 발생 (이미 선언 됐다)

// ----------------------------------------------------------------

// 변수 선언 방식 & 백틱 기호를 이용한 문자열 내 변수 사용 string

// const name = "woojoung";
// const age = 30;

// const name1 = "jane"
// const name2 = "justin"
// const name3 = `damon`;

// const message = `My name is ${name1} and my age is ${age}`;
// console.log(message)

// const messageAge = `my age is ${age + 10}`;
// console.log(typeof messageAge)


// ----------------------------------------------------------------

// 숫자형  number 

// const age = 30;

// const PI = 3.14;

// console.log(1 + 2);

// console.log(10 - 3);

// console.log(3 * 2)

// console.log(6 / 3);

// console.log(6 % 4);

// 문자를 숫자로 나눴을 때 발생하는 문제 

// const name = 'hello';
// const y = name / 2;

// console.log(y) 

// NaN 을 콘솔이 반환 not a number 에 약자 숫자가 아니다 라는 의미 


//----------------------------------------------------------------

// Boolean 연산자

// 값에 진위 여부 즉 사실과 거짓을 확인하기 위해 사용되는 불린 값 

// const name = 'mike';
// const age = 30;
// console.log(name == 'mike');
// console.log(age > 40)



// typeof 는 초보자 때 사용하면 굉장히 ~~ 좋은 메소드 

// 여기서 중요한건  null 의 경우 typeof 를 찍어보면 null 이 아닌 object(객체) 로 나옴 

// null 은 객체가 아니지만 초기버전 오류를 수정 할 방법이 없음 


// ----------------------------------------------------------------

// alert (알려줌 ) prompt (입력받음 ) ,confirm (확인 ), 대화상자 

// ----------------------------------------------------------------

// 형변환 

// const mathScore = prompt('수학 몇점이냐?');

// const engScore = prompt('영어 몇점이냐?');

// const result = (mathScore + engScore) / 2;

// js 는 문자도 나누기 연산자로 나눠지는 아주 이상한 언어 명시적 형변환이 이런 이유로 필요함 

// console.log(result);


//  연산자 

// console.log(1 + 1)
// console.log(1 - 1)


// // 나머지 
// let result = 10 % 3; // 10을 3으로 나눈 나머지
// console.log(result); // 결과: 1

// // 몫 

// let result2 = 10 / 3; // 10을 3으로 나눈 몫
// console.log(parseInt(result2)); // 결과: 3

// // 연산자 줄여쓰기


// let num = 10;

// num += 10;

// console.log(num)

//  비교 연산자 & 조건문 




// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
//   console.log(`${i}단 끝 `);
// }





const userInput = prompt('숫자를 입력하세요:');

const number = parseInt(userInput);

if (isNaN(number)) {
  console.log('올바른 숫자를 입력하세요.');
} else {
  if (number % 2 === 0) {
    console.log('입력한 숫자는 짝수입니다.');
  } else {
    console.log('입력한 숫자는 홀수입니다.');
  }
}




do {
  let num = prompt("알고 싶은 구구단 단숫자를 입력해주세요");

  for (i = 1; i < 10; i++) {
    console.log(num * i);
  }

  let answer = confirm("알고싶은 다른 단을 입력하시겠습니까?");
} while (answer == 0)
