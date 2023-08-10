/// <reference types="Cypress" />

import { LOGIN_USERS } from "./mockData.data";

const ELEMENTS = {
  LOGIN_FORM: ".form.form-login",
  EMAIL_INPUT: 'input[name="login[username]"]',
  LOGIN_INPUT: 'input[name="login[password]"]',
  SUBMIT_BTN: 'button[type="submit"]',
  MY_ACCOUNT: ".panel.header .customer-welcome",
  LOGOUT: ".link.authorization-link",

  MENUBAR: ".sections.nav-sections",
  CATEWOMEN: 'li[class*="level0 nav-2 category-item"]',
  CATETOPWOMEN: 'li[class*="level1 nav-2-1 category-item"]',
  CATEBOTWOMEN: 'li[class*="level1 nav-2-2 category-item"]',
  CATEMEN: 'li[class*="level0 nav-3 category-item"]',
  CATETOPMEN: 'li[class*="level1 nav-3-1 category-item"]',
  CATEBOTMEN: 'li[class*="level1 nav-3-2 category-item"]',

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
    // cy.get(".swatch-option.text")
    //   .should("exist")
    //   .then((div) => {
    //     // Kiểm tra xem có thẻ div nào khớp với điều kiện hay không
    //     if (div.length > 0) {
    //       // Thực hiện sự kiện click vào thẻ div đúng điều kiện
    //       cy.get(".swatch-option.text").then((sizes) => {
    //         // Lấy số lượng img product
    //         const numSizes = sizes.length;

    //         // Chọn một số ngẫu nhiên từ 0 đến (số lượng img product - 1)
    //         const randomIndex = Math.floor(Math.random() * numSizes);

    //         // Thực hiện lệnh click trên img product ngẫu nhiên
    //         cy.wrap(sizes[randomIndex]).click();

    //         cy.get(".swatch-option.color")
    //           .should("exist")
    //           .then((div) => {
    //             if (div.length > 0) {
    //               cy.get(".swatch-option.color").then((colors) => {
    //                 const numColors = colors.length;

    //                 const randomIndex = Math.floor(Math.random() * numColors);

    //                 cy.wrap(colors[randomIndex]).click();

    //                 cy.get(".product-options-bottom")
    //                   .find('button[type="submit"]')
    //                   .click();
    //                 cy.wait(3000);
    //               });
    //             } else {
    //               // Thực hiện hành vi khác khi không có thẻ div đúng điều kiện
    //               cy.get(".product-options-bottom")
    //                 .find('button[type="submit"]')
    //                 .click();
    //               cy.wait(3000);
    //             }
    //           });
    //       });
    //     } else {
    //       cy.get(".swatch-option.color")
    //         .should("exist")
    //         .then((div) => {
    //           if (div.length > 0) {
    //             cy.get(".swatch-option.color").then((colors) => {
    //               const numColors = colors.length;

    //               const randomIndex = Math.floor(Math.random() * numColors);

    //               cy.wrap(colors[randomIndex]).click();

    //               // Thực hiện hành vi khác khi không có thẻ div đúng điều kiện
    //               cy.get(".product-options-bottom")
    //                 .find('button[type="submit"]')
    //                 .click();
    //               cy.wait(3000);
    //             });
    //           } else {
    //             // Thực hiện hành vi khác khi không có thẻ div đúng điều kiện
    //             cy.get(".product-options-bottom")
    //               .find('button[type="submit"]')
    //               .click();
    //             cy.wait(3000);
    //           }
    //         });
    //     }
    //   });
  }

  function viewCart() {
    cy.scrollTo("top");
    cy.wait(5000);
    cy.get(".header.content").find(".action.showcart").click();
    cy.wait(2000);

    cy.checkIfEleExists(".action.viewcart", (isExits) => {
      if (isExits) {
        cy.get("#minicart-content-wrapper").find(".action.viewcart").click();

        purchaseCart();
      } else {
        userLogout();
      }
    });
  }

  function purchaseCart() {
    cy.wait(3000);
    cy.get(".cart-summary")
      .find("button[class='action primary checkout']")
      .click();

    cy.wait(15000);
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

    // cy.get(".shipping-address-items")
    //   // .should("exist")
    //   .then((div) => {
    //     // Kiểm tra xem có thẻ div nào khớp với điều kiện hay không
    //     if (div.length > 0) {
    //       cy.wait(3000);
    //       cy.get(ELEMENTS.METHODS_SHIPPING_FORM)
    //         .find(ELEMENTS.SUBMIT_BTN)
    //         .click();
    //     } else {
    //       //vào điền thông tin form checkout
    //       cy.get(ELEMENTS.SHIPPING_FORM)
    //         .find(ELEMENTS.COMPANY_INPUT)
    //         .clear()
    //         .type("Antsomi", { delay: 0 });

    //       cy.get(ELEMENTS.SHIPPING_FORM)
    //         .find(ELEMENTS.STREET_ADDRESS_0)
    //         .clear()
    //         .type("HCM", { delay: 0 });

    //       cy.get(ELEMENTS.SHIPPING_FORM)
    //         .find(ELEMENTS.COUNTRY)
    //         .select("Venezuela")
    //         .should("have.value", "VE");

    //       cy.get(ELEMENTS.SHIPPING_FORM)
    //         .find(ELEMENTS.REGION)
    //         .select("Amazonas")
    //         .should("have.value", "1078");

    //       cy.get(ELEMENTS.SHIPPING_FORM)
    //         .find(ELEMENTS.CITY)
    //         .clear()
    //         .type("HCM", { delay: 0 });

    //       cy.get(ELEMENTS.SHIPPING_FORM)
    //         .find(ELEMENTS.ZIP)
    //         .clear()
    //         .type("1234", { delay: 0 });

    //       cy.get(ELEMENTS.SHIPPING_FORM)
    //         .find(ELEMENTS.TELEPHONE)
    //         .clear()
    //         .type("0987654321", { delay: 0 });

    //       cy.get(ELEMENTS.METHODS_SHIPPING_FORM)
    //         .find(ELEMENTS.METHODS_FLATRATE)
    //         .first()
    //         .check();
    //       cy.wait(3000);
    //       cy.get(ELEMENTS.METHODS_SHIPPING_FORM)
    //         .find(ELEMENTS.SUBMIT_BTN)
    //         .click();
    //     }
    //   });

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
  }

  it("Login page", () => {
    //--start get index random user
    const randomIndexes = [];

    while (randomIndexes.length < 1) {
      const randomIndex = Math.floor(Math.random() * LOGIN_USERS.length);

      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    const users = randomIndexes.map((index) => LOGIN_USERS[index]);
    //--end get index random user

    users.forEach((user) => {
      const { email, password, cookie, gender } = user;

      cy.setCookie(Cypress.env("COOKIE_UID"), cookie);

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

      for (let i = 0; i < randomTimes; i++) {
        checkGender(gender);
      }

      cy.wait(3000);
      viewCart();
    });
  });
});
