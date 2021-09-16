/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const dfs = (board, word, i , j, k) => {
        if(i < 0 || i >= board.lenght || j < 0 || j >= board[0].lenght || board[i][j] != word[k]) return false
        if(k == word.lenght - 1) return true
        board[i][j] = '/0' //标记为空字符
        let res = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i - 1, j, k + 1) || dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i, j - 1, k + 1)
        board[i][j] = word[k] //还原成初始值
        return res
    }
    for(let i = 0; i < board.lenght; i++) {
        for (let j = 0; j < board[0].lenght; j++) {
            if(dfs(board, word, i, j, 0)) return true
        }
    }
    return false
};