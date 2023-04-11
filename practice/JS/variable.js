var student = {
    grade: 1,
    school: "lion school"
};

console.log(student.grade)

var name3 = Symbol("naknak");
var name4 = Symbol("naknak");


console.log(name3 == name4);
console.log();

// === 타입이 같은지 아닌지를 확인하는 연산자

// 문자열 선언
var greeting = "Hello!";
var farewell = "Bye!";
var myname = "Nakhyun";

// Escape Sequence
var sentence = greeting + '\n' + myname;
sentence = greeting + '\t' + myname;
sentence = greeting + '\'' + myname;
sentence = greeting + '\\' + myname;

// Templete Literal
// 멀티라인 텍스트 작업이 가능하여 이스케이프 시퀀스 문자를 사용하지 않아도 된다.
var a = `Hello!
Hello!`;

console.log(a);

var price = 1000;
var b = "This is " + price + 'dollars';
var c = `이 물건은 ${price}원 입니다.`;
// {} 안에 200 + 100 같은 연산도 가능하다!


// 문자열 함수

var abc = "I am Iron Man";

// Man 이 처음 나오게된 인덱스 번호 반환
abc.indexOf("Man");

// slice 2 이상 4 미만
console.log(abc.slice(2, 4));

// toUpperCase(), toLowerCase()

// startsWith() - 대소문자를 구문하고 시작되면 true 반환
var efg = 'This is mine';
efg.startsWith('Th');

// endsWith() - 끝나면 true 반환
efg.endsWith('mine');

// includes()
efg.includes('is');


/* 배열 */
var mbti = ['INFP', 'ENFJ', 'INFJ'];
console.log(mbti[0]);;
console.log(mbti.length);

mbti[3] = 'ESFP';
mbti[2] = 'dsf';

// push() 배열의 마지막에 요소를 추가한다
console.log(mbti.push('ESTP'));
console.log(mbti);

// 스프레드 문법, 기존 배열을 가져와서 추가시키고 새로운 배열을 생성한다
var newMbti = [...mbti, 'ESFP', 'ILSTJ'];
var newMbti = ['ESFP', 'ILSTJ', ...mbti];

// pop()
console.log(mbti.pop());

// unshift() - 배열 앞쪽에 요소를 추가
console.log(mbti.unshift('ESTP'));

// shift() - 앞쪽 요소를 제거한다.
mbti.shift();

// slice()
mbti.slice(-1, -4);

// join() - 배열의 모든 요소를 문자열로 변환
// ' ' 각 요소를 안에 있는 문자로 나누고 그 문자열 리턴
console.log(mbti.join());
console.log(mbti.join('-'));

// sort() - 정렬함수

// reverse() - 내림차순으로 정렬
mbti.sort().reverse();

// 제어문 control flow 1. 조건문 2. 반복문
// switch 에서 breake 를 쓰지 않으면 default 까지 수행하게 된다
var mbti2 = 'INFP';
var val;

switch (mbti2) {
    case 'INFP':
        val = '1';
    case 'ISFP':
        val = '2';
    case 'INTP':
        val = '2';

    default: val = 0;

}

// 반복문 loop

for (var i = 0; i < 4; i++) {

}
