/*
Задание 6
Напиши скрипт который просит посетителя ввести число в prompt до тех пор, 
пока посетитель на нажмет Cancel и каждый раз добавляет введенное 
значение к общей сумме.
При загрузке страницы пользователю предлагается в prompt ввести число. 
Ввод добавляется к значению переменной total. Операция ввода числа 
продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. 
После того как пользователь прекратил ввод нажав кнопку Cancel, 
показать alert со строкой 'Общая сумма чисел равна [сумма]'. bell 
Делать проверку того, что пользователь ввел именно число, 
а не произвольный набор символов, не нужно. Если хочешь, 
в случае некорректного ввода, показывай alert с текстом 
'Было введено не число, попробуйте еще раз', 
при этом результат prompt плюсовать к общей сумме не нужно, после чего 
снова пользователю предлагается ввести число в prompt.
let input; 
let total = 0;
white_check_mark
eyes
raised_hands

В задании 6 не использовать do...while.
Лучшее решение с циклом for
*/

//ЦИКЛ FOR
/*
let input = prompt("Enter Number");
let total = 0;

for (let i = 0; input !== null; i += 1) {
  if (isNaN(input)) {
    alert("Введено не число");
    input = prompt("Enter Number");
  } else {
    total += Number(input);
    input = prompt("Enter Number");
  }
}

alert(`Общая сумма равна', ${total}`);
*/
//ЦИКЛ WHILE

let input = prompt("Enter Number");
let total = 0;

let i = 0;
while (input !== null) {
  if (isNaN(input)) {
    alert("Введено не число");
    input = prompt("Enter Number");
  } else {
    total += Number(input);
    input = prompt("Enter Number");
    i += 1;
  }
}

alert(`Общая сумма равна', ${total}`);
