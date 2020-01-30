/*Selection sort selects the smallest element and
brings it to the first index.
That is the reason the second 'for' loop starts 
from i+1 to length of array.
The smallest elements would be at the first i positions.
*/
arr=[4,8,5,3,1,7,0,2];
minidx=0;
for(let i=0;i<arr.length;i++)
{
    minidx=i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[minidx]>arr[j])
            minidx=j;
    }
    if(i!=minidx)
    {
        let small=arr[minidx];
        arr[minidx]=arr[i];
        arr[i]=small;
    }
}
