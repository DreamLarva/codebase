/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (52.38%)
 * Total Accepted:    43.6K
 * Total Submissions: 83.3K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const arr = [];
     while(l1.next !== null || l2.next !== null){
         if(l1.next === null){
             arr.push(l2.val);
             l2 = l2.next;
         }
         if(l2.next === null){
             arr.push(l1.val);
             l1 = l1.next;
         }

         if(l1.val < l2.val){
             arr.push(l1.val);
             l1 = l1.next;
         }else{
             arr.push(l2.val);
             l2 = l2.next;
         }
     }

     return create_Linked_list(arr);
};

function create_Linked_list(arr){
    const root =  new ListNode(arr.shift());
    let cur = root;
    let temp;
    for(const v of arr){
        temp = new ListNode(v);
        cur.next = temp;
        cur = temp;
    }
    return root
}



function ListNode(val) {
    this.val = val;
    this.next = null;
}




