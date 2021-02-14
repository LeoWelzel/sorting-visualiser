export function cocktailShakerSort(arr, forDelivery)
{
    let helperArr = [...arr];
    helperCocktailShakerSort(helperArr, forDelivery);
}

/* Quickly coded because arrays are presorted anyway. */
function helperCocktailShakerSort(arr, forDelivery)
{
    let sorted = false;

    while (!sorted)
    {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++)
            if (arr[i + 1] < arr[i])
            {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
                sorted = false;
                forDelivery.push([...arr]);
            }

        if (sorted)
            return;

        sorted = true;

        for (let i = arr.length - 2; i >= 0; i--)
            if (arr[i + 1] < arr[i])
            {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
                sorted = false;
                forDelivery.push([...arr]);
            }
    }
}
