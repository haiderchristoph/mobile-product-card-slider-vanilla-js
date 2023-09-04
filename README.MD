![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

# Mobile Product Card Slider

A demo project to showcase a mobile product card slider built with plain vanilla JavaScript, TypeScript and SASS. Bundled using Webpack.
For pretty and valid code, also Prettier and es-lint was used.

The slider is only shown on mobile device (or mobile emulators with touchevent features _wink_ Chrome Dev Tools _wink_).

Checkout the [Live Demo](https://tractivedemo.versusreality.at/)

## Gettings started

Use `yarn install` in the root folder install all dependencies.

Use `yarn run start` to start the webpack dev server. The project should be served on `localhost:8080`

Use `yarn run lint` to run lint the files inside `src/`

## Build

Run `yarn run build` to build the project and generat the `/build` folder. From there you can deploy the app.

## Deployment using GitHub actions

This application is automatically deployed with every push to `main`, using github actions. Check the `.github/workflows/main.yml` for more info.
