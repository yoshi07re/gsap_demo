### 使用例

アニメーションを使い回して遅延アニメーションさせる

```js
gsap.registerPlugin(ScrollTrigger); //ScrollTrigger プラグインを登録

gsap.utils.toArray(".js-fadeStagger").forEach((item) => {  // .js-fade"というクラス名を持つ全ての要素を配列に変換し、配列の各要素に対して forEach メソッドを使って繰り返し処理
  const el = item.querySelectorAll("div"); //各要素内のdiv要素を取得
  gsap.from(el, { //from()メソッドは、デフォルトに向かって変化
    y: 10, //y座標を10px分から0に変化
    opacity: 0, //opacityを0から1に変化
    duration: 0.6, //アニメーションを0.6秒間かけて実行
    scrollTrigger: { //スクロール位置に応じたアニメーションの制御
      trigger: item, //各要素のトリガーとなる要素をitemに設定
      start: "top 75%", //トリガー要素が画面上部から75%の位置にきいたら発火
      toggleActions: "play none none reverse", //スクロールの向きに応じてアニメーションを再生したり、逆再生したりするように設定。１度きりの場合は不要
    },
    stagger: { //アニメーションの開始時間遅延
      amount: 0.6, //アニメーションの間隔を0.6秒
      from: "start", //最初のアニメーションがどこから始まるか
      ease: "sine.in", //アニメーションのイージング
    },
  });
});
```

### 使用例 02

特定の要素のみに遅延アニメーションさせる

```js
gsap.registerPlugin(ScrollTrigger);

gsap.from(".js-fadeStagger *", {
  y: 10,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".js-fadeStagger",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
  stagger: {
    amount: 0.6,
    from: "start",
    ease: "sine.in",
  },
});
```
