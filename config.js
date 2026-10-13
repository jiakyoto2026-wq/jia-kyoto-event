// ===== 設定 =====
// GAS（Apps Script）をウェブアプリとしてデプロイしたときのURL（…/exec）を貼り付けてください。
window.JIA_API_URL = 'https://script.google.com/macros/s/ここにデプロイID/exec';

// フォームの選択肢（サーバー側 Code.gs の定数と合わせてください。入力チェックはサーバー側でも行います）
window.JIA_OPTS = {
  categories: ['JIA正会員', 'JIA協力会員', 'JIA会員スタッフ', '一般'],
  grades: ['小学1年', '小学2年', '小学3年', '小学4年', '小学5年', '小学6年', '中学1年', '中学2年', '中学3年'],
  genders: ['男', '女', '回答しない'],
  maxChildren: 5,
  types: ['見学会・講演会', '建築と子供たち'],
  privacy: 'ご記入いただいた個人情報は、本イベントの運営および参加者へのご連絡のみに使用し、それ以外の目的には使用いたしません。',
};

// ===== ここから下は変更不要 =====
(function () {
  var base = location.href.split('#')[0].split('?')[0].replace(/[^/]*$/, '');
  var params = {};
  new URLSearchParams(location.search).forEach(function (v, k) { params[k] = v; });
  window.BOOT = { params: params, url: base, opts: window.JIA_OPTS };
})();
