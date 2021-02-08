# Behavioral Task Trials
All-in-one starter app with behavioral task trials
## Modules

<dl>
<dt><a href="#module_countdown">countdown</a></dt>
<dd><p>Builds a countdown transition with the given text and number of seconds.</p>
</dd>
<dt><a href="#module_fixation">fixation</a></dt>
<dd><p>Builds a trial with a fixation dot and optional photodiode box.</p>
</dd>
<dt><a href="#module_showImage">showImage</a></dt>
<dd><p>Builds a trial with a onscreen message, optional buttons and optional phtodiode box</p>
</dd>
<dt><a href="#module_showMessage">showMessage</a></dt>
<dd><p>Builds a trial with a onscreen message, optional buttons and optional phtodiode box</p>
</dd>
<dt><a href="#module_userId">userId</a></dt>
<dd><p>Builds a trial with set Id message and user Id input.</p>
</dd>
</dl>

<a name="module_countdown"></a>

## countdown
Builds a countdown transition with the given text and number of seconds.


| Param | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | The trial duration. |
| text | <code>string</code> | Optional text for the countdown. |
| time | <code>number</code> | The number of seconds for the countdown. |
| responseEndsTrial | <code>boolean</code> | True if the trial ends on response,false if the trial waits for the duration. |

<a name="module_fixation"></a>

## fixation
Builds a trial with a fixation dot and optional photodiode box.


| Param | Type | Description |
| --- | --- | --- |
| responseType | <code>string</code> | This tells jsPsych which plugin file to use to run the trial. |
| duration | <code>number</code> | The trial duration in milliseconds. |
| config | <code>object</code> | The configuration object for USE_PHOTODIODE, IS_ELECTRON and USE_MTURK flags. |
| responseEndsTrial | <code>boolean</code> | True if the trial ends on response,false if the trial waits for the duration, by default false value. |
| taskCode | <code>number</code> | Task code to be saved into data log and for pdSpotEncode, which by default is null and is passed when config has USE_PHOTODIODE set true. |
| numBlinks | <code>number</code> | Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. If not set, by default is 1. |
| buttons | <code>any</code> | This array contains the keys that the subject is allowed to press in order to respond to the stimulus. Keys can be specified as their numeric key code or as characters (e.g., 'a', 'q'). The default value of jsPsych.ALL_KEYS means that all keys will be accepted as valid responses. Specifying jsPsych.NO_KEYS will mean that no responses are allowed. |

<a name="module_showImage"></a>

## showImage
Builds a trial with a onscreen message, optional buttons and optional phtodiode box


| Param | Type | Description |
| --- | --- | --- |
| responseType | <code>string</code> | This tells jsPsych which plugin file to use to run the trial. |
| duration | <code>number</code> | The trial duration in milliseconds. |
| config | <code>object</code> | The configuration object for USE_PHOTODIODE, USE_EEG, IS_ELECTRON and USE_MTURK flags. |
| image | <code>string</code> | The path of the image file to be displayed. |
| imageHeight | <code>number</code> | Set the height of the image in pixels. If left null (no value specified), then the image will display at its natural height. |
| imageWidth | <code>number</code> | Set the width of the image in pixels. If left null (no value specified), then the image will display at its natural width. |
| responseEndsTrial | <code>boolean</code> | True if the trial ends on response,false if the trial waits for the duration, by default false value. |
| taskCode | <code>number</code> | Task code to be saved into data log and for pdSpotEncode, which by default is null and is passed when config has USE_PHOTODIODE set true. |
| numBlinks | <code>number</code> | Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. If not set, by default is 1. |

<a name="module_showMessage"></a>

## showMessage
Builds a trial with a onscreen message, optional buttons and optional phtodiode box


| Param | Type | Description |
| --- | --- | --- |
| responseType | <code>string</code> | This tells jsPsych which plugin file to use to run the trial. |
| duration | <code>number</code> | The trial duration in milliseconds. |
| config | <code>object</code> | The configuration object for USE_PHOTODIODE, IS_ELECTRON and USE_MTURK flags. |
| message | <code>string</code> | Onscreen message to be shown in the trial, if not set default text is empty. |
| onstart | <code>boolean</code> | True if the message is to be display on start of the trial. False if the message needs to be in the stimulus.(default: false) |
| responseEndsTrial | <code>boolean</code> | True if the trial ends on response,false if the trial waits for the duration, by default false value. |
| taskCode | <code>number</code> | Task code to be saved into data log and for pdSpotEncode, which by default is null and is passed when config has USE_PHOTODIODE set true. |
| numBlinks | <code>number</code> | Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. If not set, by default is 1. |
| buttons | <code>Array</code> | This array contains the keys that the subject is allowed to press in order to respond to the stimulus. Keys can be specified as their numeric key code or as characters (e.g., 'a', 'q'). The default value of jsPsych.ALL_KEYS means that all keys will be accepted as valid responses. Specifying jsPsych.NO_KEYS will mean that no responses are allowed. |

<a name="module_userId"></a>

## userId
Builds a trial with set Id message and user Id input.


| Param | Type | Description |
| --- | --- | --- |
| jsPsych | <code>object</code> | The instance of the jspsych passed as an object. |
| responseType | <code>string</code> | This tells jsPsych which plugin file to use to run the trial. |
| duration | <code>number</code> | The trial duration in milliseconds. |
| config | <code>object</code> | The configuration object for USE_PHOTODIODE, IS_ELECTRON and USE_MTURK flags, by default only IS_ELECTRON is set to be true. |
| setIdMessage | <code>string</code> | Onscreen text for setting user id or for the input box to enter patient id. |
| responseEndsTrial | <code>boolean</code> | True if the trial ends on response,false if the trial waits for the duration, by default false value. |
| defaultPatientId | <code>boolean</code> | The patient id to show when requesting a patient ID, if not set default is empty. |
