export function heapSort(arr, forDelivery)
{
    let helperArr = [...arr];
    helperHeapSort(helperArr, forDelivery);
}

function helperHeapSort(arr, forDelivery)
{
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--)
        produceHeap(arr, arr.length, i, forDelivery);

    for (let i = arr.length - 1; i > 0; i--)
    {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        forDelivery.push([...arr]);
        produceHeap(arr, i, 0, forDelivery);
    }
}

function produceHeap(arr, length, i, forDelivery)
{
    let largest = i,
        left = 2 * i + 1,
        right = 2 * i + 2;

    if (left < length && arr[largest] < arr[left])
        largest = left;

    if (right < length && arr[largest] < arr[right])
        largest = right;

    if (largest != i)
    {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        forDelivery.push([...arr]);
        produceHeap(arr, length, largest, forDelivery);
    }
}
