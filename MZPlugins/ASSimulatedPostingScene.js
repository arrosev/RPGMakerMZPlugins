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
        }

        createPostingCodeWindow() {
            const inputWindowHeight = this.calcWindowHeight(9, true);
            const padding = $gameSystem.windowPadding();
            const ww = 600;
            const wh = 144 + padding * 2;
            const wx = (Graphics.boxWidth - ww) / 2;
            const wy = (Graphics.boxHeight - (wh + inputWindowHeight + 8)) / 2;
            const rect = new Rectangle(wx, wy, ww, wh);;
            this._postingCodeWindow = new Window_PostingCode(rect, 8);
            this.addWindow(this._postingCodeWindow);
            this._postingCodeWindow.refresh();
        }

    }

    class Window_PostingCode extends Window_Base {

        initialize(rect, maxLength) {
            Window_Base.prototype.initialize.call(this, rect);
            this._maxLength = maxLength;
            this._postingCode = "ASGIGJML";
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
            console.log("index: ", index);
            //const x = (this.width - index * this.charWidth()) / 2;
            const x = this._leftPadding + index * this.charWidth();
            const y = 54;
            const width = this.charWidth();
            const height = this.lineHeight();
            console.log("Rect: ", x, y, width, height);
            return new Rectangle(x, y, width, height);
        }

        underlineRect(index) {
            const rect = this.itemRect(index);
            rect.x++;
            rect.y += rect.height - 4;
            rect.width -= 2;
            rect.height = 2;
            return rect;
        }

        underlineColor() {
            return ColorManager.normalColor();
        }

        drawTips() {
            this.contentsBack.fontSize = 20;
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

    return {
        Scene_SimulatedPosting
    }    

})();