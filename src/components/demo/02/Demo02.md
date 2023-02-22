### 使用例
アニメーションを使い回してそれぞれ発火させたい場合

```js
gsap.registerPlugin(ScrollTrigger); //ScrollTrigger プラグインを登録

gsap.utils.toArray(".js-fade").forEach((item) => { //.js-fade"というクラス名を持つ全ての要素を配列に変換し、配列の各要素に対して forEach メソッドを使って繰り返し処理
  gsap.from(item, { //from()メソッドは、デフォルトに向かって変化
    y: 10, //y座標を10px分から0に変化
    opacity: 0, //opacityを0から1に変化
    duration: 0.6, //アニメーションを0.6秒間かけて実行
    scrollTrigger: { //スクロール位置に応じたアニメーションの制御
      trigger: item, //各要素のトリガーとなる要素をitemに設定
      start: "top 75%", //トリガー要素が画面上部から75%の位置にきいたら発火
      toggleActions: "play none none reverse", //スクロールの向きに応じてアニメーションを再生したり、逆再生したりするように設定。１度きりの場合は不要
    },
  });
});
```

### 使用例 2
特定の要素のみにアニメーションを当てる場合

```js
gsap.registerPlugin(ScrollTrigger);

gsap.from(".js-fade", {
  y: 10,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".js-fade",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});
```
