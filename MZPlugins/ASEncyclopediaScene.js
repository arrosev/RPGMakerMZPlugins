/*:
 * @target MZ
 * @plugindesc [V1.0.0] Encyclopedia Plugin
 * @author Arrose
 * 
 * @url https://github.com/arrosev
 * 
 * @help
 * 
 * This plugin is released under the MIT license.
 * 
 * Copyright (c) 2025 Arrose

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
 * Note:
 *      1. Example of script usage: ASEncyclopediaSceneNameSpace.openEncyclopediaScene();
 *      2. A new "\IS[x]" signs has been added to the text of the window to resize the 
 *         inline icons in the text.
 *      3. The background video and any detailed video of the item cannot be the same file
 *
 * @param encyclopediaPluginSet
 * @text Encyclopedia Plugin Set
 * @desc Encyclopedia Plugin Set
 * @type string
 * @default
 *
 * @param sceneSet
 * @text Scene Set
 * @desc Scene Set
 * @parent encyclopediaPluginSet
 * @type string
 * @default
 *
 * @param sceneBackGround
 * @text Scene BackGround
 * @desc Scene BackGround
 * @parent sceneSet
 * @type select
 * @option none
 * @option image
 * @option video
 * @default none
 *
 * @param sceneBackGroundImage
 * @text Scene BackGround Image
 * @desc Scene BackGround Image
 * @parent sceneSet
 * @type file
 * @dir img/titles1
 * @default
 * 
 * @param sceneBackGroundVideo
 * @text Scene BackGround Video
 * @desc No video file extension required, both mp4 and webm files are needed(Video format used by MZ), the video will loop
 * @parent sceneSet
 * @type string
 * @default
 *
 * @param titleWindowSet
 * @text Title Window Set
 * @desc Title Window Set
 * @parent sceneSet
 * @type string
 * @default
 *
 * @param titleWindowSkin
 * @text Title WindowSkin
 * @desc Title WindowSkin
 * @parent titleWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 *
 * @param titleWindowPoint
 * @text Title Window Point
 * @desc Title Window Point
 * @parent titleWindowSet
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 *
 * @param titleWindowWidth
 * @text Title Window Width
 * @desc Title Window Width
 * @parent titleWindowSet
 * @type number
 * @default 0
 *
 * @param titleWindowHeight
 * @text Title Window Height
 * @desc Title Window Height
 * @parent titleWindowSet
 * @type number
 * @default 0
 *
 * @param titleWindowText
 * @text Title Window Text
 * @desc Title Window Text
 * @parent titleWindowSet
 * @type string
 * @default
 *
 * @param itemListWindowSet
 * @text Item List Window Set
 * @desc Item List Window Set
 * @parent sceneSet
 * @type string
 * @default
 *
 * @param itemListWindowSkin
 * @text Item List WindowSkin
 * @desc Item List WindowSkin
 * @parent itemListWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 *
 * @param itemListWindowPoint
 * @text Item List Window Point
 * @desc Item List Window Point
 * @parent itemListWindowSet
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 *
 * @param itemListWindowWidth
 * @text Item List Window Width
 * @desc Item List Window Width
 * @parent itemListWindowSet
 * @type number
 * @default 0
 *
 * @param itemListWindowHeight
 * @text Item List Window Height
 * @desc Item List Window Height
 * @parent itemListWindowSet
 * @type number
 * @default 0
 *
 * @param itemSet
 * @text Item Set
 * @desc Item Set
 * @parent itemListWindowSet
 * @type string
 * @default
 *
 * @param itemWidth
 * @text Item Width
 * @desc Item Width
 * @parent itemSet
 * @type number
 * @default 36
 *
 * @param itemRowSpacing
 * @text Item Row Spacing
 * @desc Item Row Spacing
 * @parent itemSet
 * @type number
 * @default 4
 *
 * @param itemDefaultText
 * @text Item Default Text
 * @desc Item Default Text
 * @parent itemSet
 * @type string
 * @default ? ? ?
 *
 * @param itemTextSize
 * @text Item Text Size
 * @desc Item Text Size
 * @parent itemSet
 * @type number
 * @min 0
 * @default 26
 *
 * @param itemTextColor
 * @text Item Text Color
 * @desc Item Text Color
 * @parent itemSet
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 *
 * @param itemTextOutlineColor
 * @text Item Text OutlineColor
 * @desc Item Text OutlineColor
 * @parent itemSet
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 *
 * @param itemDetailWindowSet
 * @text Item Detail Window Set
 * @desc Item Detail Window Set
 * @parent sceneSet
 * @type string
 * @default
 *
 * @param itemDetailWindowSkin
 * @text Item Detail WindowSkin
 * @desc Item Detail WindowSkin
 * @parent itemDetailWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 *
 * @param itemDetailWindowPoint
 * @text Item Detail Window Point
 * @desc Item Detail Window Point
 * @parent itemDetailWindowSet
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 *
 * @param itemDetailWindowWidth
 * @text Item Detail Window Width
 * @desc Item Detail Window Width
 * @parent itemDetailWindowSet
 * @type number
 * @default 0
 *
 * @param itemDetailWindowHeight
 * @text Item Detail Window Height
 * @desc Item Detail Window Height
 * @parent itemDetailWindowSet
 * @type number
 * @default 0
 *
 * @param itemDetailWindowDefaultImage
 * @text Item Detail Window Default Image
 * @desc Item Detail Window Default Image
 * @parent itemDetailWindowSet
 * @type file
 * @dir img/pictures
 * @default
 *
 * @param itemList
 * @text Item List
 * @desc Item List
 * @parent encyclopediaPluginSet
 * @type struct<Item>[]
 * @default []
 *
 * @command openEncyclopediaScene
 * @text Open Encyclopedia Scene
 * @desc Open Encyclopedia Scene
 *
 *
 */

/*:zh
 * @target MZ
 * @plugindesc [V1.0.0] 知识百科插件
 * @author Arrose
 * 
 * @url https://github.com/arrosev
 * 
 * @help
 * 
 * 这个插件在MIT许可下发布
 * 
 * Copyright (c) 2025 Arrose

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
 * 注意:
 *      1. 脚本使用举例: ASEncyclopediaSceneNameSpace.openEncyclopediaScene();
 *      2. 详细窗口的文本新增了一个 “\IS[x]” 标识用来调整文本内嵌图标的大小
 *      3. 背景视频和选项的任何一个详细视频不能是同一个文件
 *
 * @param encyclopediaPluginSet
 * @text 知识百科插件设置
 * @desc 知识百科插件设置
 * @type string
 * @default
 *
 * @param sceneSet
 * @text 场景设置
 * @desc 场景设置
 * @parent encyclopediaPluginSet
 * @type string
 * @default
 *
 * @param sceneBackGround
 * @text 场景背景
 * @desc 场景背景
 * @parent sceneSet
 * @type select
 * @option none
 * @option image
 * @option video
 * @default none
 *
 * @param sceneBackGroundImage
 * @text 场景背景图片
 * @desc 场景背景图片
 * @parent sceneSet
 * @type file
 * @dir img/titles1
 * @default
 * 
 * @param sceneBackGroundVideo
 * @text 场景背景视频
 * @desc 无需视频文件扩展名，movies文件夹内需要mp4和webm文件（MZ 使用的视频格式），视频将循环播放
 * @parent sceneSet
 * @type string
 * @default
 *
 * @param titleWindowSet
 * @text 标题窗口设置
 * @desc 标题窗口设置
 * @parent sceneSet
 * @type string
 * @default
 *
 * @param titleWindowSkin
 * @text 标题窗口皮肤
 * @desc 标题窗口皮肤
 * @parent titleWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 *
 * @param titleWindowPoint
 * @text 标题窗口坐标
 * @desc 标题窗口坐标
 * @parent titleWindowSet
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 *
 * @param titleWindowWidth
 * @text 标题窗口宽度
 * @desc 标题窗口宽度
 * @parent titleWindowSet
 * @type number
 * @default 0
 *
 * @param titleWindowHeight
 * @text 标题窗口高度
 * @desc 标题窗口高度
 * @parent titleWindowSet
 * @type number
 * @default 0
 *
 * @param titleWindowText
 * @text 标题窗口文本
 * @desc 标题窗口文本
 * @parent titleWindowSet
 * @type string
 * @default
 *
 * @param itemListWindowSet
 * @text 选项列表窗口设置
 * @desc 选项列表窗口设置
 * @parent sceneSet
 * @type string
 * @default
 *
 * @param itemListWindowSkin
 * @text 选项列表窗口皮肤
 * @desc 选项列表窗口皮肤
 * @parent itemListWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 *
 * @param itemListWindowPoint
 * @text 选项列表窗口坐标
 * @desc 选项列表窗口坐标
 * @parent itemListWindowSet
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 *
 * @param itemListWindowWidth
 * @text 选项列表窗口宽度
 * @desc 选项列表窗口宽度
 * @parent itemListWindowSet
 * @type number
 * @default 0
 *
 * @param itemListWindowHeight
 * @text 选项列表窗口高度
 * @desc 选项列表窗口高度
 * @parent itemListWindowSet
 * @type number
 * @default 0
 *
 * @param itemSet
 * @text 选项设置
 * @desc 选项设置
 * @parent itemListWindowSet
 * @type string
 * @default
 *
 * @param itemWidth
 * @text 选项高度
 * @desc 选项高度
 * @parent itemSet
 * @type number
 * @default 36
 *
 * @param itemRowSpacing
 * @text 选项行间距
 * @desc 选项行间距
 * @parent itemSet
 * @type number
 * @default 4
 *
 * @param itemDefaultText
 * @text 选项默认文本
 * @desc 选项默认文本
 * @parent itemSet
 * @type string
 * @default ? ? ?
 *
 * @param itemTextSize
 * @text 选项文本大小
 * @desc 选项文本大小
 * @parent itemSet
 * @type number
 * @min 0
 * @default 26
 *
 * @param itemTextColor
 * @text 选项文本颜色
 * @desc 选项文本颜色
 * @parent itemSet
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 *
 * @param itemTextOutlineColor
 * @text 选项文本描边颜色
 * @desc 选项文本描边颜色
 * @parent itemSet
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 *
 * @param itemDetailWindowSet
 * @text 选项详细窗口设置
 * @desc 选项详细窗口设置
 * @parent sceneSet
 * @type string
 * @default
 *
 * @param itemDetailWindowSkin
 * @text 选项详细窗口皮肤
 * @desc 选项详细窗口皮肤
 * @parent itemDetailWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 *
 * @param itemDetailWindowPoint
 * @text 选项详细窗口坐标
 * @desc 选项详细窗口坐标
 * @parent itemDetailWindowSet
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 *
 * @param itemDetailWindowWidth
 * @text 选项详细窗口宽度
 * @desc 选项详细窗口宽度
 * @parent itemDetailWindowSet
 * @type number
 * @default 0
 *
 * @param itemDetailWindowHeight
 * @text 选项详细窗口高度
 * @desc 选项详细窗口高度
 * @parent itemDetailWindowSet
 * @type number
 * @default 0
 *
 * @param itemDetailWindowDefaultImage
 * @text 选项详细窗口默认图片
 * @desc 选项详细窗口默认图片
 * @parent itemDetailWindowSet
 * @type file
 * @dir img/pictures
 * @default
 *
 * @param itemList
 * @text 选项列表
 * @desc 选项列表
 * @parent encyclopediaPluginSet
 * @type struct<Item>[]
 * @default []
 *
 * @command openEncyclopediaScene
 * @text 打开知识百科场景
 * @desc 打开知识百科场景
 *
 *
 */

/*~struct~Color:
 * 
 * @param r
 * @text R
 * @desc R (0 - 255)
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param g
 * @text G
 * @desc G (0 - 255)
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param b
 * @text B
 * @desc B (0 - 255)
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param a
 * @text A
 * @desc A (0 - 1)
 * @type string
 * @min 0
 * @max 1
 * @default 1
 * 
 */

/*~struct~Point:
 * 
 * @param x
 * @text X
 * @desc X
 * @type string
 * @default 0
 * 
 * @param y
 * @text Y
 * @desc Y
 * @type string
 * @default 0
 * 
 */

/*~struct~Item:
 * 
 * @param itemName
 * @text Name[选项名称]
 * @desc Name[选项名称]
 * @type string
 * @default
 *
 * @param itemSwitch
 * @text Switch[选项开关]
 * @desc Switch[选项开关]
 * @type switch
 * @default 0
 *
 * @param itemDetailType
 * @text Type[选项详细内容类型]
 * @desc Type[选项详细内容类型]
 * @type select
 * @option text
 * @option image
 * @option video
 * @default text
 * 
 * @param itemDetailText
 * @text Text[文本]
 * @desc Text[文本]
 * @type multiline_string
 * @default
 *
 * @param itemDetailImage
 * @text Image[图片]
 * @desc Image[图片]
 * @type file
 * @dir img/pictures
 * @default
 *
 * @param itemDetailVideo
 * @text Video[视频]
 * @desc 无需视频文件扩展名，movies文件夹内需要mp4和webm文件（MZ 使用的视频格式），视频将循环播放
 * @type string
 * @default
 * 
 */

const ASEncyclopediaSceneNameSpace = (() => {
    "use strict";

    const pluginName = "ASEncyclopediaScene";
    const parameters = PluginManager.parameters(pluginName);

    const sceneBackGround = parameters.sceneBackGround;
    const sceneBackGroundImage = parameters.sceneBackGroundImage;
    const sceneBackGroundVideo = parameters.sceneBackGroundVideo;

    const titleWindowSkin = parameters.titleWindowSkin;
    const titleWindowPointJsonObject = JSON.parse(parameters.titleWindowPoint);
    const titleWindowPoint = new Point(Number(titleWindowPointJsonObject.x), Number(titleWindowPointJsonObject.y));
    const titleWindowWidth = Number(parameters.titleWindowWidth) || 0;
    const titleWindowHeight = Number(parameters.titleWindowHeight) || 0;
    const titleWindowText = parameters.titleWindowText;

    const itemListWindowSkin = parameters.itemListWindowSkin;
    const itemListWindowPointJsonObject = JSON.parse(parameters.itemListWindowPoint);
    const itemListWindowPoint = new Point(Number(itemListWindowPointJsonObject.x), Number(itemListWindowPointJsonObject.y));
    const itemListWindowWidth = Number(parameters.itemListWindowWidth) || 0;
    const itemListWindowHeight = Number(parameters.itemListWindowHeight) || 0;
    const itemWidth = Number(parameters.itemWidth) || 0;
    const itemRowSpacing = Number(parameters.itemRowSpacing) || 0;
    const itemDefaultText = parameters.itemDefaultText;
    const itemTextSize = Number(parameters.itemTextSize);
    const itemTextColor = JSON.parse(parameters.itemTextColor);
    const itemTextOutlineColor = JSON.parse(parameters.itemTextOutlineColor);

    const itemDetailWindowSkin = parameters.itemDetailWindowSkin;
    const itemDetailWindowPointJsonObject = JSON.parse(parameters.itemDetailWindowPoint);
    const itemDetailWindowPoint = new Point(Number(itemDetailWindowPointJsonObject.x), Number(itemDetailWindowPointJsonObject.y));
    const itemDetailWindowWidth = Number(parameters.itemDetailWindowWidth) || 0;
    const itemDetailWindowHeight = Number(parameters.itemDetailWindowHeight) || 0;
    const itemDetailWindowDefaultImage = parameters.itemDetailWindowDefaultImage;

    const itemListJsonObject = JSON.parse(parameters.itemList);
    const itemList = [];
    for (const item of itemListJsonObject) {
        itemList.push(JSON.parse(item));
    }

    PluginManager.registerCommand(pluginName, "openEncyclopediaScene", args => {
        SceneManager.push(Scene_Encyclopedia);
    });

    const openEncyclopediaScene = function() {
        SceneManager.push(Scene_Encyclopedia);
    }

    const colorJsonObjectConvertToColorRGBA = function(object) {
        return `rgba(${Number(object.r)}, ${Number(object.g)}, ${Number(object.b)}, ${Number(object.a)})`;
    };

    // 选项图片，文字，视频，选择其中一种
    class Scene_Encyclopedia extends Scene_MenuBase {

        create() {
            Scene_MenuBase.prototype.create.call(this);
            this.createTitleWindow();
            this.createItemDetailindow();
            this.createItemListWindow();
        }

        destroy() {
            Scene_MenuBase.prototype.destroy.call(this);
            PIXI.utils.destroyTextureCache();
            PIXI.utils.clearTextureCache();
        }

        createBackground() {
            Scene_MenuBase.prototype.createBackground.call(this);
            if (sceneBackGround !== "none") {
                if (sceneBackGroundImage && sceneBackGround === "image") {
                    const bitmap = ImageManager.loadTitle1(sceneBackGroundImage);
                    bitmap.addLoadListener(() => {
                        const [realX, realY, realWidth, realHeight] = this.getRealFrame(bitmap.width, bitmap.height);
                        this._backgroundSprite.move(realX, realY);
                        this._backgroundSprite.width = realWidth;
                        this._backgroundSprite.height = realHeight;
                        this._backgroundSprite.bitmap = bitmap;
                        this._backgroundSprite.filters = [];
                        this.setBackgroundOpacity(255);
                    });
                }
                if (sceneBackGroundVideo && sceneBackGround === "video") {
                    const fileExtension = Utils.canPlayWebm() ? ".webm" : ".mp4";
                    const videoPath = sceneBackGroundVideo + fileExtension;
                    const bg = PIXI.Texture.from(videoPath);
                    const video = bg.baseTexture.resource.source;
                    video.loop = true;
                    video.preload = 'auto';
                    const videoSprite = new PIXI.Sprite(bg);
                    this.addChild(videoSprite);
                    bg.baseTexture.addListener("loaded", () => {
                        const [realX, realY, realWidth, realHeight] = this.getRealFrame(bg.width, bg.height);
                        videoSprite.x = realX;
                        videoSprite.y = realY;
                        videoSprite.width = realWidth;
                        videoSprite.height = realHeight;
                        videoSprite.texture = bg;
                    });
                }
            }
        }

        getRealFrame(width, height) {
            const ratioX = Graphics.width / width;
            const ratioY = Graphics.height / height;
            const scale = Math.min(ratioX, ratioY, 1.0);
            const realWidth = width * scale;
            const realHeight = height * scale;
            const realX = (Graphics.width - realWidth) / 2.0;
            const realY = (Graphics.height - realHeight) / 2.0;
            return [realX, realY, realWidth, realHeight];
        }

        createTitleWindow() {
            // const rect = new Rectangle(80, 60, 200, 80);
            const rect = new Rectangle(titleWindowPoint.x, titleWindowPoint.y, titleWindowWidth, titleWindowHeight);
            this._titleWindow = new Window_Title(rect);
            this.addWindow(this._titleWindow);
        }

        createItemListWindow() {
            // const rect = new Rectangle(80, 160, 200, 500);
            const rect = new Rectangle(itemListWindowPoint.x, itemListWindowPoint.y, itemListWindowWidth, itemListWindowHeight);
            this._itemListWindow = new Window_ItemList(rect);
            this._itemListWindow.proxy = this._itemDetailWindow;
            this._itemListWindow.setHandler("cancel", this.popScene.bind(this));
            this.addWindow(this._itemListWindow);
        }

        createItemDetailindow() {
            // const rect = new Rectangle(300, 60, 860, 600);
            const rect = new Rectangle(itemDetailWindowPoint.x, itemDetailWindowPoint.y, itemDetailWindowWidth, itemDetailWindowHeight);
            this._itemDetailWindow = new Window_ItemDetail(rect);
            if (itemList.length > 0) {
                this._itemDetailWindow.drawContent(0);
            }
            this.addWindow(this._itemDetailWindow);
        }

    }

    class Window_Title extends Window_Base {

        initialize(rect) {
            Window_Base.prototype.initialize.call(this, rect);
            this.windowskin = ImageManager.loadSystem(titleWindowSkin);
            const textSize = this.textSizeEx(titleWindowText);
            const textX = (this.contents.width - textSize.width) / 2.0;
            const textY = (this.contents.height - textSize.height) / 2.0;
            this.drawTextEx(titleWindowText, textX, textY, textSize.width);
        }

    }

    class Window_ItemList extends Window_Command {

        initialize(rect) {
            this.itemTextColor = colorJsonObjectConvertToColorRGBA(itemTextColor);
            this.itemTextOutlineColor = colorJsonObjectConvertToColorRGBA(itemTextOutlineColor);
            Window_Command.prototype.initialize.call(this, rect);
            this.windowskin = ImageManager.loadSystem(itemListWindowSkin);
        }

        itemHeight() {
            return itemWidth + this.rowSpacing();
        }

        rowSpacing() {
            return itemRowSpacing;
        }

        makeCommandList() {
            for (const [index, item] of itemList.entries()) {
                const itemSwitch = item.itemSwitch ? $gameSwitches.value(item.itemSwitch) : false;
                const itemName = itemSwitch ? item.itemName : itemDefaultText;
                this.addCommand(itemName, index, itemSwitch);
            }
        }

        select(index) {
            let last = this.index();
            Window_Command.prototype.select.apply(this, arguments);
            let current = this.index();
            if (last !== current && this.proxy) {
                this.proxy.drawContent(index);
            }
        }

        drawItem(index) {
            const rect = this.itemLineRect(index);
            const align = this.itemTextAlign();
            this.resetTextColor();
            this.contents.fontSize = itemTextSize;
            this.changeTextColor(this.itemTextColor);
            this.changeOutlineColor(this.itemTextOutlineColor);
            this.changePaintOpacity(this.isCommandEnabled(index));
            this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
        }

        _refreshArrows() {

        }

    }

    class Window_ItemDetail extends Window_Base {

        initialize(rect) {
            Window_Base.prototype.initialize.call(this, rect);
            this.inlineIconWidth = ImageManager.iconWidth;
            this.videoSprite = new PIXI.Sprite();
            this.videoSprite.visible = false;
            this.addChild(this.videoSprite);
        }

        destroy(options) {
            this.destroyContents();
            if (this._dimmerSprite) {
                this._dimmerSprite.bitmap.destroy();
            }
            Window_Base.prototype.destroy.call(this, options);
            PIXI.utils.destroyTextureCache();
            PIXI.utils.clearTextureCache();
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

        // processDrawIcon(iconIndex, textState) {
        //     if (textState.drawing) {
        //         this.drawIcon(iconIndex, textState.x + 2, textState.y);
        //     }
        //     textState.x += this.inlineIconWidth + 4;
        // }

        drawIcon(iconIndex, x, y) {
            const bitmap = ImageManager.loadSystem("IconSet");
            const pw = ImageManager.iconWidth;
            const ph = ImageManager.iconHeight;
            const sx = (iconIndex % 16) * pw;
            const sy = Math.floor(iconIndex / 16) * ph;
            this.contents.blt(bitmap, sx, sy, pw, ph, x, y + (this.lineHeight() - this.inlineIconWidth) / 2, this.inlineIconWidth, this.inlineIconWidth);
        }

        getRealFrame(width, height) {
            const ratioX = this.contents.width / width;
            const ratioY = this.contents.height / height;
            const scale = Math.min(ratioX, ratioY, 1.0);
            const realWidth = width * scale;
            const realHeight = height * scale;
            const realX = (this.contents.width - realWidth) / 2.0;
            const realY = (this.contents.height - realHeight) / 2.0;
            return [realX, realY, realWidth, realHeight];
        }

        drawContent(index) {
            // console.log("index", index);
            this.contents.clear();
            this.videoSprite.visible = false;
            const item = itemList[index];
            const itemSwitch = item.itemSwitch ? $gameSwitches.value(item.itemSwitch) : false;
            if (itemSwitch === true) {
                if (item.itemDetailType == "text") {
                    const textSize = this.textSizeEx(item.itemDetailText);
                    const textX = (this.contents.width - textSize.width) / 2.0;
                    const textY = (this.contents.height - textSize.height) / 2.0;
                    this.drawTextEx(item.itemDetailText, textX, textY, textSize.width);
                }
                if (item.itemDetailType == "image") {
                    const bitmap = ImageManager.loadPicture(item.itemDetailImage);
                    bitmap.addLoadListener(() => {
                        const [realX, realY, realWidth, realHeight] = this.getRealFrame(bitmap.width, bitmap.height);
                        this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, realX, realY, realWidth, realHeight);
                    });
                }
                if (item.itemDetailType == "video") {
                    this.videoSprite.visible = true;
                    const fileExtension = Utils.canPlayWebm() ? ".webm" : ".mp4";
                    const videoPath = item.itemDetailVideo + fileExtension;
                    const bg = PIXI.Texture.from(videoPath);
                    const video = bg.baseTexture.resource.source;
                    video.loop = true;
                    video.preload = 'auto';
                    bg.baseTexture.addListener("loaded", () => {
                        const [realX, realY, realWidth, realHeight] = this.getRealFrame(bg.width, bg.height);
                        this.videoSprite.x = this._padding + realX;
                        this.videoSprite.y = this._padding + realY;
                        this.videoSprite.width = realWidth;
                        this.videoSprite.height = realHeight;
                        this.videoSprite.texture = bg;
                    });
                }
            } else {
                const bitmap = ImageManager.loadPicture(itemDetailWindowDefaultImage);
                bitmap.addLoadListener(() => {
                    const [realX, realY, realWidth, realHeight] = this.getRealFrame(bitmap.width, bitmap.height);
                    this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, realX, realY, realWidth, realHeight);
                });
            }
        }

    }

    return {
        openEncyclopediaScene
    }

})();