![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

# Mobile Product Card Slider

Demo project to showcase a mobile product card slider built with vanilla JavaScript, TypeScript and SASS. Bundled using Webpack. To ensure pretty and valid code, also Prettier and ESlint are configured.

The slider is only shown on mobile devices (or mobile emulators with touchevent feature enabled, like Chrome Dev Tools). If you switch between devices make sure to reload the page.

Checkout the [Live Demo](https://tractivedemo.versusreality.at/)

## Gettings started

Use `yarn install` in the root folder to install all dependencies.

Use `yarn run start` to start the webpack dev server. The project should be served on `localhost:8080`

Use `yarn run lint` to lint the files inside `src/`

Run `yarn run build` to build the project and generate the `/build` folder.

## Deployment using GitHub actions

This application is automatically deployed with every push to `main`, using github actions. Check the `.github/workflows/main.yml` for more info.
