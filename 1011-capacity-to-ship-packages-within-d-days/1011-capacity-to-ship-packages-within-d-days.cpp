class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {
        int mincap = INT_MIN;
        int maxcap = 0;
        for(int i= 0; i<weights.size() ; i++){
            mincap = max(mincap,weights[i]);
            maxcap += weights[i];
        }

        int low  = mincap;
        int high = maxcap;
        while(low<=high){
            int mid = (low+high)/2;
            int reqdays = calcDays(weights,mid);
            if(reqdays > days){
                low = mid+1;
            }else{
                high = mid-1;
            }
        }
        return low;
    }

    int calcDays(vector<int>& wt, int cap){
        int days  = 1;
        int load = 0;

        for(int i =0; i<wt.size(); i++){
            if(load+wt[i] > cap){
                days++;
                load = wt[i];
            }else{
                load  += wt[i];
            }
        }
        return days;
    }
};