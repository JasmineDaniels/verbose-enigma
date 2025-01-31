#Solution attempt 1:
class Solution:
    def reverse(self, x: int) -> int:
        ##Turn integer into string to iterate through and reverse string using slice method.
        s = str(x)
        res = s[::-1]
        return(int(res))
        #does not handle negative numbers
#final Solution
class Solution:
    def reverse(self, x: int) -> int:
        #Turn integer into string to iterate through and reverse string using slice method.
        is_neg = x < 0
        a = abs(x)
        rev = int(str(a)[::-1])
        #if negative add negative
        if is_neg:
            rev = -rev
        #remove 32 bit integer range
        if rev <= -2147483648 or rev >= 2147483647:
            return 0
        return rev
