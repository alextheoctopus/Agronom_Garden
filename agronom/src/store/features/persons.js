import { createSlice, current } from "@reduxjs/toolkit";

export const persons = createSlice({
    name: "persons",
    initialState: {
        editingPersonIndex: '',
        personData: {
            name: '',
            presence: false,
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
                console.log(action.payload.presence);
                state.personData['presence'] = action.payload.presence;
                state.personData['company'] = action.payload.company;
                state.personData['group'] = action.payload.group
                state.personsList.push(current(state.personData));
                console.log(JSON.stringify(state.personsList), 'persons');
                persons.caseReducers.updatePresence(state);
            }
        },
        getEditingPersonIndex: (state, action) => {
            state.editingPersonIndex = action.payload;
        },
        updatePerson: (state, action) => {//передаётся index, ['name','presence'],name:'', presence:'', company:'', group:'',
            state.personData['name'] = action.payload.name;
            if (state.personData['presence'] != action.payload.presence) {
                state.personData['presence'] = action.payload.presence;
                persons.caseReducers.updatePresence(state);
            }
            state.personData['company'] = action.payload.company;
            state.personData['group'] = action.payload.group;
            state.personsList[action.payload.index] = state.personData;

            // action.payload.case.forEach((field) => {
            //     switch (field) {
            //         case 'name': {
            //             state.personData['name'] = action.payload.name;
            //             break;
            //         }
            //         case 'presence': {
            //             if (state.personData['presence'] != action.payload.presence) {
            //                 state.personData['presence'] = action.payload.presence;
            //                 persons.caseReducers.updatePresence(state);
            //             }
            //             break;
            //         }
            //         case 'company': {
            //             state.personData['company'] = action.payload.company;
            //             break;
            //         }
            //         case 'group': {
            //             state.personData['group'] = action.payload.group;
            //             break;
            //         }
            //     }
            // })
            // state.personsList[action.payload.index] = state.personData;
        },
        deletePerson: (state, action) => {
            state.personsList.splice(action.payload.index - 1, 1);
        },
        updatePresence: (state) => {
            if (state.personData['presence']) {
                state.activePersons++;
                state.nonActivePersons--;
            } else {
                state.activePersons--;
                state.nonActivePersons++;
            }
        },
        activeCount: (state) => {
            //вызывать единожды при начальной отрисовке страницы
            state.personsList.forEach((person) => {
                if (person.presence === true) state.activePersons++
            });
            state.nonActivePersons = state.personsList.length - state.activePersons;
        }
    }
});
export const { addPerson, updatePerson, deletePerson, getEditingPersonIndex } = persons.actions;
export default persons.reducer;