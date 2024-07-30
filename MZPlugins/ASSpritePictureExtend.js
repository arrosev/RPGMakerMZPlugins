/*:
 * @target MZ
 * @plugindesc [V1.0.0] 显示图片功能扩展插件
 * @author Author
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * @param cancelButtonOffsetX
 * @text 返回按钮X坐标
 * @desc 返回按钮X坐标
 * @type number
 * @default 0
 * 
 * @param cancelButtonOffsetY
 * @text 返回按钮Y坐标
 * @desc 返回按钮Y坐标
 * @type number
 * @default 0
 * 
 * @param showCancelButtonPictureIDList
 * @text 显示返回按钮的图片ID列表
 * @desc 显示返回按钮的图片ID列表
 * @type number[]
 * @default []
 * 
 */

const ASSpritePictureExtendNameSpace = (() => {
    "use strict";

    const pluginName = "ASSpritePictureExtend";
    const parameters = PluginManager.parameters(pluginName);

    const cancelButtonOffsetX = Number(parameters.cancelButtonOffsetX);
    const cancelButtonOffsetY = Number(parameters.cancelButtonOffsetY);

    const showCancelButtonPictureIDList = JSON.parse(parameters.showCancelButtonPictureIDList !== undefined ? parameters.showCancelButtonPictureIDList : "[]");
    let showCancelButtonPictureIDSet = new Set();
    for (const id of showCancelButtonPictureIDList) {
        showCancelButtonPictureIDSet.add(Number(id))
    }

    const _Sprite_Picture_Initialize = Sprite_Picture.prototype.initialize;
    Sprite_Picture.prototype.initialize = function(pictureId) {
        _Sprite_Picture_Initialize.apply(this, arguments);

        if (showCancelButtonPictureIDSet.has(this._pictureId)) {
            this._cancelButton = new Sprite_Button("cancel");
            this._cancelButton.x = cancelButtonOffsetX;
            this._cancelButton.y = cancelButtonOffsetY;
            this._cancelButton.visible = true;
            this._cancelButton.setClickHandler(this.cancelButtonClicked.bind(this));
            this.addChild(this._cancelButton);
        }

    };

    Sprite_Picture.prototype.cancelButtonClicked = function() {
        SoundManager.playCancel();
        $gameScreen.erasePicture(this._pictureId);
    };

    const _Scene_Map_IsAnyButtonPressed = Scene_Map.prototype.isAnyButtonPressed;
    Scene_Map.prototype.isAnyButtonPressed = function() {
        let anyButtonPressed = _Scene_Map_IsAnyButtonPressed.apply(this, arguments);
        for (const id of showCancelButtonPictureIDSet) {
            const cancelButton = this._spriteset._pictureContainer.children[id - 1]._cancelButton;
            anyButtonPressed = anyButtonPressed || (cancelButton && cancelButton.isBeingTouched());
        }
        return anyButtonPressed;
    };

})();