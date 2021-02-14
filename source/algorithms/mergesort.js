export function mergeSort(arr, forDelivery)
{
    let helperArr = [...arr];
    helperMergeSort(helperArr, 0, helperArr.length, forDelivery);
}

function helperMergeSort(arr, left, right, forDelivery)
{
    if (left + 1 < right)
    {
        let mid = Math.floor((left + right) / 2);

        helperMergeSort(arr, left, mid, forDelivery);
        helperMergeSort(arr, mid, right, forDelivery);
        merge(arr, left, right, mid, forDelivery);
    }
}

/* Less efficient because it needs to be visualisable. */
function merge(arr, left, right, mid, forDelivery)
{
    let leftIndex = left,
        rightIndex = mid;

    while (leftIndex < rightIndex && rightIndex < right)
    {
        /* Swap arr[rightIndex] into position at leftIndex and shuffle everything else forward. */
        if (arr[leftIndex] >= arr[rightIndex])
        {
            const swapElement = arr[rightIndex];

            for (let i = rightIndex; i > leftIndex; i--)
                arr[i] = arr[i - 1];
            
            arr[leftIndex] = swapElement;
            ++rightIndex;

            forDelivery.push([...arr]);
        }
        ++leftIndex;
    }
}
