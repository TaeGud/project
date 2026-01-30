// Kakao API Configuration is loaded from config.js

// KAKAO_API_KEY variable is defined in config.js

// XSS 방지용 HTML 이스케이프
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// State
let readingBooks = [
    {
        title: "해리 포터와 마법사의 돌",
        authors: ["J.K. 롤링"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5496646%3Ftimestamp%3D20260113142633",
        publisher: "문학수첩",
        isbn: "9788983920775",
        startDate: "2026-01-20",
        currentPage: 120,
        totalPages: 360,
        id: 1737331200000
    },
    {
        title: "1984",
        authors: ["조지 오웰"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540843%3Ftimestamp%3D20251203111026",
        publisher: "민음사",
        isbn: "9788937460883",
        startDate: "2026-01-25",
        currentPage: 50,
        totalPages: 400,
        id: 1737763200000
    },
    {
        title: "데미안",
        authors: ["헤르만 헤세"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540810%3Ftimestamp%3D20251204110719",
        publisher: "민음사",
        isbn: "9788937462405",
        startDate: "2026-01-28",
        currentPage: 30,
        totalPages: 250,
        id: 1738022400000
    }
];

let completedBooks = [
    {
        title: "어린왕자",
        authors: ["생텍쥐페리"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F507587%3Ftimestamp%3D20251119111036",
        publisher: "문학동네",
        isbn: "9788954635875",
        rating: 5,
        category: "소설",
        review: "어른이 되어 다시 읽으니 더 깊은 의미가 느껴집니다. 가장 중요한 것은 눈에 보이지 않는다는 말이 가슴에 와닿았어요.",
        startDate: "2026-01-02",
        endDate: "2026-01-05",
        isPublic: true,
        id: 1735776000000
    },
    {
        title: "미드나잇 라이브러리",
        authors: ["매트 헤이그"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5650482%3Ftimestamp%3D20260129142324",
        publisher: "인플루엔셜",
        isbn: "9791167030382",
        rating: 5,
        category: "소설",
        review: "후회 없는 삶은 없다는 것을 깨닫게 해준 책. 지금 이 순간의 선택이 얼마나 소중한지 알려줍니다.",
        startDate: "2026-01-06",
        endDate: "2026-01-09",
        isPublic: true,
        id: 1736121600000
    },
    {
        title: "달러구트 꿈 백화점",
        authors: ["이미예"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5416922%3Ftimestamp%3D20251119142120",
        publisher: "팩토리나인",
        isbn: "9791165341909",
        rating: 4,
        category: "소설",
        review: "따뜻하고 위로가 되는 이야기. 꿈을 사고 파는 백화점이라는 설정이 참신하고 재미있었습니다.",
        startDate: "2026-01-10",
        endDate: "2026-01-12",
        isPublic: false,
        id: 1736467200000
    },
    {
        title: "해리 포터와 비밀의 방",
        authors: ["J.K. 롤링"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5878515%3Ftimestamp%3D20260113145410",
        publisher: "문학수첩",
        isbn: "9788983920928",
        rating: 5,
        category: "판타지",
        review: "첫 편보다 더 긴장감 넘치는 전개가 재미있었습니다.",
        startDate: "2025-12-20",
        endDate: "2025-12-25",
        isPublic: true,
        id: 1735084800000
    },
    {
        title: "코스모스",
        authors: ["칼 세이건"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1164422%3Ftimestamp%3D20250926110305",
        publisher: "사이언스북스",
        isbn: "9788983711892",
        rating: 5,
        category: "과학",
        review: "우주의 광대함과 과학의 아름다움을 느낄 수 있었습니다.",
        startDate: "2025-12-10",
        endDate: "2025-12-18",
        isPublic: true,
        id: 1734048000000
    },
    {
        title: "아몬드",
        authors: ["손원평"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F532619%3Ftimestamp%3D20231124191358",
        publisher: "창비",
        isbn: "9788936434120",
        rating: 4,
        category: "소설",
        review: "감정에 대한 깊이 있는 성찰을 담은 소설입니다.",
        startDate: "2025-12-01",
        endDate: "2025-12-05",
        isPublic: true,
        id: 1733011200000
    },
    {
        title: "82년생 김지영",
        authors: ["조남주"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F541130%3Ftimestamp%3D20260129110644",
        publisher: "민음사",
        isbn: "9788937473395",
        rating: 5,
        category: "소설",
        review: "현대 여성의 삶을 리얼하게 그려낸 작품입니다.",
        startDate: "2025-11-20",
        endDate: "2025-11-23",
        isPublic: true,
        id: 1732060800000
    },
    {
        title: "총, 균, 쇠",
        authors: ["재레드 다이아몬드"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F6346070%3Ftimestamp%3D20260108152003",
        publisher: "문학사상",
        isbn: "9788970127248",
        rating: 5,
        category: "역사",
        review: "인류 문명의 발달을 새로운 시각으로 볼 수 있었습니다.",
        startDate: "2025-11-10",
        endDate: "2025-11-18",
        isPublic: true,
        id: 1731196800000
    },
    {
        title: "사피엔스",
        authors: ["유발 하라리"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F521598%3Ftimestamp%3D20260113110825",
        publisher: "김영사",
        isbn: "9788934972464",
        rating: 5,
        category: "역사",
        review: "인류의 역사를 거시적으로 조망한 명저입니다.",
        startDate: "2025-11-01",
        endDate: "2025-11-08",
        isPublic: true,
        id: 1730419200000
    },
    {
        title: "채식주의자",
        authors: ["한강"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F6042324%3Ftimestamp%3D20260103145758",
        publisher: "창비",
        isbn: "9788936433598",
        rating: 4,
        category: "소설",
        review: "독특하고 강렬한 문체가 인상적이었습니다.",
        startDate: "2025-10-20",
        endDate: "2025-10-24",
        isPublic: true,
        id: 1729382400000
    },
    {
        title: "달과 6펜스",
        authors: ["서머싯 몸"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540804%3Ftimestamp%3D20251204110713",
        publisher: "민음사",
        isbn: "9788937462788",
        rating: 5,
        category: "소설",
        review: "예술과 삶에 대한 깊은 통찰을 담은 작품입니다.",
        startDate: "2025-10-10",
        endDate: "2025-10-15",
        isPublic: true,
        id: 1728518400000
    },
    {
        title: "참을 수 없는 존재의 가벼움",
        authors: ["밀란 쿤데라"],
        thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F541000%3Ftimestamp%3D20251203111033",
        publisher: "민음사",
        isbn: "9788937461033",
        rating: 4,
        category: "철학",
        review: "존재의 의미에 대해 다시 생각하게 만든 책입니다.",
        startDate: "2025-10-01",
        endDate: "2025-10-08",
        isPublic: false,
        id: 1727740800000
    }
];
let selectedBook = null;
let editingBookId = null;
let currentRating = 0;
let isPublic = false;
let darkMode = false;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const readingSection = document.getElementById('readingSection');
const readingGrid = document.getElementById('readingGrid');
const emptyState = document.getElementById('emptyState');
const bookshelf = document.getElementById('bookshelf');
const bookshelfGrid = document.getElementById('bookshelfGrid');
const totalBooksEl = document.getElementById('totalBooks');
const avgRatingEl = document.getElementById('avgRating');
const achievementEl = document.getElementById('achievement');
const achievementTitle = document.getElementById('achievementTitle');
const progressFill = document.getElementById('progressFill');
const tierBadge = document.getElementById('tierBadge');
const tierText = document.getElementById('tierText');
const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

// Calendar Elements
const calendarBtn = document.getElementById('calendarBtn');
const calendarModal = document.getElementById('calendarModal');
const closeCalendar = document.getElementById('closeCalendar');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');
const calendarMonth = document.getElementById('calendarMonth');
const calendarGrid = document.getElementById('calendarGrid');
const calendarBooks = document.getElementById('calendarBooks');
const viewAllBooks = document.getElementById('viewAllBooks');

let currentCalendarDate = new Date();

// Modal Elements
const bookModal = document.getElementById('bookModal');
const closeModal = document.getElementById('closeModal');
const modalBookCover = document.getElementById('modalBookCover');
const modalBookTitle = document.getElementById('modalBookTitle');
const modalBookAuthor = document.getElementById('modalBookAuthor');
const modalBookPublisher = document.getElementById('modalBookPublisher');
const starRating = document.getElementById('starRating');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const reviewText = document.getElementById('reviewText');
const privacyToggle = document.getElementById('privacyToggle');
const privacyText = document.getElementById('privacyText');
const bookForm = document.getElementById('bookForm');

// Event Listeners
searchBtn.addEventListener('click', searchBooks);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBooks();
});

themeToggle.addEventListener('click', toggleTheme);
closeModal.addEventListener('click', closeBookModal);
bookForm.addEventListener('submit', completeBook);
privacyToggle.addEventListener('click', togglePrivacy);

// Calendar Event Listeners
calendarBtn.addEventListener('click', openCalendar);
closeCalendar.addEventListener('click', closeCalendarModal);
prevMonth.addEventListener('click', () => changeMonth(-1));
nextMonth.addEventListener('click', () => changeMonth(1));
viewAllBooks.addEventListener('click', showAllMonthBooks);

// Star Rating
const starButtons = starRating.querySelectorAll('.star-btn');
starButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentRating = parseInt(btn.dataset.rating);
        updateStarDisplay();
    });
});

// 검색 결과 임시 저장 (XSS-safe data-book 대체)
let searchResultsCache = [];

// Functions
async function searchBooks() {
    const query = searchInput.value.trim();
    if (!query) return;

    // Check if API key is set
    if (!KAKAO_API_KEY || KAKAO_API_KEY === 'your_kakao_rest_api_key_here' || KAKAO_API_KEY === '여기에_발급받은_REST_API_키를_입력하세요') {
        alert(
            'API 키가 설정되지 않았습니다!\n\n' +
            '1. config.js 파일을 열어주세요\n' +
            '2. KAKAO_API_KEY 값을 발급받은 API 키로 변경하세요\n\n' +
            'API 키 발급: https://developers.kakao.com'
        );
        return;
    }

    try {
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(query)}&size=10`, {
            headers: {
                'Authorization': `KakaoAK ${KAKAO_API_KEY}`
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert('API 키가 유효하지 않습니다.\n\nconfig.js 파일에서 올바른 API 키를 입력해주세요.');
                return;
            }
            throw new Error('검색 중 오류가 발생했습니다.');
        }

        const data = await response.json();

        if (data.documents && data.documents.length > 0) {
            const formattedBooks = data.documents.map(book => ({
                title: book.title,
                authors: book.authors,
                thumbnail: book.thumbnail || 'images/harry_potter_1.png',
                publisher: book.publisher,
                isbn: book.isbn
            }));
            displaySearchResults(formattedBooks);
        } else {
            alert('검색 결과가 없습니다. 다른 키워드로 검색해보세요.');
            searchResults.style.display = 'none';
        }
    } catch (error) {
        console.error('Search error:', error);
        alert('검색 중 오류가 발생했습니다: ' + error.message);
        searchResults.style.display = 'none';
    }
}

function displaySearchResults(results) {
    searchResultsCache = results;
    searchResults.innerHTML = '';
    results.forEach((book, index) => {
        const item = document.createElement('div');
        item.className = 'search-result-item';

        const thumbnail = document.createElement('img');
        thumbnail.src = book.thumbnail;
        thumbnail.alt = book.title;
        thumbnail.className = 'result-thumbnail';

        const info = document.createElement('div');
        info.className = 'result-info';

        const title = document.createElement('h3');
        title.className = 'result-title';
        title.textContent = book.title;

        const meta = document.createElement('p');
        meta.className = 'result-meta';
        meta.textContent = `${book.authors.join(', ')} · ${book.publisher}`;

        const actions = document.createElement('div');
        actions.className = 'result-actions';

        const startBtn = document.createElement('button');
        startBtn.className = 'action-btn start-reading-btn';
        startBtn.dataset.index = index;
        startBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
            읽기 시작하기
        `;
        startBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            startReading(searchResultsCache[index]);
        });

        const completeBtn = document.createElement('button');
        completeBtn.className = 'action-btn complete-now-btn';
        completeBtn.dataset.index = index;
        completeBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            바로 기록하기
        `;
        completeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            quickComplete(searchResultsCache[index]);
        });

        actions.appendChild(startBtn);
        actions.appendChild(completeBtn);
        info.appendChild(title);
        info.appendChild(meta);
        info.appendChild(actions);
        item.appendChild(thumbnail);
        item.appendChild(info);
        searchResults.appendChild(item);
    });

    searchResults.style.display = 'block';
}

// 읽기 시작
function startReading(book) {
    const readingBook = {
        ...book,
        startDate: new Date().toISOString().split('T')[0],
        status: 'reading',
        id: Date.now()
    };
    readingBooks.push(readingBook);
    saveToLocalStorage();
    updateReadingSection();
    searchResults.style.display = 'none';
    searchInput.value = '';
    alert(`"${book.title}"을(를) 읽기 시작했습니다!`);
}

// 바로 완독 기록 작성
function quickComplete(book) {
    selectedBook = book;
    editingBookId = null;
    openBookModal();
    searchResults.style.display = 'none';
    searchInput.value = '';
    resetForm();
}

function openBookModal() {
    modalBookCover.src = selectedBook.thumbnail;
    modalBookCover.alt = selectedBook.title;
    modalBookTitle.textContent = selectedBook.title;
    modalBookAuthor.textContent = selectedBook.authors.join(', ');
    modalBookPublisher.textContent = selectedBook.publisher;

    bookModal.style.display = 'flex';
}

function closeBookModal() {
    bookModal.style.display = 'none';
    setTimeout(() => {
        selectedBook = null;
        editingBookId = null;
    }, 300);
}

function resetForm() {
    currentRating = 0;
    isPublic = false;
    startDate.value = '';
    endDate.value = '';
    reviewText.value = '';
    updateStarDisplay();
    updatePrivacyDisplay();
}

function updateStarDisplay() {
    starButtons.forEach(btn => {
        const btnRating = parseInt(btn.dataset.rating);
        if (btnRating <= currentRating) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function togglePrivacy() {
    isPublic = !isPublic;
    updatePrivacyDisplay();
}

function updatePrivacyDisplay() {
    const lockIcon = privacyToggle.querySelector('.lock-icon');
    const unlockIcon = privacyToggle.querySelector('.unlock-icon');

    if (isPublic) {
        privacyToggle.classList.remove('private');
        privacyToggle.classList.add('public');
        lockIcon.style.display = 'none';
        unlockIcon.style.display = 'block';
        privacyText.textContent = '전체 공개';
    } else {
        privacyToggle.classList.remove('public');
        privacyToggle.classList.add('private');
        lockIcon.style.display = 'block';
        unlockIcon.style.display = 'none';
        privacyText.textContent = '비공개';
    }
}

function completeBook(e) {
    e.preventDefault();

    if (!currentRating || !endDate.value) {
        alert('별점과 완독일을 입력해주세요!');
        return;
    }

    const newBook = {
        ...selectedBook,
        review: reviewText.value,
        rating: currentRating,
        category: selectedBook.category || '기타',
        startDate: startDate.value,
        endDate: endDate.value,
        isPublic: isPublic,
        id: editingBookId || Date.now()
    };

    // 읽는 중 목록에서 제거 (같은 제목의 책이 있다면)
    readingBooks = readingBooks.filter(b => b.title !== selectedBook.title);

    // 기존 완독 기록 수정인 경우 기존 항목 제거
    if (editingBookId) {
        completedBooks = completedBooks.filter(b => b.id !== editingBookId);
    }

    completedBooks.push(newBook);
    saveToLocalStorage();
    updateReadingSection();
    updateLibrary();
    closeBookModal();
}

function reopenBook(book) {
    selectedBook = book;
    editingBookId = book.id;
    currentRating = book.rating || 0;
    isPublic = book.isPublic || false;
    startDate.value = book.startDate || '';
    endDate.value = book.endDate || '';
    reviewText.value = book.review || '';

    updateStarDisplay();
    updatePrivacyDisplay();
    openBookModal();
}

// 읽는 중인 책을 완독으로 전환
function completeFromReading(book) {
    selectedBook = book;
    editingBookId = null;
    currentRating = 0;
    isPublic = false;
    startDate.value = book.startDate;
    endDate.value = '';
    reviewText.value = '';

    updateStarDisplay();
    updatePrivacyDisplay();
    openBookModal();
}

// 읽는 중인 책 섹션 업데이트
function updateReadingSection() {
    if (readingBooks.length === 0) {
        readingSection.style.display = 'none';
        return;
    }

    readingSection.style.display = 'block';
    readingGrid.innerHTML = '';

    readingBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'reading-card';

        const daysSince = getDaysSince(book.startDate);

        const img = document.createElement('img');
        img.src = book.thumbnail;
        img.alt = book.title;

        const info = document.createElement('div');
        info.className = 'reading-info';
        info.innerHTML = `
            <span class="reading-badge">읽는 중</span>
            <h4></h4>
            <p></p>
            <p class="reading-days">${daysSince}일째 읽는 중</p>
        `;
        info.querySelector('h4').textContent = book.title;
        info.querySelector('p').textContent = book.authors.join(', ');

        card.appendChild(img);
        card.appendChild(info);
        card.addEventListener('click', () => completeFromReading(book));
        readingGrid.appendChild(card);
    });
}

// 날짜 차이 계산
function getDaysSince(dateString) {
    const start = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function updateLibrary() {
    totalBooksEl.textContent = completedBooks.length;

    if (completedBooks.length === 0) {
        emptyState.style.display = 'block';
        bookshelf.style.display = 'none';
        achievementEl.style.display = 'none';
        avgRatingEl.textContent = '';
        tierBadge.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    bookshelf.style.display = 'block';

    // Update average rating
    const avgRating = (completedBooks.reduce((sum, b) => sum + b.rating, 0) / completedBooks.length).toFixed(1);
    totalBooksEl.textContent = completedBooks.length;
    avgRatingEl.textContent = `⭐ ${avgRating}`;
    avgRatingEl.style.display = completedBooks.length > 0 ? 'inline' : 'none';

    // Update tier
    const tier = getTier();
    tierText.textContent = `${tier.name} 서재`;
    bookshelf.className = `bookshelf ${tier.class}`;

    if (completedBooks.length >= 10) {
        tierBadge.style.display = 'flex';
        tierText.textContent = tier.name;
    } else {
        tierBadge.style.display = 'none';
    }

    // 달별로 책 그룹화
    const booksByMonth = {};
    completedBooks.forEach(book => {
        const end = new Date(book.endDate);
        const yearMonth = `${end.getFullYear()}-${String(end.getMonth() + 1).padStart(2, '0')}`;
        if (!booksByMonth[yearMonth]) {
            booksByMonth[yearMonth] = [];
        }
        booksByMonth[yearMonth].push(book);
    });

    // 최신 월부터 정렬
    const sortedMonths = Object.keys(booksByMonth).sort().reverse();

    // Display books grouped by month
    bookshelfGrid.innerHTML = '';
    sortedMonths.forEach((yearMonth, index) => {
        const [year, month] = yearMonth.split('-');
        const monthName = `${year}년 ${parseInt(month)}월`;

        // 월 구분선 추가
        if (index > 0) {
            const divider = document.createElement('div');
            divider.className = 'month-divider';
            bookshelfGrid.appendChild(divider);
        }

        // 월 레이블 추가
        const monthLabel = document.createElement('div');
        monthLabel.className = 'month-label';
        monthLabel.textContent = monthName;
        bookshelfGrid.appendChild(monthLabel);

        // 해당 월의 책들 표시
        booksByMonth[yearMonth].forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.addEventListener('click', () => reopenBook(book));

            const coverWrapper = document.createElement('div');
            coverWrapper.className = 'book-cover-wrapper';
            const coverImg = document.createElement('img');
            coverImg.src = book.thumbnail;
            coverImg.alt = book.title;
            coverImg.className = 'book-cover-img';
            coverWrapper.appendChild(coverImg);

            const cardInfo = document.createElement('div');
            cardInfo.className = 'book-card-info';
            const cardTitle = document.createElement('div');
            cardTitle.className = 'book-card-title';
            cardTitle.textContent = book.title;
            const cardRating = document.createElement('div');
            cardRating.className = 'book-card-rating';
            cardRating.textContent = '★'.repeat(book.rating);
            cardInfo.appendChild(cardTitle);
            cardInfo.appendChild(cardRating);

            bookCard.appendChild(coverWrapper);
            bookCard.appendChild(cardInfo);
            bookshelfGrid.appendChild(bookCard);
        });
    });

    // Update achievement
    if (completedBooks.length > 0 && completedBooks.length < 20) {
        achievementEl.style.display = 'flex';
        const remaining = completedBooks.length < 10 ? 10 - completedBooks.length : 20 - completedBooks.length;
        const nextTier = completedBooks.length < 10 ? 'Marble' : 'Gold';
        achievementTitle.textContent = `${nextTier} 서재까지 ${remaining}권 남았어요!`;

        const progress = completedBooks.length < 10
            ? (completedBooks.length / 10) * 100
            : ((completedBooks.length - 10) / 10) * 100;
        progressFill.style.width = `${progress}%`;
    } else {
        achievementEl.style.display = 'none';
    }
    updateAnalytics();
}

// Reading Analytics - 통합 도넛 차트
function updateAnalytics() {
    const analyticsSection = document.getElementById('analyticsSection');
    const categoryStats = document.getElementById('categoryStats');

    if (completedBooks.length === 0) {
        analyticsSection.style.display = 'none';
        return;
    }

    analyticsSection.style.display = 'block';

    // 카테고리별 집계
    const categories = {};
    completedBooks.forEach(book => {
        const category = book.category || '기타';
        if (!categories[category]) {
            categories[category] = 0;
        }
        categories[category]++;
    });

    // 정렬
    const sortedCategories = Object.entries(categories).sort((a, b) => b[1] - a[1]);
    const total = completedBooks.length;

    // 색상
    const colors = {
        '소설': '#4a5d4e',
        '과학': '#7b8e78',
        '역사': '#5a6d5e',
        '판타지': '#6a7d6e',
        '철학': '#3a4d3e',
        '기타': '#8a9d8e'
    };

    // SVG 생성
    const size = 300;
    const center = size / 2;
    const radius = 100;
    const strokeWidth = 40;

    let currentAngle = -90;
    let svgArcs = '';

    sortedCategories.forEach(([category, count]) => {
        const percentage = (count / total) * 100;
        const angle = (percentage / 100) * 360;
        const endAngle = currentAngle + angle;

        const startRad = (currentAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;

        const x1 = center + radius * Math.cos(startRad);
        const y1 = center + radius * Math.sin(startRad);
        const x2 = center + radius * Math.cos(endRad);
        const y2 = center + radius * Math.sin(endRad);

        const largeArc = angle > 180 ? 1 : 0;

        const pathData = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;

        svgArcs += `<path d="${pathData}" stroke="${colors[category] || colors['기타']}"
                         stroke-width="${strokeWidth}" fill="none" stroke-linecap="round"/>`;

        currentAngle = endAngle;
    });

    categoryStats.innerHTML = `
        <div class="unified-chart">
            <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                ${svgArcs}
            </svg>
            <div class="chart-center-text">
                <div class="total-books">${total}</div>
                <div class="total-label">완독</div>
            </div>
        </div>
        <div class="category-legend">
            ${sortedCategories.map(([category, count]) => {
        const percentage = ((count / total) * 100).toFixed(1);
        return `
                    <div class="legend-item">
                        <span class="legend-color" style="background: ${colors[category] || colors['기타']}"></span>
                        <span class="legend-name">${escapeHtml(category)}</span>
                        <span class="legend-stats">${count}권 (${percentage}%)</span>
                    </div>
                `;
    }).join('')}
        </div>
    `;
}

function getTier() {
    const count = completedBooks.length;
    if (count >= 20) return { name: 'Gold', class: 'gold' };
    if (count >= 10) return { name: 'Marble', class: 'marble' };
    return { name: 'Wood', class: 'wood' };
}

function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');

    if (darkMode) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }

    localStorage.setItem('darkMode', darkMode);
}

function saveToLocalStorage() {
    localStorage.setItem('relibReadingBooks', JSON.stringify(readingBooks));
    localStorage.setItem('relibCompletedBooks', JSON.stringify(completedBooks));
}

function loadFromLocalStorage() {
    const savedReading = localStorage.getItem('relibReadingBooks');
    const savedCompleted = localStorage.getItem('relibCompletedBooks');

    if (savedReading) {
        readingBooks = JSON.parse(savedReading);
    }
    if (savedCompleted) {
        completedBooks = JSON.parse(savedCompleted);
    }

    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        darkMode = true;
        document.body.classList.add('dark-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
}

// Modal close on overlay click
bookModal.addEventListener('click', (e) => {
    if (e.target === bookModal) {
        closeBookModal();
    }
});

// Calendar Functions
function openCalendar() {
    calendarModal.style.display = 'flex';
    currentCalendarDate = new Date();
    renderCalendar();
}

function closeCalendarModal() {
    calendarModal.style.display = 'none';
}

function changeMonth(delta) {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + delta);
    renderCalendar();
}

function renderCalendar() {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    calendarMonth.textContent = `${year}년 ${monthNames[month]}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const booksThisMonth = completedBooks.filter(book => {
        const end = new Date(book.endDate);
        return end.getMonth() === month && end.getFullYear() === year;
    });

    const booksByDate = {};
    booksThisMonth.forEach(book => {
        const day = new Date(book.endDate).getDate();
        if (!booksByDate[day]) booksByDate[day] = [];
        booksByDate[day].push(book);
    });

    let html = '<div class="calendar-weekdays">';
    ['일', '월', '화', '수', '목', '금', '토'].forEach(day => {
        html += `<div class="calendar-weekday">${day}</div>`;
    });
    html += '</div><div class="calendar-days">';

    for (let i = 0; i < firstDay; i++) {
        html += '<div class="calendar-day empty"></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const hasBooks = booksByDate[day];
        const isToday =
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();

        html += `<div class="calendar-day ${isToday ? 'today' : ''} ${hasBooks ? 'has-books' : ''}"
                      data-day="${day}">
                    <span class="day-number">${day}</span>
                    ${hasBooks ? `<span class="book-dot"></span>` : ''}
                 </div>`;
    }

    html += '</div>';
    calendarGrid.innerHTML = html;

    document.querySelectorAll('.calendar-day[data-day]').forEach(dayEl => {
        dayEl.addEventListener('click', () => {
            const day = parseInt(dayEl.dataset.day);
            if (booksByDate[day]) {
                showBooksForDay(day, booksByDate[day]);
            }
        });
    });

    displayMonthBooks(booksThisMonth);
}

function createCalendarBookItem(book) {
    const item = document.createElement('div');
    item.className = 'calendar-book-item';

    const coverWrapper = document.createElement('div');
    coverWrapper.className = 'calendar-book-cover';
    const img = document.createElement('img');
    img.src = book.thumbnail;
    img.alt = book.title;
    img.className = 'calendar-book-cover-img';
    coverWrapper.appendChild(img);

    const info = document.createElement('div');
    info.className = 'calendar-book-info';
    const h5 = document.createElement('h5');
    h5.textContent = book.title;
    const p = document.createElement('p');
    p.textContent = book.authors.join(', ');
    info.appendChild(h5);
    info.appendChild(p);

    if (book.endDate) {
        const dateSpan = document.createElement('span');
        dateSpan.className = 'calendar-book-date';
        dateSpan.textContent = `${new Date(book.endDate).getDate()}일 완독`;
        info.appendChild(dateSpan);
    }

    const rating = document.createElement('div');
    rating.className = 'calendar-book-rating';
    rating.textContent = '★'.repeat(book.rating);

    item.appendChild(coverWrapper);
    item.appendChild(info);
    item.appendChild(rating);

    return item;
}

function displayMonthBooks(books) {
    calendarBooks.innerHTML = '';

    if (books.length === 0) {
        const p = document.createElement('p');
        p.className = 'no-books';
        p.textContent = '이번 달에 완독한 책이 없습니다.';
        calendarBooks.appendChild(p);
        return;
    }

    const title = document.createElement('h4');
    title.className = 'calendar-books-title';
    title.textContent = `이번 달 완독한 책 (${books.length}권)`;

    const list = document.createElement('div');
    list.className = 'calendar-books-list';
    books.forEach(book => {
        list.appendChild(createCalendarBookItem(book));
    });

    calendarBooks.appendChild(title);
    calendarBooks.appendChild(list);
}

function showBooksForDay(day, books) {
    calendarBooks.innerHTML = '';

    const title = document.createElement('h4');
    title.className = 'calendar-books-title';
    title.textContent = `${day}일 완독한 책 (${books.length}권)`;

    const list = document.createElement('div');
    list.className = 'calendar-books-list';
    books.forEach(book => {
        list.appendChild(createCalendarBookItem(book));
    });

    calendarBooks.appendChild(title);
    calendarBooks.appendChild(list);
}

function showAllMonthBooks() {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    const booksThisMonth = completedBooks.filter(book => {
        const end = new Date(book.endDate);
        return end.getMonth() === month && end.getFullYear() === year;
    });

    displayMonthBooks(booksThisMonth);
}

// Modal close on overlay click
calendarModal.addEventListener('click', (e) => {
    if (e.target === calendarModal) {
        closeCalendarModal();
    }
});

// Initialize on page load
loadFromLocalStorage();
updateReadingSection();
updateLibrary();
