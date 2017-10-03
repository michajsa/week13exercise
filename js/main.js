// var nameArray = ['Mike', 'Joe', 'Matt', 'Marco', 'Dave'];
// console.log(nameArray[0].charAt(2));
//
// var mike = 'Sanchez';
// console.log(mike.charAt(0))
//
// console.log(nameArray[2].charAt(2));
//
// console.log(nameArray[1].indexOf('i'));
//
// var mike = nameArray[0].split('');
// console.log(mike);
//
// mike = mike.join('');
// console.log(mike)
//
// mike = ' Mike ';
// console.log(mike);
//
// mike = mike.trim();
// console.log(mike);
//
// var joe = 'Joe';
// joe = joe.replace('J', 'B');
// console.log(joe);

// var nameArray = ['mike', 'joe', 'marco', 'dave', 'matt'];
// // var nameArray = name.split(' ');
// for (var i = 0 ; i < nameArray.length; i++){
//   // console.log(nameArray[i].split(''));
//   // console.log(nameArray)
// };
//
//
// function

// function validate() {
//   var userEmail = document.getElementById('userEmail');
//
//   var regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-z]{2,5}$/;
//   var test = regex.test(userEmail.value);
//
//   console.log(test);
// }
//
// var button = document.getElementById('submit');
// button.addEventListener('click', validate, false);

// function submitForm() {
//   var questions = document.getElementsByClassName('question1');
//   var results = document.getElementById('results');
//
//   var checkedAnswers = [];
//
//   for(var i = 0; i < questions.length; i++) {
//     if(question[i].checked) {
//       checkedAnswers.push(questions[i].value)
//     }
//   }
// console.log(checkedAnswers);
//
// if(checkedAnswers.length === 0) {
//   results.textContent = 'You forgot to answer question 1';
//   return;
// } else {
//   results.textContent = checkedAnswers;
//   }
// }
//
// var button = document.getElementById('button');
//
// button.addEventListener('click', submitForm, false);

// function submitForm() {
//   var questions = document.getElementsByClassName('question2');
//   var results = document.getElementById('results');
//   var answer = [];
//
//   for(var i = 0; i < questions.length; i++){
//     if(questions[i].selected) {
//       answer.push(questions[i].value)
//     }
//   }
//
//   console.log(answer)
//
//   if(answer.length === 0) {
//     results.textContent = 'You didn\'t answer question 2';
//     return;
//   } else{
//     results.textContent = answer;
//   }
// }
// var button = document.getElementById('submit');
// button.addEventListener('click', submitForm, false);

function submitForm() {
  var questions = document.getElementsByClassName('question3');
  var results = document.getElementById('results');
  var answer = [];

  for(var i = 0; i < questions.length; i++) {
    if(questions[i].checked) {
      answer.push(questions[i].value);
    }
  }
  console.log(answer);
  if(answer.length == 0) {
    results.textContent = 'You didn\'t answer question 3';
    return
  } else {
    results.textContent = answer;
    }
  }

  var button = document.getElementById('submit');
  button.addEventListener('click', submitForm, false);
