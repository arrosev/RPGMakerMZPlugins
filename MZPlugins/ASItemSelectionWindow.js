/*:
 * @target MZ
 * @plugindesc 【V1.0.1】自定义物品选择窗口
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 这个插件以MIT协议发布
 * 这个插件自定义物品选择窗口，使用方式同编辑器自带的物品选择
 * 
 *  【V1.0.0】
 *     1. 自定义物品选择窗口样式
 *  【V1.0.1】
 *     1. 修复没有物品可以选择时报错的bug
 * 
 *    注意：
 *     1. 物品需要在插件参数->物品扩展参数中设置缩略图和详细图，
 *        缩略图用于每个选择按钮，详细图是选择窗口上方的图
 *     2. 选择窗口的大小取决于选择按钮的宽高，
 *        宽 = (按钮宽 + 按钮列间距) * 按钮最大可视数 + 选择窗口内边距 * 2.0
 *        高 = 按钮高 + 按钮行间距 + 选择窗口内边距 * 2.0
 *     3. 设置窗口或者图片左右居中的 坐标 = (游戏分辨率宽 - 窗口（图片）分辨率宽) / 2.0
 *     4. 所有坐标位置指图片或窗口左上角坐标相对于父窗口左上角坐标的位置
 * 
 * 
 * @param itemSelectionSceneSet
 * @text 物品选择场景
 * @desc 物品选择场景设置
 * @type string
 * @default 
 * 
 * @param itemSelectionSceneWindowTitleImage
 * @text 物品选择场景标题图片
 * @desc 物品选择场景标题图片设置
 * @parent itemSelectionSceneSet
 * @type file
 * @dir img/
 * @default 
 * 
 * @param itemSelectionSceneWindowTitleImagePoint
 * @text 物品选择场景标题图片坐标
 * @desc 物品选择场景标题图片坐标设置
 * @parent itemSelectionSceneSet
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param itemSelectionSceneWindowBG
 * @text 物品选择场景背景
 * @desc 物品选择场景背景设置
 * @parent itemSelectionSceneSet
 * @type file
 * @dir img/
 * @default 
 * 
 * @param itemSelectionSceneWindowBGPoint
 * @text 物品选择场景背景坐标
 * @desc 物品选择场景背景坐标设置
 * @parent itemSelectionSceneSet
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param itemDetailInfoWindowSet
 * @text 物品详细信息窗口
 * @desc 物品详细信息设置
 * @parent itemSelectionSceneSet
 * @type string
 * @default 
 * 
 * @param itemDetailInfoWindowBG
 * @text 物品详细信息窗口背景
 * @desc 物品详细信息窗口背景设置
 * @parent itemDetailInfoWindowSet
 * @type file
 * @dir img/
 * @default 
 * 
 * @param itemDetailInfoWindowSkin
 * @text 物品详细信息窗口皮肤
 * @desc 物品详细信息窗口皮肤设置
 * @parent itemDetailInfoWindowSet
 * @type file
 * @dir img/system/
 * @default 
 * 
 * @param itemDetailInfoWindowRect
 * @text 物品详细信息窗口位置大小
 * @desc 物品详细信息窗口位置大小设置
 * @parent itemDetailInfoWindowSet
 * @type struct<Rect>
 * @default {"x":"0","y":"0","width":"0","height":"0"}
 * 
 * @param itemSelectionCommandWindowSet
 * @text 物品选择窗口
 * @desc 物品选择窗口设置
 * @parent itemSelectionSceneSet
 * @type string
 * @default 
 * 
 * @param isShowItemSelectionCommandWindowArrow
 * @text 显示物品选择窗口箭头
 * @desc 显示物品选择窗口箭头设置
 * @parent itemSelectionCommandWindowSet
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @default false
 * 
 * @param itemSelectionCommandWindowSkin
 * @text 物品选择窗口皮肤
 * @desc 物品选择窗口皮肤设置
 * @parent itemSelectionCommandWindowSet
 * @type file
 * @dir img/system/
 * @default 
 * 
 * @param itemSelectionCommandWindowPoint
 * @text 物品选择窗口坐标
 * @desc 物品选择窗口坐标设置
 * @parent itemSelectionCommandWindowSet
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param itemSelectionCommandWindowPadding
 * @text 物品选择窗口内边距
 * @desc 物品选择窗口内边距设置
 * @parent itemSelectionCommandWindowSet
 * @type number
 * @default 12
 * 
 * @param itemSelectionCommandWindowButtonItemBackColor
 * @text 物品选择窗口按钮背景色
 * @desc 物品选择窗口按钮背景色设置（渐变）
 * @parent itemSelectionCommandWindowSet
 * @type struct<ItemBackColor>
 * @default {"itemBackColor1":"rgba(32, 32, 32, 0.5)","itemBackColor2":"rgba(0, 0, 0, 0.5)"}
 * 
 * @param itemSelectionCommandWindowButtonCursor
 * @text 物品选择窗口按钮光标
 * @desc 物品选择窗口按钮光标设置
 * @parent itemSelectionCommandWindowSet
 * @type struct<ItemCursorStyle>
 * @default {"isShowCursor":"false","cursorHeight":"1","cursorColor":"rgba(255, 255, 255, 1.0)"}
 * 
 * @param itemSelectionCommandWindowButtonSize
 * @text 物品选择窗口按钮尺寸
 * @desc 物品选择窗口按钮尺寸设置
 * @parent itemSelectionCommandWindowSet
 * @type struct<Size>
 * @default {"width":"60","height":"60"}
 * 
 * @param itemSelectionCommandWindowButtonRowSpacing
 * @text 物品选择窗口按钮行间距
 * @desc 物品选择窗口按钮行间距设置
 * @parent itemSelectionCommandWindowSet
 * @type number
 * @default 4
 * 
 * @param itemSelectionCommandWindowButtonColSpacing
 * @text 物品选择窗口按钮列间距
 * @desc 物品选择窗口按钮列间距设置
 * @parent itemSelectionCommandWindowSet
 * @type number
 * @default 8
 * 
 * @param itemSelectionCommandWindowVisibleButtons
 * @text 物品选择窗口按钮最大可视数
 * @desc 物品选择窗口按钮最大可视数设置
 * @parent itemSelectionCommandWindowSet
 * @type number
 * @default 1
 * 
 * @param itemExtensionParametersList
 * @text 物品扩展参数列表
 * @desc 物品扩展参数列表设置
 * @parent itemSelectionSceneSet
 * @type struct<ItemExtensionParameters>[]
 * @default []
 * 
 * @command openItemSelectionWindow
 * @text Open Item Selection Window
 * @desc 打开物品选择窗口
 * 
 * @arg itembindVariable
 * @text 变量
 * @desc 选择并点击物品之后将物品ID存入的变量
 * @type variable
 * @min 0
 * @default 0
 * 
 * @arg itemType
 * @text 物品类型
 * @desc 物品类型设置
 * @type select
 * @option 普通物品
 * @value 1
 * @option 重要物品 
 * @value 2
 * @option 隐藏物品1 
 * @value 3
 * @option 隐藏物品2
 * @value 4
 * @default 0
 * 
 * @arg isShowCancelButton
 * @text 是否显示返回按钮
 * @desc 是否显示返回按钮设置
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @default true
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

/*~struct~ItemBackColor:
 * 
 * @param itemBackColor1
 * @text 背景色1
 * @desc 背景色1
 * @type string
 * @default rgba(32, 32, 32, 0.5)
 * 
 * @param itemBackColor2
 * @text 背景色2
 * @desc 背景色2
 * @type string
 * @default rgba(0, 0, 0, 0.5)
 * 
 */

/*~struct~ItemCursorStyle:
 * 
 * @param isShowCursor
 * @text 是否显示光标
 * @desc 是否显示光标设置
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @default false
 * 
 * @param cursorHeight
 * @text 光标厚度
 * @desc 光标厚度
 * @type number
 * @min 1
 * @default 1
 * 
 * @param cursorColor
 * @text 光标颜色
 * @desc 光标颜色
 * @type string
 * @default rgba(255, 255, 255, 1.0)
 * 
 */

/*~struct~ItemExtensionParameters:
 * 
 * @param itemId
 * @text 物品Id
 * @desc 物品Id
 * @type number
 * @min 0
 * @default 0
 * 
 * @param itemThumbnail
 * @text 物品缩略图
 * @desc 物品缩略图
 * @type file
 * @dir img/
 * @default 
 * 
 * @param itemDetailImage
 * @text 物品详细图
 * @desc 物品详细图
 * @type file
 * @dir img/
 * @default 
 * 
 */

const ASItemSelectionWindowNameSpace = (() => {
    "use strict";

    const pluginName = "ASItemSelectionWindow";
    const parameters = PluginManager.parameters(pluginName);

    const itemSelectionSceneWindowTitleImage = parameters.itemSelectionSceneWindowTitleImage;
    const itemSelectionSceneWindowTitleImagePointJsonObject = JSON.parse(parameters.itemSelectionSceneWindowTitleImagePoint); 
    const itemSelectionSceneWindowTitleImagePoint = new Point(Number(itemSelectionSceneWindowTitleImagePointJsonObject.x) || 0, Number(itemSelectionSceneWindowTitleImagePointJsonObject.y) || 0);

    const itemSelectionSceneWindowBG = parameters.itemSelectionSceneWindowBG;
    const itemSelectionSceneWindowBGPointJsonObject = JSON.parse(parameters.itemSelectionSceneWindowBGPoint); 
    const itemSelectionSceneWindowBGPoint = new Point(Number(itemSelectionSceneWindowBGPointJsonObject.x) || 0, Number(itemSelectionSceneWindowBGPointJsonObject.y) || 0);

    const itemDetailInfoWindowRectObject = JSON.parse(parameters.itemDetailInfoWindowRect);
    const itemDetailInfoWindowBG = parameters.itemDetailInfoWindowBG;
    const itemDetailInfoWindowSkin = parameters.itemDetailInfoWindowSkin;
    const itemDetailInfoWindowRect = new Rectangle(Number(itemDetailInfoWindowRectObject.x) || 0, Number(itemDetailInfoWindowRectObject.y) || 0, Number(itemDetailInfoWindowRectObject.width) || 0, Number(itemDetailInfoWindowRectObject.height) || 0);
   
    const isShowItemSelectionCommandWindowArrow = parameters.isShowItemSelectionCommandWindowArrow !== "false";
    const itemSelectionCommandWindowSkin = parameters.itemSelectionCommandWindowSkin;
    const itemSelectionCommandWindowPointJsonObject = JSON.parse(parameters.itemSelectionCommandWindowPoint); 
    const itemSelectionCommandWindowPoint = new Point(Number(itemSelectionCommandWindowPointJsonObject.x) || 0, Number(itemSelectionCommandWindowPointJsonObject.y) || 0);
    const itemSelectionCommandWindowPadding = Number(parameters.itemSelectionCommandWindowPadding);

    const itemSelectionCommandWindowButtonItemBackColorJsonObject = JSON.parse(parameters.itemSelectionCommandWindowButtonItemBackColor);
    const itemSelectionCommandWindowButtonItemBackColor = {
        itemBackColor1: itemSelectionCommandWindowButtonItemBackColorJsonObject.itemBackColor1 || "rgba(32, 32, 32, 0.5)",
        itemBackColor2: itemSelectionCommandWindowButtonItemBackColorJsonObject.itemBackColor2 || "rgba(0, 0, 0, 0.5)",
    };

    const itemSelectionCommandWindowButtonCursorJsonObject = JSON.parse(parameters.itemSelectionCommandWindowButtonCursor);
    const itemSelectionCommandWindowButtonCursor = {
        isShowCursor: itemSelectionCommandWindowButtonCursorJsonObject.isShowCursor !== "false",
        cursorHeight: Number(itemSelectionCommandWindowButtonCursorJsonObject.cursorHeight) || 1,
        cursorColor: itemSelectionCommandWindowButtonCursorJsonObject.cursorColor || "rgba(255, 255, 255, 1.0)",
    };

    const itemSelectionCommandWindowButtonSizeJsonObject = JSON.parse(parameters.itemSelectionCommandWindowButtonSize);
    const itemSelectionCommandWindowButtonSize = {
        width: Number(itemSelectionCommandWindowButtonSizeJsonObject.width) || 0,
        height: Number(itemSelectionCommandWindowButtonSizeJsonObject.height) || 0,
    };
    const itemSelectionCommandWindowButtonRowSpacing = Number(parameters.itemSelectionCommandWindowButtonRowSpacing);
    const itemSelectionCommandWindowButtonColSpacing = Number(parameters.itemSelectionCommandWindowButtonColSpacing);
    const itemSelectionCommandWindowVisibleButtons = Number(parameters.itemSelectionCommandWindowVisibleButtons);


    const itemExtensionParametersList = JSON.parse(parameters.itemExtensionParametersList !== undefined ? parameters.itemExtensionParametersList : "[]");
    const itemExtensionParametersDic = {};
    for (const itemExtensionParameter of itemExtensionParametersList) {
        const item = JSON.parse(itemExtensionParameter);
        itemExtensionParametersDic[item.itemId] = { 
            itemThumbnail: item.itemThumbnail,
            itemDetailImage: item.itemDetailImage
        };
    }

    //console.log("itemExtensionParametersDic: ", itemExtensionParametersDic)

    let itembindVariable = 0;
    let itemType = 0;
    let isShowCancelButton = true;

    PluginManager.registerCommand(pluginName, "openItemSelectionWindow", args => {
        
        itembindVariable =  Number(args.itembindVariable) || 0;
        itemType = Number(args.itemType) || 0;
        isShowCancelButton = args.isShowCancelButton !== "false";
        SceneManager.push(Scene_ItemSelection);
        
    });
    
    class Scene_ItemSelection extends Scene_MenuBase {

        create() {
            Scene_MenuBase.prototype.create.call(this);
            this.createItemDetailInfoWindow();
            if(isShowCancelButton) {
                this._cancelButton.setClickHandler(this.clickOnCancelButton.bind(this));
            }
            this.createItemSelectionCommandWindow();
            this.createItemSelectionSceneWindowTitleImage();
        }

        createItemSelectionSceneWindowTitleImage() {
            this._itemSelectionSceneWindowTitleImag = new Sprite();
            this._itemSelectionSceneWindowTitleImag.bitmap = ImageManager.loadBitmap("img/", itemSelectionSceneWindowTitleImage);
            this._itemSelectionSceneWindowTitleImag.move(itemSelectionSceneWindowTitleImagePoint.x, itemSelectionSceneWindowTitleImagePoint.y);
            this.addChild(this._itemSelectionSceneWindowTitleImag);
        }

        createItemSelectionSceneWindowBG() {
            this._itemSelectionSceneWindowBG = new Sprite();
            this._itemSelectionSceneWindowBG.bitmap = ImageManager.loadBitmap("img/", itemSelectionSceneWindowBG);
            this._itemSelectionSceneWindowBG.move(itemSelectionSceneWindowBGPoint.x, itemSelectionSceneWindowBGPoint.y);
            this.addChild(this._itemSelectionSceneWindowBG);
        }

        createItemDetailInfoWindow() {
            const rect = new Rectangle(itemDetailInfoWindowRect.x, itemDetailInfoWindowRect.y, itemDetailInfoWindowRect.width, itemDetailInfoWindowRect.height);
            //console.log("createItemDetailInfoWindow: ", rect);
            this._itemDetailInfoWindow = new Window_ItemDetailInfo(rect);
            this.addChild(this._itemDetailInfoWindow);
        }

        createItemSelectionCommandWindow() {
            const rect = new Rectangle(itemSelectionCommandWindowPoint.x, itemSelectionCommandWindowPoint.y, itemSelectionCommandWindowButtonSize.width * itemSelectionCommandWindowVisibleButtons + 2 * itemSelectionCommandWindowPadding + itemSelectionCommandWindowButtonColSpacing * itemSelectionCommandWindowVisibleButtons, itemSelectionCommandWindowButtonSize.height + 2 * itemSelectionCommandWindowPadding + itemSelectionCommandWindowButtonRowSpacing);
            //console.log("createItemSelectionCommandWindow: ", rect);
            this._itemSelectionCommandWindow = new Window_ItemSelectionCommand(rect);
            this._itemSelectionCommandWindow.proxy = this;
            this._itemSelectionCommandWindow._padding = itemSelectionCommandWindowPadding;
            this.addChild(this._itemSelectionCommandWindow);
            if(this._itemSelectionCommandWindow._list.length !== 0) {
                const id = Number(this._itemSelectionCommandWindow.commandSymbol(0)) || 0;
                if (id) {
                    this._itemDetailInfoWindow.drawItemDetailImage(id);
                }
            }
        }

        createBackground() {
            this._backgroundFilter = new PIXI.filters.BlurFilter();
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
            this._backgroundSprite.filters = [this._backgroundFilter];
            this.addChild(this._backgroundSprite);
            this.setBackgroundOpacity(192);
            this.createItemSelectionSceneWindowBG();
        }

        needsCancelButton() {
            return isShowCancelButton;
        }

        clickOnCancelButton() {
            SoundManager.playCancel();
            this.popScene();
        }

        selectIndex(index, itemId) {
            //console.log("index: ", index);
            this._itemDetailInfoWindow.drawItemDetailImage(itemId);
        }

    }

    class Window_ItemDetailInfo extends Window_Base {

        initialize(rect) {
            Window_Base.prototype.initialize.call(this, rect);
            this.createItemDetailInfoWindowBG();
            this.createItemDetailInfoWindowDetailImage();
            this.windowskin = ImageManager.loadSystem(itemDetailInfoWindowSkin);
        }

        createItemDetailInfoWindowDetailImage() {
            this._itemDetailInfoWindowDetailImage = new Sprite();
            this.addChild(this._itemDetailInfoWindowDetailImage);
        }

        createItemDetailInfoWindowBG() {
            this._itemDetailInfoWindowBG = new Sprite();
            this._itemDetailInfoWindowBG.bitmap = ImageManager.loadBitmap("img/", itemDetailInfoWindowBG);
            this.addChild(this._itemDetailInfoWindowBG);
        }

        drawItemDetailImage(itemId) {
            //console.log("itemId: ", itemId)
            if(itemExtensionParametersDic[itemId]) {
                const item = itemExtensionParametersDic[itemId];
                const bitmap = ImageManager.loadBitmap("img/", item.itemDetailImage);
                this._itemDetailInfoWindowDetailImage.bitmap = bitmap;
            }
        }

    }

    class Window_ItemSelectionCommand extends Window_HorzCommand {

        initialize(rect) {
            Window_HorzCommand.prototype.initialize.call(this, rect);
            //this._margin = 0;
            this.proxy = null;
            this.leftArrowVisible = false;
            this.rightArrowVisible = false;
            this.windowskin = ImageManager.loadSystem(itemSelectionCommandWindowSkin);
        }

        _createArrowSprites() {
            Window.prototype._createArrowSprites.apply(this, arguments);
            this._leftArrowSprite = new Sprite();
            this.addChild(this._leftArrowSprite);
            this._rightArrowSprite = new Sprite();
            this.addChild(this._rightArrowSprite);
        }

        _refreshArrows() {
            Window.prototype._refreshArrows.apply(this, arguments);
            const w = this._width;
            const h = this._height;
            const p = 24;
            const q = p / 2;
            const sx = 96 + p;
            const sy = 0 + p;
            this._rightArrowSprite.bitmap = this._windowskin;
            this._rightArrowSprite.anchor.x = 0.5;
            this._rightArrowSprite.anchor.y = 0.5;
            this._rightArrowSprite.setFrame(sx + p + q, sy + q, q, p);
            this._rightArrowSprite.move(w - q, h / 2);
            
            this._leftArrowSprite.bitmap = this._windowskin;
            this._leftArrowSprite.anchor.x = 0.5;
            this._leftArrowSprite.anchor.y = 0.5;
            this._leftArrowSprite.setFrame(sx, sy+q, q, p);
            this._leftArrowSprite.move(q, h/2);
        }

        _updateArrows() {
            Window.prototype._updateArrows.apply(this, arguments);
            this._leftArrowSprite.visible = this.isOpen() && this.leftArrowVisible && isShowItemSelectionCommandWindowArrow;
            this._rightArrowSprite.visible = this.isOpen() && this.rightArrowVisible && isShowItemSelectionCommandWindowArrow;
        }

        updateArrows() {
            Window_Scrollable.prototype.updateArrows.apply(this, arguments);
            this.rightArrowVisible = this._scrollX < this.maxScrollX();
            this.leftArrowVisible = this._scrollX > 0;
        }

        makeCommandList() {

            //console.log("$gameParty.items(): ", $gameParty.items())
            for (const item of $gameParty.items()) {
                if (item.itypeId === itemType) {
                    this.addCommand(item.name, `${item.id}`);
                }
            }

            //console.log("list", this._list)

            for (const command of this._list) {
                this.setHandler(command.symbol, this.commandActionBind.bind(this, Number(command.symbol) || 0));
            }

        }

        commandActionBind(itemId) {
            if (itembindVariable >= 1 && itemId >= 1) {
                $gameVariables.setValue(itembindVariable, itemId);
            }
            this.activate();
            SceneManager.pop();
        }

        drawItem(index) {
            const rect = this.itemRect(index);
            const id = Number(this.commandSymbol(index)) || 0;
            if(itemExtensionParametersDic[id]) {
                const item = itemExtensionParametersDic[id];
                const bitmap = ImageManager.loadBitmap("img/", item.itemThumbnail);
                bitmap.addLoadListener(() => {
                    this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
                    this.contents.blt(bitmap, 0, 0, rect.width, rect.height, rect.x, rect.y, rect.width, rect.height);
                });
            }
        }

        drawBackgroundRect(rect) {
            const c1 = itemSelectionCommandWindowButtonItemBackColor.itemBackColor1;
            const c2 = itemSelectionCommandWindowButtonItemBackColor.itemBackColor2;
            const x = rect.x;
            const y = rect.y;
            const w = rect.width;
            const h = rect.height;
            this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
            this.contentsBack.strokeRect(x, y, w, h, c1);
        }

        select(index) {
            let last = this.index();
            Window_HorzCommand.prototype.select.apply(this, arguments);
            let current = this.index();
            if (last !== current) {
                if(this.proxy && this.proxy.__proto__.hasOwnProperty("selectIndex")) {
                    const id = Number(this.commandSymbol(index)) || 0;
                    this.proxy.selectIndex(index, id);
                }
            }
        }

        _createCursorSprite() {
            this._cursorSprite = new Sprite();

            if (itemSelectionCommandWindowButtonCursor.isShowCursor) {
                const borderLength = itemSelectionCommandWindowButtonSize.width / 10;
                const borderHeight = itemSelectionCommandWindowButtonCursor.cursorHeight;
                const c = itemSelectionCommandWindowButtonCursor.cursorColor;
                const bitmap = new Bitmap(itemSelectionCommandWindowButtonSize.width, itemSelectionCommandWindowButtonSize.height);
                bitmap.fillRect(0, 0, borderLength, borderHeight, c);
                bitmap.fillRect(0, 0, borderHeight, borderLength, c);
                bitmap.fillRect(itemSelectionCommandWindowButtonSize.width - borderLength, 0, borderLength, borderHeight, c);
                bitmap.fillRect(itemSelectionCommandWindowButtonSize.width - borderHeight, 0, borderHeight, borderLength, c);
                bitmap.fillRect(itemSelectionCommandWindowButtonSize.width - borderHeight, itemSelectionCommandWindowButtonSize.height - borderLength, borderHeight, borderLength, c);
                bitmap.fillRect(itemSelectionCommandWindowButtonSize.width - borderLength, itemSelectionCommandWindowButtonSize.height - borderHeight, borderLength, borderHeight, c);
                bitmap.fillRect(0, itemSelectionCommandWindowButtonSize.height - borderHeight, borderLength, borderHeight, c);
                bitmap.fillRect(0, itemSelectionCommandWindowButtonSize.height - borderLength, borderHeight, borderLength, c);
                this._cursorSprite._bitmap = bitmap;
            }
            
            for (let i = 0; i < 9; i++) {
                this._cursorSprite.addChild(new Sprite());
            }

            this._clientArea.addChild(this._cursorSprite);
        }

        maxItems() {
            let v = 1;
            if(this._list) {
                v = this._list.length;
            }
            return v;
        }

        maxCols() {
            return this.maxItems();
        }

        numVisibleRows() {
            return 1;
        }

        numVisibleCols() {
            return itemSelectionCommandWindowVisibleButtons;
        }

        isScrollEnabled() {
            return true;
        }

        smoothScrollRight(n) {
            this.smoothScrollBy(this.itemWidth() * n, 0);
        }

        smoothScrollLeft(n) {
            this.smoothScrollBy(-this.itemWidth() * n, 0);
        }

        processWheelScroll() {
            if (this.isWheelScrollEnabled() && this.isTouchedInsideFrame()) {
                const threshold = 20;
                if (TouchInput.wheelY >= threshold) {
                    this.smoothScrollRight(1);
                }
                if (TouchInput.wheelY <= -threshold) {
                    this.smoothScrollLeft(1);
                }
            }
        }

        col() {
            return Math.floor(this.index() / this.maxRows());
        }
        
        topCol() {
            return Math.floor(this.scrollX() / this.itemWidth());
        }
    
        maxTopCol() {
            return Math.max(0, this.maxCols() - this.maxPageCols());
        }
    
        setTopCol(col) {
            this.scrollTo(this.scrollX(), col * this.itemWidth());
        }
    
        maxPageCols() {
            return Math.floor(this.innerWidth / this.itemWidth());
        }

        maxPageItems() {
            return this.maxPageCols() * this.maxRows();
        }

        topIndex() {
            return this.topCol() * this.maxRows();
        }

        colSpacing() {
            return itemSelectionCommandWindowButtonColSpacing;
        }

        rowSpacing() {
            return itemSelectionCommandWindowButtonRowSpacing;
        }

        itemWidth() {
            return itemSelectionCommandWindowButtonSize.width + this.colSpacing();
        }

        itemHeight() {
            return itemSelectionCommandWindowButtonSize.height + this.rowSpacing();
        }

        overallWidth() {
            return this.maxCols() * this.itemWidth();
        }

        ensureCursorVisible(smooth) {
            if (this._cursorAll) {
                this.scrollTo(0, 0);
            } else if (this.innerWidth > 0 && this.col() >= 0) {
                const scrollX = this.scrollX();
                const itemTop = this.col() * this.itemWidth();
                const itemBottom = itemTop + this.itemWidth();
                const scrollMin = itemBottom - this.innerWidth;
                if (scrollX > itemTop) {
                    if (smooth) {
                        this.smoothScrollTo(itemTop, 0);
                    } else {
                        this.scrollTo(itemTop, 0);
                    }
                } else if (scrollX < scrollMin) {
                    if (smooth) {
                        this.smoothScrollTo(scrollMin, 0);
                    } else {
                        this.scrollTo(scrollMin, 0);
                    }
                };
            };
        }

    }

})();