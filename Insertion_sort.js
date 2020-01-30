/*
i=1 because first element at arr[0] is considered as sorted, but j=i-1 for shifting purpose
Insertion sort has a sorted sub-array and unsorted sub-array,
where first element is considered sorted initially, then the first element in 
unsorted sub-array is taken and compared with the sorted array to find out its position,
after the position is found out, elements are shifted one position to the right, shown in while loop

*/
for(let i=1;i<arr.length;i++)
{
    element=arr[i];
    j=i-1;
    while(j>=0 && arr[j]>element)
    {
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=element;
}
