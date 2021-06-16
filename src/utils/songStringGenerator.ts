const songStringGenerator = (arr: string[]): string => {

    let output: string = ``;

    arr.forEach((item) => {
        if(item) {
            output = output.concat(`${item}, `)
        }
    })

    if(!output.length) {
        return `You haven't specified your favourite Rammstein songs yet. Click on "Change" to add them.`
    }
    return output.slice(0, -2);

}

export default songStringGenerator;