/* Bubble the larger ELements to the end
The second loop hence starts from 0 to length-i because 
i elements are already present at the end*/
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<(arr.length-i);j++)
    {
        if(arr[j]>arr[j+1])
        {
            let small=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=small;
        }
    }
}
