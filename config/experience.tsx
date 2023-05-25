import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: 'THE CRYPTO COMPANY',
    longName: 'THE CRYPTO COMPANY',
    subDetail: 'Blockchain company in United States',
    url: 'https://www.thecryptocompany.com/',
    position: 'Senior Full-Stack Engineer',
    duration: 'Jul 2022 - Present',
    logo: {
      light: '/worked_at_logos/CRYPTO/CRYPTO_light.png',
      dark: '/worked_at_logos/CRYPTO/CRYPTO_dark.jpg',
    },
    roles: [
      // <>
      //   Started early September and undergoing training for .NET Sitecore 10,
      //   Sitecore SXA and different topologies it provides.{' '}
      // </>,
      // <>
      //   Worked as a Sitecore Backend on new{' '}
      //   <Link
      //     aria-label="Deloitte Digital AU"
      //     href="https://www.deloittedigital.com.au/"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Deloitte Digital AU Site.
      //   </Link>
      // </>,
      // <>
      //   Took{' '}
      //   <Link
      //     aria-label="Sitecore 10 .NET Developer Certification"
      //     href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Sitecore 10 .NET Developer Certification.
      //   </Link>
      // </>,
      <>
        Strategic and management consulting for blockchain and  cryptocurrency,  from ICOs to capital raises to systems design.
      </>,
      <>
        Backend development using Python/Django integrated Unit testing for backend system and used to deploy server to digital ocean using Docker.
      </>,
      <>
        Integrated Django CMS using wagtail to build page more easily and more fantastic.
      </>,
      <>
        Built and launched Smart Contracts for Genesis NFT, Pod and Marketplace as well. Prefer to use ERC-721 based NFT rather than ERC-1155.
      </>,
      <>
        Worked with Core Java to develop automated solutions to include web interfaces using HTML, CSS, JavaScript and Web services.
      </>,
      <>
        Implemented complex UI components with React / Vue / TypeScript and SCSS.
      </>,
    ],
  },
  SCG: {
    name: 'EMTEC',
    longName: 'EMTEC Inc',
    subDetail: 'Digital IT consulting company in United States',
    url: 'https://www.emtecinc.com/',
    position: 'Senior Full-Stack Developer',
    duration: 'Feb 2018 - June 2022',
    logo: {
      light: '/worked_at_logos/EMTEC/EMTEC_light.png',
      dark: '/worked_at_logos/EMTEC/EMTEC_dark.png',
    },
    roles: [
      // <>
      //   Revamping the legacy Partner Portal into a new{' '}
      //   <Link
      //     aria-label="Westfield Marketing Hub"
      //     href="https://partner.scentregroup.com/"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Westfield Marketing Hub
      //   </Link>{' '}
      //   using NextJS and Typescript. Restructuring the old express app into a
      //   newer architectural design approach.
      // </>,
      // <>
      //   Created multiple Contentful and Bynder extensions to improve BX process
      //   better.
      // </>,
      // <>
      //   Worked on maintaining{' '}
      //   <Link
      //     variant="primaryLink"
      //     href="https://www.westfield.com.au/"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Westfield
      //   </Link>{' '}
      //   main site and Graphql apis written in NodeJS.
      // </>,
      // <>
      //   Migrating of existing marketing email related tools and batch jobs from
      //   Responsys into new platform called Braze.
      // </>,
      // <>
      //   Hired at early 2020, first major task was helping with selecting a new
      //   marketing vendor that can scale and also enable us to have
      //   personalisation as well, selecting{' '}
      //   <Link
      //     aria-label="Braze"
      //     href="https://www.braze.com/"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Braze
      //   </Link>{' '}
      //   as a result.
      // </>,
      <>
        Led seven members of web development team. Managed project using github and manage team members with ticket using Clickup.
      </>,
      <>
        Utilize Python/Django, PostgreSQL to implement scalable Full Stack Software solutions.
      </>,
      <>
        Participate in the full lifecycle of development for company web application using Django.
      </>,
      <>
        Created restful APIs using Laravel and consumed them with React.js.
      </>,
      <>
        Configured Google analytics module for tracking the visitors for the website.
      </>,
      <>
        Strong programming experience in Laravel with sufficient exposure to Windows and Linux.
      </>,
      <>
        Developed Responsive Websites that could be served by desktop, Tablets and mobile devices using React.js.
      </>,
    ],
  },
  Blotocol: {
    name: 'QVIK',
    longName: 'QVIK',
    subDetail: 'Software Company in Finland',
    url: 'https://qvik.com/',
    position: 'Full-Stack Developer',
    duration: 'Nov 2015 - Feb 2018',
    logo: {
      light: '/worked_at_logos/QVIK/QVIK_light.png',
      dark: '/worked_at_logos/QVIK/QVIK_dark.png',
    },
    roles: [
      <>
        Developed an E-commerce platform using React for frontend and NodeJS for backend.
      </>,
      <>
        Developed Responsive Websites that could be served by desktop, Tablets and mobile devices using React.js.
      </>,
      <>
        Integrated payment system for product checkout using Authorize, payment API.
      </>,
      <>
        Worked with JEST unit test framework to write unit tests for JavaScript code.
      </>,
      <>
        Implemented various screens for the frontend using React.js and used various predefined components from NPM(Node Package Manager) and redux library.
      </>,
      <>
        Interacted with the Testing Team, Scrum Masters and Business Analysts to fix issues.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
