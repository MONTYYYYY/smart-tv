/* eslint-disable import/prefer-default-export */
type ASC = 'ASC';
type DESC = 'DESC';
export const sortBy = (collection: {}[], key: string, direction : ASC | DESC) : any[] => collection.slice().sort((a:any, b:any) => ((direction === 'ASC' ? a[key] > b[key] : b[key] > a[key]) ? 1 : -1));
