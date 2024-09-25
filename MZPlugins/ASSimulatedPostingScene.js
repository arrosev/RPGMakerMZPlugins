/*:
 * @target MZ
 * @plugindesc 模拟配信场景插件
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * 
 */

const ASSimulatedPostingSceneNameSpace = (() => {
    "use strict";

    const pluginName = "ASSimulatedPostingScene";
    const parameters = PluginManager.parameters(pluginName);

    const fetchJson = async function () {
    	let response = await fetch('https://raw.githubusercontent.com/arrosev/RMMZPluginTestFile/refs/heads/main/SimulatedPostingPluginTest.json');
    	if (response.status >= 200 && response.status < 300) {
    		return await response.json();
    	} else {
    		throw new Error(response.statusText);
    	}
    }

    // const fetchAPI = async () => {
    //     try {
    //       const response = await fetch(url)
    //       if (response.status === 200) {
    //         const data = await response.json()
    //         console.log(data)
    //       } else {
    //         console.log('请求异常')
    //       }
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    Scene_Title.prototype.create = function() {
    	Scene_Base.prototype.create.call(this);
    	this.createBackground();
    	this.createForeground();
    	this.createWindowLayer();
    	this.createCommandWindow();
    };

    class Scene_SimulatedPosting extends Scene_MenuBase {

        create() {
            Scene_MenuBase.prototype.create.call(this);
            this.createPostingCodeWindow();
            this.createInputWindow();
        }

        createPostingCodeWindow() {
            const inputWindowHeight = this.calcWindowHeight(9, true);
            const padding = $gameSystem.windowPadding();
            const ww = 600;
            const wh = 144 + padding * 2;
            const wx = (Graphics.boxWidth - ww) / 2;
            const wy = (Graphics.boxHeight - (wh + inputWindowHeight + 8)) / 2 + 10;
            const rect = new Rectangle(wx, wy, ww, wh);;
            this._postingCodeWindow = new Window_PostingCode(rect, 8);
            this.addWindow(this._postingCodeWindow);
            this._postingCodeWindow.refresh();
        }

        createInputWindow = function() {
            const wx = this._postingCodeWindow.x;
            const wy = this._postingCodeWindow.y + this._postingCodeWindow.height + 8;
            const ww = this._postingCodeWindow.width;
            const wh = this.calcWindowHeight(9, true);
            const rect = new Rectangle(wx, wy, ww, wh);
            this._inputWindow = new Window_Inputing(rect);
            this._inputWindow.setEditWindow(this._postingCodeWindow);
            this._inputWindow.setHandler("ok", this.onInputOk.bind(this));
            this.addWindow(this._inputWindow);
        }

        onInputOk() {
            console.log("PostingCode: ", this._postingCodeWindow.postingCode());
        }

    }

    class Window_PostingCode extends Window_Base {

        initialize(rect, maxLength) {
            Window_Base.prototype.initialize.call(this, rect);
            this.windowskin = ImageManager.loadSystem("");
            this._maxLength = maxLength;
            this._postingCode = "";
            this._defaultPostingCode = "";
            this._index = 0;
            this._leftPadding = (rect.width - maxLength * this.charWidth()) / 2 - this._padding;
            this.drawTips();
            this.deactivate();
        }

        postingCode() {
            return this._postingCode;
        }

        restoreDefault() {
            this._postingCode = this._defaultPostingCode;
            this._index = 0;
            this.refresh();
        }

        add(ch) {
            if (this._index < this._maxLength) {
                this._postingCode += ch;
                this._index++;
                this.refresh();
                return true;
            } else {
                return false;
            }
        }

        back() {
            if (this._index > 0) {
                this._index--;
                this._postingCode = this._postingCode.slice(0, this._index);
                this.refresh();
                return true;
            } else {
                return false;
            }
        }

        charWidth() {
            // return this.textWidth("A");
            return 50;
        }

        itemRect(index) {
            const x = this._leftPadding + index * this.charWidth();
            // const y = 54;
            const y = 64;
            const width = this.charWidth();
            const height = this.lineHeight();
            return new Rectangle(x, y, width, height);
        }

        underlineRect(index) {
            const rect = this.itemRect(index);
            rect.x++;
            rect.y += rect.height - 2;
            rect.width -= 2;
            rect.height = 2;
            return rect;
        }

        underlineColor() {
            return ColorManager.normalColor();
        }

        drawTips() {
            this.contentsBack.fontSize = 26;
            //this.contentsBack.textColor = this.bitmapLabelTextColor;
            this.contentsBack.drawText("请输入配信码：", 20, 8, this.width, this.lineHeight(), "left");
        }

        drawUnderline(index) {
            const rect = this.underlineRect(index);
            const color = this.underlineColor();
            this.contents.paintOpacity = 48;
            this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
            this.contents.paintOpacity = 255;
        }

        drawChar(index) {
            const rect = this.itemRect(index);
            this.resetTextColor();
            this.drawText(this._postingCode[index] || "", rect.x + (this.charWidth() - this.textWidth("A")) / 2, rect.y);
            //this.drawText(this._postingCode[index] || "", rect.x + this.charWidth() / 4, rect.y, this.charWidth(), this.lineHeight(), "center");
        }

        refresh() {
            this.contents.clear();
            for (let i = 0; i < this._maxLength; i++) {
                this.drawUnderline(i);
            }
            for (let j = 0; j < this._postingCode.length; j++) {
                this.drawChar(j);
            }
            const rect = this.itemRect(this._index);
            this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
        }

    }

    class Window_Inputing extends Window_Selectable {

        initialize(rect) {
            Window_Selectable.prototype.initialize.call(this, rect);
            //this.windowskin = ImageManager.loadSystem("");
            this._editWindow = null;
            this._page = 0;
            this._index = 0;
            this._keys = ["A","B","C","D","E",  "a","b","c","d","e",
                          "F","G","H","I","J",  "f","g","h","i","j",
                          "K","L","M","N","O",  "k","l","m","n","o",
                          "P","Q","R","S","T",  "p","q","r","s","t",
                          "U","V","W","X","Y",  "u","v","w","x","y",
                          "Z","[","]","^","_",  "z","{","}","|","~",
                          "0","1","2","3","4",  "!","#","$","%","&",
                          "5","6","7","8","9",  "(",")","*","+","-",
                          "/","=","@","<",">",  ":",";"," ","Page","OK"];
        }

        setEditWindow(editWindow) {
            this._editWindow = editWindow;
            this.refresh();
            this.updateCursor();
            this.activate();
        }

        table() {
            return [this._keys];
        }

        maxCols() {
            return 10;
        }

        maxItems() {
            return 90;
        }

        itemWidth() {
            return Math.floor((this.innerWidth - this.groupSpacing()) / 10);
        }

        groupSpacing() {
            return 24;
        }

        character() {
            return this._index < 88 ? this.table()[this._page][this._index] : "";
        }

        isPageChange() {
            return this._index === 88;
        }

        isOk() {
            return this._index === 89;
        }

        itemRect(index) {
            const itemWidth = this.itemWidth();
            const itemHeight = this.itemHeight();
            const colSpacing = this.colSpacing();
            const rowSpacing = this.rowSpacing();
            const groupSpacing = this.groupSpacing();
            const col = index % 10;
            const group = Math.floor(col / 5);
            const x = col * itemWidth + group * groupSpacing + colSpacing / 2;
            const y = Math.floor(index / 10) * itemHeight + rowSpacing / 2;
            const width = itemWidth - colSpacing;
            const height = itemHeight - rowSpacing;
            return new Rectangle(x, y, width, height);
        }

        drawItem(index) {
            const table = this.table();
            const character = table[this._page][index];
            const rect = this.itemLineRect(index);
            this.drawText(character, rect.x, rect.y, rect.width, "center");
        }

        updateCursor() {
            const rect = this.itemRect(this._index);
            this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
        }

        isCursorMovable() {
            return this.active;
        }

        cursorDown(wrap) {
            if (this._index < 80 || wrap) {
                this._index = (this._index + 10) % 90;
            }
        }

        cursorUp(wrap) {
            if (this._index >= 10 || wrap) {
                this._index = (this._index + 80) % 90;
            }
        }

        cursorRight(wrap) {
            if (this._index % 10 < 9) {
                this._index++;
            } else if (wrap) {
                this._index -= 9;
            }
        }

        cursorLeft(wrap) {
            if (this._index % 10 > 0) {
                this._index--;
            } else if (wrap) {
                this._index += 9;
            }
        }

        cursorPagedown() {
            this._page = (this._page + 1) % this.table().length;
            this.refresh();
        }

        cursorPageup() {
            this._page = (this._page + this.table().length - 1) % this.table().length;
            this.refresh();
        }

        processCursorMove() {
            const lastPage = this._page;
            Window_Selectable.prototype.processCursorMove.call(this);
            this.updateCursor();
            if (this._page !== lastPage) {
                this.playCursorSound();
            }
        }

        processHandling() {
            if (this.isOpen() && this.active) {
                if (Input.isTriggered("shift")) {
                    this.processJump();
                }
                if (Input.isRepeated("cancel")) {
                    this.processBack();
                }
                if (Input.isRepeated("ok")) {
                    this.processOk();
                }
            }
        }

        isCancelEnabled() {
            return true;
        }

        processCancel() {
            this.processBack();
        }

        processJump() {
            if (this._index !== 89) {
                this._index = 89;
                this.playCursorSound();
            }
        }

        processBack() {
            if (this._editWindow.back()) {
                SoundManager.playCancel();
            }
        }

        processOk() {
            if (this.character()) {
                this.onCodeAdd();
            } else if (this.isPageChange()) {
                this.playOkSound();
                this.cursorPagedown();
            } else if (this.isOk()) {
                this.onCodeOk();
            }
        }

        onCodeAdd() {
            if (this._editWindow.add(this.character())) {
                this.playOkSound();
            } else {
                this.playBuzzerSound();
            }
        }

        onCodeOk() {
            if (this._editWindow.postingCode() === "") {
                if (this._editWindow.restoreDefault()) {
                    this.playOkSound();
                } else {
                    this.playBuzzerSound();
                }
            } else {
                this.playOkSound();
                this.callOkHandler();
            }
        }

    }

    return {
        Scene_SimulatedPosting
    }    

})();