// Задание №2

let x = 6;

let y = 15;

let z = 4;

let rezult1 = x += y - x++ * z;

console.log ('Задание №2')

console.log (' x = 6 \n y = 15 \n z = 4')

console.log (' Значение выражения x += y - x++ * z = ' + rezult1)

x = 6;

y = 15;

z = 4;

let rezult2 = z = --x - y * 5;

console.log (' Значение выражения z = --x - y * 5 = ' + rezult2)

x = 6;

y = 15;

z = 4;

let rezult3 = y /= x + 5 % z;

console.log (' Значение выражения y /= x + 5 % z = ' + rezult3)

x = 6;

y = 15;

z = 4;

let rezult4 = z = x++ + y * 5;

console.log (' Значение выражения z = x++ + y * 5 = ' + rezult4)

x = 6;

y = 15;

z = 4;

let rezult5 = x = y - x++ * z;

console.log (' Значение выражения x = y - x++ * z = ' + rezult5)

console.log ('Задание №3')

x = 6;

y = 15;

z = 4;

console.log ( ' Рассмотрим среднее арифметическое трех значений\n x = ' + x + '\n y = ' + y + '\n z = ' + z)

let arithmeticMean = (x + y + z) / 3

console.log (' Среденее арифметическое (x + y + z)/3 = ' + arithmeticMean)

// Задача №4

alert(' Задачи №1-3 решены в консоли')

let cylinderRadius = +prompt(' Задача №4\n Введите значение радиуса цилиндра')

let cylinderHeight = +prompt(' Задача №4\n Введите значение высоты цилиндра')

const PI = 3.14;

let cylinderVolume = PI * (cylinderRadius**2) * cylinderHeight

let cylinderArea = 2 * PI * cylinderRadius * (cylinderHeight + cylinderRadius)

alert(' Задача №4 \n Площадь цилиндра = ' + cylinderVolume + '\n Объем цилиндра = ' + cylinderArea)