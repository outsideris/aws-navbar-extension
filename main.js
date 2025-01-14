const config = {
  'N. Virginia': {
    'background': 'linear-gradient(to right, #00009b, #e6194b)',
    'flag': '🇺🇸'
  },
  'Ohio': {
    'background': 'linear-gradient(to right, #00009b, #3cb44b)',
    'flag': '🇺🇸'
  },
  'N. California': {
    'background': 'linear-gradient(to right, #00009b, #e58e00)',
    'flag': '🇺🇸'
  },
  'Oregon': {
    'background': 'linear-gradient(to right, #00009b, #4363d8)',
    'flag': '🇺🇸'
  },
  'Cape Town': {
    'background': 'linear-gradient(to right, #9d6100, #d60000, #008a67, #273790)',
    'flag': '🇿🇦'
  },
  'Hong Kong': {
    'background': 'linear-gradient(to right, #c9001a, #fcaeb6, #c9001a)',
    'flag': '🇭🇰'
  },
  'Jakarta': {
    'background': 'linear-gradient(to right, #f50003, #e3e2e2)',
    'flag': '🇮🇩'
  },
  'Mumbai': {
    'background': 'linear-gradient(to right, #f98000, #c1bbe5, #009200)',
    'flag': '🇮🇳'
  },
  'Osaka': {
    'background': 'linear-gradient(to right, #d8d8d8, #d70048, #b87b00)',
    'flag': '🇯🇵'
  },
  'Seoul': {
    'background': 'linear-gradient(to right, #e30423, #00009b)',
    'flag': '🇰🇷'
  },
  'Singapore': {
    'background': 'linear-gradient(to right, #e7b2b5, #ff3047, #ccc8a0)',
    'flag': '🇸🇬'
  },
  'Sydney': {
    'background': 'linear-gradient(to right, #00205b, #ef3340, #000080)',
    'flag': '🇦🇺'
  },
  'Tokyo': {
    'background': 'linear-gradient(to right, #d8d8d8, #d70048, #dfdfdf)',
    'flag': '🇯🇵'
  },
  'Central': {
    'background': 'linear-gradient(to right, #f60000, #ffdfe0, #f60000)',
    'flag': '🇨🇦'
  },
  'Frankfurt': {
    'background': 'linear-gradient(to right, #181d1d, #eb3d00, #dd9400)',
    'flag': '🇩🇪'
  },
  'Ireland': {
    'background': 'linear-gradient(to right, #009555, #aaaaaa, #ec6b00)',
    'flag': '🇮🇪'
  },
  'London': {
    'background': 'linear-gradient(to right, #194171, #ef3340, #075aaa)',
    'flag': '🇬🇧'
  },
  'Milan': {
    'background': 'linear-gradient(to right, #008639, #aaaaaa, #c80d2e)',
    'flag': '🇮🇹'
  },
  'Paris': {
    'background': 'linear-gradient(to right, #00569b, #aaaaaa, #f31c21)',
    'flag': '🇫🇷'
  },
  'Stockholm': {
    'background': 'linear-gradient(to right, #004ca8, #fccc00, #004ca8)',
    'flag': '🇸🇪'
  },
  'Bahrain': {
    'background': 'linear-gradient(to right, #9ea0a1, #e70e3b, #9e112b)',
    'flag': '🇧🇭'
  },
  'São Paulo': {
    'background': 'linear-gradient(to right, #009a4a, #fed500, #009042)',
    'flag': '🇧🇷'
  },
  'Global': {
    'background': 'linear-gradient(to right, #0575e6, #159957)',
    'flag': '🌍'
  }
}

const region = document.querySelector('[data-testid="awsc-nav-regions-menu-button"]>span').innerText;

console.log(`region: ${region}`);

if (config.hasOwnProperty(region)) {
  // region header background
  document.querySelector("#awsc-navigation-container>div>header>nav").style.background = config[region]['background'];

  // region flag
  document.querySelector('[data-testid="awsc-nav-regions-menu-button"]').insertAdjacentHTML("beforeBegin", "<span style='font-size: 1.8em;line-height: 1em;margin-right:0.2em'>" + config[region]['flag'] + "</span>");
}
