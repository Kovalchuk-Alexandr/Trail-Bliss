# Проект Trail Bliss. Адаптивная вёрстка лендинга с нуля. HTML, SCSS, Gulp

Современный лендинг Travel Bliss — от чистой папки до адаптива! Подключаем Gulp, разбираем SCSS-структуру, верстаем header и hero-блок, подбираем шрифты и цвета из Figma.

***Макет Figma***: [https://www.figma.com/design/wVArJNdgtX8Fs5U95n7Ute/](https://www.figma.com/design/wVArJNdgtX8Fs5U95n7Ute/)

[See Demo](https://kovalchuk-alexandr.github.io/Trail-Bliss/)

## Технологии

- HTML,
- SCSS,
- Gulp, file-include, file-loop
- JS,
- Два Swiper slider
- Accordion
- Мобильная адаптация
- Дизайн-система (UI Kit)
- Компонентный подход
- Возможность указать каталог сборки build / docs (по-умолчанию docs)

##### Установить зависимости:

```bash
npm i
```

##### Зпустить в режиме разработки:

```bash
gulp
```

##### Собрать версию для публикации:

```bash
gulp build
```

##### Accordion. Install the package & import files

[NPM accordion-js](https://www.npmjs.com/package/accordion-js)

```bash
npm i accordion-js
```

```js
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
```

#### Fonts

Конвертация шрифтов OTF->TTF, TTF->WOFF, WOFF->WOFF2 с копией в `src/fonts`.
Если, только WOFF/Woff2 - копируются в `build`

Все шрифты автоматически собираются в "src\scss\base\_fontsAutoGen.scss".
При этом, важно! Название - плотность - курсив разделять пробелами

- `Montserrat-Bold-Italic.ttf`
- `Inter-Regular.ttf`

При подключении только внешних шрифтов, `src/fonts` оставить пустым.

Либо, положить в папку `src/files/fonts`. Вообще, все любые дополнительные файлы (pdf, dbf...) можно ложить в `src/files/` и они попадут в `build/files/`

#### Important!!!

##### Styles

`- npm i sass@1.77.8` - последняя версия позволяющий работать с `@import` в SCSS

##### Images

Обязательно добавить `{ encoding: false }` в путь источника, т.к. начиная с GULP 5.0 изображение по-умолчанию передается текстовой строкой
`.pipe(src(path.source.img, { encoding: false }))`

[`gulp-picture-html`](https://github.com/WpWebr/gulp-picture-html) - расширение для Gulp, создает для html `<img>` стэк `<picture>`

###### Например

```html
// Изменяет тэг 'img'
  <img src="img/image.jpg" alt="image">
```

```html
// на 'picture'
<picture>
    <source srcset="img/image.avif" type="image/avif">
    <source srcset="img/image.webp" type="image/webp">
    <img src="img/image.jpg" alt="image">
</picture>
```

Чтобы не делать преобразование - добавить `class="no-picture"` к тэгу `<img>`
Убрать все  `class="no-picture"` из тэгов `<img>` - установить в `gulpfile.js`:

```js
const pictureHTMLConfig = {
    extensions: [".jpg", ".png", ".jpeg"], // image file extensions for which we create 'picture'
    source: [".avif", ".webp"], // create 'source' with these formats
    noPicture: ["no-picture"], // if we find this class for the 'img' tag, then we don't create a 'picture' (multiple classes can be set)
    noPictureDel: false, // if 'true' remove classes for 'img' tag given in 'noSource:[]'
};
```

#### Important!!!

Все строковые данные (атрибуты) внутри `<img>` или `<picture>` оборачивать только в двойные кавычки `""`. При одинарных - ошибка.

##### Svg Sprite

Собирает svg в './docs/img/svgsprite'
`gulp sprite` - в 'sprite.symbol.svg'
`gulp stack` - в 'sprite.stack.svg'

[GitHub сборка:](https://github.com/Kovalchuk-Alexandr/Gulp-v04-2025.git)

##### Webpack

При подключении `fancybox: import { Fancybox } from '@fancyapps/ui';`
выдавало ошибку `error in entrypoint size limit`
Лечение: поправить размер лимитов в `webpack.config.js`

```js
performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
```

[Решение (https://www.youtube.com/watch?v=9ZE6RSEoFTI):](https://www.youtube.com/watch?v=9ZE6RSEoFTI)

### Выравнивание размеров карточек card-review

Два подхода — зависит от приоритета:

1. Фиксированная высота + клэмп текста — самый чистый вариант для слайдера

```CSS
.card-review {
    // добавить:
    height: 280px; // подбераем под свой контент
}

.card-review__text {
    // добавить:
    display: -webkit-box;
    -webkit-line-clamp: 6; // кол-во строк
    line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1; // чтобы текст занимал всё свободное место, а автор прижался вниз
}
```

`flex: 1` на тексте + `flex-direction: column` на карточке — автор всегда внизу, текст обрезается при необходимости

2. Без фиксированной высоты — выравнивание через Swiper

Если слайды в одном ряду, можно просто добавить в стили Swiper-обёртки:

```CSS
.swiper-wrapper {
    align-items: stretch; // все слайды растягиваются по высоте самого высокого
}

.swiper-slide {
    height: auto;
}

.card-review {
    height: 100%; // карточка заполняет слайд
}
```

Тогда все карточки одной высоты без клэмпа — текст не обрезается, просто выравниваются по самой длинной.
