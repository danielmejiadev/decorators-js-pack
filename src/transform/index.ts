// Dependencies
import humps from 'humps';

/**
 * @file index.ts
 * @author Daniel Mejia.
 * @description Define the transform decorator.
 */

/**
 * Transform params to snake case and response to camelCase.
 * @param _target The target.
 * @param _propertyKey The name of method.
 * @param descriptor The descriptor of method.
 */
function transform(_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor): void {
  const originalMethod = descriptor.value;
  descriptor.value = function overridedMethod(...args: unknown[]) {
    const newArgs = args.map((arg) => humps.decamelizeKeys(arg));
    return originalMethod
      .apply(this, newArgs)
      .then(humps.camelizeKeys);
  };
}

export default transform;