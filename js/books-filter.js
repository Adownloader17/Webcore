const filterBtns = document.querySelectorAll('.filter-btn');
const bookCards = document.querySelectorAll('.book-card');
const searchInput = document.getElementById('searchInput');
const bookCount = document.getElementById('bookCount');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    filterBooks(filter);
  });
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  let visibleCount = 0;

  bookCards.forEach(card => {
    const title = card.querySelector('.book-title').textContent.toLowerCase();
    const author = card.querySelector('.book-author').textContent.toLowerCase();
    const category = card.getAttribute('data-category').toLowerCase();

    if (title.includes(searchTerm) || author.includes(searchTerm) || category.includes(searchTerm)) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  updateCount(visibleCount);
});

function filterBooks(category) {
  let visibleCount = 0;

  bookCards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  updateCount(visibleCount);
}

function updateCount(count) {
  bookCount.textContent = count;
}
