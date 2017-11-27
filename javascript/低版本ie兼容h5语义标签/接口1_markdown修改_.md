 客户端请求参数和服务器返回结果统一说明：
 
 

 1.基本URL
 

        测试环境BaseURL：http://test2.houbank.net/
        中间拼接每个接口说明的URL，最后再拼接三个参数：
             区域化     localize          cn
             唯一标识    shaCode          c7ed8efbdfe17e1b2f8a8541bf6f98ba466b3352 （每次升级配置）
             版本号      versionCode      1.5.14        
        
        
      例如这样  http://test2.houbank.net/mobileCs/options/getBraBankInfos?cityCode=22506&braBankName=上海田林支行&pageNo=1&pageSize=20&cardNumber=6214831210836075&versionCode=1.5.12&localize=cn


        正式环境BaseURL：http://www.houbank.com/mobile/
        
        
2.返回的基本参数说明
  

  |返回参数|解释说明|
  |:-----  |:-------                          
  返回码    |reason code   |       00000（成功），00001（其它)
 返回信息 |resmsg           |     sucess或“”
 
 
00001包括：
                 -10000（网络服务器连接异常）
                 -1（网络服务器连接异常）
                 -2（数据解析错误）
                 -6（解密错误）
                 -7（加密错误）
                 -8（参数为空）
                 -11（方法调用错误）
                 00004（不显示）


#目录
[TOC]



 1.1 登录接口
 
 1.2 验证码
 
 1.3 校验验证码
 
 1.4 支付通购买
 
 1.5提交邀请号码
 
 1.6获取账户余额
 
 1.7登录时间
 
 1.8获取累积收益
 
 1.9获取总资产
 
 2.0实名认证信息
 
 2.1实名认证
 
 2.2获取银行列表
 
 2.3获取回款银行卡
 
 2.4获取城市列表
 
 2.5获取区域支行列表
 
 2.6设置绑卡第一步
 
 2.7设置绑卡第二步
 
 2.8获取支付平台id
 
 2.9支付通支付预处理
 
 3.0拉去版本信息
 
 3.1获取启动页动画
 
 3.2检查是否有新消息
 
 3.3获取banner图
 
 3.4获取计划数据
 
 3.5获取定期列表页数据,新手包也是这个接口，单个定期产品
 
 3.6是否首次购买
 
 3.7获取购买页适用产品的加息券列表
 
 3.8通过余额购买产品
 
 3.9 获取订单列表
 
4.0获取活期数据

4.1活期收益明细

4.2查询债权列表

4.3活期赎回

4.4获取活期产品列表

4.5余额购买活期

4.6获取消息列表

4.7获取邀请码

4.8获取邀请列表

4.9获取交易记录

5.0获取转让列表

5.1获取资产统计

5.2转让退出

5.3获取收益信息

5.4获取提现信息

5.5获取提现信息

5.6提现

5.7获取体验金与加息券信息

5.8获取体验金

5.9获取体验金列表

6.0 支付通活期抢购

6.1获取使用体验金页信息

6.2使用体验金

6.3获取加息券列表

6.4获取个人设置信息

6.5修改登录密码

6.6修改提现密码

6.7重置登录密码
  
  
6.8获取重置提现密码验证码


6.9提现密短信校验


7.0重置提现密码


7.1意见反馈


7.2获取债权列表


7.3意见反馈


7.4查看债权合同（不详细）


7.5发送验证码（不详细)

7.6产品服务协议（不详细）

7.7获取订单分配到的贷款列表（不详细）


7.8发送铜盾信息（不详细)


7.9图片校验码（不详细）


8.0获取到期后订单的处理情况页面（不详细）


8.1绑定手机（不详细)


8.2获取银行卡列表（不详细)


8.3购买标记（不详细）


8.4活期抢购（不详细）


8.5支付通充值（不详细)
 


***

###### 1.1接口功能
 用户登录

###### URL
*+/user/login?password=密码&type=mobile&userName=手机号*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样  http://test2.houbank.net/user/login?password=a123456&type=mobile&userName=18037026337

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
username  |true    |string|手机号               
password   |true    |string|字母和数字组合  

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
mobileValidate       |BOOL    |是否验证YES/NO   
idCard                    |string     | 身份证号                 
ftpPathOriginal       |NSURL   |头像地址       
bankCardValidate   |BOOL     |是否绑卡YES/NO   
userNamel              |string      |用户名（手机号）    
identityNamel          |string     |姓名（如实名认证，则真实姓名）
uuidl                        |string     |登录UUID
mobile                     |string     |手机号

###### 返回json示例
> 

    json:{"mobileValidate":"Y",
          "idCard":"410805588764020077",
          "rescode":"00000",
          "resmsg":"success",
          "ftpPathOriginal":"http://www.houbank.com/head/1479065-cut_tmp-1450318534641.png",
          "emailValidate":"N",
          "email":"",
          "userId":1479065,
          "idcardValidate":"Y",
          "ftpPathDispose":"http://www.houbank.com/dispose/1479065-cut_tmp-1450318534553.png",
          "bankCardValidate":"Y",
          "userName":"18037776337",
          "identityName":"张三",
          "resmsg_cn":"",
          "uuid":"login_20fdedfebae7738d874d5b7650560f23",
          "mobile":"18048526337"}
 

***

######1. 2接口功能
获取验证码

###### URL
*+user/captcha*


###### 支持格式
 JSON

###### HTTP请求方式
 POST
     例如这样  http://test2.houbank.net/ user/captcha? phoneNum=18035556337&type=REGISTER

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
phoneNum  |true    |string|手机号               
type              |true    |string|注册：REGISTER;忘记密码:FORGET_PASSWORD;绑定手机：BINDING_MOBILE 

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
resmsg       |string   | "success  " 
rescode      |string   | "00000"                
resmsg_cn |string   | ""

###### 返回json示例
> 
     json:{"resmsg":"success",
           "rescode":"00000",
           "resmsg_cn":""}
           



***

###### 1.3接口功能
校验验证码

###### URL
*+user/checkCaptcha? checkCode=验证码&phoneNum=手机号*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样  http://test2.houbank.net/ user/checkCaptcha? checkCode=908926&phoneNum=18037026337

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
phoneNum  |true    |string|手机号               
checkCode   |true    |string|验证码数字  

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
resmsg       |string   |success"或“”   
rescode      |string   | "00001"或"00000"                
resmsg_cn |string   | "短信验证码错误,请重新输入!"或""

###### 返回json示例
> 
    json:{"resmsg":"",
          "rescode":"00001",
          "resmsg_cn":"短信验证码错误,请重新输入!"}           
    或 json:{"resmsg":"success",
            "rescode":"00000",
            "resmsg_cn":""} 



***

###### 1.4接口功能
用户注册

###### URL
*user/register? channel=WEBSITE&eventId=register_ios&password=登录密码&payPwd=提现密码&pictureValidate=&userName=手机号*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样  http://test2.houbank.net/user/register? channel=WEBSITE&eventId=register_ios&password=ab123456&payPwd=ab123456&pictureValidate=&userName=18035556337

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
phoneNum  |true    |string|手机号               
channel      |string   | WEBSITE（手机显示网页，不明）           
eventId       |string   |register_ios（设备）
password    |string   |登录密码  
payPwd       |string   |支付密码



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
mobileValidate       |BOOL   |YES（手机验证） 
emailValidate         |BOOL    | NO （邮箱验证）
ftpPathDispose      |NSURL   |url（缩略图）
ftpPathOriginal       |NSURL   |url（原图）
idCard                    |string      |身份证号，未填写为””
idcardValidate        |BOOL    | NO （身份证验证）
uuid                        |string    |register_119f4fd0b2b448d4b536f8ba9c05b1d0
mobile                     |string   |手机号
identityName           |string   |真实姓名
bankCardValidate    |BOOL    | NO （银行卡绑定）





###### 返回json示例
> 
    json:     
      {"mobileValidate":"Y",
    "idCard":"",
    "rescode":"00000",
    "resmsg":"success",
    "ftpPathOriginal":"",
    "emailValidate":"N",
    "email":"",
    "userId":1574754,
    "ftpPathDispose":"",
    "idcardValidate":"N",
    "bankCardValidate":"N",
    "userName":"18037026337",
    "identityName":"",
    "resmsg_cn":"",
    "uuid":"register_119f4fd0b2b448d4b536f8ba9c05b1d0",
    "mobile":"18037026337"}
    
    
***

###### 1.5接口功能
提交邀请号码

###### URL
*+ user/checkCaptcha? invitationCd=邀请码&userId=用户id*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/ user/checkCaptcha? invitationCd=55588&userId=1664754 

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
userId           |true    |string|用户id               
invitationCd  |true    |string|邀请码  

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
resmsg       |string   |success"或“”   
rescode      |string   | "00001"或"00000"                
resmsg_cn |string   | 或""

###### 返回json示例
> 
     json:{"resmsg":"success",
     "rescode":"00000",
     "resmsg_cn":""}
     
     
***

###### 1.6接口功能
获取账户余额

###### URL
*+  user/investmentCenter/getAccountBalance? userId = 用户id*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/ user/investmentCenter/getAccountBalance? userId=1664754

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
userId           |true    |string|用户id               


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
resmsg       |string   |success"或“”
balanceMoney       |string   |余额
rescode      |string   | "00001"或"00000"                
resmsg_cn |string   | ""

###### 返回json示例
> 
      json:{"resmsg":"success",
             "balanceMoney":"0.00",
             "rescode":"00000",
              "resmsg_cn":""}
     
     
***

###### 1.7接口功能
登录时间

###### URL
*+  user/modifyLoginTime? userId= 用户id*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/ user/modifyLoginTime? userId=1664754

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
userId           |true    |string|用户id               


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
resmsg       |string   |success"或“”
rescode      |string   | "00000"（成功）或"00001"                
resmsg_cn |string   | ""

###### 返回json示例
> 
      json:{"resmsg":"success",
            "rescode":"00000",
            "resmsg_cn":""}
            
            


***

###### 1.8接口功能
获取累计收益

###### URL
*+  assets/getAccumulatedIncome? userId=用户id*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/ assets/getAccumulatedIncome? userId=1664754

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
userId           |true    |string|用户id               


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
resmsg       |string   |success"或“”
incomeAmount |string   | 总收益
rescode      |string   | "00000"（成功）或"00001"                
resmsg_cn |string   | ""

###### 返回json示例
> 
       json:{"resmsg":"success",
               "incomeAmount":"0.00",
                "rescode":"00000",
                "resmsg_cn":""}




***

###### 1.9接口功能
获取总资产

###### URL
*+  assets/getAccumulatedIncome? userId=用户id*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/ assets/getAccumulatedIncome? userId=1664754

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
userId           |true    |string|用户id               


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
resmsg       |string   |success"或“”
totalInvestAmount |string   | 总资产
rescode      |string   | "00000"（成功）或"00001"                
resmsg_cn |string   | ""

###### 返回json示例
> 
       json:{"resmsg":"success",
            "rescode":"00000",
            "resmsg_cn":"",
            "totalInvestAmount":"0.00"}


***

###### 2.0接口功能
实名认证信息

###### URL
*+  user/getIdcardInfo? userId=用户id*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/user/getIdcardInfo? userId=1664754

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
userId           |true    |string|用户id               


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
idcardValidate |BOOL   | 是否认证
idcard         |string    |省份证号
identityName         |string    |姓名


###### 返回json示例
> 
       json:{"resmsg":"success",
       "idCard":"",
       "idcardValidate":"N",
       "rescode":"00000",
       "identityName":"",
       "resmsg_cn":""}  
       或  
       json:{"resmsg":"success",
           "idCard":"410803199006020054",
           "idcardValidate":"Y",
           "rescode":"00000",
           "identityName":"刘斌斌",
           "resmsg_cn":""}
           
           

***




###### 2.1接口功能
实名认证

###### URL
*+  options/authenticationSubmit? identityNo=身份证号4&realname=真实姓名&userId=用户id*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/options/authenticationSubmit? identityNo=4108777777777754&realname=王八&userId=1575554

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
userId           |true    |string|用户id               
identityNo     |true    |string|身份证号
realname      |true    |string|真实姓名 

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
resmsg       |string   |success
rescode      |string   | "00000"（成功）或"00001"                
resmsg_cn |string   | ""


###### 返回json示例
> 
       json:{"resmsg":"success",
                "rescode":"00000",
                "resmsg_cn":""}
                
                




***




###### 2.2接口功能
获取银行列表

###### URL
*+  investmentCenter/getBanks? type=WEBSITE*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/ investmentCenter/getBanks? type=WEBSITE

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
type          |true    |string|类型            


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
bankList       |array   |银行卡列表

    每个银行卡元素包含参数
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
bankName     |string   | 银行名称               
id                    |string   | 银行id


###### 返回json示例
> 
       json:{"resmsg":"success",
                "rescode":"00000",
                "resmsg_cn":"",
                "bankList":  [
                                    {"bankCode":"",
                                     "bankName":"中国邮政储蓄银行",
                                     "id":"99"},
                                     
                                     {"bankCode":"",
                                       "bankName":"中信银行",
                                       "id":"100"},
                                       
                                      {"bankCode":"",
                                        "bankName":"中国工商银行",
                                        "id":"101"},
                                        
                                       {"bankCode":"",
                                        "bankName":"中国农业银行",
                                        "id":"102"},
                                        
                                       {"bankCode":"",
                                        "bankName":"中国银行",
                                        "id":"103"},
                                        
                                        {"bankCode":"",
                                        "bankName":"中国建设银行",
                                        "id":"104"},
                                        
                                        {"bankCode":"",
                                        "bankName":"浦发银行",
                                        "id":"122"},
                                        
                                        {"bankCode":"",
                                        "bankName":"兴业银行",
                                        "id":"106"},
                                        
                                        {"bankCode":"",
                                        "bankName":"平安银行",
                                        "id":"160"},
                                        
                                        {"bankCode":"","
                                        bankName":"华夏银行",
                                        "id":"161"}
                                        ]
          }
          
***




###### 2.3接口功能
获取回款银行卡

###### URL
*+  investmentCenter/getRecePayBank? userId=用户id*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/investmentCenter/getRecePayBank? userId=1575554

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
userId           |true    |string|用户id               
 

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
bank_name       |string   |银行名
card_number       |string   |卡号           
cityName       |string   |开卡城市
subBranch      |string   |支行
id       |string   |银行卡id
account_name       |string   |开户名
branchEmergency  |string   |
bank_id        |string   |
phone_no      |string  |电话

###### 返回json示例
> 
        json{"bank_name":"",
            "card_number":"",
            "cityName":"",
            "rescode":"00000",
            "subBranch":"",
            "ylbankcode":"",
            "account_name":"",
            "bankLimit":"0.00",
            "bank_id":"",
            "id":"",
            "resmsg":"success",
            "branchEmergency":"",
            “phone_no":"",
            "resmsg_cn":""}
            
            
***




###### 2.4接口功能
获取城市列表

###### URL
*+  options/getProvinceAndCity*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样  http://test2.houbank.net/ options/getProvinceAndCity

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
userId           |true    |string|用户id               
 

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
cityList      |string   |城市列表
                              
     城市列表包括三个字段：  "cityId":"22713"
                         "cityName":"兰州市"，
                         "provinceId":"1775"，
                         地址ID

###### 返回json示例
> 
    json:{"resmsg":"success",
          "rescode":"00000",
          "list":[{"cityList": 
             [
             {"cityId":"22713","cityName":"兰州市","provinceId":"1775"},            
             {"cityId":"22714","cityName":"天水市","provinceId":"1775"},
             {"cityId":"22715","cityName":"定西市","provinceId":"1775"},
             {"cityId":"22716","cityName":"平凉市","provinceId":"1775"},
             {"cityId":"22717","cityName":"庆阳市","provinceId":"1775"},
             {"cityId":"22718","cityName":"张掖市","provinceId":"1775"},
             {"cityId":"22719","cityName":"武威市","provinceId":"1775"},
             {"cityId":"22720","cityName":"白银市","provinceId":"1775"},
             {"cityId":"22721","cityName":"酒泉市","provinceId":"1775"},
             {"cityId":"22722","cityName":"金昌市","provinceId":"1775"},
             {"cityId":"22723","cityName":"陇南市","provinceId":"1775"},
             {"cityId":"22724","cityName":"嘉峪关市","provinceId":"1775"},
             {"cityId":"22725","cityName":"临夏回族自治州","provinceId":"1775"},
             {"cityId":"22726","cityName":"甘南藏族自治州","provinceId":"1775"}
            ],
             "provinceId":"1775", "provinceName":"甘肃省"},
             {"cityList":
             [{"cityId":"22799","cityName":"北海市","provinceId":"1776"},
             {"cityId":"22800","cityName":"南宁市","provinceId":"1776"},
             {"cityId":"22801","cityName":"崇左市","provinceId":"1776"},
             {"cityId":"22802","cityName":"来宾市","provinceId":"1776"},
             {"cityId":"22803","cityName":"柳州市","provinceId":"1776"},     
             {"cityId":"22804","cityName":"桂林市","provinceId":"1776"},
             {"cityId":"22805","cityName":"梧州市","provinceId":"1776"},
             {"cityId":"22806","cityName":"河池市","provinceId":"1776"},
             {"cityId":"22807","cityName":"玉林市","provinceId":"1776"},
             {"cityId":"22808","cityName":"百色市","provinceId":"1776"},
             {"cityId":"22809","cityName":"贵港市","provinceId":"1776"},
             {"cityId":"22810","cityName":"贺州市","provinceId":"1776"},
             {"cityId":"22811","cityName":"钦州市","provinceId":"1776"},
             {"cityId":"22812","cityName":"防城港市","provinceId":"1776"}
             ],
             "provinceId":"1776","provinceName":"广西自治区"},…]
             
             
***




###### 2.5接口功能
获取区域支行列表

###### URL
*+  options/getBraBankInfos*


###### 支持格式
 JSON

###### HTTP请求方式
POST
     例如这样 http://test2.houbank.net/mobileCs/options/getBraBankInfos?cityCode=22506&braBankName=上海田林支行&pageNo=1&pageSize=20&cardNumber=6214831210836075&versionCode=1.5.12&localize=cn


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----                              
braBankName |true       |string   |搜索内容
card_number   |true     |string   |卡号           
cityCode   |true      |string   |城市编号
pageNo     |true     |string |分页
pageSize   |true     |string   |分页条数
             
 

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum       |string   |总数    
list        |array   |列表

   列表包括：braBankName（支行名称）：招商银行股份有限公司上海田林支行                     listSize（列表条目数）        ：1



###### 返回json示例
> 
       json:{"resmsg":"success",
            "totalNum":1,
            "rescode":"00000",
            "list":[
                    {"braBankName":"招商银行股份有限公司上海田林支行"}
                    ],
            "resmsg_cn":"",
            "listSize":1}
            
            

###### 2.6接口功能
设置绑卡第一步

###### URL
    +  setPayBankFirst? bankCardNM=卡号&bankID=银行id&braBankName=支行名称&cityId=城市id&phoneNo=电话号码&provinceId=地址ID&userId=用户id


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样   http://test2.houbank.net/options/setPayBankFirst? bankCardNM=6222055509004280694&bankID=101&braBankName=招商银行股份有限公司上海田林支行&cityId=22666&phoneNo=18037777337&provinceId=1788&userId=1575554


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----      
userId     |true   |string   |用户id                        
provinceId   |true     |string   |地址ID
phoneNo    |true   |string   |电话号码           
cityId    |true    |string   |城市id
braBankName    |true      |string |支行名称
bankID      |true    |string   |银行id
bankCardNM  |true    |string   |卡号     
  

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
ticket       |string   |绑卡预处理返回的ticket    
requestNo     |string   |绑卡预处理返回的绑定银行卡id



###### 返回json示例
> 
      json:{"resmsg":"success",
           "ticket":"52f2b4337777777363b4ca0064",
            "requestNo":"77888",
            "rescode":"00000",
            "resmsg_cn":""}
            
            

***


###### 2.7接口功能
设置绑卡第二步

###### URL


   *+options/setPayBankSecond? bankCardNM=卡号&bankID=银行id&braBankName=支行名称&cityId=城市id&phoneNo=电话号码&provinceId=地址ID&userId=用户id*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样   http://test2.houbank.net/options/setPayBankSecond? bankCardNM=6222055509004280694&bankID=101&braBankName=中国工商银行股份有限公司焦作中站支行&cityId=22666&phoneNo=18037777337&provinceId=1788&userId=1575554


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----      
userId    |true    |string   |用户id                        
valid_code     |true   |string   |地址ID
ticket     |true  |string   |第一次返回的ticket          
requestNo   |true    |string   |第一次返回的预处理银行卡id
cardFlag      |true    |string |多卡需要
HISTORY_CARD   |true       |string   |多卡需要参数  

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
bank_name      |string   |银行名   
subBranch     |string   |支行名称
card_number  |string   |卡号
cityName       |string   |城市名
account_name       |string   |开卡名
bankLimit       |string   |银行限额
bank_id       |string   |银行id
branchEmergency       |string   |
phone_no   |string   |手机号
 


###### 返回json示例
> 
      json:{"bank_name":"中国工商银行",
              "card_number":"6222021709004280694",
              "cityName":"焦作市",
               "rescode":"00000",
                "subBranch":"中国工商银行股份有限公司焦作中站支行",
                "ylbankcode":"01020000",
                "account_name":"王八",
                "bankLimit":"50000",
                " bank_id ":"101",
                "id":"80161",
                "resmsg":"success",
                "branchEmergency":"",
                "phone_no":"18000000000",
                "resmsg_cn":""}
         
         


***

###### 2.8接口功能
获取支付平台

###### URL


   *+ zftPay/getPayPlatformById=银行id*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样   http://test2.houbank.net/ zftPay/getPayPlatformById?bankId=101


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----      
bankId     |true   |string   |银行id                       


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
platform_en_name      |string   |LIANLIANPAY   

 


###### 返回json示例
> 
      json:{"resmsg":"success",
               "rescode":"00000",
               "resmsg_cn":"",
               "platform_en_name":"LIANLIANPAY"}
               
               
***

###### 2.9接口功能
支付通支付预处理

###### URL


   *+ zftPay/zftRechargeToken=银行id*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样   http://test2.houbank.net/ zftPay/getPayPlatformById?bankId=101


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId     |true   |string   |用户id 
bankId     |true   |string   |银行卡id
cardNumber   |true     |string   |银行卡号 
rechargeAmount  |true     |string   |充值账户   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
contentPay      |string   |支付内容（集合）   
orderId      |string   |订单id

 


###### 返回json示例
> 
      json:{"resmsg":"success",
              "contentPay":
                                  "{\"no_order\":\"20160411146035694150226364\",\"oid_partner\":\"201408071000001541\",\"busi_partner      \":uOfwxo61dS9qFnrsFpwMq6BjoUfxUdnq6y2KYVaH\\/8sve\\/e5yhIfeV3Lmpcy4duusqHvq4up7bnZkgtekwqHMWtt9wudewuZ1cqHADajinDSf+Yj1PiYeOrcI8oYPGTjSbrq5Ay2s=\",\"valid_order\":\"1440\",\"id_type\":\"0\",\"user_id\":\"1574754\",\"dt_order\":\"20160411144221\",\"id_no\":\"410803199006020054\"}",
             "rescode":"00000",
             "resmsg_cn":"",
             "orderId":"20160411146035694150226364"}
             
             

***

   
   
###### 3.0接口功能
拉去版本信息

###### URL


   *+ options/getAppVersionInfo? appVersion=1.5.15&osName=ios*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样   http://test2.houbank.net/ options/getAppVersionInfo? appVersion=1.5.15&osName=ios


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
osName    |true    |string   |操作系统
appVersion |true       |string   |当前版本
   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
updateDesc      |string   |更新信息(发现新版)   
updateType     |string   |更新类型(1-无需升级，2-可选升级,3-必须升级) 
downloadUrl      |string   |下载地址
appVersion      |string   |最新版本号


###### 返回json示例
> 
     json:{"updateDesc":"发现新版本",
        "resmsg":"success",
        "readyforsale":"1",
        "inreview":"0",
        "appVersion":"1.5.15",
        "rescode":"00000",
        "downloadUrl":"http://t.cn/RqAxFRS",
        "resmsg_cn":"",
        "updateType":"1"}

 ***

   
   
###### 3.1接口功能
获取启动页动画

###### URL


   *+ appstartpage/getAppHome? image_size=1920*1080&showMedium=ios&version=1.0*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/appstartpage/getAppHome? image_size=1920*1080&showMedium=ios&version=1.0


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
image_size   |true     |string   |图片大小（1920*1080写死）
showMedium |true    |string   |机型
version           |true    |string   |当前启动图号 （1.0写死）
   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
FtpPath      |NSURL   |http://192.168.13.2/banner/1459448766192.png  



###### 返回json示例
> 
     json:{"updateDesc":"发现新版本",
        "resmsg":"success",
        "readyforsale":"1",
        "inreview":"0",
        "appVersion":"1.5.15",
        "rescode":"00000",
        "downloadUrl":"http://t.cn/RqAxFRS",
        "resmsg_cn":"",
        "updateType":"1"}
        
        


***
       
       
###### 3.2接口功能
检查是否有新消息

###### URL


   *+  push/checkNewPushMsg? lastDate=最后时间*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ push/checkNewPushMsg? lastDate=2016/04/01 19:09:34


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
lastDate     |true  |string   |最后时间

   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
maxDate       |string   |
count             |string   |数量



###### 返回json示例
> 
     json:{"resmsg":"success",
            "count":0,
             "maxDate":null,
             "rescode":"00000",
              "resmsg_cn":""}
              
              
***
       
       
###### 3.3接口功能
获取banner图

###### URL


   *+ push/checkNewPushMsg?  lastDate=最后时间*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ push/checkNewPushMsg? lastDate=2016/04/01 19:09:34


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
lastDate     |true  |string   |最后时间

   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum       |string   |数量	
list             |string   |集合
ftpPath            |string   |图片地址
requestURL     |string   |跳转链接
bannerName    |string   |Banner名字
sortNumber            |string   |排序号


###### 返回json示例
> 
    json:{"resmsg":"success",
             "totalNum":5,
             "rescode":"00000",
             "list":[{"ftpPath":"http://192.168.13.2/banner/1459935751939.png",
                      "requestURL":"http://www.houbank.com/20150923/mobile/index.html",
                      "bannerName":"投厚钱包活期赢iPhone 6s",
                      "sortNumber":1},
                      {"ftpPath":"http://192.168.13.2/banner/1454316419948.png",
                      "requestURL":"http://192.168.13.2/manage/manage/index.action",
                      "bannerName":"圣诞节活动",
                      "sortNumber":11}],
                      "resmsg_cn":"",
                      "listSize":5}
                      。。。。
                      ]}
                      
                      
***
       
       
###### 3.4接口功能
获取计划数据

###### URL


   *+ finance/getPlanCategory*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ finance/getPlanCategory?


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId     |true  |string   |用户id

   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum       |string   |数量	
listSize          |string   |集合大小
planCategoryList            |string   |产品集合
annualRateReturn     |string   |年化收益率
categoryId    |string   |分类id
financeName            |string   |产品名称
finance_type            |string   |产品类型
logoUrl            |string   |图片url
logogramName            |string   |厚本金融
features            |string   |特性
labels            |string   |标志


###### 返回json示例
> 
    json:{"resmsg":"success",
            "totalNum":"3",
            "rescode":"00000",
            "resmsg_cn":"",
            "listSize":3,
            "planCategoryList": [
                     {"annualRateReturn":"15",
                      "categoryId":"5",
                      "features":"期限短,100起投",
                      "financeName":"新手包",
                      "finance_type":"3",
                      "labels":"NOVICE",
                      "logoUrl":"",
                      "logogramName":"厚本金融"},
                      {"annualRateReturn":"10",
                      "categoryId":"11",
                      "features":"随存随取,100起投",
                      "financeName":"厚钱包活期",
                      "finance_type":"1",
                      "labels":"SYSTEM",
                      "logoUrl":"",
                      "logogramName":"厚本金融"},
                      {"annualRateReturn":"1.8~12",
                      "categoryId":"3",
                      "features":"多种期限,100起投",
                      "financeName":"厚钱包定期",
                      "finance_type":"2",
                      "labels":"MASTER",
                      "logoUrl":"",
                      "logogramName":"厚本金融"}
                      ]
           }
           
           


                      
***
       
       
###### 3.5接口功能
获取定期列表页数据,新手包也是这个接口，单个定期产品

###### URL


   *+ finance/getPlansByKind? categoryId=产品id*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ finance/getPlansByKind? categoryId=5


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
categoryId     |true  |string   |产品id

   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum         |string   |条目数	
listSize              |string   |集合大小
planList              |string   |产品集合
activityIntroduce    |string   |加息介绍
activityUrl             |string   |加息详情url
assignRatio            |string   |退出费用
baseLockPeriod      |string   |锁定期
coagency                |string   |合作机构
cycleMatchType      |string   |循环方式
enableBuy             |string   |能否购买
expectedRate       |string   |年化利率
features                |string   |特征
headCount           |string   | 已加入人数
introduce              |string   | 介绍
isHike                  |string   | 是否加息
maxInvestMoney  |string   | 全额
isSupInvitationCd  |string   |支持邀请码
minInvestMoney  |string   | 最低投资额
name                   |string   | 名称
perCapitaAmount  |string   | 人均购买金额
planId                 |string   | 计划id
rateHikeType     |string   | 加息类型
reseiptType        |string   | 是否设置回款号码
totalLimit            |string   | 购买总金额
withdrawalRate   |string   | 提现费率


###### 返回json示例
> 
     json:{"resmsg":"success",
             "totalNum":"2",
             "planList":[
                   {"activityIntroduce":"",
                    "activityUrl":"",
                    "assignRatio":"债权价值*0.0%",
                    "baseLockPeriod":"15",
                    "coagency":"厚本金融",
                    "cycleMatchType":"1",
                    "enableBuy":"Y",
                    "expectedRate":"15",
                    "features":"",
                    "headCount":"11",
                    "increaseRate":0,
                    "introduce":"本周上线计划测试，请勿删除。361",
                    "isHike":"N",
                    "isSupInvitationCd":"Y",
                    "maxInvestMoney":"5000000.00",
                    "minInvestMoney":"0.01",
                    "name":"新手包15",
                    "perCapitaAmount":"2660.28",
                    "planId":"361",
                    "rateHikeType":"",
                    "reseiptType":"N",
                    "totalLimit":"29263.01",
                    "withdrawalRate":"0%"
                    }],
                    "rescode":"00000",
                    "resmsg_cn":"",
                    "listSize":1
              }




***
       
       
###### 3.6接口功能
是否首次购买

###### URL


   *+ investmentCenter/getIsFirstBuy*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ investmentCenter/getIsFirstBuy?financeID=产品id&userId=用户id


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId    |true  |string   |用户id
financeID  |true  |string   |产品id

   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
isFirstBuy        |BOOL   |首次购买？	


###### 返回json示例
> 
    json:{"resmsg":"success",
             "isFirstBuy":true,
              "rescode":"00000",
              "resmsg_cn":""}
              
              




***
       
       
###### 3.7接口功能
获取购买页适用产品的加息券列表
###### URL


   *+  rateHike/gainNoUserRateHike? 分类id=5&financePlanId=产品id*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ rateHike/gainNoUserRateHike? categoryId=5&financePlanId=361


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
categoryId   |true  |string   |分类id
financePlanId  |true  |string   |产品id

   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
list        |BOOL   |列表集合	


###### 返回json示例
> 
  json:{"resmsg":"success",
           "rescode":"00000",
           "list"：[
           {"duration_hike":"0",
           "effective_time":"",
           "first_order_id":"",
           "id":"4367",
           "interest_rate":"4",
           "invest_amount":"0",
           "invite_user_id":"","
           max_invest_amount":"1010000",
           "min_invest_amount":"4",
           "order_id":"",
           "planName":"",
           "plan_id":"",
           "profit":0,
           "rate_hike_begin":"",
           "rate_hike_end":"",
           "release_reason":"实名认证1",
           "release_time":"2016-04-11 11:33:11",
           "update_per":"DATABASE",
           "update_time":"2016-04-11 11:33:11",
           "use_time":"",
           "user_flag":"N",
           "user_id":"1574754",
           "validity":"2016-04-15 11:33:11"}
           ]
       }
       
       
***
       
       
###### 3.8接口功能
通过余额购买产品
###### URL


   *+ buyProductByBalance? backCardNumber=回款卡号&bankId=银行id&buyAmount=购买金额&cycleMatchType=资金流转方式
&financeID=产品id&rateHikeCouponsId=&加息券id=用户id*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/investmentCenter/buyProductByBalance? backCardNumber=6222021709004280694&bankId=101&buyAmount=500&cycleMatchType=1&financeID=361&rateHikeCouponsId=&userId=1574754

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId       |true  |string   |用户id
backCardNumber  |true  |string   |回款卡号
bankId       |true  |string   |银行id
buyAmount      |true  |string   |购买金额
cycleMatchType       |true  |string   |资金流转方式
financeID      |true  |string   |产品id
rateHikeCouponsId       |true  |string   |加息券id

   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
orderId       |BOOL   |订单id	


###### 返回json示例
> 
json:{"resmsg":"success",
         "rescode":"00000",
         "resmsg_cn":"",
         "orderId":"100032122"}
         
         


***
         
       
###### 3.9接口功能
获取订单列表
###### URL


   *+   wallet/getPurchaseDetailList? orderState=订单状态&userId=用户id&version=2&current=当前显示页 
&pageSize=请求条数*
   


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/wallet/getPurchaseDetailList? orderState=2&userId=1574754&version=2&current=1&pageSize=10

###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId       |true  |string   |用户id
orderState  |true  |string   |订单状态
version       |true  |string   |
pageSize     |true  |string   |请求条数
current    |true  |string   |当前显示页 


   
                    


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum       |BOOL   |数量
listSize	       |string   |集合大小
list	               |string   |列表集合
assignFlag     |string   |是否可转让
baseLockPeriod	   |string   |锁定期
creditFlag	       |string   |是否有债权列表
financeID	       |string   |产品id
financeName	       |string   |产品名称
financeNameMain  |string   |产品主名称
income	       |string   |收益
investAmount	       |string   |投资金额
investDate	       |string   |投资时间
lastUpateDate    |string   |最后更新时间
lockTime	            |string   |锁定期
mainFinanceId	       |string   |种类id
orderId	       |string   |订单id
orderState	       |string   |订单状态
orderValue    |string   |资产价值
preMatchAmount          |string   |预匹配金额
Version        |string   |

###### 返回json示例
> 
         json:{"resmsg":"success",
         "totalNum":"1",
         "rescode":"00000",
         "list":[{"assignFlag":"N",
                  "baseLockPeriod":"15",
                  "creditFlag":"N",
                  "financeID":"361",
                  "financeName":"新手包15",
                  "financeNameMain":"新手包",
                  "income":"0.00",
                  "investAmount":"500.00",
                  "investDate":"2016/04/11",
                  "lastUpateDate":"",
                  "lockTime":"15",
                  "mainFinanceId":"5",
                  "orderId":"100032122",
                  "orderState":"1",
                  "orderValue":"500.00",
                  "preMatchAmount":"500.00",
                  "version":""
                  }],
                  "resmsg_cn":"",
                  "listSize":1
                 }
                 
                 
  ***
         
       
###### 4.0接口功能
获取活期数据
###### URL


   *+    deposit/showIndex? finaceId=产品类目id&userId=用户id*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ deposit/showIndex? finaceId=11&userId=1574754


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId       |true  |string   |用户id
finaceId  |true  |string   |产品类目id



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
accountAmount     |string  |总金额
dayLimit	       |string   |每天限额
incomeTotal	      |string   |累计收益
minimumTransferLimit    |string   |最小交易额
transferLimit	   |string   |单笔交易限额
yesterdayGain	       |string   |昨日收益
canBeExitValue	       |string   |可赎回金额
annualizedReturnRate      |string   |年化收益率称


###### 返回json示例
> 
        json:{"accountAmount":"0",
        "dayLimit":"999999999999",
        "resmsg":"success",
        "incomeTotal":"0",
        "minimumTransferLimit":"",
        "rescode":"00000",
        "transferLimit":"999999999999",
        "yesterdayGain":"0",
        "resmsg_cn":"",
        "canBeExitValue":"0",
        "annualizedReturnRate":"8.2"}
        
       
  ***
         
       
###### 4.1接口功能
活期收益明细
###### URL


   *+    deposit/historyProfit? finaceId=产品类目id&userId=用户id&current=1&pageSize=单页条目数*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/deposit/historyProfit? finaceId=11&userId=1574754&current=1&pageSize=10


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId       |true  |string   |用户id
finaceId  |true  |string   |产品类目id
pageSize  |true  |string   |单页条目数


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum     |string  |总金额
listSize	       |string   |集合条目数
list	      |string   |集合
earningsDate   |string   |时间
incomeAmount	   |string   |收益



###### 返回json示例
> 
       json:{"resmsg":"success",
       "totalNum":1,
       "rescode":"00000",
       "list":[{"earningsDate":"2016-04-11",
                 "incomeAmount":"1.27"}],
       "resmsg_cn":"",
       "listSize":1}
       
 ***
         
       
###### 4.2接口功能
查询债权列表
###### URL


   *+    deposit/historyProfit? finaceId=产品类目id&userId=用户id&current=当前页面&pageSize=单页条目数*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/deposit/historyProfit? finaceId=11&userId=1574754&current=1&pageSize=10


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId       |true  |string   |用户id
finaceId  |true  |string   |产品类目id
pageSize  |true  |string   |单页条目数
current  |true  |string   |当前页面


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum     |string  |总金额
MatchingValue   |string  |匹配额
creditAmountTotal   |string  |贷款总额
listSize	       |string   |集合条目数
list	      |string   |投资列表集合
createDate   |string   |投资时间
creditAcctCid   |string   |债权编号
creditAmount   |string   |贷款总额
realName   |string   |借款人姓名




###### 返回json示例
> 
       json:{"resmsg":"success",
               "totalNum":0,
               "MatchingValue":"0.00",
               "creditAmountTotal":"0.00",
               "rescode":"00000",
               "list":[],
               "resmsg_cn":"",
               "listSize":0}
               
               
                 
 ***
         
       
###### 4.3接口功能
活期赎回
###### URL


   *+    deposit/trunOut? finaceId=产品类目id&payPwd=支付密码&turnOutAmount=赎回金额&userId=用户id*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/deposit/trunOut? finaceId=11&payPwd=&turnOutAmount=500&userId=1574541


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId       |true  |string   |用户id
finaceId  |true  |string   |产品类目id
payPwd  |true  |string   |支付密码
turnOutAmount |true  |string   |赎回金额

###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
resmsg    |string  |"success"
rescode   |string  |"00000"





###### 返回json示例
> 
       json:{"resmsg":"success",
                "rescode":"00000",
                 "resmsg_cn":""}
     
                  
 ***
         
       
###### 4.4接口功能
获取活期产品列表
###### URL


   *+    deposit/showInvestmentList? current=当前页面&pageSize=单页数据条目
*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ deposit/showInvestmentList? current=1&pageSize=10


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
current      |true  |string   |当前页面
pageSize    |true  |string   |单页数据条目


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum    |string  |总条目数
listSize   |string  |集合条目数
list    |string  |集合
id   |string  |产品id
investMinAmount    |string  |最低投资额
remanAmount   |string  |剩余金额
flag    |string  |标记
now   |string  |系统时间
endSaleTime    |string  |下架时间
startSellingTime   |string  |开售时间
saleTotalAmount   |string  |总金额
annualRate   |string  |当日年化率
productName   |string  |名称
finishedRatio   |string  |进度百分比


###### 返回json示例
> 
     json:{"resmsg":"success",
              "totalNum":"388",
              "rescode":"00000",
              "list":[{"id":760,
                       "investMinAmount":100,
                       "remanAmount":0,
                       "flag":"0",
                       "now":"2016-04-12 11:13:20",
                       "endSaleTime":"2016-03-07 09:35:20",
                       "startSellingTime":"2016-03-04 10:05:00",
                       "saleTotalAmount":1000000,
                       "annualRate":"8.6",
                       "productName":"厚钱包活期20160304",
                       "finishedRatio":100}],
                       "resmsg_cn":"",
                       "listSize":"10"}
                       
                       
  ***
         
       
###### 4.5接口功能
获取活期产品列表
###### URL


   *+   investmentCenter/buyDepositGetByBalance? backCardNumber=621483888830952&bankId=119&buyAmount=500&cycleMatchType=1&financeID=860&userId=1574541*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/investmentCenter/buyDepositGetByBalance? backCardNumber=621483888830952&bankId=119&buyAmount=500&cycleMatchType=1&financeID=860&userId=1574541


###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId     |true  |string   |用户id
inaceId     |true  |string   |产品id
cycleMatchType    |true  |string   |循环方式
buyAmount    |true  |string   |购买金额
bankId    |true  |string   |银行id
backCardNumber   |true  |string   |银行卡号


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
orderId    |string  |订单编号



###### 返回json示例
> 
    json:{"resmsg":"success",
          "rescode":"00000",
          "resmsg_cn":"",
          "orderId":"100031743"}
          
 ***
         
       
###### 4.6接口功能
获取消息列表

###### URL


   *+   push/getMessageList? current=当前页&pageSize=单页条目数
 *  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/push/getMessageList?current=1&pageSize=10       
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
current     |true  |string   |当前页
pageSize     |true  |string   |单页条目数



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum         |string  |总数
listSize            |string  |集合条目数
list                   |string  |集合
content            |string  |内容
webPageUr     |string  |点击网络地址
title                  |string  |标题
pushDate         |string  |时间
iconUrl            |string  |图片地址



###### 返回json示例
> 
       json:{"resmsg":"success",
            "totalNum":88,
            "rescode":"00000",
            "list":[{"content":"加息活动仅剩3天！",
                      "id":"362",
                      "webPageUrl":"https://www.houbank.com/act/20160308/index-mobile.html",
                      "title":"最后3天！加息享不停",
                      "pushDate":"2016/03/25 17:20:21",
                      "iconUrl":"http://192.168.13.2/pushmsg/1458897616944.25.jpg"}
                      ],
                      "resmsg_cn":"",
                      "listSize":10}
                      
                      
***
         
       
###### 4.7接口功能
获取邀请码

###### URL


   *+   invitation/getMyInvitationCd?userid=用户id*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/invitation/getMyInvitationCd?userid=1574766   
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id




###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
invitationCd         |string  |邀请码




###### 返回json示例
> 
         json:{"resmsg":"success",
                   "invitationCd":"169AE1",
                   "rescode":"00000",
                    "resmsg_cn":""}
                    
***
         
       
###### 4.8接口功能
获取邀请列表

###### URL


   *+   invitation/getMyInvitationCd? userId=用户id&current=页面&pageSize=页面条数*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/invitation/getMyInvitationCd? userId=1574541&current=1&pageSize=10
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
current  |true  |string   |页面
pageSize  |true  |string   |页面条数



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum              |string  |总条目
listSize                 |string  |集合大小
count                   |string  |成功邀请数
list                       |string  |集合
userId                 |string  |邀请用户id
userName         |string  |用户名
invitedTime         |string  |邀请时间
invitedRes         |string  |邀请介绍
financeName     |string  |产品名称
litimg                 |string  |




###### 返回json示例
> 
         json:{"resmsg":"success",
                  "totalNum":"0",
                  "count":"0",
                   "rescode":"00000",
                   "list":[],
                   "resmsg_cn":"",
                   "listSize":0}
                   
 ***
         
       
###### 4.9接口功能
获取交易记录

###### URL


   *+  wallet/getFundFlowList? inOrOut=&userId=1574541&current=1&pageSize=10*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/wallet/getFundFlowList? inOrOut=&userId=1574541&current=1&pageSize=10
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
current  |true  |string   |页面
pageSize  |true  |string   |页面条数
inOrOut  |true  |string   |抽取条件(全部时不传或者传空值都可 ,收入时传in ,支出时传out)
  


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum              |string  |总条目
listSize                 |string  |页面条目数
list                       |string  |交易记录表
acctBalance       |string  |账户余额
fundType           |string  |流水烈性
amount              |string  |交易额
orderId               |string  |订单号
transDate           |string  |交易日期
type                  |string  |交易类型(0/交易 ,1/支出)




###### 返回json示例
> 
         json:{"resmsg":"success",
                  "totalNum":"37",
                  "rescode":"00000",
                  "list":[{"acctBalance":"513654.40",
                            "amount":"500.00",
                            "fundType":"投资厚钱包活期",
                            "orderId":"100031743",
                            "transDate":"2016/04/12",
                            "type":"0"}],
                  "resmsg_cn":"",
                  "listSize":10}
                  
                  


***
                 
###### 5.0接口功能
获取转让列表

###### URL


   *+  planAssign/getOrderListByStatus? userId=用户id&orderStatus=订单状态&current=页面&pageSize=页面条数*  


###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/planAssign/getOrderListByStatus? userId=1574541&orderStatus=2&current=1&pageSize=10
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
orderStatus  |true  |string   |订单状态
current  |true  |string   |页面
pageSize  |true  |string   |页面条数

  


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
totalNum              |string  |总条目
listSize                 |string  |页面条目数
list                        |string  |可转让列表
totalNum               |string  |当前债权数
financeName         |string  |产品名称
earnInterest           |string  |赚取金额
orderValue             |string  |订单价值 
 assignApplyDate     |string  |转让申请时间
createDate              |string  |创建日期
investAmount             |string  |投资金额
assignCompleteDate   |string  |转让退出时间
orderId                    |string  |订单号  



###### 返回json示例
> 
         json:{"resmsg":"success",
                  "totalNum":"5",
                  "rescode":"00000",
                  "list":[
                          {"totalNum":"0",
                          "financeName":"新手包",
                          "earnInterest":"6.30",
                          "orderValue":"106.30",
                          "assignApplyDate":null,
                          "createDate":"2016/03/28 03:03:55",
                          "investAmount":"100.00",
                          "assignCompleteDate":null,
                          "orderId":"100031734"}
                          ],
                    "resmsg_cn":"",
                    "listSize":5}


***
                 
###### 5.1接口功能
获取资产统计

###### URL


   *+   assets/showMyAssetDetail?userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ assets/showMyAssetDetail?userId=1574541
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id

  


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |
timeInvestAmount        |string  |定期总资产	
currInvestAmount          |string  |活期总资产		
balanceAmount              |string  |可用余额
frozenAmount               |string  |在途资产
totalInvestAmount            |string  |投资总资产
cashAssets            |string  |现金资产
timeInvestList            |string  |定期集合
planAmount              |string  |投资额
financeType              |string  |
planMainId               |string  |
fullName                   |string  |产品全称
productName           |string  |产品名称
productType            |string  |
currInvestList            |string  |活期集合
planAmount            |string  |投资额
financeType            |string  |
planMainId             |string  |
fullName                |string  |
productName         |string  |名称(厚钱包活期)
productType          |string  |



###### 返回json示例
> 
        json:{"resmsg":"success",
        "timeInvestAmount":"263399.66",
        "timeInvestList":[{"planAmount":"30086.1",
                          "financeType":"2",
                          "planMainId":"3",
                          "fullName":"厚钱包30天",
                          "productName":"厚钱包30",
                          "productType":"100"}],
        "frozenAmount":"0.00",
        "cashAssets":"513654.40",
        "currInvestList":[{"planAmount":"240128.61",
                           "financeType":"1",
                           "planMainId":"11",
                           "fullName":"厚钱包活期",
                           "productName":"厚钱包活期",
                           "productType":"120"}],
        "balanceAmount":"513654.40",
        "rescode":"00000","resmsg_cn":"",
        "totalInvestAmount":"1017182.67",
        "currInvestAmount":"240128.61"}
        
        


***
                 
###### 5.2接口功能
转让退出 

###### URL


   *+   credit/quickCreditAssign?outWay=转让退出类型&signFlag=签约中金额退出标志&orderId=订单编号&userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/credit/quickCreditAssign?outWay=11&signFlag=0&orderId=100032122&userId=1574541
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
orderId   |true  |string   |订单编号
signFlag  |true  |string |签约中金额退出标志
outWay   |true  |string   |转让退出类型

  


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
totalCreditValue       |string  |总记录数		
balanceAmount          |string  |当前债权价值
totalExitAmount          |string  |退出总金额





###### 返回json示例
> 
        json:{"resmsg":"success",
               "totalCreditValue":"xxx"，
               "balanceAmount ":"xxx"，
                 "totalExitAmoun":"xxx"，
               "rescode":"00000",
               "resmsg_cn":""},
     
     


***
                 
###### 5.3接口功能
获取收益信息

###### URL


   *+   getMyAccumulatedIncome?userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/assets/getMyAccumulatedIncome?userId=1574541
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id


  


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
currIncomeAmoun           |string  |活期总收益	
totalIncomeAmount          |string  |定期总收益
timeIncomeAmount          |string  |总收益
currIncomeList                  |string  |活期列表	
timeIncomeList                  |string  |定期列表
financeType                      |string  |类型
incomeAmount                  |string  |收益
planMainId                         |string  |产品类id
fullName                            |string  |名称
productName                     |string  |产品名称
productType                       |string  |产品类型




###### 返回json示例
> 
        json:{"resmsg":"success",
                "currIncomeList":         
                       [{"financeType":"1",
                         "incomeAmount":"5615.55",
                         "planMainId":"11",
                         "fullName":"厚钱包活期",
                         "productName":"厚钱包活期",
                         "productType":"120"}],
                 "timeIncomeList":  
                                  [{"financeType":"2",
                                 "incomeAmount":"13.78",
                                 "planMainId":"3",
                                 "fullName":"厚钱包7天天",
                                 "productName":"厚钱包7天",
                                 "productType":"322"}],
                   "rescode":"00000",
                   "timeIncomeAmount":"11722.09",
                   "resmsg_cn":"",
                   "totalIncomeAmount":"17337.64",
                   "currIncomeAmount":"5615.55"
                   }
     
     

***
                 
###### 5.4接口功能
获取提现信息

###### URL


   *+   withdrawals/withdrawal?userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/withdrawals/withdrawal?userId=1574541
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id


  


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
balanceMoney          |string  |可提现额
extractFee                 |string  |提现手续费
extractFeeRate          |string  |提现费率	





###### 返回json示例
> 
        json:{"resmsg":"success",
               "balanceMoney":463654.4,
               "extractFee":"0",
               "extractFeeRate":"0",
               "rescode":"00000",
               "resmsg_cn":""}
               
               


***
                 
###### 5.5接口功能
获取限额提现信息

###### URL


   *+   withdrawals/limitWithdrawa?userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/limitwithdrawals/withdrawal?userId=1574541
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id


  


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
initSingAmount             |string  |单日提现限额
initSingLimit                  |string  |单次提现限额
withDrawAmount          |string  |可提现总额
transferWithDraw          |string  |预约提现金额基数
withDrawCount             |string  |当日可提现次数






###### 返回json示例
> 
           
           json{"resmsg":"",
           "initSingAmount":"500000",
           "initSingLimit":"10",
           "withDrawAmount":"500000",
           "transferWithDraw":"1000",
           "rescode":"00000",
           "withDrawCount":"10"}
           
           



***
                 
###### 5.6接口功能
提现

###### URL


   *+   withdrawals/dealWithdrawal?extractMoney=提现金额&payPwd=提现密码&recePayCardId=回款卡id&userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/withdrawals/dealWithdrawal?extractMoney=500&payPwd=a123456&recePayCardId=80161&userId=157475
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
extractMoney   |true  |string   |提现金额
payPwd  |true  |string   |提现密码
recePayCardId   |true  |string   |回款卡id



  


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                         |string  |"00000"
resmsg_cn                      |string  |""







###### 返回json示例
> 
           
          json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
          
          


***
                 
###### 5.7接口功能
获取体验金与加息券信息

###### URL


   *+   privprinci/getCurrentAndCount?userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/privprinci/getCurrentAndCount?userId=1574541
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id




  


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
currentBalance         |string  |体验金
rateHikeCount          |string  |加息券
resmsg_cn                 







###### 返回json示例
> 
           
         json:{"resmsg":"success",
                "rateHikeCount":5,
                "rescode":"00000",
                "currentBalance":7000}
           
                
     

***
                 
###### 5.8接口功能
获取体验金

###### URL

   *+   v1/privilegeprincipal/reminder?userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/v1/privilegeprincipal/reminder?userId=1574541
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
currentBalance         |string  |体验金
            


###### 返回json示例
> 
           
        json:{"rescode":"00000",
              "object":null,
              "resmsg":null,
              "resmsg_cn":"",
              "reminder":7000}
              
              
***
                 
###### 5.9接口功能
获取体验金列表

###### URL

   *+   v1/privilegeprincipal/reminder?user_id=用户id&current=当前页&pageSize=单页条目数*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/v1/privilegeprincipal/reminder?user_id=1574754&current=1&pageSize=1000
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
current   |true  |string   |当前页
pageSize   |true  |string  |单页条目数


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
totalNum         |string  |总条数
objec               |string  |
listSize             |string  |集合大小
list                    |string  |集合
Id                   |string  |记录id
opsDaytime        |string  |时间
opsType              |string  |体验金当前类型
sourceDesc         |string  |获得介绍
income               |string  |收益
principalUse         |string  |

            


###### 返回json示例
> 
           
        json:{"rescode":"00000",
              "object":null,
              "resmsg":null,
              "resmsg_cn":"",
              "totalNum":10,
              "listSize":10,
              "list":[{"id":0,
                        "opsDaytime":"2016-04-12 15:27:01",
                        "opsType":0,"sourceDesc":"购买新手包",
                        "income":0.0,
                        "principalUse":3000}]
                }

***
                 
###### 6.0接口功能
支付通活期抢购

###### URL

   *+   options/setPushSwitch*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ options/setPushSwitch      
           
###### 请求参数




###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                         |string  |"00000"
resmsg_cn                      |string  |""

            


###### 返回json示例
> 
           
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""} 
      
      
***
                 
###### 6.1接口功能
获取使用体验金页信息

###### URL

   *+   v1/privilegeprincipal/principals/default*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/v1/privilegeprincipal/principals/default
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
id                |string  |记录id
minBuyLimit   |string  |最低购买额
numberPerUnit      |string  |每次加减额
isCanBuy               |BOOL |能否购买
rate365Days       |string  |年化收益
investPeriod        |string  |投资期限


            


###### 返回json示例
> 
           
       json:{"rescode":"00000",
                "object":null,
                "resmsg":null,
                "resmsg_cn":"",
                "id":1,
                "minBuyLimit":1000,
                "numberPerUnit":1000,
                "isCanBuy":true,
                "rate365Days":8.2,
                "investPeriod":1}
                
                


***
                 
###### 6.2接口功能
使用体验金

###### URL

   *+   v1/privilegeprincipal/principals/invest?amount=投资额&phone=电话&user_id=用户id

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/v1/privilegeprincipal/principals/invest?amount=1000&phone=188888888888&user_id=157475
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
amount   |true  |string   |投资额
phone   |true  |string   |电话



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""
object                           |string  |NULL

            


###### 返回json示例
> 
           
       json:{"rescode":"00000","object":null,"resmsg":null,"resmsg_cn":""}
       
       

***
                 
###### 6.3接口功能
获取加息券列表

###### URL

   *+   rateHike/gainMyRateHike?userId=用户id&status=状态&current=当前页&pageSize=每页数据条数*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/rateHike/gainMyRateHike?userId=1574754&status=1&current=1&pageSize=10
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
status   |true  |string    |状态
current  |true  |string   |当前页
pageSize  |true  |string   |每页数据10条



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
listSize                         |string  |条数
list                                |string  |加息券集合
duration_hike                   |string  |加息时常
effective_time                  |string  |生效时间
first_order_id                   |string  |
id                                 |string  |加息券id
interest_rate                   |string  |加息利率
order_id                        |string  |加息订单id
planName                        |string  |加息券适用产品
plan_id                        |string  |加息产品id
profit                  |string  |已使用加息券收益
rate_hike_begin                           |string  |加息时间起
rate_hike_end                        |string  |加息时间值
release_reason                       |string  |发放原因
release_time                      |string  |发放时间
update_per                          |string  |
update_time                         |string  |
use_time                         |string  |使用时间
user_flag                         |string  |是否使用
user_id                         |string  |用户id
validity                         |string  |有效期
            


###### 返回json示例
> 
           
       json:{"resmsg":"success",
             "rescode":"00000",
             "list":[{"duration_hike":"0",
                       "effective_time":"",
                       "first_order_id":"100032138",
                        "id":"4412",
                        "interest_rate":"5",
                        "invest_amount":"0",
                        "invite_user_id":"",
                        "max_invest_amount":"100000",
                        "min_invest_amount":"5",
                        "order_id":"",
                        "planName":"厚钱包365",
                        "plan_id":"204",
                        "profit":0,
                        "rate_hike_begin":"",
                        "rate_hike_end":"",
                        "release_reason":"首次投资",
                        "release_time":"2016-04-12 09:40:12",
                        "update_per":"DATABASE",
                        "update_time":"2016-04-12 09:40:12",
                        "use_time":"",
                        "user_flag":"N",
                        "user_id":"1574754",
                        "validity":"2016-04-17 09:40:12"}],
                "resmsg_cn":"",
                "listSize":5
            } 
                     
                      

 
***
                 
###### 6.4接口功能
获取个人设置信息

###### URL

   *+   v1/privilegeprincipal/reminder?userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/v1/privilegeprincipal/reminder?userId=1574541
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id




###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
mobileValidate                   |BOOL |是否绑定手机
creditMatchStus                |BOOL |债权匹配成功设置状态
idcardValidate                   |BOOL |实名认证状态
lockTimeEndStus              |BOOL |债权到期设置状态
mobile                               |string  |绑定的手机号



###### 返回json示例
> 
           
      json:{"mobileValidate":"Y",
            "resmsg":"success",
            "creditMatchStus":"Y",
            "idcardValidate":"Y",
            "rescode":"00000",
            "resmsg_cn":"",
            "lockTimeEndStus":"Y",
            "mobile":"1888888888"}
            
            
***
                 
###### 6.5接口功能
修改登录密码

###### URL

   *+   options/updatePassword?newPassword=新密码&oldPassword=旧密码&
userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/options/updatePassword?newPassword=a123456&oldPassword=a123456&userId=1574754
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
oldPassword   |true  |string   |旧密码
newPassword  |true  |string  |新密码




###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
           
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      
            
***
                 
###### 6.6接口功能
修改提现密码

###### URL

   *+   options/modifyPayPwd?newPassword=新密码&oldPassword=旧密码&userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/options/modifyPayPwd?newPassword=a123456&oldPassword=a123456&userId=1574754
      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId   |true  |string   |用户id
oldPassword   |true  |string   |旧密码
newPassword  |true  |string  |新密码


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
           
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      
***
                 
###### 6.7接口功能
重置登录密码

###### URL

   *+   options/modifyPayPwd?password=密码&type=类型&userName=手机号*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/options/modifyPayPwd?password=a123456&type=mobile&userName=1888888888      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userName  |true  |string   |手机号
password   |true  |string   |密码
type            |true  |string   |类型




###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
           
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      

      

      

***
      

      
      
###### 6.8接口功能
获取重置提现密码验证码

###### URL

   *+   captcha/getCaptcha?type=MODIFY_CASHDRAW_MOBILE&userId=1574754 *

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/captcha/getCaptcha?type=MODIFY_CASHDRAW_MOBILE&userId=1574754      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId    |true  |string   |用户id
type       |true  |string   |验证码类型（MODIFY_CASHDRAW_MOBILE |MODIFY_MOBILE（修改手机号））





###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
           
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      



***
      

      
      
###### 6.9接口功能
提现密短信校验 

###### URL

   *+   options/modfiyWithPwdOne?identityNo=41088888888888888888&numRand=225305&userId=1574754&userMobile=1888888888*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/options/modfiyWithPwdOne?identityNo=身份证号&numRand=短信验证码&userId=用户id&userMobile=手机号      
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId    |true  |string   |用户id
identityNo  |true  |string   |身份证号
numRand   |true  |string   |短信验证码
userMobile  |true  |string   |手机号






###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
           
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
                 
                 


***
      

      
      
###### 7.0接口功能
重置提现密码

###### URL

   *+   options/options/modfiyWithPwdTwo?newPwd=新密码&reNewPwd=确认新密码&userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/options/options/modfiyWithPwdTwo?newPwd=a123456&reNewPwd=a123456&userId=1574754    
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId      |true  |string   |用户id
newPwd    |true  |string  |新密码
reNewPwd  |true  |string  |确认新密码




###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
           
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      

***
      

      
      
###### 7.1接口功能
意见反馈

###### URL

   *+   options/insertView?content=内容&email=邮箱&mobile=电话号码&userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/options/insertView?content=5555&email=&mobile=1888888888&userId=1574754    
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId      |true  |string   |用户id
mobile      |true  |string   |电话号码
email     |true  |string  |邮箱
content       |true  |string  |内容


###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
           
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      

***


###### 7.2接口功能
获取债权列表

###### URL

   *+   wallet/getCreditList?orderId=订单号&current=当前页&pageSize=一页大小*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/wallet/getCreditList?orderId=100030359&current=1&pageSize=10
   
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
orderId      |true  |string   |订单号
current     |true  |string   |当前页
pageSize    |true  |string  |一页大小



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
totalNum               |string  |条目总数
listSize                  |string  |当前集合条目数
list                         |string  |集合
borrowType             |string  |用于
cashValue                |string  |价值
creditAmount           |string  |借款金额
creditDate           |string  |计息日期
creditId               |string  |债权id
creditState            |string  |债权状态
loanPeriods           |string  |借款期数
productName         |string  |名称
rate                        |string  |年化利率
residualPeriods           |string  |剩余期数




###### 返回json示例
> 
           
      json:{"resmsg":"success",
            "totalNum":"2",
            "rescode":"00000",
            "list":[{"borrowType":"资金周转",
                     "cashValue":"61339.87",
                     "creditAmount":"67502.51",
                     "creditDate":"2015/12/24",
                     "creditId":"1562358",
                     "creditState":"2",
                     "loanPeriods":"9",
                     "productName":"车抵贷（期缴）",
                     "rate":"9.00",
                     "residualPeriods":"8"}],
            "resmsg_cn":"",
            "listSize":2}
            
            
***


###### 7.3接口功能
意见反馈

###### URL

   *+   wallet/getRepaymentDetailList?creditId=债权id&userId=用户id&current=当前夜&pageSize=单页大小

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/wallet/getRepaymentDetailList?creditId=1562358&userId=1573191&current=1&pageSize=10
   
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId     |true  |string   |用户id
creditId     |true  |string   |债权id
current    |true  |string  |当前夜
pageSize  |true  |string  |单页大小



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
totalNum               |string  |条目总数
listSize                  |string  |当前集合条目数
list                           |string  |集合
currPeriods               |string  |回款期数
hadReceiptInterest        |string  |已收利息
hadReceiptPrincipal       |string  |已收本金
needReceiptDay              |string  |回款日期
needReceiptInterest         |string  |应收利息
needReceiptPrincipal        |string  |应收本金
receiptState                      |string  |收款状态





###### 返回json示例
> 
           
     json:{"resmsg":"success",
              "totalNum":9,
              "rescode":"00000",
              "list":[{"currPeriods":"9",
                    "hadReceiptInterest":"0.00",
                     "hadReceiptPrincipal":"0.00",
                     "needReceiptDay":"2015/12/21",
                     "needReceiptInterest":"57.94",
                     "needReceiptPrincipal":"7726.39",
                      "receiptState":"0"}],
              "resmsg_cn":"",
              "listSize":9}
              
              


***
      

      
      
###### 7.4接口功能
查看债权合同（不详细）

###### URL

   *+   wallet/checkTheContract?creditAcctCid=债权id&userId=用户id*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/wallet/checkTheContract?creditAcctCid=1562358&userId=1573191   
           
###### 请求参数
> 参数|必选|类型|说明|
:-----  |:-------|:-----|-----   
userId      |true  |string   |用户id
creditAcctCid      |true  |string   |债权id



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      




###### 7.5接口功能
发送验证码（不详细）

###### URL

   *+   zftPay/fastPayReSend*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/zftPay/fastPayReSend   
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
  
      

    
 ***

    
    
###### 7.6接口功能
产品服务协议（不详细）

###### URL

   *+   agreement/getServAgreementByFid*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/agreement/getServAgreementByFid   
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
              
              


***



###### 7.7接口功能
获取订单分配到的贷款列表（不详细）

###### URL

   *+   perMatch/getPerMatchDetailList*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/perMatch/getPerMatchDetailList   
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
       
              
***       


###### 7.8接口功能
发送铜盾信息（不详细）

###### URL

   *+   user/blackBox*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/user/blackBox   
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      




***       


###### 7.9接口功能
图片校验码（不详细）

###### URL

   *+   user/getPictureValidate*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/user/getPictureValidate  
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      



***       


######8.0接口功能
获取到期后订单的处理情况页面（不详细）

###### URL

   *+    options/setPushSwitch*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ options/setPushSwitch
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      


***       


######8.1接口功能
绑定手机（不详细）

###### URL

   *+     options/bindingMobile*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ options/bindingMobile
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}




***       


######8.2接口功能
获取银行卡列表（不详细）

###### URL

   *+    options/getPageHistoryInfo*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/options/getPageHistoryInfo
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      


***       


######8.3接口功能
购买标记（不详细）

###### URL

   *+    options/getPageHistoryInfo*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ zftPay/zftFastPayToke
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      


***
      
      
######8.4接口功能
活期抢购（不详细）

###### URL

   *+    zftPay/zftHouFastPayToken*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/zftPay/zftHouFastPayToken
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      


***
      
      
######8.5接口功能
支付通充值（不详细）

###### URL

   *+    zftPay/zftRecharge*

###### 支持格式
 JSON

###### HTTP请求方式
POST
      例如这样  http://test2.houbank.net/ zftPay/zftRecharge
           
###### 请求参数
无



###### 返回字段
> 返回字段|字段类型|说明       |
|:-----   |:------|:-----------------------------   |	
resmsg                         |string  |"success"
rescode                        |string  |"00000"
resmsg_cn                   |string  |""



###### 返回json示例
> 
          返回html 
      json:{"resmsg":"success","rescode":"00000","resmsg_cn":""}
      
      







                









        
                    
                                            