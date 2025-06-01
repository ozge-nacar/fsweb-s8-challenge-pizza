describe("Pizza Sipariş Formu ve Anasayfa Testleri", () => {
  const formuDoldur = ({ name, size, crust, toppings, note }) => {
    if (name) cy.get('[data-cy="nameInput"]').type(name);
    if (size) cy.contains(size).click();
    if (crust) cy.contains(crust).click();
    if (toppings)
      toppings.forEach((item) => cy.contains(item).click({ force: true }));
    if (note) cy.get('[data-cy="order-note"]').type(note, { force: true });
  };
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it('"Acıktım" butonuna tıklanınca sipariş sayfasına yönlendirmeli', () => {
    cy.contains("Acıktım").click();
    cy.url().should("include", "/orderForm");
  });

  it('Anasayfadaki her "SİPARİŞ VER" butonu sipariş sayfasına yönlendirmeli', () => {
    cy.get(".btn-siparis").contains("SİPARİŞ VER").click();
    cy.url().should("include", "/orderForm");
    cy.go("back");
    cy.get(".btn-siparis1").contains("SİPARİŞ VER").click();
    cy.url().should("include", "/orderForm");
    cy.go("back");
    cy.get(".btn-siparis2").contains("SİPARİŞ VER").click();
    cy.url().should("include", "/orderForm");
  });

  it("Zorunlu alanlar boşken sipariş gönderilemez", () => {
    cy.contains("SİPARİŞ VER").click();
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("İsim 3 karakterden kısa girilirse buton aktif olmamalı", () => {
    cy.contains("SİPARİŞ VER").click();
    cy.get('[data-cy="nameInput"]').type("Al");
    cy.contains("Küçük").click();
    cy.contains("Kalın").click();
    ["Sucuk", "Soğan", "Biber"].forEach((item) =>
      cy.contains(item).click({ force: true })
    );
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("Boyut ve kalınlık seçilmeden buton aktif olmamalı", () => {
    cy.contains("SİPARİŞ VER").click();
    cy.get('[data-cy="nameInput"]').type("Zeynep");
    ["Sucuk", "Soğan", "Biber"].forEach((item) => cy.contains(item).click());
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("0, 1 veya 2 malzeme seçilirse buton aktif olmamalı", () => {
    cy.contains("SİPARİŞ VER").click();
    cy.get('[data-cy="nameInput"]').type("Ali");
    cy.contains("Küçük").click();
    cy.contains("Kalın").click();

    cy.get('[data-cy="submit-button"]').should("be.disabled");

    cy.contains("Sucuk").click({ force: true });
    cy.contains("Mısır").click({ force: true });
    cy.contains("Biber").click({ force: true });
  });

  it("En fazla 10 malzeme seçilebilir", () => {
    cy.contains("SİPARİŞ VER").click();
    const toppings = [
      "Pepperoni",
      "Mısır",
      "Tavuk Izgara",
      "Sarımsak",
      "Ananas",
      "Sosis",
      "Soğan",
      "Sucuk",
      "Biber",
      "Kabak",
      "Domates",
    ];
    toppings.forEach((item) => cy.contains(item).click());
    cy.get('input[type="checkbox"]:checked').should("have.length.lte", 10);
    cy.on("window:alert", (str) => {
      expect(str).to.include("En fazla 10 malzeme");
    });
  });

  it("Sayfa yenilendiğinde form sıfırlanmalı", () => {
    cy.contains("SİPARİŞ VER").click();
    cy.get('[data-cy="nameInput"]').type("Zeynep");
    cy.contains("Büyük").click();
    cy.contains("Kalın").click();
    ["Sucuk", "Soğan", "Biber"].forEach((item) =>
      cy.contains(item).click({ force: true })
    );
    cy.wait(4050);
    cy.reload();
    cy.get('[data-cy="nameInput"]').should("exist").and("have.value", "");
    cy.get('input[type="radio"]').should("not.be.checked");
    cy.get('input[type="checkbox"]').should("not.be.checked");
  });

  it("Yanlış URL kullanıldığında 404 sayfası göstermeli", () => {
    cy.visit("http://localhost:5173/asdfasdf", { failOnStatusCode: false });
    cy.contains("404").should("exist");
  });
});
