var isSubsequence = function(s, t) {
    var i = 0,res = ""
    for(let j = 0;j<t.length;j++){
        if(s.charAt(i) == t.charAt(j)){
            res += s.charAt(i)
            i++
        }
    }
    return res == s
};