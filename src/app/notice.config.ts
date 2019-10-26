import { CardHeaderType } from './hot.config';

interface NoticeTimeType {
    timeYear: string;
    timeDay: string;
    timeMonth: string;
}

interface NoticeImageType {
    url: string;
}

interface HasNoticedType {
    head: string;
    name: string;
}

interface IsNoticingType {
    name: string;
    order: string;
    branch: string;
    phone: string;
    company: string;
    number: string;
}

interface NoticeType {
    timeStart: NoticeTimeType;
    timeEnd: NoticeTimeType;
    header: CardHeaderType;
    title: string;
    content: string;
    path: NoticeImageType[];
    hasNoticed: HasNoticedType[];
    isNoticing: IsNoticingType;
    noticedList: NoticedList[];
}

interface NoticedList {
    company: string;
    name: string;
    number: string;
}


const notice: NoticeType[] = [
    {
        header: {
            name: '青兰坊',
            head: '../assets/head/3.jpg',
            motto: '青出于蓝而胜于蓝',
        },
        timeStart: {
            timeYear: '19',
            timeMonth: '08',
            timeDay: '20',
        },
        timeEnd: {
            timeYear: '2019',
            timeMonth: '08',
            timeDay: '28',
        },
        title: '生日聚会',
        content: '生日聚会报名内容',
        isNoticing: {
            name: '妈妈菜',
            branch: '大同分会',
            order: '弟6期弟子',
            phone: '13966688868',
            company: '大同妈妈菜连锁公司',
            number: '2',
        },
        path: [
            { url: '../assets/images/2-3.png' },
            { url: '../assets/images/2-4.png' }
        ],
        hasNoticed: [
            {
                name: '青兰坊',
                head: '../assets/head/2.jpg',
            },

        ],
        noticedList: [
            {
                name: "王亮",
                company: '大同市妈妈菜',
                number: '5',
            },
            {
                name: "王亮",
                company: '大同市妈妈菜',
                number: '5',
            },
            {
                name: "王亮",
                company: '大同市妈妈菜',
                number: '5',
            }, {
                name: "王亮",
                company: '大同市妈妈菜',
                number: '5',
            }, {
                name: "王亮",
                company: '大同市妈妈菜',
                number: '5',
            }, {
                name: "王亮",
                company: '大同市妈妈菜',
                number: '5',
            }
        ]
    }
]

export { notice, NoticeType }