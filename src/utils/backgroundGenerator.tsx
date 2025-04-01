/**
 * Generates a random number between min and max (inclusive)
 * @param min - The minimum value
 * @param max - The maximum value
 * @param isInteger - Whether to return an integer or float (default: true)
 * @returns A random number between min and max
 */
export function generateRandomNumberBetween(min: number, max: number, isInteger: boolean = true): number {
    if (isInteger) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      return Math.random() * (max - min) + min;
    }
}


export function generateBackgroundArray() {
    const colors = [
        'bg-blue-500/20',
        'bg-purple-500/20'
    ];

    const width = [
        20,
        30,
        40
    ]

    const minTranslateX = -20;
    const maxTranslateX = 20;

    const minTranslateY = -20;
    const maxTranslateY = 20;

    const backgroundArray = [];

    for(let i = 0; i < 80; i++){
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomWidth = width[Math.floor(Math.random() * width.length)];
        const randomTranslateX = Math.floor(Math.random() * (maxTranslateX - minTranslateX + 1)) + minTranslateX;
        const randomTranslateY = Math.floor(Math.random() * (maxTranslateY - minTranslateY + 1)) + minTranslateY;
        
        const x1 = generateRandomNumberBetween(minTranslateX, maxTranslateX);
        const x2 = generateRandomNumberBetween(minTranslateX, maxTranslateX);
        const y1 = generateRandomNumberBetween(minTranslateY, maxTranslateY);
        const y2 = generateRandomNumberBetween(minTranslateY, maxTranslateY);

        backgroundArray.push({
            translateX: [x1, x2],
            translateY: [y1, y2],
            className: `w-${randomWidth} h-${randomWidth} rounded-full ${randomColor} blur-xl absolute`,
            randomRatioX: Math.random(),
            randomRatioY: Math.random()
        });
    }

    return backgroundArray;
}

