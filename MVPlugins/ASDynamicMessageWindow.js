/*:
 * @target MV
 * @plugindesc 【V1.0.1】 以屏幕左上角为原点，动态修改地图对话框位置和大小
 * @author Arrose https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * 这个插件可以全局为所有地图对话框（信息窗口）设置相同的位置和大小，也可以单独控制
 * 每一条对话框（信息窗口）的位置和大小
 * 
 * 【V1.0.0】
 *    1. 通过插件参数可以全局为所有对话框设置位置和大小
 *    2. 通过插件命令可以单独为局部某一个对话框设置位置和大小，会覆盖全局设置，
 *       但是只作用于插件命令后紧跟的一条对话框
 * 
 * 【V1.0.1】
 *    1. 修复和行数插件兼容问题（现在不会随着行数插件最大行数来调整对话框高度，现在默认是使用4行的高度）
 * 
 * @param globalModifications
 * @text 对话框全局修改
 * @desc 是否开启全局修改对话框位置和大小
 * @default false
 * @type boolean
 * 
 * @param x
 * @text X
 * @desc 设置对话框左上角全局横坐标
 * @type number
 * @default 0
 * @parent globalModifications
 * 
 * @param y
 * @text Y
 * @desc 设置对话框左上角全局纵坐标
 * @type number
 * @default 0
 * @parent globalModifications
 * 
 * @param width
 * @text Width
 * @desc 设置对话框全局宽度
 * @type number
 * @default 0
 * @parent globalModifications
 * 
 * @param height
 * @text Height
 * @desc 设置对话框全局高度
 * @type number
 * @default 0
 * @parent globalModifications
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

    let nowRect = new Rectangle(0, 0, 0, 0);

    const isSameRect = function(rect1, rect2) {
        if(rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height) {
            return true;
        } else {
            return false;
        }
    };

    const _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'set') {
            partialModifications = true
            partialRect.x = Number(args[0] || 0);
            partialRect.y = Number(args[1] || 0);
            partialRect.width = Number(args[2] || 0);
            partialRect.height = Number(args[3] || 0);
        }
    };
    
    const _Update_Placement = Window_Message.prototype.updatePlacement;
    Window_Message.prototype.updatePlacement = function() {

        _Update_Placement.apply(this, arguments);

        nowRect.x = this.x;
        nowRect.y = this.y;
        nowRect.width = this.width;
        nowRect.height = this.height;

        // console.log(Graphics.boxWidth)
        // console.log(this.fittingHeight(4))

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
                let originRect = new Rectangle((Graphics.boxWidth - this.windowWidth()) / 2, 0, this.windowWidth(), this.fittingHeight(4));
                this.move(originRect.x, (this._positionType * (Graphics.boxHeight - originRect.height)) / 2, originRect.width, originRect.height);
            }
        }
        
    };

})();