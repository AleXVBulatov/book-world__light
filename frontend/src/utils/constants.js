import ROUTES from "./routes";

export const BASE_URL = "http://localhost:4000";

export const navigation = [
  { title: "Главная", route: ROUTES.HOME },
  { title: "Книги", route: ROUTES.BOOKS },
  { title: "О нас", route: ROUTES.ABOUT },
  { title: "Контакты", route: ROUTES.CONTACTS },
  { title: "Доставка и оплата", route: ROUTES.SERVICE },
];
