var flatten = function(root) {
    if(root == null)return
    if(root.left)flatten(root.left)
    if(root.right)flatten(root.right)

    if(root.left && root.right == null){
        root.right = root.left
        root.left = null
    }
    if(root.left && root.right){
        let i = root.left
        while(i.right){
            i = i.right
        }
        i.right = root.right
        root.right = root.left
        root.left = null
    }
}