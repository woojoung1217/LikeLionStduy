
/* eslint-disable */


// function showMessage(from, text = anotherFunction()) {
//   console.log(from + "  " + text);
// }


// function anotherFunction() {
//   return "l like you "
// }

// showMessage("ANn", 'you are good')

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('보호자의 동의를 받으셨나요?');
//   }
// }

// let age = prompt('나이를 알려주세요', 18);

// if (checkAge(age)) {
//   alert('접속 허용');
// } else {
//   alert('접속 차단');
// // }

// function getAllPrimeNumToN(number) {
//   for (let i = 2; i < number; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i); // 소수
//     }
//     console.log(isPrime)
//   }
// }

// // console.log(isPrime)

// // 예시로 getAllPrimeNumToN 함수 호출


// getAllPrimeNumToN(20);



function getPrimeNum(number) {
  nextPrimeNum: for (let i = 2; i < number; i++) {
    for (let j = 2; j < i; j++) {
      continue
      if (i % j === 0) {
      }
      console.log(i)
    }
  }
}

getPrimeNum(20)