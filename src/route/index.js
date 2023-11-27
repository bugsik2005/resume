// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ===============================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Poltava, Evropeyska str',
}
var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    LinkedIn: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,
    main: {
      summary: {
        title: 'Summary',
        text: {
          value: `Open-minded for new technologies,
           with 1 years of experience in development. 
          Whenever I start towork on a new project 
          I learn the domain and tryto understand the 
          idea of the project. Good teamplayer, every 
          colleague is a friend to me.`,
        },
      },
      experience: {
        title: 'Other experience',
        text: {
          value: `Pet project for parsing sport betting data fro
          different platforms ( odds ) and sport statistics
          ( tournament position, goals etc), analyzing by
          simple mathematics models and preparing
          probability for such events like: money line -
          first win / draw / second win, totals etc.`,
        },
      },
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router

// ================================================================
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontain
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git',
          point: 10,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 10,
        },
        {
          name: 'NPM',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'creating videos',
          isMain: true,
        },
        {
          name: 'cooking',
          isMain: false,
        },
        {
          name: 'fishing',
          isMain: false,
        },
      ],
    },
    footer,
  })
})
// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontain
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      education: [
        { name: 'IT Brains', isEnd: false },
        {
          name: 'National University «Yuri Kondratyuk Poltava Polytechnic',
          isEnd: true,
        },
        {
          name: 'POLTAVA V.G. KOROLENKO NATIONAL PEDAGOGICAL UNIVERSITY',
          isEnd: true,
        },
      ],
      certificates: [
        { name: 'Цифрова грамотність', id: 1234 },
        { name: 'Fullstack', id: 5678 },
        { name: 'Public adminisration', id: 9123 },
      ],
    },
    footer,
  })
})
// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontain
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https: //it-brains.com.ua/',
          },

          duration: {
            from: '10.02.2022',
            to: 'null',
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'http://resume.com.ua',
              about: 'Airbnb competitor',
              stackAmount: 3,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'Background verification - is a feauter that provides users',
                },
                {
                  name: 'Prepearing SEO optimized pages',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
