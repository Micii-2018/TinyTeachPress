// Placeholder catalog + pricing until Stripe is connected (see CheckoutPage.jsx).
// Swap `image` for real cover art and confirm prices before going live.
export const products = [
  {
    id: 'living-blue-saga-1',
    title: 'The Living Blue Saga — Book One',
    series: 'The Living Blue Saga',
    price: 14.99,
    image: 'https://horizons-cdn.hostinger.com/9768d149-2b46-46bd-9a03-d83abc5a5ef9/1000032118-H2zDx.png',
    blurb: 'The flagship chapter-book series — the story that started it all.',
  },
  {
    id: 'thinkers-rising-workbook',
    title: 'Thinkers Rising — 52-Week Family Workbook',
    series: 'Thinkers Rising',
    price: 24.99,
    image: 'https://horizons-cdn.hostinger.com/9768d149-2b46-46bd-9a03-d83abc5a5ef9/1000032118-H2zDx.png',
    blurb: 'One critical-thinking activity a week, all year — solo or as a family.',
  },
];

export const getProduct = (id) => products.find((p) => p.id === id);
