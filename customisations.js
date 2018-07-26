console.log("customizations loading");

function appendStyle(styles) {
  var css = document.createElement("style");
  css.type = "text/css";

  css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
}
const styles = `
    span.subMenuItem-new[title="Сер. номера"] {
      display: none;
    }
    span.subMenuItem-new[title="Внутренние заказы"] {
      display: none;
    }
    span.subMenuItem-new[title="Перемещения"] {
      display: none;
    }
    span.subMenuItem-new[title="Отчеты комиссионера"] {
      display: none;
    }
    span.subMenuItem-new[title="Товары на реализации"] {
      display: none;
    }
    span.subMenuItem-new[title="Воронка продаж"] {
      display: none;
    }
    .topMenuItem-new:nth-child(16) {
      display: none;
    }
  `;

window.onload = function() {
  appendStyle(styles);
};
// document.appendChild()

// document.onload = () => {
//   document.querySelectorAll(".topMenuItem-new").forEach(x =>
//     x.addEventListener("click", () => {
//       document.querySelector(
//         "span.subMenuItem-new.report[title='Сер. номера']",
//       ).style =
//         "display: none";
//     }),
//   );
// };
