document.addEventListener('DOMContentLoaded', (event) => {
    /* code light initial start */
    hljs.initHighlightingOnLoad();
    /* code light initial end */

    /* burger menu start */
    const menuSelector = document.querySelector('.header__menu');
    const burderBtn = document.querySelector('.burger');
    const anchors = document.querySelectorAll('.anchor');

    const burger = (burderBtn, menuSelector) => {

        burderBtn.addEventListener('click', function () {
            this.classList.toggle('active__burger');
            menuSelector.classList.toggle('active__nav');
        });
    };

    burger(burderBtn, menuSelector);
    /* burger menu end */



    /* page anchor start */
    const pageAnchor = (anchors, burderBtn, menuSelector) => {
        const speed = 0.4;

        anchors.forEach(function (item) {
            item.addEventListener('click', function (event) {
                event.preventDefault();

                const coordY = self.pageYOffset;
                const anchorPlace = this.href.replace(/[^#]*(.*)/, '$1');
                let coordYAnchorPlace = document.querySelector(anchorPlace).getBoundingClientRect().top;
                let start = null;

                function step(time) {
                    if (start === null) start = time;
                    let progress = time - start;
                    let distanceScroll = (
                        coordYAnchorPlace < 0
                            ? Math.max(coordY - progress / speed, coordY + coordYAnchorPlace)
                            : Math.min(coordY + progress / speed, coordY + coordYAnchorPlace)
                    );
                    window.scrollTo(0, distanceScroll);
                    if (distanceScroll != coordY + coordYAnchorPlace) {
                        requestAnimationFrame(step)
                    }
                }

                burderBtn.classList.remove('active__burger');
                menuSelector.classList.remove('active__nav');
                requestAnimationFrame(step);
            }, false);
        });
    };
    pageAnchor(anchors, burderBtn, menuSelector);
    /* page anchor end */


    /* score start */
    console.log('вёрстка валидная + ', 10);
    console.log('вёрстка семантическая + ', 20);
    console.log('---aside, figure, figcaption, footer, header, main, nav, section');
    console.log('для оформления СV используются css-стили + ', 10);
    console.log('контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы + ', 10);
    console.log('вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется + ', 10);
    console.log('есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. + ', 10);
    console.log('на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) + ', 10);
    console.log('контакты для связи и перечень навыков оформлены в виде списка ul > li + ', 10);
    console.log('CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского + ', 10);
    console.log('CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода использоваться js-библиотека highlight.js + ', 10);
    console.log('CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. + ', 10);
    console.log('CV выполнено на английском языке + ', 10);
    console.log('выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) + ', 10);
    console.log('дизайн, оформление, качество выполнения CV не ниже чем в примерах CV + ', 10);
    console.log('Total: 150/160');
    /* score end */

});