import { createSlice } from "@reduxjs/toolkit";

export const persons = createSlice({
    name: "persons",
    initialState: {
        personData: {
            name: '',
            last_name: '',
            patronymic: '',
            attendance: false,
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
                state.personData['attendance'] = action.payload.attendance;
                state.personData['company'] = action.payload.company;
                state.personData['group'] = action.payload.group;
                state.personsList.push(state.personData);
                persons.caseReducers.updateAttendance(state);
            }
        },
        updatePerson: (state, action) => {//передаётся index, ['name','attendance'],name:'', attendance:'', company:'', group:'',
            action.payload.case.forEach((field) => {
                switch (field) {
                    case 'name': {
                        state.personData['name'] = action.payload.name;
                        break;
                    }
                    case 'attendance': {
                        if (state.personData['attendance'] != action.payload.attendance) {
                            state.personData['attendance'] = action.payload.attendance;
                            persons.caseReducers.updateAttendance(state);
                        }
                        break;
                    }
                    case 'company': {
                        state.personData['company'] = action.payload.company;
                        break;
                    }
                    case 'group': {
                        state.personData['group'] = action.payload.group;
                        break;
                    }
                }
            })
            state.personsList[action.payload.index - 1] = state.personData;
        },
        deletePerson: (state, action) => {
            state.personsList.splice(action.payload.index - 1, 1);
        },
        updateAttendance: (state) => {
            if (state.personData['attendance']) {
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
                person.attendance === true ? state.activePersons++ : ''
            });
            state.nonActivePersons = state.personsList.length - state.activePersons;
        }
    }
});
export const { addPerson, updatePerson, deletePerson } = persons.actions;
export default persons.reducer;