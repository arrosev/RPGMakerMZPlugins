/*:
 * @target MZ
 * @plugindesc [V1.0.0] 模拟配信场景插件
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * 这个插件在MIT许可下发布
 * 
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
 * 这个插件主要用于模拟配信功能
 *
 * @param simulatedPostingSceneRequestAddress
 * @text 配信请求地址
 * @desc 配信请求地址
 * @type string
 * @default
 *
 * @param simulatedPostingSceneStyleSet
 * @text 样式设置
 * @desc 样式设置
 * @type string
 * @default
 *
 * @param postingCodeMaxLength
 * @text 配信码字符最大长度
 * @desc 配信码字符最大长度
 * @parent simulatedPostingSceneStyleSet
 * @type number
 * @default 8
 *
 * @param postingCodeCharWidth
 * @text 配信码单格宽度
 * @desc 配信码单格宽度
 * @parent simulatedPostingSceneStyleSet
 * @type number
 * @default 50
 * 
 * @param simulatedPostingSceneTipsTextSet
 * @text 提示文本设置
 * @desc 提示文本设置
 * @type string
 * @default
 *
 * @param tipsText1
 * @text 提示文本1
 * @desc 提示文本1
 * @parent simulatedPostingSceneTipsTextSet
 * @type string
 * @default 请输入配信码：
 *
 * @param tipsText2
 * @text 提示文本2
 * @desc 提示文本2
 * @parent simulatedPostingSceneTipsTextSet
 * @type string
 * @default 正在处理配信请求
 *
 * @param tipsText3
 * @text 提示文本3
 * @desc 提示文本3
 * @parent simulatedPostingSceneTipsTextSet
 * @type string
 * @default 本存档已使用过此配信码
 *
 * @param tipsText4
 * @text 提示文本4
 * @desc 提示文本4
 * @parent simulatedPostingSceneTipsTextSet
 * @type string
 * @default 正在搜索礼物
 *
 * @param tipsText5
 * @text 提示文本5
 * @desc 提示文本5
 * @parent simulatedPostingSceneTipsTextSet
 * @type string
 * @default 无效的配信码
 *
 * @param tipsText6
 * @text 提示文本6
 * @desc 提示文本6
 * @parent simulatedPostingSceneTipsTextSet
 * @type string
 * @default 配信码已过期
 *
 */

const ASSimulatedPostingSceneNameSpace = (() => {
    "use strict";

    const pluginName = "ASSimulatedPostingScene";
    const parameters = PluginManager.parameters(pluginName);

    const simulatedPostingSceneRequestAddress = parameters.simulatedPostingSceneRequestAddress || "";

    const postingCodeMaxLength = Number(parameters.postingCodeMaxLength) || 0;
    const postingCodeCharWidth = Number(parameters.postingCodeCharWidth) || 0;

    const tipsText1 = parameters.tipsText1 || "";
    const tipsText2 = parameters.tipsText2 || "";
    const tipsText3 = parameters.tipsText3 || "";
    const tipsText4 = parameters.tipsText4 || "";
    const tipsText5 = parameters.tipsText5 || "";
    const tipsText6 = parameters.tipsText6 || "";

    Scene_Title.prototype.create = function() {
    	Scene_Base.prototype.create.call(this);
    	this.createBackground();
    	this.createForeground();
    	this.createWindowLayer();
    	this.createCommandWindow();
    };

    const PostingStatus = {
        Init: 0,
        Processing: 1,
        Completed: 2
    }

    class Scene_SimulatedPosting extends Scene_MenuBase {

        create() {
            Scene_MenuBase.prototype.create.call(this);
            this._postingStatus = PostingStatus.Init;
            this.createInfoWindow();
            this.createPostingCodeWindow();
            this.createInputWindow();
            this._cancelButton.setClickHandler(this.clickOnCancelButton.bind(this));
            this.setPostingStatus(PostingStatus.Init);
        }

        createInfoWindow() {
            const rect = new Rectangle(0, 0, 0, 0);
            this._infoWindow = new Window_Info(rect);
            this._infoWindow.setText("");
            this.addWindow(this._infoWindow);
        }

        createPostingCodeWindow() {
            const inputWindowHeight = this.calcWindowHeight(9, true);
            const padding = $gameSystem.windowPadding();
            const ww = 600;
            const wh = 144 + padding * 2;
            const wx = (Graphics.boxWidth - ww) / 2;
            const wy = (Graphics.boxHeight - (wh + inputWindowHeight + 8)) / 2 + 10;
            const rect = new Rectangle(wx, wy, ww, wh);
            this._postingCodeWindow = new Window_PostingCode(rect, postingCodeMaxLength);
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

        update() {
            Scene_MenuBase.prototype.update.call(this);
            if (Input.isTriggered("cancel") && this._postingStatus === PostingStatus.Init) {
                this.clickOnCancelButton();
            }
            if ((TouchInput.isTriggered() || Input.isTriggered("ok")) && this._postingStatus === PostingStatus.Completed) {
                //console.log("点击以返回");
                this.setPostingStatus(PostingStatus.Init);
            }
        }

        setPostingStatus(status) {
            this._postingStatus = status;
            switch (this._postingStatus) {
                case PostingStatus.Init:
                    this._cancelButton.visible = true;
                    this._infoWindow.hide();
                    this._postingCodeWindow.restoreDefault();
                    this._postingCodeWindow.show();
                    this._inputWindow.show();
                    this._inputWindow.activate();
                    break;
                case PostingStatus.Processing:
                    this._cancelButton.visible = false;
                    this._infoWindow.show();
                    this._postingCodeWindow.hide();
                    this._inputWindow.hide();
                    this._inputWindow.deactivate();
                    break;
                case PostingStatus.Completed:
                    this._cancelButton.visible = false;
                    this._infoWindow.show();
                    this._postingCodeWindow.hide();
                    this._inputWindow.hide();
                    this._inputWindow.deactivate();
                    break;
                default:
                    break;
            }
        }

        gainGift(gift) {
            console.log(gift);
            if (gift.type === "gold") {
                $gameParty.gainGold(gift.number);
            }
            if (gift.type === "item") {
                $gameParty.gainItem($dataItems[gift.id], gift.number);
            }
            if (gift.type === "weapon") {
                $gameParty.gainItem($dataWeapons[gift.id], gift.number, false);
            }
            if (gift.type === "armor") {
                $gameParty.gainItem($dataArmors[gift.id], gift.number, false);
            }
        }

        async fetchGifts(postingCode) {
            try {
                //'https://raw.githubusercontent.com/arrosev/RMMZPluginTestFile/refs/heads/main/SimulatedPostingPluginTest.json'
                const response = await fetch(simulatedPostingSceneRequestAddress);
                if (response.ok === true) {
                    const data = await response.json();
                    console.log("data: ", data);
                    const detailData = data[postingCode];
                    console.log("detailData: ", detailData);
                    if (detailData) {
                        console.log("匹配")
                        //判断是否过期
                        if (!detailData.expire) {
                            console.log("正在搜索礼物");
                            this._infoWindow.setText(tipsText4);
                            for (const gift of detailData.gifts) {
                                this.gainGift(gift);
                            }
                            console.log("info: ", detailData.info);
                            $gameParty._usedPostingCodes.push(postingCode);
                            this._infoWindow.setText(detailData.info);
                            this.setPostingStatus(PostingStatus.Completed);
                            //写入存档
                            // const latestSavefileId = DataManager.latestSavefileId();
                            // const savefileId = latestSavefileId === 0 ? 1 : latestSavefileId;
                            // console.log("savefileId: ", savefileId);
                            // $gameParty._usedPostingCodes.push(postingCode);
                            // $gameSystem.setSavefileId(savefileId);
                            // $gameSystem.onBeforeSave();
                            // DataManager.saveGame(savefileId);
                            // .then(() => {
                            //     console.log("配信完成，保存成功");
                            //     this._infoWindow.setText(detailData.info);
                            //     this.setPostingStatus(PostingStatus.Completed);
                            // })
                            // .catch((error) => {
                            //     console.log("catch error:", error);
                            //     $gameParty._usedPostingCodes.pop(postingCode);
                            //     this._infoWindow.setText(error);
                            //     this.setPostingStatus(PostingStatus.Completed);
                            // });
                        } else {
                            this._infoWindow.setText(tipsText6);
                            this.setPostingStatus(PostingStatus.Completed);
                        }
                    } else {
                        this._infoWindow.setText(tipsText5);
                        this.setPostingStatus(PostingStatus.Completed);
                    }
                } else {
                    this._infoWindow.setText(response.statusText);
                    this.setPostingStatus(PostingStatus.Completed);
                }
            } catch (err) {
                this._infoWindow.setText(err);
                this.setPostingStatus(PostingStatus.Completed);
            }
        }

        onInputOk() {
            if (this._postingStatus === PostingStatus.Init) {
                this.setPostingStatus(PostingStatus.Processing);
                const postingCode = this._postingCodeWindow.postingCode();
                console.log("PostingCode: ", postingCode);
                if ($gameParty._usedPostingCodes) {
                    console.log("再次使用配信码");
                    //判断是否已经兑换过配信码
                    if (!$gameParty._usedPostingCodes.includes(postingCode)) {
                        console.log("未使用过的配信码");
                        this._infoWindow.setText(tipsText2);
                        this.fetchGifts(postingCode);
                    } else {
                        this._infoWindow.setText(tipsText3);
                        this.setPostingStatus(PostingStatus.Completed);
                    }
                } else {
                    $gameParty._usedPostingCodes = [];
                    console.log("第一次使用配信码");
                    this._infoWindow.setText(tipsText2);
                    this.fetchGifts(postingCode);
                }
            }
        }

        clickOnCancelButton() {
            SoundManager.playCancel();
            this.popScene();
        }

    }

    class Window_Info extends Window_Base {

        initialize(rect) {
            Window_Base.prototype.initialize.call(this, rect);
            this.inlineIconWidth = ImageManager.iconWidth;
        }

        setText(text) {
            if (text) {
                const textSize = this.textSizeEx(text);
                this.width = this._padding * 2 + textSize.width;
                this.height = this._padding * 2 + textSize.height;
                this.x = (Graphics.boxWidth - this.width) / 2;
                this.y = (Graphics.boxHeight - this.height) / 2;
                this.contents.resize(this.contentsWidth(), this.contentsHeight());
                this.contentsBack.resize(this.contentsWidth(), this.contentsHeight());
                this.drawTextEx(text, 0, (this.contents.height - textSize.height) / 2, textSize.width);
            }
        }

        processEscapeCharacter(code, textState) {
            switch (code) {
            case "C":
                this.processColorChange(this.obtainEscapeParam(textState));
                break;
            case "I":
                this.processDrawIcon(this.obtainEscapeParam(textState), textState);
                break;
            case "IS":
                this.inlineIconWidth = this.obtainEscapeParam(textState);
                break;
            case "PX":
                textState.x = this.obtainEscapeParam(textState);
                break;
            case "PY":
                textState.y = this.obtainEscapeParam(textState);
                break;
            case "FS":
                this.contents.fontSize = this.obtainEscapeParam(textState);
                break;
            case "{":
                this.makeFontBigger();
                break;
            case "}":
                this.makeFontSmaller();
                break;
            }
        }

        processDrawIcon(iconIndex, textState) {
            if (textState.drawing) {
                this.drawIcon(iconIndex, textState.x + 2, textState.y);
            }
            textState.x += this.inlineIconWidth + 4;
        }

        drawIcon(iconIndex, x, y) {
            const bitmap = ImageManager.loadSystem("IconSet");
            const pw = ImageManager.iconWidth;
            const ph = ImageManager.iconHeight;
            const sx = (iconIndex % 16) * pw;
            const sy = Math.floor(iconIndex / 16) * ph;
            this.contents.blt(bitmap, sx, sy, pw, ph, x, y + (this.lineHeight() - this.inlineIconWidth) / 2, this.inlineIconWidth, this.inlineIconWidth);
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
            return postingCodeCharWidth;
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
            this.contentsBack.drawText(tipsText1, 20, 8, this.width, this.lineHeight(), "left");
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
                          "/","=","@","<",">",  ":",";"," ","Del","OK"];
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

        isDeleteCode() {
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

        // cursorPagedown() {
        //     this._page = (this._page + 1) % this.table().length;
        //     this.refresh();
        // }

        // cursorPageup() {
        //     this._page = (this._page + this.table().length - 1) % this.table().length;
        //     this.refresh();
        // }

        processCursorMove() {
            //const lastPage = this._page;
            Window_Selectable.prototype.processCursorMove.call(this);
            this.updateCursor();
            // if (this._page !== lastPage) {
            //     this.playCursorSound();
            // }
        }

        processHandling() {
            if (this.isOpen() && this.active) {
                if (Input.isTriggered("shift")) {
                    this.processJump();
                }
                // if (Input.isRepeated("cancel")) {
                //     console.log("Input.isRepeated(cancel)");
                //     SceneManager.pop();
                //     SoundManager.playCancel();
                //     //this.processBack();
                // }
                if (Input.isTriggered("ok")) {
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
            } else if (this.isDeleteCode()) {
                this.processBack();
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