import data from '../data/state.json'

// Получение списка контактов
export const getContactsApi = () => {
	return new Promise(resolve => {
		setTimeout(() => resolve({data}), 2000)
	})
}
