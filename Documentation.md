# Behavioral Task Trials
All-in-one starter app with behavioral task trials
## Modules

<dl>
<dt><a href="#module_countdown">countdown</a></dt>
<dd><p>Builds a countdown transition with the given message and number of seconds.</p>
</dd>
<dt><a href="#module_fixation">fixation</a></dt>
<dd><p>Builds a trial with a fixation dot and optional photodiode box.</p>
</dd>
<dt><a href="#module_multiSurvey">multiSurvey</a></dt>
<dd><p>Builds a multi choice/select survey trial.</p>
</dd>
<dt><a href="#module_showImage">showImage</a></dt>
<dd><p>Builds a trial with a onscreen message and optional photodiode box</p>
</dd>
<dt><a href="#module_showMessage">showMessage</a></dt>
<dd><p>Builds a trial with a onscreen message, optional buttons and optional photodiode box</p>
</dd>
<dt><a href="#module_slider">slider</a></dt>
<dd><p>Builds a trial with a onscreen message and allows the subject to respond by dragging a slider.</p>
</dd>
<dt><a href="#module_survey">survey</a></dt>
<dd><p>Builds a trial with a question and with free response text fields. The subject types in answers.</p>
</dd>
<dt><a href="#module_userId">userId</a></dt>
<dd><p>Builds a trial with set Id message and user Id input.</p>
</dd>
</dl>

<a name="module_countdown"></a>

## countdown
Builds a countdown transition with the given message and number of seconds.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.duration | <code>number</code> | trial duration in milliseconds. (default: 1000) |
| options.stimulus | <code>string</code> | Onscreen stimulus in HTML to be shown in the trial. If the stimulus is not provided, message should be provided as a string. (default: "") |
| options.message | <code>string</code> | (optional) message for the countdown. (default: "") |
| options.time | <code>number</code> | start number for the countdown. (default: 3) |

<a name="module_fixation"></a>

## fixation
Builds a trial with a fixation dot and optional photodiode box.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The configuration object for USE_PHOTODIODE, USE_EEG, USE_ELECTRON and USE_MTURK flags. |
| config.USE_PHOTODIODE | <code>boolean</code> | USE_PHOTODIODE flag |
| config.USE_EEG | <code>boolean</code> | USE_EEG flag |
| config.USE_ELECTRON | <code>boolean</code> | USE_ELECTRON flag |
| config.USE_MTURK | <code>boolean</code> | USE_MTURK flag |
| options | <code>Object</code> |  |
| options.duration | <code>number</code> | trial duration in milliseconds jittered with the jitter param. (default: 1000) |
| options.jitter | <code>number</code> | jitter range (0-jitter) to add from to the trial duration (default: 50) |
| options.taskCode | <code>number</code> | Task code to be saved into data log (default: 1) |
| options.numBlinks | <code>number</code> | Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. (default: 1) |

<a name="module_multiSurvey"></a>

## multiSurvey
Builds a multi choice/select survey trial.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.responseType | <code>string</code> | This tells jsPsych which plugin file to use to run the trial. (default: surveyMultiChoice from "@jspsych/plugin-survey-multi-choice") |
| options.preamble | <code>string</code> | HTML formatted string to display at the top of the page above all the questions. (default: "") |
| options.prompts | <code>Array</code> | The question prompts, an Array of strings (default: []) |
| options.ansChoices | <code>Object</code> | Object consisting of the key as the answer choice name and value as the array of answer choices. (default: {}) |

<a name="module_showImage"></a>

## showImage
Builds a trial with a onscreen message and optional photodiode box


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The configuration object for USE_PHOTODIODE, USE_EEG, USE_ELECTRON and USE_MTURK flags. |
| config.USE_PHOTODIODE | <code>boolean</code> | USE_PHOTODIODE flag |
| config.USE_EEG | <code>boolean</code> | USE_EEG flag |
| config.USE_ELECTRON | <code>boolean</code> | USE_ELECTRON flag |
| config.USE_MTURK | <code>boolean</code> | USE_MTURK flag |
| image | <code>string</code> | The path of the image file to be displayed. |
| options | <code>Object</code> |  |
| options.duration | <code>number</code> | trial duration in milliseconds jittered with the jitter param. (default: 1000) |
| options.jitter | <code>number</code> | jitter range (0-jitter) to add from to the trial duration (default: 50) |
| options.imageHeight | <code>number</code> | Set the height of the image in pixels. (default: 600) |
| options.imageWidth | <code>number</code> | Set the width of the image in pixels. (default: 600) |
| options.taskCode | <code>number</code> | Task code to be saved into data log (default: 1) |
| options.numBlinks | <code>number</code> | Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. (default: 1) |

<a name="module_showMessage"></a>

## showMessage
Builds a trial with a onscreen message, optional buttons and optional photodiode box


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The configuration object for USE_PHOTODIODE, USE_EEG, USE_ELECTRON and USE_MTURK flags. |
| config.USE_PHOTODIODE | <code>boolean</code> | USE_PHOTODIODE flag |
| config.USE_EEG | <code>boolean</code> | USE_EEG flag |
| config.USE_ELECTRON | <code>boolean</code> | USE_ELECTRON flag |
| config.USE_MTURK | <code>boolean</code> | USE_MTURK flag |
| options | <code>Object</code> |  |
| options.responseType | <code>string</code> | This tells jsPsych which plugin file to use to run the trial. (default: htmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response") |
| options.duration | <code>number</code> | trial duration in milliseconds, only to be specified if the options.responseType is htmlKeyboardResponse. (default: 1000, if options.responseType ===  htmlKeyboardResponse, otherwise ignored) |
| options.stimulus | <code>string</code> | Onscreen stimulus in HTML to be shown in the trial, if not set default text is empty. If the stimulus is not provided, message should be provided as a string. (default: "") |
| options.message | <code>string</code> | Onscreen message to be shown in the trial. (default: "") |
| options.onstart | <code>boolean</code> | True if the message is to be display on start of the trial. False if the message needs to be in the stimulus.(default: false) |
| options.responseEndsTrial | <code>boolean</code> | True if the trial ends on response,false if the trial waits for the duration. (default: false) |
| options.taskCode | <code>number</code> | Task code to be saved into data log (default: 1) |
| options.numBlinks | <code>number</code> | Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. (default: 1) |
| options.buttons | <code>Array</code> | This array contains the keys that the subject is allowed to press in order to respond to the stimulus. Keys can be specified as their numeric key code or as characters (e.g., 'a', 'q'). The default value of "ALL_KEYS" means that all keys will be accepted as valid responses. Specifying "NO_KEYS" will mean that no responses are allowed. Only to be specified if the options.responseType is htmlButtonResponse from "@jspsych/plugin-html-button-response" (default: ["OK"], if options.responseType === htmlButtonResponse, otherwise ignored) |

<a name="module_slider"></a>

## slider
Builds a trial with a onscreen message and allows the subject to respond by dragging a slider.


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The string to be displayed, this can be formatted as an HTML string. (default: empty string) |

<a name="module_survey"></a>

## survey
Builds a trial with a question and with free response text fields. The subject types in answers.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.preamble | <code>string</code> | HTML formatted string to display at the top of the page above all the questions. (default: "") |
| options.stimulus | <code>string</code> | Onscreen stimulus in HTML to be shown in the trial, if not set default text is empty. If the stimulus is not provided, message should be provided as a string. (default: "") |
| options.message | <code>string</code> | Onscreen message to be shown in the trial. (default: "") |

<a name="module_userId"></a>

## userId
Builds a trial with set Id message and user Id input.


| Param | Type | Description |
| --- | --- | --- |
| jsPsych | <code>Object</code> | The instance of the jspsych passed as an object. |
| config | <code>Object</code> | The configuration object for USE_PHOTODIODE, USE_EEG, USE_ELECTRON and USE_MTURK flags. |
| config.USE_PHOTODIODE | <code>boolean</code> | USE_PHOTODIODE flag |
| config.USE_EEG | <code>boolean</code> | USE_EEG flag |
| config.USE_ELECTRON | <code>boolean</code> | USE_ELECTRON flag |
| config.USE_MTURK | <code>boolean</code> | USE_MTURK flag |
| options | <code>Object</code> |  |
| options.duration | <code>number</code> | trial duration in milliseconds, when config.USE_MTURK is set to true. (default: 1000) |
| options.stimulus | <code>string</code> | Onscreen stimulus in HTML to be shown in the trial. If the stimulus is not provided, message should be provided as a string. (default: "") |
| options.setIdMessage | <code>string</code> | Onscreen text for setting user id or for the input box to enter user id. (default: "") |
| options.defaultId | <code>string</code> | The user id to show when requesting a user ID, when config.USE_MTURK is set to false.(default: "") |

