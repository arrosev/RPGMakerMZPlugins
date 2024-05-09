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
 * @text Scene Cancel Button Visible
 * @desc Scene Cancel Button Visible
 * @parent mainMenuSceneSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param sceneBackGroundImage
 * @text Scene BackGround Image
 * @desc Scene BackGround Image
 * @parent mainMenuSceneSet
 * @type file
 * @dir img/titles1
 * @default
 * 
 * @param sceneBackGroundMusic
 * @text Scene BackGround Music
 * @desc Scene BackGround Music
 * @parent mainMenuSceneSet
 * @type file
 * @dir audio/bgm
 * @default
 * 
 * @param commandWindowSet
 * @text Command Window Set
 * @desc Command Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param goldWindowSet
 * @text Gold Window Set
 * @desc Gold Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param statusWindowSet
 * @text Status Window Set
 * @desc Status Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 */

const ASCustomMainMenuSceneNameSpace = (() => {
    "use strict";

    const pluginName = "ASCustomMainMenuScene";
    const parameters = PluginManager.parameters(pluginName);
    
    const sceneCancelButtonVisible = parameters.sceneCancelButtonVisible !== "false";
    const sceneBackGroundImage = parameters.sceneBackGroundImage;
    const sceneBackGroundMusic = parameters.sceneBackGroundMusic;


    //Scene

    const _Scene_Menu_Needs_Cancel_Button = Scene_Menu.prototype.needsCancelButton;
    Scene_Menu.prototype.needsCancelButton = function() {
        let visible = _Scene_Menu_Needs_Cancel_Button.apply(this, arguments);
        visible = sceneCancelButtonVisible;
        return visible;
    };

    const _Scene_Menu_Create_Background = Scene_Menu.prototype.createBackground;
    Scene_Menu.prototype.createBackground = function() {
        if (sceneBackGroundImage) {
            const bitmap = ImageManager.loadTitle1(sceneBackGroundImage);
            this._backgroundSprite = new Sprite(bitmap);
            this.addChild(this._backgroundSprite);
        } else {
            _Scene_Menu_Create_Background.apply(this, arguments);
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
    };

    //GoldWindow
    const _Scene_Menu_Create_Gold_Window = Scene_Menu.prototype.createGoldWindow;
    Scene_Menu.prototype.createGoldWindow = function() {
        _Scene_Menu_Create_Gold_Window.apply(this, arguments);
        
    };

    //StatusWindow
    

})();