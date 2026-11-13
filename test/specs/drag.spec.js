
import dragPage from "../pageobjects/drag.page";

// Referência: https://webdriver.io/docs/api/mobile/dragAndDrop/

describe("Testes na tela DragDrop", () => {

  beforeEach(async () => {
    await driver.execute("mobile: terminateApp", {
      appId: "com.wdiodemoapp"
    });

    await driver.execute("mobile: activateApp", {
      appId: "com.wdiodemoapp"
    });

    await browser.pause(2000);

    await dragPage.abrirMenuDrag();
  });

  it("Deve arrastar a peça até o lugar certo", async () => {
    const peca_1 = await $("~drag-l1");
    const destino_1 = await $("~drop-l1");

    await peca_1.waitForDisplayed({ timeout: 10000 });
    await peca_1.dragAndDrop(destino_1);

    await browser.pause(2000);
  });

  it("Deve montar o quebra-cabeça completo com dragAndDrop", async () => {
    const pecas = [
      ["drag-l1", "drop-l1"],
      ["drag-l2", "drop-l2"],
      ["drag-l3", "drop-l3"],
      ["drag-r1", "drop-r1"],
      ["drag-r2", "drop-r2"],
      ["drag-r3", "drop-r3"],
      ["drag-c1", "drop-c1"],
      ["drag-c2", "drop-c2"],
      ["drag-c3", "drop-c3"]
    ];

    for (const [origem, destino] of pecas) {
      const peca = await $(`~${origem}`);
      const localDestino = await $(`~${destino}`);

      await peca.waitForDisplayed({ timeout: 10000 });
      await localDestino.waitForDisplayed({ timeout: 10000 });

      await peca.dragAndDrop(localDestino);

      await browser.pause(1000);
    }

    const mensagem = await $(
      'android=new UiSelector().text("Congratulations")'
    );

    await mensagem.waitForDisplayed({ timeout: 10000 });
    await expect(mensagem).toBeDisplayed();
  });

});
