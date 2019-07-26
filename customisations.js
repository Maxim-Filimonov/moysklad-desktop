console.log("customizations loading");

function appendStyle(styles) {
  var css = document.createElement("style");
  css.type = "text/css";

  css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
}
const formTable = '#site > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > div > div > table > tbody > tr:nth-child(2) > td > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table > tbody ';
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
    ${formTable} > tr:nth-child(10) > td > table,
    /* Удаление Алкогольная продукция */
    ${formTable} > tr:nth-child(19) > td > table > tbody > tr:nth-child(1) > td > div > div,
    ${formTable} > tr:nth-child(19) > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1),
    /* Удаление Табачная продукция */
    .column > tbody:nth-child(2) > tr:nth-child(23),
    .column > tbody:nth-child(2) > tr:nth-child(24),
    .column > tbody:nth-child(2) > tr:nth-child(25) {
    display: none;
    }
    /* Удаление НДС */
    ${formTable} > tr:nth-child(25) > td:nth-child(1) > div > span {
      display: none;
    }
  `;

function onReady() {
  appendStyle(styles);
  setTimeout(createMovementOfGoodsButton, 5000);
}

function onUrlChange() {
  setTimeout(createMovementOfGoodsButton, 5000);
}
window.addEventListener("hashchange", onUrlChange, false);
document.addEventListener("DOMContentLoaded", onReady, false);

function getGoodId(url) {
  const attributeIdentifier = "id=";
  const indexOfId = url.indexOf(attributeIdentifier);
  return url.substring(indexOfId + attributeIdentifier.length);
}

function $(selector) {
  return document.querySelector(selector);
}
function getGoodsData() {
  // https://online.moysklad.ru/app/#turnover?goodIdFilter=3d161263-81e7-11e8-9ff4-3150002dabda,%D0%92%D0%BB%D0%B0%D0%B3%D0%BE%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%20%22%D0%9F%D0%BE%D0%BB%D0%B8%D1%84%D0%BB%D1%8E%D0%B8%D0%B4%22%20%20%2019%D0%BB.,8855,Good
  const id = getGoodId(window.location.href);
  const name = $(
    ".tutorial-stage-sales-fourth-step > td:nth-child(2) > input:nth-child(1)",
  ).value;
  const nameEncoded = encodeURIComponent(name);
  const code = $(
    ".column > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > input:nth-child(1)",
  ).value;
  return { id, name, nameEncoded, code };
}

function createUrlForMovementOfGoods(data) {
  const urlParts = [data.id, data.nameEncoded, data.code, "Good"];
  return `https://online.moysklad.ru/app/#turnover?goodIdFilter=${urlParts.join(
    ",",
  )}`;
}

function createNewButton(buttonText) {
  return htmlToElement(
    `<div role="button" class="b-popup-button b-popup-button-enabled b-popup-button-gray" tabindex="0">
      <table><colgroup><col></colgroup>
        <tbody>
          <tr><td></td><td><span class="text">${buttonText}</span></td></tr>
        </tbody>
       </table>
     </div>`,
  );
}

function getEndOfParentForm() {
  return $(
    `${formTable} > tr:last-child`,
  );
}
function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

function redirectTo(url) {
  window.location = url;
}
function createMovementOfGoodsButton() {
  const form = getEndOfParentForm();
  if (form) {
    const button = createNewButton("Движения по товару");
    button.addEventListener(
      "click",
      compose(
        redirectTo,
        createUrlForMovementOfGoods,
        getGoodsData,
      ),
    );
    form.parentElement.append(button);
  }
}
const compose = (...fns) =>
  fns.reduceRight(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    value => value,
  );

module.exports = {
  getGoodsData,
  htmlToElement,
  createNewButton,
  createUrlForMovementOfGoods,
};
window.exports = module.exports;
