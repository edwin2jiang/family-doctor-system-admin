let demoList = [
  {
    id: 1,
    text: "测试1"
  }
];

// mock data (对应的地址) 

export default {
  'get|/parameter/query': option => {
    return {
      status: 200,
      message: "success",
      data: demoList
    };
  }
};
