import { createSlice, current } from "@reduxjs/toolkit";

export const persons = createSlice({
    name: "persons",
    initialState: {
        editingPersonIndex: '',
        personData: {
            name: '',
            presence: '',
            company: '',
            group: '',
        },
        personsList: [],
        activePersons: 0,
        nonActivePersons: 0
    },
    reducers: {
        addPerson: (state, action) => {
            if (action.payload) {
                state.personData['name'] = action.payload.name;
                state.personData['presence'] = action.payload.presence;
                state.personData['company'] = action.payload.company;
                state.personData['group'] = action.payload.group
                state.personsList.push(current(state.personData));
            }
        },
        getEditingPersonIndex: (state, action) => {
            state.editingPersonIndex = action.payload;
        },
        updatePerson: (state, action) => {
            state.personData['name'] = action.payload.name;
            if (state.personData['presence'] != action.payload.presence) {
                if (action.payload.presence) {
                    state.activePersons++;
                    state.nonActivePersons--;
                } else {
                    state.activePersons--;
                    state.nonActivePersons++;
                }
                state.personData['presence'] = action.payload.presence;
            }
            state.personData['company'] = action.payload.company;
            state.personData['group'] = action.payload.group;
            state.personsList[action.payload.index] = state.personData;
        },
        deletePerson: (state, action) => {
            state.personsList.splice(action.payload.index, 1);
            persons.caseReducers.activeCount(state);
        },
        activeCount: (state) => {
            let active = 0;
            let nonActive = 0;
            state.personsList.forEach((person) => {
                if (person.presence === true) { active++ }
                else {
                    nonActive++;
                }
            });
            state.activePersons = active;
            state.nonActivePersons = nonActive;

        }
    }
});
export const { addPerson, updatePerson, deletePerson, getEditingPersonIndex, activeCount } = persons.actions;
export default persons.reducer;