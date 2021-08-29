/**
 * @param {string} s
 * @return {string[]}
 */
 var permutation = function (s) {
     var res = new Set();
     var path = [];
     var visited = [];
     dfsHelper([...s], path, res,visited);
     return Array.from(res);
 };
 
 function dfsHelper(arr, path, res,visited) {
     if (arr.length === path.length) { //说明走到底(叶子节点)
         res.add(path.join(''))
         return;
     }
 
     for (let i = 0; i < arr.length; i++) {
         if(visited[i]){
             continue;
         }
         visited[i] = true;
         //进入下一层
         path.push(arr[i]);
         dfsHelper(arr, path, res,visited);
         path.pop();
         visited[i] = false;
     }
 
 }


// 使用 map 保存 s 字符串的字符信息
// 使用 dfs 进行回溯，每一层使用一个临时的 set 进行剪枝，保证每一层的选择的字符不重复
// 当某一层的字符重复，或者字符在 map 中已经用完了，就跳过，否则就进入下一层

// 剑指 Offer 38. 字符串的排列

var permutation2 = function (s) {
    const ret = []
    const map = new Map()
    const len = s.length;
    for (let i = 0; i < len; i++) {
        map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1);
    }
    const dfs = (cur, map) => {
        // 剪枝，保证不重复
        const set = new Set()
        if (cur.length === len) {
            //  已经满了
            return ret.push(cur)
        }
        for (let i = 0; i < len; i++) {
            const temp = s[i]
            if (set.has(temp)) continue
            if (!map.get(temp)) continue
            set.add(temp)
            dfs(cur + s[i], map.set(temp, map.get(temp) - 1))
            map.set(temp, map.get(temp) + 1)
        }
    }
    dfs('', map)
    return ret
};


// 画出递归树，找到状态变量(回溯函数的参数)，这一步非常重要
// 根据题意，确立结束条件
// 找准选择列表(与函数参数相关),与第一步紧密关联
// 判断是否需要剪枝
// 作出选择，递归调用，进入下一层
// 撤销选择

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation3 = function(s) {
    var res=[];
    // 声明一个数组，0代表未被访问，1代表被访问过
    var used=new Array(s.length).fill(0)
    // 字符串排序
    var arr=s.split('').sort()
    backtrack(arr,[],used)
    return res;
    function backtrack(arr,path,used){
        // 结束条件
        if(path.length==arr.length){
            // 注意对路径的拷贝
            var tmp=path.join('')
            res.push(tmp)
            return;
        }
        for(var i=0;i<arr.length;i++){
            if(used[i]==1)continue;
            // 如果和前一个字符相同，并且前一个字符被访问过了
            if(i>0 && arr[i]==arr[i-1] && used[i-1]==1)continue;
            path.push(arr[i]);
            used[i]=1;
            backtrack(arr,path,used);
            path.pop();
            used[i]=0;
        }
    }
};




