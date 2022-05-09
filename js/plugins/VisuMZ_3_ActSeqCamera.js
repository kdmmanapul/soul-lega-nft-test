//=============================================================================
// VisuStella MZ - Action Sequence Camera
// VisuMZ_3_ActSeqCamera.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActSeqCamera = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActSeqCamera = VisuMZ.ActSeqCamera || {};
VisuMZ.ActSeqCamera.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.07] [ActSeqCamera]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Action_Sequence_Camera_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds new Action Sequences functions to the VisuStella MZ
 * Battle Core plugin to give you, the game dev, control over the battle camera
 * and zoom functions.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Attach the camera to a specific point on the screen.
 * * Attach the camera to a specific target(s) on the screen.
 * * Pan the camera to be off center using the offset functions.
 * * Remove camera clamping to let the camera go out of bounds.
 * * Set the camera zoom level as you want.
 * * Tilt the camera by adjust the angle.
 * * New Options added to let the player turn on/off the battle camera.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * - VisuMZ_0_CoreEngine
 * - VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Spriteset Position Rewrite
 *
 * - The Spriteset_Battle function for updatePosition needed to be rewritten in
 * order to allow all the new features and functions added by the battle camera
 * and zoom.
 * 
 * - Camera tricks like zooming, panning, and tilting will be reset during the
 * input phase to ensure the player is able to see the whole battlefield.
 * 
 * - The player has the option to turn off the battle camera effects. If they
 * choose to turn it off, then all of this plugin's effects will be disabled
 * until they turn it back on. This is to give players control over how the
 * game visually appears in case they have motion sickness.
 *
 * ---
 *
 * ============================================================================
 * Action Sequence - Plugin Commands
 * ============================================================================
 *
 * The following are Action Sequence Plugin Commands that have been added with
 * this plugin. These are accessible from the Battle Core plugin (not this one)
 * in order to keep all the Action Sequences in place.
 * 
 * Once again, these plugin commands are only accessible through the Battle
 * Core plugin and not this one! Make sure you have the most update to date
 * version of the Battle Core for them.
 *
 * ---
 * 
 * === Action Sequences - Angle (Camera) ===
 * 
 * These action sequences allow you to have control over the camera angle.
 * 
 * ---
 *
 * ANGLE: Change Angle
 * - Changes the camera angle.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Angle:
 *   - Change the camera angle to this many degrees.
 *
 *   Duration:
 *   - Duration in frames to change camera angle.
 *
 *   Angle Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Angle?:
 *   - Wait for angle changes to complete before performing next command?
 *
 * ---
 *
 * ANGLE: Reset Angle
 * - Reset any angle settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset camera angle.
 *
 *   Angle Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Angle?:
 *   - Wait for angle changes to complete before performing next command?
 *
 * ---
 *
 * ANGLE: Wait For Angle
 * - Waits for angle changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * === Action Sequences - Camera Control ===
 *
 * These Action Sequences are battle camera-related.
 *
 * ---
 *
 * CAMERA: Clamp ON/OFF
 * - Turns battle camera clamping on/off.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Setting:
 *   - Turns camera clamping on/off.
 *
 * ---
 *
 * CAMERA: Focus Point
 * - Focus the battle camera on a certain point in the screen.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   X Coordinate:
 *   - Insert the point to focus the camera on.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Insert the point to focus the camera on.
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - Duration in frames for camera focus change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Focus Target(s)
 * - Focus the battle camera on certain battler target(s).
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Targets:
 *   - Select unit(s) to focus the battle camera on.
 *
 *   Duration:
 *   - Duration in frames for camera focus change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Offset
 * - Offset the battle camera from the focus target.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Offset X:
 *   - How much to offset the camera X by.
 *   - Negative: left. Positive: right.
 *
 *   Offset Y:
 *   - How much to offset the camera Y by.
 *   - Negative: up. Positive: down.
 *
 *   Duration:
 *   - Duration in frames for offset change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Reset
 * - Reset the battle camera settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Reset Focus?:
 *   - Reset the focus point?
 *
 *   Reset Offset?:
 *   - Reset the camera offset?
 *
 *   Duration:
 *   - Duration in frames for reset change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Wait For Camera
 * - Waits for camera changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 * 
 * === Action Sequences - Skew (Camera) ===
 * 
 * These action sequences allow you to have control over the camera skew.
 * 
 * ---
 *
 * SKEW: Change Skew
 * - Changes the camera skew.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Skew X:
 *   - Change the camera skew X to this value.
 *
 *   Skew Y:
 *   - Change the camera skew Y to this value.
 *
 *   Duration:
 *   - Duration in frames to change camera skew.
 *
 *   Skew Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Skew?:
 *   - Wait for skew changes to complete before performing next command?
 *
 * ---
 *
 * SKEW: Reset Skew
 * - Reset any skew settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset camera skew.
 *
 *   Skew Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Skew?:
 *   - Wait for skew changes to complete before performing next command?
 *
 * ---
 *
 * SKEW: Wait For Skew
 * - Waits for skew changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * === Action Sequences - Zoom (Camera) ===
 *
 * These Action Sequences are zoom-related.
 *
 * ---
 *
 * ZOOM: Change Scale
 * - Changes the zoom scale.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Scale:
 *   - The zoom scale to change to.
 *
 *   Duration:
 *   - Duration in frames to reset battle zoom.
 *
 *   Zoom Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Zoom?
 *   - Wait for zoom changes to complete before performing next command?
 *
 * ---
 *
 * ZOOM: Reset Zoom
 * - Reset any zoom settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset battle zoom.
 *
 *   Zoom Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Zoom?
 *   - Wait for zoom changes to complete before performing next command?
 *
 * ---
 *
 * ZOOM: Wait For Zoom
 * - Waits for zoom changes to complete before performing next command.
 * Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Menu Settings
 * ============================================================================
 *
 * These plugin parameters add a new options command in order to let the player
 * decide if they want the battle camera ON or OFF.
 * 
 * The player has the option to turn off the battle camera effects. If they
 * choose to turn it off, then all of this plugin's effects will be disabled
 * until they turn it back on. This is to give players control over how the
 * game visually appears in case they have motion sickness.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the Battle Camera options to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Options Name:
 *   - Command name of the option.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.07: April 21, 2022
 * * Feature Update!
 * ** Rebuild the animation container for Battle Core's Anti-Tint UI so that it
 *    works properly with MV animations and zoom in sideview. Update by Irina.
 * 
 * Version 1.06: April 14, 2022
 * * Compatibility Update!
 * ** Compatibility update with Anti-Tint UI feature in combination with MV-
 *    MV-related animations for non-sideview actors. Update made by Irina.
 * 
 * Version 1.05: April 7, 2022
 * * Compatibility Update!
 * ** Compatibility update with Anti-Tint UI feature in combination with zoom
 *    for MV-related animations. Update made by Irina.
 * 
 * Version 1.04: March 31, 2022
 * * Compatibility Update!
 * ** Compatibility update with Battle Core's new Anti-Tint UI feature for
 *    MV-related animations. Update made by Irina.
 * 
 * Version 1.03: January 6, 2022
 * * Compatibility Update!
 * ** The newly added MV Animation-support should now work properly with the
 *    Action Sequence Camera plugin. Update made by Irina.
 * 
 * Version 1.02: December 4, 2020
 * * Bug Fixes!
 * ** Show Pictures should now appear in the right positions. Fix by Irina.
 * 
 * Version 1.01: October 4, 2020
 * * Bug Fixes!
 * ** Damage offsets are now corrected and in line with the latest Battle Core
 *    version.
 *
 * Version 1.00: September 23, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActSeqCamera
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Options:struct
 * @text Options Menu
 * @type struct<Options>
 * @desc Settings for the Options Menu
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","OptionsName:str":"Battle Camera"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the Battle Camera options to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionsName:str
 * @text Options Name
 * @parent Options
 * @desc Command name of the option.
 * @default Battle Camera
 *
 */
//=============================================================================

function _0x30da(_0x19cbf6,_0x49300b){const _0x285805=_0x2858();return _0x30da=function(_0x30daaf,_0x3f96a0){_0x30daaf=_0x30daaf-0xc1;let _0x27bbb5=_0x285805[_0x30daaf];return _0x27bbb5;},_0x30da(_0x19cbf6,_0x49300b);}const _0x403da8=_0x30da;(function(_0x5b1fc1,_0x4b4cc6){const _0x330652=_0x30da,_0x5c87e6=_0x5b1fc1();while(!![]){try{const _0x59b416=parseInt(_0x330652(0x171))/0x1+-parseInt(_0x330652(0xfc))/0x2*(parseInt(_0x330652(0xc1))/0x3)+parseInt(_0x330652(0xee))/0x4+parseInt(_0x330652(0x13e))/0x5+-parseInt(_0x330652(0x11f))/0x6*(parseInt(_0x330652(0x16c))/0x7)+-parseInt(_0x330652(0xff))/0x8*(-parseInt(_0x330652(0xc3))/0x9)+parseInt(_0x330652(0x131))/0xa*(parseInt(_0x330652(0x12e))/0xb);if(_0x59b416===_0x4b4cc6)break;else _0x5c87e6['push'](_0x5c87e6['shift']());}catch(_0x24560c){_0x5c87e6['push'](_0x5c87e6['shift']());}}}(_0x2858,0x45853));var label=_0x403da8(0x17f),tier=tier||0x0,dependencies=[_0x403da8(0xe6),'VisuMZ_1_BattleCore'],pluginData=$plugins[_0x403da8(0x10c)](function(_0x861b4d){const _0x5a6f39=_0x403da8;return _0x861b4d['status']&&_0x861b4d[_0x5a6f39(0x170)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x403da8(0xef)]||{},VisuMZ[_0x403da8(0x142)]=function(_0x2b95a1,_0x4a3f79){const _0x34bd6f=_0x403da8;for(const _0x2a866c in _0x4a3f79){if(_0x2a866c['match'](/(.*):(.*)/i)){const _0x17c153=String(RegExp['$1']),_0x53b9ae=String(RegExp['$2'])['toUpperCase']()[_0x34bd6f(0x11c)]();let _0x2ffab0,_0x1aaefa,_0x345d9b;switch(_0x53b9ae){case _0x34bd6f(0xf9):_0x2ffab0=_0x4a3f79[_0x2a866c]!==''?Number(_0x4a3f79[_0x2a866c]):0x0;break;case _0x34bd6f(0xd4):_0x1aaefa=_0x4a3f79[_0x2a866c]!==''?JSON[_0x34bd6f(0x12f)](_0x4a3f79[_0x2a866c]):[],_0x2ffab0=_0x1aaefa[_0x34bd6f(0x10e)](_0x2bf201=>Number(_0x2bf201));break;case _0x34bd6f(0x141):_0x2ffab0=_0x4a3f79[_0x2a866c]!==''?eval(_0x4a3f79[_0x2a866c]):null;break;case _0x34bd6f(0x178):_0x1aaefa=_0x4a3f79[_0x2a866c]!==''?JSON[_0x34bd6f(0x12f)](_0x4a3f79[_0x2a866c]):[],_0x2ffab0=_0x1aaefa['map'](_0x1f749f=>eval(_0x1f749f));break;case _0x34bd6f(0x14c):_0x2ffab0=_0x4a3f79[_0x2a866c]!==''?JSON[_0x34bd6f(0x12f)](_0x4a3f79[_0x2a866c]):'';break;case _0x34bd6f(0x11d):_0x1aaefa=_0x4a3f79[_0x2a866c]!==''?JSON['parse'](_0x4a3f79[_0x2a866c]):[],_0x2ffab0=_0x1aaefa[_0x34bd6f(0x10e)](_0x559f12=>JSON[_0x34bd6f(0x12f)](_0x559f12));break;case _0x34bd6f(0xe7):_0x2ffab0=_0x4a3f79[_0x2a866c]!==''?new Function(JSON[_0x34bd6f(0x12f)](_0x4a3f79[_0x2a866c])):new Function(_0x34bd6f(0xd9));break;case _0x34bd6f(0x155):_0x1aaefa=_0x4a3f79[_0x2a866c]!==''?JSON[_0x34bd6f(0x12f)](_0x4a3f79[_0x2a866c]):[],_0x2ffab0=_0x1aaefa[_0x34bd6f(0x10e)](_0x3f9cf8=>new Function(JSON[_0x34bd6f(0x12f)](_0x3f9cf8)));break;case _0x34bd6f(0xd6):_0x2ffab0=_0x4a3f79[_0x2a866c]!==''?String(_0x4a3f79[_0x2a866c]):'';break;case _0x34bd6f(0x109):_0x1aaefa=_0x4a3f79[_0x2a866c]!==''?JSON[_0x34bd6f(0x12f)](_0x4a3f79[_0x2a866c]):[],_0x2ffab0=_0x1aaefa[_0x34bd6f(0x10e)](_0x43329f=>String(_0x43329f));break;case _0x34bd6f(0x149):_0x345d9b=_0x4a3f79[_0x2a866c]!==''?JSON[_0x34bd6f(0x12f)](_0x4a3f79[_0x2a866c]):{},_0x2ffab0=VisuMZ[_0x34bd6f(0x142)]({},_0x345d9b);break;case _0x34bd6f(0xfa):_0x1aaefa=_0x4a3f79[_0x2a866c]!==''?JSON[_0x34bd6f(0x12f)](_0x4a3f79[_0x2a866c]):[],_0x2ffab0=_0x1aaefa[_0x34bd6f(0x10e)](_0x3d30fe=>VisuMZ['ConvertParams']({},JSON['parse'](_0x3d30fe)));break;default:continue;}_0x2b95a1[_0x17c153]=_0x2ffab0;}}return _0x2b95a1;},(_0x2a3aa5=>{const _0x45134d=_0x403da8,_0x3e333a=_0x2a3aa5[_0x45134d(0x17b)];for(const _0x2bd2a0 of dependencies){if(!Imported[_0x2bd2a0]){alert(_0x45134d(0x165)[_0x45134d(0x137)](_0x3e333a,_0x2bd2a0)),SceneManager[_0x45134d(0x148)]();break;}}const _0x3a4906=_0x2a3aa5[_0x45134d(0x170)];if(_0x3a4906['match'](/\[Version[ ](.*?)\]/i)){if('abFjs'==='pOJOV')_0x53ae33(_0x45134d(0x123)['format'](_0x3ad2b7,_0x322de2)),_0x50aafb['exit']();else{const _0x16874d=Number(RegExp['$1']);_0x16874d!==VisuMZ[label][_0x45134d(0xea)]&&(alert(_0x45134d(0x123)['format'](_0x3e333a,_0x16874d)),SceneManager[_0x45134d(0x148)]());}}if(_0x3a4906['match'](/\[Tier[ ](\d+)\]/i)){const _0x3b0249=Number(RegExp['$1']);if(_0x3b0249<tier)alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x45134d(0x137)](_0x3e333a,_0x3b0249,tier)),SceneManager['exit']();else{if(_0x45134d(0x17e)===_0x45134d(0xe3)){if(_0x11a49b['length']<=0x0)return;const _0x3920bf=this[_0x45134d(0xde)]();_0x3920bf[_0x45134d(0x115)]=!![],_0x14ecbc[_0x45134d(0xd7)](_0x58aa3d),_0x3920bf['cameraDuration']=_0xf08f44,_0x3920bf[_0x45134d(0xf2)]=_0x24d373,_0x3920bf[_0x45134d(0xe5)]=_0x31fb0a;}else tier=Math[_0x45134d(0x143)](_0x3b0249,tier);}}VisuMZ[_0x45134d(0x142)](VisuMZ[label][_0x45134d(0xef)],_0x2a3aa5[_0x45134d(0x184)]);})(pluginData),ConfigManager[_0x403da8(0x12c)]=!![],VisuMZ[_0x403da8(0x17f)][_0x403da8(0x120)]=ConfigManager[_0x403da8(0xc9)],ConfigManager[_0x403da8(0xc9)]=function(){const _0x44e40c=_0x403da8,_0x3f6394=VisuMZ[_0x44e40c(0x17f)]['ConfigManager_makeData'][_0x44e40c(0x110)](this);return _0x3f6394[_0x44e40c(0x12c)]=this[_0x44e40c(0x12c)],_0x3f6394;},VisuMZ[_0x403da8(0x17f)][_0x403da8(0xeb)]=ConfigManager['applyData'],ConfigManager[_0x403da8(0x177)]=function(_0x4af203){const _0x3f2378=_0x403da8;VisuMZ[_0x3f2378(0x17f)][_0x3f2378(0xeb)][_0x3f2378(0x110)](this,_0x4af203),_0x3f2378(0x12c)in _0x4af203?this[_0x3f2378(0x12c)]=_0x4af203[_0x3f2378(0x12c)]:this[_0x3f2378(0x12c)]=!![];},TextManager['battleCameraOption']=VisuMZ[_0x403da8(0x17f)]['Settings'][_0x403da8(0x16f)][_0x403da8(0x135)],VisuMZ[_0x403da8(0x17f)]['BattleManager_setup']=BattleManager[_0x403da8(0xc4)],BattleManager[_0x403da8(0xc4)]=function(_0x249078,_0x13048e,_0x3239ff){const _0x1251e2=_0x403da8;VisuMZ[_0x1251e2(0x17f)][_0x1251e2(0xf4)][_0x1251e2(0x110)](this,_0x249078,_0x13048e,_0x3239ff),this['clearCameraFocusTargets']();},BattleManager[_0x403da8(0x162)]=function(){this['_cameraFocusTargets']=[];},BattleManager[_0x403da8(0x117)]=function(){const _0x1eb431=_0x403da8;if(this[_0x1eb431(0x125)]===undefined)this[_0x1eb431(0x162)]();return this[_0x1eb431(0x125)];},BattleManager[_0x403da8(0xd7)]=function(_0x21cad5){const _0x565e9c=_0x403da8;this[_0x565e9c(0x125)]=_0x21cad5['filter']((_0x57baf3,_0x1f5f34,_0x17754e)=>_0x17754e[_0x565e9c(0xdb)](_0x57baf3)===_0x1f5f34);},BattleManager[_0x403da8(0x157)]=function(){const _0x26e37b=_0x403da8,_0x39301e=this[_0x26e37b(0x117)]();if(_0x39301e[_0x26e37b(0x122)]<=0x0)return Math[_0x26e37b(0xfb)](Graphics[_0x26e37b(0xfd)]/0x2);let _0x562265=_0x39301e[_0x26e37b(0x107)]((_0x2c313d,_0x3ede25)=>_0x2c313d+=_0x3ede25[_0x26e37b(0xca)]()['x'],0x0)/_0x39301e[_0x26e37b(0x122)];return _0x562265+=Math['round']((Graphics['width']-Graphics['boxWidth'])/0x2),_0x562265;},BattleManager[_0x403da8(0x168)]=function(){const _0x1604c8=_0x403da8,_0x555883=this[_0x1604c8(0x117)]();if(_0x555883[_0x1604c8(0x122)]<=0x0)return Math[_0x1604c8(0xfb)](Graphics['height']/0x2);let _0x37c9f9=_0x555883[_0x1604c8(0x107)]((_0x23a723,_0x410f19)=>_0x23a723+=_0x410f19['battler']()['y']-Math[_0x1604c8(0xfb)](_0x410f19[_0x1604c8(0xca)]()['height']/0x2),0x0)/_0x555883[_0x1604c8(0x122)];return _0x37c9f9+=Math[_0x1604c8(0xfb)]((Graphics[_0x1604c8(0x164)]-Graphics['boxHeight'])/0x2),_0x37c9f9;},VisuMZ[_0x403da8(0x17f)][_0x403da8(0x114)]=Game_Screen[_0x403da8(0x179)][_0x403da8(0xc7)],Game_Screen['prototype'][_0x403da8(0xc7)]=function(){const _0x5f4b5a=_0x403da8;VisuMZ[_0x5f4b5a(0x17f)][_0x5f4b5a(0x114)][_0x5f4b5a(0x110)](this),this[_0x5f4b5a(0xcf)]();},Game_Screen[_0x403da8(0x179)][_0x403da8(0xcf)]=function(){const _0x5317f9=_0x403da8;this[_0x5317f9(0xdd)]=this[_0x5317f9(0x182)]();},Game_Screen[_0x403da8(0x179)][_0x403da8(0x182)]=function(){const _0x2f220a=_0x403da8,_0x4de859=$dataSystem[_0x2f220a(0xd8)][_0x2f220a(0x15a)],_0xd25063=$dataSystem[_0x2f220a(0xd8)][_0x2f220a(0x132)];return{'angle':0x0,'angleTarget':0x0,'angleDuration':0x0,'angleWholeDuration':0x0,'angleEasing':'InOutSine','cameraFocusTarget':![],'cameraX':Math[_0x2f220a(0xfb)](_0x4de859/0x2),'cameraY':Math[_0x2f220a(0xfb)](_0xd25063/0x2),'cameraXTarget':Math[_0x2f220a(0xfb)](_0x4de859/0x2),'cameraYTarget':Math[_0x2f220a(0xfb)](_0xd25063/0x2),'cameraDuration':0x0,'cameraDurationWhole':0x0,'cameraEasing':_0x2f220a(0xcb),'cameraClamp':!![],'cameraOffsetX':0x0,'cameraOffsetY':0x0,'cameraOffsetXTarget':0x0,'cameraOffsetYTarget':0x0,'cameraOffsetDuration':0x0,'cameraOffsetDurationWhole':0x0,'cameraOffsetEasing':_0x2f220a(0xcb),'skewX':0x0,'skewTargetX':0x0,'skewY':0x0,'skewTargetY':0x0,'skewDuration':0x0,'skewWholeDuration':0x0,'skewEasing':'InOutSine','zoomScale':0x1,'zoomScaleTarget':0x1,'zoomDuration':0x0,'zoomWholeDuration':0x0,'zoomEasing':_0x2f220a(0xcb)};},Game_Screen['prototype'][_0x403da8(0xde)]=function(){const _0x160a48=_0x403da8;if(this['_battleCamera']===undefined)this[_0x160a48(0xcf)]();if(!ConfigManager['battleCamera'])return this[_0x160a48(0x182)]();return this[_0x160a48(0xdd)];},VisuMZ[_0x403da8(0x17f)][_0x403da8(0x126)]=Game_Screen[_0x403da8(0x179)][_0x403da8(0xc5)],Game_Screen[_0x403da8(0x179)][_0x403da8(0xc5)]=function(){const _0x4d7055=_0x403da8;VisuMZ[_0x4d7055(0x17f)][_0x4d7055(0x126)][_0x4d7055(0x110)](this),this[_0x4d7055(0xdc)](),this[_0x4d7055(0x12d)](),this[_0x4d7055(0x16a)](),this[_0x4d7055(0x163)](),this[_0x4d7055(0x140)]();},Game_Screen['prototype'][_0x403da8(0x144)]=function(_0x97b537,_0x31603b,_0x3a7aeb){const _0x2cc8eb=_0x403da8,_0x559221=this[_0x2cc8eb(0xde)]();_0x559221[_0x2cc8eb(0xcd)]=-_0x97b537,_0x559221[_0x2cc8eb(0xf5)]=_0x31603b,_0x559221[_0x2cc8eb(0xe8)]=_0x31603b,_0x559221[_0x2cc8eb(0x172)]=_0x3a7aeb;},Game_Screen[_0x403da8(0x179)][_0x403da8(0xdc)]=function(){const _0x56c02c=_0x403da8;if(!SceneManager[_0x56c02c(0xe2)]())return;const _0x45b84c=this[_0x56c02c(0xde)](),_0x3ad42a=_0x45b84c[_0x56c02c(0xf5)],_0x28790f=_0x45b84c[_0x56c02c(0xe8)],_0x22149c=_0x45b84c[_0x56c02c(0x172)];_0x3ad42a>0x0?(_0x45b84c[_0x56c02c(0x10b)]=this[_0x56c02c(0x13a)](_0x45b84c[_0x56c02c(0x10b)],_0x45b84c[_0x56c02c(0xcd)],_0x3ad42a,_0x28790f,_0x22149c),_0x45b84c[_0x56c02c(0xf5)]--):_0x56c02c(0x134)!==_0x56c02c(0x134)?_0x567903[_0x56c02c(0x159)]?this['updatePositionCameraRoamOld']():this['updatePositionCameraRoamNew']():_0x45b84c[_0x56c02c(0x10b)]=_0x45b84c[_0x56c02c(0xcd)];},Game_Screen[_0x403da8(0x179)][_0x403da8(0x11e)]=function(_0x224cb9,_0x4948f5,_0x3392d6,_0x542bb3){const _0x2494d7=_0x403da8,_0x59277c=this[_0x2494d7(0xde)]();_0x59277c['cameraFocusTarget']=![],_0x59277c[_0x2494d7(0x181)]=Math[_0x2494d7(0xfb)](_0x224cb9),_0x59277c[_0x2494d7(0x128)]=Math[_0x2494d7(0xfb)](_0x4948f5),_0x59277c[_0x2494d7(0x12a)]=_0x3392d6,_0x59277c[_0x2494d7(0xf2)]=_0x3392d6,_0x59277c[_0x2494d7(0xe5)]=_0x542bb3;},Game_Screen[_0x403da8(0x179)][_0x403da8(0x129)]=function(_0x56fbe5,_0x1d2b6d,_0x3fc278){const _0x23b580=_0x403da8;if(_0x56fbe5[_0x23b580(0x122)]<=0x0)return;const _0x1bf341=this[_0x23b580(0xde)]();_0x1bf341['cameraFocusTarget']=!![],BattleManager['setCameraFocusTargets'](_0x56fbe5),_0x1bf341[_0x23b580(0x12a)]=_0x1d2b6d,_0x1bf341[_0x23b580(0xf2)]=_0x1d2b6d,_0x1bf341[_0x23b580(0xe5)]=_0x3fc278;},Game_Screen[_0x403da8(0x179)]['updateBattleCamera']=function(){const _0xf2a7a7=_0x403da8;if(!SceneManager[_0xf2a7a7(0xe2)]())return;const _0x3942eb=this['battleCameraData'](),_0x55e84c=_0x3942eb[_0xf2a7a7(0x12a)],_0x173a30=_0x3942eb['cameraDurationWhole'],_0x5ab10c=_0x3942eb[_0xf2a7a7(0xe5)];_0x3942eb[_0xf2a7a7(0x115)]&&(_0x3942eb['cameraXTarget']=BattleManager[_0xf2a7a7(0x157)](),_0x3942eb[_0xf2a7a7(0x128)]=BattleManager[_0xf2a7a7(0x168)]()),_0x55e84c>0x0?(_0x3942eb[_0xf2a7a7(0x14e)]=this['applyEasing'](_0x3942eb[_0xf2a7a7(0x14e)],_0x3942eb[_0xf2a7a7(0x181)],_0x55e84c,_0x173a30,_0x5ab10c),_0x3942eb[_0xf2a7a7(0x11b)]=this[_0xf2a7a7(0x13a)](_0x3942eb['cameraY'],_0x3942eb[_0xf2a7a7(0x128)],_0x55e84c,_0x173a30,_0x5ab10c),_0x3942eb[_0xf2a7a7(0x12a)]--):(_0x3942eb[_0xf2a7a7(0x14e)]=_0x3942eb['cameraXTarget'],_0x3942eb[_0xf2a7a7(0x11b)]=_0x3942eb[_0xf2a7a7(0x128)]);},Game_Screen[_0x403da8(0x179)][_0x403da8(0xd3)]=function(_0xf90170,_0x4cc046,_0x26133c,_0x373a40){const _0x2617a0=_0x403da8,_0x18efd7=this[_0x2617a0(0xde)]();_0x18efd7[_0x2617a0(0x152)]=Math[_0x2617a0(0xfb)](_0xf90170),_0x18efd7['cameraOffsetYTarget']=Math['round'](_0x4cc046),_0x18efd7[_0x2617a0(0x16b)]=_0x26133c,_0x18efd7[_0x2617a0(0x175)]=_0x26133c,_0x18efd7[_0x2617a0(0x17d)]=_0x373a40;},Game_Screen[_0x403da8(0x179)][_0x403da8(0x16a)]=function(){const _0x19b9f9=_0x403da8;if(!SceneManager[_0x19b9f9(0xe2)]())return;const _0x5e6615=this[_0x19b9f9(0xde)](),_0x21ad44=_0x5e6615[_0x19b9f9(0x16b)],_0x4ea592=_0x5e6615[_0x19b9f9(0x175)],_0x503dd5=_0x5e6615[_0x19b9f9(0x17d)];_0x21ad44>0x0?(_0x5e6615['cameraOffsetX']=this[_0x19b9f9(0x13a)](_0x5e6615[_0x19b9f9(0x13c)],_0x5e6615['cameraOffsetXTarget'],_0x21ad44,_0x4ea592,_0x503dd5),_0x5e6615[_0x19b9f9(0x13d)]=this['applyEasing'](_0x5e6615[_0x19b9f9(0x13d)],_0x5e6615[_0x19b9f9(0x166)],_0x21ad44,_0x4ea592,_0x503dd5),_0x5e6615[_0x19b9f9(0x16b)]--):_0x19b9f9(0xf3)!=='IPCnp'?(_0x486716[_0x19b9f9(0x17f)][_0x19b9f9(0x114)][_0x19b9f9(0x110)](this),this[_0x19b9f9(0xcf)]()):(_0x5e6615[_0x19b9f9(0x13c)]=_0x5e6615[_0x19b9f9(0x152)],_0x5e6615[_0x19b9f9(0x13d)]=_0x5e6615[_0x19b9f9(0x166)]);},Game_Screen['prototype'][_0x403da8(0x108)]=function(_0x4997b8,_0x2f3f6f,_0x1bbb92,_0x1484ae){const _0x44b992=_0x403da8,_0x5d783f=this[_0x44b992(0xde)]();_0x5d783f[_0x44b992(0x10f)]=_0x4997b8,_0x5d783f[_0x44b992(0xd1)]=_0x2f3f6f,_0x5d783f['skewDuration']=_0x1bbb92,_0x5d783f['skewWholeDuration']=_0x1bbb92,_0x5d783f[_0x44b992(0x16d)]=_0x1484ae;},Game_Screen[_0x403da8(0x179)]['updateBattleSkew']=function(){const _0x9a3359=_0x403da8;if(!SceneManager[_0x9a3359(0xe2)]())return;const _0x502c1a=this[_0x9a3359(0xde)](),_0x44d868=_0x502c1a[_0x9a3359(0xd0)],_0x2353de=_0x502c1a[_0x9a3359(0x183)],_0x1e4d4b=_0x502c1a[_0x9a3359(0x16d)];_0x44d868>0x0?(_0x502c1a['skewX']=this[_0x9a3359(0x13a)](_0x502c1a[_0x9a3359(0x15d)],_0x502c1a[_0x9a3359(0x10f)],_0x44d868,_0x2353de,_0x1e4d4b),_0x502c1a[_0x9a3359(0x174)]=this[_0x9a3359(0x13a)](_0x502c1a[_0x9a3359(0x174)],_0x502c1a[_0x9a3359(0xd1)],_0x44d868,_0x2353de,_0x1e4d4b),_0x502c1a[_0x9a3359(0xd0)]--):_0x9a3359(0x154)!==_0x9a3359(0x154)?(_0x51cf7a[_0x9a3359(0x10b)]=this[_0x9a3359(0x13a)](_0x29ab15[_0x9a3359(0x10b)],_0xaed21b[_0x9a3359(0xcd)],_0x32fde0,_0x3bc923,_0x1f3034),_0x1e6bbe[_0x9a3359(0xf5)]--):(_0x502c1a[_0x9a3359(0x15d)]=_0x502c1a[_0x9a3359(0x10f)],_0x502c1a['skewY']=_0x502c1a[_0x9a3359(0xd1)]);},Game_Screen[_0x403da8(0x179)][_0x403da8(0x116)]=function(_0x34d69b,_0x3ec248,_0x300724){const _0x5058c1=_0x403da8,_0x2ded44=this[_0x5058c1(0xde)]();_0x2ded44[_0x5058c1(0x145)]=_0x34d69b,_0x2ded44[_0x5058c1(0x105)]=_0x3ec248,_0x2ded44[_0x5058c1(0x102)]=_0x3ec248,_0x2ded44[_0x5058c1(0x156)]=_0x300724;},Game_Screen[_0x403da8(0x179)][_0x403da8(0x140)]=function(){const _0x1a485f=_0x403da8;if(!SceneManager['isSceneBattle']())return;const _0x204ba4=this['battleCameraData'](),_0x5925b5=_0x204ba4[_0x1a485f(0x105)],_0x4d859c=_0x204ba4[_0x1a485f(0x102)],_0x3462dc=_0x204ba4[_0x1a485f(0x156)];if(_0x5925b5>0x0){if(_0x1a485f(0xc8)===_0x1a485f(0x127)){let _0x2741ae=_0x446f4b[_0x1a485f(0x17f)][_0x1a485f(0xd2)][_0x1a485f(0x110)](this);return _0x2741ae+=_0x1c2ad7[_0x1a485f(0xfb)]((_0x5a0914['width']-_0x229d5c[_0x1a485f(0x169)])/0x2),_0x2741ae;}else _0x204ba4[_0x1a485f(0x17c)]=this['applyEasing'](_0x204ba4[_0x1a485f(0x17c)],_0x204ba4['zoomScaleTarget'],_0x5925b5,_0x4d859c,_0x3462dc),_0x204ba4[_0x1a485f(0x105)]--;}else _0x204ba4[_0x1a485f(0x17c)]=_0x204ba4[_0x1a485f(0x145)];},Game_Screen[_0x403da8(0x179)][_0x403da8(0x13a)]=function(_0x369cb6,_0x5ed040,_0x379ab1,_0x40d1f,_0x1c17ad){const _0x36a75d=_0x403da8,_0x267795=VisuMZ['ApplyEasing']((_0x40d1f-_0x379ab1)/_0x40d1f,_0x1c17ad||'Linear'),_0xf494cb=VisuMZ['ApplyEasing']((_0x40d1f-_0x379ab1+0x1)/_0x40d1f,_0x1c17ad||_0x36a75d(0x100)),_0x2e4aac=(_0x369cb6-_0x5ed040*_0x267795)/(0x1-_0x267795);return _0x2e4aac+(_0x5ed040-_0x2e4aac)*_0xf494cb;},VisuMZ[_0x403da8(0x17f)][_0x403da8(0x133)]=Scene_Options['prototype'][_0x403da8(0x118)],Scene_Options[_0x403da8(0x179)][_0x403da8(0x118)]=function(){const _0x1f35b6=_0x403da8;let _0x33cf2f=VisuMZ[_0x1f35b6(0x17f)][_0x1f35b6(0x133)][_0x1f35b6(0x110)](this);const _0xda1db8=VisuMZ[_0x1f35b6(0x17f)][_0x1f35b6(0xef)];if(_0xda1db8['Options'][_0x1f35b6(0x12b)]&&_0xda1db8[_0x1f35b6(0x16f)][_0x1f35b6(0xc6)])_0x33cf2f++;return _0x33cf2f;},VisuMZ['ActSeqCamera']['Sprite_Battler_damageOffsetX']=Sprite_Battler[_0x403da8(0x179)][_0x403da8(0x11a)],Sprite_Battler['prototype'][_0x403da8(0x11a)]=function(){const _0x13aba1=_0x403da8;let _0x27b1cd=VisuMZ[_0x13aba1(0x17f)][_0x13aba1(0xd2)][_0x13aba1(0x110)](this);return _0x27b1cd+=Math[_0x13aba1(0xfb)]((Graphics[_0x13aba1(0xfd)]-Graphics['boxWidth'])/0x2),_0x27b1cd;},VisuMZ['ActSeqCamera'][_0x403da8(0x14d)]=Sprite_Battler[_0x403da8(0x179)]['damageOffsetY'],Sprite_Battler['prototype'][_0x403da8(0xda)]=function(){const _0x9883d7=_0x403da8;let _0x2d5e4e=VisuMZ[_0x9883d7(0x17f)][_0x9883d7(0x14d)]['call'](this);return _0x2d5e4e+=Math[_0x9883d7(0xfb)]((Graphics[_0x9883d7(0x164)]-Graphics[_0x9883d7(0x130)])/0x2),_0x2d5e4e;},VisuMZ[_0x403da8(0x17f)][_0x403da8(0x147)]=Sprite_Animation['prototype'][_0x403da8(0x160)],Sprite_Animation[_0x403da8(0x179)][_0x403da8(0x160)]=function(){const _0x593509=_0x403da8,_0x413a5f=this[_0x593509(0x112)]['scale'];if(SceneManager[_0x593509(0x15b)][_0x593509(0x153)]){if(_0x593509(0xfe)===_0x593509(0xcc))_0x5a9bba['ActSeqCamera'][_0x593509(0x151)][_0x593509(0x110)](this),this['applyAnchorsForTiltEffect']();else{const _0x2f55cd=SceneManager[_0x593509(0x15b)]['_spriteset'];this[_0x593509(0x112)][_0x593509(0xed)]*=_0x2f55cd[_0x593509(0xed)]['x'];}}VisuMZ[_0x593509(0x17f)][_0x593509(0x147)][_0x593509(0x110)](this),this[_0x593509(0x112)][_0x593509(0xed)]=_0x413a5f;},Sprite_AnimationMV[_0x403da8(0x179)][_0x403da8(0x104)]=function(){const _0x4b43bc=_0x403da8;return this[_0x4b43bc(0x112)][_0x4b43bc(0x111)]===0x3;},Sprite_AnimationMV[_0x403da8(0x179)][_0x403da8(0x176)]=function(){const _0x2b267a=_0x403da8;return this[_0x2b267a(0x180)][_0x2b267a(0x122)]>0x0;},Sprite_AnimationMV['prototype'][_0x403da8(0x15f)]=function(){const _0x4f9845=_0x403da8;if(!$gameSystem[_0x4f9845(0x173)]()){if(_0x4f9845(0x146)!==_0x4f9845(0x146))this[_0x4f9845(0x12c)]=_0x3801f8['battleCamera'];else{const _0x14470c=this['_targets'][0x0];if(_0x14470c[_0x4f9845(0x113)]===Sprite_Actor)return![];}}return!![];},VisuMZ['ActSeqCamera'][_0x403da8(0x150)]=Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0x106)],Spriteset_Battle[_0x403da8(0x179)]['initialize']=function(){const _0x174950=_0x403da8;VisuMZ[_0x174950(0x17f)][_0x174950(0x150)][_0x174950(0x110)](this),this['_cacheScaleX']=undefined,this[_0x174950(0x14b)]=undefined;},VisuMZ[_0x403da8(0x17f)][_0x403da8(0x151)]=Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0x16e)],Spriteset_Battle['prototype'][_0x403da8(0x16e)]=function(){const _0x1ebe88=_0x403da8;VisuMZ[_0x1ebe88(0x17f)][_0x1ebe88(0x151)][_0x1ebe88(0x110)](this),this[_0x1ebe88(0x14a)]();},Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0x14a)]=function(){const _0x3782ae=_0x403da8;if(Spriteset_Battle['_oldCamera'])return;const _0x157442=-Math['ceil'](Graphics['width']/0x2),_0x43c8b4=-Math[_0x3782ae(0xf1)](Graphics[_0x3782ae(0x164)]/0x2);this[_0x3782ae(0x15c)]['x']=0.5,this['anchor']['y']=0.5;const _0x1a9662=[this['_baseSprite'],this[_0x3782ae(0xf0)]];_0x1a9662[_0x3782ae(0x17a)](this[_0x3782ae(0xf8)]);for(const _0x335326 of _0x1a9662){if(!_0x335326)continue;_0x335326['x']=_0x157442,_0x335326['y']=_0x43c8b4;}},Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0x119)]=function(){const _0x362ce7=_0x403da8;this[_0x362ce7(0x101)](),this[_0x362ce7(0xdf)](),this['updatePositionZoom'](),this[_0x362ce7(0x124)](),this[_0x362ce7(0x161)]();},Spriteset_Battle['prototype'][_0x403da8(0x101)]=function(){const _0x33e7c0=_0x403da8,_0x31c907=this[_0x33e7c0(0xd5)]();this[_0x33e7c0(0x10b)]=_0x31c907;},Spriteset_Battle['prototype']['getBattleAngle']=function(){const _0x20bf96=_0x403da8;if(!ConfigManager[_0x20bf96(0x12c)])return 0x0;if(BattleManager[_0x20bf96(0x10d)]())return 0x0;return $gameScreen[_0x20bf96(0xde)]()[_0x20bf96(0x10b)];},Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0xdf)]=function(){const _0x5616a4=_0x403da8;if(BattleManager['isInputting']()||!ConfigManager[_0x5616a4(0x12c)])this[_0x5616a4(0xe0)]['x']=0x0,this[_0x5616a4(0xe0)]['y']=0x0;else{if(_0x5616a4(0x15e)!==_0x5616a4(0x15e))_0x5cbb9e[_0x5616a4(0x17f)][_0x5616a4(0x126)][_0x5616a4(0x110)](this),this[_0x5616a4(0xdc)](),this['updateBattleCamera'](),this['updateBattleCameraOffset'](),this['updateBattleSkew'](),this[_0x5616a4(0x140)]();else{const _0x34f3d1=$gameScreen[_0x5616a4(0xde)]();this[_0x5616a4(0xe0)]['x']=_0x34f3d1[_0x5616a4(0x15d)],this[_0x5616a4(0xe0)]['y']=_0x34f3d1[_0x5616a4(0x174)];}}},Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0x136)]=function(){const _0x46a881=_0x403da8,_0x3fe86f=this[_0x46a881(0xec)]();this[_0x46a881(0xed)]['x']=this[_0x46a881(0xed)]['y']=_0x3fe86f;},Spriteset_Battle[_0x403da8(0x179)]['getBattleZoom']=function(){const _0x104ec5=_0x403da8;if(!ConfigManager[_0x104ec5(0x12c)])return 0x1;if(BattleManager[_0x104ec5(0x10d)]())return 0x1;return $gameScreen['battleCameraData']()['zoomScale'];},Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0x124)]=function(){const _0x14a5e6=_0x403da8;BattleManager[_0x14a5e6(0x10d)]()||!ConfigManager[_0x14a5e6(0x12c)]?this[_0x14a5e6(0x121)]():Spriteset_Battle[_0x14a5e6(0x159)]?_0x14a5e6(0xf7)!==_0x14a5e6(0xf7)?this['addBattleCameraCommand']():this['updatePositionCameraRoamOld']():this[_0x14a5e6(0x167)]();},Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0x121)]=function(){const _0x252a61=_0x403da8;if(Spriteset_Battle[_0x252a61(0x159)])return;this['x']=Math['ceil'](Graphics[_0x252a61(0xfd)]/0x2),this['y']=Math[_0x252a61(0xf1)](Graphics[_0x252a61(0x164)]/0x2);},Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0xf6)]=function(){const _0x8eea47=_0x403da8,_0x2903cb=$gameScreen[_0x8eea47(0xde)](),_0x2b7e5b=this[_0x8eea47(0x158)](),_0x1a9232=this[_0x8eea47(0xec)]();let _0x5cd57b=-(_0x2903cb[_0x8eea47(0x14e)]+_0x2903cb[_0x8eea47(0x13c)])*_0x1a9232+Graphics[_0x8eea47(0xfd)]/0x2,_0x237437=-(_0x2903cb[_0x8eea47(0x11b)]+_0x2903cb[_0x8eea47(0x13d)])*_0x1a9232+Graphics[_0x8eea47(0x164)]/0x2;if(_0x2b7e5b&&_0x1a9232>=0x1){const _0x2a9cb8=-Graphics['width']*_0x1a9232+Graphics['width']/0x2,_0x2bedaf=-Graphics[_0x8eea47(0x164)]*_0x1a9232+Graphics['height']/0x2;this['x']=Math[_0x8eea47(0xfb)](_0x5cd57b[_0x8eea47(0xe1)](_0x2a9cb8,0x0)),this['y']=Math['round'](_0x237437[_0x8eea47(0xe1)](_0x2bedaf,0x0));}else{if(_0x2b7e5b&&_0x1a9232<0x1)this['x']=Math[_0x8eea47(0xfb)]((Graphics[_0x8eea47(0xfd)]-Graphics[_0x8eea47(0xfd)]*_0x1a9232)/0x2),this['y']=Math[_0x8eea47(0xfb)]((Graphics[_0x8eea47(0x164)]-Graphics[_0x8eea47(0x164)]*_0x1a9232)/0x2);else{if(_0x8eea47(0xe4)===_0x8eea47(0xe4))this['x']=Math[_0x8eea47(0xfb)](_0x5cd57b),this['y']=Math['round'](_0x237437);else{if(!_0x3d3642[_0x8eea47(0xe2)]())return;const _0x47660c=this[_0x8eea47(0xde)](),_0x232e6e=_0x47660c[_0x8eea47(0x105)],_0x20b359=_0x47660c[_0x8eea47(0x102)],_0x379eec=_0x47660c[_0x8eea47(0x156)];_0x232e6e>0x0?(_0x47660c[_0x8eea47(0x17c)]=this[_0x8eea47(0x13a)](_0x47660c[_0x8eea47(0x17c)],_0x47660c[_0x8eea47(0x145)],_0x232e6e,_0x20b359,_0x379eec),_0x47660c[_0x8eea47(0x105)]--):_0x47660c['zoomScale']=_0x47660c[_0x8eea47(0x145)];}}}},Spriteset_Battle[_0x403da8(0x159)]=![],Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0x167)]=function(){const _0x1bfea4=_0x403da8,_0x2f86d6=$gameScreen[_0x1bfea4(0xde)]();let _0x129001=this['getBattleCameraClamp'](),_0x181acf=this['getBattleZoom'](),_0x5f04ea=-(_0x2f86d6['cameraX']+_0x2f86d6[_0x1bfea4(0x13c)])+Graphics[_0x1bfea4(0xfd)];_0x5f04ea-=(0x1-_0x181acf)*(Graphics['width']/0x2-_0x2f86d6[_0x1bfea4(0x14e)]-_0x2f86d6[_0x1bfea4(0x13c)]);let _0x5dce83=-(_0x2f86d6['cameraY']+_0x2f86d6[_0x1bfea4(0x13d)])+Graphics[_0x1bfea4(0x164)];if(_0x129001){if(_0x181acf>=0x1){const _0x23f8b1=Graphics[_0x1bfea4(0xfd)]-Graphics[_0x1bfea4(0xfd)]/0x2*_0x181acf,_0x216371=Graphics[_0x1bfea4(0xfd)]/0x2*_0x181acf;_0x5f04ea=_0x5f04ea[_0x1bfea4(0xe1)](_0x23f8b1,_0x216371);const _0x47d527=Graphics[_0x1bfea4(0x164)]-Graphics[_0x1bfea4(0x164)]/0x2*_0x181acf,_0x594ca2=Graphics[_0x1bfea4(0x164)]/0x2*_0x181acf;_0x5dce83=_0x5dce83[_0x1bfea4(0xe1)](_0x47d527,_0x594ca2);}else _0x181acf<0x1&&(_0x5f04ea=Graphics['width']/0x2,_0x5dce83=Graphics[_0x1bfea4(0x164)]/0x2);}this['x']=Math[_0x1bfea4(0xfb)](_0x5f04ea),this['y']=Math[_0x1bfea4(0xfb)](_0x5dce83);},Spriteset_Battle[_0x403da8(0x179)]['getBattleCameraClamp']=function(){const _0x3a4ea3=_0x403da8;if(!ConfigManager[_0x3a4ea3(0x12c)])return!![];if(BattleManager[_0x3a4ea3(0x10d)]())return!![];return $gameScreen['battleCameraData']()[_0x3a4ea3(0x103)];},Spriteset_Battle[_0x403da8(0x179)][_0x403da8(0x161)]=function(){const _0x16201f=_0x403da8;this['x']+=Math['round']($gameScreen[_0x16201f(0x10a)]()),Imported[_0x16201f(0xe6)]&&this[_0x16201f(0x13b)]&&(_0x16201f(0xe9)!=='tFSgO'?this[_0x16201f(0x13b)]():this[_0x16201f(0xf6)]());},VisuMZ[_0x403da8(0x17f)][_0x403da8(0x13f)]=Window_Options['prototype'][_0x403da8(0x139)],Window_Options['prototype'][_0x403da8(0x139)]=function(){const _0x2edc9c=_0x403da8;VisuMZ[_0x2edc9c(0x17f)][_0x2edc9c(0x13f)][_0x2edc9c(0x110)](this),this[_0x2edc9c(0xc2)]();},Window_Options[_0x403da8(0x179)][_0x403da8(0xc2)]=function(){const _0xa0661a=_0x403da8;VisuMZ[_0xa0661a(0x17f)][_0xa0661a(0xef)]['Options'][_0xa0661a(0x12b)]&&this[_0xa0661a(0xce)]();},Window_Options[_0x403da8(0x179)][_0x403da8(0xce)]=function(){const _0x4ef92a=_0x403da8,_0x4c4a7d=TextManager[_0x4ef92a(0x14f)],_0x5b5a78=_0x4ef92a(0x12c);this[_0x4ef92a(0x138)](_0x4c4a7d,_0x5b5a78);};function _0x2858(){const _0xdb837b=['cameraOffsetDuration','12005QASGcQ','skewEasing','createLowerLayer','Options','description','74756dzJNUD','angleEasing','isSideView','skewY','cameraOffsetDurationWhole','hasTargets','applyData','ARRAYEVAL','prototype','push','name','zoomScale','cameraOffsetEasing','DbXTY','ActSeqCamera','_targets','cameraXTarget','initialBattleCameraSettings','skewWholeDuration','parameters','3sQRFHP','addBattleCameraCommands','1874727cgwsNM','setup','update','AdjustRect','clear','suRBX','makeData','battler','InOutSine','CWqvv','angleTarget','addBattleCameraCommand','clearBattleCamera','skewDuration','skewTargetY','Sprite_Battler_damageOffsetX','setBattleCameraOffset','ARRAYNUM','getBattleAngle','STR','setCameraFocusTargets','advanced','return\x200','damageOffsetY','indexOf','updateBattleAngle','_battleCamera','battleCameraData','updatePositionSkew','skew','clamp','isSceneBattle','FTlSH','mnCiQ','cameraEasing','VisuMZ_0_CoreEngine','FUNC','angleWholeDuration','iaqin','version','ConfigManager_applyData','getBattleZoom','scale','916592fEYKjy','Settings','_damageContainer','ceil','cameraDurationWhole','IPCnp','BattleManager_setup','angleDuration','updatePositionCameraRoamOld','gXfqe','_animationContainer','NUM','ARRAYSTRUCT','round','873262ATszXL','width','PdSDQ','8tEpmpe','Linear','updatePositionAngle','zoomWholeDuration','cameraClamp','isCenteredAnimation','zoomDuration','initialize','reduce','setBattleSkew','ARRAYSTR','shake','angle','filter','isInputting','map','skewTargetX','call','position','_animation','constructor','Game_Screen_clear','cameraFocusTarget','setBattleZoom','cameraFocusTargets','maxCommands','updatePosition','damageOffsetX','cameraY','trim','ARRAYJSON','setBattleCameraPoint','1278KfSvEH','ConfigManager_makeData','updatePositionCameraNeutral','length','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','updatePositionCamera','_cameraFocusTargets','Game_Screen_update','VrfVf','cameraYTarget','setBattleCameraTargets','cameraDuration','AddOption','battleCamera','updateBattleCamera','55ZEUDlz','parse','boxHeight','462320kpAlLe','screenHeight','Scene_Options_maxCommands','PykiZ','OptionsName','updatePositionZoom','format','addCommand','addGeneralOptions','applyEasing','updatePositionCoreEngine','cameraOffsetX','cameraOffsetY','1716570vBUflQ','Window_Options_addGeneralOptions','updateBattleZoom','EVAL','ConvertParams','max','setBattleAngle','zoomScaleTarget','hZuOE','Sprite_Animation_updateEffectGeometry','exit','STRUCT','applyAnchorsForTiltEffect','_cacheScaleY','JSON','Sprite_Battler_damageOffsetY','cameraX','battleCameraOption','Spriteset_Battle_initialize','Spriteset_Battle_createLowerLayer','cameraOffsetXTarget','_spriteset','cCPEE','ARRAYFUNC','zoomEasing','cameraFocusTargetsX','getBattleCameraClamp','_oldCamera','screenWidth','_scene','anchor','skewX','dZiGB','forSideviewTargets','updateEffectGeometry','updatePositionShake','clearCameraFocusTargets','updateBattleSkew','height','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','cameraOffsetYTarget','updatePositionCameraRoamNew','cameraFocusTargetsY','boxWidth','updateBattleCameraOffset'];_0x2858=function(){return _0xdb837b;};return _0x2858();}