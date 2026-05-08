/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let GP = dummy;
    while(true){
        let kth = getKthNode(GP,k);
        if(!kth) break;
        let GN = kth.next;
        let prev = GN;
        let curr = GP.next;

        for(let i=0; i<k; i++){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let temp = GP.next;
        GP.next = kth;
        GP = temp;
    }
    return dummy.next;
};

let getKthNode = function(curr,k){
    while(curr!=null && k>0){
        curr = curr.next;
        k--;
    }
    return curr;
}