import { extend } from 'lodash';
import { countdown } from './trials/countdown';
import { showMessage } from './trials/showMessage';
import { fixation } from './trials/fixation';
import { userId } from './trials/userId';
import { showImage } from './trials/showImage';
import { slider } from './trials/slider';
import { survey } from './trials/survey';
import { multiSurvey } from './trials/multiSurvey';

const defaultconfig = { USE_PHOTODIODE: false, USE_EEG: false, USE_ELECTRON: true, USE_MTURK: false }

function init(_config) {
  return extend(defaultconfig, _config)
}

export {
  init,
  countdown,
  showMessage,
  fixation,
  userId,
  showImage,
  slider,
  survey,
  multiSurvey
};
