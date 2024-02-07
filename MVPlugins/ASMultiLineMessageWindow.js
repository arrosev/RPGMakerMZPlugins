/*:
 * @plugindesc 【V1.0.0】为地图对话窗口显示超过4行文字
 * @author Arrose https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * 这个插件用于那些显示超过4行的对话窗口，例如委托公告等窗口
 * 
 * 插件指令举例：addText 1 表示显示插件参数公告列表的第一个公告
 * 
 * 【V1.0.0】
 *    1. 为地图对话窗口显示超过4行文字
 * 
 * @param announcements
 * @text 公告列表
 * @desc 设置公告列表
 * @type note[]
 * @default []
 * 
 * @param visibleRows
 * @text 最多显示行数
 * @desc 设置对话框最多显示行数
 * @type number
 * @default 4
 * 
 */


(() => {
    'use strict';

    const pluginName = "ASMultiLineMessageWindow";
    const parameters = PluginManager.parameters(pluginName);

    const announcements = JSON.parse(parameters.announcements !== undefined ? parameters.announcements : "[]");

    let visibleRows = Number(parameters.visibleRows) || 4;

    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'addText') {
            const index = Number(args[0]) || 1;
            if (index >= 1 && index <= announcements.length) {
                const text = JSON.parse(announcements[index - 1]);
                $gameMessage.add(text);
                this.setWaitMode('message');
            }
        }
    };

    const _Num_Visible_Rows = Window_Message.prototype.numVisibleRows;
    Window_Message.prototype.numVisibleRows = function() {
        let numVisibleLines = _Num_Visible_Rows.apply(this, arguments);
        numVisibleLines = visibleRows;
        return numVisibleLines;
    };

})();