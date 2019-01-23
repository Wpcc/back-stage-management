## Element-UI说明文档

### 菜单栏

标签结构：

```vue
<el-row class='tac'>
	<el-col :span='4'>
    	<el-menu default-active="1">  <!--通过该属性确定菜单的默认选择项-->
        	<el-submenu index="1"> <!--证明该菜单下有子菜单-->
                <template>一级菜单</template>  <!--一级菜单名字-->
                <el-menu-item-group> <!--二级菜单分组，可省略-->
                	<el-menu-item>二级菜单</el-menu-item>  <!--子菜单内容-->
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-col>
</el-row>
<!--
index属性是菜单栏用来确认默认选择菜单栏
<el-submenu>标签是表明该标签下有其它标签
<el-memu-item>标签则是实实在在的标签
-->
```

