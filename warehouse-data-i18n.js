// Многоязычные данные справочника СКЛАД
// Этот файл содержит все переводы для глав, подглав и контента

const warehouseDataI18n = {
    chapters: [
        {
            id: 'chapter1',
            icon: '🚛',
            title: {
                ru: 'Процесс приемки',
                en: 'Receiving Process',
                zh: '接收流程'
            },
            description: {
                ru: '',
                en: '',
                zh: ''
            },
            subchapters: [
                { 
                    id: '1.1', 
                    title: {
                        ru: 'Заезд ТС на площадку',
                        en: 'Vehicle Arrival at Site',
                        zh: '车辆到达场地'
                    }
                },
                { 
                    id: '1.2', 
                    title: {
                        ru: 'Правила предоставления информации в Отдел Учета',
                        en: 'Rules for Providing Information to Accounting Department',
                        zh: '向会计部门提供信息的规则'
                    }
                },
                { 
                    id: '1.3', 
                    title: {
                        ru: 'Проверка Документов перед выгрузкой',
                        en: 'Document Verification Before Unloading',
                        zh: '卸货前文件检查'
                    }
                },
                { 
                    id: '1.4', 
                    title: {
                        ru: 'Начало выгрузки',
                        en: 'Start of Unloading',
                        zh: '开始卸货'
                    }
                },
                { 
                    id: '1.5', 
                    title: {
                        ru: 'Работа с Несоответствиями при Приемке ТМЦ',
                        en: 'Handling Discrepancies During Material Acceptance',
                        zh: '材料验收时处理不符项'
                    }
                },
                { 
                    id: '1.6', 
                    title: {
                        ru: 'Составление Акта М7',
                        en: 'Preparation of Act M7',
                        zh: '编制M7报告'
                    }
                },
                { 
                    id: '1.7', 
                    title: {
                        ru: 'Выгрузка ТС',
                        en: 'Vehicle Unloading',
                        zh: '车辆卸货'
                    }
                },
                { 
                    id: '1.8', 
                    title: {
                        ru: 'Составление Акта о Повреждении ТМЦ',
                        en: 'Preparation of Material Damage Act',
                        zh: '编制材料损坏报告'
                    }
                },
                { 
                    id: '1.9', 
                    title: {
                        ru: 'Предоставление информации о выгруженном ТС в Отдел Учета',
                        en: 'Providing Information on Unloaded Vehicle to Accounting Department',
                        zh: '向会计部门提供已卸货车辆信息'
                    }
                }
            ]
        },
        {
            id: 'chapter2',
            icon: '📦',
            title: {
                ru: 'Хранение материала',
                en: 'Material Storage',
                zh: '材料存储'
            },
            description: {
                ru: 'Правила хранения и перемещения ТМЦ',
                en: 'Rules for storage and movement of materials',
                zh: '材料存储和移动规则'
            },
            subchapters: [
                { 
                    id: '2.1', 
                    title: {
                        ru: 'Общие положения по хранению ТМЦ',
                        en: 'General Provisions for Material Storage',
                        zh: '材料存储总则'
                    }
                },
                { 
                    id: '2.2', 
                    title: {
                        ru: 'Коды хранения ТМЦ',
                        en: 'Material Storage Codes',
                        zh: '材料存储代码'
                    }
                },
                { 
                    id: '2.3', 
                    title: {
                        ru: 'Перемещение ТМЦ между складами, перемещение ТМЦ по складу',
                        en: 'Material Movement Between Warehouses, Material Movement Within Warehouse',
                        zh: '仓库间材料移动，仓库内材料移动'
                    }
                },
                { 
                    id: '2.4', 
                    title: {
                        ru: 'Составление Акта о Повреждении ТМЦ',
                        en: 'Preparation of Material Damage Act',
                        zh: '编制材料损坏报告'
                    }
                },
                { 
                    id: '2.5', 
                    title: {
                        ru: 'Перенаправление ТМЦ со склада для выгрузки на территории завода',
                        en: 'Redirecting Materials from Warehouse for Unloading at Plant Territory',
                        zh: '从仓库重定向材料到工厂区域卸货'
                    }
                }
            ]
        },
        {
            id: 'chapter3',
            icon: '🔧',
            title: {
                ru: 'Выдача материала в монтаж',
                en: 'Material Issuance for Installation',
                zh: '安装材料发放'
            },
            description: {
                ru: 'Процедуры выдачи материалов для монтажных работ',
                en: 'Procedures for issuing materials for installation work',
                zh: '安装工作材料发放程序'
            },
            subchapters: [
                { 
                    id: '3.0', 
                    title: {
                        ru: 'Общие сведения',
                        en: 'General Information',
                        zh: '一般信息'
                    }
                },
                { 
                    id: '3.1', 
                    title: {
                        ru: 'Выдача по Заявке на Выдачу целыми ГМ',
                        en: 'Issuance by Request for Complete Cargo Units',
                        zh: '按申请发放完整货物单位'
                    }
                },
                { 
                    id: '3.2', 
                    title: {
                        ru: 'Частичная Выдача',
                        en: 'Partial Issuance',
                        zh: '部分发放'
                    }
                },
                { 
                    id: '3.3', 
                    title: {
                        ru: 'Составление Акта Осмотра',
                        en: 'Preparation of Inspection Act',
                        zh: '编制检查报告'
                    }
                },
                { 
                    id: '3.4', 
                    title: {
                        ru: 'Составление Акта о Повреждении ТМЦ',
                        en: 'Preparation of Material Damage Act',
                        zh: '编制材料损坏报告'
                    }
                }
            ]
        },
        {
            id: 'chapter4',
            icon: '📋',
            title: {
                ru: 'Документация и правила ее оформления',
                en: 'Documentation and Documentation Rules',
                zh: '文件和文件规则'
            },
            description: {
                ru: 'Правила оформления всех видов документов',
                en: 'Rules for processing all types of documents',
                zh: '所有类型文件的处理规则'
            },
            subchapters: [
                { 
                    id: '4.1', 
                    title: {
                        ru: 'Правила оформления ТН',
                        en: 'Transportation Bill (TB) Processing Rules',
                        zh: '运输单（TB）处理规则'
                    }
                },
                { 
                    id: '4.2', 
                    title: {
                        ru: 'Правила Оформления CMR',
                        en: 'CMR Processing Rules',
                        zh: 'CMR处理规则'
                    }
                },
                { 
                    id: '4.3', 
                    title: {
                        ru: 'Правила заполнения Ведомости на перемещение',
                        en: 'Rules for Filling Movement Statement',
                        zh: '移动报表填写规则'
                    }
                },
                { 
                    id: '4.4', 
                    title: {
                        ru: 'Содержание Упаковочного Листа (УЛ)',
                        en: 'Packing List (PL) Contents',
                        zh: '装箱单（PL）内容'
                    }
                },
                { 
                    id: '4.5', 
                    title: {
                        ru: 'Содержание Ведомости Грузового места',
                        en: 'Cargo Unit Statement Contents',
                        zh: '货物单位报表内容'
                    }
                },
                { 
                    id: '4.6', 
                    title: {
                        ru: 'Содержание Shipping Mark',
                        en: 'Shipping Mark Contents',
                        zh: '运输标记内容'
                    }
                },
                { 
                    id: '4.7', 
                    title: {
                        ru: 'Содержание Заявки на Выдачу',
                        en: 'Issuance Request Contents',
                        zh: '发放申请内容'
                    }
                },
                { 
                    id: '4.8', 
                    title: {
                        ru: 'Содержание и Правила заполнения Пропуска на Вывоз',
                        en: 'Export Permit Contents and Filling Rules',
                        zh: '出口许可证内容和填写规则'
                    }
                },
                { 
                    id: '4.9', 
                    title: {
                        ru: 'Содержание и Правила заполнения Инвентаризационного листа',
                        en: 'Inventory List Contents and Filling Rules',
                        zh: '库存清单内容和填写规则'
                    }
                }
            ]
        },
        {
            id: 'chapter5',
            icon: '💬',
            title: {
                ru: 'Информационные группы и полезные ссылки',
                en: 'Information Groups and Useful Links',
                zh: '信息组和有用链接'
            },
            description: {
                ru: 'Правила работы с отделом учета и функционал информационных групп',
                en: 'Rules for working with accounting department and information groups functionality',
                zh: '与会计部门合作的规则和信息组功能'
            },
            subchapters: [
                { 
                    id: '5.0', 
                    title: {
                        ru: 'Правила предоставления информации в отдел учета',
                        en: 'Rules for Providing Information to Accounting Department',
                        zh: '向会计部门提供信息的规则'
                    }
                },
                { 
                    id: '5.1', 
                    title: {
                        ru: 'Детальное описание информационных групп',
                        en: 'Detailed Description of Information Groups',
                        zh: '信息组详细说明'
                    }
                },
                { 
                    id: '5.2', 
                    title: {
                        ru: 'Перечень групп',
                        en: 'List of Groups',
                        zh: '组列表'
                    }
                },
                { 
                    id: '5.3', 
                    title: {
                        ru: 'Полезные ссылки',
                        en: 'Useful Links',
                        zh: '有用链接'
                    }
                }
            ]
        },
        {
            id: 'chapter6',
            icon: '🏢',
            title: {
                ru: 'Общие Хозяйственные Вопросы',
                en: 'General Administrative Matters',
                zh: '一般行政事务'
            },
            description: {
                ru: 'Хозяйственные вопросы и процедуры',
                en: 'Administrative matters and procedures',
                zh: '行政事务和程序'
            },
            subchapters: [
                { 
                    id: '6.1', 
                    title: {
                        ru: 'ЗАЯВКИ НА КАНЦЕЛЯРИЮ И РАСХОДНЫЕ МАТЕРИАЛЫ',
                        en: 'REQUESTS FOR STATIONERY AND CONSUMABLES',
                        zh: '文具和消耗品申请'
                    }
                },
                { 
                    id: '6.2', 
                    title: {
                        ru: 'ВРЕМЯ ТРУДА И ОТДЫХА',
                        en: 'WORKING HOURS AND REST',
                        zh: '工作时间和休息'
                    }
                },
                { 
                    id: '6.3', 
                    title: {
                        ru: 'ОФОРМЛЕНИЕ ОТПУСКА И ОТПУСКА БЕЗ СОХРАНЕНИЯ ЗАРАБОТНОЙ ПЛАТЫ',
                        en: 'VACATION AND UNPAID LEAVE PROCESSING',
                        zh: '假期和无薪假处理'
                    }
                },
                { 
                    id: '6.4', 
                    title: {
                        ru: 'ПЕРЕДАЧА ДОКУМЕНТОВ В УЧЕТ',
                        en: 'DOCUMENT TRANSFER TO ACCOUNTING',
                        zh: '文件转交会计'
                    }
                }
            ]
        }
    ]
};

