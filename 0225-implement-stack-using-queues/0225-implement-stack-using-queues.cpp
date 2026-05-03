class MyStack {
public:
queue<int> q1,q2;
    MyStack() {
      
    }
    
    void push(int x) {
        q1.push(x);
    }
    
    int pop() {
        int n = q1.size();

        for(int i=0; i<n-1;i++){
            int val = q1.front();
             q1.pop();
             q2.push(val);
           
            
        }
        int ans = q1.front();
        q1.pop();
         q2.push(ans);
        
        queue<int> temp = q1;
        q1 = q2;
        q2 = temp;
        
        return ans;
    }
    
    int top() {
      int n = q1.size();

      for(int i=0;i<n-1;i++){
          int val = q1.front();
             q1.pop();
             q2.push(val);
      }  
        int ans = q1.front();
        q1.pop();
         q2.push(ans);
      queue<int> temp = q1;
      q1=q2;
      q2=temp;
      return ans;
    }
    
    bool empty() {
        return q1.size() > 0 ? false : true;
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */