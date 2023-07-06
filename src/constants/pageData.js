/* 
  There are some weird things happening with the offset and the camera 
  movement because of the implementation of the smooth stop of the camera.

  My solution is to define two diferent positions.
  position is relative to the scrollComponent, that's for the nav bar, 
  displayPosition is the offset of the default camara position when facing the cube.
*/

export const PAGE_DEPH_MARGIN = 15;

export const EXPERIENCE = {
  rows: 2,
  separation: 3,
  leftPadding: -0.32,
  topPadding: 0.22,
  scale: 0.3,
  webViewer: {
    position: [0, 0, -15],
    rotation: [Math.PI, Math.PI, Math.PI],
    height: 720,
    width: 1024,
  },
  items: [
    {
      url: '/small.png',
      websiteURL: 'https://smallfootprintsimulator.com/',
     
    },
    {
      url: 'websites-preview/sports.png',
      websiteURL: 'https://sportsmedia.tv/',
     
    },
    {
      
      url: 'websites-preview/POD.jpg',
      websiteURL: 'https://esportspod.gg/',
     
    },
  
    {
      url: 'websites-preview/360.png',
      websiteURL: 'https://360sportstv.tv/',
     
    },
    {
      url: 'websites-preview/future.jpg',
      websiteURL: 'https://fanz.us/',
     
    },
    {
      url: 'websites-preview/stadium.png',
      websiteURL: 'https://stadiumfanz.com/',
     
    },
  ],
};


export const SKILLS_LIST = {
  rows: 4,
  separation: 2.4,
  leftPadding: -0.4,
  topPadding: 0.33,
  scale: 0.15,
  items: [
    { url: 'icons/dell.png', websiteURL: null },
    { url: 'icons/vive.png', websiteURL: null },
    { url: 'icons/razer.png', websiteURL: null },
    { url: 'icons/chase.png', websiteURL: null },
    { url: 'icons/alien.png', websiteURL: null },
    { url: 'icons/chatgpt-icon.png', websiteURL: null },
    { url: 'icons/usa.png', websiteURL: null },
    { url: 'icons/DevD.png', websiteURL: null },
    { url: 'icons/logi.png', websiteURL: null },
    { url: 'icons/sports.png', websiteURL: null },
    { url: 'icons/thrust.png', websiteURL: null },
    { url: 'icons/cve.png', websiteURL: null },
  ],
};

export const STOPS = [
  { displayPosition: 0, position: 0, name: 'Title' },
  {
    position: 0.13,
    displayPosition: 0.13,
    displayPositionOffset: -0.04,
    displayPositionOffsetEnd: -0.02,
    name: 'About',
  },
  {
    position: 0.2137,
    displayPosition: 0.2007,
    displayPositionOffset: -0.03,
    displayPositionOffsetEnd: -0.07,
    name: 'Links',
  },
  {
    position: 0.2982,
    displayPosition: 0.232,
    displayPositionOffset: 0.05,
    displayPositionOffsetEnd: -0.12,
    name: 'Partners',
  },
  {
    position: 0.3899,
    displayPosition: 0.3009,
    displayPositionOffset: 0.08,
    displayPositionOffsetEnd: -0.17,
    name: 'Small FootPrint Simulator',
  },
  {
    position: 0.48,
    displayPosition: 0.29,
    displayPositionOffset: 0.18,
    displayPositionOffsetEnd: -0.15,
    name: 'Videos',
  },
  {
    position: 0.592,
    displayPosition: 0.28,
    displayPositionOffset: 0.3,
    displayPositionOffsetEnd: -0.1,
    name: 'Get In Touch',
  },
  {
    position: 1,
    displayPosition: 1,
    displayPositionOffset: 0.03,
    displayPositionOffsetEnd: 0,
    name: 'Founder',
  },
];

export const displayAt = (stopName) =>
  STOPS.find((stop) => stop.name === stopName);
