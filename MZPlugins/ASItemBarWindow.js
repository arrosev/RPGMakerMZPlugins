/*:
 * @target MZ
 * @plugindesc [V1.0.1] Item Bar Window Plugin
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
 * Key Code Reference: https://www.toptal.com/developers/keycode
 * 
 * [V1.0.0]
 * Features:
 *      1. Display a toolbar with all items in the map scene.
 *      2. Use a variable to get the ID of the currently held item.
 *      3. A common event can be executed after clicking on an item.
 *      4. You can set a thumbnail for each item in the toolbar in the item notes.
 *      5. You can attach an icon tag to the currently held item.
 *      6. You can display a preview image of the currently held items.
 * 
 * [V1.0.1]
 * Change:
 *      1. Compatible with old archives that have acquired items before using the plugin.
 * 
 * Note:
 *      1. Item note format: <ASItemBarThumbnail:items/bottles>, 
 *         "items/bottles" refers to the path of the item's thumbnail 
 *         in the img folder, no file extension is needed, and there 
 *         can't be any space in the middle of the label, please refer
 *         to the Demo's Folder structure.
 *      2. A bound variable must be set in the "Item Bar Window Action", 
 *         common events are optional.
 *      3. Every time an item is clicked, a common event is executed, 
 *         if it is not possible to execute a common event at the moment, 
 *         the event will be saved to the common event list first and will
 *         be executed when it is possible to do so.
 *      4. The gamepad was only tested on my xbox 2nd gen elite, it seems 
 *         that my gamepad is recognized as an xbox 360 controller, other 
 *         gamepads may require modifications to the parameters of the 
 *         gamepad control.
 *      5. Keyboard default controls: I(show and hide) 
 *                                    U(cursor up)
 *                                    O(cursor down)
 *                                    H(holding item)
 *                                    K(empty handed)
 * 
 *      6. Gamepad default controls: Start(show and hide) 
 *                                   LT(cursor up)
 *                                   RT(cursor down)
 *                                   LS(holding item)
 *                                   RS(empty handed)
 *      7. Items mentioned in this plugin do not include weapons, armor, etc, items
 *         here are only those that appear in the database item categorization.
 *      8. (v1.0.0)Incompatible with old archives that have acquired items before using
 *         this plugin, because this plugin records the order in which items are first 
 *         acquired, the order in which items were acquired before this plugin was 
 *         used is not recorded.
 * 
 * 
 * @noteParam ASItemBarThumbnail
 * @noteRequire 1
 * @noteDir img/
 * @noteType file
 * @noteData items
 * 
 * @param itemBarWindowSet
 * @text Item Bar Window Set
 * @desc Item Bar Window Set
 * @type string
 * @default
 * 
 * @param keyboardControlSet
 * @text Keyboard Control Set
 * @desc Keyboard Control Set
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarShowKeyCode
 * @text Show Key Code
 * @desc Show Key Code (default 73(I))
 * @parent keyboardControlSet
 * @type string
 * @default 73
 * 
 * @param itemBarUpKeyCode
 * @text Up Key Code
 * @desc Up Key Code (default 85(U))
 * @parent keyboardControlSet
 * @type string
 * @default 85
 * 
 * @param itemBarDownKeyCode
 * @text Down Key Code
 * @desc Down Key Code (default 79(O))
 * @parent keyboardControlSet
 * @type string
 * @default 79
 * 
 * @param itemBarClickKeyCode
 * @text Click Key Code
 * @desc Click Key Code (holding item) (default 72(H))
 * @parent keyboardControlSet
 * @type string
 * @default 72
 * 
 * @param itemBarEmptyHandedKeyCode
 * @text Empty Handed Key Code
 * @desc Empty Handed Key Code (default 75(K))
 * @parent keyboardControlSet
 * @type string
 * @default 75
 * 
 * @param gamepadControlSet
 * @text Gamepad Control Set
 * @desc Gamepad Control Set
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarShowButtonCode
 * @text Show Button Code
 * @desc Show Button Code (default 9(Start button))
 * @parent gamepadControlSet
 * @type string
 * @default 9
 * 
 * @param itemBarUpButtonCode
 * @text Up Button Code
 * @desc Up Button Code (default 6(Left trigger))
 * @parent gamepadControlSet
 * @type string
 * @default 6
 * 
 * @param itemBarDownButtonCode
 * @text Down Button Code
 * @desc Down Button Code (default 7(Right trigger))
 * @parent gamepadControlSet
 * @type string
 * @default 7
 * 
 * @param itemBarClickButtonCode
 * @text Click Button Code
 * @desc Click Button Code (holding item) (default 10(Left stick))
 * @parent gamepadControlSet
 * @type string
 * @default 10
 * 
 * @param itemBarEmptyHandedButtonCode
 * @text Empty Handed Button Code
 * @desc Empty Handed Button Code (default 11(Right stick))
 * @parent gamepadControlSet
 * @type string
 * @default 11
 * 
 * @param itemBarWindowStyle
 * @text Item Bar Window Style
 * @desc Item Bar Window Style
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarWindowWindowSkin
 * @text Window Skin
 * @desc Item Bar Window WindowSkin
 * @parent itemBarWindowStyle
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @param itemBarWindowFinalOffset
 * @text Final Offset
 * @desc Item Bar Window Final Offset
 * @parent itemBarWindowStyle
 * @type struct<Point>
 * @default {"x":"50","y":"50"}
 * 
 * @param itemBarWindowItemWidth
 * @text Item Width
 * @desc Item Bar Window Item Width
 * @parent itemBarWindowStyle
 * @type number
 * @min 0
 * @default 96
 * 
 * @param itemBarWindowItemHeight
 * @text Item Height
 * @desc Item Bar Window Item Height
 * @parent itemBarWindowStyle
 * @type number
 * @min 0
 * @default 96
 * 
 * @param itemBarWindowPadding
 * @text Padding
 * @desc Item Bar Window Padding
 * @parent itemBarWindowStyle
 * @type number
 * @default 12
 * 
 * @param itemBarWindowRowSpacing
 * @text Row Spacing
 * @desc Item Bar Window Row Spacing
 * @parent itemBarWindowStyle
 * @type number
 * @default 4
 * 
 * @param itemBarWindowColSpacing
 * @text Col Spacing
 * @desc Item Bar Window Col Spacing
 * @parent itemBarWindowStyle
 * @type number
 * @default 8
 * 
 * @param itemBarWindowVisibleItems
 * @text Max Visible Items
 * @desc Item Bar Window Max Visible Items
 * @parent itemBarWindowStyle
 * @type number
 * @default 5
 * 
 * @param itemBarWindowItemText
 * @text ------Item Text------
 * @desc Styles for the item name text
 * @parent itemBarWindowStyle
 * @type string
 * @default 
 * 
 * @param itemBarWindowItemTextVisible
 * @text Text Visible
 * @desc Item Bar Window Item Text Visible
 * @parent itemBarWindowStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param itemBarWindowItemTextSize
 * @text Text Size
 * @desc Item Bar Window Item Text Size
 * @parent itemBarWindowStyle
 * @type number
 * @default 26
 * 
 * @param itemBarWindowItemTextColor
 * @text Text Color
 * @desc Item Bar Window Item Text Color
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param itemBarWindowItemTextOutlineColor
 * @text Text Outline Color
 * @desc Item Bar Window Item Text Outline Color
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param itemBarWindowItemNumberText
 * @text ----Item Number Text----
 * @desc Styles for the item Number text
 * @parent itemBarWindowStyle
 * @type string
 * @default 
 * 
 * @param itemBarWindowItemNumberTextVisible
 * @text Number Text Visible
 * @desc Item Bar Window Item Number Text Visible
 * @parent itemBarWindowStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param itemBarWindowItemNumberTextOffset
 * @text Number Text Offset
 * @desc Item Bar Window Item Number Text Offset
 * @parent itemBarWindowStyle
 * @type struct<Point>
 * @default {"x":"86","y":"86"}
 * 
 * @param itemBarWindowItemNumberTextSize
 * @text Number Text Size
 * @desc Item Bar Window Item Number Text Size
 * @parent itemBarWindowStyle
 * @type number
 * @default 16
 * 
 * @param itemBarWindowItemNumberTextColor
 * @text Number Text Color
 * @desc Item Bar Window Item Number Text Color
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param itemBarWindowItemNumberTextOutlineColor
 * @text Number Text Outline Color
 * @desc Item Bar Window Item Number Text Outline Color
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param itemBarWindowItemBackground
 * @text ---Item Background---
 * @desc Styles for the item background
 * @parent itemBarWindowStyle
 * @type string
 * @default
 * 
 * @param itemBarWindowItemBackgroundFormality
 * @text Background Formality
 * @desc Item Bar Window Item Background Formality
 * @parent itemBarWindowStyle
 * @type select
 * @option none
 * @option color
 * @option image
 * @default color
 * 
 * @param itemBarWindowItemBackgroundImage
 * @text Background Image
 * @desc Item Bar Window Item Background Image
 * @parent itemBarWindowStyle
 * @type file
 * @dir img/
 * @default
 * 
 * @param itemBarWindowItemBackgroundColor1
 * @text Background Color1
 * @desc Item Bar Window Item Background Color1
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param itemBarWindowItemBackgroundColor2
 * @text Background Color2
 * @desc Item Bar Window Item Background Color2
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"0.5"}
 * 
 * @param itemBarWindowItemBackgroundBorderColor
 * @text Background Border Color
 * @desc Item Bar Window Item Background Border Color
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param itemBarWindowItemBackgroundBorderLineWidth
 * @text Background Border Width
 * @desc Item Bar Window Item Background Border LineWidth
 * @parent itemBarWindowStyle
 * @type number
 * @min 0
 * @default 1
 * 
 * @param itemBarWindowItemBackgroundBorderRadius
 * @text Background Border Radius
 * @desc Item Bar Window Item Background Border Radius
 * @parent itemBarWindowStyle
 * @type number
 * @min 0
 * @default 0
 * 
 * @param itemBarWindowItemHoldingTag
 * @text ----Item Holding Tag----
 * @desc Styles for the item Holding Tag
 * @parent itemBarWindowStyle
 * @type string
 * @default
 * 
 * @param itemBarWindowItemHoldingTagVisible
 * @text Item Holding Tag Visible
 * @desc Item Bar Window Item Holding Tag Visible
 * @parent itemBarWindowStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param itemBarWindowItemHoldingTagOffset
 * @text Item Holding Tag Offset
 * @desc Item Bar Window Item Holding Tag Offset
 * @parent itemBarWindowStyle
 * @type struct<Point>
 * @default {"x":"5","y":"5"}
 * 
 * @param itemBarWindowItemHoldingTagImage
 * @text Item Holding Tag Image
 * @desc Item Bar Window Item Holding Tag Image
 * @parent itemBarWindowStyle
 * @type file
 * @dir img/
 * @default
 * 
 * @param itemBarWindowSoundEffects
 * @text Item Bar Window Sound Effects
 * @desc Item Bar Window Sound Effects
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarWindowShowSoundEffects
 * @text Show
 * @desc Show Sound Effects
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowHideSoundEffects
 * @text Hide
 * @desc Hide Sound Effects
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowHoldingItemSoundEffects
 * @text Holding Item
 * @desc Holding Item Sound Effects
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowEmptyHandedSoundEffects
 * @text Empty Handed
 * @desc Empty Handed Sound Effects
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowCursorMoveSoundEffects
 * @text Cursor Move
 * @desc Cursor Move Sound Effects
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowAction
 * @text Item Bar Window Action
 * @desc Item Bar Window Action
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarWindowHoldingItemIdVariable
 * @text Variable
 * @desc Variable holding the id of the item being held
 * @parent itemBarWindowAction
 * @type variable
 * @min 0
 * @default 0
 * 
 * @param itemBarWindowClickItemCommonEvents
 * @text Common Events
 * @desc Common events that are executed when an item is clicked
 * @parent itemBarWindowAction
 * @type common_event
 * @min 0
 * @default 0
 * 
 * @param itemPreviewWindowSet
 * @text Item Preview Window Set
 * @desc Item Preview Window Set
 * @type string
 * @default
 * 
 * @param itemPreviewWindowVisible
 * @text Visible
 * @desc Item Preview Window Visible
 * @parent itemPreviewWindowSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param itemPreviewWindowWindowSkin
 * @text Window Skin
 * @desc Item Preview Window WindowSkin
 * @parent itemPreviewWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @param itemPreviewWindowRect
 * @text Rect
 * @desc Item Preview Window Rect
 * @parent itemPreviewWindowSet
 * @type struct<Rect>
 * @default {"x":"624","y":"450","width":"124","height":"124"}
 * 
 * @param itemPreviewWindowPadding
 * @text Padding
 * @desc Item Preview Window Padding
 * @parent itemPreviewWindowSet
 * @type number
 * @default 12
 * 
 * @param itemPreviewWindowBackgroundImage
 * @text Background Image
 * @desc Item Preview Window Background Image
 * @parent itemPreviewWindowSet
 * @type file
 * @dir img/
 * @default
 * 
 * @param itemPreviewWindowEmptyHandedImage
 * @text Empty Handed Image
 * @desc Item Preview Window Empty Handed Image
 * @parent itemPreviewWindowSet
 * @type file
 * @dir img/
 * @default
 * 
 */

/*:zh
 * @target MZ
 * @plugindesc [V1.0.1] 物品工具栏窗口插件
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
 * 这个插件主要用于制作在地图场景的物品工具栏。
 * 键盘按键代码查询网站: https://www.toptal.com/developers/keycode
 * 
 * [V1.0.0]
 * 功能:
 *      1. 在地图场景中显示一个包含所有物品的工具栏
 *      2. 使用变量获取当前持有物品的ID
 *      3. 点击物品后可执行一个共通事件
 *      4. 您可以在物品的备注中为每一个物品设置一个在工具栏中显示的缩略图
 *      5. 您可以为当前持有的物品附加图标标签
 *      6. 您可以显示当前持有物品的预览图像
 * 
 * [V1.0.1]
 * 修改:
 *      1. 兼容在使用插件之前已经获取过物品的老存档
 * 
 * 注意:
 *      1. 物品备注格式：<ASItemBarThumbnail:items/bottles>，“items/bottles” 指
 *         img文件夹下的物品缩略图路径，不需要文件扩展名，标签中间不能有空格，具体请
 *         看Demo的文件夹结构
 *      2. 必须在 "物品栏窗口操作" 中设置绑定变量, 但共通事件是可选的
 *      3. 每次点击一个物品，都会执行一个共通事件， 如果暂时无法执行共通事件，
 *         事件将先保存到共通事件列表中，当可以执行时再执行
 *      4. 游戏手柄只用我的XBOX二代精英版测试过，我的游戏手柄似乎被识别
 *         为XBOX 360手柄，其他游戏手柄可能需要修改参数        
 *      5. 键盘默认控制: I(显示和隐藏) 
 *                      U(光标往上)              
 *                      O(光标往下)             
 *                      H(持有物品)              
 *                      K(空手)              
 * 
 *      6. 手柄默认控制: Start(显示和隐藏) 
 *                      LT(光标往上)             
 *                      RT(光标往下)             
 *                      LS(持有物品)             
 *                      RS(空手)             
 *      7. 本插件中提到的物品不包括武器、盔甲等，这里的物品仅指出现在数据库
 *         物品分类中的物品
 *      8. (v1.0.0)无法兼容在没有使用此插件之前已经获取物品的旧存档，因为此插件会记录
 *         物品首次获取的顺序，在没有使用此插件之前获取物品的顺序没有被记录
 * 
 * @noteParam ASItemBarThumbnail
 * @noteRequire 1
 * @noteDir img/
 * @noteType file
 * @noteData items
 * 
 * @param itemBarWindowSet
 * @text 物品栏窗口设置
 * @desc 物品栏窗口设置
 * @type string
 * @default
 * 
 * @param keyboardControlSet
 * @text 键盘控制设置
 * @desc 键盘控制设置
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarShowKeyCode
 * @text 显示隐藏按键代码
 * @desc 显示隐藏按键代码 (默认 73(I))
 * @parent keyboardControlSet
 * @type string
 * @default 73
 * 
 * @param itemBarUpKeyCode
 * @text 光标往上按键代码
 * @desc 光标往上按键代码 (默认 85(U))
 * @parent keyboardControlSet
 * @type string
 * @default 85
 * 
 * @param itemBarDownKeyCode
 * @text 光标往下按键代码
 * @desc 光标往下按键代码 (默认 79(O))
 * @parent keyboardControlSet
 * @type string
 * @default 79
 * 
 * @param itemBarClickKeyCode
 * @text 点击按键代码
 * @desc 点击按键代码 (持有物品) (默认 72(H))
 * @parent keyboardControlSet
 * @type string
 * @default 72
 * 
 * @param itemBarEmptyHandedKeyCode
 * @text 空手按键代码
 * @desc 空手按键代码 (默认 75(K))
 * @parent keyboardControlSet
 * @type string
 * @default 75
 * 
 * @param gamepadControlSet
 * @text 游戏手柄控制设置
 * @desc 游戏手柄控制设置
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarShowButtonCode
 * @text 显示隐藏按钮代码
 * @desc 显示隐藏按钮代码 (默认 9(Start button))
 * @parent gamepadControlSet
 * @type string
 * @default 9
 * 
 * @param itemBarUpButtonCode
 * @text 光标往上按钮代码
 * @desc 光标往上按钮代码 (默认 6(Left trigger))
 * @parent gamepadControlSet
 * @type string
 * @default 6
 * 
 * @param itemBarDownButtonCode
 * @text 光标往下按钮代码
 * @desc 光标往下按钮代码 (默认 7(Right trigger))
 * @parent gamepadControlSet
 * @type string
 * @default 7
 * 
 * @param itemBarClickButtonCode
 * @text 点击按钮代码
 * @desc 点击按钮代码 (持有物品) (默认 10(Left stick))
 * @parent gamepadControlSet
 * @type string
 * @default 10
 * 
 * @param itemBarEmptyHandedButtonCode
 * @text 空手按钮代码
 * @desc 空手按钮代码 (默认 11(Right stick))
 * @parent gamepadControlSet
 * @type string
 * @default 11
 * 
 * @param itemBarWindowStyle
 * @text 物品栏窗口样式
 * @desc 物品栏窗口样式
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarWindowWindowSkin
 * @text 窗口皮肤
 * @desc 物品栏窗口皮肤
 * @parent itemBarWindowStyle
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @param itemBarWindowFinalOffset
 * @text 最终偏移
 * @desc 物品栏窗口最终偏移
 * @parent itemBarWindowStyle
 * @type struct<Point>
 * @default {"x":"50","y":"50"}
 * 
 * @param itemBarWindowItemWidth
 * @text 物品单元格宽度
 * @desc 物品栏窗口物品单元格宽度
 * @parent itemBarWindowStyle
 * @type number
 * @min 0
 * @default 96
 * 
 * @param itemBarWindowItemHeight
 * @text 物品单元格高度
 * @desc 物品栏窗口物品单元格高度
 * @parent itemBarWindowStyle
 * @type number
 * @min 0
 * @default 96
 * 
 * @param itemBarWindowPadding
 * @text 内边距
 * @desc 物品栏窗口内边距
 * @parent itemBarWindowStyle
 * @type number
 * @default 12
 * 
 * @param itemBarWindowRowSpacing
 * @text 行间距
 * @desc 物品栏窗口行间距
 * @parent itemBarWindowStyle
 * @type number
 * @default 4
 * 
 * @param itemBarWindowColSpacing
 * @text 列间距
 * @desc 物品栏窗口列间距
 * @parent itemBarWindowStyle
 * @type number
 * @default 8
 * 
 * @param itemBarWindowVisibleItems
 * @text 最大可见物品数
 * @desc 物品栏窗口最大可见物品数
 * @parent itemBarWindowStyle
 * @type number
 * @default 5
 * 
 * @param itemBarWindowItemText
 * @text ------物品名文本------
 * @desc 物品名文本样式
 * @parent itemBarWindowStyle
 * @type string
 * @default 
 * 
 * @param itemBarWindowItemTextVisible
 * @text 文本可见性
 * @desc 物品栏窗口文本可见性
 * @parent itemBarWindowStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param itemBarWindowItemTextSize
 * @text 文本字体大小
 * @desc 物品栏窗口文本字体大小
 * @parent itemBarWindowStyle
 * @type number
 * @default 26
 * 
 * @param itemBarWindowItemTextColor
 * @text 文本颜色
 * @desc 物品栏窗口文本颜色
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param itemBarWindowItemTextOutlineColor
 * @text 文本描边颜色
 * @desc 物品栏窗口文本描边颜色
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param itemBarWindowItemNumberText
 * @text ----物品数量文本----
 * @desc 物品数量文本样式
 * @parent itemBarWindowStyle
 * @type string
 * @default 
 * 
 * @param itemBarWindowItemNumberTextVisible
 * @text 数量文本可见性
 * @desc 物品栏窗口数量文本可见性
 * @parent itemBarWindowStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param itemBarWindowItemNumberTextOffset
 * @text 数量文本偏移
 * @desc 物品栏窗口数量文本偏移
 * @parent itemBarWindowStyle
 * @type struct<Point>
 * @default {"x":"86","y":"86"}
 * 
 * @param itemBarWindowItemNumberTextSize
 * @text 数量文本字体大小
 * @desc 物品栏窗口数量文本字体大小
 * @parent itemBarWindowStyle
 * @type number
 * @default 16
 * 
 * @param itemBarWindowItemNumberTextColor
 * @text 数量文本颜色
 * @desc 物品栏窗口数量文本颜色
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param itemBarWindowItemNumberTextOutlineColor
 * @text 数量文本描边颜色
 * @desc 物品栏窗口数量文本描边颜色
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param itemBarWindowItemBackground
 * @text ---物品单元背景---
 * @desc 物品单元背景样式
 * @parent itemBarWindowStyle
 * @type string
 * @default
 * 
 * @param itemBarWindowItemBackgroundFormality
 * @text 背景形式
 * @desc 物品栏窗口背景形式
 * @parent itemBarWindowStyle
 * @type select
 * @option none
 * @option color
 * @option image
 * @default color
 * 
 * @param itemBarWindowItemBackgroundImage
 * @text 背景图片
 * @desc 物品栏窗口背景图片
 * @parent itemBarWindowStyle
 * @type file
 * @dir img/
 * @default
 * 
 * @param itemBarWindowItemBackgroundColor1
 * @text 背景颜色1
 * @desc 物品栏窗口背景颜色1
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param itemBarWindowItemBackgroundColor2
 * @text 背景颜色2
 * @desc 物品栏窗口背景颜色2
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"0.5"}
 * 
 * @param itemBarWindowItemBackgroundBorderColor
 * @text 背景边框颜色
 * @desc 物品栏窗口背景边框颜色
 * @parent itemBarWindowStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param itemBarWindowItemBackgroundBorderLineWidth
 * @text 背景边框厚度
 * @desc 物品栏窗口背景边框厚度
 * @parent itemBarWindowStyle
 * @type number
 * @min 0
 * @default 1
 * 
 * @param itemBarWindowItemBackgroundBorderRadius
 * @text 背景边框半径
 * @desc 物品栏窗口背景边框半径
 * @parent itemBarWindowStyle
 * @type number
 * @min 0
 * @default 0
 * 
 * @param itemBarWindowItemHoldingTag
 * @text ----物品持有标签----
 * @desc 物品持有标签样式
 * @parent itemBarWindowStyle
 * @type string
 * @default
 * 
 * @param itemBarWindowItemHoldingTagVisible
 * @text 物品持有标签可见性
 * @desc 物品栏窗口物品持有标签可见性
 * @parent itemBarWindowStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param itemBarWindowItemHoldingTagOffset
 * @text 物品持有标签偏移
 * @desc 物品栏窗口物品持有标签偏移
 * @parent itemBarWindowStyle
 * @type struct<Point>
 * @default {"x":"5","y":"5"}
 * 
 * @param itemBarWindowItemHoldingTagImage
 * @text 物品持有标签图片
 * @desc 物品栏窗口物品持有标签图片
 * @parent itemBarWindowStyle
 * @type file
 * @dir img/
 * @default
 * 
 * @param itemBarWindowSoundEffects
 * @text 物品栏窗口声音效果
 * @desc 物品栏窗口声音效果
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarWindowShowSoundEffects
 * @text 显示
 * @desc 显示声音效果
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowHideSoundEffects
 * @text 隐藏
 * @desc 隐藏声音效果
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowHoldingItemSoundEffects
 * @text 持有物品
 * @desc 持有物品声音效果
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowEmptyHandedSoundEffects
 * @text 空手
 * @desc 空手声音效果
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowCursorMoveSoundEffects
 * @text 光标移动
 * @desc 光标移动声音效果
 * @parent itemBarWindowSoundEffects
 * @type struct<SoundEffects>
 * @default {"name":"","pan":"0","pitch":"100","volume":"90"}
 * 
 * @param itemBarWindowAction
 * @text 物品栏窗口操作
 * @desc 物品栏窗口操作
 * @parent itemBarWindowSet
 * @type string
 * @default
 * 
 * @param itemBarWindowHoldingItemIdVariable
 * @text 变量
 * @desc 保存持有物品ID的变量
 * @parent itemBarWindowAction
 * @type variable
 * @min 0
 * @default 0
 * 
 * @param itemBarWindowClickItemCommonEvents
 * @text 共通事件
 * @desc 点击物品时执行的共通事件
 * @parent itemBarWindowAction
 * @type common_event
 * @min 0
 * @default 0
 * 
 * @param itemPreviewWindowSet
 * @text 物品预览窗口设置
 * @desc 物品预览窗口设置
 * @type string
 * @default
 * 
 * @param itemPreviewWindowVisible
 * @text 可见性
 * @desc 物品预览窗口可见性
 * @parent itemPreviewWindowSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param itemPreviewWindowWindowSkin
 * @text 窗口皮肤
 * @desc 物品预览窗口皮肤
 * @parent itemPreviewWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @param itemPreviewWindowRect
 * @text 布局
 * @desc 物品预览窗口布局
 * @parent itemPreviewWindowSet
 * @type struct<Rect>
 * @default {"x":"624","y":"450","width":"124","height":"124"}
 * 
 * @param itemPreviewWindowPadding
 * @text 内边距
 * @desc 物品预览窗口内边距
 * @parent itemPreviewWindowSet
 * @type number
 * @default 12
 * 
 * @param itemPreviewWindowBackgroundImage
 * @text 背景图片
 * @desc 物品预览窗口背景图片
 * @parent itemPreviewWindowSet
 * @type file
 * @dir img/
 * @default
 * 
 * @param itemPreviewWindowEmptyHandedImage
 * @text 空手图片
 * @desc 物品预览窗口空手图片
 * @parent itemPreviewWindowSet
 * @type file
 * @dir img/
 * @default
 * 
 */

/*~struct~Point:
 * 
 * @param x
 * @text X
 * @desc X
 * @type number
 * @default 0
 * 
 * @param y
 * @text Y
 * @desc Y
 * @type number
 * @default 0
 * 
 */

/*~struct~Rect:
 * 
 * @param x
 * @text X
 * @desc X
 * @type number
 * @default 0
 * 
 * @param y
 * @text Y
 * @desc Y
 * @type number
 * @default 0
 * 
 * @param width
 * @text Width
 * @desc Width
 * @type number
 * @min 0
 * @default 0
 * 
 * @param height
 * @text Height
 * @desc Height
 * @type number
 * @min 0
 * @default 0
 * 
 */

/*~struct~Color:
 * 
 * @param r
 * @text R
 * @desc R
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param g
 * @text G
 * @desc G
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param b
 * @text B
 * @desc B
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * 
 * @param a
 * @text A
 * @desc A Range of values (0-1)
 * @type string
 * @min 0.0
 * @max 1.0
 * @default 1.0
 * 
 */

/*~struct~SoundEffects:
 * 
 * @param name
 * @text Name[名称]
 * @desc Name[名称]
 * @type file
 * @dir audio/se
 * @default
 * 
 * @param pan
 * @text Pan[声像]
 * @desc Pan[声像](-100 ~ 100)
 * @type string
 * @default 0
 * 
 * @param pitch
 * @text Pitch[音调]
 * @desc Pitch[音调](50 ~ 150)
 * @type number
 * @min 50
 * @max 150
 * @default 100
 * 
 * @param volume
 * @text Volume[音量]
 * @desc Volume[音量](0 ~ 100)
 * @type number
 * @min 0
 * @max 100
 * @default 90
 * 
 */

const ASItemBarWindowNameSpace = (() => {
    "use strict";

    const pluginName = "ASItemBarWindow";
    const parameters = PluginManager.parameters(pluginName);

    //------Keyboard Control Set------
    const itemBarShowKeyCode = parameters.itemBarShowKeyCode;
    const itemBarUpKeyCode = parameters.itemBarUpKeyCode;
    const itemBarDownKeyCode = parameters.itemBarDownKeyCode;
    const itemBarClickKeyCode = parameters.itemBarClickKeyCode;
    const itemBarEmptyHandedKeyCode = parameters.itemBarEmptyHandedKeyCode;

    //------Gamepad Control Set------
    const itemBarShowButtonCode = parameters.itemBarShowButtonCode;
    const itemBarUpButtonCode = parameters.itemBarUpButtonCode;
    const itemBarDownButtonCode = parameters.itemBarDownButtonCode;
    const itemBarClickButtonCode = parameters.itemBarClickButtonCode;
    const itemBarEmptyHandedButtonCode = parameters.itemBarEmptyHandedButtonCode;

    //------Item Bar Set------
    const itemBarWindowWindowSkin = parameters.itemBarWindowWindowSkin;
    const itemBarWindowFinalOffsetJsonObject = JSON.parse(parameters.itemBarWindowFinalOffset);
    const itemBarWindowFinalOffset = new Point(Number(itemBarWindowFinalOffsetJsonObject.x) || 0, Number(itemBarWindowFinalOffsetJsonObject.y) || 0);

    const itemBarWindowItemWidth = Number(parameters.itemBarWindowItemWidth);
    const itemBarWindowItemHeight = Number(parameters.itemBarWindowItemHeight);
    const itemBarWindowPadding = Number(parameters.itemBarWindowPadding);
    const itemBarWindowRowSpacing = Number(parameters.itemBarWindowRowSpacing);
    const itemBarWindowColSpacing = Number(parameters.itemBarWindowColSpacing);
    const itemBarWindowVisibleItems = Number(parameters.itemBarWindowVisibleItems);

    //------Item Text------
    const itemBarWindowItemTextVisible = parameters.itemBarWindowItemTextVisible !== "false";
    const itemBarWindowItemTextSize = Number(parameters.itemBarWindowItemTextSize) || 26;
    const itemBarWindowItemTextColorJsonObject = JSON.parse(parameters.itemBarWindowItemTextColor);
    const itemBarWindowItemTextOutlineColorJsonObject = JSON.parse(parameters.itemBarWindowItemTextOutlineColor);

    //----Item Number Text----
    const itemBarWindowItemNumberTextVisible = parameters.itemBarWindowItemNumberTextVisible !== "false";
    const itemBarWindowItemNumberTextOffsetJsonObject = JSON.parse(parameters.itemBarWindowItemNumberTextOffset);
    const itemBarWindowItemNumberTextOffset = new Point(Number(itemBarWindowItemNumberTextOffsetJsonObject.x) || 0, Number(itemBarWindowItemNumberTextOffsetJsonObject.y) || 0);
    const itemBarWindowItemNumberTextSize = Number(parameters.itemBarWindowItemNumberTextSize) || 16;
    const itemBarWindowItemNumberTextColorJsonObject = JSON.parse(parameters.itemBarWindowItemNumberTextColor);
    const itemBarWindowItemNumberTextOutlineColorJsonObject = JSON.parse(parameters.itemBarWindowItemNumberTextOutlineColor);

    //---Item Background---
    const itemBarWindowItemBackgroundFormalitySelectNone = "none";
    const itemBarWindowItemBackgroundFormalitySelectColor = "color";
    const itemBarWindowItemBackgroundFormalitySelectImage = "image";

    const itemBarWindowItemBackgroundFormality = parameters.itemBarWindowItemBackgroundFormality;
    const itemBarWindowItemBackgroundImage = parameters.itemBarWindowItemBackgroundImage;
    const itemBarWindowItemBackgroundColor1JsonObject = JSON.parse(parameters.itemBarWindowItemBackgroundColor1);
    const itemBarWindowItemBackgroundColor2JsonObject = JSON.parse(parameters.itemBarWindowItemBackgroundColor2);
    const itemBarWindowItemBackgroundBorderColorJsonObject = JSON.parse(parameters.itemBarWindowItemBackgroundBorderColor);
    const itemBarWindowItemBackgroundBorderLineWidth = Number(parameters.itemBarWindowItemBackgroundBorderLineWidth);
    const itemBarWindowItemBackgroundBorderRadius = Number(parameters.itemBarWindowItemBackgroundBorderRadius);

    //---Item Holding Tag---
    const itemBarWindowItemHoldingTagVisible = parameters.itemBarWindowItemHoldingTagVisible !== "false";
    const itemBarWindowItemHoldingTagOffsetJsonObject = JSON.parse(parameters.itemBarWindowItemHoldingTagOffset);
    const itemBarWindowItemHoldingTagOffset = new Point(Number(itemBarWindowItemHoldingTagOffsetJsonObject.x) || 0, Number(itemBarWindowItemHoldingTagOffsetJsonObject.y) || 0);
    const itemBarWindowItemHoldingTagImage = parameters.itemBarWindowItemHoldingTagImage;

    //---Sound Effects---
    const itemBarWindowShowSoundEffects = parameters.itemBarWindowShowSoundEffects;
    const itemBarWindowHideSoundEffects = parameters.itemBarWindowHideSoundEffects;
    const itemBarWindowHoldingItemSoundEffects = parameters.itemBarWindowHoldingItemSoundEffects;
    const itemBarWindowEmptyHandedSoundEffects = parameters.itemBarWindowEmptyHandedSoundEffects;
    const itemBarWindowCursorMoveSoundEffects = parameters.itemBarWindowCursorMoveSoundEffects;

    //------Action------
    const itemBarWindowHoldingItemIdVariable =  Number(parameters.itemBarWindowHoldingItemIdVariable) || 0;
    const itemBarWindowClickItemCommonEvents =  Number(parameters.itemBarWindowClickItemCommonEvents) || 0;

    //------Item Preview Set------
    const itemPreviewWindowVisible = parameters.itemPreviewWindowVisible !== "false";
    const itemPreviewWindowWindowSkin = parameters.itemPreviewWindowWindowSkin;
    const itemPreviewWindowRectObject = JSON.parse(parameters.itemPreviewWindowRect);
    const itemPreviewWindowRect = new Rectangle(Number(itemPreviewWindowRectObject.x) || 0, Number(itemPreviewWindowRectObject.y) || 0, Number(itemPreviewWindowRectObject.width) || 0, Number(itemPreviewWindowRectObject.height) || 0);
    const itemPreviewWindowPadding = Number(parameters.itemPreviewWindowPadding);
    const itemPreviewWindowBackgroundImage = parameters.itemPreviewWindowBackgroundImage;
    const itemPreviewWindowEmptyHandedImage = parameters.itemPreviewWindowEmptyHandedImage;

    Input.keyMapper[itemBarShowKeyCode] = "itembarshow";//I
    Input.keyMapper[itemBarUpKeyCode] = "itembarup";//U
    Input.keyMapper[itemBarDownKeyCode] = "itembardown";//O
    Input.keyMapper[itemBarClickKeyCode] = "itembarclick";//H
    Input.keyMapper[itemBarEmptyHandedKeyCode] = "itembaremptyhanded";//K

    //console.log("Input.keyMapper: ", Input.keyMapper)

    Input.gamepadMapper[itemBarShowButtonCode] = "itembarshow";//Start Button
    Input.gamepadMapper[itemBarUpButtonCode] = "itembarup";//LT
    Input.gamepadMapper[itemBarDownButtonCode] = "itembardown";//RT
    Input.gamepadMapper[itemBarClickButtonCode] = "itembarclick";//LS
    Input.gamepadMapper[itemBarEmptyHandedButtonCode] = "itembaremptyhanded";//RS

    //console.log("Input.gamepadMapper: ", Input.gamepadMapper)

    //***************************************************************************
    // ---------------------------- Interpolation Animation Dependency Library Start ----------------------------
    //***************************************************************************

    // Kittykatattack Universal License
    // ================================

    // This software is free to use for anything, for ever.
    // It's freer than free.
    // It's like a pebble - you can pick it up and throw it into the sea. 

    //The following interpolation animation dependency library is adapted from MIT-licenced code by kittykatattack, available here https://github.com/kittykatattack/charm

    class Charm {
      constructor(renderingEngine = PIXI) {

        if (renderingEngine === undefined) throw new Error("Please assign a rendering engine in the constructor before using charm.js");

        //Find out which rendering engine is being used (the default is Pixi)
        this.renderer = "";

        //If the `renderingEngine` is Pixi, set up Pixi object aliases
        if (renderingEngine.ParticleContainer && renderingEngine.Sprite) {
          this.renderer = "pixi";
        }


        //An array to store the global tweens
        this.globalTweens = [];

        //An object that stores all the easing formulas
        this.easingFormulas = {

          //Linear
          linear(x) {
            return x;
          },

          //Smoothstep
          smoothstep(x) {
            return x * x * (3 - 2 * x);
          },
          smoothstepSquared(x) {
            return Math.pow((x * x * (3 - 2 * x)), 2);
          },
          smoothstepCubed(x) {
            return Math.pow((x * x * (3 - 2 * x)), 3);
          },

          //Acceleration
          acceleration(x) {
            return x * x;
          },
          accelerationCubed(x) {
            return Math.pow(x * x, 3);
          },

          //Deceleration
          deceleration(x) {
            return 1 - Math.pow(1 - x, 2);
          },
          decelerationCubed(x) {
            return 1 - Math.pow(1 - x, 3);
          },

          //Sine
          sine(x) {
            return Math.sin(x * Math.PI / 2);
          },
          sineSquared(x) {
            return Math.pow(Math.sin(x * Math.PI / 2), 2);
          },
          sineCubed(x) {
            return Math.pow(Math.sin(x * Math.PI / 2), 2);
          },
          inverseSine(x) {
            return 1 - Math.sin((1 - x) * Math.PI / 2);
          },
          inverseSineSquared(x) {
            return 1 - Math.pow(Math.sin((1 - x) * Math.PI / 2), 2);
          },
          inverseSineCubed(x) {
            return 1 - Math.pow(Math.sin((1 - x) * Math.PI / 2), 3);
          },

          //Spline
          spline(t, p0, p1, p2, p3) {
            return 0.5 * (
              (2 * p1) +
              (-p0 + p2) * t +
              (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t +
              (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t
            );
          },

          //Bezier curve
          cubicBezier(t, a, b, c, d) {
            let t2 = t * t;
            let t3 = t2 * t;
            return a + (-a * 3 + t * (3 * a - a * t)) * t + (3 * b + t * (-6 * b + b * 3 * t)) * t + (c * 3 - c * 3 * t) * t2 + d * t3;
          }
        };

        //Add `scaleX` and `scaleY` properties to Pixi sprites
        this._addScaleProperties = (sprite) => {
          if (this.renderer === "pixi") {
            if (!("scaleX" in sprite) && ("scale" in sprite) && ("x" in sprite.scale)) {
              Object.defineProperty(
                sprite,
                "scaleX", {
                get() {
                  return sprite.scale.x
                },
                set(value) {
                  sprite.scale.x = value
                }
              }
              );
            }
            if (!("scaleY" in sprite) && ("scale" in sprite) && ("y" in sprite.scale)) {
              Object.defineProperty(
                sprite,
                "scaleY", {
                get() {
                  return sprite.scale.y
                },
                set(value) {
                  sprite.scale.y = value
                }
              }
              );
            }
          }
        };
      }

      //The low level `tweenProperty` function is used as the foundation
      //for the the higher level tween methods.
      tweenProperty(
        sprite, //Sprite object
        property, //String property
        startValue, //Tween start value
        endValue, //Tween end value
        totalFrames, //Duration in frames
        type = "smoothstep", //The easing type
        yoyo = false, //Yoyo?
        delayBeforeRepeat = 0 //Delay in frames before repeating
      ) {

        //Create the tween object
        let o = {};

        //If the tween is a bounce type (a spline), set the
        //start and end magnitude values
        let typeArray = type.split(" ");
        if (typeArray[0] === "bounce") {
          o.startMagnitude = parseInt(typeArray[1]);
          o.endMagnitude = parseInt(typeArray[2]);
        }

        //Use `o.start` to make a new tween using the current
        //end point values
        o.start = (startValue, endValue) => {

          //Clone the start and end values so that any possible references to sprite
          //properties are converted to ordinary numbers 
          o.startValue = JSON.parse(JSON.stringify(startValue));
          o.endValue = JSON.parse(JSON.stringify(endValue));
          o.playing = true;
          o.totalFrames = totalFrames;
          o.frameCounter = 0;

          //Add the tween to the global `tweens` array. The `tweens` array is
          //updated on each frame
          this.globalTweens.push(o);
        };

        //Call `o.start` to start the tween
        o.start(startValue, endValue);

        //The `update` method will be called on each frame by the game loop.
        //This is what makes the tween move
        o.update = () => {

          let time, curvedTime;

          if (o.playing) {

            //If the elapsed frames are less than the total frames,
            //use the tweening formulas to move the sprite
            if (o.frameCounter < o.totalFrames) {

              //Find the normalized value
              let normalizedTime = o.frameCounter / o.totalFrames;

              //Select the correct easing function from the 
              //`ease` object’s library of easing functions


              //If it's not a spline, use one of the ordinary easing functions
              if (typeArray[0] !== "bounce") {
                curvedTime = this.easingFormulas[type](normalizedTime);
              }

              //If it's a spline, use the `spline` function and apply the
              //2 additional `type` array values as the spline's start and
              //end points
              else {
                curvedTime = this.easingFormulas.spline(normalizedTime, o.startMagnitude, 0, 1, o.endMagnitude);
              }

              //Interpolate the sprite's property based on the curve
              sprite[property] = (o.endValue * curvedTime) + (o.startValue * (1 - curvedTime));

              o.frameCounter += 1;
            }

            //When the tween has finished playing, run the end tasks
            else {
              sprite[property] = o.endValue;
              o.end();
            }
          }
        };

        //The `end` method will be called when the tween is finished
        o.end = () => {

          //Set `playing` to `false`
          o.playing = false;

          //Call the tween's `onComplete` method, if it's been assigned
          if (o.onComplete) o.onComplete();

          //Remove the tween from the `tweens` array
          this.globalTweens.splice(this.globalTweens.indexOf(o), 1);

          //If the tween's `yoyo` property is `true`, create a new tween
          //using the same values, but use the current tween's `startValue`
          //as the next tween's `endValue` 
          if (yoyo) {
            this.wait(delayBeforeRepeat).then(() => {
              o.start(o.endValue, o.startValue);
            });
          }
        };

        //Pause and play methods
        o.play = () => o.playing = true;
        o.pause = () => o.playing = false;

        //Return the tween object
        return o;
      }

      //`makeTween` is a general low-level method for making complex tweens
      //out of multiple `tweenProperty` functions. Its one argument,
      //`tweensToAdd` is an array containing multiple `tweenProperty` calls

      makeTween(tweensToAdd) {

        //Create an object to manage the tweens
        let o = {};

        //Create a `tweens` array to store the new tweens
        o.tweens = [];

        //Make a new tween for each array
        tweensToAdd.forEach(tweenPropertyArguments => {

          //Use the tween property arguments to make a new tween
          let newTween = this.tweenProperty(...tweenPropertyArguments);

          //Push the new tween into this object's internal `tweens` array
          o.tweens.push(newTween);
        });

        //Add a counter to keep track of the
        //number of tweens that have completed their actions
        let completionCounter = 0;

        //`o.completed` will be called each time one of the tweens
        //finishes
        o.completed = () => {

          //Add 1 to the `completionCounter`
          completionCounter += 1;

          //If all tweens have finished, call the user-defined `onComplete`
          //method, if it's been assigned. Reset the `completionCounter`
          if (completionCounter === o.tweens.length) {
            if (o.onComplete) o.onComplete();
            completionCounter = 0;
          }
        };

        //Add `onComplete` methods to all tweens
        o.tweens.forEach(tween => {
          tween.onComplete = () => o.completed();
        });

        //Add pause and play methods to control all the tweens
        o.pause = () => {
          o.tweens.forEach(tween => {
            tween.playing = false;
          });
        };
        o.play = () => {
          o.tweens.forEach(tween => {
            tween.playing = true;
          });
        };

        //Return the tween object
        return o;
      }

      /* High level tween methods */

      //1. Simple tweens

      //`fadeOut`
      fadeOut(sprite, frames = 60) {
        return this.tweenProperty(
          sprite, "alpha", sprite.alpha, 0, frames, "sine"
        );
      }

      //`fadeIn`
      fadeIn(sprite, frames = 60) {
        return this.tweenProperty(
          sprite, "alpha", sprite.alpha, 1, frames, "sine"
        );
      }

      //`pulse`
      //Fades the sprite in and out at a steady rate.
      //Set the `minAlpha` to something greater than 0 if you
      //don't want the sprite to fade away completely
      pulse(sprite, frames = 60, minAlpha = 0) {
        return this.tweenProperty(
          sprite, "alpha", sprite.alpha, minAlpha, frames, "smoothstep", true
        );
      }

      //2. Complex tweens

      slide(
        sprite, endX, endY,
        frames = 60, type = "smoothstep", yoyo = false, delayBeforeRepeat = 0
      ) {
        return this.makeTween([

          //Create the x axis tween
          [sprite, "x", sprite.x, endX, frames, type, yoyo, delayBeforeRepeat],

          //Create the y axis tween
          [sprite, "y", sprite.y, endY, frames, type, yoyo, delayBeforeRepeat]

        ]);
      }

      breathe(
        sprite, endScaleX = 0.8, endScaleY = 0.8,
        frames = 60, yoyo = true, delayBeforeRepeat = 0
      ) {

        //Add `scaleX` and `scaleY` properties to Pixi sprites
        this._addScaleProperties(sprite);

        return this.makeTween([

          //Create the scaleX tween
          [
            sprite, "scaleX", sprite.scaleX, endScaleX,
            frames, "smoothstepSquared", yoyo, delayBeforeRepeat
          ],

          //Create the scaleY tween
          [
            sprite, "scaleY", sprite.scaleY, endScaleY,
            frames, "smoothstepSquared", yoyo, delayBeforeRepeat
          ]
        ]);
      }

      scale(sprite, endScaleX = 0.5, endScaleY = 0.5, frames = 60) {

        //Add `scaleX` and `scaleY` properties to Pixi sprites
        this._addScaleProperties(sprite);

        return this.makeTween([

          //Create the scaleX tween
          [
            sprite, "scaleX", sprite.scaleX, endScaleX,
            frames, "smoothstep", false
          ],

          //Create the scaleY tween
          [
            sprite, "scaleY", sprite.scaleY, endScaleY,
            frames, "smoothstep", false
          ]
        ]);
      }

      strobe(
        sprite, scaleFactor = 1.3, startMagnitude = 10, endMagnitude = 20,
        frames = 10, yoyo = true, delayBeforeRepeat = 0
      ) {

        let bounce = "bounce " + startMagnitude + " " + endMagnitude;

        //Add `scaleX` and `scaleY` properties to Pixi sprites
        this._addScaleProperties(sprite);

        return this.makeTween([

          //Create the scaleX tween
          [
            sprite, "scaleX", sprite.scaleX, scaleFactor, frames,
            bounce, yoyo, delayBeforeRepeat
          ],

          //Create the scaleY tween
          [
            sprite, "scaleY", sprite.scaleY, scaleFactor, frames,
            bounce, yoyo, delayBeforeRepeat
          ]
        ]);
      }

      wobble(
        sprite,
        scaleFactorX = 1.2,
        scaleFactorY = 1.2,
        frames = 10,
        xStartMagnitude = 10,
        xEndMagnitude = 10,
        yStartMagnitude = -10,
        yEndMagnitude = -10,
        friction = 0.98,
        yoyo = true,
        delayBeforeRepeat = 0
      ) {

        let bounceX = "bounce " + xStartMagnitude + " " + xEndMagnitude;
        let bounceY = "bounce " + yStartMagnitude + " " + yEndMagnitude;

        //Add `scaleX` and `scaleY` properties to Pixi sprites
        this._addScaleProperties(sprite);

        let o = this.makeTween([

          //Create the scaleX tween
          [
            sprite, "scaleX", sprite.scaleX, scaleFactorX, frames,
            bounceX, yoyo, delayBeforeRepeat
          ],

          //Create the scaleY tween
          [
            sprite, "scaleY", sprite.scaleY, scaleFactorY, frames,
            bounceY, yoyo, delayBeforeRepeat
          ]
        ]);

        //Add some friction to the `endValue` at the end of each tween 
        o.tweens.forEach(tween => {
          tween.onComplete = () => {

            //Add friction if the `endValue` is greater than 1
            if (tween.endValue > 1) {
              tween.endValue *= friction;

              //Set the `endValue` to 1 when the effect is finished and 
              //remove the tween from the global `tweens` array
              if (tween.endValue <= 1) {
                tween.endValue = 1;
                this.removeTween(tween);
              }
            }
          };
        });

        return o;
      }

      //3. Motion path tweens

      followCurve(
        sprite,
        pointsArray,
        totalFrames,
        type = "smoothstep",
        yoyo = false,
        delayBeforeRepeat = 0
      ) {

        //Create the tween object
        let o = {};

        //If the tween is a bounce type (a spline), set the
        //start and end magnitude values
        let typeArray = type.split(" ");
        if (typeArray[0] === "bounce") {
          o.startMagnitude = parseInt(typeArray[1]);
          o.endMagnitude = parseInt(typeArray[2]);
        }

        //Use `tween.start` to make a new tween using the current
        //end point values
        o.start = (pointsArray) => {
          o.playing = true;
          o.totalFrames = totalFrames;
          o.frameCounter = 0;

          //Clone the points array
          o.pointsArray = JSON.parse(JSON.stringify(pointsArray));

          //Add the tween to the `globalTweens` array. The `globalTweens` array is
          //updated on each frame
          this.globalTweens.push(o);
        };

        //Call `tween.start` to start the first tween
        o.start(pointsArray);

        //The `update` method will be called on each frame by the game loop.
        //This is what makes the tween move
        o.update = () => {

          let normalizedTime, curvedTime,
            p = o.pointsArray;

          if (o.playing) {

            //If the elapsed frames are less than the total frames,
            //use the tweening formulas to move the sprite
            if (o.frameCounter < o.totalFrames) {

              //Find the normalized value
              normalizedTime = o.frameCounter / o.totalFrames;

              //Select the correct easing function

              //If it's not a spline, use one of the ordinary tween
              //functions
              if (typeArray[0] !== "bounce") {
                curvedTime = this.easingFormulas[type](normalizedTime);
              }

              //If it's a spline, use the `spline` function and apply the
              //2 additional `type` array values as the spline's start and
              //end points
              else {
                //curve = tweenFunction.spline(n, type[1], 0, 1, type[2]);
                curvedTime = this.easingFormulas.spline(normalizedTime, o.startMagnitude, 0, 1, o.endMagnitude);
              }

              //Apply the Bezier curve to the sprite's position 
              sprite.x = this.easingFormulas.cubicBezier(curvedTime, p[0][0], p[1][0], p[2][0], p[3][0]);
              sprite.y = this.easingFormulas.cubicBezier(curvedTime, p[0][1], p[1][1], p[2][1], p[3][1]);

              //Add one to the `elapsedFrames`
              o.frameCounter += 1;
            }

            //When the tween has finished playing, run the end tasks
            else {
              //sprite[property] = o.endValue;
              o.end();
            }
          }
        };

        //The `end` method will be called when the tween is finished
        o.end = () => {

          //Set `playing` to `false`
          o.playing = false;

          //Call the tween's `onComplete` method, if it's been
          //assigned
          if (o.onComplete) o.onComplete();

          //Remove the tween from the global `tweens` array
          this.globalTweens.splice(this.globalTweens.indexOf(o), 1);

          //If the tween's `yoyo` property is `true`, reverse the array and
          //use it to create a new tween
          if (yoyo) {
            this.wait(delayBeforeRepeat).then(() => {
              o.pointsArray = o.pointsArray.reverse();
              o.start(o.pointsArray);
            });
          }
        };

        //Pause and play methods
        o.pause = () => {
          o.playing = false;
        };
        o.play = () => {
          o.playing = true;
        };

        //Return the tween object
        return o;
      }

      walkPath(
        sprite, //The sprite
        originalPathArray, //A 2D array of waypoints
        totalFrames = 300, //The duration, in frames
        type = "smoothstep", //The easing type
        loop = false, //Should the animation loop?
        yoyo = false, //Shoud the direction reverse?
        delayBetweenSections = 0 //Delay, in milliseconds, between sections
      ) {

        //Clone the path array so that any possible references to sprite
        //properties are converted into ordinary numbers 
        let pathArray = JSON.parse(JSON.stringify(originalPathArray));

        //Figure out the duration, in frames, of each path section by 
        //dividing the `totalFrames` by the length of the `pathArray`
        let frames = totalFrames / pathArray.length;

        //Set the current point to 0, which will be the first waypoint
        let currentPoint = 0;

        //The `makePath` function creates a single tween between two points and
        //then schedules the next path to be made after it
        let makePath = (currentPoint) => {

          //Use the `makeTween` function to tween the sprite's
          //x and y position
          let tween = this.makeTween([

            //Create the x axis tween between the first x value in the
            //current point and the x value in the following point
            [
              sprite,
              "x",
              pathArray[currentPoint][0],
              pathArray[currentPoint + 1][0],
              frames,
              type
            ],

            //Create the y axis tween in the same way
            [
              sprite,
              "y",
              pathArray[currentPoint][1],
              pathArray[currentPoint + 1][1],
              frames,
              type
            ]
          ]);

          //When the tween is complete, advance the `currentPoint` by one.
          //Add an optional delay between path segments, and then make the
          //next connecting path
          tween.onComplete = () => {

            //Advance to the next point
            currentPoint += 1;

            //If the sprite hasn't reached the end of the
            //path, tween the sprite to the next point
            if (currentPoint < pathArray.length - 1) {
              this.wait(delayBetweenSections).then(() => {
                tween = makePath(currentPoint);
              });
            }

            //If we've reached the end of the path, optionally
            //loop and yoyo it
            else {

              //Reverse the path if `loop` is `true`
              if (loop) {

                //Reverse the array if `yoyo` is `true`
                if (yoyo) pathArray.reverse();

                //Optionally wait before restarting
                this.wait(delayBetweenSections).then(() => {

                  //Reset the `currentPoint` to 0 so that we can
                  //restart at the first point
                  currentPoint = 0;

                  //Set the sprite to the first point
                  sprite.x = pathArray[0][0];
                  sprite.y = pathArray[0][1];

                  //Make the first new path
                  tween = makePath(currentPoint);

                  //... and so it continues!
                });
              }
            }
          };

          //Return the path tween to the main function
          return tween;
        };

        //Make the first path using the internal `makePath` function (below)
        let tween = makePath(currentPoint);

        //Pass the tween back to the main program
        return tween;
      }

      walkCurve(
        sprite, //The sprite
        pathArray, //2D array of Bezier curves
        totalFrames = 300, //The duration, in frames
        type = "smoothstep", //The easing type
        loop = false, //Should the animation loop?
        yoyo = false, //Should the direction reverse?
        delayBeforeContinue = 0 //Delay, in milliseconds, between sections
      ) {

        //Divide the `totalFrames` into sections for each part of the path
        let frames = totalFrames / pathArray.length;

        //Set the current curve to 0, which will be the first one
        let currentCurve = 0;

        //The `makePath` function
        let makePath = (currentCurve) => {

          //Use the custom `followCurve` function to make
          //a sprite follow a curve
          let tween = this.followCurve(
            sprite,
            pathArray[currentCurve],
            frames,
            type
          );

          //When the tween is complete, advance the `currentCurve` by one.
          //Add an optional delay between path segments, and then make the
          //next path
          tween.onComplete = () => {
            currentCurve += 1;
            if (currentCurve < pathArray.length) {
              this.wait(delayBeforeContinue).then(() => {
                tween = makePath(currentCurve);
              });
            }

            //If we've reached the end of the path, optionally
            //loop and reverse it
            else {
              if (loop) {
                if (yoyo) {

                  //Reverse order of the curves in the `pathArray` 
                  pathArray.reverse();

                  //Reverse the order of the points in each curve
                  pathArray.forEach(curveArray => curveArray.reverse());
                }

                //After an optional delay, reset the sprite to the
                //beginning of the path and make the next new path
                this.wait(delayBeforeContinue).then(() => {
                  currentCurve = 0;
                  sprite.x = pathArray[0][0];
                  sprite.y = pathArray[0][1];
                  tween = makePath(currentCurve);
                });
              }
            }
          };

          //Return the path tween to the main function
          return tween;
        };

        //Make the first path
        let tween = makePath(currentCurve);

        //Pass the tween back to the main program
        return tween;
      }

      //4. Utilities

      /*
      The `wait` method lets you set up a timed sequence of events
    
        wait(1000)
          .then(() => console.log("One"))
          .then(() => wait(1000))
          .then(() => console.log("Two"))
          .then(() => wait(1000))
          .then(() => console.log("Three"))
    
      */

      wait(duration = 0) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, duration);
        });
      }

      //A utility to remove tweens from the game
      removeTween(tweenObject) {

        //Remove the tween if `tweenObject` doesn't have any nested
        //tween objects
        if (!tweenObject.tweens) {
          tweenObject.pause();

          //array.splice(-1,1) will always remove last elemnt of array, so this
          //extra check prevents that (Thank you, MCumic10! https://github.com/kittykatattack/charm/issues/5)
          if (this.globalTweens.indexOf(tweenObject) != -1) {
            this.globalTweens.splice(this.globalTweens.indexOf(tweenObject), 1);
          }

          //Otherwise, remove the nested tween objects
        } else {
          tweenObject.pause();
          tweenObject.tweens.forEach(element => {
            this.globalTweens.splice(this.globalTweens.indexOf(element), 1);
          });
        }
      }

      update() {

        //Update all the tween objects in the `globalTweens` array
        if (this.globalTweens.length > 0) {
          for (let i = this.globalTweens.length - 1; i >= 0; i--) {
            let tween = this.globalTweens[i];
            if (tween) tween.update();
          }
        }
      }
    }

    //***************************************************************************
    // ---------------------------- Interpolation Animation Dependency Library End ----------------------------
    //***************************************************************************

    // Private Functions and System Class Extensions

    const colorJsonObjectConvertToColorRGBA = function (object) {
      return `rgba(${Number(object.r)}, ${Number(object.g)}, ${Number(object.b)}, ${Number(object.a)})`;
    }

    Bitmap.prototype.strokeRoundRect = function (x, y, width, height, color, lineWidth, radius) {
      const context = this.context;
      context.save();
      context.strokeStyle = color;
      context.lineWidth = lineWidth;

      context.beginPath();

      context.moveTo(x + radius, y);

      context.lineTo(x + width - radius, y);
      context.quadraticCurveTo(x + width, y, x + width, y + radius);

      context.lineTo(x + width, y + height - radius);
      context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

      context.lineTo(x + radius, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - radius);

      context.lineTo(x, y + radius);
      context.quadraticCurveTo(x, y, x + radius, y);

      context.closePath();

      context.stroke();

      context.restore();
      this._baseTexture.update();
    };

    Bitmap.prototype.fillRoundRect = function (x, y, width, height, color, radius) {
      const context = this.context;
      context.save();
      context.fillStyle = color;

      context.beginPath();

      context.moveTo(x + radius, y);

      context.lineTo(x + width - radius, y);
      context.quadraticCurveTo(x + width, y, x + width, y + radius);

      context.lineTo(x + width, y + height - radius);
      context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

      context.lineTo(x + radius, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - radius);

      context.lineTo(x, y + radius);
      context.quadraticCurveTo(x, y, x + radius, y);

      context.closePath();

      context.fill();

      context.restore();
      this._baseTexture.update();
    };

    Bitmap.prototype.gradientFillRoundRect = function (x, y, width, height, color1, color2, vertical, radius) {
      const context = this.context;
      const x1 = vertical ? x : x + width;
      const y1 = vertical ? y + height : y;
      const grad = context.createLinearGradient(x, y, x1, y1);
      grad.addColorStop(0, color1);
      grad.addColorStop(1, color2);
      context.save();
      context.fillStyle = grad;

      context.beginPath();

      context.moveTo(x + radius, y);

      context.lineTo(x + width - radius, y);
      context.quadraticCurveTo(x + width, y, x + width, y + radius);

      context.lineTo(x + width, y + height - radius);
      context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

      context.lineTo(x + radius, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - radius);

      context.lineTo(x, y + radius);
      context.quadraticCurveTo(x, y, x + radius, y);

      context.closePath();

      context.fill();

      context.restore();
      this._baseTexture.update();
    };

    const playSoundEffectsObject = function (soundEffects) {
      if (soundEffects) {
        const soundEffectsObject = JSON.parse(soundEffects);
        if (soundEffectsObject.name.length !== 0) {
          AudioManager.playStaticSe(soundEffectsObject);
        }
      }
    }

    // Game_Interpreter.prototype.callCommonEvent = function(ceid, immediately) {  
    //   let child = this;
    //   while(child._childInterpreter)  child = child._childInterpreter;
    //   child.setupChild($dataCommonEvents[ceid].list, child._eventId);
    //   if(immediately) child.updateChild();
    // }

    class Window_ItemBarCommand extends Window_Command {

      initialize(rect) {
        Window_Command.prototype.initialize.call(this, rect);
        this.proxy = null;
        this.windowskin = ImageManager.loadSystem(itemBarWindowWindowSkin);
        this._padding = itemBarWindowPadding;
      }

      colSpacing() {
        return itemBarWindowColSpacing;
      }

      rowSpacing() {
        return itemBarWindowRowSpacing;
      }

      itemWidth() {
        return itemBarWindowItemWidth + this.colSpacing();
      }

      itemHeight() {
        return itemBarWindowItemHeight + this.rowSpacing();
      }

      makeCommandList() {
        const orderItems = $gameParty.orderItems();
        // console.log("makeCommandList---------items: ", $gameParty.items())
        // console.log("makeCommandList---------orderItems: ", orderItems)
        for (const item of orderItems) {
          this.addCommand(item.name, `${item.id}`);
        }

        for (const command of this._list) {
          this.setHandler(command.symbol, this.commandActionBind.bind(this, Number(command.symbol) || 0));
        }
      }

      commandActionBind(itemId) {
        if (itemBarWindowHoldingItemIdVariable >= 1 && itemId >= 1) {
          const lastHoldingItemIdVariableValue = $gameVariables.value(itemBarWindowHoldingItemIdVariable);
          //console.log("lastHoldingItemIdVariableValue: ", lastHoldingItemIdVariableValue)
          const lastHoldingItemTagIndex = this.findSymbol(`${lastHoldingItemIdVariableValue}`)
          //console.log("lastHoldingItemTagIndex: ", lastHoldingItemTagIndex)

          $gameVariables.setValue(itemBarWindowHoldingItemIdVariable, itemId);

          const currentHoldingItemIdVariableValue = $gameVariables.value(itemBarWindowHoldingItemIdVariable);
          const currentHoldingItemTagIndex = this.findSymbol(`${currentHoldingItemIdVariableValue}`)
          this.redrawItem(lastHoldingItemTagIndex);
          this.redrawItem(currentHoldingItemTagIndex);
        }
        
        if (itemBarWindowClickItemCommonEvents >= 1) {
          //$gameMap._interpreter.callCommonEvent(itemBarWindowClickItemCommonEvents, true);
          $gameTemp.reserveCommonEvent(itemBarWindowClickItemCommonEvents);
        }

        if (this.proxy && this.proxy.__proto__.hasOwnProperty("refreshContent")) {
          const currentHoldingItemIdVariableValue = $gameVariables.value(itemBarWindowHoldingItemIdVariable);
          this.proxy.refreshContent(currentHoldingItemIdVariableValue, false);
        }

        this.activate();
      }


      drawGainItem(item, isNewItem) {
        // console.log("drawGainItem---------items: ", $gameParty.items())
        // console.log("drawGainItem----------$gameParty.orderItems(): ", $gameParty.orderItems())
        if (isNewItem) {
          this.addCommand(item.name, `${item.id}`);
          const newItemCommand = this._list[this._list.length - 1];
          this.setHandler(newItemCommand.symbol, this.commandActionBind.bind(this, Number(newItemCommand.symbol) || 0));
          this.redrawItem(this._list.length - 1);
        } else {
          const addItemNumberIndex = this.findSymbol(`${item.id}`);
          this.redrawItem(addItemNumberIndex);
        }
      }

      drawLoseItem(item) {
        if ($gameParty.numItems(item) !== 0) {
          const loseItemIndex = this.findSymbol(`${item.id}`)
          this.redrawItem(loseItemIndex);
        } else {
          const currentHoldingItemIdVariableValue = $gameVariables.value(itemBarWindowHoldingItemIdVariable);
          // console.log("drawLoseItem---currentHoldingItemIdVariableValue: ", currentHoldingItemIdVariableValue)
          if(currentHoldingItemIdVariableValue !== 0 && currentHoldingItemIdVariableValue === item.id) {
            $gameVariables.setValue(itemBarWindowHoldingItemIdVariable, 0);
            if (this.proxy && this.proxy.__proto__.hasOwnProperty("refreshContent")) {
              this.proxy.refreshContent(0, false);
            }
          }
          // console.log("drawLoseItem---------items: ", $gameParty.items())
          // console.log("drawLoseItem----------$gameParty.orderItems(): ", $gameParty.orderItems())
          const deleteItemIndex = this.findSymbol(`${item.id}`)
          //console.log("deleteItemIndex: ", deleteItemIndex)
          if (deleteItemIndex !== -1) {
            //console.log("drawLoseItem----------refresh")
            this.refresh();
            //console.log("drawLoseItem----------smoothScrollBy")
            this.smoothScrollBy(0, itemBarWindowItemHeight + itemBarWindowRowSpacing);
            this.select(-1)
          }
        }
      }

      drawItemText(index) {
        if (itemBarWindowItemTextVisible === true) {
          const rect = this.itemLineRect(index);
          const align = this.itemTextAlign();
          this.contents.fontSize = itemBarWindowItemTextSize;
          this.changeTextColor(colorJsonObjectConvertToColorRGBA(itemBarWindowItemTextColorJsonObject));
          this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(itemBarWindowItemTextOutlineColorJsonObject));
          this.changePaintOpacity(this.isCommandEnabled(index));
          this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
        }
      }

      drawItemNumberText(index) {
        if (itemBarWindowItemNumberTextVisible === true) {
          const rect = this.itemRect(index);
          const itemId = Number(this.commandSymbol(index)) || 0;
          const itemNumber = $gameParty.numItems($dataItems[itemId]);
          this.contents.fontSize = itemBarWindowItemNumberTextSize;
          this.changeTextColor(colorJsonObjectConvertToColorRGBA(itemBarWindowItemNumberTextColorJsonObject));
          this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(itemBarWindowItemNumberTextOutlineColorJsonObject));
          this.changePaintOpacity(this.isCommandEnabled(index));
          const width = this.textWidth(itemNumber);
          this.drawText(itemNumber, rect.x + itemBarWindowItemNumberTextOffset.x - width, rect.y + itemBarWindowItemNumberTextOffset.y, width, "right");
        }
      }

      drawItemHoldingTag(index) {
        const currentHoldingItemIdVariableValue = $gameVariables.value(itemBarWindowHoldingItemIdVariable);
        const itemId = Number(this.commandSymbol(index)) || 0;
        // console.log("drawItemHoldingTag-------currentHoldingItemIdVariableValue: ", currentHoldingItemIdVariableValue)
        // console.log("drawItemHoldingTag-------itemId: ", itemId)
        if (itemBarWindowItemHoldingTagVisible === true && currentHoldingItemIdVariableValue !== 0 && currentHoldingItemIdVariableValue === itemId) {
          if (itemBarWindowItemHoldingTagImage) {
            const rect = this.itemRect(index);
            const bitmap = ImageManager.loadBitmap("img/", itemBarWindowItemHoldingTagImage);
            bitmap.addLoadListener(() => {
              this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, rect.x + itemBarWindowItemHoldingTagOffset.x, rect.y + itemBarWindowItemHoldingTagOffset.y, bitmap.width, bitmap.height);
            });
          }
        }
      }

      drawItem(index) {
        const rect = this.itemRect(index);
        const itemId = Number(this.commandSymbol(index)) || 0;
        const itemBarThumbnail = $dataItems[itemId].meta.ASItemBarThumbnail;
        //console.log("itemBarThumbnail: ", itemBarThumbnail)
        if (itemBarThumbnail) {
          const noBlankItemBarThumbnail = itemBarThumbnail.replace(/^\s*|\s*$/g,"");
          const bitmap = ImageManager.loadBitmap("img/", noBlankItemBarThumbnail);
          bitmap.addLoadListener(() => {
            this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
            this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, rect.x, rect.y, rect.width, rect.height);
            this.drawItemText(index);
            this.drawItemNumberText(index);
            this.drawItemHoldingTag(index);
          });
        } else {
          this.drawItemText(index);
          this.drawItemNumberText(index);
          this.drawItemHoldingTag(index);
        }
      }

      drawBackgroundRect(rect) {
        if (itemBarWindowItemBackgroundFormality !== itemBarWindowItemBackgroundFormalitySelectNone) {
          if (itemBarWindowItemBackgroundFormality === itemBarWindowItemBackgroundFormalitySelectColor) {
            const c1 = colorJsonObjectConvertToColorRGBA(itemBarWindowItemBackgroundColor1JsonObject);
            const c2 = colorJsonObjectConvertToColorRGBA(itemBarWindowItemBackgroundColor2JsonObject);
            const c3 = colorJsonObjectConvertToColorRGBA(itemBarWindowItemBackgroundBorderColorJsonObject);
            this.contentsBack.gradientFillRoundRect(rect.x, rect.y, rect.width, rect.height, c1, c2, true, itemBarWindowItemBackgroundBorderRadius);
            if (itemBarWindowItemBackgroundBorderLineWidth > 0) {
              this.contentsBack.strokeRoundRect(rect.x, rect.y, rect.width, rect.height, c3, itemBarWindowItemBackgroundBorderLineWidth, itemBarWindowItemBackgroundBorderRadius);
            }
          } else {
            if (itemBarWindowItemBackgroundImage) {
              const bitmap = ImageManager.loadBitmap("img/", itemBarWindowItemBackgroundImage);
              bitmap.addLoadListener(() => {
                this.contentsBack.clearRect(rect.x, rect.y, rect.width, rect.height);
                this.contentsBack.blt(bitmap, 0, 0, bitmap.width, bitmap.height, rect.x, rect.y, rect.width, rect.height);
              });
            }
          }
        }
      }

      processOk() {
        if (this.isCurrentItemEnabled()) {
          //this.playOkSound();
          playSoundEffectsObject(itemBarWindowHoldingItemSoundEffects);
          this.updateInputData();
          this.deactivate();
          this.callOkHandler();
        } else {
          this.playBuzzerSound();
        }
      }

      onTouchSelect(trigger) {
        this._doubleTouch = false;
        if (this.isCursorMovable()) {
          const lastIndex = this.index();
          const hitIndex = this.hitIndex();
          if (hitIndex >= 0) {
            if (hitIndex === this.index()) {
              this._doubleTouch = true;
            }
            this.select(hitIndex);
          }
          if (trigger && this.index() !== lastIndex) {
            //this.playCursorSound();
            playSoundEffectsObject(itemBarWindowCursorMoveSoundEffects);
          }
        }
      }
        
      processCursorMove() {
        if (this.isCursorMovable()) {
          const lastIndex = this.index();
          if (Input.isRepeated("itembardown")) {
            //console.log("Input.isRepeated(down)")
            this.cursorDown(Input.isTriggered("itembardown"));
          }
          if (Input.isRepeated("itembarup")) {
            //console.log("Input.isRepeated(up)")
            this.cursorUp(Input.isTriggered("itembarup"));
          }
          if (Input.isRepeated("right")) {
            this.cursorRight(Input.isTriggered("right"));
          }
          if (Input.isRepeated("left")) {
            this.cursorLeft(Input.isTriggered("left"));
          }
          if (!this.isHandled("pagedown") && Input.isTriggered("pagedown")) {
            this.cursorPagedown();
          }
          if (!this.isHandled("pageup") && Input.isTriggered("pageup")) {
            this.cursorPageup();
          }
          if (this.index() !== lastIndex) {
            //this.playCursorSound();
            playSoundEffectsObject(itemBarWindowCursorMoveSoundEffects);
          }
        }
      }

      isOkTriggered() {
        return this._canRepeat ? Input.isRepeated("itembarclick") : Input.isTriggered("itembarclick");
      }

      isTouchedInsideFrame() {
        const touchPos = new Point(TouchInput.x, TouchInput.y);
        const localPos = this.worldTransform.applyInverse(touchPos);
        return this.innerRect.contains(localPos.x, localPos.y) && TouchInput.isTriggered();
      }

      isTouchedInsideFrameForWheelScroll() {
        const touchPos = new Point(TouchInput.x, TouchInput.y);
        const localPos = this.worldTransform.applyInverse(touchPos);
        return this.innerRect.contains(localPos.x, localPos.y);
      }

      processWheelScroll() {
        if (this.isWheelScrollEnabled() && this.isTouchedInsideFrameForWheelScroll()) {
          const threshold = 20;
          if (TouchInput.wheelY >= threshold) {
            this.smoothScrollDown(1);
          }
          if (TouchInput.wheelY <= -threshold) {
            this.smoothScrollUp(1);
          }
        }
      }

    }

    class Window_ItemPreview extends Window_Base {

      initialize(rect) {
        Window_Base.prototype.initialize.call(this, rect);

        this.visible = itemPreviewWindowVisible;
        this.windowskin = ImageManager.loadSystem(itemPreviewWindowWindowSkin);
        this._padding = itemPreviewWindowPadding;

        if (itemPreviewWindowBackgroundImage) {
          const bitmap = ImageManager.loadBitmap("img/", itemPreviewWindowBackgroundImage);
          bitmap.addLoadListener(() => {
            this.contentsBack.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, this.contentsBack.width, this.contentsBack.height);
          });
        }

      }

      setContentImage(imagePath, needAnimation) {
        if (needAnimation === true) {
          const currentScene = SceneManager._scene;
          currentScene.charm.slide(this._contentsSprite, 0, this._contentsSprite.height, 10).onComplete = () => {
            this.contents.clear();
            const bitmap = ImageManager.loadBitmap("img/", imagePath);
            bitmap.addLoadListener(() => {
              this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, this.contents.width, this.contents.height);
              this._contentsSprite.move(0, - this._contentsSprite.height);
              currentScene.charm.slide(this._contentsSprite, 0, 0, 10);
            });
          };
        } else {
          this.contents.clear();
          const bitmap = ImageManager.loadBitmap("img/", imagePath);
          bitmap.addLoadListener(() => {
            this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, this.contents.width, this.contents.height);
          });
        }
      }

      refreshContent(holdingItemIdVariableValue, needAnimation) {
        if (this.visible === true) {
          // this.contents.clear();
          if (holdingItemIdVariableValue === 0) {
            if (itemPreviewWindowEmptyHandedImage) {
              this.setContentImage(itemPreviewWindowEmptyHandedImage, needAnimation);
            }
          } else {
            const itemPreviewThumbnail = $dataItems[holdingItemIdVariableValue].meta.ASItemBarThumbnail;
            if (itemPreviewThumbnail) {
              const noBlankItemPreviewThumbnail = itemPreviewThumbnail.replace(/^\s*|\s*$/g, "");
              this.setContentImage(noBlankItemPreviewThumbnail, needAnimation);
            }
          }
        }
      }

      isTouchedInsideFrame() {
        const touchPos = new Point(TouchInput.x, TouchInput.y);
        const localPos = this.worldTransform.applyInverse(touchPos);
        return this.innerRect.contains(localPos.x, localPos.y) && this.visible;
      }

    }

    const _Scene_Map_IsMapTouchOk = Scene_Map.prototype.isMapTouchOk;
    Scene_Map.prototype.isMapTouchOk = function() {
      const isMapTouchOk = _Scene_Map_IsMapTouchOk.apply(this, arguments) && !this.itemBarCommandWindow.isTouchedInsideFrame() && !this.itemPreviewWindow.isTouchedInsideFrame();
      return isMapTouchOk;
    };

    const _Scene_Map_CreateDisplayObjects = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function() {
        _Scene_Map_CreateDisplayObjects.apply(this, arguments);
        this.charm = new Charm(PIXI);
        this.itemPreviewWindow = new Window_ItemPreview(itemPreviewWindowRect);
        const currentHoldingItemIdVariableValue = $gameVariables.value(itemBarWindowHoldingItemIdVariable);
        //console.log("createDisplayObjects----currentHoldingItemIdVariableValue: ", currentHoldingItemIdVariableValue)
        this.itemPreviewWindow.refreshContent(currentHoldingItemIdVariableValue, false);
        this.addChild(this.itemPreviewWindow);
        const itemBarCommandWindowWidth = itemBarWindowItemWidth + itemBarWindowColSpacing + 2 * itemBarWindowPadding;
        const itemBarCommandWindowHeight = (itemBarWindowItemHeight + itemBarWindowRowSpacing) * itemBarWindowVisibleItems + 2 * itemBarWindowPadding;
        const rect = new Rectangle(- (itemBarWindowFinalOffset.x + itemBarCommandWindowWidth), itemBarWindowFinalOffset.y, itemBarCommandWindowWidth, itemBarCommandWindowHeight);
        this.itemBarCommandWindow = new Window_ItemBarCommand(rect);
        this.itemBarCommandWindow.proxy = this.itemPreviewWindow;
        this.itemBarCommandWindow.visible = false;
        this.itemBarCommandWindowPlaying = false;
        this.addChild(this.itemBarCommandWindow);
    };

    const _Scene_Map_Update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_Update.apply(this, arguments);
        this.charm.update();
        if (Input.isTriggered("itembarshow")) {
          if(this.itemBarCommandWindowPlaying !== true) {
            if (this.itemBarCommandWindow.visible === false) {
              this.itemBarCommandWindow.visible = true;
              this.itemBarCommandWindowPlaying = true;
              playSoundEffectsObject(itemBarWindowShowSoundEffects);
              this.charm.slide(this.itemBarCommandWindow, itemBarWindowFinalOffset.x, itemBarWindowFinalOffset.y, 30).onComplete = () => {
                this.itemBarCommandWindowPlaying = false;
              };
            } else {
              this.itemBarCommandWindowPlaying = true;
              playSoundEffectsObject(itemBarWindowHideSoundEffects);
              this.charm.slide(this.itemBarCommandWindow, - (itemBarWindowFinalOffset.x + this.itemBarCommandWindow.width), itemBarWindowFinalOffset.y, 30).onComplete = () => {
                this.itemBarCommandWindow.visible = false;
                this.itemBarCommandWindowPlaying = false;
              };
            }
          }
        }
        if (Input.isTriggered("itembaremptyhanded")) {
          playSoundEffectsObject(itemBarWindowEmptyHandedSoundEffects);
          this.setItemBarEmptyHanded();
        }
    };

    Scene_Map.prototype.setItemBarEmptyHanded = function() {
      const lastHoldingItemIdVariableValue = $gameVariables.value(itemBarWindowHoldingItemIdVariable);
      const lastHoldingItemTagIndex = this.itemBarCommandWindow.findSymbol(`${lastHoldingItemIdVariableValue}`)
      if (lastHoldingItemIdVariableValue > 0 && lastHoldingItemTagIndex >= 0) {
        $gameVariables.setValue(itemBarWindowHoldingItemIdVariable, 0);
        this.itemBarCommandWindow.redrawItem(lastHoldingItemTagIndex);
        const currentHoldingItemIdVariableValue = $gameVariables.value(itemBarWindowHoldingItemIdVariable);
        this.itemPreviewWindow.refreshContent(currentHoldingItemIdVariableValue, false);
      }
      
    };

    const _Game_Party_GainItem = Game_Party.prototype.gainItem;
    Game_Party.prototype.gainItem = function (item, amount, includeEquip) {
      const isNewItem = !this._items[item.id];
      _Game_Party_GainItem.apply(this, arguments);
      if (this._orderItems) {
          if (!this._orderItems.includes(item.id)) {
            this._orderItems.push(item.id);
          }
          if (!this._items[item.id]) {
            const deleteItemIndex = this._orderItems.indexOf(item.id);
            if (deleteItemIndex !== -1) {
              this._orderItems.splice(deleteItemIndex, 1);
            }
          }
          $gameMap.requestRefresh();
      }
      const currentScene = SceneManager._scene;
      if (currentScene && currentScene instanceof Scene_Map && currentScene.itemBarCommandWindow && currentScene.itemPreviewWindow) {
        if (DataManager.isItem(item) && amount >= 1) {
          currentScene.itemBarCommandWindow.drawGainItem(item, isNewItem);
        }
        if (DataManager.isItem(item) && amount <= -1) {
          currentScene.itemBarCommandWindow.drawLoseItem(item);
        }
      } else {
        if (DataManager.isItem(item) && amount <= -1) {
          const currentHoldingItemIdVariableValue = $gameVariables.value(itemBarWindowHoldingItemIdVariable);
          if(currentHoldingItemIdVariableValue !== 0 && currentHoldingItemIdVariableValue === item.id && $gameParty.numItems(item) === 0) {
            $gameVariables.setValue(itemBarWindowHoldingItemIdVariable, 0);
          }
        }
      }
    };

    const _Game_Party_InitAllItems = Game_Party.prototype.initAllItems;
    Game_Party.prototype.initAllItems = function () {
      // console.log("initAllItems")
      _Game_Party_InitAllItems.apply(this, arguments);
      this._orderItems = [];
      // console.log("this._items: ", this._items)
      // console.log("this._orderItems: ", this._orderItems)
    };

    Game_Party.prototype.orderItems = function () {
      if (!this._orderItems) {
        //console.log("Old archive of the first use of this plugin")
        this._orderItems = [];
        //console.log("this._items: ", this._items)
        const oldArchivesItemIds = Object.keys(this._items);
        if (oldArchivesItemIds.length !== 0) {
          //console.log("Items have been acquired before using this plugin")
          for (const id of oldArchivesItemIds) {
            this._orderItems.push(Number(id));
          }
        }
      }
      //console.log("this._orderItems: ", this._orderItems)
      return this._orderItems.map(id => $dataItems[id]);
    };

})();
