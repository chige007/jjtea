$(function(){
    var map = new BMap.Map("map");          // 创建地图实例  
    var point = new BMap.Point(113.302038, 23.1617);  // 创建点坐标  
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别    

    map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));        
    map.addControl(new BMap.NavigationControl());     
    map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}));  

    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    
    // var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
    //                 '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    //                 '地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
    //               '</div>';
    // var searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    //     title  : "XXX将军擂茶",      //标题
    //     width  : 290,             //宽度
    //     height : 105,              //高度
    //     panel  : "panel",         //检索结果面板
    //     enableAutoPan : true,     //自动平移
    //     searchTypes   :[
    //         BMAPLIB_TAB_SEARCH,   //周边检索
    //         BMAPLIB_TAB_TO_HERE,  //到这里去
    //         BMAPLIB_TAB_FROM_HERE //从这里出发
    //     ]
    // });
    // marker.addEventListener("click", function(e){
	//     searchInfoWindow.open(marker);
    // });
    // map.addOverlay(marker);               // 将标注添加到地图中
    // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
});