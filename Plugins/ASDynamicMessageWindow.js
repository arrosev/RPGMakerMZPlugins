/*:
 * @target MZ
 * @plugindesc 以屏幕左上角为原点，动态修改MessageWindow位置和大小
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * 这个插件可以全局为所有对话框（信息窗口）设置相同的位置和大小，也可以单独控制
 * 每一条对话框（信息窗口）的位置和大小
 * 
 *  1. 通过插件参数可以全局为所有对话框设置位置和大小
 *  2. 通过插件命令可以单独为局部某一个对话框设置位置和大小，会覆盖全局设置，但
 *     是只作用于插件命令后紧跟的一条对话框
 * 
 * @param globalModifications
 * @text 全局修改
 * @desc 是否开启全局修改MessageWindow位置和大小
 * @default false
 * @type boolean
 * 
 * @param x
 * @text X
 * @desc 设置MessageWindow左上角全局横坐标
 * @type number
 * @default 0
 * 
 * @param y
 * @text Y
 * @desc 设置MessageWindow左上角全局纵坐标
 * @type number
 * @default 0
 * 
 * @param width
 * @text Width
 * @desc 设置MessageWindow全局宽度
 * @type number
 * @default 0
 * 
 * @param height
 * @text Height
 * @desc 设置MessageWindow全局高度
 * @type number
 * @default 0
 * 
 * @command set
 * @text Set MessageWindow Rect
 * @desc 设置局部的MessageWindow的位置和大小
 * 
 * @arg x
 * @type number
 * @min 0
 * @default 0
 * @text X
 * @desc 左上角横坐标
 * 
 * @arg y
 * @type number
 * @min 0
 * @default 0
 * @text Y
 * @desc 左上角纵坐标
 * 
 * @arg width
 * @type number
 * @min 0
 * @default 0
 * @text Width
 * @desc 宽度
 * 
 * @arg height
 * @type number
 * @min 0
 * @default 0
 * @text Height
 * @desc 高度
 * 
 */

(() => {
    'use strict';

    const pluginName = "ASDynamicMessageWindow";
    const parameters = PluginManager.parameters(pluginName);

    let globalModifications = parameters.globalModifications !== "false";
    let globalRect = new Rectangle(Number(parameters.x) || 0, Number(parameters.y) || 0, Number(parameters.width) || 0, Number(parameters.height) || 0);

    let partialModifications = false;
    let partialRect = new Rectangle(0, 0, 0, 0);

    let originRect = new Rectangle(0, 0, 0, 0);
    let nowRect = new Rectangle(0, 0, 0, 0);

    const isSameRect = function(rect1, rect2) {
        if(rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height) {
            return true;
        } else {
            return false;
        }
    };

    PluginManager.registerCommand(pluginName, "set", args => {
        partialModifications = true
        partialRect.x = Number(args.x);
        partialRect.y = Number(args.y);
        partialRect.width = Number(args.width);
        partialRect.height = Number(args.height);
    });
    
    const _Update_Placement = Window_Message.prototype.updatePlacement;
    Window_Message.prototype.updatePlacement = function() {

        _Update_Placement.apply(this, arguments);

        nowRect.x = this.x;
        nowRect.y = this.y;
        nowRect.width = this.width;
        nowRect.height = this.height;

        if (partialModifications === true) {
            if (!isSameRect(nowRect, partialRect)) {
                this.move(partialRect.x, partialRect.y, partialRect.width, partialRect.height);
            }
            partialModifications = false;
        } else {
            if (globalModifications === true) {
                if (!isSameRect(nowRect, globalRect)) {
                    this.move(globalRect.x, globalRect.y, globalRect.width, globalRect.height);
                }
            } else {
                if (!isSameRect(nowRect, originRect)) {
                    this.move(originRect.x, (this._positionType * (Graphics.boxHeight - originRect.height)) / 2, originRect.width, originRect.height);
                }
            }
        }
        
    };

    const _Message_Window_Rect = Scene_Message.prototype.messageWindowRect;
    Scene_Message.prototype.messageWindowRect = function() {
        let rect = _Message_Window_Rect.apply(this, arguments);
        originRect = rect;
        return globalModifications ? globalRect : rect;
    }

})();