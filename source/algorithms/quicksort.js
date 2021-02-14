export function quickSort(arr, forDelivery)
{
    let helperArr = [...arr];
    helperQuickSort(helperArr, 0, helperArr.length, forDelivery);
}

function helperQuickSort(arr, left, right, forDelivery)
{
    if (left < right)
    {
        const pivotIndex = partition(arr, left, right, forDelivery);
        helperQuickSort(arr, left, pivotIndex, forDelivery);
        helperQuickSort(arr, pivotIndex + 1, right, forDelivery);
    }   
}

function partition(arr, left, right, forDelivery)
{
    const pivot = arr[left];

    let i = left + 1,
        j = right;

    while (i < j)
    {
        if (arr[i] < pivot)
            ++i;
        else
        {
            if (i != j - 1)
            {
                [arr[i], arr[j - 1]] = [arr[j - 1], arr[i]];
                forDelivery.push([...arr]);
            }
            j--;
        }
    }

    if (left != i - 1)
    {
        [arr[left], arr[i - 1]] = [arr[i - 1], arr[left]];
        forDelivery.push([...arr]);
    }
    
    return i - 1;
}
