/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next)return head;
    let arr = [];

    let curr = head;
    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }
    arr.sort((a,b)=> a-b)
    let  newhead = new ListNode(arr[0]);
     curr = newhead;
    for(let i=1; i<arr.length;i++){
          curr.next = new ListNode(arr[i]);
          curr = curr.next;
    }
    return newhead;
};