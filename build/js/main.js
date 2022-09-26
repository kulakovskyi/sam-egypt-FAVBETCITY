"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var rulesBtn = document.querySelector('.sam__button-rules');
var overlay = document.querySelector('.sam__overlay');
var rulesContent = document.querySelector('.sam__back');
var closeRules = document.querySelector('.sam__rules-close');
rulesBtn.addEventListener('click', function () {
  overlay.classList.remove('opacity');
  rulesContent.classList.remove('hidden');
});
closeRules.addEventListener('click', function () {
  overlay.classList.add('opacity');
  rulesContent.classList.add('hidden');
});
var copyCodeContent = document.querySelector('.sam__code-text').textContent;
var copyBtn = document.querySelector('.sam__code-copy');
var codeCopy = document.querySelector('.sam__code');
copyBtn.addEventListener('click', function () {
  navigator.clipboard.writeText(copyCodeContent).then(function () {
    console.log('Text copied to clipboard');
    codeCopy.classList.add('copy');
    copyBtn.disabled = true;
    setTimeout(function () {
      codeCopy.classList.remove('copy');
      copyBtn.disabled = false;
    }, 5000);
  });
});
var mainPage = document.querySelector('.sam');
var mobileButton = document.querySelector('.sam__button-mob');
var footer = document.querySelector('.sam__footer');
var logo = document.querySelector('.sam__logo');
var footerCopy = document.querySelector('.sam__footer-copyright');
var counter = 0;
mobileButton.addEventListener('click', function () {
  counter++;
  mainPage.classList.toggle('overflow');
  footer.classList.toggle('visible');
  mobileButton.classList.toggle('active');

  if (counter % 2 === 0) {
    footerCopy.setAttribute('id', 'none');
    logo.setAttribute('id', 'bottom');
  }

  if (counter % 2 !== 0) {
    logo.setAttribute('id', 'none');
    footerCopy.setAttribute('id', 'bottom');
  }
});
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute("href");
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsicnVsZXNCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvdmVybGF5IiwicnVsZXNDb250ZW50IiwiY2xvc2VSdWxlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjb3B5Q29kZUNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsImNvcHlCdG4iLCJjb2RlQ29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZGlzYWJsZWQiLCJzZXRUaW1lb3V0IiwibWFpblBhZ2UiLCJtb2JpbGVCdXR0b24iLCJmb290ZXIiLCJsb2dvIiwiZm9vdGVyQ29weSIsImNvdW50ZXIiLCJ0b2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJhbmNob3JzIiwicXVlcnlTZWxlY3RvckFsbCIsImFuY2hvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJsb2NrSUQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBaEI7QUFDQSxJQUFNRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFyQjtBQUNBLElBQU1HLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFuQjtBQUVBRixRQUFRLENBQUNNLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQUk7RUFDbkNILE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7RUFDQUosWUFBWSxDQUFDRyxTQUFiLENBQXVCQyxNQUF2QixD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QWdDRSxjQUFoQyxDQUErQztRQUMzQ0MsUUFBUSxFQUFFLFFBRGlDO1FBRTNDQyxLQUFLLEVBQUU7TUFGb0MsQ0FBL0M7SUFJSCxDQVBEOzs7RUFESixvREFBOEI7SUFBQTtFQVM3Qjs7Ozs7O0FDbkVEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBydWxlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYW1fX2J1dHRvbi1ydWxlcycpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYW1fX292ZXJsYXknKTtcbmNvbnN0IHJ1bGVzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYW1fX2JhY2snKTtcbmNvbnN0IGNsb3NlUnVsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2FtX19ydWxlcy1jbG9zZScpO1xuXG5ydWxlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5Jyk7XG4gICAgcnVsZXNDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufSlcblxuY2xvc2VSdWxlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7XG4gICAgcnVsZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufSlcblxuY29uc3QgY29weUNvZGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fY29kZS10ZXh0JykudGV4dENvbnRlbnQ7XG5jb25zdCBjb3B5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhbV9fY29kZS1jb3B5Jyk7XG5jb25zdCBjb2RlQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYW1fX2NvZGUnKTtcblxuY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weUNvZGVDb250ZW50KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGV4dCBjb3BpZWQgdG8gY2xpcGJvYXJkJyk7XG4gICAgICAgICAgICBjb2RlQ29weS5jbGFzc0xpc3QuYWRkKCdjb3B5JylcbiAgICAgICAgICAgIGNvcHlCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIGNvZGVDb3B5LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcHknKTtcbiAgICAgICAgICAgICAgICBjb3B5QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICB9KVxufSlcblxuY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2FtJyk7XG5jb25zdCBtb2JpbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2FtX19idXR0b24tbW9iJyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2FtX19mb290ZXInKTtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2FtX19sb2dvJylcbmNvbnN0IGZvb3RlckNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2FtX19mb290ZXItY29weXJpZ2h0Jyk7XG5cbmxldCBjb3VudGVyID0gMDtcblxubW9iaWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjb3VudGVyKys7XG4gICAgbWFpblBhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmZsb3cnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICAgIG1vYmlsZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBpZihjb3VudGVyJTIgPT09IDApe1xuICAgICAgICBmb290ZXJDb3B5LnNldEF0dHJpYnV0ZSgnaWQnLCAnbm9uZScpO1xuICAgICAgICBsb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm90dG9tJyk7XG4gICAgfVxuICAgIGlmKGNvdW50ZXIlMiAhPT0gMCl7XG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdub25lJyk7XG4gICAgICAgIGZvb3RlckNvcHkuc2V0QXR0cmlidXRlKCdpZCcsICdib3R0b20nKTtcbiAgICB9XG5cbn0pXG5cbmNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xuXG5mb3IgKGNvbnN0IGFuY2hvciBvZiBhbmNob3JzKSB7XG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGJsb2NrSUQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihibG9ja0lEKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICAgIGJsb2NrOiBcInN0YXJ0XCIsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cblxuXG5cbiIsIiJdfQ==
