const base = process.env.NODE_ENV === 'production'
? '/vue-ts/static/api/'
: '/static/api/';
export const API = {
    banner: base + 'banner.json',
    cart: base + 'cart.json',
    cate: base + 'cate.json',
    catePage: base + 'catePage.json',
    centerOrder: base + 'centerOrder.json',
    goodsDetail: base + 'goodsDetail.json',
    goodsList: base + 'goodsList.json',
    order: base + 'order.json',
    search: base + 'search.json',
    updateCart: base + 'updateCart.json',
    user: base + 'user.json',
};
