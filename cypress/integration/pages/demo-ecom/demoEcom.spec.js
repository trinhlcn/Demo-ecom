/// <reference types="Cypress" />

import { LOGIN_USERS } from "./mockData.data";
import { ACCOUNT_USERS } from "Cypress/fixtures/mockData.data.test.json";

// Import the filesystem module
// const fs = require("fs");

//const {dataUsersAccount} = require('Cypress/fixtures/mockData.data.test.json');

const ELEMENTS = {
  LOGIN_FORM: ".form.form-login",
  EMAIL_INPUT: 'input[name="login[username]"]',
  LOGIN_INPUT: 'input[name="login[password]"]',
  SUBMIT_BTN: 'button[type="submit"]',
  MY_ACCOUNT: ".panel.header .customer-welcome",
  LOGOUT: ".link.authorization-link",

  MENUBAR: ".sections.nav-sections",
  CATEHOME: 'li[class*="level0 level-top"]',
  CATEWHATNEW: 'li[class*="level0 nav-1 category-item"]',
  CATEWOMEN: 'li[class*="level0 nav-2 category-item"]',
  CATETOPWOMEN: 'li[class*="level1 nav-2-1 category-item"]',
  CATEBOTWOMEN: 'li[class*="level1 nav-2-2 category-item"]',
  CATEMEN: 'li[class*="level0 nav-3 category-item"]',
  CATETOPMEN: 'li[class*="level1 nav-3-1 category-item"]',
  CATEBOTMEN: 'li[class*="level1 nav-3-2 category-item"]',
  CATEGEAR: 'li[class*="level0 nav-4 category-item"]',
  CATEBAGS: 'li[class*="level1 nav-4-1 category-item"]',
  CATEFITNESS: 'li[class*="level1 nav-4-2 category-item"]',
  CATEWATCHES: 'li[class*="level1 nav-4-3 category-item"]',
  CATETRAINING: 'li[class*="level0 nav-5 category-item"]',
  CATEVIDEO: 'li[class*="level1 nav-5-1 category-item"]',

  SHIPPING_FORM: ".form.form-shipping-address",
  COMPANY_INPUT: 'input[name="company"]',
  STREET_ADDRESS_0: 'input[name="street[0]"]',
  STREET_ADDRESS_1: 'input[name="street[1]"]',
  STREET_ADDRESS_2: 'input[name="street[2]"]',
  COUNTRY: 'select[name="country_id"]',
  REGION: 'select[name="region_id"]',
  CITY: 'input[name="city"]',
  ZIP: 'input[name="postcode"]',
  TELEPHONE: 'input[name="telephone"]',
  METHODS_SHIPPING_FORM: ".form.methods-shipping",
  METHODS_FLATRATE: 'input[name*="ko_unique_"]',

  PAYMENTS_FORM: ".form.payments",
};

describe("Test Demo Ecom", () => {
  before(() => {
    // cy.visit('/customer/account/login');
    // cy.getCookie(Cypress.env('COOKIE_USER')).then((cookie) => {
    //     const user = JSON.parse(cookie.value);
    //     cy.visit(`${user.user_id}/destination/connector/destinations`);
    // });
  });

  beforeEach(() => {
    // cy.setUID();

    cy.on("uncaught:exception", () => {
      return false;
    });
  });

  function checkGender(gender) {
    if (gender === "female") {
      //vào trang menu
      cy.wait(3000);
      cy.scrollTo("top");
      cy.wait(2000);
      cy.get(ELEMENTS.MENUBAR).find(ELEMENTS.CATEWOMEN).trigger("mouseover");

      const catewomens = [ELEMENTS.CATETOPWOMEN, ELEMENTS.CATEBOTWOMEN];
      const randomIndexCatewomens = Math.floor(
        Math.random() * catewomens.length
      );
      const randomCatewomens = catewomens[randomIndexCatewomens];
      cy.get(ELEMENTS.CATEWOMEN).find(randomCatewomens).trigger("mouseover");
      cy.get(ELEMENTS.CATEWOMEN).find(randomCatewomens).click();

      viewProductAdd();
    } else if (gender === "male") {
      //vào trang menu
      cy.scrollTo("top");
      cy.wait(2000);
      cy.get(ELEMENTS.MENUBAR).find(ELEMENTS.CATEMEN).trigger("mouseover");

      const catemens = [ELEMENTS.CATETOPMEN, ELEMENTS.CATEBOTMEN];
      const randomIndexCatemens = Math.floor(Math.random() * catemens.length);
      const randomCatemens = catemens[randomIndexCatemens];
      cy.get(ELEMENTS.CATEMEN).find(randomCatemens).trigger("mouseover");
      cy.get(ELEMENTS.CATEMEN).find(randomCatemens).click();

      viewProductAdd();
    }
  }

  function randomCate() {
    //vào trang menu
    cy.wait(3000);
    cy.scrollTo("top");
    cy.wait(5000);
    const catelevel0 = [
      ELEMENTS.CATEWOMEN,
      ELEMENTS.CATEMEN,
      ELEMENTS.CATEGEAR,
      ELEMENTS.CATETRAINING,
    ];
    const randomIndexCatelevel0 = Math.floor(Math.random() * catelevel0.length);
    const randomCatelevel0 = catelevel0[randomIndexCatelevel0];

    cy.get(ELEMENTS.MENUBAR).find(randomCatelevel0).trigger("mouseover");
    if (randomCatelevel0 == ELEMENTS.CATEWOMEN) {
      const catewomens = [ELEMENTS.CATETOPWOMEN, ELEMENTS.CATEBOTWOMEN];
      const randomIndexCatewomens = Math.floor(
        Math.random() * catewomens.length
      );
      const randomCatewomens = catewomens[randomIndexCatewomens];
      cy.get(ELEMENTS.CATEWOMEN).find(randomCatewomens).trigger("mouseover");
      cy.get(ELEMENTS.CATEWOMEN).find(randomCatewomens).click();

      // random nếu true thì view cart
      const randomValue = Math.random() < 0.5;
      if (randomValue) {
        viewProductAdd();
      }
    } else if (randomCatelevel0 == ELEMENTS.CATEMEN) {
      const catemens = [ELEMENTS.CATETOPMEN, ELEMENTS.CATEBOTMEN];
      const randomIndexCatemens = Math.floor(Math.random() * catemens.length);
      const randomCatemens = catemens[randomIndexCatemens];
      cy.get(ELEMENTS.CATEMEN).find(randomCatemens).trigger("mouseover");
      cy.get(ELEMENTS.CATEMEN).find(randomCatemens).click();

      // random nếu true thì view cart
      const randomValue = Math.random() < 0.5;
      if (randomValue) {
        viewProductAdd();
      }
    } else if (randomCatelevel0 == ELEMENTS.CATEGEAR) {
      const categears = [
        ELEMENTS.CATEBAGS,
        ELEMENTS.CATEFITNESS,
        ELEMENTS.CATEWATCHES,
      ];
      const randomIndexCategears = Math.floor(Math.random() * categears.length);
      const randomCategears = categears[randomIndexCategears];
      cy.get(ELEMENTS.CATEGEAR).find(randomCategears).trigger("mouseover");
      cy.get(ELEMENTS.CATEGEAR).find(randomCategears).click();

      // random nếu true thì view cart
      const randomValue = Math.random() < 0.5;
      if (randomValue) {
        viewProductAdd();
      }
    } else if (randomCatelevel0 == ELEMENTS.CATETRAINING) {
      cy.get(ELEMENTS.CATETRAINING)
        .find(ELEMENTS.CATEVIDEO)
        .trigger("mouseover");
      cy.get(ELEMENTS.CATETRAINING).find(ELEMENTS.CATEVIDEO).click();

      // random nếu true thì view cart
      const randomValue = Math.random() < 0.5;
      if (randomValue) {
        viewProductAdd();
      }
    }
  }

  function viewProductAdd() {
    // Lấy danh sách các img product vào biến
    cy.get(".product-image-photo").then((buttons) => {
      // Lấy số lượng img product
      const numButtons = buttons.length;
      // Chọn một số ngẫu nhiên từ 0 đến (số lượng img product - 1)
      const randomIndex = Math.floor(Math.random() * numButtons);
      // Thực hiện lệnh click trên img product ngẫu nhiên
      cy.wrap(buttons[randomIndex]).click();
    });

    // random nếu true thì addtocart
    const randomValue = Math.random() < 0.5;
    if (randomValue) {
      addToCart();
    }
  }

  function addToCart() {
    cy.get("body", { timeout: 60000 }) // Timeout là tùy chọn, tùy chỉnh theo yêu cầu của bạn
      .should("exist")
      .then(() => {
        cy.wait(10000);
        cy.checkIfEleExists(".swatch-option.text", (isExits) => {
          if (isExits) {
            cy.get(".swatch-option.text").then((sizes) => {
              // Lấy số lượng size của product
              const numSizes = sizes.length;

              // Chọn một số ngẫu nhiên từ 0 đến (số lượng size - 1)
              const randomIndex = Math.floor(Math.random() * numSizes);

              // Thực hiện lệnh click trên size ngẫu nhiên
              cy.wrap(sizes[randomIndex]).click();
              cy.checkIfEleExists(".swatch-option.color", (isExits) => {
                if (isExits) {
                  cy.get(".swatch-option.color").then((colors) => {
                    const numColors = colors.length;

                    const randomIndex = Math.floor(Math.random() * numColors);

                    cy.wrap(colors[randomIndex]).click();

                    cy.get(".product-options-bottom")
                      .find('button[type="submit"]')
                      .click();
                    cy.wait(3000);
                  });
                } else {
                  // Thực hiện hành vi khác khi không có thẻ div đúng điều kiện
                  cy.get(".product-options-bottom")
                    .find('button[type="submit"]')
                    .click();
                  cy.wait(3000);
                }
              });
            });
          } else {
            cy.checkIfEleExists(".swatch-option.color", (isExits) => {
              if (isExits) {
                cy.get(".swatch-option.color").then((colors) => {
                  const numColors = colors.length;

                  const randomIndex = Math.floor(Math.random() * numColors);

                  cy.wrap(colors[randomIndex]).click();

                  cy.get(".product-options-bottom")
                    .find('button[type="submit"]')
                    .click();
                  cy.wait(3000);
                });
              } else {
                // Thực hiện hành vi khác khi không có thẻ div đúng điều kiện
                cy.get(".product-options-bottom")
                  .find('button[type="submit"]')
                  .click();
                cy.wait(3000);
              }
            });
          }
        });
      });
  }

  function viewCart() {
    cy.scrollTo("top");
    cy.wait(5000);
    cy.get(".header.content").find(".action.showcart").click();
    cy.wait(2000);

    cy.checkIfEleExists(".action.viewcart", (isExits) => {
      if (isExits) {
        const randomValue = Math.random() < 0.5;
        if (randomValue) {
          cy.get("#minicart-content-wrapper").find(".action.viewcart").click();
          clickButtonPurchaseInCart();
        } else {
          clickButtonPurchaseMiniCart();
        }
      } else {
        userLogout();
      }
    });
  }

  function clickButtonPurchaseMiniCart() {
    cy.wait(3000);
    cy.get("#minicart-content-wrapper")
      .find("button[class='action primary checkout']")
      .click();

    purchaseCart();
  }

  function clickButtonPurchaseInCart() {
    cy.wait(3000);
    cy.get(".cart-summary")
      .find("button[class='action primary checkout']")
      .click();

    purchaseCart();
  }

  function purchaseCart() {
    cy.wait(5000);
    cy.get(".loading-mask").should("not.exist");

    cy.checkIfEleExists(".shipping-address-items", (isExits) => {
      if (isExits) {
        cy.wait(3000);
        cy.get(ELEMENTS.METHODS_SHIPPING_FORM)
          .find(ELEMENTS.SUBMIT_BTN)
          .click();
      } else {
        //vào điền thông tin form checkout
        cy.get(ELEMENTS.SHIPPING_FORM)
          .find(ELEMENTS.COMPANY_INPUT)
          .clear()
          .type("Antsomi", { delay: 0 });

        cy.get(ELEMENTS.SHIPPING_FORM)
          .find(ELEMENTS.STREET_ADDRESS_0)
          .clear()
          .type("HCM", { delay: 0 });

        cy.get(ELEMENTS.SHIPPING_FORM)
          .find(ELEMENTS.COUNTRY)
          .select("Venezuela")
          .should("have.value", "VE");

        cy.get(ELEMENTS.SHIPPING_FORM)
          .find(ELEMENTS.REGION)
          .select("Amazonas")
          .should("have.value", "1078");

        cy.get(ELEMENTS.SHIPPING_FORM)
          .find(ELEMENTS.CITY)
          .clear()
          .type("HCM", { delay: 0 });

        cy.get(ELEMENTS.SHIPPING_FORM)
          .find(ELEMENTS.ZIP)
          .clear()
          .type("1234", { delay: 0 });

        cy.get(ELEMENTS.SHIPPING_FORM)
          .find(ELEMENTS.TELEPHONE)
          .clear()
          .type("0987654321", { delay: 0 });

        cy.get(ELEMENTS.METHODS_SHIPPING_FORM)
          .find(ELEMENTS.METHODS_FLATRATE)
          .first()
          .check();

        cy.wait(3000);
        cy.get(ELEMENTS.METHODS_SHIPPING_FORM)
          .find(ELEMENTS.SUBMIT_BTN)
          .click();
      }
    });

    //step 2 purchase
    cy.wait(5000);
    cy.get(ELEMENTS.PAYMENTS_FORM)
      .find(".payment-method._active")
      .find(ELEMENTS.SUBMIT_BTN)
      .click();

    cy.wait(5000);

    //User logout
    userLogout();
  }

  function userLogout() {
    cy.wait(5000);
    cy.scrollTo("top");
    cy.wait(5000);
    cy.get(ELEMENTS.MY_ACCOUNT).click();
    cy.wait(2000);
    cy.get(ELEMENTS.MY_ACCOUNT).find(ELEMENTS.LOGOUT).click();
    cy.wait(10000);
    //set new cookie uid
    const newCookie = randomUid();
    cy.setCookie(Cypress.env("COOKIE_UID"), newCookie, {domain: 'demo-ecom.antsomi.com'});
  }

  function randomUid() {
    const prefix = '120';
    const min = 1000000000;
    const max = 9999999999; 
    const desiredLength = 10;

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomString = `${prefix}${randomNumber.toString().substring(0, desiredLength - prefix.length)}`;

    let isUnique = false;

    while (!isUnique) {
      for (let i = 0; i < ACCOUNT_USERS.length; i++) {
        const user = ACCOUNT_USERS[i];
        cy.log(user);
        const { email, password, cookie, gender } = user;
        if (cookie !== randomString) {
          isUnique = true;
        }
      }
    }
    return randomString;
  }

  it("Login page", () => {
    cy.visit("/");

    //get all array user in source file
    const accountUsers = [...ACCOUNT_USERS];

    //--start get index random user
    const randomIndexes = [];

    while (randomIndexes.length < 5) {
      const randomIndex = Math.floor(Math.random() * ACCOUNT_USERS.length);

      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    const users = randomIndexes.map((index) => ({
      ...ACCOUNT_USERS[index],
      index,
    }));

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const { email, password, cookie, gender, index } = user;

      if (cookie == null) {
        // cy.wait(1000 * 120);
        //--wait cookie
        const cookieName = Cypress.env("COOKIE_UID"); // Thay đổi thành tên của cookie bạn muốn kiểm tra
        const maxWaitTime = 1000 * 120; // Thời gian chờ tối đa (milliseconds)

        cy.waitUntil(
          () =>
            cy.getCookie(cookieName).then((cookie) => {
              return cookie !== null; // Kiểm tra xem cookie đã xuất hiện chưa
              
            }),
          { timeout: maxWaitTime, interval: 500 } // Thiết lập timeout và interval cho vòng lặp
        );

        cy.getCookie(Cypress.env("COOKIE_UID")).then((cookie) => {
          if (cookie) {
            const uid = JSON.parse(cookie.value);
            const userInfo = {
              email: email,
              password: password,
              cookie: `${uid}`,
              gender: gender,
            };

            accountUsers[index] = userInfo;

            const jsonData = JSON.stringify(
              { ACCOUNT_USERS: accountUsers },
              null,
              2
            );
            cy.writeFile("Cypress/fixtures/mockData.data.test.json", jsonData);
          }
        });
      } else {
        // cy.clearCookie(Cypress.env("COOKIE_UID"));
        cy.setCookie(Cypress.env("COOKIE_UID"), cookie, {domain: 'demo-ecom.antsomi.com'});
      }

      // User login
      cy.visit("/customer/account/login");

      cy.get(ELEMENTS.LOGIN_FORM)
        .find(ELEMENTS.EMAIL_INPUT)
        .type(email, { delay: 0 });

      cy.get(ELEMENTS.LOGIN_FORM)
        .find(ELEMENTS.LOGIN_INPUT)
        .type(password, { delay: 0 });

      cy.get(ELEMENTS.LOGIN_FORM).find(ELEMENTS.SUBMIT_BTN).click();

      // random số lần vào view product add to cart
      const minTimes = 2;
      const maxTimes = 3;
      const randomTimes =
        Math.floor(Math.random() * (maxTimes - minTimes + 1)) + minTimes;

      for (let j = 0; j < randomTimes; j++) {
        // checkGender(gender);
        randomCate();
      }

      cy.wait(3000);
      viewCart();

    }
  });

});
