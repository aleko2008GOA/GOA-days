const Myname = "Alex";
Myname && console.log(Myname);

const age3 = undefined;
const age2 = 15;
const age = age3 || age2;
console.log(age);

age >= 18 ? console.log("You are welcome!") : console.log("You are too young.");

age && console.log(age);

const firstTrue = age3 || Myname || age;
console.log(firstTrue);

age > 0 ? console.log("positive") : age < 0 ? console.log("negative") : console.log("zero");

// age >= 18 && Myname == "alex" ? document.getElementsByTagName('h1')[0].classList.add("yes") : document.getElementsByTagName('h1')[0].classList.add("no");

const obj = {
    body: "Hello world!"
}

obj.title || console.log(Object.assign({title: "something"}, obj));

const string = "alex";
const val = string.split('').length > 5 ? "long" : "short";
console.log(val);

age2 == age && Myname.split('').length < 5 ? console.log("Hello") : console.log("Hi");