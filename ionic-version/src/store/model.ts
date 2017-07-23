export interface ListsStore {
  lists: [{ id: number, name: string, bgColor: string }],
}
export interface ItemsStore {
  items: [{ listId: number, id: number, status: boolean, name: string, description: string }]
}

export const intitialLists: ListsStore = {
  lists: [
    { id: 1, name: 'Home', bgColor: '#9147A7' },
    { id: 2, name: 'GA', bgColor: '#00A087' },
    { id: 3, name: 'Doggy doggy', bgColor: '#1F81B4' }
  ]
};

export const intitialItems: ItemsStore = {
  items: [{ listId: 1, id: 1, status: false, name: 'test', description: 'test desc' }]
};
