 function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();//try to find 'a'  in y but it can not, from lecsical scope of java script go to parent of y and find a 
}
x(); 
//clouser is combination function dundled to gether wiht  its 'lexical envornment' and forms a clouser
