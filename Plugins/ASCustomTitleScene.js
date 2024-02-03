/*:
 * @target MZ
 * @plugindesc 【V1.0.0】 自定义标题场景
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins 
 * 
 * @help
 * 
 * 这个插件主要用于自定义标题界面
 * 
 * 
 * 【V1.0.0】
 *     1. 使用视频作为标题场景的背景
 *     2. 使用图片集制作动画作为标题
 *     3. 使用图片集制作动画作为标题命令窗口的光标
 *     4. 自定义标题命令窗口的WindowSkin
 *     5. 以图片作为命令窗口按钮的未选择状态背景，被选择状态背景，和未启用状态背景
 *     6. 创建额外的新按钮添加到标题命令窗口，并绑定点击按钮后执行的脚本
 *     7. 自定义标题场景各窗口及按钮等的大小和位置
 *     
 * 
 * 注意
 *     1. 使用的视频，pixi宣称是支持：['mp4', 'm4v', 'webm', 'ogg', 'ogv', 'h264', 'avi', 'mov']，
 *        但是暂时只测试了mp4和webm是可以的
 *     2. 如果在打包发布游戏时，勾选了排除未使用文件，请务必确保你使用的
 *        视频文件在项目路径的movies文件夹里，不要放其他文件夹（特别是img），
 *        也不要放在movies文件夹的子文件夹（这是MZ排除未使用文件的限制）
 *     3. 视频路径不是直接从文件夹选的，而是直接输入了一个路径，传入插件时是
 *        作为一个字符串（这是MZ插件选择文件的限制，只能选图像和音频）
 *     4. 理论上无法与会改变标题场景按钮个数的插件混用，但是只要你不开那些插件
 *        的把按钮添加到标题命令窗口，且把此插件放在那些插件下面，你可以自己
 *        创建那些插件创建的按钮，并在按钮中绑定那些插件点击按钮后使用的脚本
 *     5. 碰到使用问题，如插件兼容性或者bug等问题，请b站私信我：
 *        https://space.bilibili.com/37886049，我看到绝对会回！除非我忙！
 * 
 * 
 * @param titleSet
 * @text 标题设置
 * @desc 选择标题设置方式
 * @type select
 * @option default
 * @option custom 
 * @default default
 * 
 * @param customPictureTitleSprite
 * @text 自定义图像标题精灵
 * @desc 自定义图像标题精灵设置
 * @parent titleSet
 * @type file[]
 * @dir img/
 * @default []
 * 
 * @param customPictureTitleSpriteAnimationSpeed
 * @text 自定义图像标题动画速度
 * @desc 自定义图像标题动画速度设置
 * @parent titleSet
 * @type number
 * @default 1
 * 
 * @param customPictureTitleSpriteLoop
 * @text 自定义图像标题动画循环
 * @desc 是否循环播放自定义图像标题动画
 * @parent titleSet
 * @type boolean
 * @default true
 * 
 * @param customPictureTitleSpriteRect
 * @text 自定义图像标题布局
 * @desc 自定义图像标题布局设置
 * @parent titleSet
 * @type struct<Rect>
 * @default {"x":"0","y":"0","width":"0","height":"0"}
 * 
 * @param backgroundSet
 * @text 背景设置
 * @desc 选择背景设置方式
 * @type select
 * @option default
 * @option custom 
 * @default default
 * 
 * @param customMoviesBackgroundLoop
 * @text 自定义视频背景循环
 * @desc 是否循环播放自定义视频背景
 * @parent backgroundSet
 * @type boolean
 * @default false
 * 
 * @param customMoviesBackgroundPath
 * @text 自定义视频背景路径
 * @desc 自定义视频背景路径设置(视频宽高比和游戏分辨率宽高比需要一致，必须要文件扩展名)
 * @parent backgroundSet
 * @type string
 * @default none
 * 
 * @param titleCommandWindowSet
 * @text 标题命令窗口设置
 * @desc 选择标题命令窗口设置方式
 * @type select
 * @option default
 * @option custom 
 * @default default
 * 
 * @param titleCommandWindowPoint
 * @text 自定义标题命令窗口坐标
 * @desc 自定义标题命令窗口左上角坐标设置
 * @parent titleCommandWindowSet
 * @type struct<Point>
 * @default {"x":"428","y":"364"}
 * 
 * @param titleCommandWindowPadding
 * @text 自定义标题命令窗口内边距
 * @desc 自定义标题命令窗口内边距设置
 * @parent titleCommandWindowSet
 * @type number
 * @default 12
 * 
 * @param titleCommandWindowSkin
 * @text 自定义标题命令窗口皮肤
 * @desc 自定义标题命令窗口皮肤设置
 * @parent titleCommandWindowSet
 * @type file
 * @dir img/system/
 * @default none
 * 
 * @param titleCommandListSet
 * @text 标题命令列表设置
 * @desc 选择标题命令列表设置方式(选custom会取消绘制命令按钮默认黑色矩形背景)
 * @parent titleCommandWindowSet
 * @type select
 * @option default
 * @option custom 
 * @default default
 * 
 * @param drawTitleCommandText
 * @text 绘制命令按钮文本
 * @desc 是否绘制命令按钮文本
 * @parent titleCommandListSet
 * @type boolean
 * @default true
 * 
 * @param titleCommandButtonSize
 * @text 命令按钮尺寸
 * @desc 命令按钮尺寸设置
 * @parent titleCommandListSet
 * @type struct<Size>
 * @default {"width":"208","height":"40"}
 * 
 * @param titleCommandButtonRowSpacing
 * @text 命令按钮行间距
 * @desc 命令按钮行间距设置
 * @parent titleCommandListSet
 * @type number
 * @default 4
 * 
 * @param titleCommandButtonColSpacing
 * @text 命令按钮列间距
 * @desc 命令按钮列间距设置
 * @parent titleCommandListSet
 * @type number
 * @default 8
 * 
 * @param titleCommandButtonCursorSprite
 * @text 命令按钮光标精灵
 * @desc 命令按钮光标精灵设置
 * @parent titleCommandListSet
 * @type file[]
 * @dir img/
 * @default []
 * 
 * @param titleCommandButtonCursorSpriteAnimationSpeed
 * @text 命令按钮光标动画速度
 * @desc 命令按钮光标动画速度设置
 * @parent titleCommandListSet
 * @type number
 * @default 1
 * 
 * @param titleCommandButtonCursorSpriteLoop
 * @text 命令按钮光标动画循环
 * @desc 是否循环播放命令按钮光标动画
 * @parent titleCommandListSet
 * @type boolean
 * @default true
 * 
 * @param titleCommandButtonCursorSpriteRect
 * @text 命令按钮光标布局
 * @desc 命令按钮光标布局设置
 * @parent titleCommandListSet
 * @type struct<Rect>
 * @default {"x":"0","y":"0","width":"0","height":"0"}
 * 
 * @param newGameCommandButtonStyle
 * @text 重新开始命令按钮
 * @desc 重新开始命令按钮设置
 * @parent titleCommandListSet
 * @type struct<OldCommandListCell>
 * @default {"commandName":"重新开始","commandShow":"true","commandSelectBG":"none","commandNoSelectBG":"none"}
 * 
 * @param continueCommandButtonStyle
 * @text 继续游戏命令按钮
 * @desc 继续游戏命令按钮设置
 * @parent titleCommandListSet
 * @type struct<OldCommandListCell>
 * @default {"commandName":"继续游戏","commandShow":"true","commandSelectBG":"none","commandNoSelectBG":"none"}
 * 
 * @param optionsCommandButtonStyle
 * @text 选项命令按钮
 * @desc 选项命令按钮设置
 * @parent titleCommandListSet
 * @type struct<OldCommandListCell>
 * @default {"commandName":"选项","commandShow":"true","commandSelectBG":"none","commandNoSelectBG":"none"}
 * 
 * @param extraCommandList
 * @text 额外标题命令选项列表
 * @desc 添加额外标题命令选项
 * @parent titleCommandListSet
 * @type struct<CommandListCell>[]
 * @default []
 * 
 */

/*~struct~Point:
 * 
 * @param x
 * @text x
 * @desc x坐标
 * @type number
 * @default 0
 * 
 * @param y
 * @text y
 * @desc y坐标
 * @type number
 * @default 0
 * 
 */

/*~struct~Rect:
 * 
 * @param x
 * @text x
 * @desc x坐标
 * @type number
 * @default 0
 * 
 * @param y
 * @text y
 * @desc y坐标
 * @type number
 * @default 0
 * 
 * @param width
 * @text width
 * @desc 宽
 * @type number
 * @min 0
 * @default 0
 * 
 * @param height
 * @text height
 * @desc 高
 * @type number
 * @min 0
 * @default 0
 * 
 */

/*~struct~Size:
 * 
 * @param width
 * @text width
 * @desc 宽
 * @type number
 * @min 0
 * @default 0
 * 
 * @param height
 * @text height
 * @desc 高
 * @type number
 * @min 0
 * @default 0
 * 
 */

/*~struct~OldCommandListCell:
 *
 * @param commandName
 * @text 命令名称
 * @desc 命令名称
 * @type string
 * @default
 * 
 * @param commandShow
 * @text 是否显示命令
 * @desc 是否显示命令
 * @type boolean
 * @default true
 * 
 * @param commandNoSelectBG
 * @text 未被选择时命令的背景图
 * @desc 未被选择时命令的背景图设置
 * @type file
 * @dir img/
 * @default none
 * 
 * @param commandSelectBG
 * @text 被选择时命令的背景图
 * @desc 被选择时命令的背景图设置
 * @type file
 * @dir img/
 * @default none
 * 
 * @param commandDisabledBG
 * @text 未启用命令的背景图
 * @desc 未启用命令的背景图设置
 * @type file
 * @dir img/
 * @default none
 * 
 */
//symbol
/*~struct~CommandListCell:
 *
 * @param commandName
 * @text 命令名称
 * @desc 命令名称
 * @type string
 * @default  
 * 
 * @param commandAction	
 * @text 命令方法
 * @desc 按下命令后执行的代码
 * @type note
 * @default 
 * 
 * @param commandEnable
 * @text 是否启用命令
 * @desc 是否启用命令(选择true即启用命令，或者输入一个开关号，以开关决定是否启用)
 * @type combo
 * @option true
 * @default true
 * 
 * @param commandNoSelectBG
 * @text 未被选择时命令的背景图
 * @desc 未被选择时命令的背景图设置
 * @type file
 * @dir img/
 * @default none
 * 
 * @param commandSelectBG
 * @text 被选择时命令的背景图
 * @desc 被选择时命令的背景图设置
 * @type file
 * @dir img/
 * @default none
 * 
 * @param commandDisabledBG
 * @text 未启用命令的背景图
 * @desc 未启用命令的背景图设置
 * @type file
 * @dir img/
 * @default none
 * 
 */

(() => {

    'use strict';

    const pluginName = "ASCustomTitleScene";
    const parameters = PluginManager.parameters(pluginName);

    const systemDefault = "default";
    const userCustom = "custom";
    
    const defaultFilePath = "none";

    const commandSymbolHead = "commandSymbol";

    const titleSet = parameters.titleSet || systemDefault;
    const customPictureTitleSpriteJsonObject = JSON.parse(parameters.customPictureTitleSprite !== undefined ? parameters.customPictureTitleSprite : "[]");
    const customPictureTitleSpriteAnimationSpeed = Number(parameters.customPictureTitleSpriteAnimationSpeed);
    const customPictureTitleSpriteLoop = parameters.customPictureTitleSpriteLoop !== "false";
    
    const customPictureTitleSpriteRectJsonObject = JSON.parse(parameters.customPictureTitleSpriteRect);
    const customPictureTitleSpriteRect = new Rectangle(Number(customPictureTitleSpriteRectJsonObject.x) || 0, Number(customPictureTitleSpriteRectJsonObject.y) || 0, Number(customPictureTitleSpriteRectJsonObject.width) || 0, Number(customPictureTitleSpriteRectJsonObject.height) || 0);

    const backgroundSet = parameters.backgroundSet || systemDefault;
    const customMoviesBackgroundLoop = parameters.customMoviesBackgroundLoop !== "false";
    const customMoviesBackgroundPath = parameters.customMoviesBackgroundPath || defaultFilePath;

    const titleCommandWindowSet = parameters.titleCommandWindowSet || systemDefault;
    const titleCommandWindowPointJsonObject = JSON.parse(parameters.titleCommandWindowPoint); 
    const titleCommandWindowPoint = new Point(Number(titleCommandWindowPointJsonObject.x) || 0, Number(titleCommandWindowPointJsonObject.y) || 0);
    const titleCommandWindowPadding = Number(parameters.titleCommandWindowPadding);
    const titleCommandWindowSkin = parameters.titleCommandWindowSkin || defaultFilePath;


    const titleCommandListSet = parameters.titleCommandListSet || systemDefault;
    const drawTitleCommandText = parameters.drawTitleCommandText !== "false";
    const titleCommandButtonSizeJsonObject = JSON.parse(parameters.titleCommandButtonSize);
    const titleCommandButtonSize = {
        width: Number(titleCommandButtonSizeJsonObject.width) || 0,
        height: Number(titleCommandButtonSizeJsonObject.height) || 0,
    };
    const titleCommandButtonRowSpacing = Number(parameters.titleCommandButtonRowSpacing);
    const titleCommandButtonColSpacing = Number(parameters.titleCommandButtonColSpacing);
    const titleCommandButtonCursorSpriteJsonObject = JSON.parse(parameters.titleCommandButtonCursorSprite !== undefined ? parameters.titleCommandButtonCursorSprite : "[]");
    const titleCommandButtonCursorSpriteAnimationSpeed = Number(parameters.titleCommandButtonCursorSpriteAnimationSpeed);
    const titleCommandButtonCursorSpriteLoop = parameters.titleCommandButtonCursorSpriteLoop !== "false";
    
    const titleCommandButtonCursorSpriteRectJsonObject = JSON.parse(parameters.titleCommandButtonCursorSpriteRect);
    const titleCommandButtonCursorSpriteRect = new Rectangle(Number(titleCommandButtonCursorSpriteRectJsonObject.x) || 0, Number(titleCommandButtonCursorSpriteRectJsonObject.y) || 0, Number(titleCommandButtonCursorSpriteRectJsonObject.width) || 0, Number(titleCommandButtonCursorSpriteRectJsonObject.height) || 0);
    const newGameCommandButtonStyleJsonObject = JSON.parse(parameters.newGameCommandButtonStyle);
    const continueCommandButtonStyleJsonObject = JSON.parse(parameters.continueCommandButtonStyle);
    const optionsCommandButtonStyleJsonObject = JSON.parse(parameters.optionsCommandButtonStyle);

    const extraCommandListJsonObject = JSON.parse(parameters.extraCommandList !== undefined ? parameters.extraCommandList : "[]");
    
    let titleCommandButtonBGArray = [];
    
    //动画标题部分
    const _Create_Foreground = Scene_Title.prototype.createForeground;
    Scene_Title.prototype.createForeground = function() {
        _Create_Foreground.apply(this, arguments);

        if (titleSet === userCustom && customPictureTitleSpriteJsonObject.length !== 0) {

            this.removeChild(this._gameTitleSprite);

            if (customPictureTitleSpriteJsonObject.length === 1) {
                this.pictureTitleSprite = new Sprite(ImageManager.loadBitmap("img/", customPictureTitleSpriteJsonObject[0]));
                this.pictureTitleSprite.width = customPictureTitleSpriteRect.width;
                this.pictureTitleSprite.height = customPictureTitleSpriteRect.height;
                this.pictureTitleSprite.move(customPictureTitleSpriteRect.x, customPictureTitleSpriteRect.y);
                this.addChild(this.pictureTitleSprite);
            } else {
                const customPictureTitleSpritePathArray = [];
                for (const image of customPictureTitleSpriteJsonObject) {
                    customPictureTitleSpritePathArray.push("img/" + image + ".png")
                }
                const animatedSprite = new PIXI.AnimatedSprite.fromImages(customPictureTitleSpritePathArray);
                animatedSprite.animationSpeed = customPictureTitleSpriteAnimationSpeed / 10.0;
                animatedSprite.loop = customPictureTitleSpriteLoop;
                animatedSprite.x = customPictureTitleSpriteRect.x;
                animatedSprite.y = customPictureTitleSpriteRect.y;
                animatedSprite.width = customPictureTitleSpriteRect.width;
                animatedSprite.height = customPictureTitleSpriteRect.height;
                animatedSprite.onFrameChange = function() {
                    if (this.x !== customPictureTitleSpriteRect.x || this.y !== customPictureTitleSpriteRect.y || this.width !== customPictureTitleSpriteRect.width || this.height !== customPictureTitleSpriteRect.height) {
                        this.x = customPictureTitleSpriteRect.x;
                        this.y = customPictureTitleSpriteRect.y;
                        this.width = customPictureTitleSpriteRect.width;
                        this.height = customPictureTitleSpriteRect.height;
                    }
                }
                animatedSprite.gotoAndPlay(0);
                
                const animatedSpriteContainer = new PIXI.Container();
                animatedSpriteContainer.addChild(animatedSprite);
                
                this.addChild(animatedSpriteContainer);
            }

        }

    };

    //标题视频背景部分
    const _Create_Background = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function() {
        _Create_Background.apply(this, arguments);
        PIXI.utils.clearTextureCache();
        //console.log("-------------------------------Scene_Title.prototype.createBackground--------------------------")
        //img/titles1/loopTitle.mp4
        if (backgroundSet === userCustom && customMoviesBackgroundPath !== defaultFilePath) {

            this.removeChild(this._backSprite1);
            this.removeChild(this._backSprite2);

            const bg = PIXI.Texture.from(customMoviesBackgroundPath);
            const video = bg.baseTexture.resource.source;
            video.loop = customMoviesBackgroundLoop;
            video.preload = 'auto';
            const videoSprite = new PIXI.Sprite(bg);
            videoSprite.width = Graphics.width;
            videoSprite.height = Graphics.height;
            this.addChild(videoSprite);
        }

    };

    //标题命令框按钮绑定部分
    Scene_Title.prototype.commandActionBind = function(commandAction) {
        eval(JSON.parse(commandAction));
        this._commandWindow.activate();
    }

    const _Create_Command_Window = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Create_Command_Window.apply(this, arguments);

        if (titleCommandWindowSet === userCustom) {

            this._commandWindow._padding = titleCommandWindowPadding;
            this._commandWindow.windowskin = titleCommandWindowSkin === defaultFilePath ? ImageManager.loadSystem("Window") : ImageManager.loadSystem(titleCommandWindowSkin);

            for (const index in extraCommandListJsonObject) {
                const commandJsonObject = JSON.parse(extraCommandListJsonObject[index]);
                const commandSymbol = commandSymbolHead + index.toString();
                if (commandJsonObject.commandAction) {
                    this._commandWindow.setHandler(commandSymbol, this.commandActionBind.bind(this, commandJsonObject.commandAction));
                }
            };
        }

    };

    //标题命令框部分
    const _Window_Title_Command_Item_Width = Window_TitleCommand.prototype.itemWidth;
    Window_TitleCommand.prototype.itemWidth = function() {
        let width = _Window_Title_Command_Item_Width.apply(this, arguments);
        return titleCommandListSet === userCustom ? titleCommandButtonSize.width + this.colSpacing() : width;
    }

    const _Window_Title_Command_Item_Height = Window_TitleCommand.prototype.itemHeight;
    Window_TitleCommand.prototype.itemHeight = function() {
        let height = _Window_Title_Command_Item_Height.apply(this, arguments);
        return titleCommandListSet === userCustom ? titleCommandButtonSize.height + this.rowSpacing() : height;
    }

    const _Window_Title_Command_ColSpacing = Window_TitleCommand.prototype.colSpacing;
    Window_TitleCommand.prototype.colSpacing = function() {
        let colSpacing = _Window_Title_Command_ColSpacing.apply(this, arguments);
        return titleCommandListSet === userCustom ? titleCommandButtonColSpacing : colSpacing;
    }

    const _Window_Title_Command_RowSpacing = Window_TitleCommand.prototype.rowSpacing;
    Window_TitleCommand.prototype.rowSpacing = function() {
        let rowSpacing = _Window_Title_Command_RowSpacing.apply(this, arguments);
        return titleCommandListSet === userCustom ? titleCommandButtonRowSpacing : rowSpacing;
    }

    const _Window_Title_Command_Make_Command_List = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        //console.log("------------------makeCommandList----------------------")
        _Window_Title_Command_Make_Command_List.apply(this, arguments);

        if (titleCommandListSet === userCustom) {

            titleCommandButtonBGArray = [];
            this.clearCommandList();
            const continueEnabled = this.isContinueEnabled();
            //把原本有的增加到command数组

            if (newGameCommandButtonStyleJsonObject.commandShow === "true") {
                this.addCommand(newGameCommandButtonStyleJsonObject.commandName, "newGame");
                titleCommandButtonBGArray.push({
                    noSelectBG: newGameCommandButtonStyleJsonObject.commandNoSelectBG,
                    selectBG: newGameCommandButtonStyleJsonObject.commandSelectBG,
                    disabledBG: newGameCommandButtonStyleJsonObject.commandDisabledBG
                });
            }

            if (continueCommandButtonStyleJsonObject.commandShow === "true") {
                this.addCommand(continueCommandButtonStyleJsonObject.commandName, "continue", continueEnabled);
                titleCommandButtonBGArray.push({
                    noSelectBG: continueCommandButtonStyleJsonObject.commandNoSelectBG,
                    selectBG: continueCommandButtonStyleJsonObject.commandSelectBG,
                    disabledBG: continueCommandButtonStyleJsonObject.commandDisabledBG
                });
            }
            
            if (optionsCommandButtonStyleJsonObject.commandShow === "true") {
                this.addCommand(optionsCommandButtonStyleJsonObject.commandName, "options");
                titleCommandButtonBGArray.push({
                    noSelectBG: optionsCommandButtonStyleJsonObject.commandNoSelectBG,
                    selectBG: optionsCommandButtonStyleJsonObject.commandSelectBG,
                    disabledBG: optionsCommandButtonStyleJsonObject.commandDisabledBG
                });
            }
            
            for (const index in extraCommandListJsonObject) {
                const commandJsonObject = JSON.parse(extraCommandListJsonObject[index]);
                //console.log("commandJsonObject: ", commandJsonObject)
                const commandName = commandJsonObject.commandName;
                const commandSymbol = commandSymbolHead + index.toString();
                let commandEnable = false;
                if (commandJsonObject.commandEnable === "true") {
                    commandEnable = true;
                } else {
                    const switcheNumber = Number(commandJsonObject.commandEnable) || 0;
                    commandEnable = switcheNumber === 0 ? false : $gameSwitches.value(switcheNumber);
                }
                this.addCommand(commandName, commandSymbol, commandEnable);
                titleCommandButtonBGArray.push({
                    noSelectBG: commandJsonObject.commandNoSelectBG,
                    selectBG: commandJsonObject.commandSelectBG,
                    disabledBG: commandJsonObject.commandDisabledBG
                });     
            }

            this.move(titleCommandWindowPoint.x, titleCommandWindowPoint.y, titleCommandButtonSize.width + 2 * titleCommandWindowPadding + titleCommandButtonColSpacing, titleCommandButtonSize.height * titleCommandButtonBGArray.length + 2 * titleCommandWindowPadding + titleCommandButtonRowSpacing * titleCommandButtonBGArray.length);
            this.contentsBack.resize(titleCommandButtonSize.width + 2 * titleCommandWindowPadding + titleCommandButtonColSpacing, titleCommandButtonSize.height * titleCommandButtonBGArray.length + 2 * titleCommandWindowPadding + titleCommandButtonRowSpacing * titleCommandButtonBGArray.length);

        }
        
    };

    const _Window_Title_Command_Draw_Item = Window_TitleCommand.prototype.drawItem;
    Window_TitleCommand.prototype.drawItem = function(index) {
        _Window_Title_Command_Draw_Item.apply(this, arguments);
        if (titleCommandListSet === userCustom && drawTitleCommandText === false) {
            this.contents.clear();
        }
    }

    const _Draw_Item_Background = Window_TitleCommand.prototype.drawItemBackground;
    Window_TitleCommand.prototype.drawItemBackground = function(index) {
        _Draw_Item_Background.apply(this, arguments);

        if (titleCommandListSet === userCustom) {
            const rect = this.itemRect(index);
            // console.log("index: ", index)
            // console.log("drawItemBackground -------------- rect: ", rect)
            // console.log("titleCommandButtonBGArray: ", titleCommandButtonBGArray)
            this.contentsBack.clearRect(rect.x - 1, rect.y - 1, rect.width + 2, rect.height + 2);
            // console.log("this._list[index].enabled: ", this._list[index].enabled)

            redrawItemBackground(this._list[index].enabled === false ? titleCommandButtonBGArray[index].disabledBG : titleCommandButtonBGArray[index].noSelectBG, rect, this.contentsBack);

        }
        
    }

    const redrawItemBackground = function(imagePath, drawRect, contentsBack) {
        if (imagePath !== defaultFilePath) {
            const bitmap = ImageManager.loadBitmap("img/", imagePath);
            bitmap.addLoadListener(() => {
                contentsBack.clearRect(drawRect.x, drawRect.y, drawRect.width, drawRect.height);
                contentsBack.blt(bitmap, 0, 0, drawRect.width, drawRect.height, drawRect.x, drawRect.y, drawRect.width, drawRect.height);
            });
        }
    }

    const _Window_Title_Command_Select = Window_TitleCommand.prototype.select;
    Window_TitleCommand.prototype.select = function(index) {

        let last = this.index();
        const lastRect = this.itemRect(last);
        _Window_Title_Command_Select.apply(this, arguments);
        let current = this.index();
        const currentRect = this.itemRect(current);

        if (titleCommandListSet === userCustom) {
            if (last !== current) {
                // console.log("last: ", last)
                // console.log("current: ", current)
                if (titleCommandButtonBGArray.length !== 0) {
                    if (last === -1) {
                        if (current !== -1) {
                            redrawItemBackground(this._list[current].enabled === false ? titleCommandButtonBGArray[current].disabledBG : titleCommandButtonBGArray[current].selectBG, currentRect, this.contentsBack);
                        }
                    } else {
                        redrawItemBackground(this._list[last].enabled === false ? titleCommandButtonBGArray[last].disabledBG : titleCommandButtonBGArray[last].noSelectBG, lastRect, this.contentsBack);
                        redrawItemBackground(this._list[current].enabled === false ? titleCommandButtonBGArray[current].disabledBG : titleCommandButtonBGArray[current].selectBG, currentRect, this.contentsBack);
                    }
                }
            }
        }
        
    }

    //标题命令框光标部分
    const _Window_Title_Command_Create_Cursor_Sprite = Window_TitleCommand.prototype._createCursorSprite;
    Window_TitleCommand.prototype._createCursorSprite = function() {
        _Window_Title_Command_Create_Cursor_Sprite.apply(this, arguments);
        
        if (titleCommandListSet === userCustom && titleCommandButtonCursorSpriteJsonObject.length !== 0) {
            if (titleCommandButtonCursorSpriteJsonObject.length === 1) {
                this._cursorSprite = new Sprite();
                this._cursorSprite.addChild(new Sprite());
                this._cursorSprite.children[0].bitmap = ImageManager.loadBitmap("img/", titleCommandButtonCursorSpriteJsonObject[0]);
                this._cursorSprite.children[0].setFrame(titleCommandButtonCursorSpriteRect.x, titleCommandButtonCursorSpriteRect.y, titleCommandButtonCursorSpriteRect.width, titleCommandButtonCursorSpriteRect.height);
                this._clientArea.addChild(this._cursorSprite)
            } else {
                this._cursorSprite = new Sprite();

                const titleCommandButtonCursorSpritePathArray = [];
                for (const image of titleCommandButtonCursorSpriteJsonObject) {
                    //console.log("image: ", "img/" + image + ".png")
                    titleCommandButtonCursorSpritePathArray.push("img/" + image + ".png")
                }
                const animatedSprite = new PIXI.AnimatedSprite.fromImages(titleCommandButtonCursorSpritePathArray);
                animatedSprite.animationSpeed = titleCommandButtonCursorSpriteAnimationSpeed / 10.0;
                animatedSprite.loop = titleCommandButtonCursorSpriteLoop;
                animatedSprite.x = titleCommandButtonCursorSpriteRect.x;
                animatedSprite.y = titleCommandButtonCursorSpriteRect.y;
                animatedSprite.width = titleCommandButtonCursorSpriteRect.width;
                animatedSprite.height = titleCommandButtonCursorSpriteRect.height;
                animatedSprite.onFrameChange = function() {
                    if (this.x !== titleCommandButtonCursorSpriteRect.x || this.y !== titleCommandButtonCursorSpriteRect.y || this.width !== titleCommandButtonCursorSpriteRect.width || this.height !== titleCommandButtonCursorSpriteRect.height) {
                        this.x = titleCommandButtonCursorSpriteRect.x;
                        this.y = titleCommandButtonCursorSpriteRect.y;
                        this.width = titleCommandButtonCursorSpriteRect.width;
                        this.height = titleCommandButtonCursorSpriteRect.height;
                    }
                }
                animatedSprite.gotoAndPlay(0);
                
                const animatedSpriteContainer = new PIXI.Container();
                animatedSpriteContainer.addChild(animatedSprite);
                
                this._cursorSprite.addChild(animatedSpriteContainer);
                this._clientArea.addChild(this._cursorSprite);
               
            }
        }
       
    }

    const _Window_Title_Command_Update_Cursor = Window_TitleCommand.prototype._updateCursor;
    Window_TitleCommand.prototype._updateCursor = function() {
        if(titleCommandListSet === userCustom && titleCommandButtonCursorSpriteJsonObject.length !== 0) {
            this._cursorSprite.visible = this.isOpen() && this.cursorVisible;
            this._cursorSprite.x = this._cursorRect.x;
            this._cursorSprite.y = this._cursorRect.y;
        } else {
            _Window_Title_Command_Update_Cursor.apply(this, arguments);
        }
    }

    const _Window_Title_Command_Refresh_Cursor = Window_TitleCommand.prototype._refreshCursor;
    Window_TitleCommand.prototype._refreshCursor = function() {
        if(titleCommandListSet === userCustom && titleCommandButtonCursorSpriteJsonObject.length !== 0) {

        } else {
            _Window_Title_Command_Refresh_Cursor.apply(this, arguments);
        }
    }

})();