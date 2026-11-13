# Automação Mobile com Appium — Android

## Objetivo

Projeto de automação de testes mobile para aplicações Android, desenvolvido como parte da formação em Engenharia de Qualidade de Software da EBAC.

O projeto utiliza WebdriverIO e Appium para executar testes automatizados em dispositivos Android, aplicando conceitos de organização e manutenção de testes com Page Object Model (POM).

## Atividades do projeto

- Configuração do ambiente de automação mobile para Android.
- Integração do WebdriverIO com Appium.
- Execução de testes em emulador ou dispositivo Android.
- Testes de fluxo de login.
- Testes de formulários.
- Testes de ações de Drag and Drop.
- Testes de gestos Swipe.
- Organização dos elementos e ações utilizando Page Object Model.
- Configuração de capabilities, APK e serviço Appium.
- Análise de problemas relacionados a dispositivos, seletores e timeouts.

## Tecnologias utilizadas

- Appium
- WebdriverIO
- JavaScript
- Mocha
- Android
- Android SDK
- Page Object Model (POM)

## Pré-requisitos

- Node.js 14 ou superior.
- npm.
- JDK.
- Android SDK.
- Android Studio.
- Emulador Android ou dispositivo físico.
- Appium.
- ADB.

Verificar as versões do Node.js e npm:

```bash
node --version
npm --version
```

Verificar os dispositivos Android conectados:

```bash
adb devices
```

## Instalação

Instalar as dependências do projeto:

```bash
npm install
```

## Preparação do ambiente Android

1. Abrir o Android Studio.
2. Iniciar um emulador ou conectar um dispositivo físico.
3. Confirmar a conexão utilizando `adb devices`.
4. Verificar se o APK utilizado pelo projeto está disponível na pasta `app/`.
5. Iniciar o servidor Appium quando necessário.

```bash
npx appium
```

## Execução dos testes

Executar os testes configurados no projeto:

```bash
npm test
```

Alternativamente:

```bash
npx wdio run ./wdio.conf.js
```

Executar somente o teste de login:

```bash
npm test -- --spec ./test/specs/login.spec.js
```

## Cenários de teste

| Cenário | Arquivo | Objetivo |

| Login | `login.spec.js` | Validar o fluxo de login |
| Formulários | `forms.spec.js` | Validar preenchimento e interação com formulários |
| Drag and Drop | `drag.spec.js` | Validar interação de arrastar e soltar |
| Swipe | `swipe.spec.js` | Validar gestos de deslize |

## Page Object Model

O padrão Page Object Model organiza os elementos e as ações da aplicação em estruturas separadas dos arquivos de especificação dos testes.

Essa abordagem contribui para a reutilização de código, facilita a manutenção e melhora a organização dos cenários automatizados.

## Resultado esperado

Após a execução, o WebdriverIO apresenta no terminal os resultados dos testes, permitindo identificar cenários aprovados, falhas e possíveis problemas durante a automação.

## Autor

**Diego Costa**

Curso: Engenheiro de Qualidade de Software — EBAC.

Projeto de estudos e prática de automação de testes mobile.