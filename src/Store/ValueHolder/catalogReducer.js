export default function (state = null, action){
  if(action.type === 'ITEM_SELECTED') return action.payload;
  return {
      id: 1,
      name: 'Ирисы',
      description: 'Ваши любимые цветы ирисы? Но надоело постоянно ездить на дачу, потому что в квартире нет условий для живых цветов? Есть решение этой проблемы. Ирисы из фоамирана будут отличным дополнением к любому интерьеру. ',
      size: '28 см',
      price: '160 грн',
      images: [
        './ItemDescription/images/irises/1.jpg',
        './ItemDescription/images/irises/2.jpg',
        './ItemDescription/images/irises/3.jpg',
        './ItemDescription/images/irises/4.jpg',
        './ItemDescription/images/irises/5.jpg',
        './ItemDescription/images/irises/6.jpg',
        './ItemDescription/images/irises/7.jpg',
        './ItemDescription/images/irises/8.jpg'
      ]
  };
}
