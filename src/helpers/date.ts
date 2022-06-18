export const formatDate = (date: string): string| undefined => (new Date(date).toLocaleDateString()
);

export default formatDate;
