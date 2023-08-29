const catergories = document.querySelectorAll('.categorie');
const productBuyItemButtons = document.querySelectorAll(
  '.product-gallery-item'
);
let cardBadgeCount = 2;

catergories.forEach((item) => {
  item.querySelector('.categorie-name').addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      closeAllCategroies();
      item.classList.toggle('active');
    }
  });
});

productBuyItemButtons.forEach((button) => {
  console.log(button);

  button.addEventListener('click', () => {
    console.log('click');
    cardBadgeCount++;
    console.log(cardBadgeCount);
  });
});

function closeAllCategroies() {
  catergories.forEach((item) => {
    item.classList.remove('active');
  });
}
//
