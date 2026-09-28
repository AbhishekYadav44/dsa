/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(!head ){
       return head;
    }  

    let temp = head;
    let map = new Map();
    while(temp!=null){
        let newNode = new _Node(temp.val , null, null);
        map.set(temp , newNode);
        temp = temp.next;
    }
    temp = head;

    while(temp!=null){
        let copyNode = map.get(temp);
        copyNode.next = map.get(temp.next) || null;
        copyNode.random = map.get(temp.random) || null;
        temp = temp.next;
    }
    return map.get(head)
};