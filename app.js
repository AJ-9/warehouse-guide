// Данные справочника СКЛАД
// Структура данных поддерживает как старый формат (строки), так и новый (объекты с переводами)
// Для добавления переводов используйте формат: { ru: '...', en: '...', zh: '...' }
const warehouseData = {
    chapters: [
        {
            id: 'chapter1',
            title: {
                ru: 'Процесс приемки',
                en: 'Receiving Process',
                zh: '接收流程'
            },
            icon: '🚛',
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
            title: {
                ru: 'Хранение материала',
                en: 'Material Storage',
                zh: '材料存储'
            },
            icon: '📦',
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
            title: {
                ru: 'Выдача материала в монтаж',
                en: 'Material Issuance for Installation',
                zh: '安装材料发放'
            },
            icon: '🔧',
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
            id: 'chapter7',
            title: {
                ru: 'Возврат ТМЦ на склад',
                en: 'Material Return to Warehouse',
                zh: '材料退回仓库'
            },
            icon: '↩️',
            description: {
                ru: 'Процедуры возврата материалов на склад',
                en: 'Procedures for returning materials to warehouse',
                zh: '材料退回仓库程序'
            },
            subchapters: [
                { 
                    id: '7.0', 
                    title: {
                        ru: 'Возврат ТМЦ на склад',
                        en: 'Material Return to Warehouse',
                        zh: '材料退回仓库'
                    }
                }
            ]
        },
        {
            id: 'chapter8',
            title: {
                ru: 'Выдача Запорно-Регулирующей Арматуры (ЗРА) для гидроиспытаний',
                en: 'Issuance of Shut-off and Control Valves (ZRA) for Hydrotesting',
                zh: '截止调节阀（ZRA）用于水压试验的发放'
            },
            icon: '🔩',
            description: {
                ru: 'Процедуры выдачи и возврата ЗРА для проведения гидроиспытаний',
                en: 'Procedures for issuance and return of ZRA for hydrotesting',
                zh: '用于进行水压试验的ZRA发放和退回程序'
            },
            subchapters: [
                { 
                    id: '8.1', 
                    title: {
                        ru: 'Проверка ЗРА перед отправкой',
                        en: 'ZRA Verification Before Shipment',
                        zh: '发货前ZRA验证'
                    }
                },
                { 
                    id: '8.2', 
                    title: {
                        ru: 'Отправка ЗРА на гидроиспытания',
                        en: 'Shipment of ZRA for Hydrotesting',
                        zh: 'ZRA发货进行水压试验'
                    }
                },
                { 
                    id: '8.3', 
                    title: {
                        ru: 'Проверка грузомест на соответствие с УЛ после проведения гидроиспытаний',
                        en: 'Verification of Cargo Units for Compliance with PL After Hydrotesting',
                        zh: '水压试验后货物单位与装箱单符合性验证'
                    }
                },
                { 
                    id: '8.4', 
                    title: {
                        ru: 'Приемка ЗРА прошедшего ГИ на складе',
                        en: 'Acceptance of ZRA That Passed Hydrotesting at Warehouse',
                        zh: '仓库接收通过水压试验的ZRA'
                    }
                }
            ]
        },
        {
            id: 'chapter4',
            title: {
                ru: 'Документация и правила ее оформления',
                en: 'Documentation and Documentation Rules',
                zh: '文件和文件规则'
            },
            icon: '📋',
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
            title: {
                ru: 'Информационные группы и полезные ссылки',
                en: 'Information Groups and Useful Links',
                zh: '信息组和有用链接'
            },
            icon: '💬',
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
            title: {
                ru: 'Общие Хозяйственные Вопросы',
                en: 'General Administrative Matters',
                zh: '一般行政事务'
            },
            icon: '🏢',
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
    ],
    content: {
        '1.1': {
            title: {
                ru: 'Заезд ТС на площадку',
                en: 'Vehicle Arrival at Site',
                zh: '车辆到达场地'
            },
            content: {
                ru: `
                <h3>Направление ТС</h3>
                <p>ТС (Транспортные Средства) направляются на соответствующие локации диспетчерами.</p>
                
                <h3>Файл по поступающим ТС</h3>
                <p>Файл находится в общем доступе по ссылке:</p>
                <p><a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank">Открыть диспетчерский файл ТС</a></p>
                
                <h3>Контакты диспетчеров:</h3>
                <ul>
                    <li><a href="tel:+79812348559" style="color: #1e40af; text-decoration: none; font-weight: 500;">+7 (981) 234-85-59</a> Полозова Анастасия</li>
                    <li><a href="tel:+79811493686" style="color: #1e40af; text-decoration: none; font-weight: 500;">+7 (981) 149-36-86</a> Стрюкова Ольга</li>
                    <li><a href="tel:+79817232891" style="color: #1e40af; text-decoration: none; font-weight: 500;">+7 (981) 723-28-91</a> Амелина Ксения</li>
                </ul>
                
                <h3>Запрос дополнительной техники</h3>
                <p>Запрос дополнительной техники для выгрузки/погрузки/работы на складской площадке также осуществляется через диспетчеров.</p>
            `,
                en: `
                <h3>Vehicle Dispatch</h3>
                <p>Vehicles (Transportation Means) are dispatched to appropriate locations by dispatchers.</p>
                
                <h3>Incoming Vehicle File</h3>
                <p>The file is available at the following link:</p>
                <p><a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank">Open Vehicle Dispatcher File</a></p>
                
                <h3>Dispatcher Contacts:</h3>
                <ul>
                    <li><a href="tel:+79812348559" style="color: #1e40af; text-decoration: none; font-weight: 500;">+7 (981) 234-85-59</a> Polozova Anastasia</li>
                    <li><a href="tel:+79811493686" style="color: #1e40af; text-decoration: none; font-weight: 500;">+7 (981) 149-36-86</a> Stryukova Olga</li>
                    <li><a href="tel:+79817232891" style="color: #1e40af; text-decoration: none; font-weight: 500;">+7 (981) 723-28-91</a> Amelina Ksenia</li>
                </ul>
                
                <h3>Additional Equipment Request</h3>
                <p>Requests for additional equipment for unloading/loading/warehouse operations are also processed through dispatchers.</p>
            `,
                zh: `
                <h3>车辆调度</h3>
                <p>车辆（运输工具）由调度员调度至相应地点。</p>
                
                <h3>到货车辆文件</h3>
                <p>文件可通过以下链接访问：</p>
                <p><a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank">打开车辆调度文件</a></p>
                
                <h3>调度员联系方式：</h3>
                <ul>
                    <li><a href="tel:+79812348559" style="color: #1e40af; text-decoration: none; font-weight: 500;">+7 (981) 234-85-59</a> Polozova Anastasia</li>
                    <li><a href="tel:+79811493686" style="color: #1e40af; text-decoration: none; font-weight: 500;">+7 (981) 149-36-86</a> Stryukova Olga</li>
                    <li><a href="tel:+79817232891" style="color: #1e40af; text-decoration: none; font-weight: 500;">+7 (981) 723-28-91</a> Amelina Ksenia</li>
                </ul>
                
                <h3>额外设备申请</h3>
                <p>装卸货或仓库作业所需的额外设备申请也需通过调度员处理。</p>
            `
            }
        },
        '1.2': {
            title: {
                ru: 'Правила предоставления информации в Отдел Учета',
                en: 'Rules for Providing Information to Accounting Department',
                zh: '向会计部门提供信息的规则'
            },
            content: {
                ru: `
                <h3>Требования к информации</h3>
                <p>Информация, предоставляемая в Отдел Учета должна быть:</p>
                <ul>
                    <li>Понятна</li>
                    <li>Хорошо читаема</li>
                    <li>Конкретна</li>
                    <li>Однозначна</li>
                </ul>
                
                <h3>Требования к фотографиям</h3>
                <p>Фотографии необходимо предоставлять в HD качестве, без необходимости переворачивать фото для прочтения информации.</p>
                
                <h3>Важно!</h3>
                <p>Если Вы видите, что Китайские Коллеги нарушают эти требования – необходимо сделать им замечание с просьбой предоставлять информацию в соответствии с нашими требованиями.</p>
                
                <p>Использование нестандартных символов, замена букв на цифры и подобные манипуляции ведут к ошибкам в работе с 1С, искажению информации и увеличению трудозатрат ваших Коллег.</p>
                
                <h3 style="color: #dc2626; font-weight: bold;">Неверно:</h3>
                <div class="image-container">
                    <img src="images/1.2-1.png" alt="Пример неверного оформления - размытые коды" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <img src="images/1.2-2.png" alt="Пример неверного оформления - накладная на перемещение" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <img src="images/1.2-3.png" alt="Пример неверного оформления - составное изображение" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Примеры неверного оформления</em></p>
                </div>
            `,
                en: `
                <h3>Information Requirements</h3>
                <p>Information provided to the Accounting Department must be:</p>
                <ul>
                    <li>Clear</li>
                    <li>Readable</li>
                    <li>Specific</li>
                    <li>Unambiguous</li>
                </ul>
                
                <h3>Photography Requirements</h3>
                <p>Photographs must be provided in HD quality, without the need to rotate images to read information.</p>
                
                <h3>Important!</h3>
                <p>If you observe that Chinese colleagues violate these requirements, it is necessary to make a remark requesting them to provide information in accordance with our requirements.</p>
                
                <p>Use of non-standard characters, replacement of letters with numbers, and similar manipulations lead to errors in 1C system operations, information distortion, and increased workload for your colleagues.</p>
                
                <h3 style="color: #dc2626; font-weight: bold;">Incorrect:</h3>
                <div class="image-container">
                    <img src="images/1.2-1.png" alt="Example of incorrect formatting - blurred codes" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <img src="images/1.2-2.png" alt="Example of incorrect formatting - movement invoice" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <img src="images/1.2-3.png" alt="Example of incorrect formatting - composite image" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Examples of incorrect formatting</em></p>
                </div>
            `,
                zh: `
                <h3>信息要求</h3>
                <p>提供给会计部门的信息必须：</p>
                <ul>
                    <li>清晰</li>
                    <li>可读</li>
                    <li>具体</li>
                    <li>明确</li>
                </ul>
                
                <h3>照片要求</h3>
                <p>照片必须为高清质量，无需旋转即可读取信息。</p>
                
                <h3>重要！</h3>
                <p>如发现中国同事违反这些要求，需提醒并要求其按照我们的要求提供信息。</p>
                
                <p>使用非标准字符、将字母替换为数字等操作会导致1C系统操作错误、信息失真，并增加同事的工作量。</p>
                
                <h3 style="color: #dc2626; font-weight: bold;">错误示例：</h3>
                <div class="image-container">
                    <img src="images/1.2-1.png" alt="错误格式示例 - 模糊代码" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <img src="images/1.2-2.png" alt="错误格式示例 - 移动发票" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <img src="images/1.2-3.png" alt="错误格式示例 - 合成图像" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>错误格式示例</em></p>
                </div>
            `
            }
        },
        '1.3': {
            title: {
                ru: 'Проверка Документов перед выгрузкой',
                en: 'Document Verification Before Unloading',
                zh: '卸货前文件检查'
            },
            content: {
                ru: `
                <h3>Проверка документов</h3>
                <p>Если поставщик материала присутствует в списке на проверку документов, то перед выгрузкой ТС необходимо предоставить фото лицевой страницы ТН в информационную группу в мессенджере MAX <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank">«Документы на проверку»</a>.</p>
                
                <h3>Список поставщиков</h3>
                <p>Список публикуется в группе <a href="https://max.ru/join/HGORdXUfqF6zy0x8xnqCRdY8znVtij5bchtc4hK3AaU" target="_blank">«Информация. Читай меня»</a>. Актуальную версию списка искать в группе.</p>
                
                <h3>Комплект документов</h3>
                <p>Комплект документов должен состоять из:</p>
                <ul>
                    <li>ТН/CMR</li>
                    <li>УЛ (Упаковочный Лист)</li>
                </ul>
                
                <p>Допускается приемка ТС по одной ТН без УЛ, если Уникальные идентификаторы грузового места прописаны в ТН.</p>
                
                <h3>Важно!</h3>
                <p>Кладовщик НЕ подписывает и НЕ ставит печати на листы простоя, путевые листы, акты или иные документы по запросу водителей при приемке материалов, если иные распоряжения не поступали от руководства.</p>
                
                <p style="color: red; font-weight: bold;">Кладовщик НЕ принимает от водителей документы качества и техническую документацию!</p>
                
                <h3>Пример публикации в группу:</h3>
                <div class="image-container">
                    <img src="images/1.3.png" alt="Пример публикации в группу" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
            `,
                en: `
                <h3>Document Verification</h3>
                <p>If the material supplier is present in the document verification list, before unloading the vehicle, it is necessary to provide a photo of the front page of the Transportation Bill (TB) to the information group in MAX messenger <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank">"Documents for Verification"</a>.</p>
                
                <h3>Supplier List</h3>
                <p>The list is published in the group <a href="https://max.ru/join/HGORdXUfqF6zy0x8xnqCRdY8znVtij5bchtc4hK3AaU" target="_blank">"Information. Read Me"</a>. Search for the current version of the list in the group.</p>
                
                <h3>Document Set</h3>
                <p>The document set must consist of:</p>
                <ul>
                    <li>TB/CMR</li>
                    <li>PL (Packing List)</li>
                </ul>
                
                <p>Acceptance of vehicles with a single TB without PL is allowed if unique cargo unit identifiers are specified in the TB.</p>
                
                <h3>Important!</h3>
                <p>The warehouse keeper does NOT sign and does NOT stamp downtime sheets, waybills, acts, or other documents at the request of drivers during material acceptance, unless other instructions have been received from management.</p>
                
                <p style="color: red; font-weight: bold;">The warehouse keeper does NOT accept quality documents and technical documentation from drivers!</p>
                
                <h3>Example of posting to group:</h3>
                <div class="image-container">
                    <img src="images/1.3.png" alt="Example of posting to group" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
            `,
                zh: `
                <h3>文件检查</h3>
                <p>如果材料供应商在文件检查列表中，卸货前需将运输单（TB）首页照片发送至MAX信息群组 <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank">"待检查文件"</a>。</p>
                
                <h3>供应商列表</h3>
                <p>列表发布在群组 <a href="https://max.ru/join/HGORdXUfqF6zy0x8xnqCRdY8znVtij5bchtc4hK3AaU" target="_blank">"信息。请阅读"</a> 中。请在群组中查找最新版本。</p>
                
                <h3>文件套件</h3>
                <p>文件套件必须包括：</p>
                <ul>
                    <li>TB/CMR</li>
                    <li>PL（装箱单）</li>
                </ul>
                
                <p>如果运输单中已注明货物单位的唯一标识符，允许仅凭运输单（无装箱单）接收车辆。</p>
                
                <h3>重要！</h3>
                <p>除非收到管理层其他指示，仓库管理员不得应司机要求在材料验收时签署或盖章待机单、路单、报告或其他文件。</p>
                
                <p style="color: red; font-weight: bold;">仓库管理员不接受司机提供的质量文件和 technical documentation！</p>
                
                <h3>群组发布示例：</h3>
                <div class="image-container">
                    <img src="images/1.3.png" alt="群组发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
            `
            }
        },
        '1.4': {
            title: {
                ru: 'Начало выгрузки',
                en: 'Start of Unloading',
                zh: '开始卸货'
            },
            content: {
                ru: `
                <h3>Порядок выгрузки</h3>
                <p>Если ТН скидываются в группу <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank">«Документы на проверку»</a>, то необходимо дождаться подтверждения от Отдела Учета о возможности выгрузить данное ТС.</p>
                
                <p>Если информация о поставке не занесена в 1С, либо есть другие препятствия к выгрузке, то выгрузка не производится до уведомления Отдела Учета о том, что можно выгружать ТС.</p>
                
                <h3>Беспрепятственная выгрузка</h3>
                <p>Если ТН НЕ НУЖНО скидывать в группу <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank">«Документы на проверку»</a>, то есть поставщик не присутствует в списке на проверку документов, то ТС выгружается беспрепятственно в порядке очереди.</p>
                
                <p>Очередность выгрузки можно посмотреть в <a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank">диспетчерском файле по поступающим ТС</a>.</p>
                
                <h3>Осмотр ТМЦ</h3>
                <p>После заезда ТС на площадку необходимо осмотреть ТМЦ на предмет повреждений и соответствия сопроводительной документации.</p>
            `,
                en: `
                <h3>Unloading Procedure</h3>
                <p>If Transportation Bills (TB) are sent to the group <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank">"Documents for Verification"</a>, it is necessary to wait for confirmation from the Accounting Department regarding the possibility of unloading this vehicle.</p>
                
                <p>If information about the delivery is not entered into 1C, or there are other obstacles to unloading, unloading is not performed until the Accounting Department notifies that the vehicle can be unloaded.</p>
                
                <h3>Unrestricted Unloading</h3>
                <p>If it is NOT necessary to send TB to the group <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank">"Documents for Verification"</a>, i.e., the supplier is not present in the document verification list, then the vehicle is unloaded without restrictions in queue order.</p>
                
                <p>Unloading queue can be viewed in the <a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank">dispatcher file for incoming vehicles</a>.</p>
                
                <h3>Material Inspection</h3>
                <p>After the vehicle arrives at the site, it is necessary to inspect the materials for damage and compliance with accompanying documentation.</p>
            `,
                zh: `
                <h3>卸货程序</h3>
                <p>如运输单（TB）已发送至群组 <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank">"待检查文件"</a>，需等待会计部门确认是否可以卸货。</p>
                
                <p>如交货信息未录入1C系统，或存在其他卸货障碍，在会计部门通知可以卸货之前不得进行卸货。</p>
                
                <h3>无障碍卸货</h3>
                <p>如无需将运输单发送至群组 <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank">"待检查文件"</a>（即供应商不在文件检查列表中），车辆可按队列顺序无障碍卸货。</p>
                
                <p>卸货顺序可在 <a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank">到货车辆调度文件</a> 中查看。</p>
                
                <h3>材料检查</h3>
                <p>车辆到达场地后，需检查材料是否有损坏，并核对是否与随附文件一致。</p>
            `
            }
        },
        '1.5': {
            title: {
                ru: 'Работа с Несоответствиями при Приемке ТМЦ',
                en: 'Handling Discrepancies During Material Acceptance',
                zh: '材料验收时处理不符项'
            },
            content: {
                ru: `
                <h3>Виды несоответствий</h3>
                <ol>
                    <li>Повреждения упаковки и самих ТМЦ</li>
                    <li>Недостачи</li>
                    <li>Излишки</li>
                    <li>Пересорт</li>
                    <li>Отсутствие маркировки (УЛ, заводская маркировка и т.д.)</li>
                </ol>
                
                <h3>Действия при обнаружении несоответствий</h3>
                <p>При обнаружении несоответствий после заезда ТС на площадку, необходимо:</p>
                <ol>
                    <li>Зафиксировать эти несоответствия на фото</li>
                    <li>С подробным описанием скинуть данные в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank">«М-7 / Акты о повреждениях»</a></li>
                </ol>
                
                <p>Отдел Учета подготовит Акт М7 и направит его в адрес поставщика.</p>
                
                <h3>Важно!</h3>
                <p>Повреждения ТМЦ необходимо зафиксировать на фото НА ТС ДО ВЫГРУЗКИ (если заметить повреждения на этом этапе представляется возможным).</p>
            `,
                en: `
                <h3>Types of Discrepancies</h3>
                <ol>
                    <li>Packaging and material damage</li>
                    <li>Shortages</li>
                    <li>Surpluses</li>
                    <li>Mis-sorted items</li>
                    <li>Missing labeling (PL, factory marking, etc.)</li>
                </ol>
                
                <h3>Actions When Discrepancies Are Detected</h3>
                <p>When discrepancies are detected after the vehicle arrives at the site, it is necessary to:</p>
                <ol>
                    <li>Document these discrepancies with photographs</li>
                    <li>Send data with detailed description to the group <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank">"M-7 / Damage Acts"</a></li>
                </ol>
                
                <p>The Accounting Department will prepare Act M7 and send it to the supplier.</p>
                
                <h3>Important!</h3>
                <p>Material damage must be documented with photographs ON THE VEHICLE BEFORE UNLOADING (if it is possible to notice damage at this stage).</p>
            `,
                zh: `
                <h3>不符项类型</h3>
                <ol>
                    <li>包装和材料损坏</li>
                    <li>短缺</li>
                    <li>多余</li>
                    <li>错配</li>
                    <li>缺少标记（装箱单、工厂标记等）</li>
                </ol>
                
                <h3>发现不符项时的处理</h3>
                <p>车辆到达场地后发现不符项时，需：</p>
                <ol>
                    <li>拍照记录不符项</li>
                    <li>将详细说明的数据发送至群组 <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank">"M-7 / 损坏报告"</a></li>
                </ol>
                
                <p>会计部门将编制M7报告并发送给供应商。</p>
                
                <h3>重要！</h3>
                <p>材料损坏必须在卸货前在车辆上拍照记录（如在此阶段能够发现损坏）。</p>
            `
            }
        },
        '1.6': {
            title: {
                ru: 'Составление Акта М7',
                en: 'Preparation of Act M7',
                zh: '编制M7报告'
            },
            content: {
                ru: `
                <h3>Когда составляется Акт М-7</h3>
                <p>Акт М-7 составляется при наличии несоответствий:</p>
                <ol>
                    <li>Повреждения упаковки и самих ТМЦ</li>
                    <li>Недостачи</li>
                    <li>Излишки</li>
                    <li>Пересорт</li>
                    <li>Отсутствие маркировки (УЛ, заводская маркировка и т.д.)</li>
                </ol>
                
                <h3>Требования к информации</h3>
                <p>При подаче информации в Отдел Учета кладовщик должен убедиться в полноте, понятности, читаемости, конкретности и однозначности предоставляемой информации.</p>
                
                <h3>Формат предоставления информации</h3>
                <p>Для составления Акта М-7 кладовщик обязан предоставить фото и информацию в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank">«М-7 / Акты о повреждениях»</a> в формате:</p>
                <ol>
                    <li>Фото лицевой страницы ТН, где видны номер ТН, ФИО водителя</li>
                    <li>Фото тягача ТС с читаемым гос номером</li>
                    <li>Фото несоответствия</li>
                    <li>Текстом прописан номер ТН, дата и время начала и окончания выгрузки</li>
                    <li>Текстом подробно описано несоответствие</li>
                </ol>
                
                <ul>
                    <li>Если недостача – в каком количестве и какие номера ГМ недостает</li>
                    <li>Если излишек – какое конкретное ГМ лишнее</li>
                    <li>Если повреждение – какое повреждение какого ГМ и т.д.</li>
                </ul>
                
                <h3>Пример ниже:</h3>
                <div class="image-container">
                    <img src="images/1.6.png" alt="Пример составления Акта М7" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример составления Акта М7</em></p>
                </div>
            `,
                en: `
                <h3>When Act M-7 is Prepared</h3>
                <p>Act M-7 is prepared when there are discrepancies:</p>
                <ol>
                    <li>Packaging and material damage</li>
                    <li>Shortages</li>
                    <li>Surpluses</li>
                    <li>Mis-sorted items</li>
                    <li>Missing labeling (PL, factory marking, etc.)</li>
                </ol>
                
                <h3>Information Requirements</h3>
                <p>When submitting information to the Accounting Department, the warehouse keeper must ensure the completeness, clarity, readability, specificity, and unambiguity of the provided information.</p>
                
                <h3>Information Submission Format</h3>
                <p>To prepare Act M-7, the warehouse keeper must provide photos and information to the group <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank">"M-7 / Damage Acts"</a> in the following format:</p>
                <ol>
                    <li>Photo of the front page of the TB showing the TB number and driver's full name</li>
                    <li>Photo of the vehicle tractor with a readable license plate</li>
                    <li>Photo of the discrepancy</li>
                    <li>Text stating the TB number, date and time of start and end of unloading</li>
                    <li>Text with detailed description of the discrepancy</li>
                </ol>
                
                <ul>
                    <li>If shortage – in what quantity and which GM numbers are missing</li>
                    <li>If surplus – which specific GM is extra</li>
                    <li>If damage – what damage to which GM, etc.</li>
                </ul>
                
                <h3>Example below:</h3>
                <div class="image-container">
                    <img src="images/1.6.png" alt="Example of Act M7 Preparation" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Act M7 Preparation</em></p>
                </div>
            `,
                zh: `
                <h3>何时编制M-7报告</h3>
                <p>出现以下不符项时需编制M-7报告：</p>
                <ol>
                    <li>包装和材料损坏</li>
                    <li>短缺</li>
                    <li>多余</li>
                    <li>错配</li>
                    <li>缺少标记（装箱单、工厂标记等）</li>
                </ol>
                
                <h3>信息要求</h3>
                <p>向会计部门提交信息时，仓库管理员需确保信息完整、清晰、可读、具体且明确。</p>
                
                <h3>信息提交格式</h3>
                <p>为编制M-7报告，仓库管理员需按以下格式向群组 <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank">"M-7 / 损坏报告"</a> 提供照片和信息：</p>
                <ol>
                    <li>运输单首页照片，显示运输单号和司机姓名</li>
                    <li>车辆牵引车照片，车牌清晰可见</li>
                    <li>不符项照片</li>
                    <li>文字说明运输单号、卸货开始和结束的日期和时间</li>
                    <li>文字详细描述不符项</li>
                </ol>
                
                <ul>
                    <li>如为短缺 – 说明短缺数量和缺失的GM编号</li>
                    <li>如为多余 – 说明具体多余的GM</li>
                    <li>如为损坏 – 说明哪个GM的何种损坏等</li>
                </ul>
                
                <h3>示例如下：</h3>
                <div class="image-container">
                    <img src="images/1.6.png" alt="M7报告编制示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>M7报告编制示例</em></p>
                </div>
            `
            }
        },
        '1.7': {
            title: {
                ru: 'Выгрузка ТС',
                en: 'Vehicle Unloading',
                zh: '车辆卸货'
            },
            content: {
                ru: `
                <h3>Заказ техники</h3>
                <p>Техника для выгрузки ТС на складской площадке заказывается диспетчерами вечером предыдущего дня.</p>
                <p>Если необходимо увеличить количество техники - обращаться к диспетчерам.</p>
                <p>Актуальную информацию о технике можно посмотреть в <a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank">диспетчерском файле</a>.</p>
                
                <h3>Место выгрузки</h3>
                <p>Место для выгрузки определяется кладовщиком самостоятельно, если другое не определено руководством.</p>
                <p>Место выгрузки также определяется кодом хранения материала.</p>
                
                <h3>Коды хранения</h3>
                <p>Информация по кодам хранения присутствует в Упаковочном Листе и в Ведомости Грузового Места:</p>
                <ul>
                    <li><strong>Х</strong> - для хранения на открытой площадке, не под навесом</li>
                    <li><strong>ХХ</strong> - для хранения на открытой мощеной площадке, под навесом</li>
                    <li><strong>ХХХ</strong> - для хранения в закрытом, сухом, неотапливаемом помещении</li>
                    <li><strong>ХХХХ</strong> - для хранения в закрытом, сухом, отапливаемом / охлаждаемом помещении</li>
                    <li><strong>ХХХХХ</strong> - для перевозки на отапливаемых транспортных средствах</li>
                </ul>
                
                <h3>Правила выгрузки</h3>
                <ul>
                    <li>Выгрузка ХХ осуществляется с последующим укрытием тентами по умолчанию, если не поступало иных распоряжений</li>
                    <li>Выгрузка ХХХ при наличии места в крытых складах или контейнерах СТРОГО ЗАПРЕЩЕНА без согласования Руководителя склада либо его Заместителя</li>
                    <li>Выгрузка ХХХХ при наличии места в крытых отапливаемых складах СТРОГО ЗАПРЕЩЕНА без согласования Руководителя склада либо его Заместителя</li>
                </ul>
                
                <h3>Повреждения при ПРР</h3>
                <p>Если в ходе выгрузки груз был поврежден при ПРР, то в этом случае необходимо составить <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Акт о Повреждении ТМЦ</a>.</p>
            `,
                en: `
                <h3>Equipment Order</h3>
                <p>Equipment for unloading vehicles at the warehouse site is ordered by dispatchers in the evening of the previous day.</p>
                <p>If it is necessary to increase the amount of equipment - contact the dispatchers.</p>
                <p>Current information about equipment can be viewed in the <a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank">dispatcher file</a>.</p>
                
                <h3>Unloading Location</h3>
                <p>The unloading location is determined by the warehouse keeper independently, unless otherwise specified by management.</p>
                <p>The unloading location is also determined by the material storage code.</p>
                
                <h3>Storage Codes</h3>
                <p>Information on storage codes is present in the Packing List and in the Cargo Unit Statement:</p>
                <ul>
                    <li><strong>X</strong> - for storage on an open area, not under a canopy</li>
                    <li><strong>XX</strong> - for storage on an open paved area, under a canopy</li>
                    <li><strong>XXX</strong> - for storage in a closed, dry, unheated room</li>
                    <li><strong>XXXX</strong> - for storage in a closed, dry, heated / cooled room</li>
                    <li><strong>XXXXX</strong> - for transportation on heated vehicles</li>
                </ul>
                
                <h3>Unloading Rules</h3>
                <ul>
                    <li>Unloading XX is carried out with subsequent covering with tarps by default, unless other instructions are received</li>
                    <li>Unloading XXX when space is available in covered warehouses or containers is STRICTLY PROHIBITED without coordination with the Warehouse Manager or Deputy Manager</li>
                    <li>Unloading XXXX when space is available in covered heated warehouses is STRICTLY PROHIBITED without coordination with the Warehouse Manager or Deputy Manager</li>
                </ul>
                
                <h3>Damage During Cargo Handling</h3>
                <p>If cargo was damaged during unloading in the course of cargo handling operations, it is necessary to prepare an Act of Material Damage.</p>
            `,
                zh: `
                <h3>设备订购</h3>
                <p>仓库场地卸货设备由调度员在前一天晚上订购。</p>
                <p>如需增加设备数量，请联系调度员。</p>
                <p>设备最新信息可在 <a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank">调度文件</a> 中查看。</p>
                
                <h3>卸货地点</h3>
                <p>卸货地点由仓库管理员自行确定，除非管理层另有规定。</p>
                <p>卸货地点也由材料存储代码决定。</p>
                
                <h3>存储代码</h3>
                <p>存储代码信息见装箱单和货物单位清单：</p>
                <ul>
                    <li><strong>X</strong> - 露天存放，无遮阳棚</li>
                    <li><strong>XX</strong> - 露天铺装场地存放，有遮阳棚</li>
                    <li><strong>XXX</strong> - 封闭、干燥、无供暖房间存放</li>
                    <li><strong>XXXX</strong> - 封闭、干燥、有供暖/制冷房间存放</li>
                    <li><strong>XXXXX</strong> - 在供暖车辆上运输</li>
                </ul>
                
                <h3>卸货规则</h3>
                <ul>
                    <li>XX类货物卸货后默认需用篷布覆盖，除非收到其他指示</li>
                    <li>如有封闭仓库或集装箱空间，XXX类货物卸货前必须与仓库经理或副经理协调，否则严格禁止</li>
                    <li>如有封闭供暖仓库空间，XXXX类货物卸货前必须与仓库经理或副经理协调，否则严格禁止</li>
                </ul>
                
                <h3>装卸作业中的损坏</h3>
                <p>如卸货过程中货物在装卸作业中受损，需编制材料损坏报告。</p>
            `
            }
        },
        '1.8': {
            title: {
                ru: 'Составление Акта о Повреждении ТМЦ',
                en: 'Preparation of Act of Material Damage',
                zh: '编制材料损坏报告'
            },
            content: {
                ru: `
                <p>Информацию о Повреждении ТМЦ при ПРР необходимо направлять в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">М-7 / Акты о повреждениях</a> в формате:</p>
                
                <ol>
                    <li>Фото повреждения</li>
                    <li>Фото пропуска стропальщиков/оператора погрузчика, которые производил ПРР</li>
                    <li>Фото ТН, по которой пришел груз и фото ТС</li>
                    <li>Описание как именно произошло повреждение ТМЦ</li>
                    <li>Описание ТМЦ – номер ГМ, УЛ, количество поврежденного ТМЦ</li>
                </ol>
                
                <h3>Обработка акта</h3>
                <p>На основании вышеизложенных данных Отдел Учета подготавливает <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Акт о Повреждении ТМЦ</a> и направляет полевому сотруднику на подпись.</p>
            `,
                en: `
                <p>Information about Material Damage during Cargo Handling Operations must be sent to the group <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">M-7 / Damage Acts</a> in the following format:</p>
                
                <ol>
                    <li>Photo of the damage</li>
                    <li>Photo of the pass of the riggers/forklift operator who performed the cargo handling operations</li>
                    <li>Photo of the TB for which the cargo arrived and photo of the vehicle</li>
                    <li>Description of exactly how the material damage occurred</li>
                    <li>Description of the materials – GM number, PL, quantity of damaged materials</li>
                </ol>
                
                <h3>Act Processing</h3>
                <p>Based on the above data, the Accounting Department prepares the Act of Material Damage and sends it to the field employee for signature.</p>
            `,
                zh: `
                <p>装卸作业中材料损坏信息需按以下格式发送至群组 <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">M-7 / 损坏报告</a>：</p>
                
                <ol>
                    <li>损坏照片</li>
                    <li>进行装卸作业的索具工/叉车操作员的通行证照片</li>
                    <li>货物对应的运输单照片和车辆照片</li>
                    <li>材料损坏发生过程的详细描述</li>
                    <li>材料描述 – GM编号、装箱单、损坏材料数量</li>
                </ol>
                
                <h3>报告处理</h3>
                <p>根据上述数据，会计部门编制材料损坏报告并发送给现场员工签字。</p>
            `
            }
        },
        '1.9': {
            title: {
                ru: 'Предоставление информации о выгруженном ТС в Отдел Учета',
                en: 'Providing Information on Unloaded Vehicle to Accounting Department',
                zh: '向会计部门提供卸货车辆信息'
            },
            content: {
                ru: `
                <h3>Своевременность предоставления информации</h3>
                <p>По окончании выгрузки ТС, необходимо направить информацию в Отдел Учета.</p>
                
                <p>Отдел Учета работает в потоковом режиме, и делает проводки в момент поступления информации в группах. Все ТН должны быть оприходованы в 1С до конца рабочего дня. В связи с этим, информацию необходимо отправлять сразу по окончании выгрузки и не копить ТН, чтобы обеспечить непрерывный и равномерный процесс учета материалов в течении рабочего дня.</p>
                
                <h3>Требования к информации</h3>
                <p>При подаче информации в Отдел Учета кладовщик должен убедиться в полноте, понятности, читаемости, конкретности и однозначности предоставляемой информации.</p>
                
                <h3>Формат предоставления информации</h3>
                <p>Информация о выгруженном ТС должна предоставляться в формате:</p>
                <ol>
                    <li>Фото лицевой страницы ТН</li>
                    <li>Фото выгруженного груза на лоте хранения</li>
                    <li>Фото упаковочных листов, либо ведомостей грузовых мест, размещенных на ТМЦ. Если этого нет (в случае, например, с трубной продукцией) то предоставляется фото заводской маркировки</li>
                    <li>Текстом прописывается номер ТН, количество ГМ и номера этих ГМ, если на лицевой странице ТН и УЛ эта информация отсутствует</li>
                    <li>Текстом прописывается склад, на котором была произведена выгрузка и лот хранения</li>
                    <li>В случае если составлен М-7 дописать «Акт М-7»</li>
                </ol>
                
                <h3>Пример ниже:</h3>
                <div class="image-container">
                    <img src="images/1.9.png" alt="Пример предоставления информации" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример предоставления информации</em></p>
                </div>
                
                <p><strong>На этом процесс приемки закончен.</strong></p>
            `,
                en: `
                <h3>Timeliness of Information Provision</h3>
                <p>Upon completion of vehicle unloading, it is necessary to send information to the Accounting Department.</p>
                
                <p>The Accounting Department works in a flow mode and makes entries at the moment information is received in groups. All TBs must be posted in 1C by the end of the working day. In this regard, information must be sent immediately upon completion of unloading and TBs should not be accumulated to ensure a continuous and uniform process of material accounting during the working day.</p>
                
                <h3>Information Requirements</h3>
                <p>When submitting information to the Accounting Department, the warehouse keeper must ensure the completeness, clarity, readability, specificity, and unambiguity of the provided information.</p>
                
                <h3>Information Submission Format</h3>
                <p>Information about the unloaded vehicle must be provided in the following format:</p>
                <ol>
                    <li>Photo of the front page of the TB</li>
                    <li>Photo of the unloaded cargo on the storage lot</li>
                    <li>Photo of packing lists or cargo unit statements placed on the materials. If this is not available (for example, in the case of pipe products), a photo of the factory marking is provided</li>
                    <li>Text stating the TB number, quantity of GMs and numbers of these GMs, if this information is missing on the front page of the TB and PL</li>
                    <li>Text stating the warehouse where unloading was performed and the storage lot</li>
                    <li>If M-7 is prepared, add "Act M-7"</li>
                </ol>
                
                <h3>Example below:</h3>
                <div class="image-container">
                    <img src="images/1.9.png" alt="Example of Information Provision" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Information Provision</em></p>
                </div>
                
                <p><strong>The acceptance process is complete.</strong></p>
            `,
                zh: `
                <h3>信息提供的及时性</h3>
                <p>车辆卸货完成后，需向会计部门发送信息。</p>
                
                <p>会计部门以流程模式工作，在群组收到信息时立即进行记账。所有运输单必须在工作日内录入1C系统。因此，信息需在卸货完成后立即发送，不得积压运输单，以确保工作日内材料核算的连续性和均匀性。</p>
                
                <h3>信息要求</h3>
                <p>向会计部门提交信息时，仓库管理员需确保信息完整、清晰、可读、具体且明确。</p>
                
                <h3>信息提交格式</h3>
                <p>卸货车辆信息需按以下格式提供：</p>
                <ol>
                    <li>运输单首页照片</li>
                    <li>存储场地上的卸货货物照片</li>
                    <li>材料上的装箱单或货物单位清单照片。如无此信息（例如管材产品），则提供工厂标记照片</li>
                    <li>如运输单首页和装箱单缺少信息，需文字说明运输单号、GM数量和编号</li>
                    <li>文字说明进行卸货的仓库和存储场地</li>
                    <li>如已编制M-7，需补充"报告M-7"</li>
                </ol>
                
                <h3>示例如下：</h3>
                <div class="image-container">
                    <img src="images/1.9.png" alt="信息提供示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>信息提供示例</em></p>
                </div>
                
                <p><strong>验收流程至此结束。</strong></p>
            `
            }
        },
        // Глава 2: Хранение материала
        '2.1': {
            title: {
                ru: 'Общие положения по хранению ТМЦ',
                en: 'General Provisions for Material Storage',
                zh: '材料存储总则'
            },
            content: {
                ru: `
                <h3>Пропускной контроль и безопасность</h3>
                <p>Склад является закрытой территорией с пропускным контролем. Нахождение посторонних лиц на складе строго запрещено. Если замечены посторонние, либо сотрудники компании СС7 или других строительных организаций, не занятые в работе, кладовщик обязан сопроводить их до выхода со склада.</p>
                
                <h3>Фото-видеосъемка и осмотр материалов</h3>
                <p>Какие-либо запросы на фото-видеосъемку, «посмотреть материал» должны быть согласованы с руководством. Без согласования руководства данных сотрудников на склад пускать запрещено. При наличии согласования от руководства кладовщик должен сопровождать сотрудника по территории склада, если иное не подтверждено руководством.</p>
                
                <h3>Порядок на территории</h3>
                <p>Лица, замеченные в употреблении пищи, бесцельном хождении и времяпрепровождении на территории склада должны быть с него удалены.</p>
                
                <p>Кладовщик является ответственным за порядок лицом на площадке хранения. Наличие постороннего мусора, раскиданного бруса, обрешетки является недопустимым. Кладовщик обязан организовывать периодические уборки территории с помощью разнорабочих. Мусор убирается в пухто. По мере наполнения пухто кладовщик должен заказать замену пухто через диспетчеров.</p>
                
                <p>Ежедневно утром в группу <a href="https://max.ru/join/LKsu74vfEKoJCa5SdggIfbG0-OAUj_Xy_TSxqcS2Q00" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Оперуполномоченные</a> должен предоставляться общий список разнорабочих, задействованных в работе, выделенным для этого полевым сотрудником.</p>
                
                <h3>Выгрузка ОДЦИ и КТГ</h3>
                <p>ОДЦИ (Оборудование Длительного Цикла Изготовления) и КТГ (Крупногабаритные и тяжеловесные грузы) выгружаются на плиты, при отсутствии места на плитах необходимо получить согласование руководства на выгрузку ОДЦИ и КТГ на щебень.</p>
                
                <h3>Хранение в ангарных складах</h3>
                <p>Хранение материалов на ангарных складах должно осуществляться с учетом их массогабаритных характеристик и кода хранения. Теплый ангар – ХХХХ. Холодный ангар – ХХХ.</p>
                
                <h3>Стеллажные склады</h3>
                <p>Если массогабаритные характеристики позволяют, ТМЦ необходимо располагать на стеллажных складах. Максимальная разрешенная масса на одну ячейку хранения стеллажного склада – 3 000 кг. Габариты для размещения на стеллаж должны вписываться в габариты ячейки хранения с запасом, необходимым для безопасной работы. Если ТМЦ располагаются не на стандартных европаллетах, то их необходимо предварительно запаллетить и закрепить на паллете стяжными лентами.</p>
                
                <h3>Доступ к ТМЦ и маркировка</h3>
                <p>Для доступа к ТМЦ (при проведении ВК и поиске ТМЦ), складирование материалов на площадках и крытых бесстелажных ангарах необходимо производить с отступом не менее 60 см друг от друга. Для упрощения поиска ТМЦ, маркировка на материале должна быть в доступе, желательно располагать ТМЦ маркировкой к проходу.</p>
                
                <p>Если на складской площадке замечен материал без маркировки, ее следует запросить через группу <a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Потеряшки»</a>, распечатать и промаркировать материал. Допустимо промаркировать материал маркером – написать номер ГМ и УЛ.</p>
                
                <h3>Индекс штабелирования</h3>
                <p>Индекс штабелирования – индекс, определяющий во сколько ярусов можно штабелировать груз. Если указаны кг, то это количество кг, которые допустимо поставить на ГМ сверху. Если указана цифра (0, 1, 2), то это количество ГМ с таким же весом, которые допустимо поставить на ГМ сверху. При индексе штабелирования 0 ставить что-либо на ГМ сверху запрещено, если другое не исходит от руководства.</p>
                
                <h3>Парко-хозяйственный день</h3>
                <p>Каждое Воскресенье на площадке является ПХД (Парко-хозяйственный день), целью которого является уборка площадок от мусора и устранение замечаний по площадкам.</p>
            `,
                en: `
                <h3>Access Control and Security</h3>
                <p>The warehouse is a closed area with access control. The presence of unauthorized persons at the warehouse is strictly prohibited. If unauthorized persons are noticed, or employees of SS7 company or other construction organizations who are not engaged in work, the warehouse keeper must escort them to the warehouse exit.</p>
                
                <h3>Photo-Video Shooting and Material Inspection</h3>
                <p>Any requests for photo-video shooting, "viewing materials" must be coordinated with management. Without management approval, such employees are prohibited from entering the warehouse. If there is approval from management, the warehouse keeper must accompany the employee on the warehouse territory, unless otherwise confirmed by management.</p>
                
                <h3>Territory Order</h3>
                <p>Persons noticed eating, aimlessly walking, and spending time on the warehouse territory must be removed from it.</p>
                
                <p>The warehouse keeper is the person responsible for order at the storage site. The presence of foreign debris, scattered timber, and crating is unacceptable. The warehouse keeper must organize periodic cleaning of the territory with the help of laborers. Debris is removed to a dumpster. As the dumpster fills up, the warehouse keeper must order a dumpster replacement through dispatchers.</p>
                
                <p>Every morning, a general list of laborers engaged in work must be provided to the group <a href="https://max.ru/join/LKsu74vfEKoJCa5SdggIfbG0-OAUj_Xy_TSxqcS2Q00" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Operational Officers</a> by the field employee assigned for this purpose.</p>
                
                <h3>Unloading of LMC Equipment and OOG Cargo</h3>
                <p>LMC Equipment (Long Manufacturing Cycle Equipment) and OOG Cargo (Out-of-Gauge and Heavy Cargo) are unloaded on slabs; if there is no space on slabs, it is necessary to obtain management approval for unloading LMC Equipment and OOG Cargo on crushed stone.</p>
                
                <h3>Storage in Hangar Warehouses</h3>
                <p>Storage of materials in hangar warehouses must be carried out taking into account their weight and dimensional characteristics and storage code. Warm hangar – XXXX. Cold hangar – XXX.</p>
                
                <h3>Rack Warehouses</h3>
                <p>If weight and dimensional characteristics allow, materials must be placed in rack warehouses. The maximum permitted weight per storage cell of a rack warehouse is 3,000 kg. Dimensions for placement on racks must fit within the storage cell dimensions with a margin necessary for safe operation. If materials are not placed on standard Euro pallets, they must be pre-palletized and secured on the pallet with strapping bands.</p>
                
                <h3>Access to Materials and Marking</h3>
                <p>For access to materials (when conducting QC and searching for materials), storage of materials on sites and covered non-rack hangars must be carried out with a spacing of at least 60 cm from each other. To simplify the search for materials, marking on the material must be accessible, preferably placing materials with marking facing the aisle.</p>
                
                <p>If material without marking is noticed at the warehouse site, it should be requested through the group <a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Lost Items"</a>, printed and marked. It is acceptable to mark the material with a marker – write the GM number and PL.</p>
                
                <h3>Stacking Index</h3>
                <p>Stacking index – an index that determines how many tiers cargo can be stacked. If kg is indicated, this is the number of kg that can be placed on top of the GM. If a number (0, 1, 2) is indicated, this is the number of GMs with the same weight that can be placed on top of the GM. With a stacking index of 0, placing anything on top of the GM is prohibited, unless otherwise directed by management.</p>
                
                <h3>Park-Household Day</h3>
                <p>Every Sunday at the site is PHD (Park-Household Day), the purpose of which is to clean the sites from debris and eliminate remarks on the sites.</p>
            `,
                zh: `
                <h3>通行控制和安全管理</h3>
                <p>仓库为封闭区域，设有通行控制。严禁无关人员进入仓库。如发现无关人员，或SS7公司或其他建筑组织未参与工作的员工，仓库管理员必须护送其离开仓库。</p>
                
                <h3>拍照录像和材料检查</h3>
                <p>任何拍照录像、"查看材料"的请求必须与管理层协调。未经管理层批准，禁止此类员工进入仓库。如有管理层批准，仓库管理员必须陪同员工在仓库区域内活动，除非管理层另有确认。</p>
                
                <h3>场地秩序</h3>
                <p>在仓库场地内进食、无目的行走和逗留的人员必须被驱逐。</p>
                
                <p>仓库管理员是存储场地的秩序负责人。不允许存在外来垃圾、散落的木材和板条箱。仓库管理员必须组织使用临时工定期清理场地。垃圾需清理至垃圾箱。垃圾箱装满后，仓库管理员必须通过调度员订购垃圾箱更换。</p>
                
                <p>每天早晨，指定的现场员工需向群组 <a href="https://max.ru/join/LKsu74vfEKoJCa5SdggIfbG0-OAUj_Xy_TSxqcS2Q00" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">运营专员</a> 提供参与工作的临时工总名单。</p>
                
                <h3>长周期制造设备和超限超重货物卸货</h3>
                <p>长周期制造设备（LMC）和超限超重货物（OOG）需在平板上卸货；如平板上无空间，需获得管理层批准方可在碎石上卸货。</p>
                
                <h3>机库仓库存储</h3>
                <p>机库仓库中的材料存储需考虑其重量和尺寸特性以及存储代码。暖机库 – XXXX。冷机库 – XXX。</p>
                
                <h3>货架仓库</h3>
                <p>如重量和尺寸特性允许，材料需放置在货架仓库中。货架仓库每个存储单元的最大允许重量为3,000公斤。放置在货架上的尺寸必须适合存储单元尺寸，并留有安全操作所需的余量。如材料未放置在标准欧式托盘上，需预先装盘并用捆扎带固定在托盘上。</p>
                
                <h3>材料存取和标记</h3>
                <p>为便于存取材料（进行质量控制和查找材料时），场地和封闭无货架机库中的材料存储必须彼此间隔至少60厘米。为简化材料查找，材料上的标记必须可见，最好将材料标记面向通道。</p>
                
                <p>如发现仓库场地上有未标记的材料，应通过群组 <a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"丢失物品"</a> 请求标记，打印并标记材料。可用记号笔标记材料 – 写上GM编号和装箱单。</p>
                
                <h3>堆码指数</h3>
                <p>堆码指数 – 确定货物可堆码层数的指数。如标注为公斤，则为可在GM顶部放置的公斤数。如标注为数字（0、1、2），则为可在GM顶部放置的相同重量GM数量。堆码指数为0时，禁止在GM顶部放置任何物品，除非管理层另有指示。</p>
                
                <h3>停车-内务日</h3>
                <p>每周日场地为停车-内务日（PHD），目的是清理场地垃圾并消除场地问题。</p>
            `
            }
        },
        '2.2': {
            title: {
                ru: 'Коды хранения ТМЦ',
                en: 'Material Storage Codes',
                zh: '材料存储代码'
            },
            content: {
                ru: `
                <h3>Коды хранения</h3>
                <p>ТМЦ выгружаются и хранятся на площадках согласно кодам хранения. Информация по кодам хранения присутствует в Упаковочном Листе и в Ведомости Грузового Места (см. <a href="#4.4" style="color: #2563eb; text-decoration: none; font-weight: 600;">Главу «Содержание Упаковочного Листа (УЛ)» 🔗</a> и <a href="#4.5" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Содержание Ведомости Грузового места» 🔗</a>).</p>
                
                <div class="table-container" style="overflow-x: auto; margin: 20px 0;">
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                        <thead>
                            <tr style="background-color: #f8f9fa;">
                                <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Код</th>
                                <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Условия хранения</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">X</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">для хранения на открытой площадке, не под навесом</td>
                            </tr>
                            <tr style="background-color: #f8f9fa;">
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">для хранения на открытой мощеной площадке, под навесом</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XXX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">для хранения в закрытом, сухом, неотапливаемом помещении</td>
                            </tr>
                            <tr style="background-color: #f8f9fa;">
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XXXX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">для хранения в закрытом, сухом, отапливаемом / охлаждаемом помещении</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XXXXX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">для перевозки на отапливаемых транспортных средствах</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h3>Правила выгрузки по кодам</h3>
                
                <h4>ВЫГРУЗКА XX</h4>
                <p>Выгрузка XX осуществляется с последующим укрытием тентами по умолчанию, если не поступало иных распоряжений. Укрытие тентами осуществляется разнорабочими. Организация работы разнорабочих и контроль за их наличием – обязанность кладовщика.</p>
                
                <h4>ВЫГРУЗКА XXX</h4>
                <p><strong>Выгрузка XXX на открытых площадках при наличии места в крытых складах или контейнерах СТРОГО ЗАПРЕЩЕНА без согласования Руководителя склада либо его Заместителя.</strong></p>
                
                <h4>ВЫГРУЗКА XXXX</h4>
                <p><strong>Выгрузка XXXX на открытых площадках при наличии места в крытых отапливаемых складах СТРОГО ЗАПРЕЩЕНА без согласования Руководителя склада либо его Заместителя.</strong></p>
            `,
                en: `
                <h3>Storage Codes</h3>
                <p>Materials are unloaded and stored on sites according to storage codes. Information on storage codes is present in the Packing List and in the Cargo Unit Statement (see <a href="#4.4" style="color: #2563eb; text-decoration: none; font-weight: 600;">Chapter "Contents of Packing List (PL)" 🔗</a> and <a href="#4.5" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Contents of Cargo Unit Statement" 🔗</a>).</p>
                
                <div class="table-container" style="overflow-x: auto; margin: 20px 0;">
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                        <thead>
                            <tr style="background-color: #f8f9fa;">
                                <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Code</th>
                                <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Storage Conditions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">X</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">for storage on an open area, not under a canopy</td>
                            </tr>
                            <tr style="background-color: #f8f9fa;">
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">for storage on an open paved area, under a canopy</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XXX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">for storage in a closed, dry, unheated room</td>
                            </tr>
                            <tr style="background-color: #f8f9fa;">
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XXXX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">for storage in a closed, dry, heated / cooled room</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XXXXX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">for transportation on heated vehicles</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h3>Unloading Rules by Codes</h3>
                
                <h4>UNLOADING XX</h4>
                <p>Unloading XX is carried out with subsequent covering with tarps by default, unless other instructions are received. Covering with tarps is performed by laborers. Organization of laborers' work and control over their presence is the responsibility of the warehouse keeper.</p>
                
                <h4>UNLOADING XXX</h4>
                <p><strong>Unloading XXX on open sites when space is available in covered warehouses or containers is STRICTLY PROHIBITED without coordination with the Warehouse Manager or Deputy Manager.</strong></p>
                
                <h4>UNLOADING XXXX</h4>
                <p><strong>Unloading XXXX on open sites when space is available in covered heated warehouses is STRICTLY PROHIBITED without coordination with the Warehouse Manager or Deputy Manager.</strong></p>
            `,
                zh: `
                <h3>存储代码</h3>
                <p>材料根据存储代码在场地卸货和存储。存储代码信息见装箱单和货物单位清单（参见 <a href="#4.4" style="color: #2563eb; text-decoration: none; font-weight: 600;">章节"装箱单（PL）内容" 🔗</a> 和 <a href="#4.5" style="color: #2563eb; text-decoration: none; font-weight: 600;">"货物单位清单内容" 🔗</a>）。</p>
                
                <div class="table-container" style="overflow-x: auto; margin: 20px 0;">
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                        <thead>
                            <tr style="background-color: #f8f9fa;">
                                <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">代码</th>
                                <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">存储条件</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">X</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">露天存放，无遮阳棚</td>
                            </tr>
                            <tr style="background-color: #f8f9fa;">
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">露天铺装场地存放，有遮阳棚</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XXX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">封闭、干燥、无供暖房间存放</td>
                            </tr>
                            <tr style="background-color: #f8f9fa;">
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XXXX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">封闭、干燥、有供暖/制冷房间存放</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 12px; font-weight: bold;">XXXXX</td>
                                <td style="border: 1px solid #ddd; padding: 12px;">在供暖车辆上运输</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h3>按代码的卸货规则</h3>
                
                <h4>XX类卸货</h4>
                <p>XX类货物卸货后默认需用篷布覆盖，除非收到其他指示。篷布覆盖由临时工完成。组织临时工工作并监督其出勤是仓库管理员的责任。</p>
                
                <h4>XXX类卸货</h4>
                <p><strong>如有封闭仓库或集装箱空间，XXX类货物在露天场地卸货前必须与仓库经理或副经理协调，否则严格禁止。</strong></p>
                
                <h4>XXXX类卸货</h4>
                <p><strong>如有封闭供暖仓库空间，XXXX类货物在露天场地卸货前必须与仓库经理或副经理协调，否则严格禁止。</strong></p>
            `
            }
        },
        '2.3': {
            title: {
                ru: 'Перемещение ТМЦ между складами, перемещение ТМЦ по складу',
                en: 'Material Transfer Between Warehouses, Material Transfer Within Warehouse',
                zh: '仓库间材料转移，仓库内材料转移'
            },
            content: {
                ru: `
                <h3>Процедура перемещения</h3>
                <p>Для перемещения материала со склада необходимо предварительно убедиться в его наличии на лоте хранения и доступе для ПРР. Кладовщик должен заказать технику для проведения ПРР и транспортировки ТМЦ, учитывая габариты материала и место его расположения. Техника заказывается через диспетчеров.</p>
                
                <h3>После погрузки</h3>
                <p>После погрузки ТМЦ необходимо заполнить «Ведомость на перемещение и приемку» (см. <a href="#4.3" style="color: #2563eb; text-decoration: none; font-weight: 600;">раздел 4.3 🔗</a>).</p>
                
                <h3>После выгрузки</h3>
                <p>После выгрузки ТМЦ на принимающем складе или ячейке необходимо сделать фото Упаковочного Листа (УЛ) или Ведомостей ГМ по каждому грузовому месту для учета.</p>
                
                <h3>Предоставление документов</h3>
                <p>Ведомость на перемещение вместе с фото Упаковочного Листа (или Ведомостей ГМ) и описанием откуда и куда было перемещение, необходимо предоставить в группу <a href="https://max.ru/join/-_LBqqcIpcKTMRJjj8pHN5fxdmpMQOqlY3y9zKyjR-0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«ПЕРЕМЕЩЕНИЯ»</a>.</p>
                
                <h3>Информация для учета</h3>
                <p>По любому перемещению материала полная информация должна быть предоставлена в Отдел Учета, включая откуда и куда был перемещен материал, номер ГМ, его характеристики или номенклатуру, Упаковочный Лист (УЛ), или Транспортную Накладную (ТН) при наличии. Информация должна быть предоставлена своевременно сразу после перемещения.</p>
                
                <h3>Пример постинга перемещения</h3>
                <div class="image-container">
                    <img src="images/image_12_1.png" alt="Пример постинга перемещения" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример постинга перемещения</em></p>
                </div>
            `,
                en: `
                <h3>Transfer Procedure</h3>
                <p>To transfer material from the warehouse, it is necessary to first verify its presence at the storage lot and access for cargo handling operations. The warehouse keeper must order equipment for conducting cargo handling operations and transporting materials, taking into account the material dimensions and its location. Equipment is ordered through dispatchers.</p>
                
                <h3>After Loading</h3>
                <p>After loading materials, it is necessary to fill out the "Transfer and Acceptance Statement" (see <a href="#4.3" style="color: #2563eb; text-decoration: none; font-weight: 600;">section 4.3 🔗</a>).</p>
                
                <h3>After Unloading</h3>
                <p>After unloading materials at the receiving warehouse or cell, it is necessary to take photos of the Packing List (PL) or GM Statements for each cargo unit for accounting.</p>
                
                <h3>Document Submission</h3>
                <p>The transfer statement together with photos of the Packing List (or GM Statements) and description of where from and where to the transfer was made must be provided to the group <a href="https://max.ru/join/-_LBqqcIpcKTMRJjj8pHN5fxdmpMQOqlY3y9zKyjR-0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"TRANSFERS"</a>.</p>
                
                <h3>Information for Accounting</h3>
                <p>For any material transfer, complete information must be provided to the Accounting Department, including where from and where to the material was transferred, GM number, its characteristics or nomenclature, Packing List (PL), or Transportation Bill (TB) if available. Information must be provided timely immediately after the transfer.</p>
                
                <h3>Example of Transfer Posting</h3>
                <div class="image-container">
                    <img src="images/image_12_1.png" alt="Example of Transfer Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Transfer Posting</em></p>
                </div>
            `,
                zh: `
                <h3>转移程序</h3>
                <p>从仓库转移材料前，需先确认其在存储场地的存在以及可进行装卸作业。仓库管理员必须根据材料尺寸和位置订购装卸作业和运输设备。设备通过调度员订购。</p>
                
                <h3>装货后</h3>
                <p>装货后，需填写"转移和验收清单"（参见 <a href="#4.3" style="color: #2563eb; text-decoration: none; font-weight: 600;">章节4.3 🔗</a>）。</p>
                
                <h3>卸货后</h3>
                <p>在接收仓库或单元卸货后，需为每个货物单位拍摄装箱单（PL）或GM清单照片以供核算。</p>
                
                <h3>文件提交</h3>
                <p>转移清单连同装箱单（或GM清单）照片以及转移起点和终点的说明，需提交至群组 <a href="https://max.ru/join/-_LBqqcIpcKTMRJjj8pHN5fxdmpMQOqlY3y9zKyjR-0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"转移"</a>。</p>
                
                <h3>核算信息</h3>
                <p>任何材料转移的完整信息需提交给会计部门，包括转移起点和终点、GM编号、其特征或名称、装箱单（PL），或运输单（TB）（如有）。信息需在转移后立即及时提供。</p>
                
                <h3>转移发布示例</h3>
                <div class="image-container">
                    <img src="images/image_12_1.png" alt="转移发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>转移发布示例</em></p>
                </div>
            `
            }
        },
        '2.4': {
            title: {
                ru: 'Составление Акта о Повреждении ТМЦ',
                en: 'Preparation of Act of Material Damage',
                zh: '编制材料损坏报告'
            },
            content: {
                ru: `
                <h3>Повреждения при складских операциях</h3>
                <p>Повреждение ТМЦ может произойти при складских операциях, связанных с перемещением и проведением ПРР. В таких случаях необходимо составить <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Акт о Повреждении ТМЦ»</a>.</p>
                
                <h3>Информация о повреждении</h3>
                <p>Информацию о Повреждении ТМЦ при ПРР необходимо направлять в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">М-7 / Акты о повреждениях</a> в формате:</p>
                
                <ol>
                    <li>Фото повреждения</li>
                    <li>Фото пропуска стропальщиков/оператора погрузчика, которые производили ПРР</li>
                    <li>Фото ТС, на которое грузилось ТМЦ</li>
                    <li>Описание как именно произошло повреждение ТМЦ</li>
                    <li>Описание ТМЦ – номер ГМ, УЛ, количество поврежденного ТМЦ</li>
                </ol>
                
                <h3>Обработка акта</h3>
                <p>На основании предоставленных данных Отдел Учета составляет <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Акт о Повреждении ТМЦ»</a> и направляет его полевому сотруднику для подписи.</p>
            `,
                en: `
                <h3>Damage During Warehouse Operations</h3>
                <p>Material damage can occur during warehouse operations related to transfer and cargo handling operations. In such cases, it is necessary to prepare an "Act of Material Damage".</p>
                
                <h3>Damage Information</h3>
                <p>Information about Material Damage during cargo handling operations must be sent to the group <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">M-7 / Damage Acts</a> in the following format:</p>
                
                <ol>
                    <li>Photo of the damage</li>
                    <li>Photo of the pass of the riggers/forklift operator who performed the cargo handling operations</li>
                    <li>Photo of the vehicle on which materials were loaded</li>
                    <li>Description of exactly how the material damage occurred</li>
                    <li>Description of the materials – GM number, PL, quantity of damaged materials</li>
                </ol>
                
                <h3>Act Processing</h3>
                <p>Based on the provided data, the Accounting Department prepares the "Act of Material Damage" and sends it to the field employee for signature.</p>
            `,
                zh: `
                <h3>仓库作业中的损坏</h3>
                <p>材料损坏可能发生在与转移和装卸作业相关的仓库作业中。在此情况下，需编制"材料损坏报告"。</p>
                
                <h3>损坏信息</h3>
                <p>装卸作业中材料损坏信息需按以下格式发送至群组 <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">M-7 / 损坏报告</a>：</p>
                
                <ol>
                    <li>损坏照片</li>
                    <li>进行装卸作业的索具工/叉车操作员的通行证照片</li>
                    <li>装载材料的车辆照片</li>
                    <li>材料损坏发生过程的详细描述</li>
                    <li>材料描述 – GM编号、装箱单、损坏材料数量</li>
                </ol>
                
                <h3>报告处理</h3>
                <p>根据提供的数据，会计部门编制"材料损坏报告"并发送给现场员工签字。</p>
            `
            }
        },
        '2.5': {
            title: {
                ru: 'Перенаправление ТМЦ со склада для выгрузки на территории завода',
                en: 'Redirecting Materials from Warehouse for Unloading at Plant Territory',
                zh: '从仓库重定向材料至工厂场地卸货'
            },
            content: {
                ru: `
                <h3>Процедура перенаправления</h3>
                <p>Бывают случаи, когда ТС, приехавшее для выгрузки на склад, перенаправляется на территорию завода для последующей разгрузки в зоне монтажа. В таких ситуациях полевой сотрудник получает соответствующую информацию от Диспетчеров, либо китайские коллеги физически приезжают на склад и сообщают об этом.</p>
                
                <h3>Разрешение на выезд</h3>
                <p>Перед тем как ТС будет отпущено со склада на завод, необходимо получить разрешение от Диспетчера, подтверждающее, что ТС имеет право покинуть склад.</p>
            `,
                en: `
                <h3>Redirection Procedure</h3>
                <p>There are cases when a vehicle that arrived for unloading at the warehouse is redirected to the plant territory for subsequent unloading in the installation area. In such situations, the field employee receives relevant information from Dispatchers, or Chinese colleagues physically come to the warehouse and inform about this.</p>
                
                <h3>Exit Permission</h3>
                <p>Before the vehicle is released from the warehouse to the plant, it is necessary to obtain permission from the Dispatcher confirming that the vehicle has the right to leave the warehouse.</p>
            `,
                zh: `
                <h3>重定向程序</h3>
                <p>有时，到达仓库卸货的车辆会被重定向至工厂场地，以便在安装区域进行后续卸货。在此情况下，现场员工会从调度员处收到相关信息，或中国同事会亲自到仓库通知。</p>
                
                <h3>离场许可</h3>
                <p>车辆从仓库离场前往工厂前，需获得调度员许可，确认车辆有权离开仓库。</p>
            `
            }
        },
        // Глава 3: Выдача материала в монтаж
        '3.0': {
            title: {
                ru: 'Общие сведения',
                en: 'General Information',
                zh: '基本信息'
            },
            content: {
                ru: `
                <h3>Процедура выдачи материалов</h3>
                <p>Выдача материала в монтаж проводится по Заявкам на Выдачу (См. <a href="#4.7" style="color: #2563eb; text-decoration: none; font-weight: 600;">раздел 4.7 «Содержание Заявки на выдачу» 🔗</a>).</p>
                
                <h3>Формирование заявки</h3>
                <p>Заявка на выдачу формируется строительным блоком в 1С, затем подтверждается и визируется отделом учета.</p>
                
                <h3>Особенности выдачи труб</h3>
                <p>При выдаче труб иногда в заявках указываются метры, и бывают позиции, где метраж не кратен длине труб.</p>
                
                <p>В таких случаях выдаём целую трубу, в заявке прописываем кол-во шт. (в скобках кол-во метров согласно маркировки или в случае ее отсутствия согласно фактически произведенным замерам длин при выдаче).</p>
                
                <h3>Варианты выдачи</h3>
                <p>ТМЦ по Заявке может забираться как целиком, так частично в течении определенного промежутка времени.</p>
            `,
                en: `
                <h3>Material Issuance Procedure</h3>
                <p>Material issuance for installation is conducted according to Issuance Requests (See <a href="#4.7" style="color: #2563eb; text-decoration: none; font-weight: 600;">section 4.7 "Contents of Issuance Request" 🔗</a>).</p>
                
                <h3>Request Formation</h3>
                <p>The issuance request is formed by the construction unit in 1C, then confirmed and approved by the accounting department.</p>
                
                <h3>Pipe Issuance Features</h3>
                <p>When issuing pipes, sometimes meters are indicated in requests, and there are positions where the footage is not a multiple of the pipe length.</p>
                
                <p>In such cases, we issue a whole pipe, in the request we write the quantity in pieces (in parentheses the number of meters according to marking or in case of its absence according to actual length measurements made during issuance).</p>
                
                <h3>Issuance Options</h3>
                <p>Materials according to the Request can be taken either completely or partially over a certain period of time.</p>
            `,
                zh: `
                <h3>材料发放程序</h3>
                <p>材料发放用于安装需根据发放申请进行（参见 <a href="#4.7" style="color: #2563eb; text-decoration: none; font-weight: 600;">章节4.7"发放申请内容" 🔗</a>）。</p>
                
                <h3>申请形成</h3>
                <p>发放申请由建筑单位在1C系统中形成，然后由会计部门确认和批准。</p>
                
                <h3>管道发放特点</h3>
                <p>发放管道时，申请中有时会标注米数，且存在米数不是管道长度倍数的情况。</p>
                
                <p>在此情况下，我们发放整根管道，在申请中标注件数（括号内为根据标记的米数，如无标记则根据发放时的实际长度测量）。</p>
                
                <h3>发放选项</h3>
                <p>根据申请的材料可在一定时间内全部或部分领取。</p>
            `
            }
        },
        '3.1': {
            title: {
                ru: 'Выдача по Заявке на Выдачу целыми ГМ',
                en: 'Issuance by Issuance Request for Whole Cargo Units',
                zh: '按申请发放整件货物单位'
            },
            content: {
                ru: `
                <h3>Общие принципы</h3>
                <p>Если в заявке указаны номера ГМ без указания «частичная выдача», то выдается целое грузовое место без разукомплектации.</p>
                
                <h3>Процедура выдачи при прибытии строительной бригады или подрядчика</h3>
                
                <h4>1. ПРОВЕРКА ЗАЯВКИ</h4>
                <p>Убедиться, что заявка имеет визу Отдела Учета, подписанную сотрудником. Заявки без визы Отдела Учета не обрабатываются, если не согласовано с руководством.</p>
                
                <p>Проверить актуальность заявки. Срок действия заявки – 2 месяца с даты подписания. После истечения срока (например, 06.04.25) выдача запрещена без подтверждения руководства.</p>
                
                <div class="image-container">
                    <img src="images/image_13_1.png" alt="Пример визы отдела учета" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример визы отдела учета</em></p>
                </div>
                
                <h4>2. ФОТОГРАФИРОВАНИЕ ЗАЯВКИ</h4>
                <p>Заявку необходимо сфотографировать, чтобы было четко видно номер заявки и верхние строки номенклатурных позиций. Фото отправить в группу <a href="https://max.ru/join/Grxqwg0iOhtNMvh2Cc1d5TKayp2yaPSgvDVs3e6wjpI" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«ПРОВЕРКА ЗАЯВОК ПЕРЕД ВЫДАЧЕЙ»</a> для получения актуальных остатков. Без проверки остатков выдача запрещена.</p>
                
                <div class="image-container">
                    <img src="images/image_13_2.png" alt="Пример заявки на выдачу" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример заявки на выдачу</em></p>
                </div>
                
                <h4>3. ПОДГОТОВКА МАТЕРИАЛА</h4>
                <p>После проверки остатков найти материал на площадке и подготовить технику для погрузки.</p>
                
                <h4>4. ФОТОГРАФИРОВАНИЕ МАРКИРОВКИ</h4>
                <p>Сфотографировать маркировку ГМ, Ведомость Грузового Места или Shipping Mark. Если не найдены, сфотографировать Упаковочный Лист (УЛ) или заводскую маркировку материала (например, маркировку труб).</p>
                
                <h4>5. ПОГРУЗКА МАТЕРИАЛОВ</h4>
                <p>Погрузить ТМЦ на ТС. Крановое оборудование для строительных бригад СС7 предоставляется бригадами. При необходимости погрузчика или дополнительного крана обращаться к диспетчерам.</p>
                
                <h4>6. ФОТОГРАФИРОВАНИЕ ПОГРУЖЕННЫХ МАТЕРИАЛОВ</h4>
                <p>Сфотографировать ТМЦ, погруженные на ТС.</p>
                
                <h4>7. ЗАПОЛНЕНИЕ ПРОПУСКА НА ВЫВОЗ</h4>
                <p>Заполнить Пропуск на вывоз (см. <a href="#4.8" style="color: #2563eb; text-decoration: none; font-weight: 600;">раздел 4.8 🔗</a>).</p>
                
                <h4>8. ПОСТИНГ ИНФОРМАЦИИ О ВЫДАЧЕ</h4>
                <p>Разместить информацию о выдаче в группу <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«ВЫДАЧА ТМЦ ПО ЗАЯВКАМ»</a>. Информация должна включать:</p>
                
                <ul>
                    <li>Полные, читаемые, необрезанные и не перевернутые фото первой страницы Заявки на выдачу и всех страниц с отметками о получении, на которых видны подписи получающих материал, количество и дата.</li>
                    <li>Полное фото «Пропуска на вывоз ТМЦ» с подписями кладовщика и получающего груз.</li>
                    <li>Фото выданных ТМЦ и их Упаковочного Листа/Ведомости ГМ/Shipping Mark/маркировки по каждому ГМ. Без этих фото Отдел Учета не может списать материал.</li>
                    <li>Фото пропуска получающего груз. Строительная бригада и подрядчик должны совпадать с полем «Заявитель (Подрядчик)» в Заявке на выдачу.</li>
                    <li>Текстом прописать Номер заявки, количество (по возможности наименование) выданных ГМ, номера отпущенных ГМ, если это возможно и применимо. Также, прописать Китайского Коллегу, осуществившего выдачу, если это сделал КК</li>
                </ul>
                
                <h3>Пример</h3>
                <div class="image-container">
                    <img src="images/image_14_1.png" alt="Пример постинга выдачи" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример постинга выдачи</em></p>
                </div>
                
                <h3>Не нужно:</h3>
                <ul>
                    <li>Размещать информацию о выдаче по нескольким заявкам в одном посте.</li>
                    <li>Смешивать фото ТМЦ из нескольких заявок в одном посте.</li>
                    <li>Размещать непроверенную информацию о выдаче ТМЦ, которые фактически не выдавались.</li>
                </ul>
                
                <p><em>Реакции на сообщения полевых сотрудников не касаются, это внутренние обозначения Отдела Учета.</em></p>
            `,
                en: `
                <h3>General Principles</h3>
                <p>If the request specifies GM numbers without indicating "partial issuance", then a whole cargo unit is issued without unpacking.</p>
                
                <h3>Issuance Procedure Upon Arrival of Construction Team or Contractor</h3>
                
                <h4>1. REQUEST VERIFICATION</h4>
                <p>Ensure that the request has an Accounting Department approval signed by an employee. Requests without Accounting Department approval are not processed unless coordinated with management.</p>
                
                <p>Check the request validity. The request validity period is 2 months from the signing date. After expiration (for example, 06.04.25), issuance is prohibited without management confirmation.</p>
                
                <div class="image-container">
                    <img src="images/image_13_1.png" alt="Example of Accounting Department Approval" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Accounting Department Approval</em></p>
                </div>
                
                <h4>2. REQUEST PHOTOGRAPHY</h4>
                <p>The request must be photographed so that the request number and top lines of nomenclature positions are clearly visible. Send the photo to the group <a href="https://max.ru/join/Grxqwg0iOhtNMvh2Cc1d5TKayp2yaPSgvDVs3e6wjpI" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"REQUEST VERIFICATION BEFORE ISSUANCE"</a> to obtain current balances. Without balance verification, issuance is prohibited.</p>
                
                <div class="image-container">
                    <img src="images/image_13_2.png" alt="Example of Issuance Request" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Issuance Request</em></p>
                </div>
                
                <h4>3. MATERIAL PREPARATION</h4>
                <p>After balance verification, find the material on the site and prepare equipment for loading.</p>
                
                <h4>4. MARKING PHOTOGRAPHY</h4>
                <p>Photograph the GM marking, Cargo Unit Statement, or Shipping Mark. If not found, photograph the Packing List (PL) or factory marking of the material (for example, pipe marking).</p>
                
                <h4>5. MATERIAL LOADING</h4>
                <p>Load materials onto the vehicle. Crane equipment for SS7 construction teams is provided by the teams. If a forklift or additional crane is needed, contact dispatchers.</p>
                
                <h4>6. LOADED MATERIAL PHOTOGRAPHY</h4>
                <p>Photograph materials loaded onto the vehicle.</p>
                
                <h4>7. FILLING OUT EXIT PASS</h4>
                <p>Fill out the Exit Pass (see <a href="#4.8" style="color: #2563eb; text-decoration: none; font-weight: 600;">section 4.8 🔗</a>).</p>
                
                <h4>8. POSTING ISSUANCE INFORMATION</h4>
                <p>Post issuance information to the group <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"MATERIAL ISSUANCE BY REQUESTS"</a>. Information must include:</p>
                
                <ul>
                    <li>Complete, readable, uncropped and non-inverted photos of the first page of the Issuance Request and all pages with receipt marks showing signatures of those receiving the material, quantity and date.</li>
                    <li>Complete photo of "Material Exit Pass" with signatures of the warehouse keeper and cargo receiver.</li>
                    <li>Photos of issued materials and their Packing List/GM Statement/Shipping Mark/marking for each GM. Without these photos, the Accounting Department cannot write off the material.</li>
                    <li>Photo of the cargo receiver's pass. The construction team and contractor must match the "Applicant (Contractor)" field in the Issuance Request.</li>
                    <li>Text stating the Request number, quantity (and name if possible) of issued GMs, numbers of released GMs, if possible and applicable. Also, state the Chinese Colleague who performed the issuance, if it was done by CC</li>
                </ul>
                
                <h3>Example</h3>
                <div class="image-container">
                    <img src="images/image_14_1.png" alt="Example of Issuance Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Issuance Posting</em></p>
                </div>
                
                <h3>Do not:</h3>
                <ul>
                    <li>Post issuance information for multiple requests in one post.</li>
                    <li>Mix photos of materials from multiple requests in one post.</li>
                    <li>Post unverified information about issuance of materials that were not actually issued.</li>
                </ul>
                
                <p><em>Reactions to field employee messages are not relevant, these are internal Accounting Department designations.</em></p>
            `,
                zh: `
                <h3>一般原则</h3>
                <p>如申请中指定了GM编号但未注明"部分发放"，则发放整件货物单位，无需拆包。</p>
                
                <h3>建筑团队或承包商到达时的发放程序</h3>
                
                <h4>1. 申请验证</h4>
                <p>确保申请有会计部门员工签字的批准。无会计部门批准的申请不予处理，除非与管理层协调。</p>
                
                <p>检查申请有效性。申请有效期为签字之日起2个月。过期后（例如，06.04.25），未经管理层确认禁止发放。</p>
                
                <div class="image-container">
                    <img src="images/image_13_1.png" alt="会计部门批准示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>会计部门批准示例</em></p>
                </div>
                
                <h4>2. 申请拍照</h4>
                <p>需拍摄申请，确保申请编号和名称位置的前几行清晰可见。将照片发送至群组 <a href="https://max.ru/join/Grxqwg0iOhtNMvh2Cc1d5TKayp2yaPSgvDVs3e6wjpI" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"发放前申请验证"</a> 以获取当前余额。未经余额验证，禁止发放。</p>
                
                <div class="image-container">
                    <img src="images/image_13_2.png" alt="发放申请示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>发放申请示例</em></p>
                </div>
                
                <h4>3. 材料准备</h4>
                <p>余额验证后，在场地找到材料并准备装货设备。</p>
                
                <h4>4. 标记拍照</h4>
                <p>拍摄GM标记、货物单位清单或Shipping Mark。如未找到，拍摄装箱单（PL）或材料的工厂标记（例如，管道标记）。</p>
                
                <h4>5. 材料装货</h4>
                <p>将材料装到车辆上。SS7建筑团队的起重设备由团队提供。如需要叉车或额外起重机，请联系调度员。</p>
                
                <h4>6. 已装材料拍照</h4>
                <p>拍摄已装到车辆上的材料。</p>
                
                <h4>7. 填写离场通行证</h4>
                <p>填写离场通行证（参见 <a href="#4.8" style="color: #2563eb; text-decoration: none; font-weight: 600;">章节4.8 🔗</a>）。</p>
                
                <h4>8. 发布发放信息</h4>
                <p>将发放信息发布至群组 <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"按申请发放材料"</a>。信息需包括：</p>
                
                <ul>
                    <li>发放申请首页和所有带有接收标记页面的完整、可读、未裁剪且未翻转的照片，显示接收材料人员的签名、数量和日期。</li>
                    <li>带有仓库管理员和货物接收人签名的"材料离场通行证"完整照片。</li>
                    <li>每个GM的已发放材料及其装箱单/GM清单/Shipping Mark/标记的照片。无这些照片，会计部门无法核销材料。</li>
                    <li>货物接收人的通行证照片。建筑团队和承包商必须与发放申请中的"申请人（承包商）"字段一致。</li>
                    <li>文字说明申请编号、已发放GM的数量（如可能，包括名称）、已释放GM的编号（如可能且适用）。如由中国同事执行发放，也需说明。</li>
                </ul>
                
                <h3>示例</h3>
                <div class="image-container">
                    <img src="images/image_14_1.png" alt="发放发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>发放发布示例</em></p>
                </div>
                
                <h3>请勿：</h3>
                <ul>
                    <li>在一个帖子中发布多个申请的发放信息。</li>
                    <li>在一个帖子中混合多个申请的材料照片。</li>
                    <li>发布未经验证的关于实际未发放材料的发放信息。</li>
                </ul>
                
                <p><em>对现场员工消息的反应不相关，这些是会计部门的内部标识。</em></p>
            `
            }
        },
        '3.2': {
            title: {
                ru: 'Частичная Выдача',
                en: 'Partial Issuance',
                zh: '部分发放'
            },
            content: {
                ru: `
                <h3>Условия частичной выдачи</h3>
                <p>Если в Заявке на Выдачу в пункте Примечания указаны номера ГМ с указания «частичная выдача», то Грузоместо выдается частично с разукомплектацией.</p>
                
                <p>В этом случае следует разукомплектовать ГМ и выдать только указанные в Заявке на Выдачу номенклатурные позиции в нужном количестве.</p>
                
                <h3>Первое вскрытие ГМ</h3>
                <p><strong>Если ГМ вскрывается в первый раз</strong>, то после частичной выдачи необходимо досчитать и досверить остатки <strong>всего</strong> материала в ГМ с Ведомостью Грузового Места. Если Ведомость Грузового Места на ГМ отсутствует, либо требуется электронная версия для сверки, то Ведомость можно запросить через группу <a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Потеряшки»</a>.</p>
                
                <p>После пересчета необходимо маркером прописать на ГМ «Посчитано» на двух смежных сторонах.</p>
                
                <h3>Обнаружение несоответствий</h3>
                <p>В случае обнаружения несоответствий при пересчете (недостача, излишки, пересорт, порча/бой) необходимо составить Акт Осмотра. Акт необходимо отправить в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Акты осмотра ТМЦ»</a>. На ГМ с несоответствиями маркером написать с двух смежных сторон «Посчитано, составлен Акт». Также необходимо убедиться, что ГМ возможно идентифицировать (наклеен УЛ/Ведомость ГМ/ГМ промаркировано).</p>
                
                <h3>Пример Частичной Выдачи</h3>
                <p>ГМ № 1 (ранее выдача с этого места не производилась) по системе 1С содержит 5 номенклатурных позиций болтов. Каждая по 10 шт. По Заявке на Выдачу необходимо выдать 3 номенклатурные позиции по 3шт. В этом случае необходимо разукомплектовать ГМ № 1, выдать из него 9 болтов (по 3 шт каждого наименования).</p>
                
                <p>После выдачи необходимо досчитать ТМЦ в ГМ. В ГМ №1 должен остаться 41 болт - 2 номенклатурные позиции по 10 штук и 3 номенклатурные позиции по 4 штуки.</p>
                
                <p>Если по физике все сошлось, и в ГМ остался 41 болт, то можно постить выдачу в группу <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Выдача ТМЦ по Заявкам»</a>. На ГМ маркером написать «Посчитано»</p>
                
                <p>Если по физике остатки ТМЦ не сошлись с тем, что должно остаться по системе 1С, то необходимо запостить выдачу в группу <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Выдача ТМЦ по Заявкам»</a>, а затем составить Акт Осмотра и отправить в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Акты осмотра ТМЦ»</a>. На ГМ маркером написать «Посчитано. Составлен Акт»</p>
                
                <h3>Остальные позиции</h3>
                <p>Остальные номенклатурные позиции, не фигурирующие в этой заявке, должны остаться в ящике на прежнем месте хранения, либо должны быть перемещены в другое место хранения (к примеру, контейнер/ангар) с последующим заполнением Ведомости на перемещение.</p>
                
                <h3>Повторное вскрытие ГМ</h3>
                <p><strong>Если ГМ вскрывается повторно и при первом вскрытии остатки были сверены</strong> (На ГМ написано «Посчитано»), то следует произвести выдачу в общем порядке с последующим постингом в группу <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Выдача ТМЦ по Заявкам»</a>.</p>
            `,
                en: `
                <h3>Partial Issuance Conditions</h3>
                <p>If the Issuance Request in the Notes section specifies GM numbers with "partial issuance" indication, then the Cargo Unit is issued partially with unpacking.</p>
                
                <p>In this case, the GM should be unpacked and only the nomenclature positions specified in the Issuance Request in the required quantity should be issued.</p>
                
                <h3>First GM Opening</h3>
                <p><strong>If the GM is opened for the first time</strong>, then after partial issuance it is necessary to recount and verify the balances of <strong>all</strong> material in the GM with the Cargo Unit Statement. If the Cargo Unit Statement for the GM is missing, or an electronic version is required for verification, the Statement can be requested through the group <a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Lost Items"</a>.</p>
                
                <p>After recounting, it is necessary to write "Counted" on the GM with a marker on two adjacent sides.</p>
                
                <h3>Discrepancy Detection</h3>
                <p>If discrepancies are detected during recounting (shortage, surplus, mis-sorted items, damage/breakage), it is necessary to prepare an Inspection Act. The Act must be sent to the group <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Material Inspection Acts"</a>. On GMs with discrepancies, write with a marker on two adjacent sides "Counted, Act prepared". It is also necessary to ensure that the GM can be identified (PL/GM Statement is attached/GM is marked).</p>
                
                <h3>Partial Issuance Example</h3>
                <p>GM No. 1 (previously no issuance was made from this location) according to the 1C system contains 5 nomenclature positions of bolts. Each has 10 pieces. According to the Issuance Request, it is necessary to issue 3 nomenclature positions of 3 pieces each. In this case, it is necessary to unpack GM No. 1 and issue 9 bolts from it (3 pieces of each name).</p>
                
                <p>After issuance, it is necessary to recount the materials in the GM. GM No. 1 should have 41 bolts remaining - 2 nomenclature positions of 10 pieces each and 3 nomenclature positions of 4 pieces each.</p>
                
                <p>If physically everything matches and 41 bolts remain in the GM, then the issuance can be posted to the group <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Material Issuance by Requests"</a>. Write "Counted" on the GM with a marker.</p>
                
                <p>If physically the material balances do not match what should remain according to the 1C system, then it is necessary to post the issuance to the group <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Material Issuance by Requests"</a>, and then prepare an Inspection Act. Write "Counted. Act prepared" on the GM with a marker.</p>
                
                <h3>Remaining Positions</h3>
                <p>Other nomenclature positions not included in this request should remain in the box at the previous storage location, or should be moved to another storage location (for example, container/hangar) with subsequent filling out of the Transfer Statement.</p>
                
                <h3>Repeated GM Opening</h3>
                <p><strong>If the GM is opened repeatedly and balances were verified during the first opening</strong> (On the GM it is written "Counted"), then issuance should be performed in the general order with subsequent posting to the group <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Material Issuance by Requests"</a>.</p>
            `,
                zh: `
                <h3>部分发放条件</h3>
                <p>如发放申请在备注部分指定了GM编号并注明"部分发放"，则货物单位需部分发放并拆包。</p>
                
                <p>在此情况下，需拆包GM，仅发放申请中指定的名称位置，数量按需。</p>
                
                <h3>首次打开GM</h3>
                <p><strong>如GM首次打开</strong>，部分发放后需重新清点并核对GM中<strong>所有</strong>材料与货物单位清单的余额。如GM的货物单位清单缺失，或需要电子版进行核对，可通过群组 <a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"丢失物品"</a> 请求清单。</p>
                
                <p>重新清点后，需用记号笔在GM的两个相邻面上标注"已清点"。</p>
                
                <h3>发现不符项</h3>
                <p>如重新清点时发现不符项（短缺、多余、错配、损坏/破损），需编制检查报告。报告需发送至群组 <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"材料检查报告"</a>。对于存在不符项的GM，用记号笔在两个相邻面上标注"已清点，已编制报告"。还需确保GM可识别（已粘贴装箱单/GM清单/GM已标记）。</p>
                
                <h3>部分发放示例</h3>
                <p>GM № 1（此前未从此位置发放）根据1C系统包含5个名称位置的螺栓。每个10件。根据发放申请，需发放3个名称位置，每个3件。在此情况下，需拆包GM № 1，从中发放9个螺栓（每个名称3件）。</p>
                
                <p>发放后，需重新清点GM中的材料。GM №1应剩余41个螺栓 - 2个名称位置各10件，3个名称位置各4件。</p>
                
                <p>如实际清点一致，GM中剩余41个螺栓，则可发布发放信息至群组 <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"按申请发放材料"</a>。用记号笔在GM上标注"已清点"。</p>
                
                <p>如实际材料余额与1C系统应剩余数量不一致，需先发布发放信息至群组 <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"按申请发放材料"</a>，然后编制检查报告。用记号笔在GM上标注"已清点。已编制报告"。</p>
                
                <h3>其余位置</h3>
                <p>未包含在此申请中的其他名称位置应保留在原存储位置的箱子中，或应移至其他存储位置（例如，集装箱/机库），并随后填写转移清单。</p>
                
                <h3>再次打开GM</h3>
                <p><strong>如GM再次打开且首次打开时余额已核对</strong>（GM上标注"已清点"），则按一般程序进行发放，随后发布至群组 <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"按申请发放材料"</a>。</p>
            `
            }
        },
        '3.3': {
            title: {
                ru: 'Составление Акта Осмотра',
                en: 'Preparation of Inspection Act',
                zh: '编制检查报告'
            },
            content: {
                ru: `
                <h3>Назначение акта осмотра</h3>
                <p>Акт осмотра составляется в случае, если при частичной выдаче обнаружена недостача, излишки, пересорт или повреждение материала. Это касается как ТМЦ, прошедших ВК, так и не прошедших. При обнаружении несоответствий необходимо вызвать сотрудника Бизнес-Тренд для совместного осмотра этих ТМЦ.</p>
                
                <h3>Действия при обнаружении несоответствий</h3>
                
                <p>При обнаружении несоответствий полевой сотрудник должен разместить в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Акты осмотра ТМЦ»</a> следующую информацию:</p>
                
                <ol>
                    <li>Фото ТМЦ</li>
                    <li>Номер ГМ и УЛ</li>
                    <li>Наименование ТМЦ согласно Ведомости Грузового Места</li>
                    <li>Описание несоответствия</li>
                </ol>
                
                <p>На основании предоставленной информации Отдел Учета составляет Акт Осмотра и направляет его для подписи полевому сотруднику и сотруднику Бизнес-Тренда.</p>
            `,
                en: `
                <h3>Purpose of Inspection Act</h3>
                <p>An Inspection Act is prepared if during partial issuance a shortage, surplus, mis-sorted items, or material damage is detected. This applies to both materials that have passed QC and those that have not. When discrepancies are detected, it is necessary to call a Business-Trend employee for joint inspection of these materials.</p>
                
                <h3>Actions When Discrepancies Are Detected</h3>
                
                <p>When discrepancies are detected, the field employee must post the following information to the group <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Material Inspection Acts"</a>:</p>
                
                <ol>
                    <li>Photo of materials</li>
                    <li>GM number and PL</li>
                    <li>Material name according to Cargo Unit Statement</li>
                    <li>Description of the discrepancy</li>
                </ol>
                
                <p>Based on the provided information, the Accounting Department prepares the Inspection Act and sends it for signature to the field employee and Business-Trend employee.</p>
            `,
                zh: `
                <h3>检查报告的用途</h3>
                <p>如在部分发放时发现短缺、多余、错配或材料损坏，需编制检查报告。这适用于已通过质量控制和未通过质量控制的材料。发现不符项时，需联系Business-Trend员工共同检查这些材料。</p>
                
                <h3>发现不符项时的处理</h3>
                
                <p>发现不符项时，现场员工需将以下信息发布至群组 <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"材料检查报告"</a>：</p>
                
                <ol>
                    <li>材料照片</li>
                    <li>GM编号和装箱单</li>
                    <li>根据货物单位清单的材料名称</li>
                    <li>不符项描述</li>
                </ol>
                
                <p>根据提供的信息，会计部门编制检查报告并发送给现场员工和Business-Trend员工签字。</p>
            `
            }
        },
        '3.4': {
            title: {
                ru: 'Составление Акта о Повреждении ТМЦ',
                en: 'Preparation of Act of Material Damage',
                zh: '编制材料损坏报告'
            },
            content: {
                ru: `
                <p>При приемке, выдаче и перемещении ТМЦ по площадке может возникнуть порча/бой материала. В этом случае необходимо составить <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Акт о Повреждении ТМЦ</a>.</p>
                
                <p>Информацию о Повреждении ТМЦ при ПРР необходимо направлять в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">М-7 / Акты о повреждениях</a> в формате:</p>
                
                <ol>
                    <li>Фото повреждения</li>
                    <li>Фото пропуска стропальщиков/оператора погрузчика, которые производили ПРР</li>
                    <li>Фото заявки, по которой выдавался груз и фото ТС</li>
                    <li>Описание как именно произошло повреждение ТМЦ</li>
                    <li>Описание ТМЦ – номер ГМ, УЛ, количество поврежденного ТМЦ</li>
                </ol>
                
                <p>На основании вышеизложенных данных Отдел Учета подготавливает <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Акт о Повреждении ТМЦ</a> и направляет полевому сотруднику на подпись.</p>
            `,
                en: `
                <p>During acceptance, issuance, and transfer of materials on the site, material damage/breakage may occur. In this case, it is necessary to prepare an Act of Material Damage.</p>
                
                <p>Information about Material Damage during cargo handling operations must be sent to the group <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">M-7 / Damage Acts</a> in the following format:</p>
                
                <ol>
                    <li>Photo of the damage</li>
                    <li>Photo of the pass of the riggers/forklift operator who performed the cargo handling operations</li>
                    <li>Photo of the request for which cargo was issued and photo of the vehicle</li>
                    <li>Description of exactly how the material damage occurred</li>
                    <li>Description of the materials – GM number, PL, quantity of damaged materials</li>
                </ol>
                
                <p>Based on the above data, the Accounting Department prepares the Act of Material Damage and sends it to the field employee for signature.</p>
            `,
                zh: `
                <p>在场地进行材料验收、发放和转移时，可能发生材料损坏/破损。在此情况下，需编制材料损坏报告。</p>
                
                <p>装卸作业中材料损坏信息需按以下格式发送至群组 <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">M-7 / 损坏报告</a>：</p>
                
                <ol>
                    <li>损坏照片</li>
                    <li>进行装卸作业的索具工/叉车操作员的通行证照片</li>
                    <li>发放货物的申请照片和车辆照片</li>
                    <li>材料损坏发生过程的详细描述</li>
                    <li>材料描述 – GM编号、装箱单、损坏材料数量</li>
                </ol>
                
                <p>根据上述数据，会计部门编制材料损坏报告并发送给现场员工签字。</p>
            `
            }
        },
        '7.0': {
            title: {
                ru: 'Возврат ТМЦ на склад',
                en: 'Material Return to Warehouse',
                zh: '材料退回仓库'
            },
            content: {
                ru: `
                <p>В случае невозможности или отсутствия необходимости вовлечения выданного материала в монтаж, строительный блок инициирует возврат ранее выданных ТМЦ на склад на основании Акта Осмотра.</p>
                
                <p>На основании подписанного Акта осмотра Руководитель отдела складского хозяйства дает указание о приемке ТМЦ на склад, согласовываются сроки, когда склад готов принять ТМЦ, указанные в Акте осмотра.</p>
                
                <h3>По прибытию ТМЦ на склад полевой сотрудник обязан:</h3>
                
                <ol>
                    <li>Отправить фото <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Акта Осмотра</a> на проверку в группу <a href="https://max.ru/join/0iTrekxICkpxlcHTlbX4YPjeNi9vQOEi0jKhELKX6gE" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Возврат ТМЦ на склад»</a></li>
                    <li>После подтверждения от сотрудника Отдела Учета о том, что данный Акт согласован с руководством, принять материал на хранение. ГМ должны быть приняты с полным пересчетом содержимого, а также должен произвестись осмотр ТМЦ на наличие повреждений. Содержимое должно полностью соответствовать содержанию <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Акта Осмотра</a>.</li>
                    <li>После пересчета содержимого подписать <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Акт Осмотра</a></li>
                    <li>Направить фото <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">Акта Осмотра</a>, фото ТМЦ и его маркировки, а также место хранения ТМЦ в группу <a href="https://max.ru/join/0iTrekxICkpxlcHTlbX4YPjeNi9vQOEi0jKhELKX6gE" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Возврат ТМЦ на склад»</a></li>
                </ol>
                
                <h3>Важные требования:</h3>
                
                <ul>
                    <li>ТМЦ, непригодные для дальнейшего использования на склад не принимаются</li>
                    <li>ТМЦ должны быть однозначно идентифицируемые, каждое возвращаемое ГМ должно быть промаркировано</li>
                    <li>ТМЦ принимаются на склад в соответствии с Актом осмотра. Далее Отделом Учета составляется акт приема-передачи на возвращаемые ТМЦ и принимаются на баланс в 1С.</li>
                </ul>
            `,
                en: `
                <p>In case of impossibility or lack of necessity to involve the issued material in installation, the construction unit initiates the return of previously issued materials to the warehouse based on the Inspection Act.</p>
                
                <p>Based on the signed Inspection Act, the Head of the Warehouse Department gives instructions for material acceptance to the warehouse, and deadlines are agreed upon when the warehouse is ready to accept the materials specified in the Inspection Act.</p>
                
                <h3>Upon arrival of materials at the warehouse, the field employee must:</h3>
                
                <ol>
                    <li>Send a photo of the Inspection Act for verification to the group <a href="https://max.ru/join/0iTrekxICkpxlcHTlbX4YPjeNi9vQOEi0jKhELKX6gE" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Material Return to Warehouse"</a></li>
                    <li>After confirmation from the Accounting Department employee that this Act has been approved by management, accept the material for storage. GMs must be accepted with a complete recount of contents, and an inspection of materials for damage must be performed. The contents must fully correspond to the contents of the Inspection Act.</li>
                    <li>After recounting the contents, sign the Inspection Act</li>
                    <li>Send a photo of the Inspection Act, photos of materials and their marking, as well as the storage location of materials to the group <a href="https://max.ru/join/0iTrekxICkpxlcHTlbX4YPjeNi9vQOEi0jKhELKX6gE" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Material Return to Warehouse"</a></li>
                </ol>
                
                <h3>Important Requirements:</h3>
                
                <ul>
                    <li>Materials unsuitable for further use are not accepted to the warehouse</li>
                    <li>Materials must be unambiguously identifiable, each returned GM must be marked</li>
                    <li>Materials are accepted to the warehouse in accordance with the Inspection Act. Then the Accounting Department prepares an acceptance-transfer act for returned materials and they are accepted on the balance in 1C.</li>
                </ul>
            `,
                zh: `
                <p>如无法或无需将已发放材料用于安装，建筑单位根据检查报告启动将先前发放的材料退回仓库。</p>
                
                <p>根据已签署的检查报告，仓库部门负责人指示将材料接收至仓库，并商定仓库准备接收检查报告中指定材料的期限。</p>
                
                <h3>材料到达仓库后，现场员工必须：</h3>
                
                <ol>
                    <li>将检查报告照片发送至群组 <a href="https://max.ru/join/0iTrekxICkpxlcHTlbX4YPjeNi9vQOEi0jKhELKX6gE" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"材料退回仓库"</a> 进行验证</li>
                    <li>在会计部门员工确认该报告已获管理层批准后，接收材料进行存储。GM必须完整重新清点内容后接收，并需检查材料是否有损坏。内容必须与检查报告内容完全一致。</li>
                    <li>重新清点内容后，签署检查报告</li>
                    <li>将检查报告照片、材料及其标记照片以及材料存储位置发送至群组 <a href="https://max.ru/join/0iTrekxICkpxlcHTlbX4YPjeNi9vQOEi0jKhELKX6gE" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"材料退回仓库"</a></li>
                </ol>
                
                <h3>重要要求：</h3>
                
                <ul>
                    <li>不适合继续使用的材料不接受退回仓库</li>
                    <li>材料必须可明确识别，每个退回的GM必须标记</li>
                    <li>材料根据检查报告接收至仓库。随后会计部门编制退回材料的验收移交报告，并在1C系统中接受入账。</li>
                </ul>
            `
            }
        },
        '8.1': {
            title: {
                ru: 'Проверка ЗРА перед отправкой',
                en: 'ZRA Verification Before Shipment',
                zh: '发货前ZRA验证'
            },
            content: {
                ru: `
                <h3>Этап 1. Отправка ЗРА на гидроиспытания</h3>
                
                <h3>1.1 Проверка ЗРА перед отправкой</h3>
                
                <p>Строители создают заявку на проведение гидроиспытаний для ЗРА.</p>
                
                <p>До отправки ЗРА на гидроиспытания необходимо проверить количество ЗРА и их Таговые номера в каждом Грузовом Месте (ГМ) на соответствие Упаковочному Листу (УЛ). Также производится визуальный осмотр на предмет наличия повреждений.</p>
                
                <p>Для этой цели распечатываются списки для предварительной проверки и передаются бригаде Китайских Коллег (КК) для выполнения. Проверенные ГМ помечаются краской.</p>
                
                <p>КК на ежедневной основе размещают результаты проведенной проверки в группе <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«ЗРА для ГИ»</a> в таком формате:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_1.png" alt="Пример размещения результатов проверки ЗРА" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример размещения результатов проверки ЗРА</em></p>
                </div>
                
                <p><strong style="color: #dc2626;">Отгрузка ЗРА на гидроиспытания производится только после проверки всех ГМ Китайскими коллегами. Без проверки ГМ отправляются только по прямому указанию Руководителя!</strong></p>
            `,
                en: `
                <h3>Stage 1. Shipment of ZRA for Hydrotesting</h3>
                
                <h3>1.1 ZRA Verification Before Shipment</h3>
                
                <p>Construction workers create a request for hydrotesting of ZRA.</p>
                
                <p>Before shipping ZRA for hydrotesting, it is necessary to verify the quantity of ZRA and their Tag Numbers in each Cargo Unit (GM) for compliance with the Packing List (PL). A visual inspection is also performed for damage.</p>
                
                <p>For this purpose, preliminary verification lists are printed and given to the Chinese Colleagues (CC) team for execution. Verified GMs are marked with paint.</p>
                
                <p>CC daily post the results of the verification in the group <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"ZRA for HI"</a> in the following format:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_1.png" alt="Example of ZRA Verification Results Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of ZRA Verification Results Posting</em></p>
                </div>
                
                <p><strong style="color: #dc2626;">Shipment of ZRA for hydrotesting is performed only after verification of all GMs by Chinese colleagues. Without verification, GMs are shipped only by direct instruction from the Manager!</strong></p>
            `,
                zh: `
                <h3>阶段1. ZRA发货进行水压试验</h3>
                
                <h3>1.1 发货前ZRA验证</h3>
                
                <p>建筑工人创建ZRA水压试验申请。</p>
                
                <p>发货进行水压试验前，需验证每个货物单位（GM）中ZRA的数量及其标签编号是否与装箱单（PL）一致。同时进行目视检查以发现损坏。</p>
                
                <p>为此，打印初步验证清单并交给中国同事（CC）团队执行。已验证的GM用油漆标记。</p>
                
                <p>CC每日在群组 <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"用于水压试验的ZRA"</a> 中按以下格式发布验证结果：</p>
                
                <div class="image-container">
                    <img src="images/VALVES_1.png" alt="ZRA验证结果发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>ZRA验证结果发布示例</em></p>
                </div>
                
                <p><strong style="color: #dc2626;">ZRA发货进行水压试验仅在中国同事验证所有GM后进行。未经验证的GM仅按经理直接指示发货！</strong></p>
            `
            }
        },
        '8.2': {
            title: {
                ru: 'Отправка ЗРА на гидроиспытания',
                en: 'Shipment of ZRA for Hydrotesting',
                zh: 'ZRA发货进行水压试验'
            },
            content: {
                ru: `
                <h3>1.2 Отправка ЗРА на гидроиспытания</h3>
                
                <p>Проверенные ГМ отгружаются на транспортное средство (ТС), делаются фото УЛ грузовых мест, заполняется пропуск на вывоз.</p>
                
                <p>В Пропуске на вывоз указываются выданные грузоместа, их количество. В разделе «номер заявки» прописывается «ЗРА по заявке №___» в графе «Грузополучатель» пишем «ЯСИ» (Ямал Строй Инвест).</p>
                
                <p>Образец оформления Манифеста на вывоз ЗРА по заявке:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_2.png" alt="Образец оформления Манифеста на вывоз ЗРА" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Образец оформления Манифеста на вывоз ЗРА</em></p>
                </div>
                
                <p>После того, как ТС уезжает со склада, кладовщик размещает информацию по отправленной машине в группу <a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Перемещение ЗРА на испытания и между складами»</a> прикладывая фото УЛ на ГМ с видимыми номерами ГМ, а также фото заполненного и подписанного Пропуска на вывоз с указанием времени убытия ТС на ЯСИ в следующем формате:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_3.png" alt="Пример размещения информации об отправке ЗРА" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример размещения информации об отправке ЗРА</em></p>
                </div>
            `,
                en: `
                <h3>1.2 Shipment of ZRA for Hydrotesting</h3>
                
                <p>Verified GMs are loaded onto a vehicle (VS), photos of PLs of cargo units are taken, and an exit pass is filled out.</p>
                
                <p>The Exit Pass indicates the issued cargo units and their quantity. In the "request number" section, "ZRA by request No.___" is written, and in the "Consignee" field, "YASI" (Yamal Stroy Invest) is written.</p>
                
                <p>Sample of Exit Pass for ZRA by request:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_2.png" alt="Sample of Exit Pass for ZRA" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Sample of Exit Pass for ZRA</em></p>
                </div>
                
                <p>After the vehicle leaves the warehouse, the warehouse keeper posts information about the dispatched vehicle to the group <a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"ZRA Transfer for Testing and Between Warehouses"</a> attaching photos of PLs on GMs with visible GM numbers, as well as a photo of the filled and signed Exit Pass with indication of the vehicle departure time to YASI in the following format:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_3.png" alt="Example of ZRA Shipment Information Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of ZRA Shipment Information Posting</em></p>
                </div>
            `,
                zh: `
                <h3>1.2 ZRA发货进行水压试验</h3>
                
                <p>已验证的GM装载到车辆（VS）上，拍摄货物单位装箱单照片，填写离场通行证。</p>
                
                <p>离场通行证中注明已发放的货物单位及其数量。在"申请编号"部分填写"ZRA按申请编号___"，在"收货人"栏填写"YASI"（亚马尔建设投资）。</p>
                
                <p>ZRA按申请离场通行证示例：</p>
                
                <div class="image-container">
                    <img src="images/VALVES_2.png" alt="ZRA离场通行证示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>ZRA离场通行证示例</em></p>
                </div>
                
                <p>车辆离开仓库后，仓库管理员将已发送车辆的信息发布至群组 <a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"ZRA转移进行试验和仓库间转移"</a>，附上GM上装箱单照片（GM编号可见），以及填写并签字的离场通行证照片（注明车辆前往YASI的离场时间），格式如下：</p>
                
                <div class="image-container">
                    <img src="images/VALVES_3.png" alt="ZRA发货信息发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>ZRA发货信息发布示例</em></p>
                </div>
            `
            }
        },
        '8.3': {
            title: {
                ru: 'Проверка грузомест на соответствие с УЛ после проведения гидроиспытаний',
                en: 'Verification of Cargo Units for Compliance with PL After Hydrotesting',
                zh: '水压试验后货物单位与装箱单符合性验证'
            },
            content: {
                ru: `
                <h3>Этап 2. Проверка грузомест на соответствие с УЛ после проведения гидроиспытаний</h3>
                
                <p>Кладовщики, находящиеся на постоянной основе в цехе ГИ «Ямалстройинвест» (Далее ЯСИ), осуществляют проверку ГМ после проведения ГИ чтобы убедиться, что содержимое не стало отличаться от содержимого до проведения ГИ. Кладовщики проверяют количество задвижек, соответствие таговых номеров содержанию УЛ, а также отсутствие повреждений на задвижках.</p>
                
                <p>Если выявлены какие-либо расхождения, то об этом сообщается в группу <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«ЗРА для ГИ»</a>, далее ждем решения ситуации. Если не удалось прояснить причину несоответствия, то кладовщики получают команду на создание «Акта осмотра» с фотофиксацией и описанием выявленных расхождений. Запрос на создание акта осмотра направляется сотрудникам учета в специально созданную группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Акты осмотра ТМЦ»</a> / <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Акты о повреждениях»</a>.</p>
                
                <p>Если все хорошо, то заполняется ведомость на перемещение с указанием номеров ГМ, таговых номеров ГМ. Правая часть при этом остаётся пустой и будет задействована на следующем этапе.</p>
                
                <p>ТС грузится испытанными ящиками, водитель расписывается внизу ведомости о том, что принял груз к перевозке.</p>
                
                <div class="image-container">
                    <img src="images/VALVES_4.png" alt="Пример заполненной ведомости на перемещение" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример заполненной ведомости на перемещение</em></p>
                </div>
                
                <p>Далее ТС уезжает на склад, а отправивший её кладовщик размещает информацию о данном факте в группе <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«ЗРА для ГИ»</a> с прикреплением фото ведомости, фото УЛ на ГМ и информацией в следующем формате:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_5.png" alt="Пример размещения информации о проверке после ГИ" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример размещения информации о проверке после ГИ</em></p>
                </div>
            `,
                en: `
                <h3>Stage 2. Verification of Cargo Units for Compliance with PL After Hydrotesting</h3>
                
                <p>Warehouse keepers permanently located at the hydrotesting workshop "Yamalstroyinvest" (hereinafter YASI) perform verification of GMs after hydrotesting to ensure that the contents have not changed from the contents before hydrotesting. Warehouse keepers verify the quantity of valves, compliance of tag numbers with PL contents, as well as absence of damage on valves.</p>
                
                <p>If any discrepancies are identified, this is reported to the group <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"ZRA for HI"</a>, then we wait for resolution of the situation. If it was not possible to clarify the cause of the discrepancy, warehouse keepers receive a command to create an "Inspection Act" with photo documentation and description of identified discrepancies. The request for creating an inspection act is sent to accounting employees in a specially created group.</p>
                
                <p>If everything is good, a transfer statement is filled out indicating GM numbers and GM tag numbers. The right part remains empty and will be used at the next stage.</p>
                
                <p>The vehicle is loaded with tested boxes, and the driver signs at the bottom of the statement that he has accepted the cargo for transportation.</p>
                
                <div class="image-container">
                    <img src="images/VALVES_4.png" alt="Example of Completed Transfer Statement" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Completed Transfer Statement</em></p>
                </div>
                
                <p>Then the vehicle leaves for the warehouse, and the warehouse keeper who sent it posts information about this fact in the group <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"ZRA for HI"</a> with attached photos of the statement, photos of PLs on GMs, and information in the following format:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_5.png" alt="Example of Post-Hydrotesting Verification Information Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Post-Hydrotesting Verification Information Posting</em></p>
                </div>
            `,
                zh: `
                <h3>阶段2. 水压试验后货物单位与装箱单符合性验证</h3>
                
                <p>常驻水压试验车间"亚马尔建设投资"（以下简称YASI）的仓库管理员在水压试验后对GM进行验证，以确保内容与水压试验前的内容未发生变化。仓库管理员验证阀门数量、标签编号与装箱单内容的一致性，以及阀门上是否有损坏。</p>
                
                <p>如发现任何不符项，需报告至群组 <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"用于水压试验的ZRA"</a>，然后等待情况解决。如无法澄清不符项原因，仓库管理员收到命令创建"检查报告"，附照片记录和已发现不符项的描述。创建检查报告的请求发送给会计部门员工，在专门创建的群组中。</p>
                
                <p>如一切正常，填写转移清单，注明GM编号和GM标签编号。右侧部分保持空白，将在下一阶段使用。</p>
                
                <p>车辆装载已测试的箱子，司机在清单底部签字，确认已接受货物进行运输。</p>
                
                <div class="image-container">
                    <img src="images/VALVES_4.png" alt="已填写转移清单示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>已填写转移清单示例</em></p>
                </div>
                
                <p>随后车辆前往仓库，发送车辆的仓库管理员在群组 <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"用于水压试验的ZRA"</a> 中发布此信息，附上清单照片、GM上装箱单照片，格式如下：</p>
                
                <div class="image-container">
                    <img src="images/VALVES_5.png" alt="水压试验后验证信息发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>水压试验后验证信息发布示例</em></p>
                </div>
            `
            }
        },
        '8.4': {
            title: {
                ru: 'Приемка ЗРА прошедшего ГИ на складе',
                en: 'Acceptance of ZRA That Passed Hydrotesting at Warehouse',
                zh: '仓库接收通过水压试验的ZRA'
            },
            content: {
                ru: `
                <h3>Этап 3. Приемка ЗРА прошедшего ГИ на складе</h3>
                
                <p>ТС поступает на площадку, где выгружается. При приемке кладовщик сверяет номера ГМ в ведомости на перемещение, выгружает авто, затем в ведомости на перемещение проставляет фактические лоты хранения, на которые он разместил груз и подает информацию в группу <a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Перемещения ЗРА»</a> в следующем формате:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_6.png" alt="Пример размещения информации о приемке ЗРА на складе" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример размещения информации о приемке ЗРА на складе</em></p>
                </div>
                
                <p>На этом процесс отправки и приемки ЗРА с ГИ завершен.</p>
            `,
                en: `
                <h3>Stage 3. Acceptance of ZRA That Passed Hydrotesting at Warehouse</h3>
                
                <p>The vehicle arrives at the site where it is unloaded. During acceptance, the warehouse keeper verifies GM numbers in the transfer statement, unloads the vehicle, then in the transfer statement enters the actual storage lots where he placed the cargo and submits information to the group <a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"ZRA Transfers"</a> in the following format:</p>
                
                <div class="image-container">
                    <img src="images/VALVES_6.png" alt="Example of ZRA Acceptance at Warehouse Information Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of ZRA Acceptance at Warehouse Information Posting</em></p>
                </div>
                
                <p>At this point, the process of shipment and acceptance of ZRA from hydrotesting is completed.</p>
            `,
                zh: `
                <h3>阶段3. 仓库接收通过水压试验的ZRA</h3>
                
                <p>车辆到达场地并卸货。验收时，仓库管理员核对转移清单中的GM编号，卸车，然后在转移清单中填写实际放置货物的存储场地，并向群组 <a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">"ZRA转移"</a> 提交信息，格式如下：</p>
                
                <div class="image-container">
                    <img src="images/VALVES_6.png" alt="仓库接收ZRA信息发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>仓库接收ZRA信息发布示例</em></p>
                </div>
                
                <p>至此，ZRA从水压试验的发送和接收过程完成。</p>
            `
            }
        },
        // Глава 4: Документация
        '4.1': {
            title: {
                ru: 'Правила оформления ТН',
                en: 'Transportation Bill Formatting Rules',
                zh: '运输单格式规则'
            },
            content: {
                ru: `
                <h3>Общие требования</h3>
                <p>Транспортная накладная в редакции Постановления Правительства РФ от 30.11.2021 №2116 состоит из 12 пунктов.</p>
                
                <p>В ТН необходимо обращать внимание на наличие:</p>
                
                <h3>Обязательные пункты для проверки</h3>
                
                <h4>a) Номер ТН</h4>
                <p>Проверить наличие номера транспортной накладной.</p>
                
                <h4>b) Пункт 2 «Грузополучатель»</h4>
                <p>Должна стоять ООО «Китайская национальная химическая инженерная и строительная корпорация севен».</p>
                
                <h4>c) Пункт 3 «Груз»</h4>
                <p>Наименование груза и количество мест. Могут присутствовать номера ГМ. Если информация отсутствует или неверная, необходимо дописать от руки, написать «Исправленному верить», подписать.</p>
                
                <div class="image-container">
                    <img src="images/image_17_1.png" alt="Пример пункта 3 ТН" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример пункта 3 ТН с исправлениями</em></p>
                </div>
                
                <h4>d) Пункт 4 «Сопроводительные документы»</h4>
                <p>Должны присутствовать номера УЛ. Если информация отсутствует, необходимо дописать от руки, написать «Исправленному верить», подписать.</p>
                
                <h4>e) Пункт 8 «Прием груза»</h4>
                <p>Должна стоять подпись водителя за прием груза от грузоотправителя.</p>
                <p><strong style="color: #dc2626;">БЕЗ ЭТОЙ ПОДПИСИ ТН НЕ ПОДПИСЫВАТЬ</strong></p>
                
                <h4>f) Пункт 10 «Выдача груза»</h4>
                <p>Подпись водителя за выдачу груза.</p>
                <p><strong style="color: #dc2626;">БЕЗ ЭТОЙ ПОДПИСИ ТН НЕ ПОДПИСЫВАТЬ</strong></p>
                
                <p>Дополнительно по пункту 10: сверить количество грузовых мест (должно совпадать с пунктом 3), проставить дату приемки ТМЦ, время прибытия и убытия ТС, именной штамп, подпись и печать.</p>
                
                <h3>Пример заполненной ТН</h3>
                <div class="image-container">
                    <img src="images/image_18_1.png" alt="Пример заполненной ТН - первая страница" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <img src="images/image_19_1.png" alt="Пример заполненной ТН - вторая страница" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример заполненной транспортной накладной</em></p>
                </div>
            `,
                en: `
                <h3>General Requirements</h3>
                <p>The Transportation Bill in the version of the Decree of the Government of the Russian Federation dated 30.11.2021 No. 2116 consists of 12 items.</p>
                
                <p>In the TB, attention should be paid to the presence of:</p>
                
                <h3>Mandatory Items for Verification</h3>
                
                <h4>a) TB Number</h4>
                <p>Check for the presence of the transportation bill number.</p>
                
                <h4>b) Item 2 "Consignee"</h4>
                <p>Should indicate LLC "Chinese National Chemical Engineering and Construction Corporation Seven".</p>
                
                <h4>c) Item 3 "Cargo"</h4>
                <p>Cargo name and number of units. GM numbers may be present. If information is missing or incorrect, it is necessary to add it by hand, write "Believe corrected", and sign.</p>
                
                <div class="image-container">
                    <img src="images/image_17_1.png" alt="Example of TB Item 3" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of TB Item 3 with corrections</em></p>
                </div>
                
                <h4>d) Item 4 "Accompanying Documents"</h4>
                <p>PL numbers must be present. If information is missing, it is necessary to add it by hand, write "Believe corrected", and sign.</p>
                
                <h4>e) Item 8 "Cargo Acceptance"</h4>
                <p>There should be a driver's signature for cargo acceptance from the consignor.</p>
                <p><strong style="color: #dc2626;">WITHOUT THIS SIGNATURE, DO NOT SIGN THE TB</strong></p>
                
                <h4>f) Item 10 "Cargo Issuance"</h4>
                <p>Driver's signature for cargo issuance.</p>
                <p><strong style="color: #dc2626;">WITHOUT THIS SIGNATURE, DO NOT SIGN THE TB</strong></p>
                
                <p>Additionally for item 10: verify the number of cargo units (should match item 3), enter the material acceptance date, vehicle arrival and departure time, name stamp, signature and seal.</p>
                
                <h3>Example of Completed TB</h3>
                <div class="image-container">
                    <img src="images/image_18_1.png" alt="Example of Completed TB - First Page" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <img src="images/image_19_1.png" alt="Example of Completed TB - Second Page" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Completed Transportation Bill</em></p>
                </div>
            `,
                zh: `
                <h3>一般要求</h3>
                <p>根据俄罗斯联邦政府2021年11月30日第2116号法令版本的运输单包含12项。</p>
                
                <p>运输单中需注意以下内容：</p>
                
                <h3>必检项目</h3>
                
                <h4>a) 运输单号</h4>
                <p>检查是否存在运输单号。</p>
                
                <h4>b) 第2项"收货人"</h4>
                <p>应标注"中国化学工程第七建设有限公司"。</p>
                
                <h4>c) 第3项"货物"</h4>
                <p>货物名称和件数。可能包含GM编号。如信息缺失或不正确，需手写补充，标注"更正无误"，并签字。</p>
                
                <div class="image-container">
                    <img src="images/image_17_1.png" alt="运输单第3项示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>带更正的运输单第3项示例</em></p>
                </div>
                
                <h4>d) 第4项"随附文件"</h4>
                <p>必须包含装箱单编号。如信息缺失，需手写补充，标注"更正无误"，并签字。</p>
                
                <h4>e) 第8项"货物接收"</h4>
                <p>应有司机从发货人处接收货物的签名。</p>
                <p><strong style="color: #dc2626;">无此签名，不得签署运输单</strong></p>
                
                <h4>f) 第10项"货物发放"</h4>
                <p>司机发放货物的签名。</p>
                <p><strong style="color: #dc2626;">无此签名，不得签署运输单</strong></p>
                
                <p>第10项补充：核对货物单位数量（应与第3项一致），填写材料验收日期、车辆到达和离开时间、姓名印章、签名和公章。</p>
                
                <h3>已填写运输单示例</h3>
                <div class="image-container">
                    <img src="images/image_18_1.png" alt="已填写运输单示例 - 第一页" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <img src="images/image_19_1.png" alt="已填写运输单示例 - 第二页" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>已填写运输单示例</em></p>
                </div>
            `
            }
        },
        '4.2': {
            title: {
                ru: 'Правила Оформления CMR',
                en: 'CMR Formatting Rules',
                zh: 'CMR格式规则'
            },
            content: {
                ru: `
                <h3>Обязательные пункты для проверки</h3>
                <p>В CMR необходимо обращать внимание на наличие:</p>
                
                <h4>a) Номер CMR</h4>
                <p>Проверить наличие номера международной товарно-транспортной накладной.</p>
                
                <h4>b) Пункт 2 «Получатель»</h4>
                <p>Должно стоять ООО «БХК»/ «ВСС» LLC.</p>
                
                <h4>c) Пункт 5 «Прилагаемые документы»</h4>
                <p>Должен присутствовать Номер УЛ.</p>
                
                <h4>d) Пункт 6, 7, 8, 9</h4>
                <p>Наименование груза, род упаковки, количество и вес.</p>
                
                <h4>e) Оригинальная печать</h4>
                <p>Забираем всегда ОРИГИНАЛ для предоставления заказчику. Если водители требуют отдать им оригинал – документы не подписывать.</p>
                
                <h4>f) Пункт 24</h4>
                <p>Проставляется дата приемки, время прибытия и убытия, ставится именной штамп, печать СС7 и подпись.</p>
                
                <h3>Пример оформления CMR</h3>
                <div class="image-container">
                    <img src="images/image_20_1.png" alt="Пример CMR" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример оформления CMR</em></p>
                </div>
            `,
                en: `
                <h3>Mandatory Items for Verification</h3>
                <p>In CMR, attention should be paid to the presence of:</p>
                
                <h4>a) CMR Number</h4>
                <p>Check for the presence of the international consignment note number.</p>
                
                <h4>b) Item 2 "Consignee"</h4>
                <p>Should indicate LLC "BHK"/ "VSS" LLC.</p>
                
                <h4>c) Item 5 "Attached Documents"</h4>
                <p>PL Number must be present.</p>
                
                <h4>d) Items 6, 7, 8, 9</h4>
                <p>Cargo name, type of packaging, quantity and weight.</p>
                
                <h4>e) Original Seal</h4>
                <p>We always take the ORIGINAL for provision to the customer. If drivers demand to give them the original – do not sign the documents.</p>
                
                <h4>f) Item 24</h4>
                <p>Enter the acceptance date, arrival and departure time, place name stamp, SS7 seal and signature.</p>
                
                <h3>Example of CMR Formatting</h3>
                <div class="image-container">
                    <img src="images/image_20_1.png" alt="Example of CMR" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of CMR Formatting</em></p>
                </div>
            `,
                zh: `
                <h3>必检项目</h3>
                <p>CMR中需注意以下内容：</p>
                
                <h4>a) CMR编号</h4>
                <p>检查是否存在国际货运单编号。</p>
                
                <h4>b) 第2项"收货人"</h4>
                <p>应标注"BHK有限责任公司"/"VSS有限责任公司"。</p>
                
                <h4>c) 第5项"随附文件"</h4>
                <p>必须包含装箱单编号。</p>
                
                <h4>d) 第6、7、8、9项</h4>
                <p>货物名称、包装类型、数量和重量。</p>
                
                <h4>e) 原始印章</h4>
                <p>我们始终保留原件以提供给客户。如司机要求将原件交给他们，不得签署文件。</p>
                
                <h4>f) 第24项</h4>
                <p>填写验收日期、到达和离开时间、姓名印章、SS7公章和签名。</p>
                
                <h3>CMR格式示例</h3>
                <div class="image-container">
                    <img src="images/image_20_1.png" alt="CMR示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>CMR格式示例</em></p>
                </div>
            `
            }
        },
        '4.3': {
            title: {
                ru: 'Правила заполнения «Ведомости на перемещение и приемку ТМЦ»',
                en: 'Rules for Filling Out "Transfer and Acceptance Statement for Materials"',
                zh: '填写"材料转移和验收清单"规则'
            },
            content: {
                ru: `
                <p>Ведомость на перемещение и приемку заполняется в трех случаях:</p>
                
                <ol>
                    <li><strong>Перемещение ТМЦ между складами.</strong> Например, перемещение с С23-1 на Ангар 08-07. Либо с С23-2 на С23-5. Либо с ангара 08-01 на ангар 07-10.</li>
                    <li><strong>Перемещение ТМЦ внутри склада.</strong> Например, перемещение в рамках одного ангара 08-01. Либо по складу С23-1.</li>
                    <li><strong>При приемке большого количества грузомест, размещающихся в разных складских ячейках.</strong> Применимо по большей части к ангарным складам. Например, приемка 20 ГМ на 20 разных ячеек. При приемке подобного рода кладовщик заполняет данную Ведомость и пересылает ее в Учет в группу «ТН для учета» вместе с ТН, фото, и полной информацией по приемке.</li>
                </ol>
                
                <h3>Необходимо указывать:</h3>
                
                <h4>a) Вид перемещения</h4>
                <p>Необходимо подчеркнуть вид перемещения материала.</p>
                
                <h4>b) Дату перемещения</h4>
                <p>Указать дату проведения перемещения.</p>
                
                <h4>c) Склад отправитель</h4>
                <p>Указать склад отправитель, если перемещение производится между складами.</p>
                
                <h4>d) Склад получатель</h4>
                <p>Указать склад получатель, он же склад, в котором производится перемещение, либо в который принимается материал.</p>
                
                <h4>e) ФИО ответственного лица</h4>
                <p>Указать Фамилию И.О.</p>
                
                <h4>f) Номера грузовых мест</h4>
                <p>Указывать номера грузовых мест.</p>
                
                <h4>g) Наименование и характеристики ТМЦ</h4>
                <p>При возможности указывать наименование и характеристику ТМЦ, которая поможет Учету идентифицировать ГМ. Можно прописывать общее номенклатурное название (труба, кабель, электрика, пожарные з/ч, ЗРА итд), если на ГМ нет УЛа, в котором прописано наименованием материала.</p>
                
                <h4>h) Ячейка/Лот хранения (откуда)</h4>
                <p>Указать ячейку/лот хранения, откуда отправляется материал в случае перемещения между складами и внутри склада.</p>
                
                <h4>i) Ячейка/Лот хранения (куда)</h4>
                <p>Указать ячейку/лот хранения, куда поступает материал.</p>
                
                <h4>j) Номер УЛ, ТН, примечание</h4>
                <p>Указать номер УЛа, если он размещен на материале, номер ТН (в случае приемки ТМЦ в ангар), примечание (доп информация, помогающая идентифицировать материал в 1С).</p>
                
                <div class="image-container">
                    <img src="images/4.3.png" alt="Пример ведомости на перемещение" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример ведомости на перемещение и приемку ТМЦ</em></p>
                </div>
            `,
                en: `
                <p>The Transfer and Acceptance Statement is filled out in three cases:</p>
                
                <ol>
                    <li><strong>Transfer of materials between warehouses.</strong> For example, transfer from S23-1 to Hangar 08-07. Or from S23-2 to S23-5. Or from hangar 08-01 to hangar 07-10.</li>
                    <li><strong>Transfer of materials within a warehouse.</strong> For example, transfer within one hangar 08-01. Or within warehouse S23-1.</li>
                    <li><strong>When accepting a large number of cargo units placed in different warehouse cells.</strong> Mostly applicable to hangar warehouses. For example, acceptance of 20 GMs in 20 different cells. When accepting this type, the warehouse keeper fills out this Statement and sends it to Accounting in the group "TB for Accounting" together with TB, photos, and complete acceptance information.</li>
                </ol>
                
                <h3>Must be specified:</h3>
                
                <h4>a) Type of transfer</h4>
                <p>It is necessary to underline the type of material transfer.</p>
                
                <h4>b) Transfer date</h4>
                <p>Specify the date of the transfer.</p>
                
                <h4>c) Sender warehouse</h4>
                <p>Specify the sender warehouse if transfer is made between warehouses.</p>
                
                <h4>d) Receiver warehouse</h4>
                <p>Specify the receiver warehouse, which is the warehouse where the transfer is made, or where the material is accepted.</p>
                
                <h4>e) Responsible person's full name</h4>
                <p>Specify Last Name First Name Middle Initial.</p>
                
                <h4>f) Cargo unit numbers</h4>
                <p>Specify cargo unit numbers.</p>
                
                <h4>g) Material name and characteristics</h4>
                <p>If possible, specify the name and characteristics of materials that will help Accounting identify the GM. You can write a general nomenclature name (pipe, cable, electrical, fire parts, ZRA, etc.) if there is no PL on the GM that specifies the material name.</p>
                
                <h4>h) Storage cell/lot (from)</h4>
                <p>Specify the storage cell/lot from which the material is sent in case of transfer between warehouses and within a warehouse.</p>
                
                <h4>i) Storage cell/lot (to)</h4>
                <p>Specify the storage cell/lot where the material is received.</p>
                
                <h4>j) PL number, TB number, notes</h4>
                <p>Specify the PL number if it is placed on the material, TB number (in case of material acceptance in a hangar), notes (additional information helping to identify the material in 1C).</p>
                
                <div class="image-container">
                    <img src="images/4.3.png" alt="Example of Transfer Statement" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Transfer and Acceptance Statement for Materials</em></p>
                </div>
            `,
                zh: `
                <p>转移和验收清单在以下三种情况下填写：</p>
                
                <ol>
                    <li><strong>仓库间材料转移。</strong> 例如，从S23-1转移至机库08-07。或从S23-2转移至S23-5。或从机库08-01转移至机库07-10。</li>
                    <li><strong>仓库内材料转移。</strong> 例如，在机库08-01内转移。或在仓库S23-1内转移。</li>
                    <li><strong>验收大量放置在不同仓库单元中的货物单位时。</strong> 主要适用于机库仓库。例如，在20个不同单元中验收20个GM。验收此类材料时，仓库管理员填写此清单，并将其与运输单、照片和完整验收信息一起发送至会计部门的"待核算运输单"群组。</li>
                </ol>
                
                <h3>必须注明：</h3>
                
                <h4>a) 转移类型</h4>
                <p>需标注材料转移类型。</p>
                
                <h4>b) 转移日期</h4>
                <p>注明转移日期。</p>
                
                <h4>c) 发货仓库</h4>
                <p>如为仓库间转移，需注明发货仓库。</p>
                
                <h4>d) 收货仓库</h4>
                <p>注明收货仓库，即进行转移的仓库或接收材料的仓库。</p>
                
                <h4>e) 负责人姓名</h4>
                <p>注明姓氏、名字和中间名首字母。</p>
                
                <h4>f) 货物单位编号</h4>
                <p>注明货物单位编号。</p>
                
                <h4>g) 材料名称和特征</h4>
                <p>如可能，注明有助于会计部门识别GM的材料名称和特征。如GM上无指定材料名称的装箱单，可标注一般名称（管道、电缆、电气、消防零件、ZRA等）。</p>
                
                <h4>h) 存储单元/场地（来源）</h4>
                <p>如为仓库间或仓库内转移，需注明材料发出的存储单元/场地。</p>
                
                <h4>i) 存储单元/场地（去向）</h4>
                <p>注明材料接收的存储单元/场地。</p>
                
                <h4>j) 装箱单编号、运输单编号、备注</h4>
                <p>如材料上贴有装箱单，需注明装箱单编号；如为机库验收材料，需注明运输单编号；备注（有助于在1C系统中识别材料的补充信息）。</p>
                
                <div class="image-container">
                    <img src="images/4.3.png" alt="转移清单示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>材料转移和验收清单示例</em></p>
                </div>
            `
            }
        },
        '4.4': {
            title: {
                ru: 'Содержание Упаковочного Листа (УЛ)',
                en: 'Contents of Packing List (PL)',
                zh: '装箱单（PL）内容'
            },
            content: {
                ru: `
                <h3>Назначение упаковочного листа</h3>
                <p>Упаковочный лист содержит список грузовых мест, их общее содержимое, массогабаритные характеристики, коды хранения и т.д. Упаковочный Лист должен прилагаться к ТН. Если в ТН в пункте 3 прописано только количество ГМ и не прописаны номера ГМ, а в пункте 4 присутствует номер УЛ, то следует при приемке соотносить принимаемые ГМ (которые должны иметь наклеенные УЛ и Ведомости Грузового Места) с содержанием УЛ.</p>
                
                <h3>Содержимое упаковочного листа</h3>
                
                <h4>a) Номер Упаковочного Листа</h4>
                <p>Должен совпадать с пунктом 4 отгрузочного документа («Сопроводительные документы»).</p>
                
                <h4>b) Уникальный Идентификатор Грузового Места (УИГМ)</h4>
                <p>Количество УИГМ должно совпадать с физическим количеством грузовых мест.</p>
                
                <h4>c) Таговый номер</h4>
                <p>Материалам присваивается таговый номер. Один таговый номер может относиться к многим номенклатурным позициям. Например, «TAG-001» для буровой установки, где запасные части как ротор, анкерные болты, измерительные приборы, долота также имеют «TAG-001». В таких случаях материал должен идентифицироваться по его Наименованию и Артикулу поставщика. Для металлоконструкций таговый номер индивидуальный и используется в схеме сборки. Например, балка с таговым номером EPS-0000-12200-11-4303-111-87-149-001 присутствует на объекте в единственном экземпляре.</p>
                
                <div class="image-container">
                    <img src="images/image_22_1.png" alt="Пример тагового номера на материале" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример тагового номера на материале</em></p>
                </div>
                
                <h4>d) Артикул поставщика</h4>
                <p>Актуален, когда идентификация по TAG номеру и описанию материала невозможна.</p>
                
                <h4>e) Наименование товара и его характеристика</h4>
                <p>Основной маркер для идентификации содержимого.</p>
                
                <h4>f) Единица измерения по данной номенклатурной позиции</h4>
                <p>Стандарт «шт.». Для трубной продукции актуально «м». Для комплектных материалов «компл».</p>
                
                <h4>g) Количество</h4>
                <p>Количество по номенклатурной позиции.</p>
                
                <h4>h) Габаритные размеры</h4>
                <p>Размеры указываются для каждого грузового места, которое может содержать несколько (много) номенклатурных позиций.</p>
                <p>Для зарубежных материалов, прибывающих авиацией, физическая маркировка часто отсутствует. В таких случаях размеры и вес, указанные в упаковочном листе, являются важными инструментами для идентификации грузовых мест для последующей маркировки.</p>
                
                <h4>i) Вес брутто</h4>
                <p>Вес брутто грузового места.</p>
                
                <h4>j) Код хранения</h4>
                <p>См. <a href="#" onclick="event.preventDefault(); navigateTo('chapter2'); return false;" style="color: #2563eb; text-decoration: none; font-weight: 600; cursor: pointer;">главу «Хранение» 🔗</a>.</p>
                
                <h4>k) Индекс штабелирования</h4>
                <p>Если указаны кг, то это количество кг, которые допустимо поставить на ГМ сверху. Если указана цифра (0, 1, 2), то это количество ГМ с таким же весом, которые допустимо поставить на ГМ сверху. При индексе штабелирования 0 ставить что-либо на ГМ сверху запрещено.</p>
                
                <div class="image-container">
                    <img src="images/image_23_1.png" alt="Пример упаковочного листа" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример упаковочного листа</em></p>
                </div>
            `,
                en: `
                <h3>Purpose of Packing List</h3>
                <p>The Packing List contains a list of cargo units, their general contents, weight and dimensional characteristics, storage codes, etc. The Packing List must be attached to the TB. If in the TB item 3 only the number of GMs is specified and GM numbers are not specified, and item 4 contains a PL number, then during acceptance the accepted GMs (which should have attached PLs and Cargo Unit Statements) should be correlated with the PL contents.</p>
                
                <h3>Packing List Contents</h3>
                
                <h4>a) Packing List Number</h4>
                <p>Must match item 4 of the shipping document ("Accompanying Documents").</p>
                
                <h4>b) Unique Cargo Unit Identifier (UCUI)</h4>
                <p>The number of UCUIs must match the physical number of cargo units.</p>
                
                <h4>c) Tag Number</h4>
                <p>Materials are assigned a tag number. One tag number can refer to many nomenclature positions. For example, "TAG-001" for a drilling rig, where spare parts such as rotor, anchor bolts, measuring instruments, drill bits also have "TAG-001". In such cases, the material should be identified by its Name and Supplier Article Number. For metal structures, the tag number is individual and used in the assembly diagram. For example, a beam with tag number EPS-0000-12200-11-4303-111-87-149-001 is present at the site in a single copy.</p>
                
                <div class="image-container">
                    <img src="images/image_22_1.png" alt="Example of Tag Number on Material" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Tag Number on Material</em></p>
                </div>
                
                <h4>d) Supplier Article Number</h4>
                <p>Relevant when identification by TAG number and material description is impossible.</p>
                
                <h4>e) Product Name and Characteristics</h4>
                <p>Main marker for identifying contents.</p>
                
                <h4>f) Unit of Measurement for this Nomenclature Position</h4>
                <p>Standard "pcs.". For pipe products "m" is relevant. For complete materials "set".</p>
                
                <h4>g) Quantity</h4>
                <p>Quantity per nomenclature position.</p>
                
                <h4>h) Dimensional Sizes</h4>
                <p>Sizes are indicated for each cargo unit, which may contain several (many) nomenclature positions.</p>
                <p>For foreign materials arriving by air, physical marking is often absent. In such cases, sizes and weight specified in the packing list are important tools for identifying cargo units for subsequent marking.</p>
                
                <h4>i) Gross Weight</h4>
                <p>Gross weight of the cargo unit.</p>
                
                <h4>j) Storage Code</h4>
                <p>See <a href="#" onclick="event.preventDefault(); navigateTo('chapter2'); return false;" style="color: #2563eb; text-decoration: none; font-weight: 600; cursor: pointer;">chapter "Storage" 🔗</a>.</p>
                
                <h4>k) Stacking Index</h4>
                <p>If kg is indicated, this is the number of kg that can be placed on top of the GM. If a number (0, 1, 2) is indicated, this is the number of GMs with the same weight that can be placed on top of the GM. With a stacking index of 0, placing anything on top of the GM is prohibited.</p>
                
                <div class="image-container">
                    <img src="images/image_23_1.png" alt="Example of Packing List" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Packing List</em></p>
                </div>
            `,
                zh: `
                <h3>装箱单的用途</h3>
                <p>装箱单包含货物单位列表、其总内容、重量和尺寸特性、存储代码等。装箱单必须附在运输单上。如运输单第3项仅标注GM数量而未标注GM编号，且第4项包含装箱单编号，验收时需将接受的GM（应贴有装箱单和货物单位清单）与装箱单内容对应。</p>
                
                <h3>装箱单内容</h3>
                
                <h4>a) 装箱单编号</h4>
                <p>必须与发货文件第4项（"随附文件"）一致。</p>
                
                <h4>b) 货物单位唯一标识符（UCUI）</h4>
                <p>UCUI数量必须与实际货物单位数量一致。</p>
                
                <h4>c) 标签编号</h4>
                <p>材料分配有标签编号。一个标签编号可对应多个名称位置。例如，钻机的"TAG-001"，其中转子、锚栓、测量仪器、钻头等备件也使用"TAG-001"。在此情况下，材料应通过其名称和供应商货号识别。对于金属结构，标签编号是唯一的，用于装配图。例如，标签编号为EPS-0000-12200-11-4303-111-87-149-001的梁在现场仅有一件。</p>
                
                <div class="image-container">
                    <img src="images/image_22_1.png" alt="材料上标签编号示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>材料上标签编号示例</em></p>
                </div>
                
                <h4>d) 供应商货号</h4>
                <p>当无法通过TAG编号和材料描述识别时使用。</p>
                
                <h4>e) 产品名称和特征</h4>
                <p>识别内容的主要标记。</p>
                
                <h4>f) 该名称位置的计量单位</h4>
                <p>标准为"件"。管材产品使用"米"。成套材料使用"套"。</p>
                
                <h4>g) 数量</h4>
                <p>每个名称位置的数量。</p>
                
                <h4>h) 尺寸规格</h4>
                <p>尺寸针对每个货物单位标注，一个货物单位可能包含多个（许多）名称位置。</p>
                <p>对于空运到达的国外材料，通常缺少物理标记。在此情况下，装箱单中标注的尺寸和重量是识别货物单位以便后续标记的重要工具。</p>
                
                <h4>i) 毛重</h4>
                <p>货物单位的毛重。</p>
                
                <h4>j) 存储代码</h4>
                <p>参见 <a href="#" onclick="event.preventDefault(); navigateTo('chapter2'); return false;" style="color: #2563eb; text-decoration: none; font-weight: 600; cursor: pointer;">章节"存储" 🔗</a>。</p>
                
                <h4>k) 堆码指数</h4>
                <p>如标注为公斤，则为可在GM顶部放置的公斤数。如标注为数字（0、1、2），则为可在GM顶部放置的相同重量GM数量。堆码指数为0时，禁止在GM顶部放置任何物品。</p>
                
                <div class="image-container">
                    <img src="images/image_23_1.png" alt="装箱单示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>装箱单示例</em></p>
                </div>
            `
            }
        },
        '4.5': {
            title: {
                ru: 'Содержание Ведомости Грузового места',
                en: 'Contents of Cargo Unit Statement',
                zh: '货物单位清单内容'
            },
            content: {
                ru: `
                <h3>Назначение ведомости грузового места</h3>
                <p>Ведомость грузового места содержит подробную информацию о каждом грузовом месте, включая все номенклатурные позиции, их количество, вес, размеры и другие характеристики.</p>
                
                <h3>Содержимое ведомости грузового места</h3>
                
                <h4>a) Номер Упаковочного Листа</h4>
                <p>Должен совпадать с пунктом 4 отгрузочного документа («Сопроводительные документы»).</p>
                
                <h4>b) Габаритные размеры Грузового Места</h4>
                <p>Размеры грузового места в сантиметрах (длина x ширина x высота).</p>
                
                <h4>c) Код хранения</h4>
                <p>См. <a href="#" onclick="event.preventDefault(); navigateTo('chapter2'); return false;" style="color: #2563eb; text-decoration: none; font-weight: 600; cursor: pointer;">главу «Хранение» 🔗</a>.</p>
                
                <h4>d) Индекс штабелирования</h4>
                <p>Если указаны кг, то это количество кг, которые допустимо поставить на ГМ сверху. Если указана цифра (0, 1, 2), то это количество ГМ с таким же весом, которые допустимо поставить на ГМ сверху. При индексе штабелирования 0 ставить что-либо на ГМ сверху запрещено.</p>
                
                <h4>e) Таговый номер</h4>
                <p>Материалам присваивается таговый номер. Один таговый номер может относиться к многим номенклатурным позициям. В таких случаях материал должен идентифицироваться по его Наименованию и Артикулу поставщика.</p>
                
                <h4>f) Артикул поставщика</h4>
                <p>Актуален, когда идентификация по таговому номеру и описанию материала невозможна.</p>
                
                <h4>g) Уникальный Идентификатор Грузового Места (УИГМ)</h4>
                <p>УИГМ не должен повторяться для каждой отдельной поставки, но дубликаты для разных упаковочных листов могут встречаться, что требует сверки УИГМ-УЛ.</p>
                
                <h4>h) Наименование товара</h4>
                <p>Подробное описание материала и его характеристики.</p>
                
                <h4>i) Единицы измерения</h4>
                <p>Могут не совпадать с единицами в заявках (например, трубы приходят в штуках, выдаются в метрах).</p>
                
                <h4>j) Количество</h4>
                <p>Количество по каждой номенклатурной позиции.</p>
                
                <h4>k) Вес Брутто</h4>
                <p>Общий вес грузового места.</p>
                
                <h3>Пример ведомости грузового места</h3>
                <div class="image-container">
                    <img src="images/image_25_1.png" alt="Пример ведомости грузового места" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример ведомости грузового места</em></p>
                </div>
            `,
                en: `
                <h3>Purpose of Cargo Unit Statement</h3>
                <p>The Cargo Unit Statement contains detailed information about each cargo unit, including all nomenclature positions, their quantity, weight, dimensions and other characteristics.</p>
                
                <h3>Cargo Unit Statement Contents</h3>
                
                <h4>a) Packing List Number</h4>
                <p>Must match item 4 of the shipping document ("Accompanying Documents").</p>
                
                <h4>b) Cargo Unit Dimensional Sizes</h4>
                <p>Cargo unit dimensions in centimeters (length x width x height).</p>
                
                <h4>c) Storage Code</h4>
                <p>See <a href="#" onclick="event.preventDefault(); navigateTo('chapter2'); return false;" style="color: #2563eb; text-decoration: none; font-weight: 600; cursor: pointer;">chapter "Storage" 🔗</a>.</p>
                
                <h4>d) Stacking Index</h4>
                <p>If kg is indicated, this is the number of kg that can be placed on top of the GM. If a number (0, 1, 2) is indicated, this is the number of GMs with the same weight that can be placed on top of the GM. With a stacking index of 0, placing anything on top of the GM is prohibited.</p>
                
                <h4>e) Tag Number</h4>
                <p>Materials are assigned a tag number. One tag number can refer to many nomenclature positions. In such cases, the material should be identified by its Name and Supplier Article Number.</p>
                
                <h4>f) Supplier Article Number</h4>
                <p>Relevant when identification by tag number and material description is impossible.</p>
                
                <h4>g) Unique Cargo Unit Identifier (UCUI)</h4>
                <p>UCUI should not be repeated for each individual delivery, but duplicates for different packing lists may occur, which requires verification of UCUI-PL.</p>
                
                <h4>h) Product Name</h4>
                <p>Detailed description of the material and its characteristics.</p>
                
                <h4>i) Units of Measurement</h4>
                <p>May not match units in requests (for example, pipes arrive in pieces, issued in meters).</p>
                
                <h4>j) Quantity</h4>
                <p>Quantity per each nomenclature position.</p>
                
                <h4>k) Gross Weight</h4>
                <p>Total weight of the cargo unit.</p>
                
                <h3>Example of Cargo Unit Statement</h3>
                <div class="image-container">
                    <img src="images/image_25_1.png" alt="Example of Cargo Unit Statement" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Cargo Unit Statement</em></p>
                </div>
            `,
                zh: `
                <h3>货物单位清单的用途</h3>
                <p>货物单位清单包含每个货物单位的详细信息，包括所有名称位置、其数量、重量、尺寸和其他特征。</p>
                
                <h3>货物单位清单内容</h3>
                
                <h4>a) 装箱单编号</h4>
                <p>必须与发货文件第4项（"随附文件"）一致。</p>
                
                <h4>b) 货物单位尺寸规格</h4>
                <p>货物单位尺寸（厘米）（长 x 宽 x 高）。</p>
                
                <h4>c) 存储代码</h4>
                <p>参见 <a href="#" onclick="event.preventDefault(); navigateTo('chapter2'); return false;" style="color: #2563eb; text-decoration: none; font-weight: 600; cursor: pointer;">章节"存储" 🔗</a>。</p>
                
                <h4>d) 堆码指数</h4>
                <p>如标注为公斤，则为可在GM顶部放置的公斤数。如标注为数字（0、1、2），则为可在GM顶部放置的相同重量GM数量。堆码指数为0时，禁止在GM顶部放置任何物品。</p>
                
                <h4>e) 标签编号</h4>
                <p>材料分配有标签编号。一个标签编号可对应多个名称位置。在此情况下，材料应通过其名称和供应商货号识别。</p>
                
                <h4>f) 供应商货号</h4>
                <p>当无法通过标签编号和材料描述识别时使用。</p>
                
                <h4>g) 货物单位唯一标识符（UCUI）</h4>
                <p>UCUI不应在每次单独交货中重复，但不同装箱单可能出现重复，这需要核对UCUI-装箱单。</p>
                
                <h4>h) 产品名称</h4>
                <p>材料的详细描述及其特征。</p>
                
                <h4>i) 计量单位</h4>
                <p>可能与申请中的单位不一致（例如，管道以件到达，以米发放）。</p>
                
                <h4>j) 数量</h4>
                <p>每个名称位置的数量。</p>
                
                <h4>k) 毛重</h4>
                <p>货物单位的总重量。</p>
                
                <h3>货物单位清单示例</h3>
                <div class="image-container">
                    <img src="images/image_25_1.png" alt="货物单位清单示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>货物单位清单示例</em></p>
                </div>
            `
            }
        },
        '4.6': {
            title: {
                ru: 'Содержание Shipping Mark',
                en: 'Contents of Shipping Mark',
                zh: 'Shipping Mark内容'
            },
            content: {
                ru: `
                <h3>Назначение Shipping Mark</h3>
                <p>Shipping Mark/Грузовая маркировка присутствует только на импортных поставках. В отличие от «Ведомость Грузового Места» в нем НЕ содержится подробное описание каждой номенклатурной позиции и количества материала по номенклатуре. Подробное описание пунктов смотрите в главе <a href="#4.4" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Содержание УЛ» 🔗</a>. Они пересекаются.</p>
                
                <h3>Содержимое Shipping Mark</h3>
                
                <h4>a) Грузополучатель</h4>
                <p>ООО «Китайская Национальная Химическая Инженерная и Строительная Корпорация Севен»</p>
                
                <h4>b) Таговый номер</h4>
                
                <h4>c) Наименование поставляемого изделия</h4>
                
                <h4>d) Номер Грузового Места</h4>
                
                <h4>e) Размеры Грузового Места</h4>
                
                <h4>d) Вес Брутто</h4>
                
                <h4>e) Номер УЛ</h4>
                
                <h4>f) Индекс Штабелирования</h4>
                
                <h4>g) Код хранения</h4>
                
                <h3>Пример Shipping Mark</h3>
                <div class="image-container">
                    <img src="images/image_26_1.png" alt="Пример Shipping Mark" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример грузовой маркировки</em></p>
                </div>
            `,
                en: `
                <h3>Purpose of Shipping Mark</h3>
                <p>Shipping Mark/Cargo Marking is present only on import deliveries. Unlike "Cargo Unit Statement", it does NOT contain a detailed description of each nomenclature position and quantity of material by nomenclature. For detailed description of items, see chapter <a href="#4.4" style="color: #2563eb; text-decoration: none; font-weight: 600;">"Contents of PL" 🔗</a>. They overlap.</p>
                
                <h3>Shipping Mark Contents</h3>
                
                <h4>a) Consignee</h4>
                <p>LLC "Chinese National Chemical Engineering and Construction Corporation Seven"</p>
                
                <h4>b) Tag Number</h4>
                
                <h4>c) Name of Supplied Product</h4>
                
                <h4>d) Cargo Unit Number</h4>
                
                <h4>e) Cargo Unit Dimensions</h4>
                
                <h4>d) Gross Weight</h4>
                
                <h4>e) PL Number</h4>
                
                <h4>f) Stacking Index</h4>
                
                <h4>g) Storage Code</h4>
                
                <h3>Example of Shipping Mark</h3>
                <div class="image-container">
                    <img src="images/image_26_1.png" alt="Example of Shipping Mark" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Cargo Marking</em></p>
                </div>
            `,
                zh: `
                <h3>Shipping Mark的用途</h3>
                <p>Shipping Mark/货物标记仅出现在进口交货中。与"货物单位清单"不同，它不包含每个名称位置和按名称的材料数量的详细描述。详细项目说明，参见章节 <a href="#4.4" style="color: #2563eb; text-decoration: none; font-weight: 600;">"装箱单内容" 🔗</a>。它们有重叠。</p>
                
                <h3>Shipping Mark内容</h3>
                
                <h4>a) 收货人</h4>
                <p>中国化学工程第七建设有限公司</p>
                
                <h4>b) 标签编号</h4>
                
                <h4>c) 供应产品名称</h4>
                
                <h4>d) 货物单位编号</h4>
                
                <h4>e) 货物单位尺寸</h4>
                
                <h4>d) 毛重</h4>
                
                <h4>e) 装箱单编号</h4>
                
                <h4>f) 堆码指数</h4>
                
                <h4>g) 存储代码</h4>
                
                <h3>Shipping Mark示例</h3>
                <div class="image-container">
                    <img src="images/image_26_1.png" alt="Shipping Mark示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>货物标记示例</em></p>
                </div>
            `
            }
        },
        '4.7': {
            title: {
                ru: 'Содержание Заявки на Выдачу',
                en: 'Contents of Issuance Request',
                zh: '发放申请内容'
            },
            content: {
                ru: `
                <p>Заявка на выдачу формируется строительным блоком в 1С, затем подтверждается и визируется отделом учета. После подтверждения материалы могут быть получены полностью или частично.</p>
                
                <h3>Содержимое заявки на выдачу</h3>
                
                <h4>a) Номер заявки и дата</h4>
                <p>Дата составления заявки в 1С может не совпадать с датой ее подтверждения и согласования отделом учета (пункт k).</p>
                
                <h4>b) Титул и заявитель</h4>
                <p>Наименование заявителя должно совпадать с наименованием организации на бейдже.</p>
                
                <h4>c) TAG номер</h4>
                <p>Материалам присваивается TAG номер. Один TAG номер может относиться к многим номенклатурным позициям. В таких случаях материал должен идентифицироваться по его Наименованию и Артикулу поставщика.</p>
                
                <h4>d) Артикул (Артикул поставщика)</h4>
                <p>Актуален, когда идентификация по TAG номеру и наименованию материала невозможна.</p>
                
                <h4>e) Наименование материала</h4>
                <p>Подробное описание материала и его характеристики.</p>
                
                <h4>f) Единица измерения</h4>
                <p>Единица измерения в заявке может не совпадать с единицей измерения в складской картотеке (например, кабель-канал приходит в штуках, выдается в метрах).</p>
                
                <h4>g) Запрашиваемое и согласованное количество</h4>
                <p>Обычно совпадают, всегда используется согласованное количество.</p>
                
                <h4>h) Примечания</h4>
                <p>В примечаниях прописывается номер ГМ, которое подлежит к выдаче. Если присутствует только номер ГМ, значит ГМ выдается полностью без разукомплектации. Если номер ГМ идет с припиской частичная выдача, как в примере ниже, то это означает, что это ГМ требуется разукомплектовать и выдать только те номенклатурные позиции, что присутствуют в заявке в том количестве, которое присутствует в заявке. Подробнее в подразделе «Частичная выдача».</p>
                
                <h4>i) Выдал, ФИО</h4>
                <p>Получатель расписывается и ставит дату за полученные позиции, записывает фактически выданное количество, если оно меньше запрашиваемого.</p>
                
                <div class="image-container">
                    <img src="images/image_28_1.png" alt="Пример заявки на выдачу ТМЦ со склада" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример заявки на выдачу ТМЦ со склада</em></p>
                </div>
            `,
                en: `
                <p>The Issuance Request is formed by the construction unit in 1C, then confirmed and approved by the accounting department. After confirmation, materials can be received completely or partially.</p>
                
                <h3>Issuance Request Contents</h3>
                
                <h4>a) Request number and date</h4>
                <p>The date of request formation in 1C may not coincide with the date of its confirmation and approval by the accounting department (item k).</p>
                
                <h4>b) Title and applicant</h4>
                <p>The applicant's name must match the organization name on the badge.</p>
                
                <h4>c) TAG number</h4>
                <p>Materials are assigned a TAG number. One TAG number can refer to many nomenclature positions. In such cases, the material should be identified by its Name and Supplier Article Number.</p>
                
                <h4>d) Article Number (Supplier Article Number)</h4>
                <p>Relevant when identification by TAG number and material name is impossible.</p>
                
                <h4>e) Material name</h4>
                <p>Detailed description of the material and its characteristics.</p>
                
                <h4>f) Unit of measurement</h4>
                <p>The unit of measurement in the request may not match the unit of measurement in the warehouse file (for example, cable tray arrives in pieces, issued in meters).</p>
                
                <h4>g) Requested and approved quantity</h4>
                <p>Usually match, always use the approved quantity.</p>
                
                <h4>h) Notes</h4>
                <p>In notes, the GM number to be issued is specified. If only the GM number is present, the GM is issued completely without unpacking. If the GM number comes with a note "partial issuance", as in the example below, this means that this GM needs to be unpacked and only those nomenclature positions that are present in the request in the quantity specified in the request should be issued. For more details, see subsection "Partial Issuance".</p>
                
                <h4>i) Issued by, Full Name</h4>
                <p>The receiver signs and puts the date for received positions, records the actually issued quantity if it is less than requested.</p>
                
                <div class="image-container">
                    <img src="images/image_28_1.png" alt="Example of Material Issuance Request from Warehouse" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Material Issuance Request from Warehouse</em></p>
                </div>
            `,
                zh: `
                <p>发放申请由建筑单位在1C系统中形成，然后由会计部门确认和批准。确认后，材料可全部或部分领取。</p>
                
                <h3>发放申请内容</h3>
                
                <h4>a) 申请编号和日期</h4>
                <p>1C系统中申请形成的日期可能与会计部门确认和批准的日期不一致（第k项）。</p>
                
                <h4>b) 标题和申请人</h4>
                <p>申请人名称必须与证件上的组织名称一致。</p>
                
                <h4>c) TAG编号</h4>
                <p>材料分配有TAG编号。一个TAG编号可对应多个名称位置。在此情况下，材料应通过其名称和供应商货号识别。</p>
                
                <h4>d) 货号（供应商货号）</h4>
                <p>当无法通过TAG编号和材料名称识别时使用。</p>
                
                <h4>e) 材料名称</h4>
                <p>材料的详细描述及其特征。</p>
                
                <h4>f) 计量单位</h4>
                <p>申请中的计量单位可能与仓库档案中的计量单位不一致（例如，电缆桥架以件到达，以米发放）。</p>
                
                <h4>g) 申请数量和批准数量</h4>
                <p>通常一致，始终使用批准数量。</p>
                
                <h4>h) 备注</h4>
                <p>备注中注明待发放的GM编号。如仅存在GM编号，则GM完整发放，无需拆包。如GM编号带有"部分发放"备注（如下例），则需拆包此GM，仅发放申请中存在且数量与申请一致的名称位置。详情参见"部分发放"小节。</p>
                
                <h4>i) 发放人，姓名</h4>
                <p>接收人签字并标注接收位置的日期，如实际发放数量少于申请数量，需记录实际发放数量。</p>
                
                <div class="image-container">
                    <img src="images/image_28_1.png" alt="仓库材料发放申请示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>仓库材料发放申请示例</em></p>
                </div>
            `
            }
        },
        '4.8': {
            title: {
                ru: 'Содержание и Правила заполнения Пропуска на Вывоз',
                en: 'Contents and Rules for Filling Out Exit Pass',
                zh: '离场通行证内容和填写规则'
            },
            content: {
                ru: `
                <h3>Назначение пропуска на вывоз</h3>
                <p>Пропуск на вывоз материала заполняется для каждого ТС, покидающего площадку с грузом на основании «Заявки на Выдачу».</p>
                
                <h3>Правила заполнения пропуска на вывоз</h3>
                
                <h4>a) Номер пропуска на вывоз материала</h4>
                <p>Заполняется самостоятельно с указанием локации выдачи. Например 2025.09.26-1/C23-1, Где 2025.09.26 это дата, 1 - это порядковый номер выдачи, выданной с этой локации за день, С23-1 – локация, с которой произведена выдача. Пропуск заполняется на каждое ТС, уходящее с площадки, уходящее с площадки с грузом по Заявке на Выдачу.</p>
                
                <h4>b) Получатель</h4>
                <p>Строительная бригада CC7 или строительный подрядчик. Например, CC7-C9 (девятая бригада) или «АСП-Аква».</p>
                
                <h4>c) Номер ТС</h4>
                <p>Номер ТС, на который погружен ТМЦ. Пропуск заполняется на каждое ТС, уходящее с площадки с грузом по Заявке на Выдачу.</p>
                
                <h4>d) Время подписания</h4>
                <p>Время подписания ставится перед выездом ТС после сверки манифеста с физическим наполнением. Получателям дается 10 минут на выезд со склада. Если в течении 10 минут Получатель не выезжает со склада, охрана не выпускает это ТС и отправляет на дополнительную проверку для избежания несанкционированных «догрузок».</p>
                
                <h4>e) Дата вывоза</h4>
                <p>Дата вывоза материала.</p>
                
                <h4>f) Склад, с которого производится выдача</h4>
                <p>Указать склад, с которого производится выдача ТМЦ.</p>
                
                <h4>g) Номер Заявки на Выдачу</h4>
                <p>На ТС может быть загружены ТМЦ по разным заявкам, в таком случае в этом пункте будет несколько номеров.</p>
                
                <h4>h) Номер ГМ</h4>
                <p>Номер ГМ, указан в графе «Примечания» в Заявке на Выдачу.</p>
                
                <h4>i) Ячейка, лот хранения</h4>
                <p>Ячейка, лот хранения, с которого производится выдача ТМЦ.</p>
                
                <h4>j) Номер позиции в заявке</h4>
                <p>Указывается при частичной выдаче материала.</p>
                
                <h4>k) Количество</h4>
                <p>При полной выдаче ГМ пишется количество ГМ. При частичной выдаче из ГМ пишется количество, выданное по каждой номенклатурной позиции.</p>
                
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/image_29_2.png" alt="Пример заполнения пропуска на вывоз" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
                
                <p>В случае, если номенклатурных позиций много и они идут в заявке без разрыва, то в пункте g возможно написать позиция «1-10», а в пункте h количество не прописывать. Это актуально только если номенклатурные позиции выдаются полностью.</p>
                
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/image_29_1.png" alt="Пример заполнения пропуска на вывоз" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример заполнения пропуска на вывоз</em></p>
                </div>
                
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/4.8.png" alt="Пример пропуска на вывоз" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример пропуска на вывоз материала</em></p>
                </div>
            `,
                en: `
                <h3>Purpose of Exit Pass</h3>
                <p>The Exit Pass for material is filled out for each vehicle leaving the site with cargo based on the "Issuance Request".</p>
                
                <h3>Rules for Filling Out Exit Pass</h3>
                
                <h4>a) Material Exit Pass Number</h4>
                <p>Filled out independently with indication of issuance location. For example 2025.09.26-1/C23-1, where 2025.09.26 is the date, 1 is the sequential number of issuance issued from this location per day, C23-1 is the location from which issuance was made. The pass is filled out for each vehicle leaving the site, leaving the site with cargo according to the Issuance Request.</p>
                
                <h4>b) Receiver</h4>
                <p>CC7 construction team or construction contractor. For example, CC7-C9 (ninth team) or "ASP-Aqua".</p>
                
                <h4>c) Vehicle Number</h4>
                <p>Vehicle number on which materials are loaded. The pass is filled out for each vehicle leaving the site with cargo according to the Issuance Request.</p>
                
                <h4>d) Signing Time</h4>
                <p>Signing time is set before vehicle departure after verification of manifest with physical contents. Receivers are given 10 minutes to leave the warehouse. If within 10 minutes the Receiver does not leave the warehouse, security does not release this vehicle and sends it for additional inspection to avoid unauthorized "additional loading".</p>
                
                <h4>e) Export Date</h4>
                <p>Date of material export.</p>
                
                <h4>f) Warehouse from which issuance is made</h4>
                <p>Specify the warehouse from which materials are issued.</p>
                
                <h4>g) Issuance Request Number</h4>
                <p>Materials according to different requests may be loaded on the vehicle, in such case this item will have several numbers.</p>
                
                <h4>h) GM Number</h4>
                <p>GM number specified in the "Notes" column in the Issuance Request.</p>
                
                <h4>i) Storage cell, lot</h4>
                <p>Storage cell, lot from which materials are issued.</p>
                
                <h4>j) Position number in request</h4>
                <p>Specified during partial material issuance.</p>
                
                <h4>k) Quantity</h4>
                <p>For complete GM issuance, write the number of GMs. For partial issuance from GM, write the quantity issued per each nomenclature position.</p>
                
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/image_29_2.png" alt="Example of Exit Pass Filling" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
                
                <p>In case there are many nomenclature positions and they go in the request without gaps, in item g it is possible to write position "1-10", and in item h do not write the quantity. This is relevant only if nomenclature positions are issued completely.</p>
                
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/image_29_1.png" alt="Example of Exit Pass Filling" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Exit Pass Filling</em></p>
                </div>
                
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/4.8.png" alt="Example of Exit Pass" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Material Exit Pass</em></p>
                </div>
            `,
                zh: `
                <h3>离场通行证的用途</h3>
                <p>材料离场通行证为每辆根据"发放申请"载货离开场地的车辆填写。</p>
                
                <h3>离场通行证填写规则</h3>
                
                <h4>a) 材料离场通行证编号</h4>
                <p>独立填写，需注明发放地点。例如2025.09.26-1/C23-1，其中2025.09.26为日期，1为该地点当日发放的序号，C23-1为进行发放的地点。通行证为每辆根据发放申请载货离开场地的车辆填写。</p>
                
                <h4>b) 接收人</h4>
                <p>CC7建筑团队或建筑承包商。例如，CC7-C9（第九团队）或"ASP-Aqua"。</p>
                
                <h4>c) 车辆编号</h4>
                <p>装载材料的车辆编号。通行证为每辆根据发放申请载货离开场地的车辆填写。</p>
                
                <h4>d) 签字时间</h4>
                <p>签字时间在车辆离场前，在核对清单与实际装载后设置。接收人有10分钟时间离开仓库。如10分钟内接收人未离开仓库，安保不放行该车辆，并送交额外检查，以避免未经授权的"额外装载"。</p>
                
                <h4>e) 离场日期</h4>
                <p>材料离场日期。</p>
                
                <h4>f) 进行发放的仓库</h4>
                <p>注明进行材料发放的仓库。</p>
                
                <h4>g) 发放申请编号</h4>
                <p>车辆上可能装载不同申请的材料，在此情况下，此项将包含多个编号。</p>
                
                <h4>h) GM编号</h4>
                <p>发放申请"备注"栏中注明的GM编号。</p>
                
                <h4>i) 存储单元、场地</h4>
                <p>进行材料发放的存储单元、场地。</p>
                
                <h4>j) 申请中的位置编号</h4>
                <p>部分材料发放时注明。</p>
                
                <h4>k) 数量</h4>
                <p>完整GM发放时，填写GM数量。从GM部分发放时，填写每个名称位置的发放数量。</p>
                
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/image_29_2.png" alt="离场通行证填写示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
                
                <p>如名称位置较多且申请中连续无间隔，可在第g项中标注位置"1-10"，第h项中不填写数量。这仅适用于名称位置完整发放的情况。</p>
                
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/image_29_1.png" alt="离场通行证填写示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>离场通行证填写示例</em></p>
                </div>
                
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/4.8.png" alt="离场通行证示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>材料离场通行证示例</em></p>
                </div>
            `
            }
        },
        '4.9': {
            title: {
                ru: 'СОДЕРЖАНИЕ И ПРАВИЛА ЗАПОЛНЕНИЯ ИНВЕНТАРИЗАЦИОННОГО ЛИСТА',
                en: 'Contents and Rules for Filling Out Inventory List',
                zh: '盘点清单内容和填写规则'
            },
            content: {
                ru: `
                <h3>Правила заполнения инвентаризационного листа</h3>
                
                <p>На площадке действуют две формы Инвентаризационного Листа – для открытых площадок и для ангарных складов.</p>
                
                <h3>Содержание:</h3>
                
                <h4>a) Площадка / Ангар, на котором проводится инвентаризация</h4>
                <p>Указать название площадки или ангара, где проводится инвентаризация.</p>
                
                <h4>b) Номер ГМ</h4>
                <p>Указать номер грузового места.</p>
                
                <h4>c) Бин / Лот на котором производится пересчет</h4>
                <p>Указать бин или лот, где производится пересчет материала.</p>
                
                <h4>d) Номер упаковочного листа</h4>
                <p>Указать номер упаковочного листа.</p>
                
                <h4>e) Описание материала</h4>
                <p>Подробно описать материал, который инвентаризируется.</p>
                
                <h4>f) Количество материала</h4>
                <p>Указать количество материала по результатам пересчета.</p>
                
                <h4>g) Комментарии</h4>
                <p>Массо-габаритные характеристики, состояние, другие примечания.</p>
                
                <h4>h) Дата проведения инвентаризации, ФИО и подпись ответственного лица</h4>
                <p>Указать дату проведения инвентаризации, ФИО и поставить подпись ответственного лица.</p>
                
                <h4>i) Время начала и окончания пересчета</h4>
                <p>Указать точное время начала и окончания процесса пересчета.</p>
                
                <h4>j) ФИО и подпись лица, проводившего пересчет</h4>
                <p>Указать ФИО и поставить подпись лица, которое непосредственно проводило пересчет.</p>
                
                <h3>Инвентаризационный лист для Ангарных складов:</h3>
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/4.9-1.png" alt="Инвентаризационный лист для ангарных складов" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
                
                <h3>Инвентаризационный лист для Открытых Площадок:</h3>
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/4.9-2.png" alt="Инвентаризационный лист для открытых площадок" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
            `,
                en: `
                <h3>Rules for Filling Out Inventory List</h3>
                
                <p>Two forms of Inventory List are in effect at the site – for open sites and for hangar warehouses.</p>
                
                <h3>Contents:</h3>
                
                <h4>a) Site / Hangar where inventory is conducted</h4>
                <p>Specify the name of the site or hangar where inventory is conducted.</p>
                
                <h4>b) GM Number</h4>
                <p>Specify the cargo unit number.</p>
                
                <h4>c) Bin / Lot where recounting is performed</h4>
                <p>Specify the bin or lot where material recounting is performed.</p>
                
                <h4>d) Packing List Number</h4>
                <p>Specify the packing list number.</p>
                
                <h4>e) Material Description</h4>
                <p>Describe in detail the material being inventoried.</p>
                
                <h4>f) Material Quantity</h4>
                <p>Specify the material quantity based on recounting results.</p>
                
                <h4>g) Comments</h4>
                <p>Weight and dimensional characteristics, condition, other notes.</p>
                
                <h4>h) Inventory Date, Responsible Person's Full Name and Signature</h4>
                <p>Specify the inventory date, full name and put the signature of the responsible person.</p>
                
                <h4>i) Start and End Time of Recounting</h4>
                <p>Specify the exact start and end time of the recounting process.</p>
                
                <h4>j) Full Name and Signature of Person Conducting Recounting</h4>
                <p>Specify the full name and put the signature of the person who directly conducted the recounting.</p>
                
                <h3>Inventory List for Hangar Warehouses:</h3>
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/4.9-1.png" alt="Inventory List for Hangar Warehouses" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
                
                <h3>Inventory List for Open Sites:</h3>
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/4.9-2.png" alt="Inventory List for Open Sites" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
            `,
                zh: `
                <h3>盘点清单填写规则</h3>
                
                <p>场地使用两种盘点清单格式 – 用于露天场地和机库仓库。</p>
                
                <h3>内容：</h3>
                
                <h4>a) 进行盘点的场地/机库</h4>
                <p>注明进行盘点的场地或机库名称。</p>
                
                <h4>b) GM编号</h4>
                <p>注明货物单位编号。</p>
                
                <h4>c) 进行重新清点的货位/场地</h4>
                <p>注明进行材料重新清点的货位或场地。</p>
                
                <h4>d) 装箱单编号</h4>
                <p>注明装箱单编号。</p>
                
                <h4>e) 材料描述</h4>
                <p>详细描述正在盘点的材料。</p>
                
                <h4>f) 材料数量</h4>
                <p>根据重新清点结果注明材料数量。</p>
                
                <h4>g) 备注</h4>
                <p>重量和尺寸特性、状态、其他说明。</p>
                
                <h4>h) 盘点日期、负责人姓名和签名</h4>
                <p>注明盘点日期、姓名并签署负责人签名。</p>
                
                <h4>i) 重新清点的开始和结束时间</h4>
                <p>注明重新清点过程的准确开始和结束时间。</p>
                
                <h4>j) 进行重新清点的人员姓名和签名</h4>
                <p>注明直接进行重新清点的人员姓名并签署签名。</p>
                
                <h3>机库仓库盘点清单：</h3>
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/4.9-1.png" alt="机库仓库盘点清单" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
                
                <h3>露天场地盘点清单：</h3>
                <div class="image-container" style="margin: 15px 0;">
                    <img src="images/4.9-2.png" alt="露天场地盘点清单" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                </div>
            `
            }
        },
        // Глава 5: Правила предоставления информации в отдел учета
        '5.0': {
            title: {
                ru: 'Правила предоставления информации в отдел учета',
                en: 'Rules for Providing Information to Accounting Department',
                zh: '向会计部门提供信息的规则'
            },
            content: {
                ru: `
                <h3>5.0 ПРАВИЛА ПРЕДОСТАВЛЕНИЯ ИНФОРМАЦИИ В ОТДЕЛ УЧЕТА</h3>
                
                <p>Отдел Учета работает в потоковом режиме, и делает проводки в момент поступления информации в группах. Все ТН должны быть оприходованы в 1С до конца рабочего дня. Все выдачи также должны быть проведены до конца рабочего дня. Все Акты должны быть оформлены до конца рабочего дня.</p>
                
                <p>В связи с этим, информацию необходимо отправлять сразу по окончании выгрузки/погрузки/перемещения и не копить ТН/Заявки/Ведомости на перемещение, чтобы обеспечить непрерывный и равномерный процесс учета материалов в течении рабочего дня.</p>
                
                <p>Информация, предоставляемая в Отдел Учета должна быть понятна, хорошо читаема, конкретна и однозначна. Фотографии необходимо предоставлять в HD качестве, без необходимости переворачивать фото для прочтения информации.</p>
                
                <p>Если Вы видите, что Китайские Коллеги нарушают эти требования – необходимо сделать им замечание с просьбой предоставлять информацию в соответствии с нашими требованиями.</p>
                
                <p>Использование нестандартных символов, замена букв на цифры и подобные манипуляции ведут к ошибкам в работе с 1С, искажению информации и увеличению трудозатрат ваших Коллег.</p>
                
                <p>Информацию необходимо выкладывать одним постом, вместив в него всю информацию. Выкладывать информацию частично запрещено, так как это приводит к путанице в процессе проводок.</p>
            `,
                en: `
                <h3>5.0 RULES FOR PROVIDING INFORMATION TO ACCOUNTING DEPARTMENT</h3>
                
                <p>The Accounting Department works in a flow mode and makes entries at the moment information is received in groups. All TBs must be posted in 1C by the end of the working day. All issuances must also be processed by the end of the working day. All Acts must be prepared by the end of the working day.</p>
                
                <p>In this regard, information must be sent immediately upon completion of unloading/loading/transfer and TBs/Requests/Transfer Statements should not be accumulated to ensure a continuous and uniform process of material accounting during the working day.</p>
                
                <p>Information provided to the Accounting Department must be clear, well-readable, specific and unambiguous. Photos must be provided in HD quality, without the need to rotate photos to read information.</p>
                
                <p>If you see that Chinese Colleagues violate these requirements – it is necessary to make a remark to them with a request to provide information in accordance with our requirements.</p>
                
                <p>Use of non-standard symbols, replacement of letters with numbers and similar manipulations lead to errors in working with 1C, distortion of information and increase in labor costs of your Colleagues.</p>
                
                <p>Information must be posted in one post, including all information. Posting information partially is prohibited, as this leads to confusion in the posting process.</p>
            `,
                zh: `
                <h3>5.0 向会计部门提供信息的规则</h3>
                
                <p>会计部门以流程模式工作，在群组收到信息时立即进行记账。所有运输单必须在工作日内录入1C系统。所有发放也必须在工作日内处理。所有报告必须在工作日内编制。</p>
                
                <p>因此，信息需在卸货/装货/转移完成后立即发送，不得积压运输单/申请/转移清单，以确保工作日内材料核算的连续性和均匀性。</p>
                
                <p>向会计部门提供的信息必须清晰、可读、具体且明确。照片需以高清质量提供，无需旋转照片即可阅读信息。</p>
                
                <p>如发现中国同事违反这些要求，需向其提出意见，要求按照我们的要求提供信息。</p>
                
                <p>使用非标准符号、用数字替换字母等操作会导致1C系统工作错误、信息失真并增加同事的工作量。</p>
                
                <p>信息需在一个帖子中发布，包含所有信息。禁止部分发布信息，因为这会导致记账过程混乱。</p>
            `
            }
        },
        // Глава 5.1: Информационные группы
        '5.1': {
            title: {
                ru: 'Детальное описание информационных групп',
                en: 'Detailed Description of Information Groups',
                zh: '信息群组详细说明'
            },
            content: {
                ru: `
                <h3>5.1 ИНФОРМАЦИОННЫЕ ГРУППЫ</h3>
                
                <p>Ниже представлен полный список информационных групп с их описанием и ссылками для вступления:</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h4>1. <a href="https://max.ru/join/LKsu74vfEKoJCa5SdggIfbG0-OAUj_Xy_TSxqcS2Q00" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ОПЕРУПОЛНОМОЧЕННЫЕ</a></h4>
                    <p><strong>Назначение:</strong> Информационная группа для оперативного решения вопросов.</p>
                    <p><strong>Особенности:</strong> Предоставление отчетов с площадок в 9.00, 14.00, 17.00 для мониторинга процесса работы на площадке.</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_33_1.png" alt="Пример отчета в группе Оперуполномоченные" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Пример отчета в группе Оперуполномоченные</em></p>
                </div>
                    
                    <h4>2. <a href="https://max.ru/join/bMV-CA4fWBQyL9r7R9grMbHTJByE8Jh06QvRkiFW2xk" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">БЕЗУМИЕ. ПЛОЩАДКА</a></h4>
                    <p><strong>Назначение:</strong> Ежедневные отчеты по принятым ТС. Срочные запросы от руководства МСК, общие объявления.</p>
                    
                    <h4>3. <a href="https://max.ru/join/HGORdXUfqF6zy0x8xnqCRdY8znVtij5bchtc4hK3AaU" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ИНФОРМАЦИЯ. ЧИТАЙ МЕНЯ!</a></h4>
                    <p><strong>Назначение:</strong> Группа для размещения важной информации и обновлений.</p>
                    
                    <h4>4. <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ДОКУМЕНТЫ НА ПРОВЕРКУ</a></h4>
                    <p><strong>Назначение:</strong> Постинг ТН по поставщикам, фигурирующим в списке на проверку в группе «Информация. Читай меня!». Постится титульная страница ТН в читаемом формате. Прописывается текстом номер ТН и название поставщика. Информация скидывается ДО выгрузки ТС. Без согласования Отдела Учета (реакция палец вверх) ТС не выгружать. Если реакция знак стоп, значит ТС поставлена на стоп до прояснения всех нюансов с поставщиком.</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_33_2.png" alt="Пример проверки документов" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Пример проверки документов</em></p>
                </div>
                    
                    <h4>5. <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">М-7 / Акты о повреждениях</a></h4>
                    <p><strong>Назначение:</strong> Постинг информации по актам М7 при приемке ТМЦ с выявленными несоответствиями (излишки, недостачи, пересорт, повреждение ТМЦ, повреждение упаковки), а также по актам о повреждениях ТМЦ, возникших в процессе выдачи/перемещения ТМЦ по площадке.</p>
                    <p><strong>Для составления Акта М-7 кладовщик обязан предоставить фото и информацию в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«М-7 / Акты о повреждениях»</a> в формате:</strong></p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>Фото лицевой страницы ТН, где видны номер ТН, ФИО водителя</li>
                        <li>Фото тягача ТС с читаемым гос номером</li>
                        <li>Фото несоответствия</li>
                        <li>Текстом прописан номер ТН, дата и время начала и окончания выгрузки</li>
                        <li>Текстом подробно описано несоответствие. Если недостача – в каком количестве и какие номера ГМ недостает, если излишек – какое конкретное ГМ лишнее. Если повреждение – какое повреждение какого ГМ итд. В ТН должен быть прописан УЛ для полной идентификации ТМЦ</li>
                    </ol>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_34_1.png" alt="Пример составления акта М-7" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Пример составления акта М-7</em></p>
                </div>
                    
                    <h4>6. <a href="https://max.ru/join/R8kKygonM4Fs4at-maxqOYJROyHVlb2jEFTOD2qYJAM" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ДЛЯ ТН ДЛЯ УЧЕТА</a></h4>
                    <p><strong>Назначение:</strong> Постинг информации по поставке (по каждой машине) после выгрузки.</p>
                    <p>Предоставляются фото титульной стороны ТН, фото выгруженного материала общим фоном, фото поврежденного материала в случаем составления Акта М-7, фото УЛ/Ведомости Грузового Места/Shipping Mark/Маркировка каждого ГМ. Без фото полученного материала и его маркировки Отдел Учета не имеет права принимать материал.</p>
                    <p>Прописывается текстом 1. номер ТН, 2. склад и локация, куда выгружены ТМЦ. 3. Пишется «Акт М-7», если таковой составлялся. Также, указать Китайского Коллегу, если таковой осуществлял приемку.</p>
                    <p>Реакции на сообщения полевых сотрудников не касаются, это внутренние обозначения Отдела Учета по статусу проводки в 1С.</p>
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_35_1.png" alt="Пример постинга приемки Трубной продукции" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Пример постинга приемки Трубной продукции</em></p>
                    </div>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_35_2.png" alt="Пример постинга приемки Кабельной продукции" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Пример постинга приемки Кабельной продукции</em></p>
                    </div>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_36_1.png" alt="Пример постинга приемки Контейнеров" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Пример постинга приемки Контейнеров</em></p>
                    </div>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_36_2.png" alt="Пример постинга приемки с составлением Акта М-7" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Пример постинга приемки с составлением Акта М-7</em></p>
                    </div>
                    
                    <h4>7. <a href="https://max.ru/join/Grxqwg0iOhtNMvh2Cc1d5TKayp2yaPSgvDVs3e6wjpI" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ПРОВЕРКА ЗАЯВОК ПЕРЕД ВЫДАЧЕЙ</a></h4>
                    <p><strong>Назначение:</strong> В эту группу высылаются фото заявок на выдачу перед самой выдачей. Отдел Учета формирует выгрузку из 1С с актуальными остатками по каждой заявке.</p>
                    <p>Заявку на Выдачу необходимо фотографировать таким образом, чтобы был четко виден Номер заявки и верхние строки номенклатурных позиций. Без получения и сверки актуальных остатков с 1С с данными в заявке выдача ТМЦ запрещена.</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_37_1.png" alt="Пример проверки заявок перед выдачей" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Пример проверки заявок перед выдачей</em></p>
                    </div>
                    
                    <h4>8. <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ВЫДАЧА ТМЦ ПО ЗАЯВКАМ</a></h4>
                    <p><strong>Назначение:</strong> После осуществления проверки актуальных остатков по заявке на выдачу ТМЦ через группу «Проверка заявок перед выдачей» и осуществления погрузки ТМЦ, необходимо запостить в группу «Выдача ТМЦ по заявкам» информацию следующего содержания:</p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>Полное фото первой страницы Заявки на выдачу + все страницы с отметками о получении выданных ТМЦ в читаемом, не обрезанном, не перевернутом виде. Должны быть видны подписи забирающих материал лиц с указанием количества забранного ТМЦ и даты</li>
                        <li>Полное фото «Пропуск на вывоз ТМЦ» с подписями кладовщика и лица, забирающего груз</li>
                        <li>Фото забранного ТМЦ и их УЛ/Ведомости Грузового Места/Shipping Mark/Маркировки каждого ГМ. Без этих фото Отдел Учета не имеет права списывать материал</li>
                        <li>Фото пропуска лица, забирающего груз. Строительная бригада и подрядчик должны совпадать с пунктом «Заявитель (Субподрядчик)» в Заявке на Выдачу</li>
                        <li>Текстом прописать Номер заявки, количество (по возможности наименование) выданных ГМ, номера отпущенных ГМ, если это возможно и применимо. Также, прописать Китайского Коллегу, осуществившего выдачу, если это сделал КК</li>
                    </ol>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_37_2.png" alt="Пример выдачи ТМЦ по заявкам" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Пример выдачи ТМЦ по заявкам</em></p>
                    </div>
                    
                    <h4>9. <a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ПОТЕРЯШКИ</a></h4>
                    <p><strong>Назначение:</strong> Данная группа предназначена для оперативной обработки запросов Склада на поиск грузовых мест, их учета, а также направления УЛ и Ведомостей Грузового Места для маркировки ГМ без необходимости поиска свободного сотрудника Учета.</p>
                    
                    <p><strong>В Указанную группу неоходимо направлять запросы в следующих случаях:</strong></p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>ГМ отсутствует на указанном в заявке месте хранения и необходима проверка его местонахождения. В запросе необходимо указать номер Заявки и ГМ или приложить фото Заявки и выделить ГМ к поиску, указав краткое описание.</li>
                        <li>Отсутствует или испорчен упаковочный лист и ГМ необходимо перемаркировать.</li>
                    </ol>
                    
                    <p><strong>Примеры запросов:</strong></p>
                    <p>«Отсутствует ГМ №5-2-8 в заявке №СС7-UIO-16400-c12-253, просьба помочь в поиске»</p>
                    <p>«Необходим УЛ для ГМ №5-2-8»</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_38_1.png" alt="Пример запроса в группу ПОТЕРЯШКИ" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Пример запроса в группу ПОТЕРЯШКИ</em></p>
                    </div>
                    
                    <p><strong>По результату Отдел Учета предоставляет УЛы и информацию по движению материала на площадке для упрощения его поиска.</strong></p>
                    <p><em>Реакции на сообщения полевых сотрудников не касаются, это внутренние обозначения Отдела Учета.</em></p>
                    
                    <h4>10. <a href="https://max.ru/join/clTILsQtTWFlCQpAk5wfZcMqebgxndQ2-BVXJxSAtUA" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">IC GROUP</a></h4>
                    <p><strong>Назначение:</strong> Данная группа создана для группы Входного Контроля для оперативного обмена информацией по данному направлению, а именно – назначение инспекций, планирование входного контроля, распределение ресурсов для проведение входного контроля итд.</p>
                    
                    <h4>11. <a href="https://max.ru/join/-_LBqqcIpcKTMRJjj8pHN5fxdmpMQOqlY3y9zKyjR-0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ПЕРЕМЕЩЕНИЯ</a></h4>
                    <p><strong>Назначение:</strong> В данной группе постятся все Ведомости перемещения и приемки ТМЦ (См Главу 4.3 Правила заполнения «Ведомости на перемещение и приемку ТМЦ»). Публикуются данные по перемещению внутри склада с присвоением нового адреса хранения. Актуально при перемещениях внутри склада (локации), так и для перемещения между складами (локациями).</p>
                    
                    <h4>12. <a href="https://teams.microsoft.com/l/message/19:a383eea2-9fcf-4e39-870f-3d5c53abacf9_b0e49231-9ee7-4aec-b33f-dca486c5c65c@unq.gbl.spaces/1759912665617?context=%7B%22contextType%22%3A%22chat%22%7D" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ИНВЕНТАРИЗАЦИЯ ТМЦ</a></h4>
                    <p><strong>Назначение:</strong> Группа предназначена для постинга инвентаризационных листов и обмена информацией по этому направлению. См Главу 4.9 Содержание и Правила заполнения инвентаризационного листа.</p>
                    
                    <h4>13. <a href="https://max.ru/join/HJ3DPOkt4dEMTy-UTtvCOLyL0F4yxouSVMKMlF1WpO8" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ГРАФИК ВЫХОДА НА РАБОТУ</a></h4>
                    <p><strong>Назначение:</strong> Чат создан для централизованного обмена информацией по поводу выхода на работу в Субботы/Воскресенья/Празничные дни.</p>
                    <p><strong>Формат сообщений:</strong> Сообщения подаются в формате «Выход на переработку 18.10».</p>
                    <p><strong>Процедура:</strong> Если поставлен лайк, то можно выходить в данный день, если нет, то по этому поводу связываются дополнительно для прояснения.</p>
                    <p><strong>Дополнительно:</strong> Также, сюда постятся сообщения по выходу в ежегодный отпуск и отпуск без сохранения заработной платы.</p>
                    
                    <h4>14. <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">АКТЫ ОСМОТРА ТМЦ</a></h4>
                    <p><strong>Назначение:</strong> В данной группе постятся акты осмотра ТМЦ.</p>
                    <p><strong>Условия составления:</strong> Акт Осмотра составляется в случае, если при частичной выдаче обнаружена недостача, излишки, пересорт или повреждение материала. Это касается как ТМЦ, прошедших ВК, так и не прошедших. При обнаружении несоответствий необходимо вызвать сотрудника Бизнес-Тренд для совместного осмотра этих ТМЦ.</p>
                    <p><strong>Формат предоставления информации:</strong> При обнаружении вышеизложенных несоответствий полевой сотрудник должен запостить в группу <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">«Акты осмотра ТМЦ»</a> следующую информацию:</p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>Фото ТМЦ</li>
                        <li>Номер ГМ, УЛ</li>
                        <li>Наименование ТМЦ согласно Ведомости Грузового места</li>
                        <li>Описание несоответствия</li>
                    </ol>
                    <p><strong>Обработка акта:</strong> На основании вышеизложенных данных Отдел Учета подготавливает Акт Осмотра и направляет на подпись полевому сотруднику и сотруднику Бизнес-Тренд.</p>
                    
                    <h4>15. <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ЗРА ДЛЯ ГИ / VALVES</a></h4>
                    <p><strong>Назначение:</strong> Группа предназначена для обмена информацией по перемещению на гидроиспытания ЗРА (Запорно-Регулирующей Арматуры).</p>
                    
                    <h4>16. <a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ПЕРЕМЕЩЕНИЯ ЗРА (ИСПЫТАНИЯ)</a></h4>
                    <p><strong>Назначение:</strong> Группа создана для отображения Пропусков на выдачу ЗРА (Запорно-Регулирующей Арматуры) для гидроиспытаний и накладных на перемещение с гидроиспытаний.</p>
                    <p><strong>Формат сообщений:</strong> В сообщении необходимо указывать:</p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>Фото «Пропусков на выдачу» в случае выдачи со склада/Ведомости на перемещение в случае перемещения с Гидроиспытаний</li>
                        <li>Фото Упаковочных листов/Ведомостей грузовых мест/Shipping Marks в случае отгрузки со склада</li>
                        <li>В тексте прописывать по примерам ниже</li>
                    </ol>
                    <p><strong>Пример постинга:</strong></p>
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/arm1.png" alt="Пример постинга ЗРА" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <img src="images/arm2.png" alt="Пример постинга ЗРА" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    </div>
                </div>
            `,
                en: `
                <h3>5.1 INFORMATION GROUPS</h3>
                
                <p>Below is a complete list of information groups with their descriptions and links to join:</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h4>1. <a href="https://max.ru/join/LKsu74vfEKoJCa5SdggIfbG0-OAUj_Xy_TSxqcS2Q00" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">OPERATIONAL OFFICERS</a></h4>
                    <p><strong>Purpose:</strong> Information group for operational issue resolution.</p>
                    <p><strong>Features:</strong> Provision of reports from sites at 9:00, 14:00, 17:00 for monitoring the work process at the site.</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_33_1.png" alt="Example of Report in Operational Officers Group" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Example of Report in Operational Officers Group</em></p>
                </div>
                    
                    <h4>2. <a href="https://max.ru/join/bMV-CA4fWBQyL9r7R9grMbHTJByE8Jh06QvRkiFW2xk" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">CRAZY. SITE</a></h4>
                    <p><strong>Purpose:</strong> Daily reports on accepted vehicles. Urgent requests from MSK management, general announcements.</p>
                    
                    <h4>3. <a href="https://max.ru/join/HGORdXUfqF6zy0x8xnqCRdY8znVtij5bchtc4hK3AaU" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">INFORMATION. READ ME!</a></h4>
                    <p><strong>Purpose:</strong> Group for posting important information and updates.</p>
                    
                    <h4>4. <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">DOCUMENTS FOR VERIFICATION</a></h4>
                    <p><strong>Purpose:</strong> Posting TBs for suppliers listed in the verification list in the "Information. Read Me!" group. The title page of the TB is posted in a readable format. TB number and supplier name are written in text. Information is sent BEFORE vehicle unloading. Without Accounting Department approval (thumbs up reaction) do not unload the vehicle. If the reaction is a stop sign, the vehicle is put on hold until all nuances with the supplier are clarified.</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_33_2.png" alt="Example of Document Verification" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>Example of Document Verification</em></p>
                </div>
                    
                    <h4>5. <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">M-7 / Damage Acts</a></h4>
                    <p><strong>Purpose:</strong> Posting information on M7 acts during material acceptance with identified discrepancies (surpluses, shortages, mis-sorted items, material damage, packaging damage), as well as acts on material damage that occurred during issuance/transfer of materials on the site.</p>
                    <p><strong>To prepare Act M-7, the warehouse keeper must provide photos and information to the group "M-7 / Damage Acts" in the following format:</strong></p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>Photo of the front page of the TB showing the TB number and driver's full name</li>
                        <li>Photo of the vehicle tractor with a readable license plate</li>
                        <li>Photo of the discrepancy</li>
                        <li>Text stating the TB number, date and time of start and end of unloading</li>
                        <li>Text with detailed description of the discrepancy. If shortage – in what quantity and which GM numbers are missing, if surplus – which specific GM is extra. If damage – what damage to which GM, etc. The TB must specify the PL for complete material identification</li>
                    </ol>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_34_1.png" alt="Example of Act M-7 Preparation" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Example of Act M-7 Preparation</em></p>
                </div>
                    
                    <h4>6. <a href="https://max.ru/join/R8kKygonM4Fs4at-maxqOYJROyHVlb2jEFTOD2qYJAM" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">FOR TB FOR ACCOUNTING</a></h4>
                    <p><strong>Purpose:</strong> Posting information on delivery (per each vehicle) after unloading.</p>
                    <p>Photos of the title side of the TB, photos of unloaded material in general view, photos of damaged material in case of Act M-7 preparation, photos of PL/Cargo Unit Statement/Shipping Mark/Marking of each GM are provided. Without photos of received material and its marking, the Accounting Department has no right to accept the material.</p>
                    <p>Text stating 1. TB number, 2. warehouse and location where materials were unloaded. 3. Write "Act M-7" if such was prepared. Also, indicate Chinese Colleague if such performed acceptance.</p>
                    <p>Reactions to field employee messages are not relevant, these are internal Accounting Department designations for posting status in 1C.</p>
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_35_1.png" alt="Example of Pipe Product Acceptance Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Example of Pipe Product Acceptance Posting</em></p>
                    </div>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_35_2.png" alt="Example of Cable Product Acceptance Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Example of Cable Product Acceptance Posting</em></p>
                    </div>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_36_1.png" alt="Example of Container Acceptance Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Example of Container Acceptance Posting</em></p>
                    </div>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_36_2.png" alt="Example of Acceptance Posting with Act M-7 Preparation" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Example of Acceptance Posting with Act M-7 Preparation</em></p>
                    </div>
                    
                    <h4>7. <a href="https://max.ru/join/Grxqwg0iOhtNMvh2Cc1d5TKayp2yaPSgvDVs3e6wjpI" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">REQUEST VERIFICATION BEFORE ISSUANCE</a></h4>
                    <p><strong>Purpose:</strong> Photos of issuance requests are sent to this group before issuance. The Accounting Department generates a 1C export with current balances for each request.</p>
                    <p>The Issuance Request must be photographed so that the Request Number and top lines of nomenclature positions are clearly visible. Without receiving and verifying current balances from 1C with data in the request, material issuance is prohibited.</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_37_1.png" alt="Example of Request Verification Before Issuance" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Example of Request Verification Before Issuance</em></p>
                    </div>
                    
                    <h4>8. <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">MATERIAL ISSUANCE BY REQUESTS</a></h4>
                    <p><strong>Purpose:</strong> After verifying current balances for the material issuance request through the "Request Verification Before Issuance" group and loading materials, it is necessary to post to the "Material Issuance by Requests" group information of the following content:</p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>Complete photo of the first page of the Issuance Request + all pages with marks on receipt of issued materials in readable, uncropped, non-inverted form. Signatures of persons receiving materials with indication of quantity of received materials and date must be visible</li>
                        <li>Complete photo of "Material Exit Pass" with signatures of warehouse keeper and person receiving cargo</li>
                        <li>Photos of received materials and their PL/Cargo Unit Statement/Shipping Mark/Marking of each GM. Without these photos, the Accounting Department has no right to write off materials</li>
                        <li>Photo of the pass of the person receiving cargo. The construction team and contractor must match the "Applicant (Subcontractor)" item in the Issuance Request</li>
                        <li>Text stating Request number, quantity (and name if possible) of issued GMs, numbers of released GMs, if possible and applicable. Also, state Chinese Colleague who performed issuance, if it was done by CC</li>
                    </ol>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_37_2.png" alt="Example of Material Issuance by Requests" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Example of Material Issuance by Requests</em></p>
                    </div>
                    
                    <h4>9. <a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">LOST ITEMS</a></h4>
                    <p><strong>Purpose:</strong> This group is intended for operational processing of Warehouse requests for searching cargo units, their accounting, as well as sending PLs and Cargo Unit Statements for marking GMs without the need to search for a free Accounting employee.</p>
                    
                    <p><strong>Requests must be sent to the specified group in the following cases:</strong></p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>GM is missing at the storage location specified in the request and it is necessary to check its location. The request must specify the Request number and GM or attach a photo of the Request and highlight the GM to search, indicating a brief description.</li>
                        <li>Packing list is missing or damaged and GM needs to be re-marked.</li>
                    </ol>
                    
                    <p><strong>Request Examples:</strong></p>
                    <p>"GM No. 5-2-8 is missing in request No. SS7-UIO-16400-c12-253, please help in search"</p>
                    <p>"PL needed for GM No. 5-2-8"</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_38_1.png" alt="Example of Request to LOST ITEMS Group" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>Example of Request to LOST ITEMS Group</em></p>
                    </div>
                    
                    <p><strong>As a result, the Accounting Department provides PLs and information on material movement at the site to simplify its search.</strong></p>
                    <p><em>Reactions to field employee messages are not relevant, these are internal Accounting Department designations.</em></p>
                    
                    <h4>10. <a href="https://max.ru/join/clTILsQtTWFlCQpAk5wfZcMqebgxndQ2-BVXJxSAtUA" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">IC GROUP</a></h4>
                    <p><strong>Purpose:</strong> This group is created for the Incoming Control group for operational information exchange in this direction, namely – assignment of inspections, planning of incoming control, resource allocation for conducting incoming control, etc.</p>
                    
                    <h4>11. <a href="https://max.ru/join/-_LBqqcIpcKTMRJjj8pHN5fxdmpMQOqlY3y9zKyjR-0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">TRANSFERS</a></h4>
                    <p><strong>Purpose:</strong> All Transfer and Acceptance Statements for materials are posted in this group (See Chapter 4.3 Rules for Filling Out "Transfer and Acceptance Statement for Materials"). Data on transfers within a warehouse with assignment of a new storage address are published. Relevant for transfers within a warehouse (location), as well as for transfers between warehouses (locations).</p>
                    
                    <h4>12. <a href="https://teams.microsoft.com/l/message/19:a383eea2-9fcf-4e39-870f-3d5c53abacf9_b0e49231-9ee7-4aec-b33f-dca486c5c65c@unq.gbl.spaces/1759912665617?context=%7B%22contextType%22%3A%22chat%22%7D" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">MATERIAL INVENTORY</a></h4>
                    <p><strong>Purpose:</strong> Group is intended for posting inventory lists and information exchange in this direction. See Chapter 4.9 Contents and Rules for Filling Out Inventory List.</p>
                    
                    <h4>13. <a href="https://max.ru/join/HJ3DPOkt4dEMTy-UTtvCOLyL0F4yxouSVMKMlF1WpO8" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">WORK SCHEDULE</a></h4>
                    <p><strong>Purpose:</strong> Chat created for centralized information exchange regarding work on Saturdays/Sundays/Holidays.</p>
                    <p><strong>Message Format:</strong> Messages are submitted in the format "Overtime work 18.10".</p>
                    <p><strong>Procedure:</strong> If a like is set, you can work on this day, if not, additional contact is made for clarification.</p>
                    <p><strong>Additionally:</strong> Also, messages about annual leave and unpaid leave are posted here.</p>
                    
                    <h4>14. <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">MATERIAL INSPECTION ACTS</a></h4>
                    <p><strong>Purpose:</strong> Material inspection acts are posted in this group.</p>
                    <p><strong>Preparation Conditions:</strong> An Inspection Act is prepared if during partial issuance a shortage, surplus, mis-sorted items, or material damage is detected. This applies to both materials that have passed QC and those that have not. When discrepancies are detected, it is necessary to call a Business-Trend employee for joint inspection of these materials.</p>
                    <p><strong>Information Submission Format:</strong> When the above discrepancies are detected, the field employee must post to the "Material Inspection Acts" group the following information:</p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>Photo of materials</li>
                        <li>GM number, PL</li>
                        <li>Material name according to Cargo Unit Statement</li>
                        <li>Description of the discrepancy</li>
                    </ol>
                    <p><strong>Act Processing:</strong> Based on the above data, the Accounting Department prepares the Inspection Act and sends it for signature to the field employee and Business-Trend employee.</p>
                    
                    <h4>15. <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ZRA FOR HI / VALVES</a></h4>
                    <p><strong>Purpose:</strong> Group is intended for information exchange on transfer to hydrotesting of ZRA (Shut-off and Control Valves).</p>
                    
                    <h4>16. <a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ZRA TRANSFERS (TESTING)</a></h4>
                    <p><strong>Purpose:</strong> Group created to display Exit Passes for ZRA (Shut-off and Control Valves) for hydrotesting and transfer statements from hydrotesting.</p>
                    <p><strong>Message Format:</strong> The message must specify:</p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>Photo of "Exit Passes" in case of issuance from warehouse/Transfer Statement in case of transfer from Hydrotesting</li>
                        <li>Photo of Packing Lists/Cargo Unit Statements/Shipping Marks in case of shipment from warehouse</li>
                        <li>Write in text according to examples below</li>
                    </ol>
                    <p><strong>Posting Example:</strong></p>
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/arm1.png" alt="Example of ZRA Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <img src="images/arm2.png" alt="Example of ZRA Posting" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    </div>
                </div>
            `,
                zh: `
                <h3>5.1 信息群组</h3>
                
                <p>以下是信息群组的完整列表，包含其说明和加入链接：</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h4>1. <a href="https://max.ru/join/LKsu74vfEKoJCa5SdggIfbG0-OAUj_Xy_TSxqcS2Q00" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">运营专员</a></h4>
                    <p><strong>用途：</strong>用于快速解决问题的信息群组。</p>
                    <p><strong>特点：</strong>在9:00、14:00、17:00提供场地报告，用于监控场地工作流程。</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_33_1.png" alt="运营专员群组报告示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>运营专员群组报告示例</em></p>
                </div>
                    
                    <h4>2. <a href="https://max.ru/join/bMV-CA4fWBQyL9r7R9grMbHTJByE8Jh06QvRkiFW2xk" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">疯狂。场地</a></h4>
                    <p><strong>用途：</strong>已接收车辆的每日报告。MSK管理层的紧急请求，一般公告。</p>
                    
                    <h4>3. <a href="https://max.ru/join/HGORdXUfqF6zy0x8xnqCRdY8znVtij5bchtc4hK3AaU" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">信息。请阅读！</a></h4>
                    <p><strong>用途：</strong>用于发布重要信息和更新的群组。</p>
                    
                    <h4>4. <a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">待检查文件</a></h4>
                    <p><strong>用途：</strong>发布"信息。请阅读！"群组中检查列表中供应商的运输单。以可读格式发布运输单首页。文字说明运输单号和供应商名称。信息在车辆卸货前发送。未经会计部门批准（点赞反应）不得卸货。如反应为停止标志，车辆暂停，直至与供应商的所有问题澄清。</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_33_2.png" alt="文件检查示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    <p><em>文件检查示例</em></p>
                </div>
                    
                    <h4>5. <a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">M-7 / 损坏报告</a></h4>
                    <p><strong>用途：</strong>发布材料验收时发现不符项的M7报告信息（多余、短缺、错配、材料损坏、包装损坏），以及发放/场地转移过程中发生的材料损坏报告。</p>
                    <p><strong>为编制M-7报告，仓库管理员必须按以下格式向群组"M-7 / 损坏报告"提供照片和信息：</strong></p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>运输单首页照片，显示运输单号和司机姓名</li>
                        <li>车辆牵引车照片，车牌清晰可见</li>
                        <li>不符项照片</li>
                        <li>文字说明运输单号、卸货开始和结束的日期和时间</li>
                        <li>文字详细描述不符项。如为短缺 – 说明短缺数量和缺失的GM编号，如为多余 – 说明具体多余的GM。如为损坏 – 说明哪个GM的何种损坏等。运输单中必须注明装箱单以便完整识别材料</li>
                    </ol>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_34_1.png" alt="M-7报告编制示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>M-7报告编制示例</em></p>
                </div>
                    
                    <h4>6. <a href="https://max.ru/join/R8kKygonM4Fs4at-maxqOYJROyHVlb2jEFTOD2qYJAM" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">待核算运输单</a></h4>
                    <p><strong>用途：</strong>卸货后发布交货信息（每辆车）。</p>
                    <p>提供运输单首页照片、卸货材料总体照片、如编制M-7报告则提供损坏材料照片、每个GM的装箱单/货物单位清单/Shipping Mark/标记照片。无接收材料和标记照片，会计部门无权接收材料。</p>
                    <p>文字说明：1. 运输单号，2. 卸货材料的仓库和地点。3. 如已编制，需标注"报告M-7"。如由中国同事进行验收，也需说明。</p>
                    <p>对现场员工消息的反应不相关，这些是会计部门在1C系统中记账状态的内部标识。</p>
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_35_1.png" alt="管材产品验收发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>管材产品验收发布示例</em></p>
                    </div>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_35_2.png" alt="电缆产品验收发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>电缆产品验收发布示例</em></p>
                    </div>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_36_1.png" alt="集装箱验收发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>集装箱验收发布示例</em></p>
                    </div>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_36_2.png" alt="编制M-7报告的验收发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>编制M-7报告的验收发布示例</em></p>
                    </div>
                    
                    <h4>7. <a href="https://max.ru/join/Grxqwg0iOhtNMvh2Cc1d5TKayp2yaPSgvDVs3e6wjpI" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">发放前申请验证</a></h4>
                    <p><strong>用途：</strong>发放前将发放申请照片发送至此群组。会计部门生成1C系统的导出，包含每个申请的当前余额。</p>
                    <p>发放申请需拍摄，确保申请编号和名称位置的前几行清晰可见。未从1C系统获取并核对当前余额与申请数据，禁止发放材料。</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_37_1.png" alt="发放前申请验证示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>发放前申请验证示例</em></p>
                    </div>
                    
                    <h4>8. <a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">按申请发放材料</a></h4>
                    <p><strong>用途：</strong>通过"发放前申请验证"群组验证材料发放申请的当前余额并装货后，需向"按申请发放材料"群组发布以下内容的信息：</p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>发放申请首页完整照片 + 所有带有已发放材料接收标记的页面，可读、未裁剪、未翻转。必须可见接收材料人员的签名，注明接收材料数量和日期</li>
                        <li>带有仓库管理员和货物接收人签名的"材料离场通行证"完整照片</li>
                        <li>接收材料及其每个GM的装箱单/货物单位清单/Shipping Mark/标记的照片。无这些照片，会计部门无权核销材料</li>
                        <li>货物接收人的通行证照片。建筑团队和承包商必须与发放申请中的"申请人（分包商）"项一致</li>
                        <li>文字说明申请编号、已发放GM的数量（如可能，包括名称）、已释放GM的编号（如可能且适用）。如由中国同事执行发放，也需说明</li>
                    </ol>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_37_2.png" alt="按申请发放材料示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>按申请发放材料示例</em></p>
                    </div>
                    
                    <h4>9. <a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">丢失物品</a></h4>
                    <p><strong>用途：</strong>此群组用于快速处理仓库查找货物单位、核算以及发送装箱单和货物单位清单以标记GM的请求，无需查找空闲的会计员工。</p>
                    
                    <p><strong>在以下情况下需向指定群组发送请求：</strong></p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>GM在申请中指定的存储位置缺失，需检查其位置。请求中需注明申请编号和GM，或附上申请照片并标注待查找的GM，注明简要描述。</li>
                        <li>装箱单缺失或损坏，GM需要重新标记。</li>
                    </ol>
                    
                    <p><strong>请求示例：</strong></p>
                    <p>"申请编号SS7-UIO-16400-c12-253中缺失GM №5-2-8，请协助查找"</p>
                    <p>"需要GM №5-2-8的装箱单"</p>
                    
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/image_38_1.png" alt="丢失物品群组请求示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <p><em>丢失物品群组请求示例</em></p>
                    </div>
                    
                    <p><strong>结果，会计部门提供装箱单和场地材料移动信息，以简化查找。</strong></p>
                    <p><em>对现场员工消息的反应不相关，这些是会计部门的内部标识。</em></p>
                    
                    <h4>10. <a href="https://max.ru/join/clTILsQtTWFlCQpAk5wfZcMqebgxndQ2-BVXJxSAtUA" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">IC群组</a></h4>
                    <p><strong>用途：</strong>此群组为来料检验群组创建，用于此方向的快速信息交换，即 – 检验分配、来料检验计划、来料检验资源分配等。</p>
                    
                    <h4>11. <a href="https://max.ru/join/-_LBqqcIpcKTMRJjj8pHN5fxdmpMQOqlY3y9zKyjR-0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">转移</a></h4>
                    <p><strong>用途：</strong>此群组发布所有材料转移和验收清单（参见章节4.3填写"材料转移和验收清单"规则）。发布仓库内转移数据，并分配新存储地址。适用于仓库内转移（地点），以及仓库间转移（地点）。</p>
                    
                    <h4>12. <a href="https://teams.microsoft.com/l/message/19:a383eea2-9fcf-4e39-870f-3d5c53abacf9_b0e49231-9ee7-4aec-b33f-dca486c5c65c@unq.gbl.spaces/1759912665617?context=%7B%22contextType%22%3A%22chat%22%7D" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">材料盘点</a></h4>
                    <p><strong>用途：</strong>群组用于发布盘点清单和此方向的信息交换。参见章节4.9盘点清单内容和填写规则。</p>
                    
                    <h4>13. <a href="https://max.ru/join/HJ3DPOkt4dEMTy-UTtvCOLyL0F4yxouSVMKMlF1WpO8" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">工作安排</a></h4>
                    <p><strong>用途：</strong>创建的聊天用于集中交换周六/周日/节假日工作信息。</p>
                    <p><strong>消息格式：</strong>消息以"加班工作18.10"格式提交。</p>
                    <p><strong>程序：</strong>如已设置点赞，可在此日工作，如未设置，需额外联系以澄清。</p>
                    <p><strong>补充：</strong>此外，此处还发布年假和无薪假消息。</p>
                    
                    <h4>14. <a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">材料检查报告</a></h4>
                    <p><strong>用途：</strong>此群组发布材料检查报告。</p>
                    <p><strong>编制条件：</strong>如在部分发放时发现短缺、多余、错配或材料损坏，需编制检查报告。这适用于已通过质量控制和未通过质量控制的材料。发现不符项时，需联系Business-Trend员工共同检查这些材料。</p>
                    <p><strong>信息提交格式：</strong>发现上述不符项时，现场员工需向"材料检查报告"群组发布以下信息：</p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>材料照片</li>
                        <li>GM编号、装箱单</li>
                        <li>根据货物单位清单的材料名称</li>
                        <li>不符项描述</li>
                    </ol>
                    <p><strong>报告处理：</strong>根据上述数据，会计部门编制检查报告并发送给现场员工和Business-Trend员工签字。</p>
                    
                    <h4>15. <a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">用于水压试验的ZRA / 阀门</a></h4>
                    <p><strong>用途：</strong>群组用于交换转移到水压试验的ZRA（截止调节阀）信息。</p>
                    
                    <h4>16. <a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">ZRA转移（试验）</a></h4>
                    <p><strong>用途：</strong>创建的群组用于显示用于水压试验的ZRA（截止调节阀）离场通行证和从水压试验的转移清单。</p>
                    <p><strong>消息格式：</strong>消息中需注明：</p>
                    <ol style="margin: 10px 0; padding-left: 20px;">
                        <li>从仓库发放时的"离场通行证"照片/从水压试验转移时的转移清单照片</li>
                        <li>从仓库发货时的装箱单/货物单位清单/Shipping Marks照片</li>
                        <li>按以下示例文字说明</li>
                    </ol>
                    <p><strong>发布示例：</strong></p>
                    <div class="image-container" style="margin: 15px 0;">
                        <img src="images/arm1.png" alt="ZRA发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                        <img src="images/arm2.png" alt="ZRA发布示例" style="max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0;">
                    </div>
                </div>
            `
            }
        },
        '5.2': {
            title: {
                ru: 'Перечень групп',
                en: 'List of Groups',
                zh: '群组列表'
            },
            content: {
                ru: `
                <h3>5.2 ПЕРЕЧЕНЬ ГРУПП</h3>
                
                <p>Ниже представлен полный перечень всех информационных групп с прямыми ссылками для быстрого доступа:</p>
                
                <div style="margin: 20px 0;">
                    <h4>Информационные группы:</h4>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/LKsu74vfEKoJCa5SdggIfbG0-OAUj_Xy_TSxqcS2Q00" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">1. ОПЕРУПОЛНОМОЧЕННЫЕ</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/bMV-CA4fWBQyL9r7R9grMbHTJByE8Jh06QvRkiFW2xk" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">2. БЕЗУМИЕ. ПЛОЩАДКА</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/HGORdXUfqF6zy0x8xnqCRdY8znVtij5bchtc4hK3AaU" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">3. ИНФОРМАЦИЯ. ЧИТАЙ МЕНЯ!</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">4. ДОКУМЕНТЫ НА ПРОВЕРКУ</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">5. М-7 / Акты о повреждениях</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/R8kKygonM4Fs4at-maxqOYJROyHVlb2jEFTOD2qYJAM" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">6. ДЛЯ ТН ДЛЯ УЧЕТА</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/Grxqwg0iOhtNMvh2Cc1d5TKayp2yaPSgvDVs3e6wjpI" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">7. ПРОВЕРКА ЗАЯВОК ПЕРЕД ВЫДАЧЕЙ</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">8. ВЫДАЧА ТМЦ ПО ЗАЯВКАМ</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">9. ПОТЕРЯШКИ</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/clTILsQtTWFlCQpAk5wfZcMqebgxndQ2-BVXJxSAtUA" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">10. IC GROUP</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/-_LBqqcIpcKTMRJjj8pHN5fxdmpMQOqlY3y9zKyjR-0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">11. ПЕРЕМЕЩЕНИЯ</a></li>
                        <li style="margin: 10px 0;"><a href="https://teams.microsoft.com/l/message/19:a383eea2-9fcf-4e39-870f-3d5c53abacf9_b0e49231-9ee7-4aec-b33f-dca486c5c65c@unq.gbl.spaces/1759912665617?context=%7B%22contextType%22%3A%22chat%22%7D" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">12. ИНВЕНТАРИЗАЦИЯ ТМЦ</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/HJ3DPOkt4dEMTy-UTtvCOLyL0F4yxouSVMKMlF1WpO8" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">13. ГРАФИК ВЫХОДА НА РАБОТУ</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">14. АКТЫ ОСМОТРА ТМЦ</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">15. ЗРА ДЛЯ ГИ / VALVES</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">16. ПЕРЕМЕЩЕНИЯ ЗРА (ИСПЫТАНИЯ)</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/0iTrekxICkpxlcHTlbX4YPjeNi9vQOEi0jKhELKX6gE" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">17. ВОЗВРАТ ТМЦ НА СКЛАД</a></li>
                    </ul>
                </div>
                
                <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #2563eb;">
                    <p><strong>💡 Совет:</strong> Для получения подробной информации о назначении и правилах использования каждой группы, перейдите в раздел <a href="#5.1" style="color: #2563eb; text-decoration: none; font-weight: 600;">5.1 "Детальное описание информационных групп" 🔗</a>.</p>
                </div>
            `,
                en: `
                <h3>5.2 LIST OF GROUPS</h3>
                
                <p>Below is a complete list of all information groups with direct links for quick access:</p>
                
                <div style="margin: 20px 0;">
                    <h4>Information Groups:</h4>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/LKsu74vfEKoJCa5SdggIfbG0-OAUj_Xy_TSxqcS2Q00" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">1. OPERATIONAL OFFICERS</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/bMV-CA4fWBQyL9r7R9grMbHTJByE8Jh06QvRkiFW2xk" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">2. CRAZY. SITE</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/HGORdXUfqF6zy0x8xnqCRdY8znVtij5bchtc4hK3AaU" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">3. INFORMATION. READ ME!</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">4. DOCUMENTS FOR VERIFICATION</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">5. M-7 / Damage Acts</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/R8kKygonM4Fs4at-maxqOYJROyHVlb2jEFTOD2qYJAM" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">6. FOR TB FOR ACCOUNTING</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/Grxqwg0iOhtNMvh2Cc1d5TKayp2yaPSgvDVs3e6wjpI" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">7. REQUEST VERIFICATION BEFORE ISSUANCE</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">8. MATERIAL ISSUANCE BY REQUESTS</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">9. LOST ITEMS</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/clTILsQtTWFlCQpAk5wfZcMqebgxndQ2-BVXJxSAtUA" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">10. IC GROUP</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/-_LBqqcIpcKTMRJjj8pHN5fxdmpMQOqlY3y9zKyjR-0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">11. TRANSFERS</a></li>
                        <li style="margin: 10px 0;"><a href="https://teams.microsoft.com/l/message/19:a383eea2-9fcf-4e39-870f-3d5c53abacf9_b0e49231-9ee7-4aec-b33f-dca486c5c65c@unq.gbl.spaces/1759912665617?context=%7B%22contextType%22%3A%22chat%22%7D" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">12. MATERIAL INVENTORY</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/HJ3DPOkt4dEMTy-UTtvCOLyL0F4yxouSVMKMlF1WpO8" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">13. WORK SCHEDULE</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">14. MATERIAL INSPECTION ACTS</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">15. ZRA FOR HI / VALVES</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">16. ZRA TRANSFERS (TESTING)</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/0iTrekxICkpxlcHTlbX4YPjeNi9vQOEi0jKhELKX6gE" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">17. MATERIAL RETURN TO WAREHOUSE</a></li>
                    </ul>
                </div>
                
                <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #2563eb;">
                    <p><strong>💡 Tip:</strong> For detailed information on the purpose and usage rules of each group, go to section <a href="#5.1" style="color: #2563eb; text-decoration: none; font-weight: 600;">5.1 "Detailed Description of Information Groups" 🔗</a>.</p>
                </div>
            `,
                zh: `
                <h3>5.2 群组列表</h3>
                
                <p>以下是所有信息群组的完整列表，包含快速访问的直接链接：</p>
                
                <div style="margin: 20px 0;">
                    <h4>信息群组：</h4>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/LKsu74vfEKoJCa5SdggIfbG0-OAUj_Xy_TSxqcS2Q00" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">1. 运营专员</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/bMV-CA4fWBQyL9r7R9grMbHTJByE8Jh06QvRkiFW2xk" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">2. 疯狂。场地</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/HGORdXUfqF6zy0x8xnqCRdY8znVtij5bchtc4hK3AaU" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">3. 信息。请阅读！</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/NGo0fZVP0zrCLgcrE5g494_rXWzx0eEo8ny0RuqPw7w" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">4. 待检查文件</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/_NSzWmrkJgnaXRkNsTYrPuJzX65KGq6ibbleJz-_bCo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">5. M-7 / 损坏报告</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/R8kKygonM4Fs4at-maxqOYJROyHVlb2jEFTOD2qYJAM" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">6. 待核算运输单</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/Grxqwg0iOhtNMvh2Cc1d5TKayp2yaPSgvDVs3e6wjpI" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">7. 发放前申请验证</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/HDjV25JnnpTX2Eif3VA2wEFIhps5Y7-Dsgz9NtpxT7U" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">8. 按申请发放材料</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/__LL0tn1cahYVmhaaCyMzBWoEEzH5sWtiKqw3YLkX2Q" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">9. 丢失物品</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/clTILsQtTWFlCQpAk5wfZcMqebgxndQ2-BVXJxSAtUA" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">10. IC群组</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/-_LBqqcIpcKTMRJjj8pHN5fxdmpMQOqlY3y9zKyjR-0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">11. 转移</a></li>
                        <li style="margin: 10px 0;"><a href="https://teams.microsoft.com/l/message/19:a383eea2-9fcf-4e39-870f-3d5c53abacf9_b0e49231-9ee7-4aec-b33f-dca486c5c65c@unq.gbl.spaces/1759912665617?context=%7B%22contextType%22%3A%22chat%22%7D" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">12. 材料盘点</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/HJ3DPOkt4dEMTy-UTtvCOLyL0F4yxouSVMKMlF1WpO8" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">13. 工作安排</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/SOZ2VyNPU4VTl_uxEIxcBZW_KFoRByFzzfnwPixfw7A" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">14. 材料检查报告</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/GthBIiEsWBKpGwnJ168IeW1npGXAc21MYANTRZ2LyIs" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">15. 用于水压试验的ZRA / 阀门</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/b-_S5PvokzvD4U_SzItya48Csch0-mVikRebSnEA3lo" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">16. ZRA转移（试验）</a></li>
                        <li style="margin: 10px 0;"><a href="https://max.ru/join/0iTrekxICkpxlcHTlbX4YPjeNi9vQOEi0jKhELKX6gE" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">17. 材料退回仓库</a></li>
                    </ul>
                </div>
                
                <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #2563eb;">
                    <p><strong>💡 提示：</strong>要获取每个群组的用途和使用规则的详细信息，请转到章节 <a href="#5.1" style="color: #2563eb; text-decoration: none; font-weight: 600;">5.1 "信息群组详细说明" 🔗</a>。</p>
                </div>
            `
            }
        },
        '5.3': {
            title: {
                ru: 'Полезные ссылки',
                en: 'Useful Links',
                zh: '有用链接'
            },
            content: {
                ru: `
                <h3>5.3 ПОЛЕЗНЫЕ ССЫЛКИ</h3>
                
                <p>В данном разделе собраны полезные ссылки для быстрого доступа к важным ресурсам и системам.</p>
                
                <div style="margin: 20px 0;">
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1CD7d3T1QVWLJHrPMUyD-CQBv8LhWBUjk/edit?gid=1486374551#gid=1486374551" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">📦 Наполнение складов</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">🚛 Диспетчерская таблица</a></li>
                        <li style="margin: 10px 0;"><a href="https://drive.google.com/drive/folders/1WEGxMYp8Ockkv1aKnxubz2sg4lvbvXnF" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">🗺️ Карты складов</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1y03T2JasqOd7AMUjEhPm1qvFX4RwjnwT/edit?gid=1336949133#gid=1336949133" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">📞 Контакты склада</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1Ksengfzhqwu7sXiHpHyoPf5tnQd5L9Ai/edit?gid=763753371#gid=763753371" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">📋 Список поставщиков на сверку</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1MfCMgEFtFrTynlRB2aUz0X4MxGwuVUva0cyyxeeywEE/edit?gid=0#gid=0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">🔧 Расходники для склада</a></li>
                    </ul>
                </div>
                
                <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #28a745;">
                    <p><strong>💡 Примечание:</strong> Данный раздел будет дополняться по мере появления новых полезных ресурсов и ссылок.</p>
                </div>
            `,
                en: `
                <h3>5.3 USEFUL LINKS</h3>
                
                <p>This section contains useful links for quick access to important resources and systems.</p>
                
                <div style="margin: 20px 0;">
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1CD7d3T1QVWLJHrPMUyD-CQBv8LhWBUjk/edit?gid=1486374551#gid=1486374551" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">📦 Warehouse Capacity</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">🚛 Dispatch Table</a></li>
                        <li style="margin: 10px 0;"><a href="https://drive.google.com/drive/folders/1WEGxMYp8Ockkv1aKnxubz2sg4lvbvXnF" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">🗺️ Warehouse Maps</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1y03T2JasqOd7AMUjEhPm1qvFX4RwjnwT/edit?gid=1336949133#gid=1336949133" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">📞 Warehouse Contacts</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1Ksengfzhqwu7sXiHpHyoPf5tnQd5L9Ai/edit?gid=763753371#gid=763753371" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">📋 Supplier Verification List</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1MfCMgEFtFrTynlRB2aUz0X4MxGwuVUva0cyyxeeywEE/edit?gid=0#gid=0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">🔧 Warehouse Consumables</a></li>
                    </ul>
                </div>
                
                <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #28a745;">
                    <p><strong>💡 Note:</strong> This section will be updated as new useful resources and links become available.</p>
                </div>
            `,
                zh: `
                <h3>5.3 有用链接</h3>
                
                <p>本节包含快速访问重要资源和系统的有用链接。</p>
                
                <div style="margin: 20px 0;">
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1CD7d3T1QVWLJHrPMUyD-CQBv8LhWBUjk/edit?gid=1486374551#gid=1486374551" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">📦 仓库容量</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1_3yw0wras6aP1Mfi_0k157Ja9whFUSgZk6vMLXsOB8A/edit?gid=884478862#gid=884478862" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">🚛 调度表</a></li>
                        <li style="margin: 10px 0;"><a href="https://drive.google.com/drive/folders/1WEGxMYp8Ockkv1aKnxubz2sg4lvbvXnF" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">🗺️ 仓库地图</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1y03T2JasqOd7AMUjEhPm1qvFX4RwjnwT/edit?gid=1336949133#gid=1336949133" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">📞 仓库联系方式</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1Ksengfzhqwu7sXiHpHyoPf5tnQd5L9Ai/edit?gid=763753371#gid=763753371" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">📋 供应商核对清单</a></li>
                        <li style="margin: 10px 0;"><a href="https://docs.google.com/spreadsheets/d/1MfCMgEFtFrTynlRB2aUz0X4MxGwuVUva0cyyxeeywEE/edit?gid=0#gid=0" target="_blank" style="color: #2563eb; text-decoration: none; font-weight: 600;">🔧 仓库消耗品</a></li>
                    </ul>
                </div>
                
                <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #28a745;">
                    <p><strong>💡 注意：</strong>随着新的有用资源和链接的出现，本节将不断更新。</p>
                </div>
            `
            }
        },
        // Глава 6: Общие хозяйственные вопросы
        '6.1': {
            title: {
                ru: 'ЗАЯВКИ НА КАНЦЕЛЯРИЮ И РАСХОДНЫЕ МАТЕРИАЛЫ',
                en: 'REQUESTS FOR STATIONERY AND CONSUMABLES',
                zh: '文具和消耗品申请'
            },
            content: {
                ru: `
                <h3>Заявка на канцелярию</h3>
                <p>Заявка на канцелярию ежемесячно приходит на заполнение в общей группе СС7 в которую Вас добавили сотрудники HR. Полевые сотрудники должны определиться с наименованием и количеством требуемой канцелярии, предоставить данные по потребности на сотрудника учета – Сафина Ирика.</p>
                
                <h3>Расходные материалы</h3>
                <p>Расходные материалы (брус, инструмент, гвозди, тенты и тд) запрашиваются через диспетчеров. Диспетчеры направляют письменный запрос (email) на китайских коллег.</p>
            `,
                en: `
                <h3>Stationery Request</h3>
                <p>The stationery request comes monthly for completion in the general CC7 group to which HR employees have added you. Field employees must determine the name and quantity of required stationery and provide demand data to the accounting employee – Safina Irika.</p>
                
                <h3>Consumables</h3>
                <p>Consumables (beams, tools, nails, tarps, etc.) are requested through dispatchers. Dispatchers send a written request (email) to Chinese colleagues.</p>
            `,
                zh: `
                <h3>文具申请</h3>
                <p>文具申请每月在HR员工将您添加的CC7总群组中发布，供填写。现场员工需确定所需文具的名称和数量，并向会计员工萨菲娜·伊里卡提供需求数据。</p>
                
                <h3>消耗品</h3>
                <p>消耗品（横梁、工具、钉子、防水布等）通过调度员申请。调度员向中国同事发送书面请求（电子邮件）。</p>
            `
            }
        },
        '6.2': {
            title: {
                ru: 'ВРЕМЯ ТРУДА И ОТДЫХА',
                en: 'WORK AND REST TIME',
                zh: '工作和休息时间'
            },
            content: {
                ru: `
                <h3>Режим работы</h3>
                <p>Начало рабочего дня определено в 8.00 утра. В это время каждый полевой сотрудник должен быть на своей локации и готов к работе. Обеденное время – с 12.00 до 13.00. Окончание рабочего времени – 18.00.</p>
                
                <h3>Перерывы</h3>
                <p>Также предусмотрены перерывы на 15 минут в 10.00 и 15.00.</p>
            `,
                en: `
                <h3>Work Schedule</h3>
                <p>The start of the working day is set at 8:00 AM. At this time, each field employee must be at their location and ready to work. Lunch time is from 12:00 to 13:00. End of working time is 18:00.</p>
                
                <h3>Breaks</h3>
                <p>15-minute breaks are also provided at 10:00 and 15:00.</p>
            `,
                zh: `
                <h3>工作时间</h3>
                <p>工作日开始时间为上午8:00。此时，每位现场员工必须在其地点并准备就绪。午餐时间为12:00至13:00。工作结束时间为18:00。</p>
                
                <h3>休息</h3>
                <p>在10:00和15:00还提供15分钟休息时间。</p>
            `
            }
        },
        '6.3': {
            title: {
                ru: 'ОФОРМЛЕНИЕ ОТПУСКА И ОТПУСКА БЕЗ СОХРАНЕНИЯ ЗАРАБОТНОЙ ПЛАТЫ',
                en: 'VACATION AND UNPAID LEAVE APPLICATION',
                zh: '休假和无薪假申请'
            },
            content: {
                ru: `
                <h3>Обычный отпуск</h3>
                <p>Заявление на отпуск должно быть предоставлено за 2 недели до первого дня выхода в отпуск.</p>
                
                <h3>Отпуск без сохранения заработной платы</h3>
                <p>Если необходимо взять отпуск без сохранения заработной платы - необходимо заполнить заявление на отпуск без содержания. Бланки заявлений должны быть на локациях. Оригинал передавайте на С2.3-1 в 9 вагончик (тут также есть пустые бланки для полевиков). Заявление необходимо предоставлять заблаговременно за 2 дня до планируемого выходного, для того, чтобы собрать необходимые подписи и сдать заявление в Отдел Кадров.</p>
            `,
                en: `
                <h3>Regular Vacation</h3>
                <p>The vacation application must be submitted 2 weeks before the first day of vacation.</p>
                
                <h3>Unpaid Leave</h3>
                <p>If it is necessary to take unpaid leave - it is necessary to fill out an unpaid leave application. Application forms should be available at locations. Submit the original to C2.3-1 in trailer 9 (there are also blank forms for field workers here). The application must be submitted in advance 2 days before the planned day off, in order to collect the necessary signatures and submit the application to the HR Department.</p>
            `,
                zh: `
                <h3>常规休假</h3>
                <p>休假申请必须在休假第一天前2周提交。</p>
                
                <h3>无薪假</h3>
                <p>如需申请无薪假，需填写无薪假申请。申请表应在各地点提供。原件提交至C2.3-1的9号拖车（此处也有现场员工的空白表格）。申请需在计划休息日前2天提前提交，以便收集必要的签名并将申请提交至人力资源部。</p>
            `
            }
        },
        '6.4': {
            title: {
                ru: 'ПЕРЕДАЧА ДОКУМЕНТОВ В УЧЕТ',
                en: 'DOCUMENT TRANSFER TO ACCOUNTING',
                zh: '文件移交会计部门'
            },
            content: {
                ru: `
                <p>Данный раздел находится в разработке и будет обновлен в ближайшее время.</p>
            `,
                en: `
                <p>This section is under development and will be updated soon.</p>
            `,
                zh: `
                <p>本节正在开发中，将很快更新。</p>
            `
            }
        }
    }
};

// Система переводов (i18n)
const translations = {
    ru: {
        // UI элементы
        appTitle: 'Справочник СКЛАД',
        searchPlaceholder: '🔍 Поиск по справочнику...',
        searchAriaLabel: 'Поиск по справочнику кладовщика',
        installApp: 'Установить приложение',
        installAppAria: 'Установить приложение на устройство',
        home: 'Главная',
        back: '← Назад',
        next: 'Далее →',
        backAria: 'Перейти к предыдущему разделу',
        homeAria: 'Вернуться на главную страницу',
        nextAria: 'Перейти к следующему разделу',
        feedback: '💬 Отзывы и предложения',
        footerText: 'Special thanks to Egor Sataev © 2025 Справочник СКЛАД',
        imageModalAlt: 'Увеличенное изображение',
        closeWindow: 'Закрыть окно',
        backToChapters: '← Назад к главам',
        sectionNotFound: 'Раздел не найден:',
        chooseSubsection: 'Выберите подраздел из списка ниже:',
        nothingFound: 'Ничего не найдено',
        section: 'Раздел',
        sectionContent: 'Содержимое раздела',
        // Форма обратной связи
        feedbackTitle: '💬 Отзывы и предложения',
        feedbackDescription: 'Ваше мнение очень важно для нас! Поделитесь своими мыслями, предложениями или сообщите об ошибках.',
        feedbackNameLabel: 'Ваше имя (необязательно):',
        feedbackNamePlaceholder: 'Введите ваше имя',
        feedbackEmailLabel: 'Ваш email (необязательно):',
        feedbackEmailPlaceholder: 'your.email@example.com',
        feedbackMessageLabel: 'Сообщение:',
        feedbackMessagePlaceholder: 'Напишите ваш отзыв, предложение или сообщение об ошибке...',
        feedbackSubmit: 'Отправить',
        feedbackSending: 'Отправка...',
        feedbackSuccess: 'Спасибо! Ваш отзыв успешно отправлен.',
        feedbackError: 'Произошла ошибка при отправке отзыва. Пожалуйста, попробуйте позже.',
        feedbackRequired: 'Пожалуйста, заполните поле сообщения',
        feedbackFormError: 'Ошибка: элементы формы не найдены. Пожалуйста, обновите страницу.'
    },
    en: {
        // UI elements
        appTitle: 'WAREHOUSE GUIDE',
        searchPlaceholder: '🔍 Search the guide...',
        searchAriaLabel: 'Search warehouse guide',
        installApp: 'Install App',
        installAppAria: 'Install app on device',
        home: 'Home',
        back: '← Back',
        next: 'Next →',
        backAria: 'Go to previous section',
        homeAria: 'Return to home page',
        nextAria: 'Go to next section',
        feedback: '💬 Feedback & Suggestions',
        footerText: 'Special thanks to Egor Sataev © 2025 WAREHOUSE GUIDE',
        imageModalAlt: 'Enlarged image',
        closeWindow: 'Close window',
        backToChapters: '← Back to chapters',
        sectionNotFound: 'Section not found:',
        chooseSubsection: 'Choose a subsection from the list below:',
        nothingFound: 'Nothing found',
        section: 'Section',
        sectionContent: 'Section content',
        // Feedback form
        feedbackTitle: '💬 Feedback & Suggestions',
        feedbackDescription: 'Your opinion is very important to us! Share your thoughts, suggestions, or report errors.',
        feedbackNameLabel: 'Your name (optional):',
        feedbackNamePlaceholder: 'Enter your name',
        feedbackEmailLabel: 'Your email (optional):',
        feedbackEmailPlaceholder: 'your.email@example.com',
        feedbackMessageLabel: 'Message:',
        feedbackMessagePlaceholder: 'Write your feedback, suggestion, or error report...',
        feedbackSubmit: 'Send',
        feedbackSending: 'Sending...',
        feedbackSuccess: 'Thank you! Your feedback has been sent successfully.',
        feedbackError: 'An error occurred while sending feedback. Please try again later.',
        feedbackRequired: 'Please fill in the message field',
        feedbackFormError: 'Error: form elements not found. Please refresh the page.'
    },
    zh: {
        // UI 元素
        appTitle: '仓库指南',
        searchPlaceholder: '🔍 搜索指南...',
        searchAriaLabel: '搜索仓库指南',
        installApp: '安装应用',
        installAppAria: '在设备上安装应用',
        home: '首页',
        back: '← 返回',
        next: '下一步 →',
        backAria: '转到上一节',
        homeAria: '返回首页',
        nextAria: '转到下一节',
        feedback: '💬 反馈和建议',
        footerText: '特别感谢 Egor Sataev © 2025 仓库指南',
        imageModalAlt: '放大图像',
        closeWindow: '关闭窗口',
        backToChapters: '← 返回章节',
        sectionNotFound: '未找到部分:',
        chooseSubsection: '从下面的列表中选择一个子部分:',
        nothingFound: '未找到',
        section: '部分',
        sectionContent: '部分内容',
        // 反馈表单
        feedbackTitle: '💬 反馈和建议',
        feedbackDescription: '您的意见对我们非常重要！分享您的想法、建议或报告错误。',
        feedbackNameLabel: '您的姓名（可选）:',
        feedbackNamePlaceholder: '输入您的姓名',
        feedbackEmailLabel: '您的电子邮件（可选）:',
        feedbackEmailPlaceholder: 'your.email@example.com',
        feedbackMessageLabel: '消息:',
        feedbackMessagePlaceholder: '写下您的反馈、建议或错误报告...',
        feedbackSubmit: '发送',
        feedbackSending: '发送中...',
        feedbackSuccess: '谢谢！您的反馈已成功发送。',
        feedbackError: '发送反馈时发生错误。请稍后再试。',
        feedbackRequired: '请填写消息字段',
        feedbackFormError: '错误：未找到表单元素。请刷新页面。'
    }
};

// Текущий язык (по умолчанию русский, или из localStorage)
let currentLanguage = localStorage.getItem('appLanguage') || 'ru';

// Функция получения перевода
function t(key) {
    return translations[currentLanguage][key] || translations['ru'][key] || key;
}

// Функция получения переведенного значения (для совместимости со старой и новой структурой)
function getTranslatedValue(obj, lang = currentLanguage) {
    if (!obj) return '';
    // Если это объект с переводами (новая структура)
    if (typeof obj === 'object' && (obj.ru || obj.en || obj.zh)) {
        return obj[lang] || obj.ru || obj.en || obj.zh || '';
    }
    // Если это строка (старая структура)
    if (typeof obj === 'string') {
        return obj;
    }
    return '';
}

// Функция переключения языка
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error('Language not supported:', lang);
        return;
    }
    currentLanguage = lang;
    localStorage.setItem('appLanguage', lang);
    document.documentElement.lang = lang;
    
    // Обновляем переключатель языка
    updateLanguageSelector();
    
    updateUI();
    // Перерисовываем текущий контент с новым языком
    if (currentView === 'chapters') {
        renderChapters();
    } else if (currentContentId) {
        showContentDirect(currentContentId);
    }
    
    // Закрываем dropdown
    const dropdown = document.getElementById('languageDropdown');
    const selector = document.querySelector('.language-selector');
    if (dropdown) {
        dropdown.classList.remove('show');
        dropdown.style.display = 'none';
        dropdown.style.visibility = 'hidden';
        // Возвращаем dropdown обратно в селектор при закрытии
        if (dropdown.parentNode === document.body && selector) {
            selector.appendChild(dropdown);
        }
        document.body.classList.remove('language-dropdown-open');
    }
}

// Обновление переключателя языка
function updateLanguageSelector() {
    const flagMap = {
        'ru': '🇷🇺',
        'en': '🇬🇧',
        'zh': '🇨🇳'
    };
    const nameMap = {
        'ru': 'Русский',
        'en': 'English',
        'zh': '中文'
    };
    
    const flagEl = document.getElementById('currentLanguageFlag');
    const nameEl = document.getElementById('currentLanguageName');
    
    if (flagEl) flagEl.textContent = flagMap[currentLanguage] || '🇷🇺';
    if (nameEl) nameEl.textContent = nameMap[currentLanguage] || 'Русский';
    
    // Обновляем активный элемент в dropdown
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
        option.classList.remove('active');
        const langCode = option.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
        if (langCode === currentLanguage) {
            option.classList.add('active');
        }
    });
}

// Переключение dropdown языка
function toggleLanguageDropdown(event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    const dropdown = document.getElementById('languageDropdown');
    const selector = document.querySelector('.language-selector');
    const btn = document.querySelector('.language-btn');
    
    if (dropdown && selector && btn) {
        const isShowing = dropdown.classList.contains('show');
        
        if (!isShowing) {
            // Получаем позицию кнопки для fixed позиционирования
            const btnRect = btn.getBoundingClientRect();
            
            // Перемещаем dropdown в body, если он еще не там (для избежания проблем со stacking context)
            if (dropdown.parentNode !== document.body) {
                document.body.appendChild(dropdown);
            }
            
            // Добавляем класс на body для CSS правил (до показа dropdown)
            document.body.classList.add('language-dropdown-open');
            
            // Вычисляем ширину dropdown (равна ширине кнопки или минимум 150px)
            const dropdownWidth = Math.max(btnRect.width, 150);
            
            // Устанавливаем базовую позицию для fixed dropdown
            let topPos = btnRect.bottom + 8;
            let leftPos = btnRect.left;
            
            // Устанавливаем стили для получения размеров
            dropdown.style.cssText = `
                position: fixed !important;
                top: ${topPos}px;
                left: ${leftPos}px;
                width: ${dropdownWidth}px;
                display: block;
                visibility: hidden;
                z-index: 2147483647 !important;
                margin: 0 !important;
                transform: none !important;
            `;
            dropdown.classList.add('show');
            
            // Получаем реальные размеры dropdown
            const dropdownRect = dropdown.getBoundingClientRect();
            const dropdownHeight = dropdownRect.height;
            
            // Проверяем границы экрана и корректируем позицию
            // Если выходит за правый край
            if (leftPos + dropdownWidth > window.innerWidth - 10) {
                leftPos = window.innerWidth - dropdownWidth - 10;
            }
            
            // Если выходит за левый край
            if (leftPos < 10) {
                leftPos = 10;
            }
            
            // Если выходит за нижний край - показываем сверху
            if (topPos + dropdownHeight > window.innerHeight - 10) {
                topPos = btnRect.top - dropdownHeight - 8;
                if (topPos < 10) {
                    topPos = 10;
                }
            }
            
            // Устанавливаем финальную позицию и делаем видимым
            dropdown.style.cssText = `
                position: fixed !important;
                top: ${topPos}px;
                left: ${leftPos}px;
                width: ${dropdownWidth}px;
                display: block !important;
                visibility: visible;
                z-index: 2147483647 !important;
                margin: 0 !important;
                transform: none !important;
            `;
        } else {
            dropdown.classList.remove('show');
            dropdown.style.display = 'none';
            dropdown.style.visibility = 'hidden';
            // Возвращаем dropdown обратно в селектор при закрытии
            if (dropdown.parentNode === document.body && selector) {
                selector.appendChild(dropdown);
            }
            document.body.classList.remove('language-dropdown-open');
        }
    }
}

// Закрытие dropdown при клике вне его
document.addEventListener('click', function(event) {
    const selector = document.querySelector('.language-selector');
    const dropdown = document.getElementById('languageDropdown');
    const btn = document.querySelector('.language-btn');
    
    if (selector && dropdown && btn) {
        // Проверяем, был ли клик внутри селектора или dropdown
        const clickedInside = selector.contains(event.target) || dropdown.contains(event.target);
        
        if (!clickedInside && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            dropdown.style.display = 'none';
            dropdown.style.visibility = 'hidden';
            // Возвращаем dropdown обратно в селектор при закрытии
            if (dropdown.parentNode === document.body && selector) {
                selector.appendChild(dropdown);
            }
            document.body.classList.remove('language-dropdown-open');
        }
    }
});

// Функция для выбора языка (вызывается из HTML onclick)
function selectLanguage(lang, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    
    console.log('selectLanguage called with:', lang);
    
    if (!lang || !translations[lang]) {
        console.error('Invalid language:', lang);
        return false;
    }
    
    changeLanguage(lang);
    return false;
}

// Функция для инициализации обработчиков языка (теперь не нужна, но оставляем для совместимости)
function initLanguageHandlers() {
    console.log('Language handlers: using inline onclick handlers');
}

// Закрытие dropdown при клике вне его (с задержкой, чтобы не мешать кликам по опциям)
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('languageDropdown');
    const selector = document.querySelector('.language-selector');
    const btn = document.querySelector('.language-btn');
    
    // Не закрываем, если клик был по кнопке или внутри dropdown
    if (btn && btn.contains(event.target)) {
        return;
    }
    
    if (dropdown && dropdown.contains(event.target)) {
        return;
    }
    
    // Закрываем dropdown при клике вне его
    if (selector && !selector.contains(event.target) && dropdown && dropdown.classList.contains('show')) {
        setTimeout(() => {
            dropdown.classList.remove('show');
        }, 100);
    }
}, false);

// Обновление UI элементов
function updateUI() {
    // Заголовок приложения
    const appTitle = document.querySelector('.header-text h1');
    if (appTitle) appTitle.textContent = t('appTitle');
    
    // Поиск
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = t('searchPlaceholder');
        searchInput.setAttribute('aria-label', t('searchAriaLabel'));
    }
    
    // Кнопка установки
    const installBtn = document.getElementById('installBtn');
    if (installBtn) {
        installBtn.textContent = t('installApp');
        installBtn.setAttribute('aria-label', t('installAppAria'));
    }
    
    // Кнопки навигации (нижние)
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.textContent = t('back');
        prevBtn.setAttribute('aria-label', t('backAria'));
    }
    
    const homeBtn = document.querySelector('.home-btn');
    if (homeBtn) {
        homeBtn.textContent = '🏠 ' + t('home');
        homeBtn.setAttribute('aria-label', t('homeAria'));
    }
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.textContent = t('next');
        nextBtn.setAttribute('aria-label', t('nextAria'));
    }
    
    // Кнопки навигации (верхние)
    const prevBtnTop = document.getElementById('prevBtnTop');
    if (prevBtnTop) {
        prevBtnTop.textContent = t('back');
        prevBtnTop.setAttribute('aria-label', t('backAria'));
    }
    
    const homeBtnTop = document.querySelector('.home-btn-top');
    if (homeBtnTop) {
        homeBtnTop.textContent = '🏠 ' + t('home');
        homeBtnTop.setAttribute('aria-label', t('homeAria'));
    }
    
    const nextBtnTop = document.getElementById('nextBtnTop');
    if (nextBtnTop) {
        nextBtnTop.textContent = t('next');
        nextBtnTop.setAttribute('aria-label', t('nextAria'));
    }
    
    // Хлебные крошки
    const breadcrumbHome = document.querySelector('.breadcrumb-item');
    if (breadcrumbHome && breadcrumbHome.onclick) {
        breadcrumbHome.textContent = t('home');
    }
    
    // Кнопка обратной связи
    const feedbackBtn = document.querySelector('.feedback-btn');
    if (feedbackBtn) feedbackBtn.textContent = t('feedback');
    
    // Футер
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.innerHTML = t('footerText') + ' <button class="feedback-btn" onclick="openFeedbackModal()">' + t('feedback') + '</button>';
    }
    
    // Модальное окно изображений
    const modalImage = document.getElementById('modalImage');
    if (modalImage) modalImage.alt = t('imageModalAlt');
    
    // Обновление формы обратной связи
    updateFeedbackForm();
}

// Обновление формы обратной связи
function updateFeedbackForm() {
    const feedbackTitle = document.querySelector('#feedbackModal h2');
    if (feedbackTitle) feedbackTitle.textContent = t('feedbackTitle');
    
    const feedbackDesc = document.querySelector('#feedbackModal .feedback-form p');
    if (feedbackDesc) feedbackDesc.textContent = t('feedbackDescription');
    
    const nameLabel = document.querySelector('label[for="feedbackName"]');
    if (nameLabel) nameLabel.textContent = t('feedbackNameLabel');
    
    const nameInput = document.getElementById('feedbackName');
    if (nameInput) nameInput.placeholder = t('feedbackNamePlaceholder');
    
    const emailLabel = document.querySelector('label[for="feedbackEmail"]');
    if (emailLabel) emailLabel.textContent = t('feedbackEmailLabel');
    
    const emailInput = document.getElementById('feedbackEmail');
    if (emailInput) emailInput.placeholder = t('feedbackEmailPlaceholder');
    
    const messageLabel = document.querySelector('label[for="feedbackMessage"]');
    if (messageLabel) {
        messageLabel.innerHTML = t('feedbackMessageLabel') + ' <span style="color: #ef4444;">*</span>';
    }
    
    const messageInput = document.getElementById('feedbackMessage');
    if (messageInput) messageInput.placeholder = t('feedbackMessagePlaceholder');
    
    const submitBtn = document.getElementById('feedbackSubmitBtn');
    if (submitBtn) submitBtn.textContent = t('feedbackSubmit');
}

// Глобальные переменные
let currentView = 'chapters';
let searchResults = [];
let currentContentId = null;
let isNavigating = false; // Флаг для предотвращения конфликтов навигации
let navigationHandled = false; // Флаг для предотвращения вызова restoreState после popstate

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    try {
        // Проверяем, что все элементы существуют
        const chaptersView = document.getElementById('chaptersView');
        const contentView = document.getElementById('contentView');
        
        if (!chaptersView || !contentView) {
            console.error('Required elements not found!');
            return;
        }
        
        console.log('Elements found, proceeding with initialization...');
        
        // Принудительное обновление Service Worker при запуске
        try {
            forceUpdateServiceWorker();
        } catch (e) {
            console.error('Error in forceUpdateServiceWorker:', e);
        }
        
        try {
            setupSearch();
        } catch (e) {
            console.error('Error in setupSearch:', e);
        }
        
        try {
            setupPWA();
        } catch (e) {
            console.error('Error in setupPWA:', e);
        }
        
        try {
            setupImageModal();
        } catch (e) {
            console.error('Error in setupImageModal:', e);
        }
        
        try {
            setupHeaderClick();
        } catch (e) {
            console.error('Error in setupHeaderClick:', e);
        }
        
        try {
            setupUpdateButton();
        } catch (e) {
            console.error('Error in setupUpdateButton:', e);
        }
        
        try {
            showVersionInfo(); // Показываем информацию о версии
        } catch (e) {
            console.error('Error in showVersionInfo:', e);
        }
        
        // Инициализация языка
        try {
            document.documentElement.lang = currentLanguage;
            updateLanguageSelector();
            updateUI();
            initLanguageHandlers(); // Инициализируем обработчики кликов для опций языка
        } catch (e) {
            console.error('Error in language initialization:', e);
        }
        
        // Проверяем URL и инициализируем соответствующее состояние
        const hash = window.location.hash;
        const contentId = hash.startsWith('#') ? hash.substring(1) : hash;
        console.log('Initial URL hash:', hash, 'contentId:', contentId);
        
        // Используем новую систему навигации для инициализации
        if (contentId === 'chapters' || contentId === '') {
            console.log('Initializing with chapters');
            showChaptersDirect();
            navigationHandled = true; // Отмечаем, что навигация обработана
        } else {
            console.log('Initializing with contentId:', contentId);
            navigateTo(contentId);
            navigationHandled = true; // Отмечаем, что навигация обработана
        }
        
        // Также пытаемся восстановить состояние, только если навигация не была обработана через popstate
        if (!navigationHandled) {
        try {
            restoreState();
        } catch (e) {
            console.error('Error in restoreState:', e);
            }
        } else {
            console.log('Navigation already handled by popstate, skipping restoreState');
        }
        
    } catch (error) {
        console.error('Critical error during initialization:', error);
        // В случае критической ошибки, принудительно показываем главы
        try {
            renderChapters();
        } catch (e) {
            console.error('Even renderChapters failed:', e);
        }
    }
});

// Отображение глав - только название, без подглав
function renderChapters() {
    console.log('renderChapters called');
    
    try {
        const chaptersView = document.getElementById('chaptersView');
        if (!chaptersView) {
            console.error('chaptersView element not found!');
            return;
        }
        
        if (!warehouseData || !warehouseData.chapters) {
            console.error('warehouseData or chapters not found!', warehouseData);
            return;
        }
        
        console.log('Rendering chapters...', warehouseData.chapters.length);
        
        // ПРИНУДИТЕЛЬНАЯ ОЧИСТКА СТАРОГО КОНТЕНТА
        chaptersView.innerHTML = '';
        chaptersView.style.display = 'grid';
        
        // Скрываем хлебные крошки на главной странице
        const breadcrumbs = document.getElementById('breadcrumbs');
        if (breadcrumbs) {
            breadcrumbs.style.display = 'none';
        }
        
        warehouseData.chapters.forEach((chapter, index) => {
            try {
                const chapterCard = document.createElement('div');
                chapterCard.className = 'chapter-card';
                chapterCard.onclick = () => navigateTo(chapter.id);
                
                // ТОЛЬКО НАЗВАНИЕ ГЛАВЫ - БЕЗ ОПИСАНИЯ И ПОДГЛАВ
                const chapterTitle = getTranslatedValue(chapter.title);
                chapterCard.innerHTML = `
                    <h2><span class="icon">${chapter.icon}</span> ${chapterTitle}</h2>
                `;
                
                chaptersView.appendChild(chapterCard);
                console.log(`Chapter ${index + 1} rendered:`, chapter.title);
            } catch (e) {
                console.error(`Error rendering chapter ${index + 1}:`, e);
            }
        });
        
        console.log('All chapters rendered successfully');
        
    } catch (error) {
        console.error('Critical error in renderChapters:', error);
    }
}

// Показать содержимое раздела
function showContent(contentId) {
    console.log('showContent called with:', contentId);
    
    // Сначала показываем контент
    showContentDirect(contentId);
    
    // Затем обновляем историю браузера
    const content = warehouseData.content[contentId];
    if (content) {
        const state = { type: 'content', id: contentId, _programmatic: true };
        const url = `#${contentId}`;
        history.pushState(state, getTranslatedValue(content.title), url);
        console.log('History updated for content:', contentId);
    }
}

// Показать главы
function showChapters() {
    console.log('showChapters called');
    
    // Сначала показываем главы
    showChaptersDirect();
    
    // Затем обновляем историю браузера
    const state = { type: 'chapters', _programmatic: true };
    const url = '#chapters';
    history.pushState(state, 'Главы', url);
    console.log('History updated for chapters');
}

// Показать содержимое главы (подглавы)
function showChapter(chapterId, showSubchaptersOnly = false) {
    console.log('showChapter called with:', chapterId);
    
    // Сначала показываем главу
    showChapterDirect(chapterId);
    
    // Затем обновляем историю браузера
    const chapter = warehouseData.chapters.find(ch => ch.id === chapterId);
    if (chapter) {
        const state = { type: 'chapter', id: chapterId, _programmatic: true };
        const url = `#${chapterId}`;
        history.pushState(state, getTranslatedValue(chapter.title), url);
        console.log('History updated for chapter:', chapterId);
    }
}

// Настройка поиска
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = searchContent(query);
        displaySearchResults(results);
    });
}

// Поиск по содержимому
function searchContent(query) {
    const results = [];
    
    // Поиск по главам и подглавам
    warehouseData.chapters.forEach(chapter => {
        const chapterTitle = getTranslatedValue(chapter.title);
        const chapterDesc = getTranslatedValue(chapter.description);
        if (chapterTitle.toLowerCase().includes(query) || 
            chapterDesc.toLowerCase().includes(query)) {
            results.push({
                type: 'chapter',
                title: chapterTitle,
                description: chapterDesc,
                id: chapter.id
            });
        }
        
        chapter.subchapters.forEach(sub => {
            const subTitle = getTranslatedValue(sub.title);
            if (subTitle.toLowerCase().includes(query)) {
                results.push({
                    type: 'subchapter',
                    title: `${sub.id} ${subTitle}`,
                    description: `${t('section')}: ${chapterTitle}`,
                    id: sub.id
                });
            }
        });
    });
    
    // Поиск по содержимому
    Object.keys(warehouseData.content).forEach(key => {
        const content = warehouseData.content[key];
        const contentTitle = getTranslatedValue(content.title);
        const contentText = getTranslatedValue(content.content);
        if (contentTitle.toLowerCase().includes(query) || 
            contentText.toLowerCase().includes(query)) {
            results.push({
                type: 'content',
                title: contentTitle,
                description: t('sectionContent'),
                id: key
            });
        }
    });
    
    return results.slice(0, 10); // Ограничиваем 10 результатами
}

// Отображение результатов поиска
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result"><p>' + t('nothingFound') + '</p></div>';
    } else {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result" onclick="handleSearchResult('${result.id}', '${result.type}')">
                <h3>${result.title}</h3>
                <p>${result.description}</p>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
}

// Обработка результата поиска
function handleSearchResult(id, type) {
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchInput').value = '';
    
    if (type === 'content') {
        showContentDirect(id);
    } else if (type === 'subchapter') {
        showContentDirect(id);
    } else if (type === 'chapter') {
        showChapterDirect(id);
    }
}

// Настройка PWA
function setupPWA() {
    let deferredPrompt;
    const installBtn = document.getElementById('installBtn');
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installBtn.classList.remove('hidden');
    });
    
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            deferredPrompt = null;
            installBtn.classList.add('hidden');
        }
    });
    
    window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
        installBtn.classList.add('hidden');
    });
}

// Функции навигации
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtnTop = document.getElementById('prevBtnTop');
    const nextBtnTop = document.getElementById('nextBtnTop');
    
    if (!currentContentId) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (prevBtnTop) prevBtnTop.style.display = 'none';
        if (nextBtnTop) nextBtnTop.style.display = 'none';
        return;
    }
    
    // Получаем все доступные ID контента
    const allContentIds = Object.keys(warehouseData.content).sort();
    const currentIndex = allContentIds.indexOf(currentContentId);
    
    // Показываем/скрываем кнопку "Назад" (нижняя и верхняя)
    if (currentIndex > 0) {
        if (prevBtn) prevBtn.style.display = 'flex';
        if (prevBtnTop) prevBtnTop.style.display = 'flex';
    } else {
        if (prevBtn) prevBtn.style.display = 'none';
        if (prevBtnTop) prevBtnTop.style.display = 'none';
    }
    
    // Показываем/скрываем кнопку "Далее" (нижняя и верхняя)
    if (currentIndex < allContentIds.length - 1) {
        if (nextBtn) nextBtn.style.display = 'flex';
        if (nextBtnTop) nextBtnTop.style.display = 'flex';
    } else {
        if (nextBtn) nextBtn.style.display = 'none';
        if (nextBtnTop) nextBtnTop.style.display = 'none';
    }
}

function navigateToPrevious() {
    if (!currentContentId) return;
    
    const allContentIds = Object.keys(warehouseData.content).sort();
    const currentIndex = allContentIds.indexOf(currentContentId);
    
    if (currentIndex > 0) {
        const prevContentId = allContentIds[currentIndex - 1];
        showContentDirect(prevContentId);
        // Прокручиваем к началу страницы
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function navigateToNext() {
    if (!currentContentId) return;
    
    const allContentIds = Object.keys(warehouseData.content).sort();
    const currentIndex = allContentIds.indexOf(currentContentId);
    
    if (currentIndex < allContentIds.length - 1) {
        const nextContentId = allContentIds[currentIndex + 1];
        showContentDirect(nextContentId);
        // Прокручиваем к началу страницы
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Функции для модального окна изображений
function setupImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Обработчик клика на изображения
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG' && e.target.closest('.content-body')) {
            modal.style.display = 'block';
            modalImg.src = e.target.src;
            captionText.innerHTML = e.target.alt || '';
        }
    });

    // Закрытие модального окна
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Закрытие при клике вне изображения
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Функция сохранения текущего состояния
function saveCurrentState() {
    if (currentContentId) {
        localStorage.setItem('warehouseGuide_currentContent', currentContentId);
        localStorage.setItem('warehouseGuide_currentView', 'content');
        console.log('Saved state: content', currentContentId);
    } else if (currentView === 'subchapters') {
        // Сохраняем состояние подглав
        localStorage.setItem('warehouseGuide_currentView', 'subchapters');
        // Сохраняем ID текущей главы
        const currentChapterId = localStorage.getItem('warehouseGuide_currentChapter');
        if (currentChapterId) {
            localStorage.setItem('warehouseGuide_currentContent', currentChapterId);
        }
        console.log('Saved state: subchapters', currentChapterId);
    } else {
        localStorage.setItem('warehouseGuide_currentView', 'chapters');
        localStorage.removeItem('warehouseGuide_currentContent');
        console.log('Saved state: chapters');
    }
}

// Функция восстановления состояния
function restoreState() {
    const savedView = localStorage.getItem('warehouseGuide_currentView');
    const savedContent = localStorage.getItem('warehouseGuide_currentContent');
    
    console.log('Restoring state:', { savedView, savedContent });
    
    if (savedView === 'content' && savedContent && warehouseData.content[savedContent]) {
        console.log('Restoring content:', savedContent);
        showContentDirect(savedContent);
    } else if (savedView === 'subchapters' && savedContent) {
        console.log('Restoring subchapters for chapter:', savedContent);
        // savedContent содержит ID главы
        const chapter = warehouseData.chapters.find(ch => ch.id === savedContent);
        if (chapter) {
            showChapterDirect(savedContent);
        } else {
            showChaptersDirect();
        }
    } else {
        console.log('Showing chapters');
        showChaptersDirect();
    }
}

// Функция для кликабельной шапки
function setupHeaderClick() {
    const header = document.querySelector('.header');
    if (header) {
        header.addEventListener('click', function() {
            showChaptersDirect();
        });
    }
}

// Функция настройки кнопки обновления
function setupUpdateButton() {
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            // Показываем индикатор загрузки
            const originalText = refreshBtn.textContent;
            refreshBtn.textContent = '🔄 Проверяем...';
            refreshBtn.disabled = true;
            
            // Проверяем обновления Service Worker
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistration().then(function(registration) {
                    if (registration) {
                        registration.update().then(function() {
                            // Показываем сообщение о результате
                            refreshBtn.textContent = '✅ Проверено';
                            setTimeout(() => {
                                refreshBtn.textContent = originalText;
                                refreshBtn.disabled = false;
                            }, 2000);
                        }).catch(function(error) {
                            console.error('Update check failed:', error);
                            refreshBtn.textContent = '❌ Ошибка';
                            setTimeout(() => {
                                refreshBtn.textContent = originalText;
                                refreshBtn.disabled = false;
                            }, 2000);
                        });
                    } else {
                        refreshBtn.textContent = '❌ SW не найден';
                        setTimeout(() => {
                            refreshBtn.textContent = originalText;
                            refreshBtn.disabled = false;
                        }, 2000);
                    }
                });
            } else {
                refreshBtn.textContent = '❌ SW не поддерживается';
                setTimeout(() => {
                    refreshBtn.textContent = originalText;
                    refreshBtn.disabled = false;
                }, 2000);
            }
        });
    }
}

// Функция обновления хлебных крошек
function updateBreadcrumbs(chapterTitle, contentTitle, chapterId = null) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    const breadcrumbChapter = document.getElementById('breadcrumb-chapter');
    const breadcrumbContent = document.getElementById('breadcrumb-content');
    const breadcrumbSeparator = document.getElementById('breadcrumb-separator');
    
    // Проверка на существование элементов
    if (!breadcrumbs || !breadcrumbChapter || !breadcrumbContent || !breadcrumbSeparator) {
        console.error('Breadcrumb elements not found');
        return;
    }
    
    if (chapterTitle) {
        breadcrumbChapter.textContent = chapterTitle;
        breadcrumbChapter.onclick = () => {
            console.log('Breadcrumb chapter clicked:', chapterTitle, chapterId);
            // Если передан ID главы, используем его напрямую
            if (chapterId) {
                console.log('Using chapterId:', chapterId);
                showChapterDirect(chapterId);
            } else {
                // Иначе ищем ID главы по названию (для обратной совместимости)
                const chapter = warehouseData.chapters.find(ch => ch.title === chapterTitle);
                if (chapter) {
                    console.log('Found chapter by title:', chapter.id);
                    showChapterDirect(chapter.id);
                } else {
                    console.error('Chapter not found for title:', chapterTitle);
                    console.log('Available chapters:', warehouseData.chapters.map(ch => ch.title));
                }
            }
        };
        
        if (contentTitle) {
            breadcrumbContent.textContent = contentTitle;
            breadcrumbContent.onclick = null; // Контент не кликабельный
            breadcrumbSeparator.style.display = 'block';
        } else {
            breadcrumbContent.textContent = '';
            breadcrumbContent.onclick = null;
            breadcrumbSeparator.style.display = 'none';
        }
        
        breadcrumbs.style.display = 'flex';
    } else {
        breadcrumbs.style.display = 'none';
    }
}

// Регистрация Service Worker с обработкой обновлений
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
                
                // Проверяем обновления каждые 10 секунд для установленного PWA
                // Сохраняем ссылку на interval для возможной очистки
                const updateInterval = setInterval(() => {
                    registration.update().then(() => {
                        console.log('Update check completed');
                    }).catch((error) => {
                        console.error('Update check error:', error);
                    });
                }, 10000); // Проверка каждые 10 секунд
                
                // Очищаем interval при выгрузке страницы (предотвращение утечек памяти)
                window.addEventListener('beforeunload', () => {
                    if (updateInterval) {
                        clearInterval(updateInterval);
                    }
                });
                
                // Обработка обновлений Service Worker
                registration.addEventListener('updatefound', () => {
                    console.log('New Service Worker found!');
                    const newWorker = registration.installing;
                    
                    if (!newWorker) return;
                    
                    newWorker.addEventListener('statechange', () => {
                        console.log('New Worker state:', newWorker.state);
                        if (newWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                // Новый Service Worker установлен, показываем уведомление
                                console.log('New Service Worker installed, showing notification');
                                showUpdateNotification();
                            } else {
                                // Первая установка
                                console.log('Service Worker installed for the first time');
                            }
                        } else if (newWorker.state === 'activated') {
                            // Новый Service Worker активирован, перезагружаем страницу
                            console.log('New Service Worker activated, reloading page');
                            window.location.reload();
                        }
                    });
                });
                
                // Принудительная проверка обновлений при каждом запуске
                registration.update();
                
                // Проверка обновлений при фокусе окна (когда пользователь возвращается к приложению)
                window.addEventListener('focus', () => {
                    console.log('Window focused, checking for updates...');
                    registration.update();
                });
                
                // Проверка обновлений при видимости страницы
                document.addEventListener('visibilitychange', () => {
                    if (!document.hidden) {
                        console.log('Page visible, checking for updates...');
                        registration.update();
                    }
                });
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Функция показа уведомления об обновлении
function showUpdateNotification() {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            max-width: 300px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            line-height: 1.4;
        ">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <span style="font-size: 20px;">🔄</span>
                <strong>Доступно обновление!</strong>
            </div>
            <p style="margin: 0 0 10px 0;">Новая версия приложения готова к установке.</p>
            <div style="display: flex; gap: 10px;">
                <button id="update-btn" style="
                    background: rgba(255, 255, 255, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                ">Обновить</button>
                <button id="dismiss-btn" style="
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                ">Позже</button>
            </div>
        </div>
    `;
    
    // Добавляем стили для hover эффектов
    const style = document.createElement('style');
    style.textContent = `
        #update-btn:hover {
            background: rgba(255, 255, 255, 0.3) !important;
            transform: translateY(-1px);
        }
        #dismiss-btn:hover {
            background: rgba(255, 255, 255, 0.1) !important;
            transform: translateY(-1px);
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Обработчики событий
    document.getElementById('update-btn').addEventListener('click', () => {
        // Принудительно активируем новый Service Worker и перезагружаем
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistration().then((registration) => {
                if (registration && registration.waiting) {
                    // Отправляем сообщение новому Service Worker для активации
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }
        // Обновляем страницу для применения нового Service Worker
                setTimeout(() => {
                    window.location.reload(true); // Принудительная перезагрузка без кэша
                }, 100);
            });
        } else {
            window.location.reload(true);
        }
    });
    
    document.getElementById('dismiss-btn').addEventListener('click', () => {
        notification.remove();
    });
    
    // Автоматически скрываем через 10 секунд
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 10000);
}

// Функция получения версии приложения
function getAppVersion() {
    return new Promise((resolve) => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration) => {
                if (registration.active) {
                    const messageChannel = new MessageChannel();
                    messageChannel.port1.onmessage = (event) => {
                        resolve(event.data.version || 'unknown');
                    };
                    registration.active.postMessage({ type: 'GET_VERSION' }, [messageChannel.port2]);
                } else {
                    resolve('unknown');
                }
            }).catch(() => {
                resolve('unknown');
            });
        } else {
            resolve('unknown');
        }
    });
}

// Функция принудительного обновления Service Worker
function forceUpdateServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(function(registration) {
            if (registration) {
                console.log('Force checking for Service Worker updates...');
                
                // Принудительно обновляем, игнорируя кэш
                registration.update().then(function() {
                    console.log('Service Worker update check completed');
                    
                    // Проверяем, есть ли ожидающий Service Worker
                    if (registration.waiting) {
                        console.log('Waiting Service Worker found, activating...');
                        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                        showUpdateNotification();
                    }
                }).catch(function(error) {
                    console.error('Service Worker update failed:', error);
                });
            }
        });
    }
}

// Обработка сообщений от Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', function(event) {
        console.log('Message from Service Worker:', event.data);
        if (event.data && event.data.type === 'SW_ACTIVATED') {
            console.log('Service Worker activated with version:', event.data.version);
            // Можно показать уведомление или обновить страницу
            if (event.data.version) {
                showUpdateNotification();
            }
        }
    });
}

// Функция показа информации о версии
function showVersionInfo() {
    getAppVersion().then((version) => {
        console.log('App version:', version);
        // Можно добавить отображение версии в интерфейсе
    });
}

// Lazy loading отключен - все изображения загружаются сразу

// Обработчик навигации браузера (кнопки назад/вперед и смахивания)
window.addEventListener('popstate', function(event) {
    console.log('popstate event:', event.state, 'hash:', window.location.hash);
    
    // Предотвращаем обновление истории при программном вызове
    if (event.state && event.state._programmatic) {
        console.log('Programmatic navigation, ignoring popstate');
        return;
    }
    
    // Устанавливаем флаг, что навигация обработана
    navigationHandled = true;
    
    // Обрабатываем навигацию браузера
    const hash = window.location.hash;
    let contentId = '';
    
    if (hash && hash.startsWith('#')) {
        contentId = hash.substring(1);
    } else if (hash) {
        contentId = hash;
    }
    
    console.log('Processing popstate with contentId:', contentId);
    
    // Используем новую систему навигации
    navigateTo(contentId);
});

// Версии функций навигации без обновления истории (для обработчика popstate)
function showContentWithoutHistory(contentId) {
    const content = warehouseData.content[contentId];
    if (!content) {
        alert('Содержимое раздела пока не добавлено');
        return;
    }
    
    const chaptersView = document.getElementById('chaptersView');
    const contentView = document.getElementById('contentView');
    const contentTitle = document.getElementById('contentTitle');
    const contentBody = document.getElementById('contentBody');
    
    if (!chaptersView || !contentView || !contentTitle || !contentBody) {
        console.error('Required elements not found in showContentWithoutHistory');
        return;
    }
    
    currentContentId = contentId;
    chaptersView.style.display = 'none';
    contentView.style.display = 'block';
    contentTitle.textContent = getTranslatedValue(content.title);
    
    // Загружаем контент с обычными изображениями (без lazy loading)
    contentBody.innerHTML = getTranslatedValue(content.content);
    
    // Находим название главы и ID главы для хлебных крошек
    let chapterTitle = '';
    let chapterId = '';
    warehouseData.chapters.forEach(chapter => {
        chapter.subchapters.forEach(sub => {
            if (sub.id === contentId) {
                chapterTitle = getTranslatedValue(chapter.title);
                chapterId = chapter.id;
            }
        });
    });
    
    // Показываем хлебные крошки
    updateBreadcrumbs(chapterTitle, getTranslatedValue(content.title), chapterId);
    
    updateNavigationButtons();
    currentView = 'content';
    saveCurrentState(); // Сохраняем состояние
    
    // Прокручиваем к началу страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showChaptersWithoutHistory() {
    console.log('showChaptersWithoutHistory called');
    renderChapters(); // Вызываем renderChapters для правильного отображения
    
    const contentView = document.getElementById('contentView');
    if (contentView) {
        contentView.style.display = 'none';
    }
    
    currentView = 'chapters';
    currentContentId = null;
    
    // Очищаем сохраненную главу
    localStorage.removeItem('warehouseGuide_currentChapter');
    
    // Скрываем хлебные крошки на главной странице
    updateBreadcrumbs('', '');
    
    // Скрываем навигационные кнопки на главной странице
    updateNavigationButtons();
    
    saveCurrentState(); // Сохраняем состояние
    
    // Прокручиваем к началу страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showChapterWithoutHistory(chapterId) {
    console.log('showChapterWithoutHistory called with:', chapterId);
    const chapter = warehouseData.chapters.find(ch => ch.id === chapterId);
    if (!chapter) {
        console.error('Chapter not found:', chapterId);
        return;
    }
    
    console.log('Found chapter:', chapter.title);
    
    // Скрываем contentView
    const contentView = document.getElementById('contentView');
    if (contentView) {
        contentView.style.display = 'none';
    }
    
    const chaptersView = document.getElementById('chaptersView');
    chaptersView.innerHTML = '';
    chaptersView.style.display = 'grid';
    
    // Показываем хлебные крошки
    updateBreadcrumbs(getTranslatedValue(chapter.title), '', chapter.id);
    
    // Кнопка "Назад к главам"
    const backButton = document.createElement('div');
    backButton.style.marginBottom = '20px';
    backButton.innerHTML = `
        <button class="back-btn" onclick="navigateTo('chapters')">${t('backToChapters')}</button>
    `;
    chaptersView.appendChild(backButton);
    
    // Подглавы
    chapter.subchapters.forEach(subchapter => {
        const subchapterCard = document.createElement('div');
        subchapterCard.className = 'subchapter-card';
        subchapterCard.onclick = () => showContentDirect(subchapter.id);
        
        const subTitle = getTranslatedValue(subchapter.title);
        subchapterCard.innerHTML = `
            <h3>${subchapter.id} ${subTitle}</h3>
        `;
        
        chaptersView.appendChild(subchapterCard);
    });
    
    // Устанавливаем состояние
    currentView = 'subchapters';
    currentContentId = null;
    
    // Сохраняем ID текущей главы
    localStorage.setItem('warehouseGuide_currentChapter', chapterId);
    
    // Скрываем навигационные кнопки
    updateNavigationButtons();
    
    // Сохраняем состояние
    saveCurrentState();
    
    // Прокручиваем к началу страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Глобальный обработчик кликов по ссылкам для навигации
document.addEventListener('click', function(event) {
    const link = event.target.closest('a[href^="#"]');
    if (link && !link.hasAttribute('target')) {
        event.preventDefault();
        const href = link.getAttribute('href');
        const contentId = href.substring(1);
        
        console.log('Internal link clicked:', href, 'contentId:', contentId, '- opening in new window');
        
        // Определяем заголовок для нового окна
        let titleToShow = t('appTitle');
        const content = warehouseData.content[contentId];
        if (content) {
            titleToShow = `${t('appTitle')} - ${getTranslatedValue(content.title)}`;
        } else {
            const chapter = warehouseData.chapters.find(ch => ch.id === contentId);
            if (chapter) {
                titleToShow = `${t('appTitle')} - ${getTranslatedValue(chapter.title)}`;
            }
        }
        
        // Открываем внутренние ссылки в новом окне
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            // Определяем контент для отображения
            let contentToShow = '';
            const content = warehouseData.content[contentId];
            if (content) {
                const contentTitle = getTranslatedValue(content.title);
                const contentBody = getTranslatedValue(content.content);
                contentToShow = `<h2>${contentTitle}</h2>${contentBody}`;
                console.log('Content created for new window:', contentTitle);
            } else {
                const chapter = warehouseData.chapters.find(ch => ch.id === contentId);
                if (chapter) {
                    const chapterTitle = getTranslatedValue(chapter.title);
                    contentToShow = `<h2>${chapterTitle}</h2><p>${t('chooseSubsection')}</p>`;
                    chapter.subchapters.forEach(sub => {
                        const subTitle = getTranslatedValue(sub.title);
                        contentToShow += `<div style="margin: 10px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #2563eb; cursor: pointer;" onclick="navigateTo('${sub.id}')"><h4>${sub.id} ${subTitle}</h4></div>`;
                    });
                    console.log('Chapter created for new window:', chapterTitle);
                } else {
                    contentToShow = '<p>' + t('sectionNotFound') + ' ' + contentId + '</p>';
                    console.log('Content not found for ID:', contentId);
                }
            }
            
            // Создаем HTML структуру с готовым контентом
            const htmlContent = `
                <!DOCTYPE html>
                <html lang="ru">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${titleToShow}</title>
                    <base href="${window.location.href.replace(/\/[^\/]*$/, '/')}">
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }

                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                            line-height: 1.6;
                            color: #1f2937;
                            background: url('images/wallpapers.jpg') center center / cover no-repeat fixed;
                            background-attachment: fixed;
                            -webkit-background-attachment: fixed;
                            min-height: 100vh;
                        }

                        .container {
                            max-width: 1200px;
                            margin: 0 auto;
                            padding: 20px;
                            padding-bottom: 100px;
                        }

                        .content-body {
                            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
                            border-radius: 25px;
                            padding: 30px;
                            margin-bottom: 20px;
                            box-shadow: 
                                0 15px 50px rgba(0, 0, 0, 0.15),
                                0 8px 25px rgba(0, 0, 0, 0.1),
                                0 0 0 2px rgba(0, 0, 0, 0.8),
                                inset 0 2px 4px rgba(255, 255, 255, 0.3);
                            border: 2px solid rgba(0, 0, 0, 0.9);
                            line-height: 1.8;
                        }

                        .back-btn {
                            display: inline-flex;
                            align-items: center;
                            gap: 8px;
                            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
                            color: #1f2937;
                            padding: 14px 28px;
                            text-decoration: none;
                            border-radius: 20px;
                            margin-bottom: 25px;
                            font-weight: 700;
                            font-size: 16px;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            box-shadow: 
                                0 8px 25px rgba(0, 0, 0, 0.15),
                                0 4px 12px rgba(0, 0, 0, 0.1),
                                0 0 0 2px rgba(0, 0, 0, 0.1),
                                inset 0 1px 0 rgba(255, 255, 255, 0.8);
                            border: 2px solid rgba(0, 0, 0, 0.1);
                            backdrop-filter: blur(10px);
                            -webkit-backdrop-filter: blur(10px);
                            position: relative;
                            overflow: hidden;
                        }

                        .back-btn::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: -100%;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                            transition: left 0.5s ease;
                        }

                        .back-btn:hover::before {
                            left: 100%;
                        }

                        .back-btn:hover {
                            transform: translateY(-3px) scale(1.02);
                            box-shadow: 
                                0 15px 35px rgba(0, 0, 0, 0.2),
                                0 8px 20px rgba(0, 0, 0, 0.15),
                                0 0 0 3px rgba(0, 0, 0, 0.15),
                                inset 0 1px 0 rgba(255, 255, 255, 0.9);
                            background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%);
                            color: #111827;
                        }

                        .back-btn:active {
                            transform: translateY(-1px) scale(0.98);
                            transition: all 0.1s ease;
                        }

                        h1, h2, h3, h4 { color: #000000; }
                        h1 { font-size: 2.5rem; margin-bottom: 10px; }
                        h2 { font-size: 2rem; margin: 30px 0 15px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
                        h3 { font-size: 18px; margin: 30px 0 15px 0; color: #000000; }
                        h4 { font-size: 1.25rem; margin: 20px 0 8px 0; }
                        p { margin-bottom: 15px; color: #000000; font-size: 18px; }
                        ul, ol { margin: 15px 0; padding-left: 30px; }
                        li { margin-bottom: 8px; color: #000000; font-size: 18px; }
                        a { color: #2563eb; text-decoration: none; font-weight: 600; }
                        a:hover { text-decoration: underline; }
                        .image-container { margin: 15px 0; text-align: center; }
                        img { max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease; }
                        img:hover { transform: scale(1.02); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2); }
                        .image-caption { font-style: italic; color: #6b7280; margin-top: 5px; }
                        table { width: 100%; border-collapse: collapse; border: 1px solid #ddd; margin: 20px 0; }
                        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                        th { background-color: #f8f9fa; font-weight: 600; }
                        .table-container { overflow-x: auto; margin: 20px 0; }
                        
                        /* Стили для модального окна изображений */
                        .modal {
                            display: none;
                            position: fixed;
                            z-index: 1000;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            overflow: auto;
                            background-color: rgba(0, 0, 0, 0.9);
                            animation: fadeIn 0.3s ease;
                        }
                        
                        .modal-content {
                            margin: auto;
                            display: block;
                            width: 90%;
                            max-width: 1200px;
                            max-height: 90%;
                            object-fit: contain;
                            animation: zoomIn 0.3s ease;
                        }
                        
                        .close {
                            position: absolute;
                            bottom: 20px;
                            left: 50%;
                            transform: translateX(-50%);
                            color: #ff0000;
                            font-size: 30px;
                            font-weight: bold;
                            transition: 0.3s;
                            cursor: pointer;
                            z-index: 1001;
                            width: 50px;
                            height: 50px;
                            background-color: white;
                            border: 2px solid #ff0000;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                        }
                        
                        .close:hover,
                        .close:focus {
                            color: #cc0000;
                            border-color: #cc0000;
                            text-decoration: none;
                            transform: translateX(-50%) scale(1.1);
                        }
                        
                        #caption {
                            margin: auto;
                            display: block;
                            width: 80%;
                            max-width: 700px;
                            text-align: center;
                            color: #ccc;
                            padding: 10px 0;
                            height: 150px;
                        }
                        
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        
                        @keyframes zoomIn {
                            from { transform: scale(0.5); }
                            to { transform: scale(1); }
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="content-body">
                            <a href="#" class="back-btn" onclick="window.close()">
                                <span style="font-size: 18px;">✕</span>
                                <span>${t('closeWindow')}</span>
                            </a>
                            <div id="content">${contentToShow}</div>
                        </div>
                        
                        <!-- Кнопка закрытия внизу -->
                        <div style="text-align: center; margin-top: 30px; padding: 20px;">
                            <a href="#" class="back-btn" onclick="window.close()">
                                <span style="font-size: 18px;">✕</span>
                                <span>${t('closeWindow')}</span>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Модальное окно для просмотра изображений -->
                    <div id="imageModal" class="modal">
                        <span class="close">&times;</span>
                        <img class="modal-content" id="modalImage" alt="Увеличенное изображение">
                        <div id="caption"></div>
                    </div>
                    
                    <script>
                        console.log('Script loaded in new window');
                        
                        // Данные для навигации в новом окне
                        const warehouseData = ${JSON.stringify(warehouseData)};
                        const currentLanguage = '${currentLanguage}';
                        console.log('warehouseData loaded:', warehouseData);
                        
                        // Функция получения переведенного значения
                        function getTranslatedValue(obj, lang = currentLanguage) {
                            if (!obj) return '';
                            if (typeof obj === 'object' && (obj.ru || obj.en || obj.zh)) {
                                return obj[lang] || obj.ru || obj.en || obj.zh || '';
                            }
                            if (typeof obj === 'string') {
                                return obj;
                            }
                            return '';
                        }
                        
                        // Простая функция навигации
                        function navigateTo(contentId) {
                            console.log('navigateTo called with:', contentId);
                            
                            // Проверяем, является ли это контентом
                            const content = warehouseData.content[contentId];
                            if (content) {
                                console.log('Found content:', content);
                                const contentDiv = document.getElementById('content');
                                if (contentDiv) {
                                    const contentTitle = getTranslatedValue(content.title);
                                    const contentBody = getTranslatedValue(content.content);
                                    contentDiv.innerHTML = '<h2>' + contentTitle + '</h2>' + contentBody;
                                    document.title = t('appTitle') + ' - ' + contentTitle;
                                    console.log('Content displayed successfully');
                                }
                                return;
                            }
                            
                            // Проверяем, является ли это главой
                            const chapter = warehouseData.chapters.find(ch => ch.id === contentId);
                            if (chapter) {
                                console.log('Found chapter:', chapter);
                                const chapterTitle = getTranslatedValue(chapter.title);
                                let contentHtml = '<h2>' + chapterTitle + '</h2><p>' + t('chooseSubsection') + '</p>';
                                chapter.subchapters.forEach(sub => {
                                    const subTitle = getTranslatedValue(sub.title);
                                    contentHtml += '<div style="margin: 10px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #2563eb; cursor: pointer;" onclick="navigateTo(\\'' + sub.id + '\\')"><h4>' + sub.id + ' ' + subTitle + '</h4></div>';
                                });
                                const contentDiv = document.getElementById('content');
                                if (contentDiv) {
                                    contentDiv.innerHTML = contentHtml;
                                    document.title = t('appTitle') + ' - ' + chapterTitle;
                                    console.log('Chapter displayed successfully');
                                }
                                return;
                            }
                            
                            console.log('Content not found for ID:', contentId);
                            const contentDiv = document.getElementById('content');
                            if (contentDiv) {
                                contentDiv.innerHTML = '<p>' + t('sectionNotFound') + ' ' + contentId + '</p>';
                            }
                        }
                        
                        // Обработчик кликов по ссылкам
                        document.addEventListener('click', function(event) {
                            console.log('Click event:', event.target);
                            
                            const link = event.target.closest('a[href^="#"]');
                            if (link) {
                                event.preventDefault();
                                const href = link.getAttribute('href');
                                const contentId = href.substring(1);
                                
                                console.log('Link clicked:', href, 'contentId:', contentId);
                                
                                // Навигация
                                navigateTo(contentId);
                            }
                        });
                        
                        // Настройка модального окна для изображений
                        let imageModalInitialized = false;
                        function setupImageModal() {
                            // Предотвращаем множественную инициализацию
                            if (imageModalInitialized) {
                                return;
                            }
                            
                            const modal = document.getElementById('imageModal');
                            const modalImg = document.getElementById('modalImage');
                            const captionText = document.getElementById('caption');
                            const closeBtn = document.getElementsByClassName('close')[0];
                            
                            if (!modal || !modalImg || !captionText || !closeBtn) {
                                console.error('Modal elements not found');
                                return;
                            }
                            
                            // Обработчик клика на изображения (только если это не ссылка)
                            document.addEventListener('click', function(e) {
                                // Проверяем, что клик был по изображению, а не по ссылке
                                if (e.target.tagName === 'IMG' && 
                                    e.target.closest('.content-body') && 
                                    !e.target.closest('a')) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    modal.style.display = 'block';
                                    modalImg.src = e.target.src;
                                    captionText.innerHTML = e.target.alt || '';
                                }
                            }, true); // Используем capture phase для приоритета
                            
                            // Закрытие модального окна
                            closeBtn.onclick = function() {
                                modal.style.display = 'none';
                            };
                            
                            // Закрытие при клике вне изображения
                            modal.onclick = function(e) {
                                if (e.target === modal) {
                                    modal.style.display = 'none';
                                }
                            };
                            
                            // Закрытие по клавише Escape
                            document.addEventListener('keydown', function(e) {
                                if (e.key === 'Escape' && modal.style.display === 'block') {
                                    modal.style.display = 'none';
                                }
                            });
                            
                            imageModalInitialized = true;
                        }
                        
                        // Инициализация модального окна после загрузки DOM
                        if (document.readyState === 'loading') {
                            document.addEventListener('DOMContentLoaded', setupImageModal);
                        } else {
                            setupImageModal();
                        }
                        
                        console.log('Event listeners attached');
                    </script>
                </body>
                </html>
            `;
            
            // Записываем HTML в новое окно
            newWindow.document.write(htmlContent);
            newWindow.document.close();
        } else {
            console.log('Failed to open new window, falling back to same window navigation');
            // Fallback: если не удалось открыть новое окно, используем обычную навигацию
            const content = warehouseData.content[contentId];
            if (content) {
                showContentDirect(contentId);
            } else {
                const chapter = warehouseData.chapters.find(ch => ch.id === contentId);
                if (chapter) {
                    showChapterDirect(contentId);
                } else if (contentId === 'chapters') {
                    showChaptersDirect();
                } else {
                    console.log('Unknown content ID:', contentId);
                }
            }
        }
    }
});

// Новая универсальная функция навигации
function navigateTo(contentId) {
    console.log('navigateTo called with:', contentId);
    
    // Обрабатываем пустые или неопределенные состояния
    if (!contentId || contentId === '' || contentId === 'undefined') {
        console.log('Empty contentId, showing chapters');
        showChaptersDirect();
        return;
    }
    
    // Проверяем, является ли это контентом
    const content = warehouseData.content[contentId];
    if (content) {
        console.log('Navigating to content:', contentId);
        showContentDirect(contentId);
        return;
    }
    
    // Проверяем, является ли это главой
    const chapter = warehouseData.chapters.find(ch => ch.id === contentId);
    if (chapter) {
        console.log('Navigating to chapter:', contentId);
        showChapterDirect(contentId);
        return;
    }
    
    // Если это #chapters
    if (contentId === 'chapters') {
        console.log('Navigating to chapters');
        showChaptersDirect();
        return;
    }
    
    console.log('Unknown content ID:', contentId, 'showing chapters as fallback');
    showChaptersDirect();
}

// Прямые функции навигации без обновления истории
function showContentDirect(contentId) {
    const content = warehouseData.content[contentId];
    if (!content) {
        console.error('Content not found:', contentId);
        return;
    }
    
    console.log('showContentDirect:', contentId);
    
    const chaptersView = document.getElementById('chaptersView');
    const contentView = document.getElementById('contentView');
    const contentTitle = document.getElementById('contentTitle');
    const contentBody = document.getElementById('contentBody');
    
    if (!chaptersView || !contentView || !contentTitle || !contentBody) {
        console.error('Required elements not found in showContentDirect');
        return;
    }
    
    currentContentId = contentId;
    chaptersView.style.display = 'none';
    contentView.style.display = 'block';
    contentTitle.textContent = getTranslatedValue(content.title);
    contentBody.innerHTML = getTranslatedValue(content.content);
    
    // Находим название главы и ID главы для хлебных крошек
    let chapterTitle = '';
    let chapterId = '';
    warehouseData.chapters.forEach(chapter => {
        chapter.subchapters.forEach(sub => {
            if (sub.id === contentId) {
                chapterTitle = getTranslatedValue(chapter.title);
                chapterId = chapter.id;
            }
        });
    });
    
    updateBreadcrumbs(chapterTitle, getTranslatedValue(content.title), chapterId);
    updateNavigationButtons();
    currentView = 'content';
    saveCurrentState();
    
    // Прокручиваем к началу страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showChaptersDirect() {
    console.log('showChaptersDirect');
    
    renderChapters();
    
    const contentView = document.getElementById('contentView');
    if (contentView) {
        contentView.style.display = 'none';
    }
    
    currentView = 'chapters';
    currentContentId = null;
    
    localStorage.removeItem('warehouseGuide_currentChapter');
    updateBreadcrumbs('', '');
    updateNavigationButtons();
    saveCurrentState();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showChapterDirect(chapterId) {
    console.log('showChapterDirect called with:', chapterId);
    
    const chapter = warehouseData.chapters.find(ch => ch.id === chapterId);
    if (!chapter) {
        console.error('Chapter not found:', chapterId);
        return;
    }
    
    // Специальная обработка для chapter7 - сразу показываем контент
    if (chapterId === 'chapter7' && chapter.subchapters.length === 1) {
        const subchapterId = chapter.subchapters[0].id;
        console.log('Chapter7 detected, showing content directly:', subchapterId);
        showContentDirect(subchapterId);
        return;
    }
    
    const chaptersView = document.getElementById('chaptersView');
    const contentView = document.getElementById('contentView');
    const contentTitle = document.getElementById('contentTitle');
    const contentBody = document.getElementById('contentBody');
    
    if (!chaptersView || !contentView || !contentTitle || !contentBody) {
        console.error('Required elements not found in showChapterDirect');
        return;
    }
    
    // Скрываем chaptersView и показываем contentView
    chaptersView.style.display = 'none';
    contentView.style.display = 'block';
    
    // Устанавливаем заголовок
    contentTitle.textContent = getTranslatedValue(chapter.title);
    
    // Создаем контент с подразделами
    let contentHtml = `<p>${t('chooseSubsection')}</p>`;
    chapter.subchapters.forEach(sub => {
        const subTitle = getTranslatedValue(sub.title);
        contentHtml += `<div style="margin: 10px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #2563eb; cursor: pointer;" onclick="showContentDirect('${sub.id}')"><h4>${sub.id} ${subTitle}</h4></div>`;
    });
    
    contentBody.innerHTML = contentHtml;
    
    // Обновляем состояние
    currentView = 'chapter';
    currentContentId = null;
    
    // Обновляем хлебные крошки
    updateBreadcrumbs(getTranslatedValue(chapter.title), '', chapterId);
    
    // Скрываем навигационные кнопки для глав
    updateNavigationButtons();
    
    saveCurrentState();
    
    // Прокручиваем к началу страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ============================================
// ФУНКЦИИ ДЛЯ ОТЗЫВОВ И ПРЕДЛОЖЕНИЙ
// ============================================

// Конфигурация EmailJS
const EMAILJS_CONFIG = {
    serviceId: 'service_3en4wth',      // Service ID
    templateId: 'template_j5vm25r',     // Template ID для получения отзывов
    autoReplyTemplateId: null,          // Template ID для автоответа (укажите после создания шаблона)
    publicKey: 'V4x0GnZ84xI2CB7Cv'     // Public Key
};

// Инициализация EmailJS
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('EmailJS initialized');
    } else {
        console.warn('EmailJS SDK not loaded');
    }
}

// Открытие модального окна для отзывов
function openFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
    }
}

// Закрытие модального окна для отзывов
function closeFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
        // Очищаем форму
        const form = document.getElementById('feedbackForm');
        if (form) {
            form.reset();
        }
        // Скрываем сообщения
        const messageDiv = document.getElementById('feedbackMessageDiv');
        if (messageDiv) {
            messageDiv.className = 'feedback-message';
            messageDiv.style.display = 'none';
        }
    }
}

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    const modal = document.getElementById('feedbackModal');
    if (event.target === modal) {
        closeFeedbackModal();
    }
});

// Закрытие модального окна по клавише Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('feedbackModal');
        if (modal && modal.style.display === 'block') {
            closeFeedbackModal();
        }
    }
});

// Отправка отзыва
async function submitFeedback(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('feedbackSubmitBtn');
    const messageDiv = document.getElementById('feedbackMessageDiv');
    const form = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('feedbackName');
    const emailInput = document.getElementById('feedbackEmail');
    const messageInput = document.getElementById('feedbackMessage');
    
    // Проверка существования элементов
    if (!submitBtn || !messageDiv || !form || !messageInput) {
        console.error('Feedback form elements not found');
        alert(t('feedbackFormError'));
        return;
    }
    
    // Получаем данные формы
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput.value.trim();
    
    // Проверка обязательного поля
    if (!message) {
        showFeedbackMessage(t('feedbackRequired'), 'error');
        return;
    }
    
    // Отключаем кнопку отправки
    submitBtn.disabled = true;
    submitBtn.textContent = t('feedbackSending');
    
    try {
        // Проверяем, инициализирован ли EmailJS
        if (typeof emailjs === 'undefined') {
            throw new Error('EmailJS SDK не загружен. Проверьте подключение к интернету.');
        }
        
        // Подготавливаем данные для отправки
        // ВАЖНО: Адрес получателя должен быть указан в настройках шаблона EmailJS
        // в поле "To Email" как: aokha.aj@gmail.com или {{to_email}}
        const templateParams = {
            from_name: name || 'Анонимный пользователь',
            from_email: email || 'не указан',
            message: message,
            reply_to: email || 'aokha.aj@gmail.com',
            to_email: 'aokha.aj@gmail.com',
            to_name: 'Получатель отзывов',
            // Дополнительные параметры для совместимости
            user_email: email || 'не указан',
            user_name: name || 'Анонимный пользователь'
        };
        
        // Отправляем email через EmailJS (основное письмо вам)
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        );
        
        console.log('Email sent successfully:', response);
        
        // Отправляем автоответ пользователю (если указан email и настроен шаблон)
        if (email && EMAILJS_CONFIG.autoReplyTemplateId) {
            try {
                const autoReplyParams = {
                    from_name: 'Команда Справочник СКЛАД',
                    from_email: 'aokha.aj@gmail.com',
                    to_email: email,
                    to_name: name || 'Пользователь',
                    message: message,
                    user_name: name || 'Пользователь'
                };
                
                await emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.autoReplyTemplateId,
                    autoReplyParams
                );
                
                console.log('Auto-reply sent successfully');
            } catch (autoReplyError) {
                console.warn('Auto-reply failed (non-critical):', autoReplyError);
                // Не показываем ошибку пользователю, если автоответ не отправился
            }
        }
        
        // Показываем сообщение об успехе
        const successMsg = t('feedbackSuccess');
        const confirmMsg = email ? (currentLanguage === 'ru' ? ' На ваш email отправлено подтверждение.' : currentLanguage === 'en' ? ' A confirmation has been sent to your email.' : ' 已向您的电子邮件发送确认。') : '';
        showFeedbackMessage(successMsg + confirmMsg, 'success');
        
        // Очищаем форму через 2 секунды
        setTimeout(() => {
            form.reset();
            setTimeout(() => {
                closeFeedbackModal();
            }, 1000);
        }, 2000);
        
    } catch (error) {
        console.error('Error sending feedback:', error);
        
        // Показываем сообщение об ошибке
        let errorMessage = t('feedbackError');
        
        if (error.text) {
            errorMessage += error.text;
        } else if (error.message) {
            errorMessage += error.message;
        } else {
            errorMessage += 'Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.';
        }
        
        showFeedbackMessage(errorMessage, 'error');
        
    } finally {
        // Восстанавливаем кнопку отправки
        submitBtn.disabled = false;
        submitBtn.textContent = 'Отправить';
    }
}

// Показ сообщения в форме
function showFeedbackMessage(message, type) {
    const messageDiv = document.getElementById('feedbackMessageDiv');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `feedback-message ${type}`;
        messageDiv.style.display = 'block';
        
        // Автоматически скрываем сообщение об ошибке через 5 секунд
        if (type === 'error') {
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }
}

// Инициализация EmailJS при загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmailJS);
} else {
    initEmailJS();
}

// Инициализация приложения (убрана дублирующая функция)
