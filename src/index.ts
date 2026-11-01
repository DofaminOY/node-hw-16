


// ========================================
// Задание 1
// Функция приветствия
// ========================================

// Функция принимает имя пользователя типа string.
// Тип void означает, что функция ничего не возвращает.
function greetUser(name: string): void {
    console.log(`Привет, ${name}!`);
}

greetUser("Иван");


// ========================================
// Задание 2
// Типизация функции с объектом
// ========================================

// Интерфейс Person описывает структуру объекта человека.
interface Person {
    name: string;
    age: number;
    city: string;
}

// Функция принимает объект строго типа Person
// и выводит информацию в заданном формате.
function printPersonInfo(person: Person): void {
    console.log(
        `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`
    );
}

const person: Person = {
    name: "Анна",
    age: 28,
    city: "Bremen"
};

printPersonInfo(person);


// ========================================
// Задание 3
// Простая типизация для числового параметра
// ========================================

// Функция принимает number и возвращает number.
function squareNumber(num: number): number {
    return num * num;
}

console.log(squareNumber(5));


// ========================================
// Задание 4
// Типизация функции с boolean
// ========================================

// Если остаток от деления на 2 равен 0,
// функция возвращает true, иначе false.
function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));


// ========================================
// Задание 5
// Создание интерфейса для объекта
// ========================================

// Интерфейс Student описывает студента.
interface Student {
    name: string;
    grade: number;
}

// Функция принимает объект Student
// и выводит информацию о студенте.
function printStudentInfo(student: Student): void {
    console.log(
        `Студент: ${student.name}, Оценка: ${student.grade}`
    );
}

const student: Student = {
    name: "Алексей",
    grade: 10
};

printStudentInfo(student);


// ========================================
// Задание 6
// Функция с типом void
// ========================================

// Функция принимает строку и только выводит её в консоль.
// Возвращаемое значение отсутствует, поэтому используется void.
function logMessage(message: string): void {
    console.log(message);
}

logMessage("Сообщение из TypeScript");