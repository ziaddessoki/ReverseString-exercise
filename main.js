function reverse(str){
  let revArr =[]
  let  index = str.length-1
  for(let i=index;i>=0;i--){
    revArr.push(str[i])
  }return revArr.join('')
}
