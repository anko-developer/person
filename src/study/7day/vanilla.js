(function() {
    'use strict';
    // 정규식

    const targetStr = 'A AAA Aa BB bB zZz 24,000';

    // let regexr = /A+|B+/ig;
    // let regexr = /[AB]+/ig;

    // let regexr = /[A-Z]+/ig;
    // let regexr = /[A-Za-z]+/g; // 위와 같은 뜻
    
    //let regexr = /[0-9,]+/g; // '0' ~ '9' 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
    //let regexr = /[\d,]+/g; // \d는 숫자를 의미한다, 반대로 \D는 숫자를 제외한 문자열을 의미함
    //let regexr = /[\D]+/g;

    let regexr = /[\w,]+/g; // \w는 숫자와 알파벳을 의미한다, ','가 한번이상 반복되는 숫자와 알파벳
    //let regexr = /[\W,]+/g; // \W는 숫자와 알파벳이 아닌 ','가 한번이상 반복되는 문자열
    console.log(targetStr.match(regexr));
}()); 

(function(){
    'use strict';
    const url = 'http://www.alba.co.kr';
    const fileName = 'anko.jpg';

    // 'http'로 시작하는지 검사
    // ^ : 문자열의 처음을 의미한다.
    // $ : 문자열의 끝을 의미한다.
    // let regexr = /^http/g;
    let regexr = /jpg$/g;
    // console.log(regexr.test(url));
    console.log(regexr.test(fileName));
    
}());

(function() {
    'use strict';

    const id = 'abcd1234';

    // 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 검사
    // {4,10}: 4 ~ 10자리
    let regexr = /^[A-Za-z0-9]{4,10}$/;
    console.log(regexr.test(id));
    
}());