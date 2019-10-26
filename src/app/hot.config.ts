
interface HotDataPathType {
  url: string;
  type: string;

}
interface HotDataCommentType {
  head: string;
  time: string;
  content: string;
  name: string;
}

interface CardHeaderType {
  head: string;
  name: string;
  motto: string;
}

interface HotDataType {
  cardHeader: CardHeaderType;
  title: string;
  content: string;
  path: HotDataPathType[];
  comment: HotDataCommentType[];
}


const data: HotDataType[] = [
  {
    cardHeader: {
      head: '../assets/head/3.jpg',
      motto: '',
      name: '大同妈妈菜'
    },
    title: '企航集团一年一度《管理营销大系统》镇海来袭！',
    content: '起航资源平台共享！最新商业模式，如何制定自己家企业的系统，如何转型《管理营销大系统》课程（2019年11月4日-1日）',
    path: [
      {
        url: '../../../../assets/images/image1.jpeg',
        type: 'image',
      },
      {
        url: '',
        type: 'video',
      },
      {
        url: '../../../../assets/images/image3.png',
        type: 'image',
      },
      {
        url: '../../../../assets/images/image2.png',
        type: 'image',
      },
      {
        url: '',
        type: 'voice',
      }
    ],
    comment: [
      {
        name: "清兰坊",
        head: "../assets/head/4.jpg",
        time: "08/21: 10:10",
        content: "初创企业靠沟通，初级企业靠榜样，初型企业靠霸权，成局企业靠管理，规模企业靠引领！！",
      },
      {
        name: "妈妈菜",
        head: "../assets/head/5.jpg",
        time: "08/21: 10:10",
        content: "师父，中国清兰坊爱你！！！！么么哒",
      },
      {
        name: "海鲜烧烤",
        head: "../assets/head/2.jpg",
        time: "08/21: 10:10",
        content: "人生就是讲你所做，做你所讲",
      },
      {
        name: "大连搬家公司",
        head: "../assets/head/6.jpg",
        time: "08/21: 10:10",
        content: "世间没有输赢只有对梦想是否坚持，世间没有成败，只有对梦想是否坚守！！",
      },
      {
        name: "鑫森物业服务",
        head: "../assets/head/1.jpg",
        time: "08/21: 10:10",
        content: "说得好，做人必须要正！",
      },
    ]

  },
  {
    cardHeader: {
      head: '../assets/head/4.jpg',
      motto: '请你更完美一道送旧迎新，移馆别恋',
      name: '大连搬家公司'
    },
    title: '回望十年 回暖一生《佳木斯》专场实时报导',
    content: '<p>恩师分享:</p> <p>万物本相——循环，生命规律与人生轨迹。</p>   <p>循环 </p> <p> 似曾相识 </p> <p> 万物波动，宇宙螺旋，人生循环  </p> <p>所有现在的一切都是曾经放大的重演 </p> <p>今天的一切都是放大的回放 </p> <p> 恶心循环</p>',
    path: [
      {
        url: "../assets/images/1_1.jpg",
        type: 'image',
      },
      {
        url: '',
        type: 'video',
      },
      {
        url: '../assets/images/1_2.jpg',
        type: 'image',
      },
      {
        url: '../assets/images/1_3.jpg',
        type: 'image',
      },
      {
        url: '',
        type: 'voice',
      }
    ],
    comment: [
      {
        name: "清兰坊",
        head: "../assets/head/7.jpg",
        time: "08/21: 10:10",
        content: "初创企业靠沟通，初级企业靠榜样，初型企业靠霸权，成局企业靠管理，规模企业靠引领！！",
      },
      {
        name: "妈妈菜",
        head: "../assets/head/5.jpg",
        time: "08/21: 10:10",
        content: "师父，中国清兰坊爱你！！！！么么哒",
      },
      {
        name: "海鲜烧烤",
        head: "../assets/head/2.jpg",
        time: "08/21: 10:10",
        content: "人生就是讲你所做，做你所讲",
      },
      {
        name: "大连搬家公司",
        head: "../assets/head/6.jpg",
        time: "08/21: 10:10",
        content: "世间没有输赢只有对梦想是否坚持，世间没有成败，只有对梦想是否坚守！！",
      },
      {
        name: "鑫森物业服务",
        head: "../assets/head/1.jpg",
        time: "08/21: 10:10",
        content: "说得好，做人必须要正！",
      },
    ]

  },
  {
    cardHeader: {
      head: '../assets/head/3.jpg',
      motto: '请你更完美一道送旧迎新，移馆别恋',
      name: "清兰坊",
    },
    title: '回望十年 回暖一生《佳木斯》专场实时报导',
    content: '<p>真是一种力量</p> <p>真是一种纯粹</p> <p>真是一种保护 </p> <p> 真是一种幸福 </p> <p> 不向往童话、成为童话  </p> <p>不向往武侠、成为武侠 </p> <p>不向往幸福、成为幸福 </p> <p> 企业家成长分会</p> <p>佳木斯服务站数据部</p>',
    path: [
      {
        url: "../assets/images/2-1.jpg",
        type: 'image',
      },
      {
        url: '',
        type: 'video',
      },
      {
        url: '../assets/images/2-3.png',
        type: 'image',
      },
      {
        url: '../assets/images/2-4.png',
        type: 'image',
      },
      {
        url: '',
        type: 'voice',
      }
    ],
    comment: [
      {
        name: "清兰坊",
        head: "../assets/head/7.jpg",
        time: "08/21: 10:10",
        content: "初创企业靠沟通，初级企业靠榜样，初型企业靠霸权，成局企业靠管理，规模企业靠引领！！",
      },
      {
        name: "妈妈菜",
        head: "../assets/head/5.jpg",
        time: "08/21: 10:10",
        content: "师父，中国清兰坊爱你！！！！么么哒",
      },
      {
        name: "海鲜烧烤",
        head: "../assets/head/2.jpg",
        time: "08/21: 10:10",
        content: "人生就是讲你所做，做你所讲",
      },
      {
        name: "大连搬家公司",
        head: "../assets/head/6.jpg",
        time: "08/21: 10:10",
        content: "世间没有输赢只有对梦想是否坚持，世间没有成败，只有对梦想是否坚守！！",
      },
      {
        name: "鑫森物业服务",
        head: "../assets/head/1.jpg",
        time: "08/21: 10:10",
        content: "说得好，做人必须要正！",
      },
    ]

  },
]

export { data, HotDataType, CardHeaderType }