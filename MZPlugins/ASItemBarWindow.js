/*:
 * @target MZ
 * @plugindesc [V1.0.0] Item Bar Window Plugin
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * This plugin is released under the MIT license.
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
 * This plugin is mainly used to make item bar windows.
 * 
 * 
 */

const ASItemBarWindowNameSpace = (() => {
    "use strict";

    const pluginName = "ASItemBarWindow";
    const parameters = PluginManager.parameters(pluginName);

    Input.keyMapper["73"] = "itembar";

    console.log("Input.keyMapper: ", Input.keyMapper)

    class Window_ItemBarCommand extends Window_Command {

        initialize(rect) {
            Window_Command.prototype.initialize.call(this, rect);
        }

        makeCommandList() {
            this.addCommand(TextManager.equip2, "equip");
            this.addCommand(TextManager.optimize, "optimize");
            this.addCommand(TextManager.clear, "clear");
        }

    }

    const _Scene_Map_CreateDisplayObjects = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function() {
        _Scene_Map_CreateDisplayObjects.apply(this, arguments);

        const rect = new Rectangle(50, 50, 100, 400);
        this.itemBarCommandWindow = new Window_Base(rect);
        this.itemBarCommandWindow.visible = false;
        this.addChild(this.itemBarCommandWindow);

    };

    const _Scene_Map_Update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_Update.apply(this, arguments);

        if (Input.isTriggered("itembar")) {

            if(this.itemBarCommandWindow.visible === false) {
                this.itemBarCommandWindow.visible = true;
                //this.addChild(this.itemBarCommandWindow);
            } else {
                this.itemBarCommandWindow.visible = false;
                //this.removeChild(this.itemBarCommandWindow);
            }

            console.log("this: ", this)
            console.log("Scene_Map.prototype.update---------itembar")
        }

    };

})();