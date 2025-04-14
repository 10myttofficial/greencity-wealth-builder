
/**
 * Type assertion utility for safely accessing potentially undefined properties 
 * from objects returned from the database that may not have updated typings.
 */
export function safeAccess<T extends Record<string, any>, K extends string>(
  obj: T, 
  key: K, 
  fallback: any = ''
): any {
  // This function helps handle cases where DB schema and TypeScript types are out of sync
  try {
    return obj[key as keyof T] !== undefined && obj[key as keyof T] !== null
      ? obj[key as keyof T]
      : fallback;
  } catch (error) {
    console.error(`Error accessing ${String(key)} from object:`, error);
    return fallback;
  }
}
