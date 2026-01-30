import React, { useState } from 'react';
import { Search, X, Star, Calendar, Lock, Unlock, Moon, Sun, BookOpen, Sparkles } from 'lucide-react';

const ReLib = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const mockBooks = {
    '해리포터': [
      {
        title: '해리 포터와 마법사의 돌',
        authors: ['J.K. 롤링'],
        thumbnail: 'https://image.aladin.co.kr/product/309/61/cover/8983920726_1.jpg',
        publisher: '문학수첩'
      },
      {
        title: '해리 포터와 비밀의 방',
        authors: ['J.K. 롤링'],
        thumbnail: 'https://image.aladin.co.kr/product/309/62/cover/8983920734_1.jpg',
        publisher: '문학수첩'
      }
    ],
    '1984': [{
      title: '1984',
      authors: ['조지 오웰'],
      thumbnail: 'https://image.aladin.co.kr/product/29550/48/cover/k212839585_1.jpg',
      publisher: '민음사'
    }],
    '데미안': [{
      title: '데미안',
      authors: ['헤르만 헤세'],
      thumbnail: 'https://image.aladin.co.kr/product/19/1/cover/8932917345_1.jpg',
      publisher: '민음사'
    }],
    '미드나잇': [{
      title: '미드나잇 라이브러리',
      authors: ['매트 헤이그'],
      thumbnail: 'https://image.aladin.co.kr/product/26683/4/cover/k652636556_1.jpg',
      publisher: '인플루엔셜'
    }],
    '어린왕자': [{
      title: '어린 왕자',
      authors: ['생텍쥐페리'],
      thumbnail: 'https://image.aladin.co.kr/product/235/68/cover/8932917248_2.jpg',
      publisher: '민음사'
    }],
    '달러구트': [{
      title: '달러구트 꿈 백화점',
      authors: ['이미예'],
      thumbnail: 'https://image.aladin.co.kr/product/23435/47/cover/k702636239_1.jpg',
      publisher: '팩토리나인'
    }]
  };

  const searchBooks = () => {
    if (!searchQuery.trim()) return;
    
    const found = Object.keys(mockBooks).find(key => 
      searchQuery.toLowerCase().includes(key.toLowerCase())
    );

    if (found) {
      setSearchResults(mockBooks[found]);
    } else {
      alert('검색 결과가 없습니다. 목업 데이터 키워드를 시도해보세요:\n해리포터, 1984, 데미안, 미드나잇, 어린왕자, 달러구트');
      setSearchResults([]);
    }
  };

  const selectBook = (book) => {
    setSelectedBook(book);
    setIsBookOpen(true);
    setSearchResults([]);
    setSearchQuery('');
    setReview('');
    setRating(0);
    setStartDate('');
    setEndDate('');
    setIsPublic(false);
  };

  const closeBook = () => {
    setIsBookOpen(false);
    setTimeout(() => setSelectedBook(null), 300);
  };

  const completeBook = (e) => {
    e.preventDefault();
    
    if (!rating || !endDate) {
      alert('별점과 완독일을 입력해주세요!');
      return;
    }

    const newBook = {
      ...selectedBook,
      review,
      rating,
      startDate,
      endDate,
      isPublic,
      id: Date.now()
    };

    setBooks([...books, newBook]);
    closeBook();
  };

  const reopenBook = (book) => {
    setSelectedBook(book);
    setReview(book.review || '');
    setRating(book.rating || 0);
    setStartDate(book.startDate || '');
    setEndDate(book.endDate || '');
    setIsPublic(book.isPublic || false);
    setIsBookOpen(true);
  };

  const getTier = () => {
    const count = books.length;
    if (count >= 20) return { tier: 'Gold', color: 'from-yellow-600 to-yellow-400' };
    if (count >= 10) return { tier: 'Marble', color: 'from-gray-400 to-gray-200' };
    return { tier: 'Wood', color: 'from-amber-800 to-amber-600' };
  };

  const libraryTier = getTier();
  const avgRating = books.length > 0 
    ? (books.reduce((sum, b) => sum + b.rating, 0) / books.length).toFixed(1) 
    : 0;

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg shadow-lg border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
              📚
            </div>
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Re:Lib
            </h1>
            {books.length >= 10 && (
              <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold rounded-full shadow-lg">
                <Sparkles size={14} />
                {libraryTier.tier}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              총 <strong className={darkMode ? 'text-white' : 'text-gray-900'}>{books.length}</strong>권 완독
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:scale-110 transition-all shadow-md`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Info Banner */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-4 flex items-start gap-3 shadow-md">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="font-bold text-blue-900 mb-1">시연용 검색 키워드</h4>
            <p className="text-sm text-blue-700">해리포터, 1984, 데미안, 미드나잇, 어린왕자, 달러구트</p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && searchBooks()}
              placeholder="책 제목이나 저자를 검색하세요..."
              className={`w-full px-6 py-4 pr-14 rounded-2xl text-lg border-2 ${
                darkMode 
                  ? 'bg-gray-800 text-white border-gray-600 focus:border-purple-500' 
                  : 'bg-white border-gray-200 focus:border-purple-500'
              } focus:outline-none shadow-xl transition-all`}
            />
            <button
              onClick={searchBooks}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:scale-105 transition-all shadow-lg"
            >
              <Search size={24} />
            </button>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className={`mt-6 max-w-2xl mx-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-4 max-h-96 overflow-y-auto`}>
              {searchResults.map((book, idx) => (
                <div
                  key={idx}
                  onClick={() => selectBook(book)}
                  className={`flex gap-4 p-3 rounded-xl cursor-pointer transition-all ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  } hover:translate-x-2`}
                >
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="w-14 h-20 object-cover rounded-lg shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {book.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {book.authors.join(', ')} · {book.publisher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Library */}
        <div>
          <h2 className={`text-3xl font-serif font-bold mb-6 flex items-center justify-between ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            나의 서재
            {books.length > 0 && (
              <span className={`text-base font-normal ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                평균 별점: {avgRating}점
              </span>
            )}
          </h2>

          {books.length === 0 ? (
            <div className={`text-center py-20 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <BookOpen size={80} className="mx-auto mb-6 opacity-30" />
              <h3 className="text-2xl font-bold mb-2">아직 완독한 책이 없습니다.</h3>
              <p className="text-lg">첫 번째 책을 검색하고 기록해보세요!</p>
            </div>
          ) : (
            <div className={`bg-gradient-to-br ${libraryTier.color} p-10 rounded-3xl shadow-2xl relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3 relative z-10">
                {books.map((book) => (
                  <div
                    key={book.id}
                    onClick={() => reopenBook(book)}
                    className="cursor-pointer group"
                    style={{
                      animation: 'flyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <div
                      className="h-44 rounded-sm shadow-xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300 relative"
                      style={{
                        background: `linear-gradient(135deg, hsl(${book.id % 360}, 70%, 60%), hsl(${(book.id + 30) % 360}, 70%, 50%))`,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3), inset -2px 0 8px rgba(0,0,0,0.2), inset 2px 0 5px rgba(255,255,255,0.3)'
                      }}
                    >
                      <div className="writing-mode-vertical p-2 h-full flex flex-col justify-between items-center" style={{writingMode: 'vertical-rl'}}>
                        <div className="text-white text-xs font-bold truncate max-h-32 text-shadow-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                          {book.title}
                        </div>
                        <div className="text-yellow-300 text-sm" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>
                          {'★'.repeat(book.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Achievement */}
        {books.length > 0 && books.length < 20 && (
          <div className={`mt-8 p-6 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} rounded-2xl shadow-lg`}>
            <div className="flex items-center gap-4">
              <Sparkles className="text-purple-500" size={40} />
              <div className="flex-1">
                <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {books.length < 10 
                    ? `Marble 서재까지 ${10 - books.length}권 남았어요!`
                    : `Gold 서재까지 ${20 - books.length}권 남았어요!`
                  }
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  책을 더 읽고 서재를 업그레이드하세요
                </p>
                <div className="mt-3 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-purple-700 h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${books.length < 10 
                        ? (books.length / 10) * 100 
                        : ((books.length - 10) / 10) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Book Modal */}
      {selectedBook && isBookOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative max-w-5xl w-full perspective-1000">
            <button
              onClick={closeBook}
              className="absolute -top-4 -right-4 z-20 p-3 bg-red-500 text-white rounded-full hover:bg-red-600 hover:rotate-90 transition-all shadow-2xl"
            >
              <X size={24} />
            </button>
            
            <div 
              className="flex bg-amber-50 rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
              style={{
                animation: 'bookOpen 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Left Page */}
              <div className="flex-1 p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-r-4 border-amber-200 relative">
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-black/10 pointer-events-none"></div>
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src={selectedBook.thumbnail}
                    alt={selectedBook.title}
                    className="w-52 h-80 object-cover rounded-xl shadow-2xl mb-6 hover:scale-105 transition-transform"
                    style={{boxShadow: '0 25px 50px rgba(0,0,0,0.3), inset 0 -3px 8px rgba(0,0,0,0.1)'}}
                  />
                  <h2 className="text-2xl font-serif font-bold text-gray-900 text-center mb-3 leading-tight">
                    {selectedBook.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-2">
                    {selectedBook.authors.join(', ')}
                  </p>
                  <p className="text-gray-600">
                    {selectedBook.publisher}
                  </p>
                </div>
              </div>

              {/* Right Page */}
              <div className="flex-1 p-8 bg-gradient-to-br from-yellow-50 to-amber-50">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">독서 기록</h3>
                  
                  {/* Rating */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">별점</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="transition-transform hover:scale-125"
                        >
                          <Star
                            size={36}
                            fill={star <= rating ? '#FBBF24' : 'none'}
                            stroke={star <= rating ? '#FBBF24' : '#D1D5DB'}
                            className="drop-shadow-md"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                        <Calendar size={16} />
                        시작일
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">완독일</label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Review */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">감상평</label>
                    <textarea
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="이 책을 읽고 느낀 점을 자유롭게 작성해보세요..."
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none resize-none font-serif leading-relaxed transition-all"
                    />
                  </div>

                  {/* Privacy */}
                  <div className="flex items-center justify-between mb-6">
                    <label className="text-sm font-semibold text-gray-700">공개 설정</label>
                    <button
                      type="button"
                      onClick={() => setIsPublic(!isPublic)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all shadow-md ${
                        isPublic 
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {isPublic ? <Unlock size={18} /> : <Lock size={18} />}
                      {isPublic ? '전체 공개' : '비공개'}
                    </button>
                  </div>

                  {/* Submit */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      completeBook(e);
                    }}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    📚 완독하고 서재에 꽂기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bookOpen {
          0% {
            transform: perspective(2000px) rotateY(-90deg);
            opacity: 0;
          }
          100% {
            transform: perspective(2000px) rotateY(0deg);
            opacity: 1;
          }
        }

        @keyframes flyIn {
          0% {
            transform: scale(2) translateY(-200px);
            opacity: 0;
          }
          60% {
            transform: scale(0.9) translateY(10px);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default ReLib;