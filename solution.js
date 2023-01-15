function letterCombinations(input_digit) {
  //Complete the function
  let numArr=input_digit.split('');
  let comboArr=[];
  comboArr=combinations(comboArr,numArr);
  return comboArr;
}

function combinations(arr,numArr){
  let lettersArr=['0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  if(numArr.length==0)  return arr;
  let num=Number(numArr[0]);
  numArr.shift();
  let newArr=[];
  if(arr.length==0){
    newArr=lettersArr[num].split("");;
  }else{
    for(let i=0;i<arr.length;i++){
      let letterArr=lettersArr[num].split("");
      for(let j=0;j<letterArr.length;j++){
        newArr.push(arr[i]+letterArr[j]);
      }
    }
  }
  return combinations(newArr,numArr);
}

module.exports = letterCombinations;
