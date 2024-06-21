/*:
 * @target MZ
 * @plugindesc [V1.0.0] Customized Main Menu Plugin
 * @author Arrose
 * 
 * @url https://github.com/arrosev/RPGMakerMZPlugins
 * 
 * @help
 * 
 * this._windowLayer(808, 616)
 * 
 * This plugin is released under the MIT license.

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
 * @param mainMenuSceneSet
 * @text Main Menu Scene Set
 * @desc Main Menu Scene Set
 * @type string
 * @default
 * 
 * @param sceneCancelButtonOffset
 * @text Cancel Button Offset
 * @desc Scene Cancel Button Offset
 * @parent mainMenuSceneSet
 * @type struct<Point>
 * @default {"x":"708","y":"2"}
 * 
 * @param sceneCancelButtonVisible
 * @text Cancel Button Visible
 * @desc Scene Cancel Button Visible
 * @parent mainMenuSceneSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param sceneBackGround
 * @text Scene BackGround
 * @desc Scene BackGround
 * @parent mainMenuSceneSet
 * @type select
 * @option none
 * @option image
 * @option video
 * @default none
 * 
 * @param sceneBackGroundImage
 * @text Scene BackGround Image
 * @desc Scene BackGround Image
 * @parent sceneBackGround
 * @type file
 * @dir img/titles1
 * @default
 * 
 * @param sceneBackGroundVideo
 * @text Scene BackGround Video
 * @desc No video file extension required, both mp4 and webm files are needed(Video format used by MZ), the video will loop 
 * @parent sceneBackGround
 * @type string
 * @default 
 * 
 * @param commandWindowSet
 * @text Command Window Set
 * @desc Command Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param commandWindowWindowSkin
 * @text Window Skin
 * @desc Command Window WindowSkin
 * @parent commandWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @param commandWindowOffset
 * @text Offset
 * @desc Command Window Offset
 * @parent commandWindowSet
 * @type struct<Point>
 * @default {"x":"568","y":"52"}
 * 
 * @param commandWindowItemWidth
 * @text Item Width
 * @desc Command Window Item Width
 * @parent commandWindowSet
 * @type number
 * @min 0
 * @default 208
 * 
 * @param commandWindowItemHeight
 * @text Item Height
 * @desc Command Window Item Height
 * @parent commandWindowSet
 * @type number
 * @min 0
 * @default 40
 * 
 * @param commandWindowPadding
 * @text Padding
 * @desc Command Window Padding
 * @parent commandWindowSet
 * @type number
 * @default 12
 * 
 * @param commandWindowRowSpacing
 * @text Row Spacing
 * @desc Command Window Row Spacing
 * @parent commandWindowSet
 * @type number
 * @default 4
 * 
 * @param commandWindowColSpacing
 * @text Col Spacing
 * @desc Command Window Col Spacing
 * @parent commandWindowSet
 * @type number
 * @default 8
 * 
 * @param commandWindowMaxCols
 * @text MaxCols
 * @desc Command Window MaxCols
 * @parent commandWindowSet
 * @type number
 * @min 1
 * @default 1
 * 
 * @param commandWindowCursor
 * @text Cursor
 * @desc Command Window Cursor
 * @parent commandWindowSet
 * @type select
 * @option none
 * @option images
 * @default none
 * 
 * @param commandWindowCursorImages
 * @text Cursor Images
 * @desc Command Window Cursor Images
 * @parent commandWindowCursor
 * @type file[]
 * @dir img/
 * @default []
 * 
 * @param commandWindowCursorOffset
 * @text Cursor Offset
 * @desc Command Window Cursor Offset
 * @parent commandWindowCursor
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param commandWindowCursorAnimationSpeed
 * @text Cursor Animation Speed
 * @desc Command Window Cursor Animation Speed
 * @parent commandWindowCursor
 * @type number
 * @min 1
 * @default 1
 * 
 * @param commandWindowItemStyle
 * @text Item Style
 * @desc Command Window Item Style
 * @parent commandWindowSet
 * @type string
 * @default
 * 
 * @param commandWindowItemBGColor1
 * @text Item BG Color1
 * @desc Command Window Item Background Color1
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param commandWindowItemBGColor2
 * @text Item BG Color2
 * @desc Command Window Item Background Color2
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"0.5"}
 * 
 * @param commandWindowItemBGBorderColor
 * @text Item BG Border Color
 * @desc Command Window Item Background Border Color
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param commandWindowItemBGBorderLineWidth
 * @text Item BG Border Width
 * @desc Command Window Item BG Border LineWidth
 * @parent commandWindowItemStyle
 * @type string
 * @default 1.0
 * 
 * @param commandWindowItemBGBorderLineJoin
 * @text Item BG Border LineJoin
 * @desc Command Window Item BG Border LineJoin
 * @parent commandWindowItemStyle
 * @type select
 * @option miter
 * @option round
 * @option bevel
 * @default miter
 * 
 * @param commandWindowItemFontSize
 * @text Item Font Size
 * @desc Command Window Item Font Size
 * @parent commandWindowItemStyle
 * @type number
 * @default 26
 * 
 * @param commandWindowItemTextOffsetX
 * @text Item Text OffsetX
 * @desc Command Window Item Text OffsetX
 * @parent commandWindowItemStyle
 * @type number
 * @default 0
 * 
 * @param commandWindowItemTextAlign
 * @text Item Text Align
 * @desc Command Window Item Text Align
 * @parent commandWindowItemStyle
 * @type select
 * @option center
 * @option left
 * @option right
 * @default center
 * 
 * @param commandWindowItemTextColor
 * @text Item Text Color
 * @desc Command Window Item Text Color
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param commandWindowItemTextOutlineColor
 * @text Item Text Outline Color
 * @desc Command Window Item Text Outline Color
 * @parent commandWindowItemStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param goldWindowSet
 * @text Gold Window Set
 * @desc Gold Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param goldWindowVisible
 * @text Visible
 * @desc Gold Window Visible
 * @parent goldWindowSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowSet
 * @text Status Window Set
 * @desc Status Window Set
 * @parent mainMenuSceneSet
 * @type string
 * @default
 * 
 * @param statusWindowVisible
 * @text Visible
 * @desc Status Window Visible
 * @parent statusWindowSet
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowWindowSkin
 * @text Window Skin
 * @desc Status Window WindowSkin
 * @parent statusWindowSet
 * @type file
 * @dir img/system/
 * @default Window
 * 
 * @param statusWindowOffset
 * @text Offset
 * @desc Status Window Offset
 * @parent statusWindowSet
 * @type struct<Point>
 * @default {"x":"0","y":"52"}
 * 
 * @param statusWindowItemWidth
 * @text Item Width
 * @desc Status Window Item Width
 * @parent statusWindowSet
 * @type number
 * @min 0
 * @default 536
 * 
 * @param statusWindowItemHeight
 * @text Item Height
 * @desc Status Window Item Height
 * @parent statusWindowSet
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowPadding
 * @text Padding
 * @desc Status Window Padding
 * @parent statusWindowSet
 * @type number
 * @default 12
 * 
 * @param statusWindowRowSpacing
 * @text Row Spacing
 * @desc Status Window Row Spacing
 * @parent statusWindowSet
 * @type number
 * @default 4
 * 
 * @param statusWindowColSpacing
 * @text Col Spacing
 * @desc Status Window Col Spacing
 * @parent statusWindowSet
 * @type number
 * @default 8
 * 
 * @param statusWindowMaxCols
 * @text MaxCols
 * @desc Status Window MaxCols
 * @parent statusWindowSet
 * @type select
 * @option 1
 * @option 2
 * @option 4
 * @default 1
 * 
 * @param statusWindowItemStyle
 * @text Item Style
 * @desc Status Window Item Style
 * @parent statusWindowSet
 * @type string
 * @default
 * 
 * @param statusWindowItemBGStyle
 * @text Item BG Style
 * @desc Status Window Item BG Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemBGOffset
 * @text Item BG Offset
 * @desc Status Window Item BG Offset
 * @parent statusWindowItemBGStyle
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param statusWindowItemBGWidth
 * @text Item BG Width
 * @desc Status Window Item BG Width
 * @parent statusWindowItemBGStyle
 * @type number
 * @min 0
 * @default 536
 * 
 * @param statusWindowItemBGHeight
 * @text Item BG Height
 * @desc Status Window Item BG Height
 * @parent statusWindowItemBGStyle
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowItemBGColor1
 * @text Item BG Color1
 * @desc Status Window Item Background Color1
 * @parent statusWindowItemBGStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param statusWindowItemBGColor2
 * @text Item BG Color2
 * @desc Status Window Item Background Color2
 * @parent statusWindowItemBGStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"0.5"}
 * 
 * @param statusWindowItemBGBorderColor
 * @text Item BG Border Color
 * @desc Status Window Item Background Border Color
 * @parent statusWindowItemBGStyle
 * @type struct<Color>
 * @default {"r":"32","g":"32","b":"32","a":"0.5"}
 * 
 * @param statusWindowItemBGBorderLineWidth
 * @text Item BG Border Width
 * @desc Status Window Item BG Border LineWidth
 * @parent statusWindowItemBGStyle
 * @type string
 * @default 1.0
 * 
 * @param statusWindowItemBGBorderLineJoin
 * @text Item BG Border LineJoin
 * @desc Status Window Item BG Border LineJoin
 * @parent statusWindowItemBGStyle
 * @type select
 * @option miter
 * @option round
 * @option bevel
 * @default miter
 * 
 * @param statusWindowPendingItemBGStyle
 * @text Pending Item BG Style
 * @desc Status Window Pending Item BG Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowPendingItemBGOffset
 * @text Pending Item BG Offset
 * @desc Status Window Pending Item BG Offset
 * @parent statusWindowPendingItemBGStyle
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param statusWindowPendingItemBGWidth
 * @text Pending Item BG Width
 * @desc Status Window Pending Item BG Width
 * @parent statusWindowPendingItemBGStyle
 * @type number
 * @min 0
 * @default 536
 * 
 * @param statusWindowPendingItemBGHeight
 * @text Pending Item BG Height
 * @desc Status Window Pending Item BG Height
 * @parent statusWindowPendingItemBGStyle
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowPendingItemBGColor
 * @text Pending Item BG Color
 * @desc Status Window Pending Item Background Color
 * @parent statusWindowPendingItemBGStyle
 * @type struct<Color>
 * @default {"r":"163","g":"255","b":"224","a":"1.0"}
 * 
 * @param statusWindowItemFaceImageStyle
 * @text Item Face Image Style
 * @desc Status Window Item Face Image Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemFaceImageVisible
 * @text Item Face Image Visible
 * @desc Status Window Item Face Image Visible
 * @parent statusWindowItemFaceImageStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowItemFaceImageOffset
 * @text Item Face Image Offset
 * @desc Status Window Item Face Image Offset
 * @parent statusWindowItemFaceImageStyle
 * @type struct<Point>
 * @default {"x":"0","y":"0"}
 * 
 * @param statusWindowItemFaceImageWidth
 * @text Item Face Image Width
 * @desc Status Window Item Face Image Width
 * @parent statusWindowItemFaceImageStyle
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowItemFaceImageHeight
 * @text Item Face Image Height
 * @desc Status Window Item Face Image Height
 * @parent statusWindowItemFaceImageStyle
 * @type number
 * @min 0
 * @default 131
 * 
 * @param statusWindowItemNameStyle
 * @text Item Name Style
 * @desc Status Window Item Name Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemNameVisible
 * @text Item Name Visible
 * @desc Status Window Item Name Visible
 * @parent statusWindowItemNameStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowItemNameOffset
 * @text Item Name Offset
 * @desc Status Window Item Name Offset
 * @parent statusWindowItemNameStyle
 * @type struct<Point>
 * @default {"x":"180","y":"11"}
 * 
 * @param statusWindowItemNameWidth
 * @text Item Name Width
 * @desc Status Window Item Name Width
 * @parent statusWindowItemNameStyle
 * @type number
 * @min 0
 * @default 168
 * 
 * @param statusWindowItemNameFontSize
 * @text Item Name Font Size
 * @desc Status Window Item Name Font Size
 * @parent statusWindowItemNameStyle
 * @type number
 * @default 26
 * 
 * @param statusWindowItemNameTextColor
 * @text Item Name Text Color
 * @desc Status Window Item Name Text Color
 * @parent statusWindowItemNameStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param statusWindowItemNameTextOutlineColor
 * @text Item Name Text Outline Color
 * @desc Status Window Item Name Text Outline Color
 * @parent statusWindowItemNameStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param statusWindowItemLevelStyle
 * @text Item Level Style
 * @desc Status Window Item Level Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemLevelVisible
 * @text Item Level Visible
 * @desc Status Window Item Level Visible
 * @parent statusWindowItemLevelStyle
 * @type boolean
 * @on Show
 * @off Hide
 * @default true
 * 
 * @param statusWindowItemLevelTagOffset
 * @text Item Level Tag Offset
 * @desc Status Window Item Level Tag Offset
 * @parent statusWindowItemLevelStyle
 * @type struct<Point>
 * @default {"x":"180","y":"47"}
 * 
 * @param statusWindowItemLevelTagWidth
 * @text Item Level Tag Width
 * @desc Status Window Item Level Tag Width
 * @parent statusWindowItemLevelStyle
 * @type number
 * @min 0
 * @default 48
 * 
 * @param statusWindowItemLevelTagFontSize
 * @text Item Level Tag Font Size
 * @desc Status Window Item Level Tag Font Size
 * @parent statusWindowItemLevelStyle
 * @type number
 * @default 26
 * 
 * @param statusWindowItemLevelTagTextColor
 * @text Item Level Tag Text Color
 * @desc Status Window Item Level Tag Text Color
 * @parent statusWindowItemLevelStyle
 * @type struct<Color>
 * @default {"r":"132","g":"170","b":"255","a":"1"}
 * 
 * @param statusWindowItemLevelTagTextOutlineColor
 * @text Item Level Tag Text Outline Color
 * @desc Status Window Item Level Tag Text Outline Color
 * @parent statusWindowItemLevelStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param statusWindowItemLevelValueOffset
 * @text Item Level Value Offset
 * @desc Status Window Item Level Value Offset
 * @parent statusWindowItemLevelStyle
 * @type struct<Point>
 * @default {"x":"264","y":"47"}
 * 
 * @param statusWindowItemLevelValueWidth
 * @text Item Level Value Width
 * @desc Status Window Item Level Value Width
 * @parent statusWindowItemLevelStyle
 * @type number
 * @min 0
 * @default 36
 * 
 * @param statusWindowItemLevelValueFontSize
 * @text Item Level Value Font Size
 * @desc Status Window Item Level Value Font Size
 * @parent statusWindowItemLevelStyle
 * @type number
 * @default 26
 * 
 * @param statusWindowItemLevelValueTextColor
 * @text Item Level Value Text Color
 * @desc Status Window Item Level Value Text Color
 * @parent statusWindowItemLevelStyle
 * @type struct<Color>
 * @default {"r":"255","g":"255","b":"255","a":"1"}
 * 
 * @param statusWindowItemLevelValueTextOutlineColor
 * @text Item Level Value Text Outline Color
 * @desc Status Window Item Level Value Text Outline Color
 * @parent statusWindowItemLevelStyle
 * @type struct<Color>
 * @default {"r":"0","g":"0","b":"0","a":"1"}
 * 
 * @param statusWindowItemIconsStyle
 * @text Item Icons Style
 * @desc Status Window Item Icons Style
 * @parent statusWindowItemStyle
 * @type string
 * @default
 * 
 * @param statusWindowItemIconsOffset
 * @text Item Icons Offset
 * @desc Status Window Item Icons Offset
 * @parent statusWindowItemIconsStyle
 * @type struct<Point>
 * @default {"x":"180","y":"85"}
 * 
 * @param statusWindowItemAllIconsWidth
 * @text Item All Icons Width
 * @desc Status Window Item Icons Width
 * @parent statusWindowItemIconsStyle
 * @type number
 * @min 0
 * @default 144
 * 
 * @param statusWindowItemIconWidth
 * @text Item Icon Width
 * @desc Status Window Item Icon Width
 * @parent statusWindowItemIconsStyle
 * @type number
 * @min 0
 * @default 32
 * 
 * @param statusWindowItemIconColSpacing
 * @text Item Icon Col Spacing
 * @desc Status Window Item Icon Col Spacing
 * @parent statusWindowItemIconsStyle
 * @type number
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
 * @min 0
 * @max 1
 * @default 1
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

// * @param sceneBackGroundMusic
// * @text Scene BackGround Music
// * @desc Scene BackGround Music
// * @parent mainMenuSceneSet
// * @type file
// * @dir audio/bgm
// * @default

const ASCustomMainMenuSceneNameSpace = (() => {
    "use strict";

    const pluginName = "ASCustomMainMenuScene";
    const parameters = PluginManager.parameters(pluginName);

    const sceneBackGroundSelectNone = "none";
    const sceneBackGroundSelectImage = "image";
    const sceneBackGroundSelectVideo = "video";

    const commandWindowCursorSelectNone = "none";
    const commandWindowCursorSelectImage = "images";
    
    const sceneCancelButtonOffsetJsonObject = JSON.parse(parameters.sceneCancelButtonOffset);
    const sceneCancelButtonOffset = new Point(Number(sceneCancelButtonOffsetJsonObject.x) || 0, Number(sceneCancelButtonOffsetJsonObject.y) || 0);
    const sceneCancelButtonVisible = parameters.sceneCancelButtonVisible !== "false";

    const sceneBackGround = parameters.sceneBackGround;
    const sceneBackGroundImage = parameters.sceneBackGroundImage;
    const sceneBackGroundVideo = parameters.sceneBackGroundVideo;
    //const sceneBackGroundMusic = parameters.sceneBackGroundMusic;

    const commandWindowWindowSkin = parameters.commandWindowWindowSkin;
    const commandWindowOffsetJsonObject = JSON.parse(parameters.commandWindowOffset);
    const commandWindowOffset = new Point(Number(commandWindowOffsetJsonObject.x) || 0, Number(commandWindowOffsetJsonObject.y) || 0);

    const commandWindowItemWidth = Number(parameters.commandWindowItemWidth);
    const commandWindowItemHeight = Number(parameters.commandWindowItemHeight);
    const commandWindowPadding = Number(parameters.commandWindowPadding);
    const commandWindowRowSpacing = Number(parameters.commandWindowRowSpacing);
    const commandWindowColSpacing = Number(parameters.commandWindowColSpacing);
    const commandWindowMaxCols = Number(parameters.commandWindowMaxCols) || 1;

    const commandWindowCursor = parameters.commandWindowCursor;
    const commandWindowCursorImagesJsonObject = JSON.parse(parameters.commandWindowCursorImages !== undefined ? parameters.commandWindowCursorImages : "[]");
    const commandWindowCursorOffsetJsonObject = JSON.parse(parameters.commandWindowCursorOffset); 
    const commandWindowCursorOffset = new Point(Number(commandWindowCursorOffsetJsonObject.x) || 0, Number(commandWindowCursorOffsetJsonObject.y) || 0);
    const commandWindowCursorAnimationSpeed = Number(parameters.commandWindowCursorAnimationSpeed);

    const commandWindowItemBGColor1JsonObject = JSON.parse(parameters.commandWindowItemBGColor1);
    const commandWindowItemBGColor2JsonObject = JSON.parse(parameters.commandWindowItemBGColor2);
    const commandWindowItemBGBorderColorJsonObject = JSON.parse(parameters.commandWindowItemBGBorderColor);
    const commandWindowItemBGBorderLineWidth = Number(parameters.commandWindowItemBGBorderLineWidth) || 1.0;
    const commandWindowItemBGBorderLineJoin = parameters.commandWindowItemBGBorderLineJoin;

    const commandWindowItemFontSize = Number(parameters.commandWindowItemFontSize) || 26;
    const commandWindowItemTextOffsetX = Number(parameters.commandWindowItemTextOffsetX) || 0;
    const commandWindowItemTextAlign = parameters.commandWindowItemTextAlign;
    const commandWindowItemTextColorJsonObject = JSON.parse(parameters.commandWindowItemTextColor);
    const commandWindowItemTextOutlineColorJsonObject = JSON.parse(parameters.commandWindowItemTextOutlineColor);
    
    const goldWindowVisible = parameters.goldWindowVisible !== "false";


    const statusWindowVisible = parameters.statusWindowVisible !== "false";
    const statusWindowWindowSkin = parameters.statusWindowWindowSkin;
    const statusWindowOffsetJsonObject = JSON.parse(parameters.statusWindowOffset);
    const statusWindowOffset = new Point(Number(statusWindowOffsetJsonObject.x) || 0, Number(statusWindowOffsetJsonObject.y) || 0);
    const statusWindowItemWidth = Number(parameters.statusWindowItemWidth);
    const statusWindowItemHeight = Number(parameters.statusWindowItemHeight);
    const statusWindowPadding = Number(parameters.statusWindowPadding);
    const statusWindowRowSpacing = Number(parameters.statusWindowRowSpacing);
    const statusWindowColSpacing = Number(parameters.statusWindowColSpacing);
    const statusWindowMaxCols = Number(parameters.statusWindowMaxCols) || 1;

    const statusWindowItemBGOffsetJsonObject = JSON.parse(parameters.statusWindowItemBGOffset);
    const statusWindowItemBGOffset = new Point(Number(statusWindowItemBGOffsetJsonObject.x) || 0, Number(statusWindowItemBGOffsetJsonObject.y) || 0);
    const statusWindowItemBGWidth = Number(parameters.statusWindowItemBGWidth);
    const statusWindowItemBGHeight = Number(parameters.statusWindowItemBGHeight);
    const statusWindowItemBGColor1JsonObject = JSON.parse(parameters.statusWindowItemBGColor1);
    const statusWindowItemBGColor2JsonObject = JSON.parse(parameters.statusWindowItemBGColor2);
    const statusWindowItemBGBorderColorJsonObject = JSON.parse(parameters.statusWindowItemBGBorderColor);
    const statusWindowItemBGBorderLineWidth = Number(parameters.statusWindowItemBGBorderLineWidth) || 1.0;
    const statusWindowItemBGBorderLineJoin = parameters.statusWindowItemBGBorderLineJoin;

    const statusWindowPendingItemBGOffsetJsonObject = JSON.parse(parameters.statusWindowPendingItemBGOffset);
    const statusWindowPendingItemBGOffset = new Point(Number(statusWindowPendingItemBGOffsetJsonObject.x) || 0, Number(statusWindowPendingItemBGOffsetJsonObject.y) || 0);
    const statusWindowPendingItemBGWidth = Number(parameters.statusWindowPendingItemBGWidth);
    const statusWindowPendingItemBGHeight = Number(parameters.statusWindowPendingItemBGHeight);
    const statusWindowPendingItemBGColorJsonObject = JSON.parse(parameters.statusWindowPendingItemBGColor);

    const statusWindowItemFaceImageVisible = parameters.statusWindowItemFaceImageVisible !== "false";
    const statusWindowItemFaceImageOffsetJsonObject = JSON.parse(parameters.statusWindowItemFaceImageOffset);
    const statusWindowItemFaceImageOffset = new Point(Number(statusWindowItemFaceImageOffsetJsonObject.x) || 0, Number(statusWindowItemFaceImageOffsetJsonObject.y) || 0);
    const statusWindowItemFaceImageWidth = Number(parameters.statusWindowItemFaceImageWidth);
    const statusWindowItemFaceImageHeight = Number(parameters.statusWindowItemFaceImageHeight);

    const statusWindowItemNameVisible = parameters.statusWindowItemNameVisible !== "false";
    const statusWindowItemNameOffsetJsonObject = JSON.parse(parameters.statusWindowItemNameOffset);
    const statusWindowItemNameOffset = new Point(Number(statusWindowItemNameOffsetJsonObject.x) || 0, Number(statusWindowItemNameOffsetJsonObject.y) || 0);
    const statusWindowItemNameWidth = Number(parameters.statusWindowItemNameWidth);
    const statusWindowItemNameFontSize = Number(parameters.statusWindowItemNameFontSize) || 26;
    const statusWindowItemNameTextColorJsonObject = JSON.parse(parameters.statusWindowItemNameTextColor);
    const statusWindowItemNameTextOutlineColorJsonObject = JSON.parse(parameters.statusWindowItemNameTextOutlineColor);

    const statusWindowItemLevelVisible = parameters.statusWindowItemLevelVisible !== "false";
    const statusWindowItemLevelTagOffsetJsonObject = JSON.parse(parameters.statusWindowItemLevelTagOffset);
    const statusWindowItemLevelTagOffset = new Point(Number(statusWindowItemLevelTagOffsetJsonObject.x) || 0, Number(statusWindowItemLevelTagOffsetJsonObject.y) || 0);
    const statusWindowItemLevelTagWidth = Number(parameters.statusWindowItemLevelTagWidth);
    const statusWindowItemLevelTagFontSize = Number(parameters.statusWindowItemLevelTagFontSize) || 26;
    const statusWindowItemLevelTagTextColorJsonObject = JSON.parse(parameters.statusWindowItemLevelTagTextColor);
    const statusWindowItemLevelTagTextOutlineColorJsonObject = JSON.parse(parameters.statusWindowItemLevelTagTextOutlineColor);
    const statusWindowItemLevelValueOffsetJsonObject = JSON.parse(parameters.statusWindowItemLevelValueOffset);
    const statusWindowItemLevelValueOffset = new Point(Number(statusWindowItemLevelValueOffsetJsonObject.x) || 0, Number(statusWindowItemLevelValueOffsetJsonObject.y) || 0);
    const statusWindowItemLevelValueWidth = Number(parameters.statusWindowItemLevelValueWidth);
    const statusWindowItemLevelValueFontSize = Number(parameters.statusWindowItemLevelValueFontSize) || 26;
    const statusWindowItemLevelValueTextColorJsonObject = JSON.parse(parameters.statusWindowItemLevelValueTextColor);
    const statusWindowItemLevelValueTextOutlineColorJsonObject = JSON.parse(parameters.statusWindowItemLevelValueTextOutlineColor);

    const statusWindowItemIconsOffsetJsonObject = JSON.parse(parameters.statusWindowItemIconsOffset);
    const statusWindowItemIconsOffset = new Point(Number(statusWindowItemIconsOffsetJsonObject.x) || 0, Number(statusWindowItemIconsOffsetJsonObject.y) || 0);
    const statusWindowItemAllIconsWidth = Number(parameters.statusWindowItemAllIconsWidth);
    const statusWindowItemIconWidth = Number(parameters.statusWindowItemIconWidth);
    const statusWindowItemIconColSpacing = Number(parameters.statusWindowItemIconColSpacing);

    // Private Functions and System Class Extensions
    const colorJsonObjectConvertToColorRGBA = function(object) {
        return `rgba(${Number(object.r)}, ${Number(object.g)}, ${Number(object.b)}, ${Number(object.a)})`;
    }

    Bitmap.prototype.strokeBetterRect = function(x, y, width, height, color, lineWidth, lineJoin) {
        const context = this.context;
        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.lineJoin = lineJoin;
        context.strokeRect(x, y, width, height);
        context.restore();
        this._baseTexture.update();
    };

    //Scene

    const _Scene_Menu_Needs_Cancel_Button = Scene_Menu.prototype.needsCancelButton;
    Scene_Menu.prototype.needsCancelButton = function() {
        let visible = _Scene_Menu_Needs_Cancel_Button.apply(this, arguments);
        visible = sceneCancelButtonVisible;
        return visible;
    };

    const _Scene_Menu_Create_Cancel_Button = Scene_Menu.prototype.createCancelButton;
    Scene_Menu.prototype.createCancelButton = function() {
        _Scene_Menu_Create_Cancel_Button.apply(this, arguments);
        this._cancelButton.x = sceneCancelButtonOffset.x;
        this._cancelButton.y = sceneCancelButtonOffset.y;
    };

    const _Scene_Menu_Create_Background = Scene_Menu.prototype.createBackground;
    Scene_Menu.prototype.createBackground = function() {
        _Scene_Menu_Create_Background.apply(this, arguments);
        if (sceneBackGround !== sceneBackGroundSelectNone) {
            if (sceneBackGroundImage && sceneBackGround === sceneBackGroundSelectImage) {
                this._backgroundSprite.bitmap = ImageManager.loadTitle1(sceneBackGroundImage);
                this._backgroundSprite.filters = [];
                this.setBackgroundOpacity(255);
            }
            if (sceneBackGroundVideo && sceneBackGround === sceneBackGroundSelectVideo) {
                //this.removeChild(this._backgroundSprite);
                PIXI.utils.clearTextureCache();
                const fileExtension = Utils.canPlayWebm() ? ".webm" : ".mp4";
                const videoPath = sceneBackGroundVideo + fileExtension;
                const bg = PIXI.Texture.from(videoPath);
                const video = bg.baseTexture.resource.source;
                video.loop = true;
                video.preload = 'auto';
                const videoSprite = new PIXI.Sprite(bg);
                videoSprite.width = Graphics.width;
                videoSprite.height = Graphics.height;
                this.addChild(videoSprite);
            }
        } 
    };

    // const _Scene_Menu_Start = Scene_Menu.prototype.start;
    // Scene_Menu.prototype.start = function() {
    //     _Scene_Menu_Start.apply(this, arguments);
    //     this.lastBGM = AudioManager._currentBgm;
    //     AudioManager.playBgm({"name":"Theme5","pan":0,"pitch":100,"volume":90});
    //     AudioManager.stopBgs();
    //     AudioManager.stopMe();
    // };

    // const _Scene_Menu_Destroy = Scene_Menu.prototype.destroy;
    // Scene_Menu.prototype.destroy = function() {
    //     _Scene_Menu_Destroy.apply(this, arguments);
    //     this.fadeOutAll();
    //     // AudioManager.playBgm(this.lastBGM);
    // };

    // Scene_Menu.prototype.popScene = function() {
    //     AudioManager.playBgm(this.lastBGM);
    //     SceneManager.pop();
    // };

    //CommandWindow

    const _Scene_Menu_Create_Command_Window = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        _Scene_Menu_Create_Command_Window.apply(this, arguments);
        // this._commandWindow.visible = false;
        this._commandWindow.windowskin = ImageManager.loadSystem(commandWindowWindowSkin);
        this._commandWindow._padding = commandWindowPadding;
    };

    const _Window_Menu_Command_Make_Command_List = Window_MenuCommand.prototype.makeCommandList;
    Window_MenuCommand.prototype.makeCommandList = function() {
        _Window_Menu_Command_Make_Command_List.apply(this, arguments);
        let rows = Math.ceil(this._list.length / commandWindowMaxCols);
        this.move(commandWindowOffset.x, commandWindowOffset.y, commandWindowItemWidth * commandWindowMaxCols + 2 * commandWindowPadding + commandWindowColSpacing * commandWindowMaxCols, commandWindowItemHeight * rows + 2 * commandWindowPadding + commandWindowRowSpacing * rows);
        this.contentsBack.resize(commandWindowItemWidth * commandWindowMaxCols + 2 * commandWindowPadding + commandWindowColSpacing * commandWindowMaxCols, commandWindowItemHeight * rows + 2 * commandWindowPadding + commandWindowRowSpacing * rows);
        this.contents.resize(commandWindowItemWidth * commandWindowMaxCols + 2 * commandWindowPadding + commandWindowColSpacing * commandWindowMaxCols, commandWindowItemHeight * rows + 2 * commandWindowPadding + commandWindowRowSpacing * rows);
    };

    const _Window_Menu_Command_Item_Width = Window_MenuCommand.prototype.itemWidth;
    Window_MenuCommand.prototype.itemWidth = function() {
        let width = _Window_Menu_Command_Item_Width.apply(this, arguments);
        width = commandWindowItemWidth + this.colSpacing();
        return width;
    }

    const _Window_Menu_Command_Item_Height = Window_MenuCommand.prototype.itemHeight;
    Window_MenuCommand.prototype.itemHeight = function() {
        let height = _Window_Menu_Command_Item_Height.apply(this, arguments);
        height = commandWindowItemHeight + this.rowSpacing();
        return height;
    }

    const _Window_Menu_Command_RowSpacing = Window_MenuCommand.prototype.rowSpacing;
    Window_MenuCommand.prototype.rowSpacing = function() {
        let rowSpacing = _Window_Menu_Command_RowSpacing.apply(this, arguments);
        rowSpacing = commandWindowRowSpacing;
        return rowSpacing;
    };

    const _Window_Menu_Command_ColSpacing = Window_MenuCommand.prototype.colSpacing;
    Window_MenuCommand.prototype.colSpacing = function() {
        let colSpacing = _Window_Menu_Command_ColSpacing.apply(this, arguments);
        colSpacing = commandWindowColSpacing;
        return colSpacing;
    };

    const _Window_Menu_Command_MaxCols = Window_MenuCommand.prototype.maxCols;
    Window_MenuCommand.prototype.maxCols = function() {
        let maxCols = _Window_Menu_Command_MaxCols.apply(this, arguments);
        maxCols = commandWindowMaxCols;
        return maxCols;
    };
    
    const _Window_Menu_Command_Create_Cursor_Sprite = Window_MenuCommand.prototype._createCursorSprite;
    Window_MenuCommand.prototype._createCursorSprite = function() {
        _Window_Menu_Command_Create_Cursor_Sprite.apply(this, arguments);
        if (commandWindowCursor === commandWindowCursorSelectImage && commandWindowCursorImagesJsonObject.length !== 0) {
            if (commandWindowCursorImagesJsonObject.length === 1) {
                this._cursorSprite = new Sprite();
                this._cursorSprite.addChild(new Sprite());
                this._cursorSprite.children[0].bitmap = ImageManager.loadBitmap("img/", commandWindowCursorImagesJsonObject[0]);
                this._cursorSprite.children[0].move(commandWindowCursorOffset.x, commandWindowCursorOffset.y); // 居中微调
                this._clientArea.addChild(this._cursorSprite);
            } else {
                this._cursorSprite = new Sprite();

                const commandWindowCursorImagesPathArray = [];
                for (const image of commandWindowCursorImagesJsonObject) {
                    commandWindowCursorImagesPathArray.push("img/" + image + ".png")
                }
                const animatedSprite = new PIXI.AnimatedSprite.fromImages(commandWindowCursorImagesPathArray);

                animatedSprite.animationSpeed = commandWindowCursorAnimationSpeed / 10.0;
                animatedSprite.x = commandWindowCursorOffset.x;
                animatedSprite.y = commandWindowCursorOffset.y;
            
                animatedSprite.gotoAndPlay(0);
                
                const animatedSpriteContainer = new PIXI.Container();
                animatedSpriteContainer.addChild(animatedSprite);
                
                this._cursorSprite.addChild(animatedSpriteContainer);
                this._clientArea.addChild(this._cursorSprite);
            }
        }
    }

    const _Window_Menu_Command_Update_Cursor = Window_MenuCommand.prototype._updateCursor;
    Window_MenuCommand.prototype._updateCursor = function() {
        if (commandWindowCursor === commandWindowCursorSelectImage && commandWindowCursorImagesJsonObject.length !== 0) {
            this._cursorSprite.visible = this.isOpen() && this.cursorVisible;
            this._cursorSprite.x = this._cursorRect.x;
            this._cursorSprite.y = this._cursorRect.y;
        } else {
            _Window_Menu_Command_Update_Cursor.apply(this, arguments);
        }
    }

    const _Window_Menu_Command_Refresh_Cursor = Window_MenuCommand.prototype._refreshCursor;
    Window_MenuCommand.prototype._refreshCursor = function() {
        if (commandWindowCursor === commandWindowCursorSelectNone || commandWindowCursorImagesJsonObject.length === 0) {
            _Window_Menu_Command_Refresh_Cursor.apply(this, arguments);
        }
    }

    //const _Window_Menu_Command_Draw_Background_Rect = Window_MenuCommand.prototype.drawBackgroundRect;
    Window_MenuCommand.prototype.drawBackgroundRect = function(rect) {
        //_Window_Menu_Command_Draw_Background_Rect.apply(this, arguments);
        //this.contentsBack.clearRect(rect.x, rect.y, rect.width, rect.height);
        const c1 = colorJsonObjectConvertToColorRGBA(commandWindowItemBGColor1JsonObject);
        const c2 = colorJsonObjectConvertToColorRGBA(commandWindowItemBGColor2JsonObject);
        const c3 = colorJsonObjectConvertToColorRGBA(commandWindowItemBGBorderColorJsonObject);
        const x = rect.x;
        const y = rect.y;
        const w = rect.width;
        const h = rect.height;
        this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
        this.contentsBack.strokeBetterRect(x, y, w, h, c3, commandWindowItemBGBorderLineWidth, commandWindowItemBGBorderLineJoin);
        //this.contentsBack.strokeRect(x, y, w, h, c3);
    };

    const _Window_Menu_Command_Reset_Text_Color = Window_MenuCommand.prototype.resetTextColor;
    Window_MenuCommand.prototype.resetTextColor = function() {
        _Window_Menu_Command_Reset_Text_Color.apply(this, arguments);
        this.changeTextColor(colorJsonObjectConvertToColorRGBA(commandWindowItemTextColorJsonObject));
        this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(commandWindowItemTextOutlineColorJsonObject));
    };

    const _Window_Menu_Command_Item_Text_Align = Window_MenuCommand.prototype.itemTextAlign;
    Window_MenuCommand.prototype.itemTextAlign = function() {
        let textAlign = _Window_Menu_Command_Item_Text_Align.apply(this, arguments);
        textAlign = commandWindowItemTextAlign;
        return textAlign;
    };

    Window_MenuCommand.prototype.drawText = function(text, x, y, maxWidth, align) {
        this.contents.drawText(text, x + commandWindowItemTextOffsetX, y, maxWidth, this.lineHeight(), align);
    };

    const _Window_Menu_Command_Draw_Item = Window_MenuCommand.prototype.drawItem;
    Window_MenuCommand.prototype.drawItem = function(index) {
        this.contents.fontSize = commandWindowItemFontSize;
        _Window_Menu_Command_Draw_Item.apply(this, arguments);
    };
    

    //GoldWindow
    const _Scene_Menu_Create_Gold_Window = Scene_Menu.prototype.createGoldWindow;
    Scene_Menu.prototype.createGoldWindow = function() {
        _Scene_Menu_Create_Gold_Window.apply(this, arguments);
        this._goldWindow.visible = goldWindowVisible;
    };

    //StatusWindow
    const _Scene_Menu_Create_Status_Window = Scene_Menu.prototype.createStatusWindow;
    Scene_Menu.prototype.createStatusWindow = function() {
        _Scene_Menu_Create_Status_Window.apply(this, arguments);
        this._statusWindow.visible = statusWindowVisible;
        this._statusWindow.windowskin = ImageManager.loadSystem(statusWindowWindowSkin);
        this._statusWindow._padding = statusWindowPadding;
    };

    const _Scene_Menu_Status_Window_Rect = Scene_Menu.prototype.statusWindowRect;
    Scene_Menu.prototype.statusWindowRect = function() {
        let rect = _Scene_Menu_Status_Window_Rect.apply(this, arguments);
        rect = new Rectangle(statusWindowOffset.x, statusWindowOffset.y, statusWindowItemWidth + 2 * statusWindowPadding + statusWindowColSpacing, statusWindowItemHeight * 4 + 2 * statusWindowPadding + statusWindowRowSpacing * 4);
        if (statusWindowMaxCols === 2) {
            rect = new Rectangle(statusWindowOffset.x, statusWindowOffset.y, statusWindowItemWidth * 2 + 2 * statusWindowPadding + statusWindowColSpacing * 2, statusWindowItemHeight * 2 + 2 * statusWindowPadding + statusWindowRowSpacing * 2);
        }
        if (statusWindowMaxCols === 4) {
            rect = new Rectangle(statusWindowOffset.x, statusWindowOffset.y, statusWindowItemWidth * 4 + 2 * statusWindowPadding + statusWindowColSpacing * 4, statusWindowItemHeight + 2 * statusWindowPadding + statusWindowRowSpacing);
        }
        return rect;
    };

    const _Window_Menu_Status_Item_Width = Window_MenuStatus.prototype.itemWidth;
    Window_MenuStatus.prototype.itemWidth = function() {
        let width = _Window_Menu_Status_Item_Width.apply(this, arguments);
        width = statusWindowItemWidth + this.colSpacing();
        return width;
    }

    const _Window_Menu_Status_Item_Height = Window_MenuStatus.prototype.itemHeight;
    Window_MenuStatus.prototype.itemHeight = function() {
        let height = _Window_Menu_Status_Item_Height.apply(this, arguments);
        height = statusWindowItemHeight + this.rowSpacing();
        return height;
    }

    const _Window_Menu_Status_RowSpacing = Window_MenuStatus.prototype.rowSpacing;
    Window_MenuStatus.prototype.rowSpacing = function() {
        let rowSpacing = _Window_Menu_Status_RowSpacing.apply(this, arguments);
        rowSpacing = statusWindowRowSpacing;
        return rowSpacing;
    };

    const _Window_Menu_Status_ColSpacing = Window_MenuStatus.prototype.colSpacing;
    Window_MenuStatus.prototype.colSpacing = function() {
        let colSpacing = _Window_Menu_Status_ColSpacing.apply(this, arguments);
        colSpacing = statusWindowColSpacing;
        return colSpacing;
    };
    
    const _Window_Menu_Status_MaxCols = Window_MenuStatus.prototype.maxCols;
    Window_MenuStatus.prototype.maxCols = function() {
        let maxCols = _Window_Menu_Status_MaxCols.apply(this, arguments);
        maxCols = statusWindowMaxCols;
        return maxCols;
    };

    Window_MenuStatus.prototype.drawItemImage = function(index) {
        if (statusWindowItemFaceImageVisible === true) {
            const actor = this.actor(index);
            const rect = this.itemRect(index);
            const width = statusWindowItemFaceImageWidth;
            const height = statusWindowItemFaceImageHeight;
            this.changePaintOpacity(actor.isBattleMember());
            this.drawActorFace(actor, rect.x + statusWindowItemFaceImageOffset.x, rect.y + statusWindowItemFaceImageOffset.y, width, height);
            this.changePaintOpacity(true);
        }
    };

    Window_MenuStatus.prototype.drawFace = function(
        faceName, faceIndex, x, y, width, height
    ) {
        width = width || ImageManager.faceWidth;
        height = height || ImageManager.faceHeight;
        const bitmap = ImageManager.loadFace(faceName);
        const pw = ImageManager.faceWidth;
        const ph = ImageManager.faceHeight;
        const dx = Math.floor(x);
        const dy = Math.floor(y);
        const sx = Math.floor((faceIndex % 4) * pw);
        const sy = Math.floor(Math.floor(faceIndex / 4) * ph);
        this.contents.blt(bitmap, sx, sy, pw, ph, dx, dy, width, height);
    };

    Window_MenuStatus.prototype.drawBackgroundRect = function(rect) {
        const c1 = colorJsonObjectConvertToColorRGBA(statusWindowItemBGColor1JsonObject);
        const c2 = colorJsonObjectConvertToColorRGBA(statusWindowItemBGColor2JsonObject);
        const c3 = colorJsonObjectConvertToColorRGBA(statusWindowItemBGBorderColorJsonObject);
        const x = rect.x + statusWindowItemBGOffset.x;
        const y = rect.y + statusWindowItemBGOffset.y;
        const w = statusWindowItemBGWidth;
        const h = statusWindowItemBGHeight;
        this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
        this.contentsBack.strokeBetterRect(x, y, w, h, c3, statusWindowItemBGBorderLineWidth, statusWindowItemBGBorderLineJoin);
    };

    Window_MenuStatus.prototype.drawPendingItemBackground = function(index) {
        if (index === this._pendingIndex) {
            const rect = this.itemRect(index);
            const c1 = colorJsonObjectConvertToColorRGBA(statusWindowPendingItemBGColorJsonObject);
            const x = rect.x + statusWindowPendingItemBGOffset.x;
            const y = rect.y + statusWindowPendingItemBGOffset.y;
            const w = statusWindowPendingItemBGWidth;
            const h = statusWindowPendingItemBGHeight;
            this.changePaintOpacity(false);
            this.contents.fillRect(x, y, w, h, c1);
            this.changePaintOpacity(true);
        }
    };

    Window_MenuStatus.prototype.drawItemStatus = function(index) {
        const actor = this.actor(index);
        const rect = this.itemRect(index);
        const x = rect.x;
        const y = rect.y;
        this.drawActorSimpleStatus(actor, x, y);
    };

    Window_MenuStatus.prototype.drawActorSimpleStatus = function(actor, x, y) {
        const lineHeight = this.lineHeight();
        const x2 = x + statusWindowItemNameOffset.x + 180;
        if (statusWindowItemNameVisible === true) {
            this.drawActorName(actor, x, y);
        }
        if (statusWindowItemLevelVisible === true) {
            this.drawActorLevel(actor, x, y);
        }
        this.drawActorIcons(actor, x, y);
        this.drawActorClass(actor, x2, y);
        this.placeBasicGauges(actor, x2, y + lineHeight);
    };

    Window_MenuStatus.prototype.drawActorName = function(actor, x, y, width) {
        width = width || 168;
        this.contents.fontSize = statusWindowItemNameFontSize;
        this.changeTextColor(colorJsonObjectConvertToColorRGBA(statusWindowItemNameTextColorJsonObject));
        this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(statusWindowItemNameTextOutlineColorJsonObject));
        // console.log("x: ", x)//184
        // console.log("y: ", y)//13
        // console.log("width: ", width)//168
        this.drawText(actor.name(), x + statusWindowItemNameOffset.x, y + statusWindowItemNameOffset.y, statusWindowItemNameWidth);
    };

    Window_MenuStatus.prototype.drawActorLevel = function(actor, x, y) {
        this.contents.fontSize = statusWindowItemLevelTagFontSize;
        this.changeTextColor(colorJsonObjectConvertToColorRGBA(statusWindowItemLevelTagTextColorJsonObject));
        this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(statusWindowItemLevelTagTextOutlineColorJsonObject));
        this.drawText(TextManager.levelA, x + statusWindowItemLevelTagOffset.x, y + statusWindowItemLevelTagOffset.y, statusWindowItemLevelTagWidth);

        this.contents.fontSize = statusWindowItemLevelValueFontSize;
        this.changeTextColor(colorJsonObjectConvertToColorRGBA(statusWindowItemLevelValueTextColorJsonObject));
        this.changeOutlineColor(colorJsonObjectConvertToColorRGBA(statusWindowItemLevelValueTextOutlineColorJsonObject));
        this.drawText(actor.level, x + statusWindowItemLevelValueOffset.x, y + statusWindowItemLevelValueOffset.y, statusWindowItemLevelValueWidth);
    };

    Window_MenuStatus.prototype.drawActorIcons = function(actor, x, y, width) {
        width = width || 144;
        const iconWidth = statusWindowItemIconWidth;
        const icons = actor.allIcons().slice(0, Math.floor(statusWindowItemAllIconsWidth / (iconWidth + statusWindowItemIconColSpacing)));
        let iconX = x + statusWindowItemIconsOffset.x;
        let iconY = y + statusWindowItemIconsOffset.y;
        let nextX = iconWidth + statusWindowItemIconColSpacing;
        for (const icon of icons) {
            this.drawIcon(icon, iconX, iconY);
            iconX += nextX;
        }
    };

    Window_MenuStatus.prototype.drawIcon = function(iconIndex, x, y) {
        const bitmap = ImageManager.loadSystem("IconSet");
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const sx = (iconIndex % 16) * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y, statusWindowItemIconWidth, statusWindowItemIconWidth);
    };

})();