### swiper.js使用例

```js
const mySwiper = new Swiper(".js-swiper", {
  slidesPerView: 2,
  spaceBetween: 24,
  freeMode: {
    enabled: true,
    sticky: true,
    minimumVelocity: 0.4,
    momentumBounce: true,
    momentumRatio: 0.4,
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      navigation: {
        nextEl: ".p-swiper__button--next",
        prevEl: ".p-swiper__button--prev",
      },
    },
  },
});
```

### GSAP使用例

```js
//ScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger);

// スワイパーの最初の4つの要素を初期状態で非表示に設定
gsap.set(".js-swiperStagger li:nth-child(-n+4)", {
  opacity: 0,
  x: 40,
});

// スワイパーのボタンを初期状態で非表示に設定
gsap.set(".js-swiperBtn", {
  opacity: 0,
});

// スクロールトリガーを使用して、アニメーションを制御
gsap
  .timeline({
    defaults: {
      duration: 0.6,
    },
    scrollTrigger: {
      trigger: ".js-swiperStagger",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  })
  // スワイパーの最初の4つの要素をフェードインさせ、スライドさせる
  .to(".js-swiperStagger li:nth-child(-n+4)", {
    opacity: 1,
    x: 0,
    stagger: {
      amount: 0.8,
      from: "start",
      ease: "sine.in",
    },
  })
  // スワイパーのボタンをフェードインさせる
  .to(".js-swiperBtn", {
    opacity: 1,
  });
```
