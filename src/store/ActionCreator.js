import * as actionType from './actionType';

export const addNum = (num) => {
	return {
		type: actionType.ADD_NUMB,
		num: num
	}
}

export const clear = () => {
	return {
		type: actionType.CLEAR
	}
}

export const add = () => {
	return {
		type: actionType.ADD
	}
}

export const subtract = () => {
	return {
		type: actionType.SUBSTRACT
	}
}

export const multiply = () => {
	return {
		type: actionType.MYLTIPLY
	}
}

export const divide = () => {
	return {
		type: actionType.DIVIDE
	}
}

export const equals = () => {
	return {
		type: actionType.EQUALS
	}
}

export const decimal = (symb) => {
	return {
		type: actionType.DECIMAL,
		symb
	}
}

