
interface MyConfigType {
    head: string,
    sex: string,
    birthday: string,
    phone: string,
    identity1: string,
    identity2: string,
    industry: string,
    motto: string,
    answer1: string,
    answer2: string;
}



const myconfig = {
    head: '../assets/head/head.jpg',
    sex: '女',
    birthday: '199/10/21',
    phone: '18212345678',
    identity1: '大同分会',
    identity2: '青苗',
    industry: '互联网',
    motto: '我是一个乖乖的程序员！！！！',
    answer1: '目前在做网站以及app的开发工作！！',
    answer2: '可以帮大家搭建网站，或者开发app等相关服务！！',
}

export { myconfig, MyConfigType }