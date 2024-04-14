//Convert duration ms to minutes:seconds
export const convertDurationInMinutesSeconds = (duration: number) => {
    const totalSeconds = Math.floor(duration / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60
    return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`
}