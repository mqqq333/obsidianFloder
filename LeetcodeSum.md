## LCR 006. 两数之和 II - 输入有序数组
~~~c
/**

 * Note: The returned array must be malloced, assume caller calls free().

 */

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
	int* ret = malloc(sizeof(int) * 2);
	int left = 0;
	int right = numsSize - 1;
	while(left < right)
	{
		if (nums[left] + nums[right] == target)
		{
			ret[0] = left;
			ret[1] = right;
			*returnSize = 2;
			return ret;
		}
		if(nums[left] + nums[right] > target)
		{
			right = right - 1;
		}
		else
		{
			left = left + 1;
		}
	}
	*returnSize = 0; 
	return NULL;
}
~~~

~~~python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
    # Time Complexity O(n)
    # Space Complexity O(1) 
        left = 0
        right = len(numbers) - 1

        while left < right:

            if numbers[left] + numbers[right] == target:

                return [left, right]

            elif numbers[left] + numbers[right] < target:

                left = left + 1

            else:

                right = right - 1
~~~

## 15.三数之和
~~~ python
class Solution:

    def threeSum(self, nums: List[int]) -> List[List[int]]:
    nums.sort()
    ans = []
    n = len
       
~~~