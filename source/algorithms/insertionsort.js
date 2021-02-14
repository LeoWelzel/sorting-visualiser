export function insertionSort(arr, forDelivery)
{
    let helperArr = [...arr];
    helperInsertionSort(helperArr, forDelivery);
}

function helperInsertionSort(arr, forDelivery)
{
    for (let i = 1; i < arr.length; i++)
    {
        let j = i;

        while (j > 0 && arr[j - 1] > arr[j])
        {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
            forDelivery.push([...arr]);
        }
    }
}