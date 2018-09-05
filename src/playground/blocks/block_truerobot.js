'use strict';

Entry.trueRobot = {
    name: 'trueRobot',
    url: 'http://www.sigongmedia.co.kr',
    imageName: 'truetrue.png',
    delayTime: 30,
    title: {
        en: 'TrueTrueRobot',
        ko: '뚜루뚜루',
    },
    PORT_MAP: {
        singlemotor: 0x0a,
        dualmotor: 0x0a,
        colorled: 0x08,
        leds: 0x46,
        linetracer: 0x4c,
        led_line: 0x05,
        leftWheel: 0x09,
        rightWheel: 0x0a,
        allWheel: 0x0b,
        colorRed: 0,
        colorGreen: 0,
        colorBlue: 0,
        ledPort: 0,
        dualPort: 11,
        linePort: 0xf0,
    },
    setZero: function() {
        var portMap = Entry.trueRobot.PORT_MAP;
        var portMap2 = Entry.trueRobot.PORT_MAP;
        if (!Entry.hw.sendQueue['SET']) {
            Entry.hw.sendQueue['SET'] = {};
        }
        var sq = Entry.hw.sendQueue;

        var intoDevice;
        var intoPort;

        for (var port in portMap) {
            sq[port] = portMap[port];
            intoPort = portMap[port];
            for (var device in portMap2) {
                intoDevice = portMap2[port];
                if (intoPort == 8) {
                    var ckeckDataC = 255;
                } else {
                    var ckeckDataC = 0;
                }
                Entry.hw.sendQueue['SET'][intoDevice] = {
                    port: intoPort,
                    dataA: 0,
                    dataB: 0,
                    dataC: ckeckDataC,
                };
                Entry.hw.update();
            }
        }
    },
};

Entry.trueRobot.getBlocks = function() {
    return {
        //region TrueTrueRobot 뚜루뚜루로봇
        truetrue_get_linesensor: {
            color: '#00979D',
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['Left_Out', 'L2'],
                        ['Left_In', 'L1'],
                        ['Right_In', 'R1'],
                        ['Right_Out', 'R2'],
                    ],
                    value: 'Left_Out',
                    fontSize: 11,
                },
            ],
            events: {},
            def: {
                params: ['L2'],
                type: 'truetrue_get_linesensor',
            },
            paramsKeyMap: {
                position: 0,
            },
            class: 'trueRobot_sensor',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var pd = Entry.hw.portData;
                var dev = script.getField('position');

                return pd[dev];
            },
            syntax: { js: [], py: [] },
        },
        truetrue_get_proxisensor: {
            color: '#00979D',
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [['Left', 'ProxiLeft'], ['Right', 'ProxiRight']],
                    value: 'Left',
                    fontSize: 11,
                },
            ],
            events: {},
            def: {
                params: ['ProxiLeft'],
                type: 'truetrue_get_proxisensor',
            },
            paramsKeyMap: {
                position: 0,
            },
            class: 'trueRobot_sensor',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var pd = Entry.hw.portData;
                var dev = script.getField('position');

                return pd[dev];
            },
            syntax: { js: [], py: [] },
        },
        truetrue_get_accsensor: {
            color: '#00979D',
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['X-axis', 'AccX'],
                        ['Y-axis', 'AccY'],
                        ['Z-axis', 'AccZ'],
                        ['Tilt', 'AccStatus'],
                    ],
                    value: 'X-axis',
                    fontSize: 11,
                },
            ],
            events: {},
            def: {
                params: ['AccX'],
                type: 'truetrue_get_accsensor',
            },
            paramsKeyMap: {
                position: 0,
            },
            class: 'trueRobot_sensor',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var pd = Entry.hw.portData;
                var dev = script.getField('position');

                return pd[dev];
            },
            syntax: { js: [], py: [] },
        },
        truetrue_get_bottomcolorsensor: {
            color: '#00979D',
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['Red', 'BColorRed'],
                        ['Green', 'BColorGreen'],
                        ['Blue', 'BColorBlue'],
                        ['ColorKey', 'BColorKey'],
                    ],
                    value: 'Red',
                    fontSize: 11,
                },
            ],
            events: {},
            def: {
                params: ['BColorRed'],
                type: 'truetrue_get_bottomcolorsensor',
            },
            paramsKeyMap: {
                position: 0,
            },
            class: 'trueRobot_sensor',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var pd = Entry.hw.portData;
                var dev = script.getField('position');

                return pd[dev];
            },
            syntax: { js: [], py: [] },
        },
        truetrue_get_frontcolorsensor: {
            color: '#00979D',
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [['Left', 'FColorLeftKey'], ['Right', 'FColorRightKey']],
                    value: 'Left',
                    fontSize: 11,
                },
            ],
            events: {},
            def: {
                params: ['FColorLeftKey'],
                type: 'truetrue_get_frontcolorsensor',
            },
            paramsKeyMap: {
                position: 0,
            },
            class: 'trueRobot_sensor',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var pd = Entry.hw.portData;
                var dev = script.getField('position');

                return pd[dev];
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_singlemotor: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [['Left', '9'], ['Right', '10'], ['All', '11']],
                    value: 'Left',
                    fontSize: 11,
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: ['9', '0', null],
                type: 'truetrue_set_singlemotor',
            },
            paramsKeyMap: {
                PORT: 0,
                VALUE: 1,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: async function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.singlemotor;
                var value = await script.getNumberValue('VALUE');
                value = Math.round(value);
                value = Math.max(value, -100);
                value = Math.min(value, 100);
                //set two bytes.
                var speed = 0;
                var direction = 0;
                if (value < 0) {
                    speed = -1 * value;
                    direction = 1;
                } else {
                    speed = value;
                    direction = 0;
                }

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    if (script.getNumberField('PORT') == 11) {
                        device = Entry.trueRobot.PORT_MAP.dualmotor;
                        Entry.hw.sendQueue['SET'][device] = {
                            port: script.getNumberField('PORT'),
                            dataA: value,
                            dataB: value,
                            dataC: 1,
                        };
                    } else {
                        Entry.hw.sendQueue['SET'][device] = {
                            port: script.getNumberField('PORT'),
                            dataA: speed,
                            dataB: direction,
                            dataC: 0,
                        };
                    }
                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_dualmotor: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: ['0', '0', '0', null],
                type: 'truetrue_set_dualmotor',
            },
            paramsKeyMap: {
                leftValue: 0,
                rightValue: 1,
                delayValue: 2,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: async function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.dualmotor;

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    let [leftValue, rightValue, delayValue] = await Promise.all([
                        script.getNumberValue('leftValue'),
                        script.getNumberValue('rightValue'),
                        script.getNumberValue('delayValue'),
                    ]);
                    leftValue = Math.round(leftValue);
                    leftValue = Math.max(leftValue, -100);
                    leftValue = Math.min(leftValue, 100);

                    rightValue = Math.round(rightValue);
                    rightValue = Math.max(rightValue, -100);
                    rightValue = Math.min(rightValue, 100);

                    delayValue = Math.round(delayValue);
                    delayValue = Math.max(delayValue, -100);
                    delayValue = Math.min(delayValue, 100);

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.dualPort,
                        dataA: leftValue,
                        dataB: rightValue,
                        dataC: delayValue,
                    };

                    var timeValue = delayValue;

                    if (timeValue == 0) {
                        var myTimer = setTimeout(function() {
                            script.timeFlag = 2;
                        }, Entry.trueRobot.delayTime);
                        return script;
                    }

                    timeValue = Math.round(timeValue);
                    timeValue = Math.max(timeValue, -100);
                    timeValue = Math.min(timeValue, 100);
                    var fps = Entry.FPS || 60;
                    timeValue = 60 / fps * timeValue * 1000;
                    var myTimer = setTimeout(function() {
                        script.timeFlag = 0;
                    }, timeValue);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                } else {
                    Entry.engine.isContinue = false;

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.dualPort,
                        dataA: 0,
                        dataB: 0,
                        dataC: 0,
                    };
                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_colorled: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: ['0', '0', '0', null],
                type: 'truetrue_set_colorled',
            },
            paramsKeyMap: {
                redColor: 0,
                greenColor: 1,
                blueColor: 2,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: async function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.colorled;

                let [redColor, greenColor, blueColor] = await Promise.all([
                    script.getNumberValue('redColor'),
                    script.getNumberValue('greenColor'),
                    script.getNumberValue('blueColor'),
                ]);
                
                redColor = Math.round(redColor);
                redColor = Math.max(redColor, 0);
                redColor = Math.min(redColor, 255);
                
                greenColor = Math.round(greenColor);
                greenColor = Math.max(greenColor, 0);
                greenColor = Math.min(greenColor, 255);
                
                blueColor = Math.round(blueColor);
                blueColor = Math.max(blueColor, 0);
                blueColor = Math.min(blueColor, 255);

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.colorled,
                        dataA: redColor,
                        dataB: greenColor,
                        dataC: blueColor,
                    };

                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_led_proxi: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_front_near_left, 9],
                        [Lang.Blocks.truetruebot_front_near_right, 10],
                    ],
                    value: 9,
                    fontSize: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_on, 'on'],
                        [Lang.Blocks.truetruebot_off, 'off'],
                    ],
                    value: 'on',
                    fontSize: 11,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: [9, 'on', null],
                type: 'truetrue_set_led_proxi',
            },
            paramsKeyMap: {
                PORT: 0,
                ONOFF: 1,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.leds;

                var onoff = script.getField('ONOFF');
                var value = onoff == 'on' ? 1 : 0;

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    Entry.hw.sendQueue['SET'][device] = {
                        port: script.getNumberField('PORT'),
                        dataA: value,
                        dataB: 0x07,
                        dataC: 0x07,
                    };
                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_led_colorsensor: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_front_color, 3],
                        [Lang.Blocks.truetruebot_bottom_color, 4],
                    ],
                    value: 3,
                    fontSize: 11,
                },
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_on, 'on'],
                        [Lang.Blocks.truetruebot_off, 'off'],
                    ],
                    value: 'on',
                    fontSize: 11,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: [3, 'on', null],
                type: 'truetrue_set_led_colorsensor',
            },
            paramsKeyMap: {
                PORT: 0,
                ONOFF: 1,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.leds;

                var onoff = script.getField('ONOFF');
                var value = onoff == 'on' ? 1 : 0;

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    Entry.hw.sendQueue['SET'][device] = {
                        port: script.getNumberField('PORT'),
                        dataA: value,
                        dataB: 0x07,
                        dataC: 0x07,
                    };

                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_led_linesensor: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_on, 'on'],
                        [Lang.Blocks.truetruebot_off, 'off'],
                    ],
                    value: 'on',
                    fontSize: 11,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: ['on', null],
                type: 'truetrue_set_led_linesensor',
            },
            paramsKeyMap: {
                ONOFF: 0,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.leds;

                var onoff = script.getField('ONOFF');
                var value = onoff == 'on' ? 1 : 0;

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.led_line,
                        dataA: value,
                        dataB: 0x07,
                        dataC: 0x07,
                    };
                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_linetracer: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_on, 'on'],
                        [Lang.Blocks.truetruebot_off, 'off'],
                    ],
                    value: 'on',
                    fontSize: 11,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: ['on', null],
                type: 'truetrue_set_linetracer',
            },
            paramsKeyMap: {
                ONOFF: 0,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.linetracer;

                var onoff = script.getField('ONOFF');
                var value = onoff == 'on' ? 1 : 0;

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.led_line,
                        dataA: value,
                        dataB: 0x07,
                        dataC: 0x07,
                    };

                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_head_colorled: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_head_color_white, 101],
                        [Lang.Blocks.truetruebot_head_color_red, 102],
                        [Lang.Blocks.truetruebot_head_color_green, 103],
                        [Lang.Blocks.truetruebot_head_color_blue, 104],
                        [Lang.Blocks.truetruebot_head_color_cyan, 105],
                        [Lang.Blocks.truetruebot_head_color_magenta, 106],
                        [Lang.Blocks.truetruebot_head_color_yellow, 107],
                        [Lang.Blocks.truetruebot_head_color_off, 100],
                    ],
                    value: 101,
                    fontSize: 11,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: [101, null],
                type: 'truetrue_set_head_colorled',
            },
            paramsKeyMap: {
                headColor: 0,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.colorled;

                var headColor = script.getField('headColor');

                var redColor;
                var greenColor;
                var blueColor;

                if (headColor == 101) {
                    redColor = 255;
                    greenColor = 255;
                    blueColor = 255;
                } else if (headColor == 102) {
                    redColor = 255;
                    greenColor = 0;
                    blueColor = 0;
                } else if (headColor == 103) {
                    redColor = 0;
                    greenColor = 255;
                    blueColor = 0;
                } else if (headColor == 104) {
                    redColor = 0;
                    greenColor = 0;
                    blueColor = 255;
                } else if (headColor == 105) {
                    redColor = 0;
                    greenColor = 255;
                    blueColor = 255;
                } else if (headColor == 106) {
                    redColor = 255;
                    greenColor = 0;
                    blueColor = 255;
                } else if (headColor == 107) {
                    redColor = 255;
                    greenColor = 255;
                    blueColor = 0;
                } else if (headColor == 100) {
                    redColor = 0;
                    greenColor = 0;
                    blueColor = 0;
                }

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.colorled,
                        dataA: redColor,
                        dataB: greenColor,
                        dataC: blueColor,
                    };

                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_move: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_move_forward, 101],
                        [Lang.Blocks.truetruebot_move_backward, 102],
                    ],
                    value: 101,
                    fontSize: 11,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: [101, null],
                type: 'truetrue_set_move',
            },
            paramsKeyMap: {
                moveValue: 0,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.dualmotor;

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    var moveValue = script.getField('moveValue');
                    var leftValue;
                    var rightValue;
                    var delayValue;

                    if (moveValue == 101) {
                        leftValue = 100;
                        rightValue = 100;
                        delayValue = 0;
                    } else if (moveValue == 102) {
                        leftValue = -100;
                        rightValue = -100;
                        delayValue = 0;
                    }

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.dualPort,
                        dataA: leftValue,
                        dataB: rightValue,
                        dataC: delayValue,
                    };

                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_sec_move: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_move_forward, 101],
                        [Lang.Blocks.truetruebot_move_backward, 102],
                    ],
                    value: 101,
                    fontSize: 11,
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: [101, '0', null],
                type: 'truetrue_set_sec_move',
            },
            paramsKeyMap: {
                moveValue: 0,
                delayValue: 1,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: async function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.dualmotor;

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                var timeValue = await script.getNumberValue('delayValue');
                var delayValue = timeValue;
                delayValue = Math.round(delayValue);
                delayValue = Math.max(delayValue, -100);
                delayValue = Math.min(delayValue, 100);

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    var moveValue = script.getField('moveValue');
                    var leftValue;
                    var rightValue;

                    if (moveValue == 101) {
                        leftValue = 100;
                        rightValue = 100;
                    } else if (moveValue == 102) {
                        leftValue = -100;
                        rightValue = -100;
                    }

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.dualPort,
                        dataA: leftValue,
                        dataB: rightValue,
                        dataC: delayValue,
                    };

                    if (timeValue == 0) {
                        var myTimer = setTimeout(function() {
                            script.timeFlag = 2;
                        }, Entry.trueRobot.delayTime);
                        return script;
                    }

                    timeValue = Math.round(timeValue);
                    timeValue = Math.max(timeValue, -100);
                    timeValue = Math.min(timeValue, 100);
                    var fps = Entry.FPS || 60;
                    timeValue = 60 / fps * timeValue * 1000;
                    var myTimer = setTimeout(function() {
                        script.timeFlag = 0;
                    }, timeValue);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                } else {
                    Entry.engine.isContinue = false;

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.dualPort,
                        dataA: 0,
                        dataB: 0,
                        dataC: 0,
                    };
                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_rotate: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_move_right, 101],
                        [Lang.Blocks.truetruebot_move_left, 102],
                    ],
                    value: 101,
                    fontSize: 11,
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: [101, null],
                type: 'truetrue_set_rotate',
            },
            paramsKeyMap: {
                moveValue: 0,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.dualmotor;

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    var moveValue = script.getField('moveValue');
                    var leftValue;
                    var rightValue;
                    var delayValue;

                    if (moveValue == 101) {
                        leftValue = 100;
                        rightValue = -100;
                        delayValue = 0;
                    } else if (moveValue == 102) {
                        leftValue = -100;
                        rightValue = 100;
                        delayValue = 0;
                    }

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.dualPort,
                        dataA: leftValue,
                        dataB: rightValue,
                        dataC: delayValue,
                    };

                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
            syntax: { js: [], py: [] },
        },
        truetrue_set_sec_rotate: {
            color: '#00979D',
            skeleton: 'basic',
            statements: [],
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.Blocks.truetruebot_move_right, 101],
                        [Lang.Blocks.truetruebot_move_left, 102],
                    ],
                    value: 101,
                    fontSize: 11,
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_03.png',
                    size: 12,
                },
            ],
            events: {},
            def: {
                params: [101, '0', null],
                type: 'truetrue_set_sec_rotate',
            },
            paramsKeyMap: {
                moveValue: 0,
                delayValue: 1,
            },
            class: 'trueRobot_control',
            isNotFor: ['trueRobot'],
            func: async function(sprite, script) {
                var device = Entry.trueRobot.PORT_MAP.dualmotor;

                if (!Entry.hw.sendQueue['SET']) {
                    Entry.hw.sendQueue['SET'] = {};
                }

                var timeValue = await script.getNumberValue('delayValue');
                var delayValue = timeValue;
                delayValue = Math.round(delayValue);
                delayValue = Math.max(delayValue, -100);
                delayValue = Math.min(delayValue, 100);

                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    var moveValue = script.getField('moveValue');
                    var leftValue;
                    var rightValue;

                    if (moveValue == 101) {
                        leftValue = 100;
                        rightValue = -100;
                    } else if (moveValue == 102) {
                        leftValue = -100;
                        rightValue = 100;
                    }

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.dualPort,
                        dataA: leftValue,
                        dataB: rightValue,
                        dataC: delayValue,
                    };

                    if (timeValue == 0) {
                        var myTimer = setTimeout(function() {
                            script.timeFlag = 2;
                        }, Entry.trueRobot.delayTime);
                        return script;
                    }

                    timeValue = Math.round(timeValue);
                    timeValue = Math.max(timeValue, -100);
                    timeValue = Math.min(timeValue, 100);
                    var fps = Entry.FPS || 60;
                    timeValue = 60 / fps * timeValue * 1000;
                    var myTimer = setTimeout(function() {
                        script.timeFlag = 0;
                    }, timeValue);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.timeFlag == 2) {
                    clearTimeout(myTimer);
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                } else {
                    Entry.engine.isContinue = false;

                    Entry.hw.sendQueue['SET'][device] = {
                        port: Entry.trueRobot.PORT_MAP.dualPort,
                        dataA: 0,
                        dataB: 0,
                        dataC: 0,
                    };
                    var myTimer = setTimeout(function() {
                        script.timeFlag = 2;
                    }, Entry.trueRobot.delayTime);
                    return script;
                }
            },
            syntax: { js: [], py: [] },
        },
    };
};

// 언어 적용
Entry.trueRobot.setLanguage = function() {
    return {
        ko: {
            // ko.js에 작성하던 내용
            template: {
                truetrue_get_accsensor: '가속도센서 %1 의 값',
                truetrue_get_bottomcolorsensor: '바닥컬러센서 %1 의 값',
                truetrue_get_frontcolorsensor: '전면컬러센서 %1 의 값',
                truetrue_get_linesensor: '라인센서 %1 의 값',
                truetrue_get_proxisensor: '근접센서 %1 의 값',
                truetrue_set_colorled: '컬러LED Red %1  Green %2 Blue %3 로 설정 %4',
                truetrue_set_dualmotor: 'DC모터 좌 %1  우 %2 속도로 %3 초 구동 %4',
                truetrue_set_led_colorsensor: '%1 조명용 LED %2 %3',
                truetrue_set_led_linesensor: '라인센서 조명용 LED %1 %2',
                truetrue_set_led_proxi: '%1 조명용 LED %2 %3',
                truetrue_set_linetracer: '라인트레이싱 모드 %1 %2',
                truetrue_set_singlemotor: 'DC모터 %1  속도 %2 로 설정 %3',
                truetrue_set_head_colorled: '머리 LED를 %1 로 변경 %2',
                truetrue_set_move: '로봇을 %1 계속이동 %2',
                truetrue_set_sec_move: '로봇을 %1  %2 초 이동 %3',
                truetrue_set_rotate: '로봇을 %1 계속 회전 %2',
                truetrue_set_sec_rotate: '로봇을 %1  %2 초 회전 %3',
            },
            Blocks: {
                truetruebot_on: '켜기',
                truetruebot_off: '끄기',
                truetruebot_front_near_right: '근접센서오른쪽',
                truetruebot_front_near_left: '근접센서왼쪽',
                truetruebot_front_color: '전면컬러센서',
                truetruebot_bottom_color: '바닥컬러센서',
                truetruebot_head_color_white: '흰색',
                truetruebot_head_color_red: '빨간색',
                truetruebot_head_color_green: '초록색',
                truetruebot_head_color_blue: '파란색',
                truetruebot_head_color_cyan: '하늘색',
                truetruebot_head_color_magenta: '자주색',
                truetruebot_head_color_yellow: '노란색',
                truetruebot_head_color_off: '끄기',
                truetruebot_move_forward: '앞으로',
                truetruebot_move_backward: '뒤로',
                truetruebot_move_right: '오른쪽으로',
                truetruebot_move_left: '왼쪽으로',
            },
        },
        code: {
            template: {
                truetrue_get_accsensor: '가속도센서 %1 의 값',
                truetrue_get_bottomcolorsensor: '바닥컬러센서 %1 의 값',
                truetrue_get_frontcolorsensor: '전면컬러센서 %1 의 값',
                truetrue_get_linesensor: '라인센서 %1 의 값',
                truetrue_get_proxisensor: '근접센서 %1 의 값',
                truetrue_set_colorled: '컬러LED Red %1  Green %2 Blue %3 로 설정 %4',
                truetrue_set_dualmotor: 'DC모터 좌 %1  우 %2 속도로 %3 초 구동 %4',
                truetrue_set_led_colorsensor: '%1 조명용 LED %2 %3',
                truetrue_set_led_linesensor: '라인센서 조명용 LED %1 %2',
                truetrue_set_led_proxi: '%1 조명용 LED %2 %3',
                truetrue_set_linetracer: '라인트레이싱 모드 %1 %2',
                truetrue_set_singlemotor: 'DC모터 %1  속도 %2 로 설정 %3',
                truetrue_set_head_colorled: '머리 LED를 %1 로 변경 %2',
                truetrue_set_move: '로봇을 %1 계속이동 %2',
                truetrue_set_sec_move: '로봇을 %1  %2 초 이동 %3',
                truetrue_set_rotate: '로봇을 %1 계속 회전 %2',
                truetrue_set_sec_rotate: '로봇을 %1  %2 초 회전 %3',
            },
            Blocks: {
                truetruebot_on: '켜기',
                truetruebot_off: '끄기',
                truetruebot_front_near_right: '근접센서오른쪽',
                truetruebot_front_near_left: '근접센서왼쪽',
                truetruebot_front_color: '전면컬러센서',
                truetruebot_bottom_color: '바닥컬러센서',
                truetruebot_head_color_white: '흰색',
                truetruebot_head_color_red: '빨간색',
                truetruebot_head_color_green: '초록색',
                truetruebot_head_color_blue: '파란색',
                truetruebot_head_color_cyan: '하늘색',
                truetruebot_head_color_magenta: '자주색',
                truetruebot_head_color_yellow: '노란색',
                truetruebot_head_color_off: '끄기',
                truetruebot_move_forward: '앞으로',
                truetruebot_move_backward: '뒤로',
                truetruebot_move_right: '오른쪽으로',
                truetruebot_move_left: '왼쪽으로',
            },
        },
        ebs: {
            template: {
                truetrue_get_accsensor: '가속도센서 %1 의 값',
                truetrue_get_bottomcolorsensor: '바닥컬러센서 %1 의 값',
                truetrue_get_frontcolorsensor: '전면컬러센서 %1 의 값',
                truetrue_get_linesensor: '라인센서 %1 의 값',
                truetrue_get_proxisensor: '근접센서 %1 의 값',
                truetrue_set_colorled: '컬러LED Red %1  Green %2 Blue %3 로 설정 %4',
                truetrue_set_dualmotor: 'DC모터 좌 %1  우 %2 속도로 %3 초 구동 %4',
                truetrue_set_led_colorsensor: '%1 조명용 LED %2 %3',
                truetrue_set_led_linesensor: '라인센서 조명용 LED %1 %2',
                truetrue_set_led_proxi: '%1 조명용 LED %2 %3',
                truetrue_set_linetracer: '라인트레이싱 모드 %1 %2',
                truetrue_set_singlemotor: 'DC모터 %1  속도 %2 로 설정 %3',
                truetrue_set_head_colorled: '머리 LED를 %1 로 변경 %2',
                truetrue_set_move: '로봇을 %1 계속이동 %2',
                truetrue_set_sec_move: '로봇을 %1  %2 초 이동 %3',
                truetrue_set_rotate: '로봇을 %1 계속 회전 %2',
                truetrue_set_sec_rotate: '로봇을 %1  %2 초 회전 %3',
            },
            Blocks: {
                truetruebot_on: '켜기',
                truetruebot_off: '끄기',
                truetruebot_front_near_right: '근접센서오른쪽',
                truetruebot_front_near_left: '근접센서왼쪽',
                truetruebot_front_color: '전면컬러센서',
                truetruebot_bottom_color: '바닥컬러센서',
                truetruebot_head_color_white: '흰색',
                truetruebot_head_color_red: '빨간색',
                truetruebot_head_color_green: '초록색',
                truetruebot_head_color_blue: '파란색',
                truetruebot_head_color_cyan: '하늘색',
                truetruebot_head_color_magenta: '자주색',
                truetruebot_head_color_yellow: '노란색',
                truetruebot_head_color_off: '끄기',
                truetruebot_move_forward: '앞으로',
                truetruebot_move_backward: '뒤로',
                truetruebot_move_right: '오른쪽으로',
                truetruebot_move_left: '왼쪽으로',
            },
        },
        jp: {
            template: {
                truetrue_get_accsensor: '加速度センサー%1の値',
                truetrue_get_bottomcolorsensor: '床面カラーセンサー%1の値',
                truetrue_get_frontcolorsensor: '全面カラーセンサー%1の値',
                truetrue_get_linesensor: 'ラインセンサー%1の値',
                truetrue_get_proxisensor: '近接センサー%1の値',
                truetrue_set_colorled: 'カラーLED Red %1  Green %2 Blue %3 に設定 %4',
                truetrue_set_dualmotor: 'DCモーター左 %1  右 %2速度で%3秒駆動%4',
                truetrue_set_led_colorsensor: '%1照明用LED %2 %3',
                truetrue_set_led_linesensor: 'ラインセンサー照明用LED %1 %2',
                truetrue_set_led_proxi: '%1照明用LED %2 %3',
                truetrue_set_linetracer: 'ライントレーシングモード%1 %2',
                truetrue_set_singlemotor: 'DCモーター %1 速度 %2 に設定 %3',
                truetrue_set_head_colorled: 'Change LED color to %1 %2',
                truetrue_set_move: 'Move TRUETRUE %1 forever %2',
                truetrue_set_sec_move: 'Move TRUETRUE %1 for %2 second(s) %3',
                truetrue_set_rotate: 'Rotate TRUETRUE %1 forever %2',
                truetrue_set_sec_rotate: 'Rotate TRUETRUE %1 for %2 Second(s) %3',
            },
            Blocks: {
                truetruebot_on: 'on',
                truetruebot_off: 'off',
                truetruebot_front_near_right: 'Proxi Right',
                truetruebot_front_near_left: 'Proxi Left',
                truetruebot_front_color: 'Color sensor (Card)',
                truetruebot_bottom_color: 'Color sensor (Bottom)',
                truetruebot_head_color_white: 'White',
                truetruebot_head_color_red: 'Red',
                truetruebot_head_color_green: 'Green',
                truetruebot_head_color_blue: 'Blue',
                truetruebot_head_color_cyan: 'Cyan',
                truetruebot_head_color_magenta: 'Magenta',
                truetruebot_head_color_yellow: 'Yellow',
                truetruebot_head_color_off: 'off',
                truetruebot_move_forward: 'forward',
                truetruebot_move_backward: 'backward',
                truetruebot_move_right: 'right',
                truetruebot_move_left: 'left',
            },
        },
        vn: {
            template: {
                truetrue_get_accsensor: '3-AXIS Accelerometer %1 Sensor value',
                truetrue_get_bottomcolorsensor: 'Bottom Color %1 Sensor value',
                truetrue_get_frontcolorsensor: 'Front Color %1 Sensor value',
                truetrue_get_linesensor: 'Line %1 Sensor value',
                truetrue_get_proxisensor: 'Proximity %1 Sensor value',
                truetrue_set_colorled: 'Set Color LED Red %1  Green %2 Blue %3 %4',
                truetrue_set_dualmotor: 'Set DC motor left %1  right %2 during %3 seconds %4',
                truetrue_set_led_colorsensor: 'LED for %1 color sensor %2 %3',
                truetrue_set_led_linesensor: 'LED for line sensor %1 %2',
                truetrue_set_led_proxi: 'LED for %1 proximity sensor %2 %3',
                truetrue_set_linetracer: 'Line tracing mode %1 %2',
                truetrue_set_singlemotor: 'Set DC motor %1  speed %2 %3',
                truetrue_set_head_colorled: 'Change LED color to %1 %2',
                truetrue_set_move: 'Move TRUETRUE %1 forever %2',
                truetrue_set_sec_move: 'Move TRUETRUE %1 for %2 second(s) %3',
                truetrue_set_rotate: 'Rotate TRUETRUE %1 forever %2',
                truetrue_set_sec_rotate: 'Rotate TRUETRUE %1 for %2 Second(s) %3',
            },
            Blocks: {
                truetruebot_on: 'on',
                truetruebot_off: 'off',
                truetruebot_front_near_right: 'Proxi Right',
                truetruebot_front_near_left: 'Proxi Left',
                truetruebot_front_color: 'Color sensor (Card)',
                truetruebot_bottom_color: 'Color sensor (Bottom)',
                truetruebot_head_color_white: 'White',
                truetruebot_head_color_red: 'Red',
                truetruebot_head_color_green: 'Green',
                truetruebot_head_color_blue: 'Blue',
                truetruebot_head_color_cyan: 'Cyan',
                truetruebot_head_color_magenta: 'Magenta',
                truetruebot_head_color_yellow: 'Yellow',
                truetruebot_head_color_off: 'off',
                truetruebot_move_forward: 'forward',
                truetruebot_move_backward: 'backward',
                truetruebot_move_right: 'right',
                truetruebot_move_left: 'left',
            },
        },
        en: {
            template: {
                truetrue_get_accsensor: '3-AXIS Accelerometer %1 Sensor value',
                truetrue_get_bottomcolorsensor: 'Bottom Color %1 Sensor value',
                truetrue_get_frontcolorsensor: 'Front Color %1 Sensor value',
                truetrue_get_linesensor: 'Line %1 Sensor value',
                truetrue_get_proxisensor: 'Proximity %1 Sensor value',
                truetrue_set_colorled: 'Set Color LED Red %1  Green %2 Blue %3 %4',
                truetrue_set_dualmotor: 'Set DC motor left %1  right %2 during %3 seconds %4',
                truetrue_set_led_colorsensor: 'LED for %1 color sensor %2 %3',
                truetrue_set_led_linesensor: 'LED for line sensor %1 %2',
                truetrue_set_led_proxi: 'LED for %1 proximity sensor %2 %3',
                truetrue_set_linetracer: 'Line tracing mode %1 %2',
                truetrue_set_singlemotor: 'Set DC motor %1  speed %2 %3',
                truetrue_set_head_colorled: 'Change LED color to %1 %2',
                truetrue_set_move: 'Move TRUETRUE %1 forever %2',
                truetrue_set_sec_move: 'Move TRUETRUE %1 for %2 second(s) %3',
                truetrue_set_rotate: 'Rotate TRUETRUE %1 forever %2',
                truetrue_set_sec_rotate: 'Rotate TRUETRUE %1 for %2 Second(s) %3',
            },
            Blocks: {
                truetruebot_on: 'on',
                truetruebot_off: 'off',
                truetruebot_front_near_right: 'Proxi Right',
                truetruebot_front_near_left: 'Proxi Left',
                truetruebot_front_color: 'Color sensor (Card)',
                truetruebot_bottom_color: 'Color sensor (Bottom)',
                truetruebot_head_color_white: 'White',
                truetruebot_head_color_red: 'Red',
                truetruebot_head_color_green: 'Green',
                truetruebot_head_color_blue: 'Blue',
                truetruebot_head_color_cyan: 'Cyan',
                truetruebot_head_color_magenta: 'Magenta',
                truetruebot_head_color_yellow: 'Yellow',
                truetruebot_head_color_off: 'off',
                truetruebot_move_forward: 'forward',
                truetruebot_move_backward: 'backward',
                truetruebot_move_right: 'right',
                truetruebot_move_left: 'left',
            },
        },
    };
};
