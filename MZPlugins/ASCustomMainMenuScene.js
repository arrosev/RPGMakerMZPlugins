/*:
 * @target MZ
 * @plugindesc [V1.0.0] Customized Main Menu Plugin
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * This plugin is released under the MIT license.

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
 * @param mainMenuSceneSet
 * @text Main Menu Scene Set
 * @desc Main Menu Scene Set
 * @type string
 * @default
 * 
 * @param sceneCancelButtonVisible
 * @text Cancel Button Visible
 * @desc Scene Cancel Button Visible
 * @parent mainMenuSceneSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param sceneBackGround
 * @text Scene BackGround
 * @desc Scene BackGround
 * @parent mainMenuSceneSet
 * @type select
 * @option none
 * @option image
 * @option video
 * @default none
 * 
 * @param sceneBackGroundImage
 * @text Scene BackGround Image
 * @desc Scene BackGround Image
 * @parent sceneBackGround
 * @type file
 * @dir img/titles1
 * @default
 * 
 * @param sceneBackGroundVideo
 * @text Scene BackGround Video
 * @desc No video file extension required, both mp4 and webm files are needed(Video format used by MZ), the video will loop 
 * @parent sceneBackGround
 * @type string
 * @default 
 * 
 * @param commandWindowSet
 * @text Command Window Set
 * @desc Command Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param commandWindowWindowSkin
 * @text Window Skin
 * @desc Command Window WindowSkin
 * @parent commandWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @param commandWindowFrame
 * @text Frame
 * @desc Command Window Frame
 * @parent commandWindowSet
 * @type struct<Rect>
 * @default {"x":"568","y":"52","width":"240","height":"496"}
 * 
 * @param commandWindowPadding
 * @text Padding
 * @desc Command Window Padding
 * @parent commandWindowSet
 * @type number
 * @default 12
 * 
 * @param commandWindowRowSpacing
 * @text Row Spacing
 * @desc Command Window Row Spacing
 * @parent commandWindowSet
 * @type number
 * @default 4
 * 
 * @param commandWindowColSpacing
 * @text Col Spacing
 * @desc Command Window Col Spacing
 * @parent commandWindowSet
 * @type number
 * @default 8
 * 
 * @param commandWindowText
 * @text Text
 * @desc Command Window Text
 * @parent commandWindowSet
 * @type string
 * @default
 * 
 * @param commandWindowFontSize
 * @text Font Size
 * @desc Command Window Font Size
 * @parent commandWindowText
 * @type number
 * @default 26
 * 
 * @param commandWindowTextAlign
 * @text Text Align
 * @desc Command Window Text Align
 * @parent commandWindowText
 * @type select
 * @option center
 * @option left
 * @option right
 * @default center
 * 
 * @param commandWindowTextColor
 * @text Text Color
 * @desc Command Window Text Color
 * @parent commandWindowText
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param commandWindowOutlineColor
 * @text Outline Color
 * @desc Command Window Outline Color
 * @parent commandWindowText
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param goldWindowSet
 * @text Gold Window Set
 * @desc Gold Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param goldWindowVisible
 * @text Visible
 * @desc Gold Window Visible
 * @parent goldWindowSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowSet
 * @text Status Window Set
 * @desc Status Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param statusWindowVisible
 * @text Visible
 * @desc Status Window Visible
 * @parent statusWindowSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 */

/*~struct~Color:
 * 
 * @param r
 * @text R
 * @desc R
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param g
 * @text G
 * @desc G
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param b
 * @text B
 * @desc B
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param a
 * @text A
 * @desc A
 * @type number
 * @min 0
 * @max 1
 * @default 1
 * 
 */

/*~struct~Rect:
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

// * @param sceneBackGroundMusic
// * @text Scene BackGround Music
// * @desc Scene BackGround Music
// * @parent mainMenuSceneSet
// * @type file
// * @dir audio/bgm
// * @default

const ASCustomMainMenuSceneNameSpace = (() => {
    "use strict";

    const pluginName = "ASCustomMainMenuScene";
    const parameters = PluginManager.parameters(pluginName);

    const sceneBackGroundSelectNone = "none";
    const sceneBackGroundSelectImage = "image";
    const sceneBackGroundSelectVideo = "video";
    
    const sceneCancelButtonVisible = parameters.sceneCancelButtonVisible !== "false";

    const sceneBackGround = parameters.sceneBackGround;
    const sceneBackGroundImage = parameters.sceneBackGroundImage;
    const sceneBackGroundVideo = parameters.sceneBackGroundVideo;
    //const sceneBackGroundMusic = parameters.sceneBackGroundMusic;

    const commandWindowWindowSkin = parameters.commandWindowWindowSkin;
    const commandWindowFrameJsonObject = JSON.parse(parameters.commandWindowFrame);
    const commandWindowFrame = new Rectangle(Number(commandWindowFrameJsonObject.x) || 0, Number(commandWindowFrameJsonObject.y) || 0, Number(commandWindowFrameJsonObject.width) || 0, Number(commandWindowFrameJsonObject.height) || 0);
    
    const commandWindowPadding = Number(parameters.commandWindowPadding);
    const commandWindowRowSpacing = Number(parameters.commandWindowRowSpacing) || 4;
    const commandWindowColSpacing = Number(parameters.commandWindowColSpacing) || 8;

    const commandWindowFontSize = Number(parameters.commandWindowFontSize) || 26;
    const commandWindowTextAlign = parameters.commandWindowTextAlign;
    const commandWindowTextColorJsonObject = JSON.parse(parameters.commandWindowTextColor);
    const commandWindowOutlineColorJsonObject = JSON.parse(parameters.commandWindowOutlineColor);
    
    const goldWindowVisible = parameters.goldWindowVisible !== "false";


    const statusWindowVisible = parameters.statusWindowVisible !== "false";

    //Scene

    const _Scene_Menu_Needs_Cancel_Button = Scene_Menu.prototype.needsCancelButton;
    Scene_Menu.prototype.needsCancelButton = function() {
        let visible = _Scene_Menu_Needs_Cancel_Button.apply(this, arguments);
        visible = sceneCancelButtonVisible;
        return visible;
    };

    const _Scene_Menu_Create_Background = Scene_Menu.prototype.createBackground;
    Scene_Menu.prototype.createBackground = function() {
        _Scene_Menu_Create_Background.apply(this, arguments);
        if (sceneBackGround !== sceneBackGroundSelectNone) {
            if (sceneBackGroundImage && sceneBackGround === sceneBackGroundSelectImage) {
                this._backgroundSprite.bitmap = ImageManager.loadTitle1(sceneBackGroundImage);
                this._backgroundSprite.filters = [];
                this.setBackgroundOpacity(255);
            }
            if (sceneBackGroundVideo && sceneBackGround === sceneBackGroundSelectVideo) {
                //this.removeChild(this._backgroundSprite);
                PIXI.utils.clearTextureCache();
                const fileExtension = Utils.canPlayWebm() ? ".webm" : ".mp4";
                const videoPath = sceneBackGroundVideo + fileExtension;
                const bg = PIXI.Texture.from(videoPath);
                const video = bg.baseTexture.resource.source;
                video.loop = true;
                video.preload = 'auto';
                const videoSprite = new PIXI.Sprite(bg);
                videoSprite.width = Graphics.width;
                videoSprite.height = Graphics.height;
                this.addChild(videoSprite);
            }
        } 
    };

    // const _Scene_Menu_Start = Scene_Menu.prototype.start;
    // Scene_Menu.prototype.start = function() {
    //     _Scene_Menu_Start.apply(this, arguments);
    //     this.lastBGM = AudioManager._currentBgm;
    //     AudioManager.playBgm({"name":"Theme5","pan":0,"pitch":100,"volume":90});
    //     AudioManager.stopBgs();
    //     AudioManager.stopMe();
    // };

    // const _Scene_Menu_Destroy = Scene_Menu.prototype.destroy;
    // Scene_Menu.prototype.destroy = function() {
    //     _Scene_Menu_Destroy.apply(this, arguments);
    //     this.fadeOutAll();
    //     // AudioManager.playBgm(this.lastBGM);
    // };

    // Scene_Menu.prototype.popScene = function() {
    //     AudioManager.playBgm(this.lastBGM);
    //     SceneManager.pop();
    // };

    //CommandWindow

    const _Scene_Menu_Create_Command_Window = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        _Scene_Menu_Create_Command_Window.apply(this, arguments);
        //this._commandWindow.visible = false;
        this._commandWindow.windowskin = ImageManager.loadSystem(commandWindowWindowSkin);
        this._commandWindow._padding = commandWindowPadding;
    };

    const _Scene_Menu_Command_Window_Rect = Scene_Menu.prototype.commandWindowRect;
    Scene_Menu.prototype.commandWindowRect = function() {
        let frame = _Scene_Menu_Command_Window_Rect.apply(this, arguments);
        frame = commandWindowFrame;
        return frame;
    };

    const _Window_Menu_Command_RowSpacing = Window_MenuCommand.prototype.rowSpacing;
    Window_MenuCommand.prototype.rowSpacing = function() {
        let rowSpacing = _Window_Menu_Command_RowSpacing.apply(this, arguments);
        rowSpacing = commandWindowRowSpacing;
        return rowSpacing;
    }

    const _Window_Menu_Command_ColSpacing = Window_MenuCommand.prototype.colSpacing;
    Window_MenuCommand.prototype.colSpacing = function() {
        let colSpacing = _Window_Menu_Command_ColSpacing.apply(this, arguments);
        colSpacing = commandWindowColSpacing;
        return colSpacing;
    }

    const _Window_Menu_Command_Reset_Text_Color = Window_MenuCommand.prototype.resetTextColor;
    Window_MenuCommand.prototype.resetTextColor = function() {
        _Window_Menu_Command_Reset_Text_Color.apply(this, arguments);
        const textColorR = Number(commandWindowTextColorJsonObject.r);
        const textColorG = Number(commandWindowTextColorJsonObject.g);
        const textColorB = Number(commandWindowTextColorJsonObject.b);
        const textColorA = Number(commandWindowTextColorJsonObject.a);
        this.changeTextColor(`rgba(${textColorR}, ${textColorG}, ${textColorB}, ${textColorA})`);
        const OutlineColorR = Number(commandWindowOutlineColorJsonObject.r); 
        const OutlineColorG = Number(commandWindowOutlineColorJsonObject.g); 
        const OutlineColorB = Number(commandWindowOutlineColorJsonObject.b); 
        const OutlineColorA = Number(commandWindowOutlineColorJsonObject.a); 
        this.changeOutlineColor(`rgba(${OutlineColorR}, ${OutlineColorG}, ${OutlineColorB}, ${OutlineColorA})`);
    };

    const _Window_Menu_Command_Item_Text_Align = Window_MenuCommand.prototype.itemTextAlign;
    Window_MenuCommand.prototype.itemTextAlign = function() {
        let textAlign = _Window_Menu_Command_Item_Text_Align.apply(this, arguments);
        textAlign = commandWindowTextAlign;
        return textAlign;
    };

    const _Window_Menu_Command_Draw_Item = Window_MenuCommand.prototype.drawItem;
    Window_MenuCommand.prototype.drawItem = function(index) {
        this.contents.fontSize = commandWindowFontSize;
        _Window_Menu_Command_Draw_Item.apply(this, arguments);
    };

    

    //GoldWindow
    const _Scene_Menu_Create_Gold_Window = Scene_Menu.prototype.createGoldWindow;
    Scene_Menu.prototype.createGoldWindow = function() {
        _Scene_Menu_Create_Gold_Window.apply(this, arguments);
        this._goldWindow.visible = goldWindowVisible;
    };

    //StatusWindow
    const _Scene_Menu_Create_Status_Window = Scene_Menu.prototype.createStatusWindow;
    Scene_Menu.prototype.createStatusWindow = function() {
        _Scene_Menu_Create_Status_Window.apply(this, arguments);
        this._statusWindow.visible = statusWindowVisible;
    };

})();