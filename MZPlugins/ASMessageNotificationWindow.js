/*:
 * @target MZ
 * @plugindesc [V1.0.1] Message Notification Window Plugin
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * This plugin is released under the MIT license.
 * 
 * Copyright (c) 2024 Arrose

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * This plugin is mainly used to make message notification window.
 * 
 * [V1.0.0]
 * Features:
 *      1. Display a message notification window in any scene via a plugin command or a script.
 *      2. Modification of the window display by plugin command parameters or script parameters.
 *      3. The text of the window can be changed by adding signs such as "\C[x]" "\I[x]", etc., 
 *         the same as the editor's own Show Text command.
 *      4. A new "\IS[x]" signs has been added to the text of the window to resize the inline 
 *         icons in the text.
 * 
 * [V1.0.1]
 *      1. Fix the error after switching scenes when the notification window appears.
 * 
 * Note:
 *      1. To modify the text style by text signs, please refer to the signs of the "Show Text" 
 *         command in the editor.
 *      2. When calling a plugin function through a script, you need to fill in the function 
 *         parameters of the correct type in sequence.
 *      3. Example of script usage: ASMessageNotificationWindowNameSpace.showMessageNotificationWindow("Window", 20, 20, "auto", 0, 0, 12, 0, "right", "Miss", 0, 100, 90, "left", 2, true, "system/exclamation", 50, 50, "\\C[0]Bedroom key\\IS[26]\\I[324]\\C[20]Got it.", 36)
 *      4. Argument type reference for plugin functions: const showMessageNotificationWindow = function(windowSkinString,
 *         finalOffsetXNumber, finalOffsetYNumber, windowSizeModeString, windowManualWidthNumber, 
 *         windowManualHeightNumber, paddingNumber, iconTextPaddingNumber, displayDirectionString,
 *         displaySoundEffectsNameString, displaySoundEffectsPanNumber, displaySoundEffectsPitchNumber,
 *         displaySoundEffectsVolumeNumber, dismissDirectionString, dismissDelayTimeNumber, dismissNeedPanningBool,
 *         iconPathString, iconWidthNumber, iconHeightNumber, textString, textLineHeightNumber)
 *         String with String suffix, Number with Number for numeric, Bool with Boolean.
 *      5. The debug in the plugin parameters can be used to view the size of the window for easy 
 *         positioning of the layout.
 * 
 * @param messageNotificationWindowDebug
 * @text Debug
 * @desc Debug(Display window final rect, position before disappearance)
 * @type boolean
 * @on ON
 * @off OFF
 * @default false
 * 
 * @command showMessageNotificationWindow
 * @text Show Message Notification Window
 * @desc Show Message Notification Window
 * 
 * @arg messageNotificationWindowSet
 * @text Window Settings
 * @desc Window Settings
 * @type string
 * @default
 * 
 * @arg messageNotificationWindowSkin
 * @text Window Skin
 * @desc Window Skin
 * @parent messageNotificationWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @arg messageNotificationWindowFinalOffset
 * @text Final Offset
 * @desc Final Offset (Position before disappearance)
 * @parent messageNotificationWindowSet
 * @type struct<Point>
 * @default {"x":"20","y":"20"}
 * 
 * @arg messageNotificationWindowSizeMode
 * @text Window Size Mode
 * @desc Window Size Mode (auto: automatic size calculation | manual: manual size specification)
 * @parent messageNotificationWindowSet
 * @type select
 * @option auto
 * @option manual
 * @default auto
 * 
 * @arg messageNotificationWindowSize
 * @text Window Manual Size
 * @desc Window Manual Size
 * @parent messageNotificationWindowSet
 * @parent messageNotificationWindowSizeMode
 * @type struct<Size>
 * @default {"width":"0","height":"0"}
 * 
 * @arg messageNotificationWindowPadding
 * @text Padding
 * @desc Padding
 * @parent messageNotificationWindowSet
 * @type number
 * @default 12
 * 
 * @arg messageNotificationWindowIconTextPadding
 * @text Icon Text Padding
 * @desc Icon Text Padding
 * @parent messageNotificationWindowSet
 * @type number
 * @default 0
 * 
 * @arg messageNotificationWindowDisplayDirection
 * @text Display Direction
 * @desc Display Direction
 * @parent messageNotificationWindowSet
 * @type select
 * @option down
 * @option up
 * @option right
 * @option left
 * @default down
 * 
 * @arg messageNotificationWindowDisplaySoundEffects
 * @text Display Sound Effects
 * @desc Display Sound Effects
 * @parent messageNotificationWindowSet
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @arg messageNotificationWindowDismissDirection
 * @text Dismiss Direction
 * @desc Dismiss Direction
 * @parent messageNotificationWindowSet
 * @type select
 * @option down
 * @option up
 * @option right
 * @option left
 * @default left
 * 
 * @arg messageNotificationWindowDismissDelayTime
 * @text Dismiss Delay Time
 * @desc Dismiss Delay Time (Units are in seconds)
 * @parent messageNotificationWindowSet
 * @type number
 * @default 1
 * 
 * @arg messageNotificationWindowDismissNeedPanning
 * @text Dismiss Need Panning
 * @desc Dismiss Need Panning
 * @parent messageNotificationWindowSet
 * @type boolean
 * @on YES
 * @off NO
 * @default true
 * 
 * @arg messageNotificationWindowIconSet
 * @text Icon Settings
 * @desc Icon Settings
 * @type string
 * @default
 * 
 * @arg messageNotificationWindowIcon
 * @text Icon
 * @desc Icon
 * @parent messageNotificationWindowIconSet
 * @type file
 * @dir img/
 * @default
 * 
 * @arg messageNotificationWindowIconSize
 * @text Icon Size
 * @desc Icon Size
 * @parent messageNotificationWindowIconSet
 * @type struct<Size>
 * @default {"width":"0","height":"0"}
 * 
 * @arg messageNotificationWindowTextSet
 * @text Text Settings
 * @desc Text Settings
 * @type string
 * @default
 * 
 * @arg messageNotificationWindowText
 * @text Text
 * @desc Text
 * @parent messageNotificationWindowTextSet
 * @type note
 * @default
 * 
 * @arg messageNotificationWindowTextLineHeight
 * @text Text LineHeight
 * @desc Text LineHeight
 * @parent messageNotificationWindowTextSet
 * @type number
 * @default 36
 * 
 */

/*:zh
 * @target MZ
 * @plugindesc [V1.0.1] 消息通知窗口插件
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * 这个插件在MIT许可下发布
 * 
 * Copyright (c) 2024 Arrose

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * 这个插件主要用于制作消息通知窗口
 * 
 * [V1.0.1]
 * 功能:
 *      1. 通过插件指令或脚本在任意场景中显示一个消息通知窗口
 *      2. 通过插件指令参数或脚本参数来修改窗口显示的方式
 *      3. 窗口的文本可以通过添加 “\C[x]” “\I[x]” 等标识来改变样式，同编辑器自带的显示文字指令
 *      4. 窗口的文本新增了一个 “\IS[x]” 标识用来调整文本内嵌图标的大小
 * 
 * [V1.0.1]
 *      1. 修复通知窗口出现时，切换场景后报错
 * 
 * 注意:
 *      1. 通过文本标识修改文本样式时，请自行参考编辑器 “显示文字” 指令的标识
 *      2. 通过脚本调用插件函数时，需要按顺序填入正确类型的函数参数
 *      3. 脚本使用举例：ASMessageNotificationWindowNameSpace.showMessageNotificationWindow("Window", 20, 20, "auto", 0, 0, 12, 0, "right", "Miss", 0, 100, 90, "left", 2, true, "system/exclamation", 50, 50, "\\C[0]卧室的钥匙\\IS[26]\\I[324]\\C[20]找到了", 36)
 *      4. 插件函数的参数类型参考：const showMessageNotificationWindow = function(windowSkinString,
 *         finalOffsetXNumber, finalOffsetYNumber, windowSizeModeString, windowManualWidthNumber, 
 *         windowManualHeightNumber, paddingNumber, iconTextPaddingNumber, displayDirectionString,
 *         displaySoundEffectsNameString, displaySoundEffectsPanNumber, displaySoundEffectsPitchNumber,
 *         displaySoundEffectsVolumeNumber, dismissDirectionString, dismissDelayTimeNumber, dismissNeedPanningBool,
 *         iconPathString, iconWidthNumber, iconHeightNumber, textString, textLineHeightNumber)
 *         后缀带String的为字符串型，带Number为数值型，带Bool的为布尔型
 *      5. 插件参数中的调试模式可以用于查看窗口的大小，方便定位布局
 * 
 * @param messageNotificationWindowDebug
 * @text 调试模式
 * @desc 调试模式(显示窗口最终布局，消失前停下的位置)
 * @type boolean
 * @on 开
 * @off 关
 * @default false
 * 
 * @command showMessageNotificationWindow
 * @text 显示消息通知窗口
 * @desc 显示消息通知窗口
 * 
 * @arg messageNotificationWindowSet
 * @text 窗口设置
 * @desc 窗口设置
 * @type string
 * @default
 * 
 * @arg messageNotificationWindowSkin
 * @text 窗口皮肤
 * @desc 窗口皮肤
 * @parent messageNotificationWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @arg messageNotificationWindowFinalOffset
 * @text 最终偏移
 * @desc 最终偏移 (消失前停下的位置)
 * @parent messageNotificationWindowSet
 * @type struct<Point>
 * @default {"x":"20","y":"20"}
 * 
 * @arg messageNotificationWindowSizeMode
 * @text 窗口尺寸模式
 * @desc 窗口尺寸模式 (auto: 自动计算尺寸 | manual: 手动指定尺寸(必须指定窗口手动尺寸的值))
 * @parent messageNotificationWindowSet
 * @type select
 * @option auto
 * @option manual
 * @default auto
 * 
 * @arg messageNotificationWindowSize
 * @text 窗口手动尺寸
 * @desc 窗口手动尺寸
 * @parent messageNotificationWindowSet
 * @parent messageNotificationWindowSizeMode
 * @type struct<Size>
 * @default {"width":"0","height":"0"}
 * 
 * @arg messageNotificationWindowPadding
 * @text 内边距
 * @desc 内边距
 * @parent messageNotificationWindowSet
 * @type number
 * @default 12
 * 
 * @arg messageNotificationWindowIconTextPadding
 * @text 图标文本间距离
 * @desc 图标文本间距离
 * @parent messageNotificationWindowSet
 * @type number
 * @default 0
 * 
 * @arg messageNotificationWindowDisplayDirection
 * @text 显示方向
 * @desc 显示方向
 * @parent messageNotificationWindowSet
 * @type select
 * @option down
 * @option up
 * @option right
 * @option left
 * @default down
 * 
 * @arg messageNotificationWindowDisplaySoundEffects
 * @text 显示音效
 * @desc 显示音效
 * @parent messageNotificationWindowSet
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @arg messageNotificationWindowDismissDirection
 * @text 消失方向
 * @desc 消失方向
 * @parent messageNotificationWindowSet
 * @type select
 * @option down
 * @option up
 * @option right
 * @option left
 * @default left
 * 
 * @arg messageNotificationWindowDismissDelayTime
 * @text 消失延迟时间
 * @desc 消失延迟时间 (单位为秒)
 * @parent messageNotificationWindowSet
 * @type number
 * @default 1
 * 
 * @arg messageNotificationWindowDismissNeedPanning
 * @text 消失时是否需要平移
 * @desc 消失时是否需要平移
 * @parent messageNotificationWindowSet
 * @type boolean
 * @on 是
 * @off 否
 * @default true
 * 
 * @arg messageNotificationWindowIconSet
 * @text 图标设置
 * @desc 图标设置
 * @type string
 * @default
 * 
 * @arg messageNotificationWindowIcon
 * @text 图标路径
 * @desc 图标路径
 * @parent messageNotificationWindowIconSet
 * @type file
 * @dir img/
 * @default
 * 
 * @arg messageNotificationWindowIconSize
 * @text 图标尺寸
 * @desc 图标尺寸
 * @parent messageNotificationWindowIconSet
 * @type struct<Size>
 * @default {"width":"0","height":"0"}
 * 
 * @arg messageNotificationWindowTextSet
 * @text 文本设置
 * @desc 文本设置
 * @type string
 * @default
 * 
 * @arg messageNotificationWindowText
 * @text 文本
 * @desc 文本
 * @parent messageNotificationWindowTextSet
 * @type note
 * @default
 * 
 * @arg messageNotificationWindowTextLineHeight
 * @text 文本行高
 * @desc 文本行高
 * @parent messageNotificationWindowTextSet
 * @type number
 * @default 36
 * 
 */

/*~struct~Point:
 * 
 * @param x
 * @text X
 * @desc X
 * @type number
 * @default 0
 * 
 * @param y
 * @text Y
 * @desc Y
 * @type number
 * @default 0
 * 
 */

/*~struct~Size:
 * 
 * @param width
 * @text Width
 * @desc Width
 * @type number
 * @min 0
 * @default 0
 * 
 * @param height
 * @text Height
 * @desc Height
 * @type number
 * @min 0
 * @default 0
 * 
 */

/*~struct~SoundEffects:
 * 
 * @param name
 * @text Name[名称]
 * @desc Name[名称]
 * @type file
 * @dir audio/se
 * @default
 * 
 * @param pan
 * @text Pan[声像]
 * @desc Pan[声像](-100 ~ 100)
 * @type string
 * @default 0
 * 
 * @param pitch
 * @text Pitch[音调]
 * @desc Pitch[音调](50 ~ 150)
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * 
 * @param volume
 * @text Volume[音量]
 * @desc Volume[音量](0 ~ 100)
 * @type number
 * @min 0
 * @max 100
 * @default 90
 * 
 */

const ASMessageNotificationWindowNameSpace = (() => {
    "use strict";

    const pluginName = "ASMessageNotificationWindow";
    const parameters = PluginManager.parameters(pluginName);
    const messageNotificationWindowDebug = parameters.messageNotificationWindowDebug !== "false";

    // Calling the notification window using a script
    const showMessageNotificationWindow = function(windowSkinString, finalOffsetXNumber, finalOffsetYNumber, windowSizeModeString, windowManualWidthNumber,
         windowManualHeightNumber, paddingNumber, iconTextPaddingNumber, displayDirectionString, displaySoundEffectsNameString, displaySoundEffectsPanNumber,
        displaySoundEffectsPitchNumber, displaySoundEffectsVolumeNumber, dismissDirectionString, dismissDelayTimeNumber, dismissNeedPanningBool, iconPathString, 
        iconWidthNumber, iconHeightNumber, textString, textLineHeightNumber) {

        const windowSkin = windowSkinString;
        const finalOffset = new Point(finalOffsetXNumber || 0, finalOffsetYNumber || 0);
        const windowSizeMode = windowSizeModeString;
        const windowManualSize = {
            width: windowManualWidthNumber || 0,
            height: windowManualHeightNumber || 0,
        };
        const padding = paddingNumber;
        const iconTextPadding = iconTextPaddingNumber;
        const displayDirection = displayDirectionString;
        const displaySoundEffects = `{\"name\":\"${displaySoundEffectsNameString}\",\"pan\":\"${displaySoundEffectsPanNumber}\",\"pitch\":\"${displaySoundEffectsPitchNumber}\",\"volume\":\"${displaySoundEffectsVolumeNumber}\"}`;
        const dismissDirection = dismissDirectionString;
        const dismissDelayTime = dismissDelayTimeNumber;
        const dismissNeedPanning = dismissNeedPanningBool;

        const iconPath = iconPathString;
        const iconSize = {
            width: iconWidthNumber || 0,
            height: iconHeightNumber || 0,
        };
        //console.log("js - textString: ", textString)
        const realText = textString ? textString : "";
        //console.log("realText: ", realText)
        const textLineHeight = textLineHeightNumber;

        const currentScene = SceneManager._scene;
        
        const messageNotificationWindowManualRect = new Rectangle(finalOffset.x, finalOffset.y, windowManualSize.width, windowManualSize.height);
        
        //console.log("messageNotificationWindowManualRect: ", messageNotificationWindowManualRect)
        const messageNotificationWindow = new Window_MessageNotification(messageNotificationWindowManualRect, textLineHeight);
        const textSize = messageNotificationWindow.textSizeEx(realText);
        //console.log("textSize: ", textSize)

        if (windowSizeMode === "auto") {
            messageNotificationWindow.width = padding * 2 + iconSize.width + iconTextPadding + textSize.width;
            const maxHeight = Math.max(iconSize.height, textSize.height);
            messageNotificationWindow.height = padding * 2 + maxHeight;
        }

        messageNotificationWindow.windowskin = ImageManager.loadSystem(windowSkin);
        messageNotificationWindow._padding = padding;
        
        messageNotificationWindow.contents.resize(messageNotificationWindow.contentsWidth(), messageNotificationWindow.contentsHeight());
        messageNotificationWindow.contentsBack.resize(messageNotificationWindow.contentsWidth(), messageNotificationWindow.contentsHeight());
        
        messageNotificationWindow.setDebug(messageNotificationWindowDebug, new Rectangle(messageNotificationWindow.x, messageNotificationWindow.y, messageNotificationWindow.width, messageNotificationWindow.height));

        switch (displayDirection) {
            case "down":
                messageNotificationWindow.y = - messageNotificationWindow.height;
                break;
            case "up":
                messageNotificationWindow.y = Graphics.height;
                break;
            case "right":
                messageNotificationWindow.x = - messageNotificationWindow.width;
                break;
            case "left":
                messageNotificationWindow.x = Graphics.width;
                break;
            default:
                break;
        }

        messageNotificationWindow.setUpUI(iconSize, iconPath, iconTextPadding, realText, textSize);

        currentScene.addChild(messageNotificationWindow);

        playSoundEffectsObject(displaySoundEffects);

        if(!messageNotificationWindow._destroyed) {
            currentScene.messageNotificationCharm.slide(messageNotificationWindow, finalOffset.x, finalOffset.y, 20).onComplete = () => {
                currentScene.messageNotificationCharm.wait(dismissDelayTime * 1000).then(() => {
                    if(!messageNotificationWindow._destroyed) {
                        currentScene.messageNotificationCharm.fadeOut(messageNotificationWindow, 30).onComplete = () => {
                            if (dismissNeedPanning === false) {
                                currentScene.removeChild(messageNotificationWindow);
                            }
                        };
                    } 
                    if (dismissNeedPanning === true) {
                        let dismissX = finalOffset.x;
                        let dismissY = finalOffset.y;
                        switch (dismissDirection) {
                            case "down":
                                dismissY = finalOffset.y + messageNotificationWindow.height;
                                break;
                            case "up":
                                dismissY = finalOffset.y - messageNotificationWindow.height;
                                break;
                            case "right":
                                dismissX = finalOffset.x + messageNotificationWindow.width;
                                break;
                            case "left":
                                dismissX = finalOffset.x - messageNotificationWindow.width;
                                break;
                            default:
                                break;
                        }
                        if (!messageNotificationWindow._destroyed) {
                            currentScene.messageNotificationCharm.slide(messageNotificationWindow, dismissX, dismissY, 40).onComplete = () => {
                                currentScene.removeChild(messageNotificationWindow);
                            };
                        }
                    }
                });
            };
        }

    }

    PluginManager.registerCommand(pluginName, "showMessageNotificationWindow", args => {

        const windowSkin = args.messageNotificationWindowSkin;
        const finalOffsetJsonObject = JSON.parse(args.messageNotificationWindowFinalOffset);
        const finalOffset = new Point(Number(finalOffsetJsonObject.x) || 0, Number(finalOffsetJsonObject.y) || 0);
        const windowSizeMode = args.messageNotificationWindowSizeMode;
        const windowManualSizeJsonObject = JSON.parse(args.messageNotificationWindowSize);
        const windowManualSize = {
            width: Number(windowManualSizeJsonObject.width) || 0,
            height: Number(windowManualSizeJsonObject.height) || 0,
        };
        const padding = Number(args.messageNotificationWindowPadding);
        const iconTextPadding = Number(args.messageNotificationWindowIconTextPadding);
        const displayDirection = args.messageNotificationWindowDisplayDirection;
        const displaySoundEffects = args.messageNotificationWindowDisplaySoundEffects;
        const dismissDirection = args.messageNotificationWindowDismissDirection;
        const dismissDelayTime = Number(args.messageNotificationWindowDismissDelayTime);
        const dismissNeedPanning = args.messageNotificationWindowDismissNeedPanning !== "false";

        const iconPath = args.messageNotificationWindowIcon;
        const iconSizeJsonObject = JSON.parse(args.messageNotificationWindowIconSize);
        const iconSize = {
            width: Number(iconSizeJsonObject.width) || 0,
            height: Number(iconSizeJsonObject.height) || 0,
        };
        //console.log("args.messageNotificationWindowText: ", args.messageNotificationWindowText)
        const realText = args.messageNotificationWindowText ? JSON.parse(args.messageNotificationWindowText) : "";
        //console.log("realText: ", realText)
        const textLineHeight = Number(args.messageNotificationWindowTextLineHeight);
        
        const currentScene = SceneManager._scene;
        
        const messageNotificationWindowManualRect = new Rectangle(finalOffset.x, finalOffset.y, windowManualSize.width, windowManualSize.height);
        
        //console.log("messageNotificationWindowManualRect: ", messageNotificationWindowManualRect)
        const messageNotificationWindow = new Window_MessageNotification(messageNotificationWindowManualRect, textLineHeight);
        const textSize = messageNotificationWindow.textSizeEx(realText);
        //console.log("textSize: ", textSize)

        if (windowSizeMode === "auto") {
            messageNotificationWindow.width = padding * 2 + iconSize.width + iconTextPadding + textSize.width;
            const maxHeight = Math.max(iconSize.height, textSize.height);
            messageNotificationWindow.height = padding * 2 + maxHeight;
        }

        messageNotificationWindow.windowskin = ImageManager.loadSystem(windowSkin);
        messageNotificationWindow._padding = padding;
        
        messageNotificationWindow.contents.resize(messageNotificationWindow.contentsWidth(), messageNotificationWindow.contentsHeight());
        messageNotificationWindow.contentsBack.resize(messageNotificationWindow.contentsWidth(), messageNotificationWindow.contentsHeight());
        
        messageNotificationWindow.setDebug(messageNotificationWindowDebug, new Rectangle(messageNotificationWindow.x, messageNotificationWindow.y, messageNotificationWindow.width, messageNotificationWindow.height));

        switch (displayDirection) {
            case "down":
                messageNotificationWindow.y = - messageNotificationWindow.height;
                break;
            case "up":
                messageNotificationWindow.y = Graphics.height;
                break;
            case "right":
                messageNotificationWindow.x = - messageNotificationWindow.width;
                break;
            case "left":
                messageNotificationWindow.x = Graphics.width;
                break;
            default:
                break;
        }

        messageNotificationWindow.setUpUI(iconSize, iconPath, iconTextPadding, realText, textSize);

        currentScene.addChild(messageNotificationWindow);

        playSoundEffectsObject(displaySoundEffects);

        if(!messageNotificationWindow._destroyed) {
            currentScene.messageNotificationCharm.slide(messageNotificationWindow, finalOffset.x, finalOffset.y, 20).onComplete = () => {
                currentScene.messageNotificationCharm.wait(dismissDelayTime * 1000).then(() => {
                    if(!messageNotificationWindow._destroyed) {
                        currentScene.messageNotificationCharm.fadeOut(messageNotificationWindow, 30).onComplete = () => {
                            if (dismissNeedPanning === false) {
                                currentScene.removeChild(messageNotificationWindow);
                            }
                        };
                    } 
                    if (dismissNeedPanning === true) {
                        let dismissX = finalOffset.x;
                        let dismissY = finalOffset.y;
                        switch (dismissDirection) {
                            case "down":
                                dismissY = finalOffset.y + messageNotificationWindow.height;
                                break;
                            case "up":
                                dismissY = finalOffset.y - messageNotificationWindow.height;
                                break;
                            case "right":
                                dismissX = finalOffset.x + messageNotificationWindow.width;
                                break;
                            case "left":
                                dismissX = finalOffset.x - messageNotificationWindow.width;
                                break;
                            default:
                                break;
                        }
                        if (!messageNotificationWindow._destroyed) {
                            currentScene.messageNotificationCharm.slide(messageNotificationWindow, dismissX, dismissY, 40).onComplete = () => {
                                currentScene.removeChild(messageNotificationWindow);
                            };
                        }
                    }
                });
            };
        }

    });

    //***************************************************************************
    // ---------------------------- Interpolation Animation Dependency Library Start ----------------------------
    //***************************************************************************

    // Kittykatattack Universal License
    // ================================

    // This software is free to use for anything, for ever.
    // It's freer than free.
    // It's like a pebble - you can pick it up and throw it into the sea. 

    //The following interpolation animation dependency library is adapted from MIT-licenced code by kittykatattack, available here https://github.com/kittykatattack/charm
    class Charm {
        constructor(renderingEngine = PIXI) {

            if (renderingEngine === undefined) throw new Error("Please assign a rendering engine in the constructor before using charm.js");

            //Find out which rendering engine is being used (the default is Pixi)
            this.renderer = "";

            //If the `renderingEngine` is Pixi, set up Pixi object aliases
            if (renderingEngine.ParticleContainer && renderingEngine.Sprite) {
                this.renderer = "pixi";
            }


            //An array to store the global tweens
            this.globalTweens = [];

            //An object that stores all the easing formulas
            this.easingFormulas = {

                //Linear
                linear(x) {
                    return x;
                },

                //Smoothstep
                smoothstep(x) {
                    return x * x * (3 - 2 * x);
                },
                smoothstepSquared(x) {
                    return Math.pow((x * x * (3 - 2 * x)), 2);
                },
                smoothstepCubed(x) {
                    return Math.pow((x * x * (3 - 2 * x)), 3);
                },

                //Acceleration
                acceleration(x) {
                    return x * x;
                },
                accelerationCubed(x) {
                    return Math.pow(x * x, 3);
                },

                //Deceleration
                deceleration(x) {
                    return 1 - Math.pow(1 - x, 2);
                },
                decelerationCubed(x) {
                    return 1 - Math.pow(1 - x, 3);
                },

                //Sine
                sine(x) {
                    return Math.sin(x * Math.PI / 2);
                },
                sineSquared(x) {
                    return Math.pow(Math.sin(x * Math.PI / 2), 2);
                },
                sineCubed(x) {
                    return Math.pow(Math.sin(x * Math.PI / 2), 2);
                },
                inverseSine(x) {
                    return 1 - Math.sin((1 - x) * Math.PI / 2);
                },
                inverseSineSquared(x) {
                    return 1 - Math.pow(Math.sin((1 - x) * Math.PI / 2), 2);
                },
                inverseSineCubed(x) {
                    return 1 - Math.pow(Math.sin((1 - x) * Math.PI / 2), 3);
                },

                //Spline
                spline(t, p0, p1, p2, p3) {
                    return 0.5 * (
                        (2 * p1) +
                        (-p0 + p2) * t +
                        (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t +
                        (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t
                    );
                },

                //Bezier curve
                cubicBezier(t, a, b, c, d) {
                    let t2 = t * t;
                    let t3 = t2 * t;
                    return a + (-a * 3 + t * (3 * a - a * t)) * t + (3 * b + t * (-6 * b + b * 3 * t)) * t + (c * 3 - c * 3 * t) * t2 + d * t3;
                }
            };

            //Add `scaleX` and `scaleY` properties to Pixi sprites
            this._addScaleProperties = (sprite) => {
                if (this.renderer === "pixi") {
                    if (!("scaleX" in sprite) && ("scale" in sprite) && ("x" in sprite.scale)) {
                        Object.defineProperty(
                            sprite,
                            "scaleX", {
                            get() {
                                return sprite.scale.x
                            },
                            set(value) {
                                sprite.scale.x = value
                            }
                        }
                        );
                    }
                    if (!("scaleY" in sprite) && ("scale" in sprite) && ("y" in sprite.scale)) {
                        Object.defineProperty(
                            sprite,
                            "scaleY", {
                            get() {
                                return sprite.scale.y
                            },
                            set(value) {
                                sprite.scale.y = value
                            }
                        }
                        );
                    }
                }
            };
        }

        //The low level `tweenProperty` function is used as the foundation
        //for the the higher level tween methods.
        tweenProperty(
            sprite, //Sprite object
            property, //String property
            startValue, //Tween start value
            endValue, //Tween end value
            totalFrames, //Duration in frames
            type = "smoothstep", //The easing type
            yoyo = false, //Yoyo?
            delayBeforeRepeat = 0 //Delay in frames before repeating
        ) {

            //Create the tween object
            let o = {};

            //If the tween is a bounce type (a spline), set the
            //start and end magnitude values
            let typeArray = type.split(" ");
            if (typeArray[0] === "bounce") {
                o.startMagnitude = parseInt(typeArray[1]);
                o.endMagnitude = parseInt(typeArray[2]);
            }

            //Use `o.start` to make a new tween using the current
            //end point values
            o.start = (startValue, endValue) => {

                //Clone the start and end values so that any possible references to sprite
                //properties are converted to ordinary numbers 
                o.startValue = JSON.parse(JSON.stringify(startValue));
                o.endValue = JSON.parse(JSON.stringify(endValue));
                o.playing = true;
                o.totalFrames = totalFrames;
                o.frameCounter = 0;

                //Add the tween to the global `tweens` array. The `tweens` array is
                //updated on each frame
                this.globalTweens.push(o);
            };

            //Call `o.start` to start the tween
            o.start(startValue, endValue);

            //The `update` method will be called on each frame by the game loop.
            //This is what makes the tween move
            o.update = () => {

                let time, curvedTime;

                if (o.playing) {

                    //If the elapsed frames are less than the total frames,
                    //use the tweening formulas to move the sprite
                    if (o.frameCounter < o.totalFrames) {

                        //Find the normalized value
                        let normalizedTime = o.frameCounter / o.totalFrames;

                        //Select the correct easing function from the 
                        //`ease` object’s library of easing functions


                        //If it's not a spline, use one of the ordinary easing functions
                        if (typeArray[0] !== "bounce") {
                            curvedTime = this.easingFormulas[type](normalizedTime);
                        }

                        //If it's a spline, use the `spline` function and apply the
                        //2 additional `type` array values as the spline's start and
                        //end points
                        else {
                            curvedTime = this.easingFormulas.spline(normalizedTime, o.startMagnitude, 0, 1, o.endMagnitude);
                        }

                        //Interpolate the sprite's property based on the curve
                        sprite[property] = (o.endValue * curvedTime) + (o.startValue * (1 - curvedTime));

                        o.frameCounter += 1;
                    }

                    //When the tween has finished playing, run the end tasks
                    else {
                        sprite[property] = o.endValue;
                        o.end();
                    }
                }
            };

            //The `end` method will be called when the tween is finished
            o.end = () => {

                //Set `playing` to `false`
                o.playing = false;

                //Call the tween's `onComplete` method, if it's been assigned
                if (o.onComplete) o.onComplete();

                //Remove the tween from the `tweens` array
                this.globalTweens.splice(this.globalTweens.indexOf(o), 1);

                //If the tween's `yoyo` property is `true`, create a new tween
                //using the same values, but use the current tween's `startValue`
                //as the next tween's `endValue` 
                if (yoyo) {
                    this.wait(delayBeforeRepeat).then(() => {
                        o.start(o.endValue, o.startValue);
                    });
                }
            };

            //Pause and play methods
            o.play = () => o.playing = true;
            o.pause = () => o.playing = false;

            //Return the tween object
            return o;
        }

        //`makeTween` is a general low-level method for making complex tweens
        //out of multiple `tweenProperty` functions. Its one argument,
        //`tweensToAdd` is an array containing multiple `tweenProperty` calls

        makeTween(tweensToAdd) {

            //Create an object to manage the tweens
            let o = {};

            //Create a `tweens` array to store the new tweens
            o.tweens = [];

            //Make a new tween for each array
            tweensToAdd.forEach(tweenPropertyArguments => {

                //Use the tween property arguments to make a new tween
                let newTween = this.tweenProperty(...tweenPropertyArguments);

                //Push the new tween into this object's internal `tweens` array
                o.tweens.push(newTween);
            });

            //Add a counter to keep track of the
            //number of tweens that have completed their actions
            let completionCounter = 0;

            //`o.completed` will be called each time one of the tweens
            //finishes
            o.completed = () => {

                //Add 1 to the `completionCounter`
                completionCounter += 1;

                //If all tweens have finished, call the user-defined `onComplete`
                //method, if it's been assigned. Reset the `completionCounter`
                if (completionCounter === o.tweens.length) {
                    if (o.onComplete) o.onComplete();
                    completionCounter = 0;
                }
            };

            //Add `onComplete` methods to all tweens
            o.tweens.forEach(tween => {
                tween.onComplete = () => o.completed();
            });

            //Add pause and play methods to control all the tweens
            o.pause = () => {
                o.tweens.forEach(tween => {
                    tween.playing = false;
                });
            };
            o.play = () => {
                o.tweens.forEach(tween => {
                    tween.playing = true;
                });
            };

            //Return the tween object
            return o;
        }

        /* High level tween methods */

        //1. Simple tweens

        //`fadeOut`
        fadeOut(sprite, frames = 60) {
            return this.tweenProperty(
                sprite, "alpha", sprite.alpha, 0, frames, "sine"
            );
        }

        //`fadeIn`
        fadeIn(sprite, frames = 60) {
            return this.tweenProperty(
                sprite, "alpha", sprite.alpha, 1, frames, "sine"
            );
        }

        //`pulse`
        //Fades the sprite in and out at a steady rate.
        //Set the `minAlpha` to something greater than 0 if you
        //don't want the sprite to fade away completely
        pulse(sprite, frames = 60, minAlpha = 0) {
            return this.tweenProperty(
                sprite, "alpha", sprite.alpha, minAlpha, frames, "smoothstep", true
            );
        }

        //2. Complex tweens

        slide(
            sprite, endX, endY,
            frames = 60, type = "smoothstep", yoyo = false, delayBeforeRepeat = 0
        ) {
            return this.makeTween([

                //Create the x axis tween
                [sprite, "x", sprite.x, endX, frames, type, yoyo, delayBeforeRepeat],

                //Create the y axis tween
                [sprite, "y", sprite.y, endY, frames, type, yoyo, delayBeforeRepeat]

            ]);
        }

        breathe(
            sprite, endScaleX = 0.8, endScaleY = 0.8,
            frames = 60, yoyo = true, delayBeforeRepeat = 0
        ) {

            //Add `scaleX` and `scaleY` properties to Pixi sprites
            this._addScaleProperties(sprite);

            return this.makeTween([

                //Create the scaleX tween
                [
                    sprite, "scaleX", sprite.scaleX, endScaleX,
                    frames, "smoothstepSquared", yoyo, delayBeforeRepeat
                ],

                //Create the scaleY tween
                [
                    sprite, "scaleY", sprite.scaleY, endScaleY,
                    frames, "smoothstepSquared", yoyo, delayBeforeRepeat
                ]
            ]);
        }

        scale(sprite, endScaleX = 0.5, endScaleY = 0.5, frames = 60) {

            //Add `scaleX` and `scaleY` properties to Pixi sprites
            this._addScaleProperties(sprite);

            return this.makeTween([

                //Create the scaleX tween
                [
                    sprite, "scaleX", sprite.scaleX, endScaleX,
                    frames, "smoothstep", false
                ],

                //Create the scaleY tween
                [
                    sprite, "scaleY", sprite.scaleY, endScaleY,
                    frames, "smoothstep", false
                ]
            ]);
        }

        strobe(
            sprite, scaleFactor = 1.3, startMagnitude = 10, endMagnitude = 20,
            frames = 10, yoyo = true, delayBeforeRepeat = 0
        ) {

            let bounce = "bounce " + startMagnitude + " " + endMagnitude;

            //Add `scaleX` and `scaleY` properties to Pixi sprites
            this._addScaleProperties(sprite);

            return this.makeTween([

                //Create the scaleX tween
                [
                    sprite, "scaleX", sprite.scaleX, scaleFactor, frames,
                    bounce, yoyo, delayBeforeRepeat
                ],

                //Create the scaleY tween
                [
                    sprite, "scaleY", sprite.scaleY, scaleFactor, frames,
                    bounce, yoyo, delayBeforeRepeat
                ]
            ]);
        }

        wobble(
            sprite,
            scaleFactorX = 1.2,
            scaleFactorY = 1.2,
            frames = 10,
            xStartMagnitude = 10,
            xEndMagnitude = 10,
            yStartMagnitude = -10,
            yEndMagnitude = -10,
            friction = 0.98,
            yoyo = true,
            delayBeforeRepeat = 0
        ) {

            let bounceX = "bounce " + xStartMagnitude + " " + xEndMagnitude;
            let bounceY = "bounce " + yStartMagnitude + " " + yEndMagnitude;

            //Add `scaleX` and `scaleY` properties to Pixi sprites
            this._addScaleProperties(sprite);

            let o = this.makeTween([

                //Create the scaleX tween
                [
                    sprite, "scaleX", sprite.scaleX, scaleFactorX, frames,
                    bounceX, yoyo, delayBeforeRepeat
                ],

                //Create the scaleY tween
                [
                    sprite, "scaleY", sprite.scaleY, scaleFactorY, frames,
                    bounceY, yoyo, delayBeforeRepeat
                ]
            ]);

            //Add some friction to the `endValue` at the end of each tween 
            o.tweens.forEach(tween => {
                tween.onComplete = () => {

                    //Add friction if the `endValue` is greater than 1
                    if (tween.endValue > 1) {
                        tween.endValue *= friction;

                        //Set the `endValue` to 1 when the effect is finished and 
                        //remove the tween from the global `tweens` array
                        if (tween.endValue <= 1) {
                            tween.endValue = 1;
                            this.removeTween(tween);
                        }
                    }
                };
            });

            return o;
        }

        //3. Motion path tweens

        followCurve(
            sprite,
            pointsArray,
            totalFrames,
            type = "smoothstep",
            yoyo = false,
            delayBeforeRepeat = 0
        ) {

            //Create the tween object
            let o = {};

            //If the tween is a bounce type (a spline), set the
            //start and end magnitude values
            let typeArray = type.split(" ");
            if (typeArray[0] === "bounce") {
                o.startMagnitude = parseInt(typeArray[1]);
                o.endMagnitude = parseInt(typeArray[2]);
            }

            //Use `tween.start` to make a new tween using the current
            //end point values
            o.start = (pointsArray) => {
                o.playing = true;
                o.totalFrames = totalFrames;
                o.frameCounter = 0;

                //Clone the points array
                o.pointsArray = JSON.parse(JSON.stringify(pointsArray));

                //Add the tween to the `globalTweens` array. The `globalTweens` array is
                //updated on each frame
                this.globalTweens.push(o);
            };

            //Call `tween.start` to start the first tween
            o.start(pointsArray);

            //The `update` method will be called on each frame by the game loop.
            //This is what makes the tween move
            o.update = () => {

                let normalizedTime, curvedTime,
                    p = o.pointsArray;

                if (o.playing) {

                    //If the elapsed frames are less than the total frames,
                    //use the tweening formulas to move the sprite
                    if (o.frameCounter < o.totalFrames) {

                        //Find the normalized value
                        normalizedTime = o.frameCounter / o.totalFrames;

                        //Select the correct easing function

                        //If it's not a spline, use one of the ordinary tween
                        //functions
                        if (typeArray[0] !== "bounce") {
                            curvedTime = this.easingFormulas[type](normalizedTime);
                        }

                        //If it's a spline, use the `spline` function and apply the
                        //2 additional `type` array values as the spline's start and
                        //end points
                        else {
                            //curve = tweenFunction.spline(n, type[1], 0, 1, type[2]);
                            curvedTime = this.easingFormulas.spline(normalizedTime, o.startMagnitude, 0, 1, o.endMagnitude);
                        }

                        //Apply the Bezier curve to the sprite's position 
                        sprite.x = this.easingFormulas.cubicBezier(curvedTime, p[0][0], p[1][0], p[2][0], p[3][0]);
                        sprite.y = this.easingFormulas.cubicBezier(curvedTime, p[0][1], p[1][1], p[2][1], p[3][1]);

                        //Add one to the `elapsedFrames`
                        o.frameCounter += 1;
                    }

                    //When the tween has finished playing, run the end tasks
                    else {
                        //sprite[property] = o.endValue;
                        o.end();
                    }
                }
            };

            //The `end` method will be called when the tween is finished
            o.end = () => {

                //Set `playing` to `false`
                o.playing = false;

                //Call the tween's `onComplete` method, if it's been
                //assigned
                if (o.onComplete) o.onComplete();

                //Remove the tween from the global `tweens` array
                this.globalTweens.splice(this.globalTweens.indexOf(o), 1);

                //If the tween's `yoyo` property is `true`, reverse the array and
                //use it to create a new tween
                if (yoyo) {
                    this.wait(delayBeforeRepeat).then(() => {
                        o.pointsArray = o.pointsArray.reverse();
                        o.start(o.pointsArray);
                    });
                }
            };

            //Pause and play methods
            o.pause = () => {
                o.playing = false;
            };
            o.play = () => {
                o.playing = true;
            };

            //Return the tween object
            return o;
        }

        walkPath(
            sprite, //The sprite
            originalPathArray, //A 2D array of waypoints
            totalFrames = 300, //The duration, in frames
            type = "smoothstep", //The easing type
            loop = false, //Should the animation loop?
            yoyo = false, //Shoud the direction reverse?
            delayBetweenSections = 0 //Delay, in milliseconds, between sections
        ) {

            //Clone the path array so that any possible references to sprite
            //properties are converted into ordinary numbers 
            let pathArray = JSON.parse(JSON.stringify(originalPathArray));

            //Figure out the duration, in frames, of each path section by 
            //dividing the `totalFrames` by the length of the `pathArray`
            let frames = totalFrames / pathArray.length;

            //Set the current point to 0, which will be the first waypoint
            let currentPoint = 0;

            //The `makePath` function creates a single tween between two points and
            //then schedules the next path to be made after it
            let makePath = (currentPoint) => {

                //Use the `makeTween` function to tween the sprite's
                //x and y position
                let tween = this.makeTween([

                    //Create the x axis tween between the first x value in the
                    //current point and the x value in the following point
                    [
                        sprite,
                        "x",
                        pathArray[currentPoint][0],
                        pathArray[currentPoint + 1][0],
                        frames,
                        type
                    ],

                    //Create the y axis tween in the same way
                    [
                        sprite,
                        "y",
                        pathArray[currentPoint][1],
                        pathArray[currentPoint + 1][1],
                        frames,
                        type
                    ]
                ]);

                //When the tween is complete, advance the `currentPoint` by one.
                //Add an optional delay between path segments, and then make the
                //next connecting path
                tween.onComplete = () => {

                    //Advance to the next point
                    currentPoint += 1;

                    //If the sprite hasn't reached the end of the
                    //path, tween the sprite to the next point
                    if (currentPoint < pathArray.length - 1) {
                        this.wait(delayBetweenSections).then(() => {
                            tween = makePath(currentPoint);
                        });
                    }

                    //If we've reached the end of the path, optionally
                    //loop and yoyo it
                    else {

                        //Reverse the path if `loop` is `true`
                        if (loop) {

                            //Reverse the array if `yoyo` is `true`
                            if (yoyo) pathArray.reverse();

                            //Optionally wait before restarting
                            this.wait(delayBetweenSections).then(() => {

                                //Reset the `currentPoint` to 0 so that we can
                                //restart at the first point
                                currentPoint = 0;

                                //Set the sprite to the first point
                                sprite.x = pathArray[0][0];
                                sprite.y = pathArray[0][1];

                                //Make the first new path
                                tween = makePath(currentPoint);

                                //... and so it continues!
                            });
                        }
                    }
                };

                //Return the path tween to the main function
                return tween;
            };

            //Make the first path using the internal `makePath` function (below)
            let tween = makePath(currentPoint);

            //Pass the tween back to the main program
            return tween;
        }

        walkCurve(
            sprite, //The sprite
            pathArray, //2D array of Bezier curves
            totalFrames = 300, //The duration, in frames
            type = "smoothstep", //The easing type
            loop = false, //Should the animation loop?
            yoyo = false, //Should the direction reverse?
            delayBeforeContinue = 0 //Delay, in milliseconds, between sections
        ) {

            //Divide the `totalFrames` into sections for each part of the path
            let frames = totalFrames / pathArray.length;

            //Set the current curve to 0, which will be the first one
            let currentCurve = 0;

            //The `makePath` function
            let makePath = (currentCurve) => {

                //Use the custom `followCurve` function to make
                //a sprite follow a curve
                let tween = this.followCurve(
                    sprite,
                    pathArray[currentCurve],
                    frames,
                    type
                );

                //When the tween is complete, advance the `currentCurve` by one.
                //Add an optional delay between path segments, and then make the
                //next path
                tween.onComplete = () => {
                    currentCurve += 1;
                    if (currentCurve < pathArray.length) {
                        this.wait(delayBeforeContinue).then(() => {
                            tween = makePath(currentCurve);
                        });
                    }

                    //If we've reached the end of the path, optionally
                    //loop and reverse it
                    else {
                        if (loop) {
                            if (yoyo) {

                                //Reverse order of the curves in the `pathArray` 
                                pathArray.reverse();

                                //Reverse the order of the points in each curve
                                pathArray.forEach(curveArray => curveArray.reverse());
                            }

                            //After an optional delay, reset the sprite to the
                            //beginning of the path and make the next new path
                            this.wait(delayBeforeContinue).then(() => {
                                currentCurve = 0;
                                sprite.x = pathArray[0][0];
                                sprite.y = pathArray[0][1];
                                tween = makePath(currentCurve);
                            });
                        }
                    }
                };

                //Return the path tween to the main function
                return tween;
            };

            //Make the first path
            let tween = makePath(currentCurve);

            //Pass the tween back to the main program
            return tween;
        }

        //4. Utilities

        /*
        The `wait` method lets you set up a timed sequence of events
      
          wait(1000)
            .then(() => console.log("One"))
            .then(() => wait(1000))
            .then(() => console.log("Two"))
            .then(() => wait(1000))
            .then(() => console.log("Three"))
      
        */

        wait(duration = 0) {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, duration);
            });
        }

        //A utility to remove tweens from the game
        removeTween(tweenObject) {

            //Remove the tween if `tweenObject` doesn't have any nested
            //tween objects
            if (!tweenObject.tweens) {
                tweenObject.pause();

                //array.splice(-1,1) will always remove last elemnt of array, so this
                //extra check prevents that (Thank you, MCumic10! https://github.com/kittykatattack/charm/issues/5)
                if (this.globalTweens.indexOf(tweenObject) != -1) {
                    this.globalTweens.splice(this.globalTweens.indexOf(tweenObject), 1);
                }

                //Otherwise, remove the nested tween objects
            } else {
                tweenObject.pause();
                tweenObject.tweens.forEach(element => {
                    this.globalTweens.splice(this.globalTweens.indexOf(element), 1);
                });
            }
        }

        update() {

            //Update all the tween objects in the `globalTweens` array
            if (this.globalTweens.length > 0) {
                for (let i = this.globalTweens.length - 1; i >= 0; i--) {
                    let tween = this.globalTweens[i];
                    if (tween) tween.update();
                }
            }
        }
    }

    //***************************************************************************
    // ---------------------------- Interpolation Animation Dependency Library End ----------------------------
    //***************************************************************************

    // Private Functions and System Class Extensions

    const playSoundEffectsObject = function (soundEffects) {
        if (soundEffects) {
            const soundEffectsObject = JSON.parse(soundEffects);
            if (soundEffectsObject.name.length !== 0) {
                AudioManager.playStaticSe(soundEffectsObject);
            }
        }
    }

    class Window_MessageNotification extends Window_Base {

        initialize(rect, textLineHeight) {
            Window_Base.prototype.initialize.call(this, rect);
            this.textLineHeight = textLineHeight;
            this.inlineIconWidth = ImageManager.iconWidth;
        }

        // destroy(options) {
        //     console.log("Window_MessageNotification ------ destroy")
        // }

        setUpUI(iconSize, iconPath, iconTextPadding, realText, textSize) {
            if (iconPath && iconSize) {
                const bitmap = ImageManager.loadBitmap("img/", iconPath);
                bitmap.addLoadListener(() => {
                    this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, (this.contents.height - iconSize.height) / 2, iconSize.width, iconSize.height);
                });
            }
            if (realText && textSize) {
                //this.contents.fillRect(iconSize.width + iconTextPadding, (this.contents.height - textSize.height) / 2, textSize.width, textSize.height, `rgba(255, 255, 255, 1)`);
                this.drawTextEx(realText, iconSize.width + iconTextPadding, (this.contents.height - textSize.height) / 2, textSize.width);
            }
        }

        setDebug(open, rect) {
            if (open === true) {
                const rectString = `(${rect.x}, ${rect.y}, ${rect.width}, ${rect.height})`
                this.contents.fontSize = 12;
                this.contents.textColor = "red";
                this.drawText(rectString, 0, this.contents.height / 2 + 2, this.contents.width, "center");
                this.resetFontSettings();
            }
        }

        lineHeight() {
            return this.textLineHeight;
        }

        processEscapeCharacter(code, textState) {
            switch (code) {
                case "C":
                    this.processColorChange(this.obtainEscapeParam(textState));
                    break;
                case "I":
                    this.processDrawIcon(this.obtainEscapeParam(textState), textState);
                    break;
                case "IS":
                    this.inlineIconWidth = this.obtainEscapeParam(textState);
                    break;
                case "PX":
                    textState.x = this.obtainEscapeParam(textState);
                    break;
                case "PY":
                    textState.y = this.obtainEscapeParam(textState);
                    break;
                case "FS":
                    this.contents.fontSize = this.obtainEscapeParam(textState);
                    break;
                case "{":
                    this.makeFontBigger();
                    break;
                case "}":
                    this.makeFontSmaller();
                    break;
            }
        }

        processDrawIcon(iconIndex, textState) {
            if (textState.drawing) {
                this.drawIcon(iconIndex, textState.x + 2, textState.y);
            }
            textState.x += this.inlineIconWidth + 4;
        }

        drawIcon(iconIndex, x, y) {
            const bitmap = ImageManager.loadSystem("IconSet");
            const pw = ImageManager.iconWidth;
            const ph = ImageManager.iconHeight;
            const sx = (iconIndex % 16) * pw;
            const sy = Math.floor(iconIndex / 16) * ph;
            this.contents.blt(bitmap, sx, sy, pw, ph, x, y + (this.textLineHeight - this.inlineIconWidth) / 2, this.inlineIconWidth, this.inlineIconWidth);
        }

    }

    const _Scene_Base_Initialize = Scene_Base.prototype.initialize;
    Scene_Base.prototype.initialize = function () {
        _Scene_Base_Initialize.apply(this, arguments);
        this.messageNotificationCharm = new Charm(PIXI);
    };

    const _Scene_Base_Update = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function () {
        _Scene_Base_Update.apply(this, arguments);
        this.messageNotificationCharm.update();
    };

    return {
        showMessageNotificationWindow
    }

})();