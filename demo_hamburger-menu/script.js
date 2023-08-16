document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector(".menu_button");
  const originalSvg = menuButton.innerHTML; // 最初のSVG

  // ボタンがクリックされたらアイコン（SVG）、aria-label、aria-haspopupが切り替わる。
  function toggleMenu() {
    if (menuButton.innerHTML === originalSvg) {
      menuButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2 2L21.799 21.799" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 21.7991L21.799 2.00008" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
      menuButton.setAttribute("aria-label", "メニューを閉じる");
      menuButton.setAttribute("aria-haspopup", "false");
    } else {
      menuButton.innerHTML = originalSvg;
      menuButton.setAttribute("aria-label", "メニューを開く");
      menuButton.setAttribute("aria-haspopup", "true");
    }
  }

  menuButton.addEventListener("click", toggleMenu);
});
