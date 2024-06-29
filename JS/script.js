/* 1. დაწერეთ შემდეგი სკრიპტი:

მოცემულია ცვლადი, რომლის მნიშვნელობაა 100.

დაწერეთ if პირობა, თუ ცვლადის მნიშვნელობა ნაკლებია 50ზე დაუბეჭდოს - ნაკლებია 50ზე, 
თუ ცვლადის მნიშვნელობა მეტია 20ზე დაიბეჭდოს მეტია 20ზე, 
ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - შეცდომა. */

let number = 100;

if (number < 50) {
  console.log("the number is less than 50");
} else if (number > 20) {
  console.log("the number is more than 20");
} else {
  console.log("error");
}

/* 2.მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. 

ახალი if ის სინტაქსით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true, 
ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; */

let name1 = "Mariam";

console.log(name1 == "Mariam" ? true : false);

/* 3. მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. 
switch case ის საშუალებით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; */

let name2 = "Mariam";

switch ("Mariam") {
  case name2:
    console.log(true);
    break;
  default:
    console.log(false);
}

// 4. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე.

for (let i = 5; i < 100; i++) {
  console.log(i);
}

/*  5. მოცემულია მასივი:
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე. */

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10) console.log(array1[i]);
}

/*  6. მოცემულია ობიექტი:

let user2 = {
name: "anna",
age: 20,
studentStatus: "active"
}

1. თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
2. თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
3. თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
4. ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით; */

//  if..else

let user2 = {
  name: "anna",
  age: 20,
  studentStatus: "active",
};

if (user2.age < 18 && user2.studentStatus == "active") {
  console.log("hello user");
} else if (user2.name == "Levani") {
  console.log("Hello Levani");
} else if (user2.studentStatus == "active" || user2.age < 25) {
  console.log("Hello Anna");
} else {
  console.log("error");
}

// ternary operator

name2.age < 18 && user2.studentStatus == "active"
  ? console.log("hello user")
  : user2.name == "Levani"
  ? console.log("Hello Levani")
  : user2.studentStatus == "active" || user2.age < 25
  ? console.log("Hello Anna")
  : console.log("error");

/* 7. მოცემულია მასივი:

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
ამოიღეთ მხოლოდ ლუწი რიცხვები. */

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let i = 0; i < array6.length; i++) {
  if (array6[i] % 2 === 0) {
    console.log(array6[i]);
  }
}

/* 8. მოცემულია მასივი: 

let users = [

{ userName: "giorgi", status: false}, 
{ userName: "levani", status: false}, 
{ userName: "anna", status: true}

]

კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true; */

let users = [
  { userName: "giorgi", status: false },
  { userName: "levani", status: false },
  { userName: "anna", status: true }
];

for (let i = 0; i < users.length; i++) {
  if (users[i].status === true) {
    console.log(users[i]);
  }
};
