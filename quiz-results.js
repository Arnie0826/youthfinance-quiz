// quiz-results.js

(() => {
  // 1️⃣ Retrieve stored results
  const score = parseInt(localStorage.getItem('quizScore') || '0', 10);
  const wrong = JSON.parse(localStorage.getItem('wrongAnswers') || '[]');
  const total = score + wrong.length;
  const percent = total ? Math.round((score / total) * 100) : 0;

  // 2️⃣ XP bar & score text
  const xpBarEl = document.getElementById('xpBar');
  const scoreEl = document.getElementById('resultsScore');
  if (xpBarEl) xpBarEl.style.width = `${percent}%`;
  if (scoreEl) scoreEl.textContent = `You got ${score} out of ${total} (${percent}%)`;

  // 3️⃣ Badge
  let badgeName = 'Bronze Badge';
  if (percent >= 90) badgeName = 'Gold Badge';
  else if (percent >= 70) badgeName = 'Silver Badge';
  const badgeEl = document.getElementById('badge');
  if (badgeEl) badgeEl.textContent = badgeName;

  // 4️⃣ Mistakes breakdown
  const mistakesContainer = document.getElementById('mistakesList');
  if (mistakesContainer && wrong.length) {
    const header = document.createElement('h2');
    header.textContent = 'Mistakes Breakdown';
    mistakesContainer.appendChild(header);

    wrong.forEach(item => {
      const div = document.createElement('div');
      div.className = 'mistake';
      div.innerHTML = `
        <div class="mistake-q">${item.q}</div>
        <div class="mistake-correct">Correct: ${item.correct}</div>
        <div class="mistake-feedback">${item.feedback}</div>
      `;
      mistakesContainer.appendChild(div);
    });
  }

  // 5️⃣ Tip of the Day
  const tips = [
    "Track your small purchases daily to see where your money goes.",
    "Aim to save at least 20% of your weekly allowance.",
    "Review and adjust your budget at the start of each month."
  ];
  const tipEl = document.getElementById('tipOfDay');
  if (tipEl) tipEl.textContent = tips[Math.floor(Math.random() * tips.length)];

  // 6️⃣ Next Level button
  const nextBtn = document.getElementById('nextLevelBtn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const lvl = localStorage.getItem('quizLevel') || 'beginner';
      let next = 'beginner';
      if (lvl === 'beginner') next = 'intermediate';
      else if (lvl === 'intermediate') next = 'advanced';
      localStorage.setItem('quizLevel', next);
      window.location.href = 'quiz-page.html';
    });
  }
})();