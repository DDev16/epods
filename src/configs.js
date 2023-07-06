import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'ESports Pod',
  subTitle: 'Small FootPrint Simulator',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/stars.png',
    dencity: 900,
  },
  navTitle: 'Small Footprint Simulator ',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, -3, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: '',
      infos: [
        "USA Entertainment Ventures, LLC presents the Esports Pod for  GAMING, LEARNING, and EDUCATION. As an extension of Sports Media, Inc., a sports marketing agency with 40+ years of experience, we offer exclusive media rights and sponsorship opportunities for optimal consumer reach. Embrace the booming esports trend, which has seen a significant rise, especially amidst pandemic-induced traditional sports interruptions. Invest in our Esports Pods; expertly designed gaming pods providing fair play tools for success, aiming to transform education by reaching institutions worldwide. Explore additional services, including pod quotes, OTT services like gaming streaming platforms, and the revenue-diversifying potential of NFTs for digital asset ownership." 
    ],
    },
    {
      scale: 15,
      displayAt: displayAt('Links'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'LINKS',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more info.',
    },
    {
      scale: 15,
      displayAt: displayAt('Partners'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Partners',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Small FootPrint Simulator'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Small FootPrint Simulator',
      footer: 'Click the icon above to view!',
      
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/smartcontract.png',
            websiteURL:
              'https://www.youtube.com/watch?v=17A4oRatfr8',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Videos'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Videos',
      footer: 'Click Icons to watch videos',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: '/small.png',
            websiteURL: 'https://www.youtube.com/watch?v=KPqx6Wz4KUE',
          },
          {
            url: 'websites-preview/sim.jpg',
            websiteURL: 'https://youtu.be/bajL9M2r1K0',
          },
          {
            url: 'websites-preview/sim360.jpg',
            websiteURL:
              'https://youtu.be/5Au62q4AVWs',
          },
          {
            url: 'websites-preview/sim2.jpg',
            websiteURL: 'https://youtu.be/dMGADc9lXPM',
          },
          {
            url: 'websites-preview/sim3.jpg',
            websiteURL: 'https://youtu.be/we0FNvc2L0A',
          },
          {
            url: 'websites-preview/sim4.jpg',
            websiteURL: 'https://youtu.be/29dXt44mnDU',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can contact us at:',
      footer: 'Almost done but keep scrolling',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/fb.png',
            websiteURL: 'https://www.facebook.com/SmallFootprintSimulator',
          },
          {
            url: 'icons/insta.png',
            websiteURL:
              'https://www.instagram.com/smallfootprintsimulator/',
          },
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/dakdanww',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:info@dakdan.com',
          },
        ],
      },
    },
  ],
};

export default configs;
