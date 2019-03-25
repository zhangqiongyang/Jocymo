const config = {
  api_base_url: 'https://jt.chinabim.com/jocymo/',

  //app.js
  API_FROMCODEGETLOGINID: 'getloginid', //通过code换取login_id
  API_GETUNIONIDFROMLOGINID: 'seachUnionidExist', //通过login_id查询是否有unionID
  API_FROMLOGINIDGETUNIONID: 'getloginEncryptedData', //解密小程序用户数据
  API_CHECKLOGINIDISVALID: 'checkLogin_id', //检查login_id是否与数据库一致，不一致则更新


  //首页
  API_INDEXSWIPER: 'searchIndexPic', //首页轮播图
  API_INDEXNEWS: 'searchNewsInfo', //首页新闻
  API_INDEXFIRSTPRODUCTTYPE: 'selectFirstProductType', //首页厂商一级分类
  API_INDEXCASE: 'searchPublishCase', //首页案例
  API_INDEXPRODUCT: 'searchPublishProduct', //首页优材

  //全部新闻
  API_ALLNEWSLIST: 'searchNewsInfo', //全部新闻列表

  //新闻详情
  API_NEWSINFO: 'getNewsInfoByNewsId', //新闻详情

  //作者详情
  API_SELECTAUTHORINFO: 'searchAuthorOtherInfo', //根据作者id查询作者信息

  // 选材
  API_SELECTTWOPRODUCTTYPE: 'selectTwoProductType', //厂商二级分类

  //个人中心
  API_SELECTCANPUBLISH: 'canPublishOption', //查询可发布项

  // 搜索
  API_SEAECH: 'searchKeyWordsResult', //搜索
  API_SELECTHISTORY: 'searchLoginHistory', // 查询历史纪录
  API_DELETEHISTORY: 'deleteSearchHistory', // 删除历史纪录

  //收货地址
  API_SELECTADDRESS: 'searchaddress', //查询收货地址
  API_SAVEADDRESS: 'searchaddress', //保存收货地址

  // 案例列表
  API_SELECTSWIPERINFO: 'searchBannerPic', //轮播图（案例、产品、需求）
  API_CASELIST: 'searchPublishCase', //全部案例

  // 产品列表
  API_PRODUCTLIST: 'searchPublishProduct', //全部产品
  API_THREETYPEPRODUCTLIST: 'searchProductInfoByThreeType_id', //通过三级分类查询相应的产品

  // 需求列表
  API_DEMANDLIST: 'searchPublishDemand', //全部需求

  // 商家列表
  API_BUSSINESSLIST: 'searchpublishmerchant', //全部商家
  API_FIRSTTYPEBUSSINESSLIST: 'searchMerchantByFirstType_id', //根据一级分类查询商家
  

  // 需求详情  
  API_DEMANDINFO: 'selectDemandInfobyByDemand_id', //需求详情

  // 案例详情  
  API_CASEINFO: 'selectCaseinfoByCase_id', //案例详情

  // 产品详情  
  API_PRODUCTINFO: 'searchProductinfobyproduct_id', //产品详情
  API_PRODUCTMSG: 'searchguestbook', //产品留言


  //商家详情
  API_BUSSINESSINFO: 'searchMerchantInfoByMerchant_id', //商家详情
  API_BUSSINESSPRODUCTINFO: 'searchProductByMerchant_id', //商家产品详情
  API_BUSSINESSCASEINFO: 'searchCaseByMerchant_id', //商家案例详情
  API_BUSSINESSDEMANDINFO: 'searchDemandByMerchant_id', //商家需求详情


  // 发布案例  
  API_CHECKCASENAME: 'checkcasename', //检测案例名称是否可用
  API_PUBLISHCASE: 'publishcase', //发布案例
  API_CHANGECASE: 'updateCase', //修改案例

  // 发布需求 
  API_PUBLISHDEMAND: 'publishDemand', //发布需求
  API_CHANGEDEMAND: 'updateDemand', //修改需求

  // 发布产品 
  API_PUBLISHPRODUCT: 'publishproduct', //发布产品
  API_SELECTCLASSIFY: 'searchtypeclassify', //查询全部厂商分类
  API_CHANGEPRODUCT: 'updateProduct', //修改产品

  // 发布商家
  API_PUBLISHBUSSINESS: 'publishmerchant', //发布商家
  API_CHANGEBUSSINESS: 'updateMerchant', //修改商家

  //收货地址
  API_SAVEADDRESS: 'saveAddress', //保存收货地址

  // 已发布
  API_PUBLISHEDDEMAND: 'searchPublishDemandByLogin_id', //已发布的需求
  API_PUBLISHED: 'searchProductByLogin_id', //已发布的案例、产品
  API_DELETEPUBLISHED: 'deleteProductInfo', //删除已发布的案例、产品

  // 留言
  API_WRITEMSG: 'saveGuestbook', //写留言
  API_SELECTMSG: 'searchguestbook', //查留言
  
  // 点赞
  API_LIKE: 'savePraiseInfo', //点赞

  // 手机号
  API_GETCODE: 'sendJocymoSms', //获取验证码
  API_UPLODEPHONEINFO: 'checkMobileCode', //上传手机信息
  API_SAVEUSERINFO: 'saveuserinfo', //保存用户信息
  API_CHECKPHONE: 'checkisBindMobile', // 检查用户是否绑定手机号

  //支付
  API_CREATEORDER: 'unifiedorderhandle', //生成订单

}

export {
  config
}