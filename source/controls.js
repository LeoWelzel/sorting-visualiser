let toggleButton = document.getElementById('toggleExecution');

export function selectedAlgorithmChoice(app)
{
    $('#algoChoice li').on('click', function()
    {
        let choice = $(this).text();
        app.choseSort(choice);
        assignToggleButtonText(app);
        toggleButton.disabled = false;
    });
}

export function newArray(app)
{
    $('#newArray').on('click', function()
    {
        app.newArray();
        assignToggleButtonText(app);
    });
}

export function toggleSorting(app)
{
    $('#toggleExecution').on('click', function()
    {
        app.toggleSorting();
        assignToggleButtonText(app);
    });
}

export function onResize(app)
{
    $(window).on('resize', function()
    {
        app.adjustCanvasDimensions();
        console.log("Adjusting");
    })
}

function assignToggleButtonText(app)
{
    if (app.currentSortAlgorithm)
        toggleButton.innerHTML = (app.running ? "Pause " : "Run ") + app.currentSortAlgorithm;
}
