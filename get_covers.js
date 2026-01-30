const https = require('https');
const fs = require('fs');

const API_KEY = '82f5226ef2872681832c94f66ff20a6b';
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

function fetchBookCover(title) {
    return new Promise((resolve, reject) => {
        const url = `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(title)}`;

        const options = {
            headers: {
                'Authorization': `KakaoAK ${API_KEY}`
            }
        };

        https.get(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.documents && json.documents.length > 0) {
                        resolve({ title, thumbnail: json.documents[0].thumbnail });
                    } else {
                        resolve({ title, thumbnail: null });
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function main() {
    const results = {};
    for (const book of books) {
        try {
            const result = await fetchBookCover(book);
            if (result.thumbnail) {
                results[result.title] = result.thumbnail;
            }
        } catch (e) {
            console.error(`Error fetching ${book}:`, e.message);
        }
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    fs.writeFileSync('book_covers.json', JSON.stringify(results, null, 2), 'utf8');
    console.log('Results saved to book_covers.json');
}

main();
