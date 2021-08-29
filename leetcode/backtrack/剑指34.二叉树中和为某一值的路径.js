
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
* @param {TreeNode} root
* @param {number} target
* @return {number[][]}
*/
var pathSum = function(root, target) {
    if(!root) return []
    let res = []
    const dfs = (node, path, target) => {
        if(!node) return //当前节点为叶子节点，结束递归
        path.push(node.val) // 选择
        if(!node.left && !node.right && node.val == target) { // 判断
            res.push([...path])
        } else {
            dfs(node.left, path, target - node.val) //递归，进入下一层
            dfs(node.right, path, target - node.val)
        }
        path.pop() //撤销选择
    }
    dfs(root, [], target)
    return res
};