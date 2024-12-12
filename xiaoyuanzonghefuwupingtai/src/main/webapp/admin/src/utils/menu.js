const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"资讯类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGongao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"商品类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGoods"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"物品类型名称管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShiwuzhaoling"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"校园资讯管理",
                        "menuJump":"列表",
                        "tableName":"gongao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"校园资讯评论管理",
                        "menuJump":"列表",
                        "tableName":"gongaoLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"校园资讯收藏管理",
                        "menuJump":"列表",
                        "tableName":"gongaoCollection"
                    }
                ],
                "menu":"校园资讯管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品管理",
                        "menuJump":"列表",
                        "tableName":"goods"
                    }
                    // ,
                    // {
                    //     "buttons":[
                    //         "查看",
                    //         "修改",
                    //         "删除"
                    //     ],
                    //     "menu":"商品评价管理",
                    //     "menuJump":"列表",
                    //     "tableName":"goodsCommentback"
                    // }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"商品订单管理",
                        "menuJump":"列表",
                        "tableName":"goodsOrder"
                    }
                ],
                "menu":"商品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"失物招领管理",
                        "menuJump":"列表",
                        "tableName":"xiaoyuanshiwuzhaoling"
                    }
                    // ,
                    // {
                    //     "buttons":[
                    //         "查看",
                    //         "修改",
                    //         "删除"
                    //     ],
                    //     "menu":"失物招领评论管理",
                    //     "menuJump":"列表",
                    //     "tableName":"xiaoyuanshiwuzhaolingLiuyan"
                    // }
                ],
                "menu":"失物招领管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"失物认领管理",
			            "menuJump":"列表",
			            "tableName":"shiwurenling"
			        }
			    ],
			    "menu":"失物认领管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
]
    }
}
export default menu;
