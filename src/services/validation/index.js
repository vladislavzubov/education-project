export function composeValidators(...validators) {
  return (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )
}

export function validateEmail(value) {
  return value.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? undefined
    : 'Enter correct Email'
}

export function required(value) {
  return value ? undefined : 'Required'
}

export function minLength(value = '') {
  return value.split('').length < 6 ? 'Input at min 6 symbol' : undefined
}

export function haveOneUppercase(value = '') {
  return value.match(/[A-Z]/g) === null
    ? 'At least one uppercase letter is required'
    : undefined
}

export function haveOneNumeral(value = '') {
  return value.replace(/\D+/g, '') === ''
    ? 'At least one digit is needed'
    : undefined
}

export function haveNotChar(value = '') {
  return value.match(/[a-z]/g) || value.match(/[A-Z]/g) !== null
    ? 'Enter only numbers'
    : undefined
}

export function minAge(value = '') {
  return Number(value) > 10 && Number(value) < 120
    ? undefined
    : 'Enter the correct age'
}

// export function similarPassword(value = '') {
//   console.log(value.replace(), passwordRegist())
//   return value.replace() !== passwordRegist
//     ? "passwords don't match"
//     : undefined
// }

export function passwordRegist(value = '') {
  console.log(value)
  return value.replace()
}
// export function passwordRegist(value) {
// console.clear()
// console.log(value)
// return  value.match(/[a-z]/g) || value.match(/[A-Z]/g) !== null
// ? 'enter only numbers'
// : undefined
// }

export function similarPassword(value = '') {
  console.log(value)
  return value.replace() !== passwordRegist()
    ? "passwords don't match"
    : undefined
}
