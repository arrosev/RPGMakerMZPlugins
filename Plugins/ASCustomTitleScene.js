/*:
 * @target MZ
 * @plugindesc 【V1.0.0】 自定义标题场景
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * pixi宣称是支持['mp4', 'm4v', 'webm', 'ogg', 'ogv', 'h264', 'avi', 'mov']，
 * 但是暂时只测试了mp4和webm是可以的
 * 如有使用了会改变标题场景按钮个数的插件，请把此插件放在那个插件的上面
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
 * @param customPictureTitlePoint
 * @text 自定义图像标题坐标
 * @desc 自定义图像标题左上角坐标设置
 * @parent titleSet
 * @default {"x":"0","y":"0"}
 * @type struct<Point>
 * 
 * @param customPictureTitlePath
 * @text 自定义图像标题路径
 * @desc 自定义图像标题路径设置（仅支持png格式）
 * @parent titleSet
 * @type file
 * @dir img/
 * @default none
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
 * @default false
 * @type boolean
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
 * @param titleCommandWindowRect
 * @text 自定义标题命令窗口布局
 * @desc 自定义标题命令窗口布局设置
 * @parent titleCommandWindowSet
 * @default {"x":"428","y":"364","width":"240","height":"156"}
 * @type struct<Rect>
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
 * @desc 自定义标题命令窗口皮肤设置（仅支持png格式）
 * @parent titleCommandWindowSet
 * @type file
 * @dir img/system/
 * @default none
 * 
 * @param titleCommandListSet
 * @text 标题命令列表设置
 * @desc 选择标题命令列表设置方式
 * @parent titleCommandWindowSet
 * @type select
 * @option default
 * @option custom 
 * @default default
 * 
 * @param drawTitleCommandBackground
 * @text 绘制命令按钮默认背景
 * @desc 是否绘制命令按钮默认背景
 * @parent titleCommandListSet
 * @default true
 * @type boolean
 * 
 * @param titleCommandButtonSize
 * @text 命令按钮尺寸
 * @desc 命令按钮尺寸设置
 * @parent titleCommandListSet
 * @default {"width":"216","height":"44"}
 * @type struct<Size>
 * 
 * @param titleCommandButtonRowSpacing
 * @text 命令按钮行间距
 * @desc 命令按钮行间距设置
 * @parent titleCommandListSet
 * @type number
 * @default 4
 * 
 * @param newGameCommandButtonStyle
 * @text 重新开始命令按钮
 * @desc 重新开始命令按钮设置
 * @parent titleCommandListSet
 * @type struct<OldCommandListCell>
 * @default {"commandName":"","commandSelectBG":"none","commandNoSelectBG":"none"}
 * 
 * @param continueCommandButtonStyle
 * @text 继续游戏命令按钮
 * @desc 继续游戏命令按钮设置
 * @parent titleCommandListSet
 * @type struct<OldCommandListCell>
 * @default {"commandName":"","commandSelectBG":"none","commandNoSelectBG":"none"}
 * 
 * @param optionsCommandButtonStyle
 * @text 选项命令按钮
 * @desc 选项命令按钮设置
 * @parent titleCommandListSet
 * @type struct<OldCommandListCell>
 * @default {"commandName":"","commandSelectBG":"none","commandNoSelectBG":"none"}
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
 * @default 
 * @type string
 * 
 * @param commandSelectBG
 * @text 被选择时命令的背景图
 * @desc 被选择时命令的背景图设置
 * @type file
 * @dir img/
 * @default none
 * 
 * @param commandNoSelectBG
 * @text 未被选择时命令的背景图
 * @desc 未被选择时命令的背景图设置
 * @type file
 * @dir img/
 * @default none
 * 
 */

/*~struct~CommandListCell:
 *
 * @param commandName
 * @text 命令名称
 * @desc 命令名称
 * @default 
 * @type string
 * 
 * @param commandEnable
 * @text 能否点击
 * @desc 命令能否点击(选择true即命令可点击，或者输入一个开关号，以开关决定可否点击)
 * @type combo
 * @option true
 * @default true
 * 
 * @param commandSelectBG
 * @text 被选择时命令的背景图
 * @desc 被选择时命令的背景图设置
 * @type file
 * @dir img/
 * @default none
 * 
 * @param commandNoSelectBG
 * @text 未被选择时命令的背景图
 * @desc 未被选择时命令的背景图设置
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

    const titleSet = parameters.titleSet || systemDefault;
    //console.log("titleSet: ", titleSet);

    //console.log("parameters.customPictureTitlePoint: ", parameters.customPictureTitlePoint)
    const customPictureTitlePointJsonObject = JSON.parse(parameters.customPictureTitlePoint);
    const customPictureTitlePoint = new Point(Number(customPictureTitlePointJsonObject.x) || 0, Number(customPictureTitlePointJsonObject.y) || 0);
    const customPictureTitlePath = parameters.customPictureTitlePath || defaultFilePath;

    const backgroundSet = parameters.backgroundSet || systemDefault;
    const customMoviesBackgroundLoop = parameters.customMoviesBackgroundLoop !== "false";
    const customMoviesBackgroundPath = parameters.customMoviesBackgroundPath || defaultFilePath;

    const titleCommandWindowSet = parameters.titleCommandWindowSet || systemDefault;
    const titleCommandWindowRectJsonObject = JSON.parse(parameters.titleCommandWindowRect);
    const titleCommandWindowRect = new Rectangle(Number(titleCommandWindowRectJsonObject.x) || 0, Number(titleCommandWindowRectJsonObject.y) || 0, Number(titleCommandWindowRectJsonObject.width) || 0, Number(titleCommandWindowRectJsonObject.height) || 0);
    const titleCommandWindowPadding = Number(parameters.titleCommandWindowPadding);
    const titleCommandWindowSkin = parameters.titleCommandWindowSkin || defaultFilePath;


    const titleCommandListSet = parameters.titleCommandListSet || systemDefault;
    const drawTitleCommandBackground = parameters.drawTitleCommandBackground !== "false";
    const titleCommandButtonSizeJsonObject = JSON.parse(parameters.titleCommandButtonSize);
    const titleCommandButtonSize = {
        width: Number(titleCommandButtonSizeJsonObject.width) || 0,
        height: Number(titleCommandButtonSizeJsonObject.height) || 0,
    };
    const titleCommandButtonRowSpacing = Number(parameters.titleCommandButtonRowSpacing);
    const newGameCommandButtonStyleJsonObject = JSON.parse(parameters.newGameCommandButtonStyle);
    //console.log("newGameCommandButtonStyleJsonObject: ", newGameCommandButtonStyleJsonObject)
    const continueCommandButtonStyleJsonObject = JSON.parse(parameters.continueCommandButtonStyle);
    const optionsCommandButtonStyleJsonObject = JSON.parse(parameters.optionsCommandButtonStyle);
    
    
    const _Create_Foreground = Scene_Title.prototype.createForeground;
    Scene_Title.prototype.createForeground = function() {
        _Create_Foreground.apply(this, arguments);

        if(titleSet === userCustom && customPictureTitlePath !== defaultFilePath) {

            this.removeChild(this._gameTitleSprite);

            this.pictureTitleSprite = new Sprite(ImageManager.loadBitmap("img/", customPictureTitlePath));
            this.pictureTitleSprite.move(customPictureTitlePoint.x, customPictureTitlePoint.y);
            //this.pictureTitleSprite.move(customPictureTitleRect.x, customPictureTitleRect.y, customPictureTitleRect.width, customPictureTitleRect.height);
            this.addChild(this.pictureTitleSprite);

        }

    };

    const _Create_Background = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function() {
        _Create_Background.apply(this, arguments);
       
        //img/titles1/loopTitle.mp4
        if(backgroundSet === userCustom && customMoviesBackgroundPath !== defaultFilePath) {

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


    const _Command_Window_Rect = Scene_Title.prototype.commandWindowRect;
    Scene_Title.prototype.commandWindowRect = function() {
        let rect = _Command_Window_Rect.apply(this, arguments);
        return titleCommandWindowSet === userCustom ? titleCommandWindowRect : rect;
    };

    const _Create_Command_Window = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Create_Command_Window.apply(this, arguments);

        if (titleCommandWindowSet === userCustom) {
            this._commandWindow._padding = titleCommandWindowPadding;
            this._commandWindow.windowskin = titleCommandWindowSkin === defaultFilePath ? ImageManager.loadSystem("Window") : ImageManager.loadSystem(titleCommandWindowSkin);
        }

        console.log("this._commandWindow: ", this._commandWindow)
        console.log("this._commandWindow itemwidth: ", this._commandWindow.itemWidth())
        console.log("this._commandWindow itemwidth: ", this._commandWindow.itemHeight())
    };



    const _Window_Title_Command_Initialize = Window_TitleCommand.prototype.initialize;
    Window_TitleCommand.prototype.initialize = function (rect) {
        _Window_Title_Command_Initialize.apply(this, arguments);

        // this.noSelectSprite = new Sprite(ImageManager.loadBitmap("img/", newGameCommandButtonStyleJsonObject.commandSelectBG));

        // this.addChildToBack(this.noSelectSprite)

        // if (titleCommandListSet === userCustom && drawTitleCommandBackground === false) {
        //     this.contentsBack = null;
        // }
    };

    const _Window_Title_Command_Item_Width = Window_TitleCommand.prototype.itemWidth;
    Window_TitleCommand.prototype.itemWidth = function() {
        let width = _Window_Title_Command_Item_Width.apply(this, arguments);
        return titleCommandListSet === userCustom ? titleCommandButtonSize.width : width;
    }

    const _Window_Title_Command_Item_Height = Window_TitleCommand.prototype.itemHeight;
    Window_TitleCommand.prototype.itemHeight = function() {
        let height = _Window_Title_Command_Item_Height.apply(this, arguments);
        return titleCommandListSet === userCustom ? titleCommandButtonSize.height : height;
    }

    const _Window_Title_Command_Button_Row_Spacing = Window_TitleCommand.prototype.rowSpacing;
    Window_TitleCommand.prototype.rowSpacing = function() {
        let rowSpacing = _Window_Title_Command_Button_Row_Spacing.apply(this, arguments);
        return titleCommandListSet === userCustom ? titleCommandButtonRowSpacing : rowSpacing;
    }

    const _Window_Title_Command_Make_Command_List = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {

        _Window_Title_Command_Make_Command_List.apply(this, arguments);

        if(titleCommandListSet === userCustom) {
            this.clearCommandList();
            const continueEnabled = this.isContinueEnabled();
            //把原本有的增加到command数组
            this.addCommand(newGameCommandButtonStyleJsonObject.commandName, "newGame");
            this.addCommand(continueCommandButtonStyleJsonObject.commandName, "continue", continueEnabled);
            this.addCommand(optionsCommandButtonStyleJsonObject.commandName, "options");
        }
        
        
    };

    const _Window_Title_Command_Draw_Item = Window_TitleCommand.prototype.drawItem;
    Window_TitleCommand.prototype.drawItem = function(index) {
        _Window_Title_Command_Draw_Item.apply(this, arguments);
        console.log(this.contents)
        console.log("contentsBack: ", this.contentsBack)
        const bitmap = ImageManager.loadBitmap("img/", newGameCommandButtonStyleJsonObject.commandSelectBG)
        const rect = this.itemLineRect(index);
        console.log(rect)
        bitmap.addLoadListener(() => {
            //titleCommandButtonSize
            this.contents.blt(bitmap, 0, 0, titleCommandButtonSize.width, titleCommandButtonSize.height, 0, rect.y, titleCommandButtonSize.width, titleCommandButtonSize.height)
            // this.contents.blt(bitmap, 0, 0, titleCommandButtonSize.width, titleCommandButtonSize.height, 0, rect.y, titleCommandButtonSize.width, titleCommandButtonSize.height)
            //this.contents.blt(bitmap, 0, 0, rect.width, rect.height, 0, rect.y, rect.width, rect.height)
            // this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, this.contents.width, this.contents.height)
        })
    }
    
    // Window_TitleCommand.prototype.colSpacing = function() {
    //     return 0
    // }

    // Window_TitleCommand.prototype.rowSpacing = function() {
    //     return 0
    // }

    
    // const _Draw_Background_Rect = Window_TitleCommand.prototype.drawBackgroundRect;
    // Window_TitleCommand.prototype.drawBackgroundRect = function(rect) {
    //     _Draw_Background_Rect.apply(this, arguments);
    //     console.log("rect: ", rect)
    // }

    // const _Initialize = Window_TitleCommand.prototype.initialize;
    // Window_TitleCommand.prototype.initialize = function(rect) {
    //     _Initialize.apply(this, arguments);
    //     this.contentsBack = null;
    // };

    // const _Draw_Item_Background = Window_TitleCommand.prototype.drawItemBackground;
    // Window_TitleCommand.prototype.drawItemBackground = function() {
    //     // _Draw_Item_Background.apply(this, arguments);
    //     // this.drawBackgroundRect(new Rectangle(0, 0, 0, 0));
    // }

    // Scene_Title.prototype.mainCommandWidth = function() {
    //     return 180;
    // }

})();