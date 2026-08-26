# Automação Mobile com Appium — Android

## Objetivo

Projeto de automação de testes para uma aplicação Android, desenvolvido durante a formação em Engenharia de Qualidade de Software.

Neste projeto desenvolvi automação mobile utilizando WebdriverIO e Appium, com organização baseada em Page Object Model para facilitar manutenção e reutilização dos testes.

## O que desenvolvi

- Configuração de automação mobile para Android.
- Integração do WebdriverIO com Appium.
- Execução de testes em emulador ou dispositivo Android.
- Automação de fluxos de login.
- Automação de formulários.
- Automação de ações de Drag and Drop.
- Automação de gesto Swipe.
- Organização dos elementos e ações usando Page Object Model.
- Configuração de capabilities, APK e serviço Appium.
- Investigação de problemas de dispositivo, APK, seletores e timeout.

## Tecnologias

- Appium
- WebdriverIO
- JavaScript
- Mocha
- Android
- Android SDK
- Page Object Model

## Pré-requisitos

- Node.js 14 ou superior.
- npm.
- JDK.
- Android SDK.
- Android Studio.
- Emulador Android ou dispositivo físico.
- Appium.
- ADB.

Verifique o Node.js e npm:

```bash
node --version
npm --version
```

Verifique os dispositivos Android:

```bash
adb devices
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/priottomarcos7-coder/Exerc-cio-M26-EBAC-Wdio.git
cd Exerc-cio-M26-EBAC-Wdio
```

Instale as dependências:

```bash
npm install
```

## Preparação do ambiente Android

1. Abra o Android Studio.
2. Inicie um emulador ou conecte um dispositivo físico.
3. Confirme a conexão com `adb devices`.
4. Verifique se o APK utilizado pelo projeto está disponível na pasta `app/`.
5. Inicie o Appium quando necessário.

```bash
npx appium
```

## Execução dos testes

Executar todos os testes:

```bash
npm test
```

Ou:

```bash
npx wdio run ./wdio.conf.js
```

Executar somente o teste de login:

```bash
npm test -- --spec ./test/specs/login.spec.js
```

## Cenários desenvolvidos

| Cenário | Arquivo | Objetivo |
|---|---|---|
| Login | `login.spec.js` | Validar fluxo de login |
| Formulários | `forms.spec.js` | Validar preenchimento e interação com formulários |
| Drag and Drop | `drag.spec.js` | Validar interação de arrastar e soltar |
| Swipe | `swipe.spec.js` | Validar gesto de deslize |

## Page Object Model

O projeto separa os elementos e ações das especificações de teste. Os Page Objects concentram localizadores e métodos reutilizáveis, enquanto os arquivos de spec concentram os cenários e as validações.

Essa organização facilita manutenção, reutilização e leitura dos testes.

## Resultado esperado

Após a execução, o WebdriverIO apresenta no console o resultado dos cenários, permitindo identificar testes aprovados e falhas na aplicação Android.

## Repositório

https://github.com/priottomarcos7-coder/Exerc-cio-M26-EBAC-Wdio

## Autor

Marcos Priotto

Projeto desenvolvido como parte da formação em Engenharia de Qualidade de Software na EBAC.