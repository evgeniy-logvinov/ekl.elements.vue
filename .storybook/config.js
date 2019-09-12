/* eslint-disable import/no-extraneous-dependencies */
import { addParameters, addDecorator, configure } from '@storybook/vue'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from "@storybook/addon-knobs";
import { viewport } from '@storybook/addon-viewport';
import { MainDecorator } from './decorators';
import { addReadme } from 'storybook-readme/vue'; // <---- Vue subpackage
import options from './options';
import { library } from '@fortawesome/fontawesome-svg-core';
import Vue from 'vue';
import {
  faSort,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';


library.add(
  faSort,
  faSortDown,
  faSortUp,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false

addDecorator(withKnobs);
// addDecorator(MainDecorator)
addParameters({
  options,
  viewport,
})
addDecorator(addReadme);

const newViewports = {
  eklElements: {
    name: 'eklElements',
  },
};

configureViewport({
  defaultViewport: 'eklElements',
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports
  }
});

const req = require.context('../packages', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
