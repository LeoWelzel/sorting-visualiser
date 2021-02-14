export function bubbleSort(arr, forDelivery)
{
    let helperArr = [...arr];
    helperBubblesort(helperArr, forDelivery);
}

function helperBubblesort(arr, forDelivery)
{
    let sorted = false;
    let i = arr.length;

    forDelivery.push([...arr]);

    while (!sorted && i > 0)
    {
        sorted = true;

        for (let j = 0; j < i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                sorted = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                forDelivery.push([...arr]);
            }
        }

        i--;
    }
}