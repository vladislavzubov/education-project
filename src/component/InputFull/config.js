import { composeValidators } from '../../services/validation'

export function validateProps(validate) {
  return composeValidators.apply(null, validate)
}
