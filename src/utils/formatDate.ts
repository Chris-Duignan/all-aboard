export const formatDate = (dateStr:string): string => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-GB");
}