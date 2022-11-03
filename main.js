let str = `
010-1234-5678
hyeji5245@naver.com
https://www.omdbapi.com/
The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
aabbcccdddd
`


// .(마침표) : 특정한 문자를 검색하는 패턴
// 이스케이프 문자(Escape Character) : \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말합니다.
// \w : 숫자를 포함한 영어 알파벳
// \b : 특수 문자를 기준으로 경계를 만듬
console.log(str.match(/(?<=@).{1,}/g))



