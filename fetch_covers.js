// 임시 스크립트: 각 책의 올바른 표지 URL 가져오기
const KAKAO_API_KEY = '82f5226ef2872681832c94f66ff20a6b';

const books = [
    "어린왕자",
    "미드나잇 라이브러리",
    "달러구트 꿈 백화점",
    "해리 포터와 비밀의 방",
    "코스모스",
    "아몬드",
    "82년생 김지영",
    "총, 균, 쇠",
    "사피엔스",
    "채식주의자",
    "달과 6펜스",
    "참을 수 없는 존재의 가벼움"
];

async function fetchBookCover(title) {
    const url = `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(title)}`;

    const response = await fetch(url, {
        headers: {
            'Authorization': `KakaoAK ${KAKAO_API_KEY}`
        }
    });

    const data = await response.json();
    if (data.documents && data.documents.length > 0) {
        return {
            title: title,
            thumbnail: data.documents[0].thumbnail
        };
    }
    return null;
}

async function main() {
    for (const book of books) {
        const result = await fetchBookCover(book);
        if (result) {
            console.log(`"${result.title}": "${result.thumbnail}",`);
        }
        await new Promise(resolve => setTimeout(resolve, 500)); // API 호출 제한 방지
    }
}

main();
