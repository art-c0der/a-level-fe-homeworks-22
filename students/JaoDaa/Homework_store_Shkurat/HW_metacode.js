// 1. HTML. We create buttons in HTML as inputs
// 2. HTML. we create div for numbers calculations
// 3. By getElementByID we address to "button count plus" name and through innerHTML++ we add a number
// 4. the same, with only difference addressing to "button count minus" and innerHTML-- we deduct a number.
// if we have a a limit for number of calculations, we go with "if" function 


document.getElementById("buttonCountPlus").onclick = function () {
  let count = document.getElementById("buttonCountNumber").innerHTML;
  if (+count <= 3) {
    document.getElementById("buttonCountNumber").innerHTML++;
  }
};

document.getElementById("buttonCountMinus").onclick = function () {
  let count = document.getElementById("buttonCountNumber").innerHTML;
  if (+count >= 2) {
    document.getElementById("buttonCountNumber").innerHTML--;
  }
};

В разметке 1 див и сама кнопка

// 1. Create Array USERS
// 2. Create form for collecting the Data - разметка страницы 
// Создаем переменную с динамическими переменными.
// 3. Create function for presenting all USERS 
// 4. Create function for filtering USERS by name
// 5. Showing filtered name in a created form 

1. 

// 1. HTML we create form
// 2. we create button Filters we give it a class
// 3. We create div where we collect the filtered data 
// 4. JS we address to class by getElementByClassName 



