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
 * @default {"x":"0","y":"0","width":"0","height":"0"}
 * @type struct<Rect>
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
 * @param newGameCommandButton
 * @text 新游戏命令按钮样式
 * @desc 新游戏命令按钮样式设置
 * @parent titleCommandListSet
 * @type struct<OldCommandListCell>
 * @default 
 * 
 * 
 * 
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

/*~struct~OldCommandListCell:
 *
 * @param commandName
 * @text 命令名
 * @desc 命令名
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
    console.log("titleCommandWindowRect: ", titleCommandWindowRect);
    const titleCommandWindowSkin = parameters.titleCommandWindowSkin || defaultFilePath;
    
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
            
            this._commandWindow.windowskin = titleCommandWindowSkin === defaultFilePath ? ImageManager.loadSystem("Window") : ImageManager.loadSystem(titleCommandWindowSkin);

        }

    };

    // Scene_Title.prototype.mainCommandWidth = function() {
    //     return 180;
    // }

})();