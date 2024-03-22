export const formatBytes = (bytes: number) => {
    const marker = 1024;
    const decimal = 2;
    const kiloBytes = marker;
    const megaBytes = marker * marker;
    const gigaBytes = marker * marker * marker;

    if (bytes < kiloBytes) {
        return bytes + ' Bytes';
    } else if (bytes < megaBytes) {
        return (bytes / kiloBytes).toFixed(decimal) + ' KB';
    } else if (bytes < gigaBytes) {
        return (bytes / megaBytes).toFixed(decimal) + ' MB';
    } else {
        return (bytes / gigaBytes).toFixed(decimal) + ' GB';
    }
};
