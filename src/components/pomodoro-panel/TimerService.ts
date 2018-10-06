export const SECONDS_PER_MINUTE = 60;

export function formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE);
    const seconds = totalSeconds % SECONDS_PER_MINUTE;

    return `${minutes} : ${seconds}`;
}
