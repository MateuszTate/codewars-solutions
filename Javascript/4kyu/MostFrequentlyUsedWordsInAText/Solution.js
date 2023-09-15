function topThreeWords(text) {
    text = text.replace(/\n/g, ' ');
    const words = text
        .match(/\b[a-zA-Z']+\b/g) || [];
    const lowercasedWords = words.map(word => word.toLowerCase());

    if (lowercasedWords.length === 0) {
        return [];
    }

    const wordCount = {};
    for (let word of lowercasedWords) {
        if (word in wordCount) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    const wordCountArray = Object.entries(wordCount);
    wordCountArray.sort((a, b) => b[1] - a[1]);
    const resultArray = wordCountArray.slice(0, 3).map(pair => pair[0]);

    return resultArray;
}
