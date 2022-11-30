export const REGEX_URL = /^https?:\/\/(www\.)?[a-zA-z\d-]+\.[\w\d\-._~:/?#[\]@!$&'()*+,;=]{2,}#?$/;
export const REGEX_NAME = /^[A-Za-zА-ЯЁа-яё\-\s]*$/;
export const REGEX_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const shortMovieDuration = 40;

export const mediumWidthSize = 1024;
export const minWidthSize = 550;

export const maxQuantityCards = 12;
export const mediumQuantityCards = 8;
export const minQuantityCards = 5;

export const maxNumberCards = 3;
export const mediumNumberCards = 2;

export const notFoundError = 'По вашему запросу ничего не найдено';
export const internalServerError = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const unauthorizedError = "Неверный email или пароль";
export const useNameError = 'Поле должно содержать только латиницу, кириллицу, пробел или дефис';
export const useConflictError = "Пользователь с таким email уже существует";
export const movieFoundText = "Введите ключевое слово для поиска";
export const editUserText = "Ваши данные успешно обновлены!";
export const authorizerText = "Пожалуйста, авторизуйтесь";
export const authorizerOk = "Вы успешно вошли в приложение";
export const authorizerErr = "Что-то пошло не так, попробуйте еще раз";
