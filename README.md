import { ArgsTable, Canvas, Meta, Story } from '@storybook/addon-docs';

<Meta
  title="Introduction/Introduction"
  argTypes={{
    status: {
      name: 'Introduction',
      description: 'Available options available to the Badge',
      options: [
        'positive',
        'negative',
        'warning',
        'error',
        'neutral'
      ],
      table: {
        defaultValue: {
          summary: 'positive'
        },
        type: {
          summary: 'Shows options to the Badge',
          detail: 'Listing of available options'
        },
      },
    },
    label: {
      name: 'Badge Content',
      description: 'Text shown by Badge',
      control: {
        type: 'text'
      },
      table: {
        type: {
          summary: 'The label contents',
          detail: 'Text displayed by the Badge'
        }
      }
    }
  }
}
  />

  <style>{`

  .imageBorder {   
    width: 30%;
    float: right;
  }
  .align{
  text-align: center;
  }
  
`}</style>


<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center" className="imageBorder" >

![alt text][logo]

[logo]: https://github.com/Wai-Technologies/raaghu-elements/raw/main/raaghu_icon.png "Raaghu Ng Elements"

</p>

# Introduction

# 👋 Introducing `raaghu-elements` 

`raaghu-elements` is an opensource micro front end framework built on top of Bootstrap 5 and Storybook offering highly customizable and reusable Angular UI elements.

Raaghu elements can be used as a base to build complex components and UI layouts whilst maintaining a high level of reusability.




# 🚀 Demo
Here is a quick [demo](https://www.raaghu.io) of the elements. We hope you enjoy it.

Liked it? Please give us a ⭐️ to show your appreciation

Many Thanks to all the `supporters` who have helped this project with stars(⭐)


# 🔥 Features

## 🔢 High reusability
 - Promotes reusability throughout the UI and pages
 - Reduces code duplication and helps in delivering a more consistent and even UI


## 🏗️ Micro Front End Architecture
- Each element is a separate micro front end on its own
- Elements can be worked on in isolation

## 📢 Theming
- The theming engine provides a way to set custom theme for all the elements
- Control the theme of your project with only a few css variables

## 📱 Responsive and mobile-friendly
- All of the elements are built for a wide variety of screen sizes




# 🏗️ How to Set up `raaghu-elements` for Development?
You can run `raaghu-elements` locally with a few easy steps.

1. Clone the repository

```bash
git clone https://github.com/Wai-Technologies/raaghu-elements.git
```

2. Change the working directory

```bash
cd raaghu-elements
```

3. Install dependencies

```bash
npm install
```

4. Build all the libraries

```bash
npm run build-all
```
> **_NOTE:_** Above comman will create a folder named "rds-elements" with all the libraries

5. Create a new blank angular project

```bash
# use angular CLI to create a new project
ng new <project_name>

# change directory to newly created project's mode modules folder
cd <project_name>/node_modules

# copy the build folder "rds-elements", created in step 4
```

6. Use rds-elements libraries

```bash
# Import it in your app.module.ts file, include the library
import { RdsButtonModule } from "rds-elements/rds-button"

# import the above module
imports: [
  RdsButtonModule
]

# Use it in the html file
<rds-button
  [color]="buttonColorType"
  [block]="true"
  size="'medium'"
  [label]="buttonLabel"
  [disabled]="!loginForm.valid"
  (click)="submit()">
</rds-button>
```

7. Build and serve

```bash
npm start

```

8. Storybook

```bash
# View all elements inside storybook
npm run storybook 
```


# 🍔 Built With
- [Bootstrap 5](https://bootstrap.com/): Sleek, intuitive, and powerful framework for faster and easier web development.
- [Storybook](https://storybook.js.org/): Build bulletproof UI components faster
- [Angular Libraries](https://angular.io/guide/libraries): Build bulletproof UI components faster


# 🛡️ License
This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.


# 🦄 Upcoming Features
`raaghu-elements` has all the potentials to grow further. Here are some of the upcoming features,

- ✔️ Custom plugin to reveal the reusability within your angular project
- ✔️ Ability to convert existing elements in a project into micro front end enabled elements
- ✔️ Import custom elements into the library
- ✔️ Better Performance
- ✔️ Converiting plain angular components to custom elements

If you find something is missing, we are listening. Please create a feature request [from here](https://github.com/Wai-Technologies/raaghu-elements/issues/new).



# 🤝 Contributing to `Raaghu`
Any kind of positive contribution is welcome! Please help us to grow by contributing to the project.

If you wish to contribute, you can work on any features [listed here](https://github.com/Wai-Technologies/raaghu-elements#-upcoming-features) or create one on your own. After adding your code, please send us a Pull Request.  




# 🙏 Support

We all need support and motivation. `Raaghu` is not an exception. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

<h3 className="align">
A ⭐️ to <b>Raaghu</b> is to build its triceps 💪 stronger.
</h3>



## WAi Technology Contributors ✨

Thanks goes to these wonderful people and Wai technology.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

[Omkar Choudhari](https://github.com/omkarchoudhari), [Alok Nakhate](https://github.com/alok-nakhate), [Rohit Pingale](https://github.com/pingroh), [Mohan Bari](https://github.com/mohanbari), [Apoorva Lele](https://github.com/apoorvalele), [Yohul Chitre](https://github.com/yohulchitre),
[Priyanka Shinkar](https://github.com/Priyanka-Shinkar), [Suraj Khupse](https://github.com/suraj-khupse), [Pratheesh Krishnan](https://github.com/pratheesh-rishnan), [Rahul Patil](https://github.com/rahulp34),
[Ketan khalate](https://github.com/Ketan-Khalate), [Obaid Ur Rahman](https://github.com/obaid-ur-rahman), [Anupriya Biju](https://github.com/Anupriya-Biju), [Niphy Anto](https://github.com/Niphy-Anto),
[Neeraj Bhakre](https://github.com/neeraj-bhakre), [Basavraj Chorgasti](https://github.com/basavraj-chorgasti), [Shrikant Birajdar](https://github.com/shrikant-birajdar), [Omkar Rairikar](https://github.com/omkarrairikar),
[Swapnil Ghormode](https://github.com/DevSwapnil22)

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

