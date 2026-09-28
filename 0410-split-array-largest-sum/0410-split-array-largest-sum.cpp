class Solution {
public:
    
     int Calcpartitions(vector<int>& nums , int maxsum) {
            int partitions = 1;
            int subarraysum = 0;

            for(int i = 0; i<nums.size() ; i++){
                int num = nums[i];

                if(subarraysum + num <= maxsum){
                    subarraysum += num;
                }else{
                    partitions++;
                    subarraysum = num;
                }
            }
            return partitions;
        }

    int splitArray(vector<int>& nums, int k) {

        int low = *max_element(nums.begin(), nums.end());
        int high = accumulate(nums.begin(), nums.end(), 0);
        while(low<=high){
            int mid = (low+high)/2;
            int partitions = Calcpartitions(nums,mid);
            if(partitions > k){
                low  = mid+1;
            }else{
                high = mid-1;
            }
        }
        return low;

    }


};