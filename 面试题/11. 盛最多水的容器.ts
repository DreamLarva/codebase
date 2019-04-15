/*
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。



图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。



示例:

输入: [1,8,6,2,5,4,8,3,7]
输出: 49
* */

/*容积一定是短的一端乘以两个线段之间的距离
* 默认从连个线段最远的情况开始考虑
* 计算容积之后 短的那一端向长的那一端移动一格
* !!若果端相等 该如何判断哪段移动?
* 不需要判断 任意一端移动即可 因为如果在x轴上的距离缩短却要容积变大 就必须两端都比现有的线段长 这并不会有因为移动哪一端而改变
* 直到两个线段重合 计算结束*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height: number[]) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    let tVolume = 0;
    while (left !== right) {
        tVolume = Math.min(height[left], height[right]) * (right - left);
        if (tVolume > result) {
            result = tVolume
        }
        Math.min(height[left], height[right]);
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return result
};
