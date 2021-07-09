export const level1 = [
    {question: 'Что имел в виду пациент, попросив у Вас "Диатаракан"?',
        answers: [
            {text: 'ротокан', state: false},
            {text: 'диаротокан', state: true},
            {text: 'диофлан', state: false},
            {text: 'дихлофос', state: false}
        ],
        help: 'У пациента болит горло'
    },
    {question: 'Пациент попросил "Зеленый кот". Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'микотрокс', state: false},
            {text: 'ксантинола никотинат', state: false},
            {text: 'ко-тримоксазол', state: false},
            {text: 'синекод', state: true}
        ],
        help: 'У пациента кашель'
    },
    {question: 'Что бы вы предложили пациенту на запрос "Пидороксин" в ампулах?',
        answers: [
            {text: 'Витамин В1', state: false},
            {text: 'Витамин В2', state: false},
            {text: 'Витамин В6', state: true},
            {text: 'Витамин РР', state: false}
        ],
        help: 'Нужны витамины для нервной системы'
    },
    {question: 'Пациент попросил зеленые ампулы. Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'тамсулозин капсулы', state: true},
            {text: 'алоэ раствор для инъекций', state: false},
            {text: 'ювена', state: false},
            {text: 'темпалгин', state: false}
        ],
        help: 'Пациент мужчина'
    },
    {question: 'Расслабляющий чай для пищеварения (по версии клиентов) - это:',
        answers: [
            {text: 'RedSlim-tea', state: true},
            {text: 'Стомаран', state: false},
            {text: 'Желудочный сбор №3', state: false},
            {text: 'Мяту перечную', state: false}
        ],
        help: 'Чтобы все получилось, надо расслабиться'
    },
    {question: 'Что в народе назвают "Растопырша"?',
        answers: [
            {text: 'Вольтарен', state: false},
            {text: 'Ревмалгон', state: false},
            {text: 'Растирку при простуде', state: false},
            {text: 'Расторопшу', state: true}
        ],
        help: 'Иногда это последняя надежда наутро :)'
    },
    {question: 'Если пациент попросит у Вас адвоката, то скорее всего он имел в виду:',
        answers: [
            {text: 'синатор', state: false},
            {text: 'аудитор', state: true},
            {text: 'назол адванс', state: false},
            {text: 'адвантан', state: false}
        ],
        help: 'Пациенту нужен не совсем адвокат :)'
    },
    {question: 'Какой товар пациенты снабдили метким названием "Пищалка"?',
        answers: [
            {text: 'Груша для ручного тонометра', state: true},
            {text: 'Грелка', state: false},
            {text: 'Кружка Эсмарха', state: false},
            {text: 'Контейнер для кала стерильный', state: false}
        ],
        help: 'Медицинская техника'
    },
    {question: '"Гекса" - это:',
        answers: [
            {text: 'Гексаспрей', state: true},
            {text: 'Гексикон', state: false},
            {text: 'Хлоргексидин', state: false},
            {text: 'Гексавит', state: false}
        ],
        help: 'У пациента болть горло'
    },
    {question: '"Адопсипин", по мнению пациента, это:',
        answers: [
            {text: 'Адаптол', state: false},
            {text: 'Адицеф', state: false},
            {text: 'Доксициклин', state: true},
            {text: 'Эмоксипин', state: false}
        ],
        help: 'Пациент собирается на дачу'
    }
];
export const level2 = [
    {question: 'Что имел в виду пациент, попросив у Вас "Цетюлевую кислоту"?',
        answers: [
            {text: 'фолиевую кислоту', state: false},
            {text: 'азелаиновую кислоту', state: false},
            {text: 'салициловую кислоту', state: false},
            {text: 'ацетилсалициловую кислоту', state: true}
        ],
        help: 'Пациенту плохо'
    },
    {question: 'Пациент попросил "Лопердин". Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'лортензу', state: false},
            {text: 'валосердин', state: false},
            {text: 'лоратадин', state: false},
            {text: 'лоперамид', state: true}
        ],
        help: 'очень популярное наименование'
    },
    {question: 'Что бы вы предложили пациенту на запрос "Синьк"?',
        answers: [
            {text: 'цинк', state: true},
            {text: 'сеннадексин', state: false},
            {text: 'синаф', state: false},
            {text: 'синекод', state: false}
        ],
        help: 'Произнесите быстро'
    },
    {question: 'Пациент попросил мазь "Партизан форте". Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'спасатель', state: false},
            {text: 'индовазин форте', state: false},
            {text: 'постеризан форте', state: true},
            {text: 'защитник', state: false}
        ],
        help: 'Партизаны хорошо прячутся'
    },
    {question: '"Бабагамма" - это:',
        answers: [
            {text: 'Тиогамма', state: false},
            {text: 'Габагамма', state: true},
            {text: 'Фенибут', state: false},
            {text: 'Билобил', state: false}
        ],
        help: 'У пациента что-то болит'
    },
    {question: 'Что в народе назвают "Теплорот"?',
        answers: [
            {text: 'Термометр', state: false},
            {text: 'Магнерот', state: false},
            {text: 'Фенкарол', state: true},
            {text: 'Ротокан', state: false}
        ],
        help: 'Ответ может вас удивить :)'
    },
    {question: 'Если пациент попросит у Вас набор подорожника, то скорее всего он имел в виду:',
        answers: [
            {text: 'лист', state: false},
            {text: 'весь подорожник в аптеке', state: false},
            {text: 'сироп', state: true},
            {text: 'сбор грудной', state: false}
        ],
        help: 'Состав этой формы не так прост'
    },
    {question: 'Каким товар пациенты любят поливать рассаду для улучшения роста?',
        answers: [
            {text: 'Хлоргексидин', state: false},
            {text: 'Перекись водорода', state: true},
            {text: 'Йод', state: false},
            {text: 'Калия перманганат', state: false}
        ],
        help: 'Его еще и разбавляют'
    },
    {question: 'Таблетки "Раз-два-три" - это:',
        answers: [
            {text: 'Бисакодил', state: false},
            {text: 'Лоперамид', state: false},
            {text: 'Трибестан', state: false},
            {text: 'Триалгин', state: true}
        ],
        help: 'У пациента общая слабость. Возможно, ковид'
    },
    {question: '"Ягодные свечи", по мнению пациента, это:',
        answers: [
            {text: 'Облепиховые свечи', state: true},
            {text: 'Релиф адванс', state: false},
            {text: 'Тержинан', state: false},
            {text: 'Цефекон', state: false}
        ],
        help: 'После их применения пациент может сидеть спокойно :)'
    }
];
export const level3 = [
    {question: 'Что имел в виду пациент, попросив у Вас "Нескафе"?',
        answers: [
            {text: 'синаф', state: true},
            {text: 'небилет', state: false},
            {text: 'флюдикаф', state: false},
            {text: 'найсулид', state: false}
        ],
        help: 'Оказывается, нескафе хорошо убирает воспалительный процесс'
    },
    {question: 'Пациент попросил красные ампулы от живота. Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'но-шпу', state: false},
            {text: 'омепразол', state: true},
            {text: 'бисакодил', state: false},
            {text: 'дротаверин', state: false}
        ],
        help: 'это лекарство - хит продаж'
    },
    {question: 'Что бы вы предложили пациенту на запрос "Оталлергин"?',
        answers: [
            {text: 'отирелакс', state: false},
            {text: 'цетрин', state: false},
            {text: 'анальгин', state: true},
            {text: 'аллеркапс', state: false}
        ],
        help: 'Ответ может вас удивить :)'
    },
    {question: 'Пациент попросил "Максиафил". Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'виагра', state: false},
            {text: 'максамин форте', state: false},
            {text: 'максигра', state: true},
            {text: 'максилак', state: false}
        ],
        help: 'Хорошо прочитайте название запроса'
    },
    {question: 'Капли "Упс" - это:',
        answers: [
            {text: 'Ксилин спрей', state: false},
            {text: 'Фликсоназе', state: false},
            {text: 'Снуп', state: true},
            {text: 'Пиколакс', state: false}
        ],
        help: 'У пациента заложен нос'
    },
    {question: 'Что в народе назвают "Ко-принцесса"?',
        answers: [
            {text: 'Пренесса', state: false},
            {text: 'Ко-пренесса', state: true},
            {text: 'Амлесса', state: false},
            {text: 'Ко-амлесса', state: false}
        ],
        help: 'Очень созвучно с запросом'
    },
    {question: 'Если пациент попросит у Вас "Мандажор", то скорее всего он имел в виду:',
        answers: [
            {text: 'методжект', state: true},
            {text: 'манагру', state: false},
            {text: 'метопролол', state: false},
            {text: 'метформин', state: false}
        ],
        help: 'В рецепте будет точно написано, что же надо'
    },
    {question: 'Если у вас попросили пергамент, то скорее всего пациенту нужно купить:',
        answers: [
            {text: 'пластыри', state: false},
            {text: 'горчиники', state: false},
            {text: 'марганцовку', state: true},
            {text: 'перговерис', state: false}
        ],
        help: 'Если подумать, то ответ станет очевиден'
    },
    {question: 'Если пациент попросил у вас ампулы, это может означать, что:',
        answers: [
            {text: 'надо продать уколы', state: false},
            {text: 'надо предложить лекарство во флаконе', state: false},
            {text: 'он имел в виду капсулы', state: true},
            {text: 'обязательно продать еще и шприцы', state: false}
        ],
        help: 'Вы точно с этим сталкивались :)'
    },
    {question: 'Если пациент обратился к Вам за освежающей курагой, то можно предложить ему:',
        answers: [
            {text: 'обратиться в продуктовый магазин', state: false},
            {text: 'курантил', state: false},
            {text: 'фруктовый батончик или мюсли', state: false},
            {text: 'крем для фиксации протезов', state: true}
        ],
        help: 'В вашей аптеке точно такое есть :)'
    }
];
export const level4 = [
    {question: 'Что имел в виду пациент, попросив у Вас "Сифон"?',
        answers: [
            {text: 'сифон сантехнический', state: false},
            {text: 'синджарди', state: false},
            {text: 'синафлан', state: true},
            {text: 'ортосифон тычиночный', state: false}
        ],
        help: 'Оказывается, сифон хорошо убирает воспалительный процесс'
    },
    {question: 'Пациент попросил желтые таблетки от температуры. Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'но-шпу', state: false},
            {text: 'ибуфен', state: true},
            {text: 'вольтарен', state: false},
            {text: 'стопдиар', state: false}
        ],
        help: 'в вопросе кроется ответ :)'
    },
    {question: 'Что бы вы предложили пациенту на запрос "Кальцинированный"?',
        answers: [
            {text: 'кальция глюконат', state: false},
            {text: 'уголь', state: true},
            {text: 'кальцемин', state: false},
            {text: 'панангин', state: false}
        ],
        help: 'Ответ может вас удивить :)'
    },
    {question: 'Пациент попросил лекарство между севером и югом. Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'центровит', state: false},
            {text: 'экваприл', state: false},
            {text: 'экватор', state: true},
            {text: 'параллель', state: false}
        ],
        help: 'География - наше все :)'
    },
    {question: '"Псорикард" - это:',
        answers: [
            {text: 'Псоридерм', state: false},
            {text: 'Карведилол', state: false},
            {text: 'Упсарин УПСА', state: false},
            {text: 'Аспикард', state: true}
        ],
        help: 'Очень нужен для профилактики'
    },
    {question: 'Что в народе назвают "Удиви"?',
        answers: [
            {text: 'ундевит', state: true},
            {text: 'дивигель', state: false},
            {text: 'аудитор', state: false},
            {text: 'девит', state: false}
        ],
        help: 'Удивительно хорошо помогает всем в сезон простуд :)'
    },
    {question: 'Если пациент попросит у Вас "Тераплюнь", то скорее всего он имел в виду:',
        answers: [
            {text: 'терафлекс', state: false},
            {text: 'сироп плюща', state: false},
            {text: 'тербизил', state: false},
            {text: 'терафлю', state: true}
        ],
        help: 'Хит продаж'
    },
    {question: 'Если у вас попросили клей, то скорее всего пациенту нужно купить:',
        answers: [
            {text: 'клей БФ', state: false},
            {text: 'пластырь самоклеящийся', state: false},
            {text: 'крем фиксирующий для протезов', state: true},
            {text: 'клей-карандаш', state: false}
        ],
        help: 'Ответ не очень очевиден, но иногда бывает нужно приклеить разные вещи :)'
    },
    {question: 'Если пациент попросил у вас мазь "Мигель", это может означать, что он хотел:',
        answers: [
            {text: 'меновазин', state: false},
            {text: 'меколь', state: true},
            {text: 'миконазол', state: false},
            {text: 'ибупрофен гель', state: false}
        ],
        help: 'Ну это просто :)'
    },
    {question: 'Если пациент обратился к Вам за **ициловой кислотой, то от не матерится, а хочет купить:',
        answers: [
            {text: 'салициловую кислоту', state: false},
            {text: 'аспирин', state: false},
            {text: 'фолиевую кислоту', state: true},
            {text: 'борную кислоту', state: false}
        ],
        help: 'Ответ вас однозначно удивит :)'
    }
];
export const level5 = [
    {question: 'Что имел в виду пациент, попросив у Вас желтые таблетки от сердца?',
        answers: [
            {text: 'нифекард', state: false},
            {text: 'ибупрофен', state: false},
            {text: 'валериану', state: true},
            {text: 'фенибут', state: false}
        ],
        help: 'Помогают и пациенту, и окружающим'
    },
    {question: 'Пациент попросил "Фосфомилан". Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'диофлан', state: true},
            {text: 'фосфомицин', state: false},
            {text: 'фосфалюгель', state: false},
            {text: 'анаприлин', state: false}
        ],
        help: 'эти таблетки помогают и сидеть, и стоять :)'
    },
    {question: 'Если пациент требует у вас оргазму, это не значит, что он к Вам пристает. Скорее всего он болеет:',
        answers: [
            {text: 'простатитом', state: false},
            {text: 'сердечной недостаточностью', state: false},
            {text: 'глаукомой', state: true},
            {text: 'климактерическим расстойством', state: false}
        ],
        help: 'Подумайте о созвучных лекарствах :)'
    },
    {question: 'Пациент попросил дикий пластырь. Что хотел купить пациент?',
        answers: [
            {text: 'перцово-камфорный пластырь', state: false},
            {text: 'пластырь, который не отклеивается', state: false},
            {text: 'кетопластин', state: true},
            {text: 'пластырь, который отклеивается сразу', state: false}
        ],
        help: 'Ответ скорее всего будет неожиданным'
    },
    {question: '"Нектокифиллин" - это:',
        answers: [
            {text: 'нимесулид', state: false},
            {text: 'пентоксифиллин', state: true},
            {text: 'эуфиллин', state: false},
            {text: 'хлорофиллипт', state: false},
        ],
        help: 'Очень просто :)'
    },
    {question: 'Что в народе назвают "Бобенга"?',
        answers: [
            {text: 'боботик', state: false},
            {text: 'борную кислоту', state: false},
            {text: 'бом-бенге', state: true},
            {text: 'бенальгин', state: false}
        ],
        help: 'Это тоже просто :)'
    },
    {question: 'Если пациент попросит у Вас "Линекс", то может статься что ему нужен:',
        answers: [
            {text: 'лорекс', state: false},
            {text: 'линкас', state: true},
            {text: 'табекс', state: false},
            {text: 'ринекс', state: false}
        ],
        help: 'У человека горло болит, ну чего же вы :)'
    },
    {question: 'Если у вас попросили пирамиду, то Вы не в Египте. Пациенту нужен:',
        answers: [
            {text: 'лоперамид', state: true},
            {text: 'пирацетам', state: false},
            {text: 'пирантел', state: false},
            {text: 'клопидогрел', state: false}
        ],
        help: 'СРОЧНО НУЖЕН!!!'
    },
    {question: 'Если пациент попросил у вас лафетку, это может означать, что он хотел:',
        answers: [
            {text: 'салфетку', state: false},
            {text: 'пипетку', state: false},
            {text: 'пластинку лекарства', state: true},
            {text: 'кто-нибудь, позовите переводчика!', state: false}
        ],
        help: 'Очень частый случай :)'
    },
    {question: 'Если пациент обратился к Вам за антисептиком для горла, то это вполне может быть:',
        answers: [
            {text: 'ангисептин', state: true},
            {text: 'лорсепт', state: false},
            {text: 'септоцид', state: false},
            {text: 'настойка боярышника', state: false}
        ],
        help: 'Ну это у Вас сразу получится :)'
    }
];
export const level6 = [
    {question: 'Что имел в виду пациент, попросив у Вас лекарство, похожее на рыбьи глазки?',
        answers: [
            {text: 'флебодиа таблетки', state: false},
            {text: 'эспумизан капсулы', state: true},
            {text: 'простамол капсулы', state: false},
            {text: 'ибупрофен-капс', state: false}
        ],
        help: 'на нормальные рыбьи глазки'
    },
    {question: 'Пациент попросил "Пофигин". Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'эхингин', state: false},
            {text: 'ново-пассит', state: false},
            {text: 'фенибут', state: true},
            {text: 'седальгин', state: false}
        ],
        help: 'подсказка таится в названии :)'
    },
    {question: 'Если пациент говорит "Цэ дерьмо", это не значит, что он Вас ругает. Скорее всего он решил приобрести:',
        answers: [
            {text: 'бетадерм', state: false},
            {text: 'ц-дерм', state: true},
            {text: 'микоцид', state: false},
            {text: 'дермазин', state: false}
        ],
        help: 'Подумайте о созвучных лекарствах :)'
    },
    {question: 'Пациент попросил альпен гольд. Что хотел купить пациент?',
        answers: [
            {text: 'шоколадку', state: false},
            {text: 'голд-вит', state: false},
            {text: 'ауробин', state: false},
            {text: 'доппельгерц', state: true}
        ],
        help: 'Ответ скорее всего будет неожиданным'
    },
    {question: 'Лекарство от сахара на "Фарма" - это:',
        answers: [
            {text: 'диадеон', state: false},
            {text: 'метформин', state: true},
            {text: 'гликлазид', state: false},
            {text: 'сбор диабетический', state: false},
        ],
        help: 'Очень просто :)'
    },
    {question: 'Вопрос с подвохом. Что в народе назвают "Капли в нос с антибиотиком"?',
        answers: [
            {text: 'сульфацил натрия', state: true},
            {text: 'полидекса', state: false},
            {text: 'изофра', state: false},
            {text: 'отисфен', state: false}
        ],
        help: 'Знатоков фармакологии ответ может удивить'
    },
    {question: 'Если пациент попросит у Вас "Зол" для желудка, то может оказаться что ему нужен:',
        answers: [
            {text: 'пантопразол', state: false},
            {text: 'фамотидин', state: false},
            {text: 'омепразол', state: true},
            {text: 'алмагель', state: false}
        ],
        help: 'Это лекарство - хит'
    },
    {question: 'Вопрос с подвохом. Таблетки от головы на Т:',
        answers: [
            {text: 'темпалгин', state: false},
            {text: 'миг', state: false},
            {text: 'кавинтон', state: true},
            {text: 'кеторол', state: false}
        ],
        help: 'Он еще в уколах бывает'
    },
    {question: 'Если пациент попросил у вас бластер, это может означать, что он хотел:',
        answers: [
            {text: 'заказать оружие', state: false},
            {text: 'пластинку лекарства', state: true},
            {text: 'приобрести реблакс', state: false},
            {text: 'кто-нибудь, позовите переводчика!', state: false}
        ],
        help: 'Очень частый случай :)'
    },
    {question: 'Если пациент обратился к Вам за лекарством "Простамол", не спешите. Может, он хотел:',
        answers: [
            {text: 'простагард', state: false},
            {text: 'проспан', state: false},
            {text: 'простам кватро', state: false},
            {text: 'парацетамол', state: true}
        ],
        help: 'Ну это у Вас сразу получится :)'
    }
];
export const level7 = [
    {question: 'Что имел в виду пациент, попросив у Вас орбиту?',
        answers: [
            {text: 'параллель', state: false},
            {text: 'экваприл', state: false},
            {text: 'ибупрофен-капс', state: false},
            {text: 'экватор', state: true}
        ],
        help: 'на нормальные рыбьи глазки'
    },
    {question: 'Вопрос с подвохом. Пациент попросил "Калгон". Какое лекарство хотел купить пациент?',
        answers: [
            {text: 'таблетки для очистки протезов', state: true},
            {text: 'калгель', state: false},
            {text: 'каламин', state: false},
            {text: 'календулы настойка', state: false}
        ],
        help: 'цель применения та же :)'
    },
    {question: 'Если пациент просит таблетки от простуды, скорее всего он решил приобрести:',
        answers: [
            {text: 'гроприносин', state: false},
            {text: 'ацикловир', state: true},
            {text: 'граммидин', state: false},
            {text: 'ринзип', state: false}
        ],
        help: 'Простуда бывает разная :)'
    },
    {question: 'Пациент попросил микрофляй. Что хотел купить пациент?',
        answers: [
            {text: 'микразим', state: false},
            {text: 'микролакс', state: false},
            {text: 'метромикон', state: false},
            {text: 'микролайф', state: true}
        ],
        help: 'Думаю, вы справитесь :)'
    },
    {question: '"Лунный х*р" - обозначает, что пациенту нужно приобрести:',
        answers: [
            {text: 'дилтиазем', state: true},
            {text: 'флунол', state: false},
            {text: 'гербион исландский мох', state: false},
            {text: 'гербалайф формула 2', state: false},
        ],
        help: 'Надо немного подумать :)'
    },
    {question: 'Вопрос с подвохом. Что в народе назвают "Злая Галя"?',
        answers: [
            {text: 'галаринс', state: false},
            {text: 'галазолин', state: true},
            {text: 'галоперидол', state: false},
            {text: 'ренгалин', state: false}
        ],
        help: 'Вы сможете :)'
    },
    {question: 'Если пациент попросит у Вас прозрачный гель, то может оказаться что ему нужен:',
        answers: [
            {text: 'индовазин', state: false},
            {text: 'галазолин комби', state: false},
            {text: 'алмагель', state: false},
            {text: 'энтеросгель', state: true}
        ],
        help: 'он лучше, чем уголь'
    },
    {question: 'Капсикам с селеном случайно может оказаться:',
        answers: [
            {text: 'антиоксикапсом', state: true},
            {text: 'компливитом', state: false},
            {text: 'селен-активом', state: false},
            {text: 'мерц', state: false}
        ],
        help: 'несложно :)'
    },
    {question: 'Если пациент попросил у вас "Антигриппокапс", это может означать, что он хотел:',
        answers: [
            {text: 'антигриппин', state: false},
            {text: 'приобрести реблакс', state: false},
            {text: 'антигрипповит', state: true},
            {text: 'гриппомикс', state: false}
        ],
        help: 'у Вас все получится :)'
    },
    {question: 'Если пациент обратился к Вам за лекарством от цветочого грибка, он хотел вылечить:',
        answers: [
            {text: 'розовый лишай', state: true},
            {text: 'аллергию на пыльцу', state: false},
            {text: 'кандидоз', state: false},
            {text: 'грибок ногтей', state: false}
        ],
        help: 'может, не такой уж это и грибок :)'
    }
];
