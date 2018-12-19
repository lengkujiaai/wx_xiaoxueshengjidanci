//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //this.globalData = {}

    // var url = this.globalData.schoolList;
    this.createUnit()
  },
  createUnit:function(){
    var pep3aUnitWord = new Array()//将本册的所有单元组合成数组
    pep3aUnitWord[0] = this.globalData.pep3aUnit1
    pep3aUnitWord[1] = this.globalData.pep3aUnit2
    pep3aUnitWord[2] = this.globalData.pep3aUnit3
    pep3aUnitWord[3] = this.globalData.pep3aUnit4
    pep3aUnitWord[4] = this.globalData.pep3aUnit5
    pep3aUnitWord[5] = this.globalData.pep3aUnit6
    this.globalData.pep3aUnitWord = pep3aUnitWord
    var pep3bUnitWord = new Array()
    pep3bUnitWord[0] = this.globalData.pep3bUnit1
    pep3bUnitWord[1] = this.globalData.pep3bUnit2
    pep3bUnitWord[2] = this.globalData.pep3bUnit3
    pep3bUnitWord[3] = this.globalData.pep3bUnit4
    pep3bUnitWord[4] = this.globalData.pep3bUnit5
    pep3bUnitWord[5] = this.globalData.pep3bUnit6
    this.globalData.pep3bUnitWord = pep3bUnitWord
    var pep4aUnitWord = new Array()
    pep4aUnitWord[0] = this.globalData.pep4aUnit1
    pep4aUnitWord[1] = this.globalData.pep4aUnit2
    pep4aUnitWord[2] = this.globalData.pep4aUnit3
    pep4aUnitWord[3] = this.globalData.pep4aUnit4
    pep4aUnitWord[4] = this.globalData.pep4aUnit5
    pep4aUnitWord[5] = this.globalData.pep4aUnit6
    this.globalData.pep4aUnitWord = pep4aUnitWord
    var pep4bUnitWord = new Array()
    pep4bUnitWord[0] = this.globalData.pep4bUnit1
    pep4bUnitWord[1] = this.globalData.pep4bUnit2
    pep4bUnitWord[2] = this.globalData.pep4bUnit3
    pep4bUnitWord[3] = this.globalData.pep4bUnit4
    pep4bUnitWord[4] = this.globalData.pep4bUnit5
    pep4bUnitWord[5] = this.globalData.pep4bUnit6
    this.globalData.pep4bUnitWord = pep4bUnitWord
    var pep5aUnitWord = new Array()
    pep5aUnitWord[0] = this.globalData.pep5aUnit1
    pep5aUnitWord[1] = this.globalData.pep5aUnit2
    pep5aUnitWord[2] = this.globalData.pep5aUnit3
    pep5aUnitWord[3] = this.globalData.pep5aUnit4
    pep5aUnitWord[4] = this.globalData.pep5aUnit5
    pep5aUnitWord[5] = this.globalData.pep5aUnit6
    this.globalData.pep5aUnitWord = pep5aUnitWord
    var pep5bUnitWord = new Array()
    pep5bUnitWord[0] = this.globalData.pep5bUnit1
    pep5bUnitWord[1] = this.globalData.pep5bUnit2
    pep5bUnitWord[2] = this.globalData.pep5bUnit3
    pep5bUnitWord[3] = this.globalData.pep5bUnit4
    pep5bUnitWord[4] = this.globalData.pep5bUnit5
    pep5bUnitWord[5] = this.globalData.pep5bUnit6
    this.globalData.pep5bUnitWord = pep5bUnitWord
    var pep6aUnitWord = new Array()
    pep6aUnitWord[0] = this.globalData.pep6aUnit1
    pep6aUnitWord[1] = this.globalData.pep6aUnit2
    pep6aUnitWord[2] = this.globalData.pep6aUnit3
    pep6aUnitWord[3] = this.globalData.pep6aUnit4
    pep6aUnitWord[4] = this.globalData.pep6aUnit5
    pep6aUnitWord[5] = this.globalData.pep6aUnit6
    this.globalData.pep6aUnitWord = pep6aUnitWord
    var pep6bUnitWord = new Array()
    pep6bUnitWord[0] = this.globalData.pep6bUnit1
    pep6bUnitWord[1] = this.globalData.pep6bUnit2
    pep6bUnitWord[2] = this.globalData.pep6bUnit3
    pep6bUnitWord[3] = this.globalData.pep6bUnit4
    this.globalData.pep6bUnitWord = pep6bUnitWord
  },
  globalData: {
    studyUnit:'pep3aUnit',//学生选择的目前在学习的册
    studyUnitNum:'6',//所学课本共有几个单元
    
    studyUnitWord:'pep3aUnitWord',
    pep3aUnit: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6'],pep3aUnitWord:'',
    pep3bUnit: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6'], pep3bUnitWord: '',
    pep4aUnit: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6'], pep4aUnitWord: '',
    pep4bUnit: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6'], pep4bUnitWord: '',
    pep5aUnit: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6'], pep5aUnitWord: '',
    pep5bUnit: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6'], pep5bUnitWord: '',
    pep6aUnit: ['Unit1', 'Unit2', 'Unit3', 'Unit4', 'Unit5', 'Unit6'], pep6aUnitWord: '',
    pep6bUnit: ['Unit1', 'Unit2', 'Unit3', 'Unit4'], pep6bUnitWord: '',

    //----------------------------------------------------------------------------
    //------------------------------下面是单词，按单元存储-------------------------------------
    //----------------------------------------------------------------------------
    pep3aUnit1: [{ 'en': 'pen', 'cn': '钢笔' }, { 'en': 'pencil', 'cn': '铅笔' }, { 'en': 'pencil-case', 'cn': '铅笔盒' }, { 'en': 'ruler', 'cn': '尺子' }, { 'en': 'eraser', 'cn': '橡皮' }, { 'en': 'crayon', 'cn': '蜡笔' }, { 'en': 'book', 'cn': '书' }, { 'en': 'bag', 'cn': '书包' }, { 'en': 'sharpener', 'cn': '卷笔刀' }, { 'en': 'school', 'cn': '学校' }],
    pep3aUnit2: [{ 'en': 'head', 'cn': '头' }, { 'en': 'face', 'cn': '脸' }, { 'en': 'nose', 'cn': '鼻子' }, { 'en': 'mouth', 'cn': '嘴' }, { 'en': 'eye', 'cn': '眼睛' }, { 'en': 'ear', 'cn': '耳朵' }, { 'en': 'arm', 'cn': '胳膊' }, { 'en': 'finger', 'cn': '手指' }, { 'en': 'leg', 'cn': '腿' }, { 'en': 'foot', 'cn': '脚' }, { 'en': 'body', 'cn': '身体' }],
    pep3aUnit3: [{ 'en': 'red', 'cn': '红色的' }, { 'en': 'yellow', 'cn': '黄色的' }, { 'en': 'green', 'cn': '绿色的' }, { 'en': 'blue', 'cn': '蓝色的' }, { 'en': 'purple', 'cn': '紫色的' }, { 'en': 'white', 'cn': '白色的' }, { 'en': 'black', 'cn': '黑色的' }, { 'en': 'orange', 'cn': '橙色的' }, { 'en': 'pink', 'cn': '粉色的' }, { 'en': 'brown', 'cn': '棕色的' }],
    pep3aUnit4: [{ 'en': 'cat', 'cn': '猫' }, { 'en': 'dog', 'cn': '狗' }, { 'en': 'monkey', 'cn': '猴子' }, { 'en': 'panda', 'cn': '熊猫' }, { 'en': 'rabbit', 'cn': '兔子' }, { 'en': 'duck', 'cn': '鸭子' }, { 'en': 'pig', 'cn': '猪' }, { 'en': 'bird', 'cn': '鸟' }, { 'en': 'bear', 'cn': '熊' }, { 'en': 'elephant', 'cn': '大象' }, { 'en': 'mouse', 'cn': '老鼠' }, { 'en': 'squirrel', 'cn': '松鼠' }],
    pep3aUnit5: [{ 'en': 'cake', 'cn': '蛋糕' }, { 'en': 'bread', 'cn': '面包' }, { 'en': 'hot dog', 'cn': '热狗' }, { 'en': 'hamburger', 'cn': '汉堡包' }, { 'en': 'chicken', 'cn': '鸡肉' }, { 'en': 'French fries', 'cn': '炸薯条' }, { 'en': 'Coke', 'cn': '可乐' }, { 'en': 'juice', 'cn': '果汁' }, { 'en': 'milk', 'cn': '牛奶' }, { 'en': 'water', 'cn': '水' }, { 'en': 'tea', 'cn': '茶' }, { 'en': 'coffee', 'cn': '咖啡' }],
    pep3aUnit6: [{ 'en': 'one', 'cn': '一' }, { 'en': 'two', 'cn': '二' }, { 'en': 'three', 'cn': '三' }, { 'en': 'four', 'cn': '四' }, { 'en': 'five', 'cn': '五' }, { 'en': 'six', 'cn': '六' }, { 'en': 'seven', 'cn': '七' },{ 'en': 'eight', 'cn': '八' }, { 'en': 'nine', 'cn': '九' }, { 'en': 'ten', 'cn': '十' }, { 'en': 'doll', 'cn': '玩具娃娃' }, { 'en': 'boat', 'cn': '小船' }, { 'en': 'ball', 'cn': '球' }, { 'en': 'kite', 'cn': '风筝' }, { 'en': 'balloon', 'cn': '气球' }, { 'en': 'car', 'cn': '小汽车' }, { 'en': 'plane', 'cn': '飞机' }],

    pep3bUnit1: [{ 'en': 'boy', 'cn': '男孩' }, { 'en': 'girl', 'cn': '女孩' }, { 'en': 'teacher', 'cn': '教师' }, { 'en': 'student', 'cn': '学生' },{ 'en': 'this', 'cn': '这个' }, { 'en': 'my', 'cn': '我的' }, { 'en': 'friend', 'cn': '朋友' }, { 'en': 'I’m = I am', 'cn': '我是' }, { 'en': 'nice', 'cn': '好的；愉快' }, { 'en': 'good morning', 'cn': '早上好' }, { 'en': 'good afternoon', 'cn': '下午好' }, { 'en': 'meet', 'cn': '遇见；碰见' }, { 'en': 'goodbye', 'cn': '再见' }, { 'en': 'too', 'cn': '也；太' }],
    pep3bUnit2: [{ 'en': 'father', 'cn': '父亲；爸爸' }, { 'en': 'dad', 'cn': '爸爸（口语）' }, { 'en': 'mother', 'cn': '母亲；妈妈' }, { 'en': 'mom', 'cn': '妈妈（口语）' }, { 'en': 'man', 'cn': '男人' }, { 'en': 'woman', 'cn': '女人' }, { 'en': 'grandmother', 'cn': '（外）祖母' }, { 'en': 'grandma', 'cn': '（外）祖母（口语）' }, { 'en': 'grandfather', 'cn': '祖父（外）' }, { 'en': 'grandpa', 'cn': '（外）祖父（口语）' }, { 'en': 'sister', 'cn': '姐妹' }, { 'en': 'brother', 'cn': '兄弟' }, { 'en': 'let’s =let us', 'cn': '让我们' }, { 'en': 'great', 'cn': '太好了' }, { 'en': 'really', 'cn': '真地；确切地' }, { 'en': 'and', 'cn': '和；并且' }, { 'en': 'how', 'cn': '多么；怎么样' }],
    pep3bUnit3: [{ 'en': 'eleven', 'cn': '十一' }, { 'en': 'twelve', 'cn': '十二' }, { 'en': 'thirteen', 'cn': '十三' }, { 'en': 'fourteen', 'cn': '十四' }, { 'en': 'fifteen', 'cn': '十五' }, { 'en': 'sixteen', 'cn': '十六' }, { 'en': 'seventeen', 'cn': '十七' }, { 'en': 'eighteen', 'cn': '十八' }, { 'en': 'nineteen', 'cn': '十九' }, { 'en': 'twenty', 'cn': '二十' }, { 'en': 'how many', 'cn': '多少' }, { 'en': 'can', 'cn': '能够；可以' }, { 'en': 'look at', 'cn': '看；瞧' }],
    pep3bUnit4: [{ 'en': 'peach', 'cn': '桃' }, { 'en': 'pear', 'cn': '梨' }, { 'en': 'orange', 'cn': '橙子' }, { 'en': 'watermelon', 'cn': '西瓜' }, { 'en': 'apple', 'cn': '苹果' }, { 'en': 'banana', 'cn': '香蕉' }, { 'en': 'strawberry', 'cn': '草莓' }, { 'en': 'grape', 'cn': '葡萄' }, { 'en': 'like', 'cn': '喜欢' }, { 'en': 'some', 'cn': '一些' }, { 'en': 'thanks', 'cn': '多谢' }],
    pep3bUnit5: [{ 'en': 'bus', 'cn': '公共汽车' }, { 'en': 'bike', 'cn': '自行车' }, { 'en': 'taxi', 'cn': '出租车' }, { 'en': 'jeep', 'cn': '吉普车' }, { 'en': 'desk', 'cn': '课桌' }, { 'en': 'chair', 'cn': '椅子' }, { 'en': 'walkman', 'cn': '随身听' }, { 'en': 'lamp', 'cn': '台灯' }, { 'en': 'your', 'cn': '你的；你们的' }, { 'en': 'zoo', 'cn': '动物园' }],
    pep3bUnit6: [{ 'en': 'small', 'cn': '小的' }, { 'en': 'big', 'cn': '大的' }, { 'en': 'long', 'cn': '长的' }, { 'en': 'short', 'cn': '短的' }, { 'en': 'tall', 'cn': '高的' }, { 'en': 'giraffe', 'cn': '长颈鹿' }, { 'en': 'deer', 'cn': '鹿' }],
    pep4aUnit1: [{ 'en': 'Window', 'cn': '窗户' }, { 'en': 'board', 'cn': '板' }, { 'en': 'light', 'cn': '灯' }, { 'en': 'picture', 'cn': '图片' }, { 'en': 'door', 'cn': '门' }, { 'en': 'floor', 'cn': '地板' }, { 'en': 'classroom', 'cn': '教室' }, { 'en': 'computer', 'cn': '电脑' }, { 'en': 'teacher’s desk', 'cn': '讲台' }, { 'en': 'wall', 'cn': '墙' }, { 'en': 'fan', 'cn': '扇子' }],
    pep4aUnit2: [{ 'en': 'bag', 'cn': '包' }, { 'en': 'pencil', 'cn': '铅笔' }, { 'en': 'pen', 'cn': '钢笔' }, { 'en': 'book', 'cn': '书' }, { 'en': 'ruler', 'cn': '尺子' }, { 'en': 'pencil-case', 'cn': '铅笔盒' }],
    pep4aUnit3: [{ 'en': 'teacher', 'cn': '教师' }, { 'en': 'student', 'cn': '学生' }, { 'en': 'boy', 'cn': '男孩' }, { 'en': 'girl', 'cn': '女孩' }, { 'en': 'friend', 'cn': '朋友' }],
    pep4aUnit4: [{ 'en': 'home', 'cn': '家' }, { 'en': 'room', 'cn': '房间' }, { 'en': 'school', 'cn': '学校' }, { 'en': 'classroom', 'cn': '教室' }, { 'en': 'window', 'cn': '窗户' }, { 'en': 'desk', 'cn': '课桌，书桌' }, { 'en': 'door', 'cn': '门' }, { 'en': 'chair', 'cn': '椅子' }, { 'en': 'bed', 'cn': '床' }],
    pep4aUnit5: [{ 'en': 'rice', 'cn': '米饭' }, { 'en': 'beef', 'cn': '牛肉' }, { 'en': 'bread', 'cn': '面包' }, { 'en': 'milk', 'cn': '牛奶' }, { 'en': 'egg', 'cn': '蛋' }, { 'en': 'water', 'cn': '水' }, { 'en': 'chicken', 'cn': '鸡肉' }, { 'en': 'fish', 'cn': '鱼' }],
    pep4aUnit6: [{ 'en': 'sister', 'cn': '姐妹' }, { 'en': 'brother', 'cn': '兄弟' }, { 'en': 'farther', 'cn': '父亲，爸爸' }, { 'en': 'mother', 'cn': '母亲，妈妈' }, { 'en': 'driver', 'cn': '司机' }, { 'en': 'doctor', 'cn': '医生' }, { 'en': 'farmer', 'cn': '农民' }, { 'en': 'nurse', 'cn': '护士' }],
    pep4bUnit1: [{ 'en': 'computer', 'cn': '计算机' }, { 'en': 'board', 'cn': '写字板' }, { 'en': 'fan', 'cn': '风扇' }, { 'en': 'light', 'cn': '灯' }, { 'en': 'this', 'cn': '这，这个' }, { 'en': 'is', 'cn': '是' }, { 'en': 'my', 'cn': '我的' }, { 'en': 'that', 'cn': '那，那个' }, { 'en': 'your', 'cn': '你的' }, { 'en': 'teacher’s desk', 'cn': '讲台' }, { 'en': 'picture', 'cn': '图画，照片' }, { 'en': 'wall', 'cn': '墙壁' }, { 'en': 'floor', 'cn': '地板' }, { 'en': 'yes', 'cn': '是，是的' }, { 'en': 'it', 'cn': '它' }],
    pep4bUnit2: [{ 'en': 'one', 'cn': '一' }, { 'en': 'two', 'cn': '二' }, { 'en': 'three', 'cn': '三' }, { 'en': 'four', 'cn': '四' }, { 'en': 'five', 'cn': '五' }, { 'en': 'six', 'cn': '六' }, { 'en': 'seven', 'cn': '七' }, { 'en': 'eight', 'cn': '八' }, { 'en': 'nine', 'cn': '九' }, { 'en': 'ten', 'cn': '十' }, { 'en': 'what', 'cn': '什么' }, { 'en': 'time', 'cn': '时间' }, { 'en': 'o’clock', 'cn': '...点钟' }, { 'en': 'math', 'cn': '数学' }, { 'en': 'Chinese', 'cn': '语文' }, { 'en': 'English', 'cn': '英语' }, { 'en': 'P.E', 'cn': '体育' }, { 'en': 'music', 'cn': '音乐' }, { 'en': 'for', 'cn': '为，给' }, { 'en': 'class', 'cn': '课程' }],
    pep4bUnit3: [{ 'en': 'jacket', 'cn': '夹克衫' }, { 'en': 'shirt', 'cn': '衬衫' }, { 'en': 'skirt', 'cn': '裙子' }, { 'en': 'dress', 'cn': '连衣裙' }, { 'en': 'T-shirt', 'cn': 'T恤衫' }, { 'en': 'red', 'cn': '红色的' }, { 'en': 'blue', 'cn': '蓝色的' }, { 'en': 'yellow', 'cn': '黄色的' }, { 'en': 'green', 'cn': '绿色的' }, { 'en': 'white', 'cn': '白色的' }, { 'en': 'no', 'cn': '不，不是' }, { 'en': 'not', 'cn': '不，不是' }, { 'en': 'colour', 'cn': '颜色' }],
    pep4bUnit4: [{ 'en': 'warm', 'cn': '暖和的' }, { 'en': 'cold', 'cn': '寒冷的' }, { 'en': 'cool', 'cn': '凉爽的' }, { 'en': 'today', 'cn': '今天' }, { 'en': 'jeans', 'cn': '牛仔裤' }, { 'en': 'pants', 'cn': '长裤' }, { 'en': 'socks', 'cn': '袜子' }, { 'en': 'shoes', 'cn': '鞋子' }, { 'en': 'let’s=let us play', 'cn': '玩，踢' }, { 'en': 'football', 'cn': '足球' }, { 'en': 'snowy', 'cn': '下雪的' }, { 'en': 'sunny', 'cn': '晴朗的' }],
    pep4bUnit5: [{ 'en': 'how much', 'cn': '多少钱' }, { 'en': 'big', 'cn': '大的' }, { 'en': 'small', 'cn': '小的' }, { 'en': 'long', 'cn': '长的' }, { 'en': 'short', 'cn': '短的' }, { 'en': 'apple', 'cn': '苹果' }, { 'en': 'banana', 'cn': '香蕉' }, { 'en': 'pear', 'cn': '梨' }, { 'en': 'orange', 'cn': '橙子' }, { 'en': 'watermelon', 'cn': '西瓜' }, { 'en': 'are', 'cn': '是' }, { 'en': 'they', 'cn': '它（他、她）们' }],
    pep4bUnit6: [{ 'en': 'horse', 'cn': '马' }, { 'en': 'cat', 'cn': '猫' }, { 'en': 'rabbit', 'cn': '兔子' }, { 'en': 'pig', 'cn': '猪' }, { 'en': 'duck', 'cn': '鸭子' }, { 'en': 'dog', 'cn': '狗' }, { 'en': 'eleven', 'cn': '十一' }, { 'en': 'twelve', 'cn': '十二' }, { 'en': 'thirteen', 'cn': '十三' }, { 'en': 'fifteen', 'cn': '十五' }, { 'en': 'twenty', 'cn': '二十' }, { 'en': 'how many', 'cn': '多少' }, { 'en': 'there', 'cn': '那儿，那里' }],
    pep5aUnit1: [{ 'en': 'young', 'cn': '年轻的' }, { 'en': 'funny', 'cn': '滑稽可笑的' }, { 'en': 'tall', 'cn': '高的' }, { 'en': 'strong', 'cn': '强壮的' }, { 'en': 'kind', 'cn': '和蔼的，可亲的' }, { 'en': 'old', 'cn': '年老的' }, { 'en': 'short', 'cn': '矮的' }, { 'en': 'thin', 'cn': '瘦的' }, { 'en': 'Mr', 'cn': '先生' }, { 'en': 'like', 'cn': '像，喜欢' }, { 'en': 'strict', 'cn': '严格的' }, { 'en': 'smart', 'cn': '聪明的，巧妙的' }, { 'en': 'active', 'cn': '积极的，活跃的' }, { 'en': 'quiet', 'cn': '安静的，文静的' }, { 'en': 'very', 'cn': '很，非常' }, { 'en': 'but', 'cn': '但是' }], 
    pep5aUnit2: [{ 'en': 'Monday', 'cn': '星期一' }, { 'en': 'Tuesday', 'cn': '星期二' }, { 'en': 'Wednesday', 'cn': '星期三' }, { 'en': 'Thursday', 'cn': '星期四' }, { 'en': 'Friday', 'cn': '星期五' }, { 'en': 'Saturday', 'cn': '星期六' }, { 'en': 'Sunday', 'cn': '星期天' }, { 'en': 'day', 'cn': '天' }, { 'en': 'have', 'cn': '有，吃' }, { 'en': 'on', 'cn': '在...时候' }, { 'en': 'do homework', 'cn': '做作业' }, { 'en': 'watch TV', 'cn': '看电视' }, { 'en': 'readbooks', 'cn': '读书' }], 
    pep5aUnit3: [{ 'en': 'eggplant', 'cn': '茄子' }, { 'en': 'fish', 'cn': '鱼' }, { 'en': 'green beans', 'cn': '青豆' }, { 'en': 'tofu', 'cn': '豆腐' }, { 'en': 'potato', 'cn': '土豆' }, { 'en': 'tomato', 'cn': '西红柿' }, { 'en': 'for', 'cn': '为' }, { 'en': 'lunch', 'cn': '中餐' }, { 'en': 'we', 'cn': '我们' }, { 'en': 'tasty', 'cn': '好吃的' }, { 'en': 'sweet', 'cn': '甜的' }, { 'en': 'sour', 'cn': '酸的' }, { 'en': 'fresh', 'cn': '新鲜的' }, { 'en': 'salty', 'cn': '咸的' }, { 'en': 'favourite', 'cn': '最喜欢的' }, { 'en': 'they are', 'cn': '他们是' }, { 'en': 'fruit', 'cn': '水果' }, { 'en': 'grape', 'cn': '葡萄' }], 
    pep5aUnit4: [{ 'en': 'cook the meals', 'cn': '做饭' }, { 'en': 'water the flowers', 'cn': '浇花' }, { 'en': 'sweep the floor', 'cn': '扫地' }, { 'en': 'clean the bedroom', 'cn': '打扫卧室' }, { 'en': 'make the bed', 'cn': '铺床' }, { 'en': 'set the table', 'cn': '摆饭桌' }, { 'en': 'wash the clothes', 'cn': '洗衣服' }, { 'en': 'do the dishes', 'cn': '洗碗碟' }, { 'en': 'use a computer', 'cn': '使用计算机' }],
    pep5aUnit5: [{ 'en': 'curtain', 'cn': '窗帘' }, { 'en': 'trash bin', 'cn': '垃圾箱' }, { 'en': 'closet', 'cn': '壁橱' }, { 'en': 'mirror', 'cn': '镜子' }, { 'en': 'end table', 'cn': '床头柜' }, { 'en': 'bedroom', 'cn': '卧室' }, { 'en': 'kitchen', 'cn': '厨房' }, { 'en': 'bathroom', 'cn': '卫生间' }, { 'en': 'living room', 'cn': '客厅' }, { 'en': 'in', 'cn': '在...里面' }, { 'en': 'on', 'cn': '在...上面' }, { 'en': 'under', 'cn': '在...下面' }, { 'en': 'near', 'cn': '在...旁边' }, { 'en': 'behind', 'cn': '在...后边' }, { 'en': 'clothes', 'cn': '衣服' }],
    pep5aUnit6: [{ 'en': 'river', 'cn': '河流' }, { 'en': 'flower', 'cn': '花' }, { 'en': 'grass', 'cn': '草' }, { 'en': 'lake', 'cn': '湖泊' }, { 'en': 'forest', 'cn': '森林' }, { 'en': 'path', 'cn': '路' }, { 'en': 'pake', 'cn': '公园' }, { 'en': 'picture', 'cn': '照片' }, { 'en': 'house', 'cn': '房子' }, { 'en': 'bridge', 'cn': '桥' }, { 'en': 'tree', 'cn': '树' }, { 'en': 'road', 'cn': '公路' }, { 'en': 'building', 'cn': '建筑物' }, { 'en': 'clean', 'cn': '干净的' }],
    pep5bUnit1: [{ 'en': 'do morning exercises', 'cn': '晨练' }, { 'en': 'eat breakfast', 'cn': '吃早饭' }, { 'en': 'have english class', 'cn': '上英语课' }, { 'en': 'play sports', 'cn': '进行体育运动' }, { 'en': 'eat dinner', 'cn': '吃晚饭' }, { 'en': 'when', 'cn': '什么时候' }, { 'en': 'evening', 'cn': '夜晚，晚上' }, { 'en': 'get up', 'cn': '起床' }, { 'en': 'at', 'cn': '在...点钟' }, { 'en': 'usually', 'cn': '通常，一般' }, { 'en': 'noon', 'cn': '中午' }, { 'en': 'climb mountains', 'cn': '爬山' }, { 'en': 'go shopping', 'cn': '购物，买东西' }, { 'en': 'play the piano', 'cn': '弹钢琴' }, { 'en': 'visit grandparents', 'cn': '看望祖父母' }, { 'en': 'go hiking', 'cn': '去远足' }, { 'en': 'weekend', 'cn': '周末' }, { 'en': 'often', 'cn': '经常' }, { 'en': 'sometimes', 'cn': '有时候' }],
    pep5bUnit2: [{ 'en': 'spring', 'cn': '春天' }, { 'en': 'summer', 'cn': '夏天' }, { 'en': 'fall', 'cn': '秋天' }, { 'en': 'winter', 'cn': '冬天' }, { 'en': 'season', 'cn': '季节' }, { 'en': 'witch', 'cn': '哪一个' }, { 'en': 'best', 'cn': '最，极' }, { 'en': 'swim', 'cn': '游泳' }, { 'en': 'fly kites', 'cn': '放风筝' }, { 'en': 'skate', 'cn': '滑冰，滑冰鞋' }, { 'en': 'make snowman', 'cn': '堆雪人' }, { 'en': 'plant trees', 'cn': '种树' }, { 'en': 'why', 'cn': '为什么' }, { 'en': 'because', 'cn': '因为' }, { 'en': 'sleep', 'cn': '睡觉' }],
    pep5bUnit3: [{ 'en': 'Jan./January', 'cn': '一月' }, { 'en': 'Feb./February', 'cn': '二月' }, { 'en': 'Mar./March', 'cn': '三月' }, { 'en': 'Apr./April', 'cn': '四月' }, { 'en': 'May', 'cn': '五月' }, { 'en': 'June', 'cn': '六月' }, { 'en': 'July', 'cn': '七月' }, { 'en': 'Aug./Augest', 'cn': '八月' }, { 'en': 'Sept./September', 'cn': '九月' }, { 'en': 'Oct./October', 'cn': '十月' }, { 'en': 'Nov./November', 'cn': '十一月' }, { 'en': 'Dec./December', 'cn': '十二月' }, { 'en': 'birthday', 'cn': '生日' }, { 'en': 'uncle', 'cn': '叔叔，舅舅' }, { 'en': 'her', 'cn': '她的' }, { 'en': 'date', 'cn': '日期' }],
    pep5bUnit4: [{ 'en': 'draw pictures', 'cn': '画画' }, { 'en': 'cook dinner', 'cn': '做饭' }, { 'en': 'read a book', 'cn': '看书' }, { 'en': 'answer the phone', 'cn': '接电话' }, { 'en': 'mom', 'cn': '妈妈' }, { 'en': 'listen to music', 'cn': '听音乐' }, { 'en': 'clean the room', 'cn': '打扫房间' }, { 'en': 'write a letter', 'cn': '写信' }, { 'en': 'write an e-mail', 'cn': '写电子邮件' }, { 'en': 'grandpa', 'cn': '爷爷，外公' }, { 'en': 'study', 'cn': '书房' }],
    pep5bUnit5: [{ 'en': 'fly', 'cn': '飞' }, { 'en': 'jump', 'cn': '跳' }, { 'en': 'walk', 'cn': '走' }, { 'en': 'run', 'cn': '跑' }, { 'en': 'swim', 'cn': '游泳' }, { 'en': 'kangaroo', 'cn': '袋鼠' }, { 'en': 'sleep', 'cn': '睡觉' }, { 'en': 'climb', 'cn': '往上爬' }, { 'en': 'fight', 'cn': '打架' }, { 'en': 'swing', 'cn': '荡，荡秋千' }, { 'en': 'drink water', 'cn': '喝水' }],
    pep5bUnit6: [{ 'en': 'take pictures', 'cn': '照相' }, { 'en': 'watch insects', 'cn': '观察昆虫' }, { 'en': 'pick up leaves', 'cn': '采摘树叶' }, { 'en': 'do an experiment', 'cn': '做实验' }, { 'en': 'catch butterfly', 'cn': '捉蝴蝶' }, { 'en': 'honey', 'cn': '蜜蜂' }, { 'en': 'count insects', 'cn': '数昆虫' }, { 'en': 'collect leaves', 'cn': '收集树叶' }, { 'en': 'write a report', 'cn': '写报告' }, { 'en': 'play chess', 'cn': '下棋' }, { 'en': 'have a picnic', 'cn': '举行野餐' }],
    pep6aUnit1: [{ 'en': 'by', 'cn': '经，乘' }, { 'en': 'foot', 'cn': '脚' }, { 'en': 'bike', 'cn': '自行车' }, { 'en': 'bus', 'cn': '公共汽车' }, { 'en': 'train', 'cn': '火车' }, { 'en': 'how', 'cn': '怎样' }, { 'en': 'go to school', 'cn': '上学' }, { 'en': 'traffic', 'cn': '交通' }, { 'en': 'traffic light', 'cn': '交通灯' }, { 'en': 'traffic rule', 'cn': '交通规则' }, { 'en': 'stop', 'cn': '停，停车站' }, { 'en': 'wait', 'cn': '等待' }, { 'en': 'get to', 'cn': '到达' }],
    pep6aUnit2: [{ 'en': 'library', 'cn': '图书馆' }, { 'en': 'post office', 'cn': '邮局' }, { 'en': 'hospital', 'cn': '医院' }, { 'en': 'cinema', 'cn': '电影院' }, { 'en': 'bookstore', 'cn': '书店' }, { 'en': 'where', 'cn': '在哪里，到哪里' }, { 'en': 'please', 'cn': '请' }, { 'en': 'next to', 'cn': '与...相邻' }, { 'en': 'turn', 'cn': '转弯' }, { 'en': 'right', 'cn': '右边' }, { 'en': 'left', 'cn': '左边' }, { 'en': 'straight', 'cn': '成直线地' }, { 'en': 'then', 'cn': '然后' }],
    pep6aUnit3: [{ 'en': 'next week', 'cn': '下周' }, { 'en': 'this morning', 'cn': '今天上午' }, { 'en': 'this afternoon', 'cn': '今天下午' }, { 'en': 'this evening', 'cn': '今天晚上' }, { 'en': 'comic book', 'cn': '漫画书' }, { 'en': 'post card', 'cn': '明信片' }, { 'en': 'newspaper', 'cn': '报纸' }, { 'en': 'buy', 'cn': '购买' }],
    pep6aUnit4: [{ 'en': 'hobby', 'cn': '爱好' }, { 'en': 'ride a bike--riding a bike', 'cn': '骑自行车' }, { 'en': 'dive--diving', 'cn': '跳水' }, { 'en': 'play the violin--playing the violin', 'cn': '拉小提琴' }, { 'en': 'make kites--making kites', 'cn': '制作风筝' }, { 'en': 'collect stamps--collecting stamps', 'cn': '集邮' }, { 'en': 'live--lives', 'cn': '居住' }, { 'en': 'teach--teaches', 'cn': '教' }, { 'en': 'go--goes', 'cn': '去' }, { 'en': 'watch--watches', 'cn': '看' }, { 'en': 'read--reads', 'cn': '读，看' }],
    pep6aUnit5: [{ 'en': 'singer', 'cn': '歌唱家，歌手' }, { 'en': 'writer', 'cn': '作家' }, { 'en': 'actor', 'cn': '男演员' }, { 'en': 'actress', 'cn': '女演员' }, { 'en': 'artist', 'cn': '画家' }, { 'en': 'TV reporter', 'cn': '电视台记者' }, { 'en': 'engineer', 'cn': '工程师' }, { 'en': 'accountant', 'cn': '会计' }, { 'en': 'policeman', 'cn': '男警察' }, { 'en': 'salesperson', 'cn': '销售员' }, { 'en': 'cleaner', 'cn': '清洁工' }, { 'en': 'where', 'cn': '在哪里，到哪里' }, { 'en': 'work', 'cn': '工作' }],
    pep6aUnit6: [{ 'en': 'rain', 'cn': '雨' }, { 'en': 'cloud', 'cn': '云' }, { 'en': 'sun', 'cn': '太阳' }, { 'en': 'stream', 'cn': '河，溪' }, { 'en': 'come from', 'cn': '来自，从...来' }, { 'en': 'seed', 'cn': '种子' }, { 'en': 'soil', 'cn': '土壤' }, { 'en': 'sprout', 'cn': '苗，芽' }, { 'en': 'plant', 'cn': '植物，种植' }, { 'en': 'should', 'cn': '应该' }, { 'en': 'then', 'cn': '然后' }],
    pep6bUnit1: [{ 'en': 'tall--taller', 'cn': '更高的' }, { 'en': 'short--shorter', 'cn': '更矮的' }, { 'en': 'strong--stronger', 'cn': '更强壮的' }, { 'en': 'old--older', 'cn': '年龄更大的' }, { 'en': 'young--younger', 'cn': '更年轻的' }, { 'en': 'big--bigger', 'cn': '更大的' }, { 'en': 'heavy--heavier', 'cn': '更重的' }, { 'en': 'long--longer', 'cn': '更长' }, { 'en': 'thin--thinner', 'cn': '更瘦的' }, { 'en': 'small--smaller', 'cn': '（体型）更小的' }],
    pep6bUnit2: [{ 'en': 'have a fever', 'cn': '发烧' }, { 'en': 'have a sore throat', 'cn': '喉咙疼' }, { 'en': 'have a cold', 'cn': '感冒' }, { 'en': 'have a toothache', 'cn': '牙疼' }, { 'en': 'have a headache', 'cn': '头疼' }, { 'en': 'matter', 'cn': '事情，麻烦' }, { 'en': 'sore', 'cn': '疼的' }, { 'en': 'hurt', 'cn': '疼的' }, { 'en': 'nose', 'cn': '鼻子' }, { 'en': 'tired', 'cn': '疲劳的，累的' }, { 'en': 'excited', 'cn': '兴奋的' }, { 'en': 'angry', 'cn': '生气的' }, { 'en': 'happy', 'cn': '高兴的' }, { 'en': 'bored', 'cn': '无聊的，烦人的' }, { 'en': 'sad', 'cn': '忧伤的，悲伤的' }],
    pep6bUnit3: [{ 'en': 'watch--watched', 'cn': '看' }, { 'en': 'wash--washed', 'cn': '洗' }, { 'en': 'clean--cleaned', 'cn': '打扫' }, { 'en': 'play--played', 'cn': '玩' }, { 'en': 'visit--visited', 'cn': '看望' }, { 'en': 'last weekend', 'cn': '上一个周末' }, { 'en': 'go--went', 'cn': '去' }, { 'en': 'go to a park--went to a park', 'cn': '去公园' }, { 'en': 'go swimming--went swimming', 'cn': '去游泳' }, { 'en': 'go fishing--went fishing', 'cn': '去钓鱼' }, { 'en': 'read', 'cn': '读' }, { 'en': 'go hiking--went hiking', 'cn': '去郊游' }],
    pep6bUnit4: [{ 'en': 'learn Chinese--learned Chinese', 'cn': '学汉语' }, { 'en': 'sing and dance--sang and danced', 'cn': '唱歌和跳舞' }, { 'en': 'eat good food--ate good food', 'cn': '吃好吃的食物' }, { 'en': 'take pictures--took pictures', 'cn': '照相' }, { 'en': 'climb--climbed', 'cn': '爬' }, { 'en': 'buy presents--bought presents', 'cn': '买礼物' }, { 'en': 'row a boat--rowed a boat', 'cn': '划船' }, { 'en': 'see elephant--saw elephant', 'cn': '看大象' }, { 'en': 'go skiing--went skiing', 'cn': '去滑雪' }, { 'en': 'go ice-skating--went ice-skating', 'cn': '去滑冰' }, { 'en': 'how', 'cn': '怎么，如何' }, { 'en': 'get--got', 'cn': '到达' }, { 'en': 'last', 'cn': '上一个' }],

    //留着复制用的
    pep644bUnit: [{ 'en': '', 'cn': '' }, { 'en': '', 'cn': '' }, { 'en': '', 'cn': '' }, { 'en': '', 'cn': '' }, { 'en': '', 'cn': '' }, { 'en': '', 'cn': '' }, { 'en': '', 'cn': '' }, { 'en': '', 'cn': '' }, { 'en': '', 'cn': '' }, { 'en': '', 'cn': '' }],

  }
})
