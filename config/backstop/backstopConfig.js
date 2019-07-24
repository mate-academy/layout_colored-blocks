'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl:
    'https://mate-academy.github.io/layout_solutions/colored-blocks/',
};

const config = {
  ...backstop,
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      selectors: ['body'],
    },
  ],
};

module.exports = config;
