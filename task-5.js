/*
Задание 5
Пользователь может оформить доставку товара к себе в страну, 
указав ее при посещении страницы в prompt. Учти, пользователь 
может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
Обязательно используй switch. Формат сообщения: 
'Доставка в [страна] будет стоить [цена] кредитов'. 
Но доставка есть не везде, если указанной страны нет в списке, 
то выводи в alert сообщение 'В вашей стране доставка не доступна'.
Ниже приведен список стран и стоимость доставки.
Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов 
Индия - 90 кредитов Ямайка - 130 кредитов
*/

let selectCountry = prompt("Choose your country.");
let China = 150;
let Chile = 250;
let Australia = 165;
let India = 90;
let Jamaica = 130;

selectCountry =
  selectCountry.charAt(0).toUpperCase() + selectCountry.slice(1).toLowerCase();

switch (selectCountry) {
  case "China":
    alert("Delivery to China will cost 150 credits");
    break;

  case "Chile":
    alert("Delivery to Chile will cost 250 credits");
    break;

  case "Australia":
    alert("Delivery to Australia will cost 165 credits");
    break;

  case "India":
    alert("Delivery to India will cost 90 credits");
    break;

  case "Jamaica":
    alert("Delivery to Jamaica will cost 130 credits");
    break;

  default:
    alert("Delivery is not avaliable in your country");
    break;
}
