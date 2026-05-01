class Solution {
public:
    string largestOddNumber(string num) {
      int p = num.length() - 1;

      while(p>=0){
        int dig  =  int(num[p]) - '0';
        if(dig%2 == 0){
            p--;
        }else{
            return num.substr(0,p+1);
        }
      }
      return "";

    }
};