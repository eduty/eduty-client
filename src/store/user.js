export const state = () => ({
  user: {
    'id': 1,
    'email': 'eduty@eduty.me',
    'name': 'João da Silva',
    'slug': 'joao-da-silva',
    'cpf': null,
    'birth_date': null,
    'city': null,
    'state': null,
    'phone_number': null,
    'campaigns': [
      {
        'id': 1,
        'user_id': 1,
        'course_id': 1,
        'description': 'Quero muita grana',
        'goal': null,
        'current_balance': 5124.63,
        'campaign_media': [
          {
            'kind': 'video',
            'url': 'https://www.youtube.com/watch?v=gMelUKNNKZM',
          },
        ],
        'course': {
          'id': 1,
          'name': 'Arquitetura e Urbanismo',
          'price': '1188.48',
          'semesters': 10,
          'campus': {
            'id': 33,
            'name': 'Araçatuba - SP',
          },
          'institution': {
            'id': 3,
            'name': 'UNICSUL',
            'kind': 'Universidade',
          },
        },
        'payments': [
          {
            'value': '5124.63',
            'user_name': 'João da Silva',
          },
        ],
      },
    ],
  },
})

export const actions = {
  setUser({ commit }, value) {
    return commit('setMe', value)
  },
}

export const mutations = {
  setMe(state, user) {
    state.user = user
  },
}

export const getters = {
  isAuthenticated: state => !!state.user.id,
  campaign: ({ user: campaigns }) => campaigns[0],
}
