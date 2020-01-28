const initialState = {
  projects: [
    { id: 1, title: 'Create Angular project', content: 'bla bla ' },
    { id: 2, title: 'Create Vue project', content: 'bla bla ' },
    { id: 3, title: 'Create React project', content: 'bla bla ' }
  ]
}
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      const newProjects = [action.project, ...state.projects]
      return {
        projects: newProjects
      }
    default:
      return state
  }
}

export default projectReducer
