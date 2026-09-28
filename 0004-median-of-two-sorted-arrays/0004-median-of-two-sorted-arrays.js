/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let k = 0;
    let ans = []
    let m = nums1.length;
    let n = nums2.length;

    while(i<m && j<n){
        if(nums1[i] < nums2[j]){
            ans[k] = nums1[i];
            i++;
            k++;
        }else{
            ans[k] = nums2[j];
            k++;
            j++;
        }
    }
    while(i<nums1.length){
        ans[k] = nums1[i];
        i++;
        k++;
    }
    while(j<nums2.length){
        ans[k] = nums2[j];
        k++
        j++;
    }
    
    let len = ans.length;
    let mid = Math.floor(len/2);
    let midele = ans[mid]
    if(len%2==0){
      return  (ans[mid] + ans[mid-1])/2;
    }

   return ans[mid]
};