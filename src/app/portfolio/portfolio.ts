interface Portfolio {
  src: string,
  title: string,
  desc: string[],
}

export const PORTFOLIOS: Portfolio[] = [
  {
    src: 'assets/gdplabs-internship.jpg',
    title: 'GDP Labs Summer Internship 2020 & 2021',
    desc: [
      '[Jun 2021 - Sep 2021] Did research and analyze about TailwindCSS, its features, performance, and integration with Web Frameworks at GDP Labs (CATAPA Team).',
      '[Jun 2020 - Aug 2020] Did research and analyze about Flutter Framework & its performance at GDP Labs (Kaskus Mobile Team).',      
    ],
  },
  {
    src: 'assets/TA.jpg',
    title: 'Teaching Assistant',
    desc: [
      '[Feb 2021 - Des 2021] Computer Networks',
      '[Feb 2021 - Jul 2021] Logic Programming',
      '[Aug 2020 - Jan 2021] Data Structure & Algorithms',
      '[Jan 2020 - Aug 2020] Programming Foundations 2',
      '[Sep 2019 - Jan 2020] Programming Foundations 1 (International Class)',
    ],
  },
  {
    src: 'assets/dsc.jpg',
    title: 'DSC University of Indonesia (DSC UI)',
    desc: [
      '[Aug 2020 - Jul 2021] Core Team of DSC UI 2020/2021',
      '[Sep 2019 - Aug 2020] Member of DSC UI 2019/2020',
    ],
  },
  {
    src: 'assets/dsc-workshop-speaker.png',
    title: 'DSC UI Workshop Speaker\'s: Express JS',
    desc: [
      '[Feb 2021] Speaker at one of DSC UI\'s Workshop: Make Express REST API with Express JS',
    ],
  },
  {
    src: 'assets/SeaPay-Compfest.jpg',
    title: 'Software Engineering Academy Compfest 11',
    desc: [
      '[Jul 2019 - Aug 2019] Built an online e-wallet mobile app for Software Engineering Academy COMPFEST team\'s final project with Android Kotlin and Java Spring Boot.',
    ],
  },
  {
    src: 'assets/sigap.png',
    title: 'SIGAP Fasilkom UI',
    desc: [
      '[Mar 2020 - May 2020] Vice Person in Charge in volunteering at Faculty of Computer Science, Universitas Indonesia, to build a website for COVID-19 CrowdAid campaign website. (sigap.cs.ui.ac.id)',
    ],
  },
]