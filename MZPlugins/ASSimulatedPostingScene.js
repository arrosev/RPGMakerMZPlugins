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
            
        }

    }

    class Window_PostingCode extends Window_Base {

        initialize(rect, maxLength) {
            Window_Base.prototype.initialize.call(this, rect);
            this._maxLength = maxLength;
            this._postingCode = "";
            this._defaultPostingCode = "";
            this._index = 0;
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
            return this.textWidth("A");
        }

        

    }
    

})();