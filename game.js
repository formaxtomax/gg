let answerCooldown = false;

const puzzles = [
    { image: 'images/هامور.png', answer: 'هامور' },
    { image: 'images/ناصر القصبي.png', answer: 'ناصر القصبي' },
    { image: 'images/مالديف.png', answer: 'مالديف' },
    { image: 'images/لب روني.png', answer: 'لب روني' },
    { image: 'images/كيجن.png', answer: 'كيجن' },
    { image: 'images/كودو.png', answer: 'كودو' },
    { image: 'images/كريم بينزما.png', answer: 'كريم بينزما' },
    { image: 'images/كأس العالم.png', answer: 'كأس العالم' },
    { image: 'images/قرنفل.png', answer: 'قرنفل' },
    { image: 'images/صداع نصفي.png', answer: 'صداع نصفي' },
    { image: 'images/سيدي حسن كبتاشينو.png', answer: 'سيدي حسن كبتاشينو' },
    { image: 'images/دفندر.png', answer: 'دفندر' },
    { image: 'images/حوطه.png', answer: 'حوطه' },
    { image: 'images/حلقات بصل.png', answer: 'حلقات بصل' },
    { image: 'images/حراسه مشدده.png', answer: 'حراسه مشدده' },
    { image: 'images/حارس.png', answer: 'حارس' },
    { image: 'images/جوز الهند.png', answer: 'جوز الهند' },
    { image: 'images/توني سبرانو.png', answer: 'توني سبرانو' },
    { image: 'images/بيتكوين.png', answer: 'بيتكوين' },
    { image: 'images/بنزيما.png', answer: 'بنزيما' },
    { image: 'images/بالمر.png', answer: 'بالمر' },
    { image: 'images/اوبر.png', answer: 'اوبر' },
    { image: 'images/الصياح على قدر الم.png', answer: 'الصياح على قدر الم' },
    { image: 'images/الصومال.png', answer: 'الصومال' },
    { image: 'images/ابن بطوطة.png', answer: 'ابن بطوطة' }
];

let currentPuzzleIndex = 0;

// عرض اللغز الأول عند بدء اللعبة
function showPuzzle() {
    const puzzle = puzzles[currentPuzzleIndex];
    document.getElementById('puzzle-image').innerHTML = `<img src="${puzzle.image}" alt="لغز">`;
    document.getElementById('submit-answer').addEventListener('click', function() {
        checkAnswer(puzzle.answer);
    });
}

// التحقق من الإجابة
function checkAnswer(correctAnswer) {
    const playerAnswer = document.getElementById('answer-box').value;
    
    if (answerCooldown) {
        return alert('انتظر قليلاً قبل المحاولة مرة أخرى');
    }

    if (playerAnswer.trim() === correctAnswer) {
        document.getElementById('feedback').textContent = 'إجابة صحيحة!';
        answerCooldown = true;
        setTimeout(() => {
            answerCooldown = false;
            document.getElementById('feedback').textContent = '';
            currentPuzzleIndex++; // الانتقال للغز التالي
            if (currentPuzzleIndex < puzzles.length) {
                showPuzzle(); // عرض اللغز الجديد
            } else {
                document.getElementById('feedback').textContent = 'لقد انتهيت من الألغاز!';
            }
        }, 20000); // الانتظار 20 ثانية بعد الإجابة الصحيحة
    } else {
        document.getElementById('feedback').textContent = 'إجابة خاطئة، انتظر 20 ثانية!';
        answerCooldown = true;
        setTimeout(() => {
            answerCooldown = false;
            document.getElementById('feedback').textContent = '';
        }, 20000); // الانتظار 20 ثانية بعد الإجابة الخاطئة
    }
}
