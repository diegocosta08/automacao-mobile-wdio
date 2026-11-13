# Automação Mobile com WebdriverIO e Appium

Projeto desenvolvido como atividade prática do curso de Engenharia de Qualidade de Software da EBAC, com o objetivo de aplicar conceitos de automação de testes em aplicativos Android.

A automação foi construída utilizando **WebdriverIO e Appium**, executando cenários de teste em um emulador Android. O aplicativo utilizado como base foi o [Native Demo App, disponibilizado pela WebdriverIO](https://github.com/webdriverio/native-demo-app).

## Objetivo do projeto

Desenvolver testes automatizados para validar funcionalidades de um aplicativo mobile, utilizando boas práticas de organização, localização de elementos e validação dos resultados esperados.

## Tecnologias utilizadas

- **JavaScript** – linguagem utilizada na implementação dos testes.
- **Node.js e npm** – ambiente de execução e gerenciamento de dependências.
- **WebdriverIO** – framework de automação.
- **Appium** – ferramenta de automação mobile.
- **Android Studio** – configuração e execução do emulador Android.
- **Appium Inspector** – inspeção de elementos e identificação de seletores.

## Cenários automatizados

O projeto contempla quatro áreas funcionais do aplicativo:

| Funcionalidade | Cenários de teste |
|---|---|
| Login | Login válido, e-mail inválido e senha inválida |
| Forms | Preenchimento de texto, seleção de opção e alternância de botão |
| Swipe | Gestos de arrastar para baixo, para cima e para os lados |
| Drag and Drop | Arrastar uma peça e completar o quebra-cabeça |

Os testes utilizam asserções para verificar se os comportamentos esperados são apresentados pelo aplicativo.

## Organização do projeto

```text
projeto-mobile-wdio/
│
├── app/
│   └── wdio.apk
│
├── chromedriver-mobile/
│
├── test/
│   ├── pageobjects/
│   │   ├── drag.page.js
│   │   ├── forms.page.js
│   │   ├── login.page.js
│   │   └── swipe.page.js
│   │
│   └── specs/
│       ├── drag.spec.js
│       ├── forms.spec.js
│       ├── login.spec.js
│       └── swipe.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── wdio.conf.js
```

A estrutura utiliza o padrão **Page Object**, separando os elementos e as ações das telas dos arquivos responsáveis pela execução dos testes.

## Configuração do ambiente

Para executar o projeto, é necessário ter instalado e configurado:

- Node.js e npm;
- Java JDK;
- Android Studio e Android SDK;
- Appium com o driver UiAutomator2;
- Emulador Android;
- Variáveis de ambiente `JAVA_HOME` e `ANDROID_HOME`.

O Appium Inspector pode ser utilizado para auxiliar na identificação dos elementos da aplicação.

## Como executar os testes

**1. Instalar as dependências**

Na pasta principal do projeto, execute:

```bash
npm install
```

**2. Iniciar o servidor Appium**

```bash
appium
```

Mantenha o servidor em execução.

**3. Iniciar o emulador Android**

Abra o Android Studio e inicie o emulador configurado para a execução dos testes.

**4. Executar toda a suíte de testes**

Em outro terminal, na pasta do projeto, execute:

```bash
npx wdio run ./wdio.conf.js
```

Para executar apenas um arquivo de teste, utilize:

```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/login.spec.js
```

## Resultado da execução

Na execução realizada durante o desenvolvimento, os quatro arquivos de especificação foram executados com sucesso:

- Drag and Drop: 2 testes aprovados;
- Forms: 3 testes aprovados;
- Login: 3 testes aprovados;
- Swipe: 3 testes aprovados.

**Resultado: 11 testes aprovados, sem falhas, em 4 arquivos de especificação.**

## Observações

A pasta `app/` está incluída no `.gitignore`, conforme a orientação da atividade, para evitar o envio do APK e de arquivos da aplicação ao repositório.

Para executar os testes localmente, é necessário disponibilizar o arquivo APK no caminho `app/wdio.apk`.

---

**Desenvolvido por Diego Costa**
