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