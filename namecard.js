/**
 * Created by HBJ_PC on 15-11-16.
 */
//sb变量建立在window对象上
var sb = {
    name : "somebody",
    gender : "male",
    age : 28
};
angular.module("ezstuff",[])
    .directive("ezNamecard",function(){
        return {
            restrict : "E",
            template : "<div class='namecard'>",
            replace : true,
            link : function(scope,element,attrs){
                //读取data属性值，获得变量名，通过eval得到其值
                var sb = eval(attrs.data);

                //填充DOM元素内容
                element.append("<div>name : " + sb.name + "</div>")
                    .append("<div>gender : " + sb.gender + "</div>")
                    .append("<div>age : " + sb.age + "</div>")
            }
        };
    });

