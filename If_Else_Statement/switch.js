// let day = 7;

// switch (day) {
//   case 1:
//     console.log('It is Monday');
//     break;

//   case 2:
//     console.log('It is Tuesday');
//     break;
//   case 3:
//     console.log('It is Wednesday');
//     break;
//   case 4:
//     console.log('It is Thurday');
//     break;
//   case 5:
//     console.log('It is Friday');
//     break;
//   case 6:
//     console.log('It is Saturday');
//     break;
//   case 7:
//     console.log('It is Sunday');
//     break;
//   default:
//     console.log(`${day} is not a day`);
// }

let score = 101;
let letterGrade;

switch (true) {
  case score > 100:
    console.log(` Your score must be arount 0 to 100`);
    break;
  case score >= 90:
    letterGrade = 'A';
    break;

  case score >= 80:
    letterGrade = 'B';
    break;

  case score >= 70:
    letterGrade = 'C';
    break;

  case score >= 60:
    letterGrade = 'D';
    break;

  case score >= 50:
    letterGrade = 'E';
    break;

  default:
    letterGrade = 'F';
    break;
}

console.log(`Your Grade is ${letterGrade}`);
