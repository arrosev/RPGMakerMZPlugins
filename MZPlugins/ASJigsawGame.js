/*:
 * @target MZ
 * @plugindesc 【V1.0.1】拼图小游戏
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 这个插件以MIT协议发布
 * 这个插件用于拼图小游戏
 * 
 *  【V1.0.0】
 *     1. 实现拼图小游戏
 * 
 *  【V1.0.1】
 *     1. 添加对其他修改了返回按钮的插件的兼容
 * 
 *    注意：
 *     1. 拼图成功之后会回到地图，执行的公共事件只会在回到地图页面后执行
 *     2. 拼图游戏窗口的大小取决于拼图游戏窗口单图块尺寸，
 *        宽 = (单图块宽 + 图块列间距) * 列数 + 拼图游戏窗口内边距 * 2.0
 *        高 = (单图块高 + 图块行间距) * 行数 + 拼图游戏窗口内边距 * 2.0
 * 
 * 
 * @command openJigsawGame
 * @text Open Jigsaw Game
 * @desc 打开拼图游戏
 * 
 * @arg previewWindow
 * @text 预览窗口
 * @desc 预览窗口设置
 * @type string
 * @default
 * 
 * @arg previewWindowSkin
 * @text 预览窗口皮肤
 * @desc 预览窗口皮肤设置
 * @parent previewWindow
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @arg previewWindowRect
 * @text 预览窗口位置大小
 * @desc 预览窗口位置大小设置
 * @parent previewWindow
 * @type struct<Rect>
 * @default {"x":"0","y":"0","width":"0","height":"0"}
 * 
 * @arg previewWindowPadding
 * @text 预览窗口内边距
 * @desc 预览窗口内边距设置
 * @parent previewWindow
 * @type number
 * @default 12
 * 
 * @arg isShowPreviewWindow
 * @text 是否显示预览窗口
 * @desc 是否显示预览窗口设置
 * @parent previewWindow
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @default true
 * 
 * @arg previewWindowImage
 * @text 预览窗口图片
 * @desc 预览窗口图片设置
 * @parent previewWindow
 * @type file
 * @dir img/
 * @default
 * 
 * @arg jigsawGameCommandWindow
 * @text 拼图游戏窗口
 * @desc 拼图游戏窗口设置
 * @type string
 * @default
 * 
 * @arg jigsawGameCommandWindowWindowSkin
 * @text 拼图游戏窗口皮肤
 * @desc 拼图游戏窗口皮肤设置
 * @parent jigsawGameCommandWindow
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @arg jigsawGameCommandWindowPoint
 * @text 拼图游戏窗口坐标
 * @desc 拼图游戏窗口坐标设置
 * @parent jigsawGameCommandWindow
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @arg jigsawGameCommandWindowImageSize
 * @text 拼图游戏窗口单图块尺寸
 * @desc 拼图游戏窗口单图块尺寸设置
 * @parent jigsawGameCommandWindow
 * @type struct<Size>
 * @default {"width":"0","height":"0"}
 * 
 * @arg jigsawGameCommandWindowPadding
 * @text 拼图游戏窗口内边距
 * @desc 拼图游戏窗口内边距设置
 * @parent jigsawGameCommandWindow
 * @type number
 * @default 12
 * 
 * @arg jigsawGameCommandWindowImageRowSpacing
 * @text 拼图游戏窗口按钮行间距
 * @desc 拼图游戏窗口按钮行间距设置
 * @parent jigsawGameCommandWindow
 * @type number
 * @default 4
 * 
 * @arg jigsawGameCommandWindowImageColSpacing
 * @text 拼图游戏窗口按钮列间距
 * @desc 拼图游戏窗口按钮列间距设置
 * @parent jigsawGameCommandWindow
 * @type number
 * @default 4
 * 
 * @arg jigsawGameCommandWindowMaxCols
 * @text 拼图游戏窗口最大列数
 * @desc 拼图游戏窗口最大列数设置
 * @parent jigsawGameCommandWindow
 * @type number
 * @min 1
 * @default 1
 * 
 * @arg isShowCancelButton
 * @text 是否显示返回按钮
 * @desc 是否显示返回按钮设置
 * @parent jigsawGameCommandWindow
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @default true
 * 
 * @arg chooseImageCellTips
 * @text 被选中图块的提示图
 * @desc 被选中图块的提示图设置
 * @parent jigsawGameCommandWindow
 * @type file
 * @dir img/
 * @default
 * 
 * @arg exchangeImageCellTips
 * @text 可交换图块的提示图
 * @desc 可交换图块的提示图设置
 * @parent jigsawGameCommandWindow
 * @type file
 * @dir img/
 * @default
 * 
 * @arg jigsawGameImageCellList
 * @text 拼图游戏图片图块列表
 * @desc 拼图游戏图片图块列表设置
 * @parent jigsawGameCommandWindow
 * @type struct<ImageCell>[]
 * @default []
 * 
 * @arg commonEventAfterSuccess
 * @text 拼图成功之后执行的公共事件
 * @desc 拼图成功之后回到地图执行的公共事件设置
 * @parent jigsawGameCommandWindow
 * @type common_event
 * @default 0
 * 
 * 
 */

/*~struct~Point:
 * 
 * @param x
 * @text x坐标
 * @desc x坐标
 * @type number
 * @default 0
 * 
 * @param y
 * @text y坐标
 * @desc y坐标
 * @type number
 * @default 0
 * 
 */

/*~struct~Size:
 * 
 * @param width
 * @text 宽
 * @desc 宽
 * @type number
 * @min 0
 * @default 0
 * 
 * @param height
 * @text 高
 * @desc 高
 * @type number
 * @min 0
 * @default 0
 * 
 */

/*~struct~Rect:
 * 
 * @param x
 * @text x坐标
 * @desc x坐标
 * @type number
 * @default 0
 * 
 * @param y
 * @text y坐标
 * @desc y坐标
 * @type number
 * @default 0
 * 
 * @param width
 * @text 宽
 * @desc 宽
 * @type number
 * @min 0
 * @default 0
 * 
 * @param height
 * @text 高
 * @desc 高
 * @type number
 * @min 0
 * @default 0
 * 
 */

/*~struct~ImageCell:
 * 
 * @param image
 * @text 图片
 * @desc 图片
 * @type file
 * @dir img/
 * @default
 * 
 * @param index
 * @text 正确位置
 * @desc 正确位置
 * @type number
 * @min 1
 * @default 1
 * 
 */

const ASJigsawGameNameSpace = (() => {
    "use strict";

    const pluginName = "ASJigsawGame";
    //const parameters = PluginManager.parameters(pluginName);

    let previewWindowSkin = "Window";
    let previewWindowRect = new Rectangle(0, 0, 0, 0);
    let previewWindowPadding = 12;
    let isShowPreviewWindow = true;
    let previewWindowImage = undefined;

    let jigsawGameCommandWindowWindowSkin = "Window";
    let jigsawGameCommandWindowPoint = new Point(0, 0);
    let jigsawGameCommandWindowImageSize = {width: 0, height: 0};
    let jigsawGameCommandWindowPadding = 12;
    let jigsawGameCommandWindowImageRowSpacing = 4;
    let jigsawGameCommandWindowImageColSpacing = 4;
    let jigsawGameCommandWindowMaxCols = 1;
    let isShowCancelButton = true;
    let chooseImageCellTips = undefined;
    let exchangeImageCellTips = undefined;
    let jigsawGameImageCellList = [];
    let commonEventAfterSuccess = 0;

    let currentlySelectedIndex = -1;

    PluginManager.registerCommand(pluginName, "openJigsawGame", args => {

        currentlySelectedIndex = -1;

        previewWindowSkin = args.previewWindowSkin;
        const previewWindowRectObject = JSON.parse(args.previewWindowRect);
        previewWindowRect = new Rectangle(Number(previewWindowRectObject.x) || 0, Number(previewWindowRectObject.y) || 0, Number(previewWindowRectObject.width) || 0, Number(previewWindowRectObject.height) || 0);
        previewWindowPadding = Number(args.previewWindowPadding);
        isShowPreviewWindow = args.isShowPreviewWindow !== "false";
        previewWindowImage = args.previewWindowImage;

        jigsawGameCommandWindowWindowSkin = args.jigsawGameCommandWindowWindowSkin;
        const jigsawGameCommandWindowPointJsonObject = JSON.parse(args.jigsawGameCommandWindowPoint);
        jigsawGameCommandWindowPoint = new Point(Number(jigsawGameCommandWindowPointJsonObject.x) || 0, Number(jigsawGameCommandWindowPointJsonObject.y) || 0);
        const jigsawGameCommandWindowImageSizeJsonObject = JSON.parse(args.jigsawGameCommandWindowImageSize);
        jigsawGameCommandWindowImageSize = {
            width: Number(jigsawGameCommandWindowImageSizeJsonObject.width) || 0,
            height: Number(jigsawGameCommandWindowImageSizeJsonObject.height) || 0,
        };
        jigsawGameCommandWindowPadding = Number(args.jigsawGameCommandWindowPadding);
        jigsawGameCommandWindowImageRowSpacing = Number(args.jigsawGameCommandWindowImageRowSpacing);
        jigsawGameCommandWindowImageColSpacing = Number(args.jigsawGameCommandWindowImageColSpacing);
        jigsawGameCommandWindowMaxCols = Number(args.jigsawGameCommandWindowMaxCols);
        isShowCancelButton = args.isShowCancelButton !== "false";
        chooseImageCellTips = args.chooseImageCellTips;
        exchangeImageCellTips = args.exchangeImageCellTips;
        jigsawGameImageCellList = [];
        const imageCellList = JSON.parse(args.jigsawGameImageCellList !== undefined ? args.jigsawGameImageCellList : "[]");
        for (const imageCell of imageCellList) {
            jigsawGameImageCellList.push(JSON.parse(imageCell));
        }
        commonEventAfterSuccess = Number(args.commonEventAfterSuccess);

        //console.log("jigsawGameImageCellList: ", jigsawGameImageCellList)

        SceneManager.push(Scene_JigsawGame);
        
    });

    class Scene_JigsawGame extends Scene_MenuBase {

        create() {
            Scene_MenuBase.prototype.create.call(this);
            this.createPreviewWindow();
            this.createJigsawGameCommandWindow();
            if(isShowCancelButton) {
                this._jigsawGameCommandWindow.setHandler("cancel", this.popScene.bind(this));
                //this._cancelButton.setClickHandler(this.clickOnCancelButton.bind(this));
            }
        }

        createPreviewWindow() {
            if (isShowPreviewWindow === true) {
                this._previewWindow = new Window_Preview(previewWindowRect);
                this._previewWindow._padding = previewWindowPadding;
                this.addChild(this._previewWindow);
            }
        }

        createJigsawGameCommandWindow() {
            let rows = Math.ceil(jigsawGameImageCellList.length / jigsawGameCommandWindowMaxCols);
            //console.log("rows: ", rows);
            const rect = new Rectangle(jigsawGameCommandWindowPoint.x, jigsawGameCommandWindowPoint.y, jigsawGameCommandWindowImageSize.width * jigsawGameCommandWindowMaxCols + 2 * jigsawGameCommandWindowPadding + jigsawGameCommandWindowImageColSpacing * jigsawGameCommandWindowMaxCols, jigsawGameCommandWindowImageSize.height * rows + 2 * jigsawGameCommandWindowPadding + jigsawGameCommandWindowImageRowSpacing * rows);
            this._jigsawGameCommandWindow = new Window_JigsawGameCommand(rect);
            this._jigsawGameCommandWindow._padding = jigsawGameCommandWindowPadding;
            this.addChild(this._jigsawGameCommandWindow);
        }

        needsCancelButton() {
            return isShowCancelButton;
        }

        clickOnCancelButton() {
            SoundManager.playCancel();
            this.popScene();
        }

    }

    class Window_Preview extends Window_Base {
        initialize(rect) {
            Window_Base.prototype.initialize.call(this, rect);
            this.windowskin = ImageManager.loadSystem(previewWindowSkin);
            const bitmap = ImageManager.loadBitmap("img/", previewWindowImage);
            bitmap.addLoadListener(() => {
                this.contents.clear();
                this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, this.contents.width, this.contents.height);
            });
        }
    }

    class Window_JigsawGameCommand extends Window_HorzCommand {

        initialize(rect) {
            Window_HorzCommand.prototype.initialize.call(this, rect);
            this.windowskin = ImageManager.loadSystem(jigsawGameCommandWindowWindowSkin);
        }

        makeCommandList() {
            for (const index in jigsawGameImageCellList) {
                this.addCommand(jigsawGameImageCellList[index].image, `${index}`);
            }
            for (const command of this._list) {
                this.setHandler(command.symbol, this.commandActionBind.bind(this, Number(command.symbol) || 0));
            }
        }

        commandActionBind(index) {
            this.contents.clear();
            if (currentlySelectedIndex === -1) {
                //初始未选中状态
                const nearbyCellIndexList = this.getNearbyCellIndexList(index);
                currentlySelectedIndex = index;
                this.drawItem(currentlySelectedIndex);
                for (const index of nearbyCellIndexList) {
                    this.drawItem(index);
                }
            } else {
                const lastCellIndexList = this.getNearbyCellIndexList(currentlySelectedIndex);
                if (lastCellIndexList.includes(index) || lastCellIndexList.length === 0) {
                    let temp = jigsawGameImageCellList[currentlySelectedIndex];
                    jigsawGameImageCellList[currentlySelectedIndex] = jigsawGameImageCellList[index];
                    jigsawGameImageCellList[index] = temp;
                    this.drawItemBackground(currentlySelectedIndex);
                    this.drawItemBackground(index);
                    currentlySelectedIndex = -1;
                    //判断是否拼图成功
                    let succeed = true;
                    for (const index in jigsawGameImageCellList) {
                        const currentIndex = Number(index) + 1;
                        const correctIndex = Number(jigsawGameImageCellList[index].index);
                        if(currentIndex !== correctIndex) {
                            succeed = false;
                            break;
                        }
                    }
                    if (succeed === true) {
                        //console.log("拼图成功！")
                        if (commonEventAfterSuccess !== 0) {
                            $gameMap._interpreter.command117([commonEventAfterSuccess]);
                        }
                        this.parent.popScene();
                    }
                } else {
                    const nearbyCellIndexList = this.getNearbyCellIndexList(index);
                    currentlySelectedIndex = index;
                    this.drawItem(currentlySelectedIndex);
                    for (const index of nearbyCellIndexList) {
                        this.drawItem(index);
                    }
                }
            }
            this.activate();
        }

        getNearbyCellIndexList(index) {
            const left = index - 1;
            const top = index - jigsawGameCommandWindowMaxCols;
            const right = index + 1;
            const bottom = index + jigsawGameCommandWindowMaxCols;
            const list = [];
            if (index % jigsawGameCommandWindowMaxCols !== 0) {
                list.push(left);
            }
            if (index - jigsawGameCommandWindowMaxCols >= 0) {
                list.push(top);
            }
            if ((index + 1) % jigsawGameCommandWindowMaxCols !== 0 && (index + 1) < jigsawGameImageCellList.length) {
                list.push(right);
            }
            if (index + jigsawGameCommandWindowMaxCols < jigsawGameImageCellList.length) {
                list.push(bottom);
            }
            //console.log("list: ", list);
            return list;
        }

        drawItem(index) {
            if (currentlySelectedIndex !== -1) {
                const rect = this.itemRect(index);
                const image = index === currentlySelectedIndex ? chooseImageCellTips : exchangeImageCellTips;
                const bitmap = ImageManager.loadBitmap("img/", image);
                bitmap.addLoadListener(() => {
                    this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
                    this.contents.blt(bitmap, 0, 0, rect.width, rect.height, rect.x, rect.y, rect.width, rect.height);
                });

            }
        }

        drawItemBackground(index) {
            const rect = this.itemRect(index);
            const image = jigsawGameImageCellList[index].image;
            const bitmap = ImageManager.loadBitmap("img/", image);
            bitmap.addLoadListener(() => {
                this.contentsBack.clearRect(rect.x, rect.y, rect.width, rect.height);
                this.contentsBack.blt(bitmap, 0, 0, rect.width, rect.height, rect.x, rect.y, rect.width, rect.height);
            });
        }

        maxCols() {
            return jigsawGameCommandWindowMaxCols;
        };

        colSpacing() {
            return jigsawGameCommandWindowImageColSpacing;
        }

        rowSpacing() {
            return jigsawGameCommandWindowImageRowSpacing;
        }

        itemWidth() {
            return jigsawGameCommandWindowImageSize.width + this.colSpacing();
        }

        itemHeight() {
            return jigsawGameCommandWindowImageSize.height + this.rowSpacing();
        }

    }

})();