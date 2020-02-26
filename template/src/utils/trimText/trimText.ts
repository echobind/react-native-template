const DEFAULT_MAX_LENGTH = 70;

/**
 * Function to trim a string to a specific length
 * string - input string
 * length - the length to trim the string to
 */
export function trimText(string: string, length: number = DEFAULT_MAX_LENGTH): string {
  return `${string.substring(0, length)}...`;
}
