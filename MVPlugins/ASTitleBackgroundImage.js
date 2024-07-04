/*:
 * @plugindesc 【V1.0.0】通过变量值修改标题背景
 * @author Arrose https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * 这个插件以MIT许可发布
 * 
 * 这个插件通过变量值修改标题背景
 * 
 * 
 * @param titleBackgroundImageVariable
 * @text 标题背景变量
 * @desc 标题背景变量
 * @default 
 * @type variable
 * 
 * @param titleBackgroundImageValueImageList
 * @text 变量值对应图片表
 * @desc 变量值对应图片表（变量值默认值为0，因此变量值等于0时对应图片设置为初始背景）
 * @default []
 * @type struct<ValueImageList>[]
 * 
 */

/*~struct~ValueImageList:
 * 
 * @param variableValue
 * @text 变量值
 * @desc 变量值
 * @type number
 * @default 0
 * 
 * @param variableImage1
 * @text 图片1
 * @desc 图片1
 * @type file
 * @dir img/titles1/
 * @default 
 * 
 * @param variableImage2
 * @text 图片2
 * @desc 图片2
 * @type file
 * @dir img/titles2/
 * @default 
 * 
 */


(() => {
    'use strict';

    const pluginName = "ASTitleBackgroundImage";
    const parameters = PluginManager.parameters(pluginName);

    const titleBackgroundImageVariable = Number(parameters.titleBackgroundImageVariable) || 0;

    const titleBackgroundImageValueImageList = JSON.parse(parameters.titleBackgroundImageValueImageList !== undefined ? parameters.titleBackgroundImageValueImageList : "[]");

    const titleBackgroundImageValueImageDic = {};
    for (const object of titleBackgroundImageValueImageList) {
        const valueImage = JSON.parse(object);
        //console.log("valueImage: ", valueImage)
        titleBackgroundImageValueImageDic[valueImage.variableValue] = { 
            variableImage1: valueImage.variableImage1 !== "" ? valueImage.variableImage1 : undefined,
            variableImage2: valueImage.variableImage2 !== "" ? valueImage.variableImage2 : undefined
        };
    }

    const _Scene_Title_CreateBackground = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function() {

        //$gameVariables.setValue(itembindVariable, itemId);
        //$gameVariables.value()
        // console.log("titleBackgroundImageVariable ID: ", titleBackgroundImageVariable)
        // console.log("titleBackgroundImageVariable Value: ", $gameVariables.value(titleBackgroundImageVariable))

        // console.log("titleBackgroundImageValueImageList: ", titleBackgroundImageValueImageList)
        // console.log("titleBackgroundImageValueImageDic: ", titleBackgroundImageValueImageDic)

        const currentTitleBackgroundImageVariableValue = $gameVariables.value(titleBackgroundImageVariable);
        const titleBackgroundImageValueImage = titleBackgroundImageValueImageDic[currentTitleBackgroundImageVariableValue];

        if (titleBackgroundImageVariable !== 0 && titleBackgroundImageValueImage) {
            // console.log("准备修改标题背景")
            // console.log("titleBackgroundImageValueImage: ", titleBackgroundImageValueImage)
            this._backSprite1 = new Sprite(ImageManager.loadTitle1(titleBackgroundImageValueImage.variableImage1));
            this._backSprite2 = new Sprite(ImageManager.loadTitle2(titleBackgroundImageValueImage.variableImage2));
            this.addChild(this._backSprite1);
            this.addChild(this._backSprite2);
        } else {
            // console.log("默认标题背景")
            _Scene_Title_CreateBackground.apply(this, arguments);
        }

    };

})();