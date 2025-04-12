import { makeAutoObservable } from "mobx";

type hobbiesList = {
    id: number,
    name: string,
}[]

class HobbyStore {
    hobbiesList:hobbiesList = [];
    nextId = 1;

    constructor() {
        makeAutoObservable(this)
    }

    addHobby(newHobby: string) {
        this.hobbiesList = [...this.hobbiesList, {id: this.nextId, name: newHobby}];
        this.nextId++;
    }

    deleteHobby(id: number) {
        this.hobbiesList.filter(hobbyItem => hobbyItem.id !== id);
    }

    editHobby(id: number, newHobby: string) {
        const hobbyToEdit = this.hobbiesList.find(hobby => hobby.id === id);

        if (hobbyToEdit) {
            hobbyToEdit.name = newHobby;
        }
    }
}

export const hobbyStore = new HobbyStore();