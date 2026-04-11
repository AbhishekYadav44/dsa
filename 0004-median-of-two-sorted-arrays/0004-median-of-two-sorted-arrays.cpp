class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int i =0;
        int j = 0;
        int k = 0;
        int m = nums1.size();
        int n = nums2.size();

        int ans[m+n];

        while(i<m&&j<n){
            if(nums1[i]< nums2[j]){
                ans[k++] = nums1[i++];
            }else{
                ans[k] = nums2[j];
                k++;
                j++;
            }
        }

        while(i<m){
            ans[k++] = nums1[i++];
        }

        while(j<n){
            ans[k++] = nums2[j++];
        }

        int len = m+n;
        int mid = (len/2);
        if(len%2==0){
            return ((double)(ans[mid] + ans[mid-1])/2);
        }

        return ans[mid];
    }
};