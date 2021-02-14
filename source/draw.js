export class Draw
{
    constructor(canvas, context, heightFraction = 0.6, widthFraction = 0.6, barFraction = 0.8)
    {
        this.canvas = canvas;
        this.context = context;

        this.widthFraction = widthFraction;
        this.usableWidth = widthFraction * this.canvas.width;
        this.usableHeight = heightFraction * this.canvas.height;

        this.barFraction = barFraction;
    }

    // TODO: optimise all these calculations
    draw(values)
    {
        const blockWidth = this.usableWidth / values.length,
            barWidth = this.barFraction * blockWidth;

        /* The distance along from the start of a block where we start drawing a bar. */
        const barOffset = blockWidth * (1 - this.barFraction) / 2,
            startingXCoord = this.canvas.width * (1 - this.widthFraction) / 2;

        let max = -1;

        for (let i = 0; i < values.length; i++)
            if (values[i] > max)
                max = values[i];

        const heightMultiplier = this.usableHeight / max;

        for (let i = 0; i < values.length; i++)
            this.context.fillRect(
                startingXCoord + i * blockWidth + barOffset,
                0,
                barWidth,
                values[i] * heightMultiplier
            );
    }
}