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
    /* Удаление Упаковка */
    .b-guide-editor > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(10), 
    /* Удаление Алкогольная продукция */
    .b-guide-editor > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(19),
    /* Удаление Табачная продукция */
    .column > tbody:nth-child(2) > tr:nth-child(23),
    .column > tbody:nth-child(2) > tr:nth-child(24),
    .column > tbody:nth-child(2) > tr:nth-child(25) {
    display: none;
    }
    /* Удаление НДС */
    .column > tbody:nth-child(2) > tr:nth-child(28) {
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
